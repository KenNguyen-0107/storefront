import type { Cart } from "@commercetools/platform-sdk";
import { IResponseAdapter } from "@/app/lib/commercetools/interfaces/adapter.interface";
import {
  CommerceCart,
  CartLineItem,
  CartTotals,
} from "@/app/lib/commercetools/models/cart.model";
import {
  CommerceResponse,
  Money,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import { DomainError } from "@/app/lib/commercetools/models/error.model";

export class CartAdapter implements IResponseAdapter<Cart, CommerceCart> {
  adapt(cart: Cart): CommerceCart {
    return {
      id: cart.id,
      version: cart.version,
      customerId: cart.customerId,
      customerEmail: cart.customerEmail,
      lineItems: cart.lineItems.map(this.adaptLineItem.bind(this)),
      totals: this.adaptTotals(cart),
    };
  }

  adaptSuccess(cart: Cart): CommerceResponse<CommerceCart> {
    return {
      success: true,
      data: this.adapt(cart),
      error: null,
    };
  }

  adaptError(
    error: DomainError,
    fallback?: CommerceCart,
  ): CommerceResponse<CommerceCart> {
    return {
      success: false,
      data: fallback || null,
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }

  private adaptLineItem(lineItem: any): CartLineItem {
    return {
      id: lineItem.id,
      slug: lineItem.slug,
      name: lineItem.name || lineItem.productName,
      sku: lineItem.sku,
      image: lineItem.image,
      quantity: lineItem.quantity,
      unitprice: lineItem.unitprice || lineItem.price?.value,
      subtotal: lineItem.subtotal || lineItem.totalPrice,
      total: lineItem.total || lineItem.totalPrice,
    };
  }

  private adaptTotals(cart: Cart): CartTotals {
    return {
      subtotal: cart.totalPrice,
      shipping: { centAmount: 0, currencyCode: cart.totalPrice.currencyCode },
      tax: cart.taxedPrice?.totalTax || {
        centAmount: 0,
        currencyCode: cart.totalPrice.currencyCode,
      },
      discount: { centAmount: 0, currencyCode: cart.totalPrice.currencyCode },
      total: cart.totalPrice,
    };
  }
}
