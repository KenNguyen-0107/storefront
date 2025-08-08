import { apiRoot } from "@/app/lib/commercetools/provider/rest-client";
import type {
  Order,
  OrderPagedQueryResponse,
  OrderUpdateAction,
} from "@commercetools/platform-sdk";
import {
  APIError,
  ErrorCode,
  createError,
} from "@/app/lib/commercetools/utils/error.utils";
import type { IOrderService } from "@/app/lib/commercetools//interfaces/order-service.interface";
import type {
  CreateOrderFromCartRequest,
  OrderUpdateRequest,
  OrderQueryOptions,
} from "@/app/lib/commercetools/models/order.model";

export class OrderService implements IOrderService {
  async createOrderFromCart(
    request: CreateOrderFromCartRequest,
  ): Promise<Order> {
    if (!request.id) {
      throw new APIError(
        "Cart ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await apiRoot
        .orders()
        .post({
          body: {
            id: request.id,
            version: request.version,
            orderNumber: request.orderNumber,
            paymentState: request.paymentState,
            shipmentState: request.shipmentState,
            orderState: request.orderState,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error creating order from cart:", error);

      if (error instanceof Error && error.message.includes("OutOfStock")) {
        throw new APIError(
          "Some items in your cart are no longer available",
          ErrorCode.API_REQUEST_FAILED,
        );
      }

      if (error instanceof Error && error.message.includes("PriceChanged")) {
        throw new APIError(
          "Prices have changed since you added items to cart",
          ErrorCode.API_REQUEST_FAILED,
        );
      }

      throw createError(error);
    }
  }

  async getOrders(
    options: OrderQueryOptions = {},
  ): Promise<OrderPagedQueryResponse> {
    const {
      limit = 20,
      offset = 0,
      sort = ["createdAt desc"],
      filters = {},
      expand = [],
    } = options;

    // Apply filters
    const whereQueries: string[] = [];

    if (filters.customerId) {
      whereQueries.push(`customerId="${filters.customerId}"`);
    }

    if (filters.customerEmail) {
      whereQueries.push(`customerEmail="${filters.customerEmail}"`);
    }

    if (filters.orderNumber) {
      whereQueries.push(`orderNumber="${filters.orderNumber}"`);
    }

    if (filters.orderState) {
      whereQueries.push(`orderState="${filters.orderState}"`);
    }

    if (filters.paymentState) {
      whereQueries.push(`paymentState="${filters.paymentState}"`);
    }

    if (filters.shipmentState) {
      whereQueries.push(`shipmentState="${filters.shipmentState}"`);
    }

    if (filters.store) {
      whereQueries.push(`store(key="${filters.store}")`);
    }

    if (filters.createdAt) {
      if (filters.createdAt.from) {
        whereQueries.push(`createdAt >= "${filters.createdAt.from}"`);
      }
      if (filters.createdAt.to) {
        whereQueries.push(`createdAt <= "${filters.createdAt.to}"`);
      }
    }

    if (filters.totalPrice) {
      if (filters.totalPrice.min !== undefined) {
        whereQueries.push(
          `totalPrice.centAmount >= ${filters.totalPrice.min * 100}`,
        );
      }
      if (filters.totalPrice.max !== undefined) {
        whereQueries.push(
          `totalPrice.centAmount <= ${filters.totalPrice.max * 100}`,
        );
      }
      if (filters.totalPrice.currency) {
        whereQueries.push(
          `totalPrice.currencyCode="${filters.totalPrice.currency}"`,
        );
      }
    }

    const queryBuilder = apiRoot.orders().get({
      queryArgs: {
        limit,
        offset,
        sort,
        expand,
        ...(whereQueries.length > 0 && { where: whereQueries }),
      },
    });

    try {
      const response = await queryBuilder.execute();
      return response.body;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw createError(error);
    }
  }

  async getOrderById(
    orderId: string,
    expand: string[] = [],
  ): Promise<Order | null> {
    if (!orderId) {
      throw new APIError(
        "Order ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await apiRoot
        .orders()
        .withId({ ID: orderId })
        .get({
          queryArgs: {
            expand,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error(`Error fetching order ${orderId}:`, error);

      if (error instanceof Error && error.message.includes("not found")) {
        return null;
      }

      throw createError(error);
    }
  }

  async getOrderByOrderNumber(
    orderNumber: string,
    expand: string[] = [],
  ): Promise<Order | null> {
    if (!orderNumber) {
      throw new APIError(
        "Order number is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await apiRoot
        .orders()
        .withOrderNumber({ orderNumber })
        .get({
          queryArgs: {
            expand,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error(`Error fetching order with number ${orderNumber}:`, error);

      if (error instanceof Error && error.message.includes("not found")) {
        return null;
      }

      throw createError(error);
    }
  }

  async updateOrder(
    orderId: string,
    request: { version: number; actions: OrderUpdateAction[] },
  ): Promise<Order> {
    if (!orderId) {
      throw new APIError(
        "Order ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    if (!request.actions || request.actions.length === 0) {
      throw new APIError(
        "At least one update action is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await apiRoot
        .orders()
        .withId({ ID: orderId })
        .post({
          body: {
            version: request.version,
            actions: request.actions,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error updating order:", error);

      if (
        error instanceof Error &&
        error.message.includes("ConcurrentModification")
      ) {
        throw new APIError(
          "Order was modified by another request. Please refresh and try again.",
          ErrorCode.API_REQUEST_FAILED,
        );
      }

      throw createError(error);
    }
  }

  async getCustomerOrders(
    customerId: string,
    limit = 20,
    expand: string[] = [],
  ): Promise<Order[]> {
    if (!customerId) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.getOrders({
        limit,
        filters: { customerId },
        sort: ["createdAt desc"],
        expand,
      });

      return response.results;
    } catch (error) {
      console.error(`Error fetching orders for customer ${customerId}:`, error);
      throw createError(error);
    }
  }

  async getOrdersByEmail(
    customerEmail: string,
    limit = 20,
    expand: string[] = [],
  ): Promise<Order[]> {
    if (!customerEmail) {
      throw new APIError(
        "Customer email is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.getOrders({
        limit,
        filters: { customerEmail },
        sort: ["createdAt desc"],
        expand,
      });

      return response.results;
    } catch (error) {
      console.error(`Error fetching orders for email ${customerEmail}:`, error);
      throw createError(error);
    }
  }

  async cancelOrder(orderId: string, version: number): Promise<Order> {
    return this.updateOrder(orderId, {
      version,
      actions: [
        {
          action: "changeOrderState",
          orderState: "Cancelled",
        },
      ],
    });
  }

  async fulfillOrder(orderId: string, version: number): Promise<Order> {
    return this.updateOrder(orderId, {
      version,
      actions: [
        {
          action: "changeOrderState",
          orderState: "Complete",
        },
        {
          action: "changeShipmentState",
          shipmentState: "Shipped",
        },
      ],
    });
  }

  async addReturnInfo(
    orderId: string,
    version: number,
    items: Array<{
      lineItemId: string;
      quantity: number;
      comment?: string;
    }>,
    returnTrackingId?: string,
  ): Promise<Order> {
    return this.updateOrder(orderId, {
      version,
      actions: [
        {
          action: "addReturnInfo",
          items: items.map((item) => ({
            lineItemId: item.lineItemId,
            quantity: item.quantity,
            shipmentState: "Returned",
            comment: item.comment,
          })),
          returnTrackingId,
          returnDate: new Date().toISOString(),
        },
      ],
    });
  }
}
