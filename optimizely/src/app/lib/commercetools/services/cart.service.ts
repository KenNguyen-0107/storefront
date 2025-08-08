import { apiRoot } from "@/app/lib/commercetools/provider/rest-client";
import type {
  Cart,
  CartDraft,
  CartUpdate,
  ClientResponse,
  MyCartUpdate,
} from "@commercetools/platform-sdk";
import type { CommerceToolsClient } from "@/app/lib/commercetools/types/client.types";
import {
  APIError,
  ErrorCode,
  createError,
} from "@/app/lib/commercetools/models/error.model";
import type { ICartService } from "@/app/lib/commercetools//interfaces/cart-service.interface";
import type {
  CreateCartRequest,
  AddLineItemRequest,
  UpdateLineItemRequest,
  RemoveLineItemRequest,
  ApplyDiscountCodeRequest,
  RemoveDiscountCodeRequest,
  SetShippingAddressRequest,
  SetBillingAddressRequest,
  CommerceCart,
} from "@/app/lib/commercetools/models/cart.model";
import type { CommerceResponse } from "@/app/lib/commercetools/models/commerce-dto.model";
import { CartAdapter } from "@/app/lib/commercetools/adapters/cart.adapter";

export class CartService implements ICartService {
  private client: CommerceToolsClient;
  private readonly cartAdapter: CartAdapter;

  constructor(client?: CommerceToolsClient) {
    this.client = client || apiRoot;
    this.cartAdapter = new CartAdapter();
  }

