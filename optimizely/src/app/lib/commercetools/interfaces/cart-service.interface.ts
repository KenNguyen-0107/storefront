import type { Cart } from "@commercetools/platform-sdk";
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

export interface ICartService {
  /**
   * Creates a new cart
   * @param request - Cart creation parameters
   * @returns Promise resolving to the created cart
   * @throws CommerceError if creation fails
   */
  createCart(
    request?: CreateCartRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Retrieves a cart by ID, or creates a new one if not found
   * @param cartId - The cart identifier (null for active cart)
   * @returns Promise resolving to the cart (existing or newly created)
   * @throws CommerceError if cartId is invalid or fetch/create fails
   */
  getCart(
    cartId: string | null,
  ): Promise<CommerceResponse<CommerceCart | null>>;

  /**
   * Adds a line item to the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Line item details to add
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if operation fails or cart is modified concurrently
   */
  addLineItem(
    cartId: string,
    cartVersion: number,
    request: AddLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Updates a line item in the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Line item update details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if operation fails or cart is modified concurrently
   */
  updateLineItem(
    cartId: string,
    cartVersion: number,
    request: UpdateLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Removes a line item from the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Line item removal details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if operation fails or cart is modified concurrently
   */
  removeLineItem(
    cartId: string,
    cartVersion: number,
    request: RemoveLineItemRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Applies a discount code to the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Discount code details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if discount code is invalid or not applicable
   */
  applyDiscountCode(
    cartId: string,
    cartVersion: number,
    request: ApplyDiscountCodeRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Removes a discount code from the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Discount code removal details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if operation fails
   */
  removeDiscountCode(
    cartId: string,
    cartVersion: number,
    request: RemoveDiscountCodeRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Sets the shipping address for the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Shipping address details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if address is invalid or operation fails
   */
  setShippingAddress(
    cartId: string,
    cartVersion: number,
    request: SetShippingAddressRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Sets the billing address for the cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @param request - Billing address details
   * @returns Promise resolving to the updated cart
   * @throws CommerceError if address is invalid or operation fails
   */
  setBillingAddress(
    cartId: string,
    cartVersion: number,
    request: SetBillingAddressRequest,
  ): Promise<CommerceResponse<CommerceCart>>;

  /**
   * Deletes a cart
   * @param cartId - The cart identifier
   * @param cartVersion - Current cart version for optimistic locking
   * @returns Promise resolving when cart is deleted
   * @throws CommerceError if operation fails
   */
  deleteCart(
    cartId: string,
    cartVersion: number,
  ): Promise<CommerceResponse<void>>;
}
