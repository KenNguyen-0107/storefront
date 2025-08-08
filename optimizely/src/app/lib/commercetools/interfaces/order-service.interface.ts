import type {
  Order,
  OrderPagedQueryResponse,
  OrderUpdateAction,
} from "@commercetools/platform-sdk";
import type {
  CreateOrderFromCartRequest,
  OrderUpdateRequest,
  OrderQueryOptions,
} from "@/app/lib/commercetools/models/order.model";

export interface IOrderService {
  /**
   * Creates an order from an existing cart
   * @param request - Order creation details including cart ID and version
   * @returns Promise resolving to the created order
   * @throws CommerceError if cart is invalid, items are out of stock, or prices changed
   */
  createOrderFromCart(request: CreateOrderFromCartRequest): Promise<Order>;

  /**
   * Retrieves orders with filtering and pagination
   * @param options - Query options including filters, sorting, pagination, and expansion
   * @returns Promise resolving to paginated order results
   * @throws CommerceError if query fails
   */
  getOrders(options?: OrderQueryOptions): Promise<OrderPagedQueryResponse>;

  /**
   * Retrieves an order by ID
   * @param orderId - The order identifier
   * @param expand - Optional fields to expand in the response
   * @returns Promise resolving to order or null if not found
   * @throws CommerceError if orderId is invalid
   */
  getOrderById(orderId: string, expand?: string[]): Promise<Order | null>;

  /**
   * Retrieves an order by order number
   * @param orderNumber - The order number
   * @param expand - Optional fields to expand in the response
   * @returns Promise resolving to order or null if not found
   * @throws CommerceError if orderNumber is invalid
   */
  getOrderByOrderNumber(
    orderNumber: string,
    expand?: string[],
  ): Promise<Order | null>;

  /**
   * Updates an order with specified actions
   * @param orderId - The order identifier
   * @param request - Order update details including version and actions
   * @returns Promise resolving to updated order
   * @throws CommerceError if update fails or order is modified concurrently
   */
  updateOrder(
    orderId: string,
    request: { version: number; actions: OrderUpdateAction[] },
  ): Promise<Order>;

  /**
   * Retrieves all orders for a specific customer
   * @param customerId - The customer identifier
   * @param limit - Maximum number of orders to return
   * @param expand - Optional fields to expand in the response
   * @returns Promise resolving to array of customer orders
   * @throws CommerceError if customerId is invalid
   */
  getCustomerOrders(
    customerId: string,
    limit?: number,
    expand?: string[],
  ): Promise<Order[]>;

  /**
   * Retrieves orders by customer email address
   * @param customerEmail - The customer email
   * @param limit - Maximum number of orders to return
   * @param expand - Optional fields to expand in the response
   * @returns Promise resolving to array of orders
   * @throws CommerceError if customerEmail is invalid
   */
  getOrdersByEmail(
    customerEmail: string,
    limit?: number,
    expand?: string[],
  ): Promise<Order[]>;

  /**
   * Cancels an order by changing its state to Cancelled
   * @param orderId - The order identifier
   * @param version - Current order version for optimistic locking
   * @returns Promise resolving to updated order
   * @throws CommerceError if operation fails or order cannot be cancelled
   */
  cancelOrder(orderId: string, version: number): Promise<Order>;

  /**
   * Fulfills an order by marking it as complete and shipped
   * @param orderId - The order identifier
   * @param version - Current order version for optimistic locking
   * @returns Promise resolving to updated order
   * @throws CommerceError if operation fails or order cannot be fulfilled
   */
  fulfillOrder(orderId: string, version: number): Promise<Order>;

  /**
   * Adds return information to an order
   * @param orderId - The order identifier
   * @param version - Current order version for optimistic locking
   * @param items - Array of items being returned with quantities and comments
   * @param returnTrackingId - Optional tracking ID for the return shipment
   * @returns Promise resolving to updated order
   * @throws CommerceError if operation fails or items cannot be returned
   */
  addReturnInfo(
    orderId: string,
    version: number,
    items: Array<{
      lineItemId: string;
      quantity: number;
      comment?: string;
    }>,
    returnTrackingId?: string,
  ): Promise<Order>;
}