  async createCart(
    request: CreateCartRequest = {},
  ): Promise<CommerceResponse<CommerceCart>> {
    const cartDraft: CartDraft = {
      currency: request.currency || "GBP",
      country: request.country || "GB",
      locale: request.locale || "en-GB",
      taxMode: request.taxMode || "Platform",
      inventoryMode: request.inventoryMode || "None",
      ...(request.customerId && { customerId: request.customerId }),
      ...(request.customerEmail && { customerEmail: request.customerEmail }),
      ...(request.anonymousId && { anonymousId: request.anonymousId }),
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .post({
          body: cartDraft,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error creating cart:", error);
      const domainError = createError(error);
      return this.cartAdapter.adaptError(domainError);
    }
  }

  async getCart(
    cartId: string | null,
  ): Promise<CommerceResponse<CommerceCart | null>> {
    try {
      const cart = await this.getCurrentCart(cartId);
      console.log("cart", cart);
      return cart
        ? this.cartAdapter.adaptSuccess(cart)
        : {
            success: true,
            data: null,
            error: null,
          };
    } catch (error) {
      console.error(`Error fetching cart ${cartId}:`, error);

      // If cart not found, create a new cart automatically
      if (error instanceof Error && error.message.includes("not found")) {
        console.log("Cart not found, creating a new cart...");
        try {
          return await this.createCart();
        } catch (createCartError) {
          console.error("Error creating new cart:", createCartError);
          const domainError = createError(createCartError);
          return this.cartAdapter.adaptError(domainError);
        }
      }

      const domainError = createError(error);
      return this.cartAdapter.adaptError(domainError);
    }
  }

  async addLineItem(
    cartId: string,
    cartVersion: number,
    request: AddLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.sku) {
      const error = new APIError(
        "SKU is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (request.quantity <= 0) {
      const error = new APIError(
        "Quantity must be greater than 0",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }
    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "addLineItem",
          sku: request.sku,
          quantity: request.quantity,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error adding line item to cart:", error);

      // Provide more specific error messages
      let domainError;
      if (
        error instanceof Error &&
        error.message.includes("ConcurrentModification")
      ) {
        domainError = new APIError(
          "Cart was modified by another request. Please try again.",
          ErrorCode.API_REQUEST_FAILED,
        );
      } else if (
        error instanceof Error &&
        error.message.includes("InvalidOperation")
      ) {
        domainError = new APIError(
          "Unable to add this item to cart. Please check product availability.",
          ErrorCode.API_REQUEST_FAILED,
        );
      } else {
        domainError = createError(error);
      }

      return this.cartAdapter.adaptError(domainError);
    }
  }

  async updateLineItem(
    cartId: string,
    cartVersion: number,
    request: UpdateLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.lineItemId) {
      const error = new APIError(
        "Line item ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (request.quantity === undefined) {
      const error = new APIError(
        "Quantity is required for updating line item",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (request.quantity < 0) {
      const error = new APIError(
        "Quantity must be greater than or equal to 0",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "changeLineItemQuantity",
          lineItemId: request.lineItemId,
          quantity: request.quantity,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error updating line item:", error);

      let domainError;
      if (
        error instanceof Error &&
        error.message.includes("ConcurrentModification")
      ) {
        domainError = new APIError(
          "Cart was modified by another request. Please try again.",
          ErrorCode.API_REQUEST_FAILED,
        );
      } else {
        domainError = createError(error);
      }

      return this.cartAdapter.adaptError(domainError);
    }
  }

  async removeLineItem(
    cartId: string,
    cartVersion: number,
    request: RemoveLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.lineItemId) {
      const error = new APIError(
        "Line item ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "removeLineItem",
          lineItemId: request.lineItemId,
          quantity: request.quantity,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error removing line item from cart:", error);

      let domainError;
      if (
        error instanceof Error &&
        error.message.includes("ConcurrentModification")
      ) {
        domainError = new APIError(
          "Cart was modified by another request. Please try again.",
          ErrorCode.API_REQUEST_FAILED,
        );
      } else {
        domainError = createError(error);
      }

      return this.cartAdapter.adaptError(domainError);
    }
  }

  async applyDiscountCode(
    cartId: string,
    cartVersion: number,
    request: ApplyDiscountCodeRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.code) {
      const error = new APIError(
        "Discount code is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "addDiscountCode",
          code: request.code,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error applying discount code:", error);

      let domainError;
      if (
        error instanceof Error &&
        error.message.includes("DiscountCodeNonApplicable")
      ) {
        domainError = new APIError(
          "This discount code is not applicable to your cart",
          ErrorCode.INVALID_INPUT,
        );
      } else {
        domainError = createError(error);
      }

      return this.cartAdapter.adaptError(domainError);
    }
  }

  async removeDiscountCode(
    cartId: string,
    cartVersion: number,
    request: RemoveDiscountCodeRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.discountCode) {
      const error = new APIError(
        "Discount code reference is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "removeDiscountCode",
          discountCode: request.discountCode,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error removing discount code:", error);
      const domainError = createError(error);
      return this.cartAdapter.adaptError(domainError);
    }
  }

  async setShippingAddress(
    cartId: string,
    cartVersion: number,
    request: SetShippingAddressRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.address) {
      const error = new APIError(
        "Shipping address is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "setShippingAddress",
          address: request.address,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error setting shipping address:", error);
      const domainError = createError(error);
      return this.cartAdapter.adaptError(domainError);
    }
  }

  async setBillingAddress(
    cartId: string,
    cartVersion: number,
    request: SetBillingAddressRequest,
  ): Promise<CommerceResponse<CommerceCart>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return this.cartAdapter.adaptError(error);
    }

    if (!request.address) {
      const error = new APIError(
        "Billing address is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
      return this.cartAdapter.adaptError(error);
    }

    const cartUpdate: MyCartUpdate = {
      version: cartVersion,
      actions: [
        {
          action: "setBillingAddress",
          address: request.address,
        },
      ],
    };

    try {
      const response = await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .post({
          body: cartUpdate,
        })
        .execute();

      return this.cartAdapter.adaptSuccess(response.body);
    } catch (error) {
      console.error("Error setting billing address:", error);
      const domainError = createError(error);
      return this.cartAdapter.adaptError(domainError);
    }
  }

  async deleteCart(
    cartId: string,
    cartVersion: number,
  ): Promise<CommerceResponse<void>> {
    if (!cartId) {
      const error = new APIError(
        "Cart ID is required",
        ErrorCode.INVALID_INPUT,
      );
      return {
        success: false,
        data: null,
        error: {
          code: error.code,
          message: error.message,
        },
      };
    }

    try {
      await this.client
        .me()
        .carts()
        .withId({ ID: cartId })
        .delete({
          queryArgs: {
            version: cartVersion,
          },
        })
        .execute();

      return {
        success: true,
        data: undefined,
        error: null,
      };
    } catch (error) {
      console.error("Error deleting cart:", error);
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async getCurrentCart(cartId: string | null): Promise<Cart> {
    if (!cartId) {
      const response = await this.client.me().activeCart().get().execute();
      return response.body;
    }

    const response = await this.client
      .me()
      .carts()
      .withId({ ID: cartId })
      .get()
      .execute();
    return response.body;
  }
}
