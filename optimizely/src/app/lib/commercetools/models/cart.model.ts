import type {
  Cart,
  CartState,
  PaymentState,
  ShipmentState,
  Money,
} from "@commercetools/platform-sdk";

export interface CartFilters {
  customerId?: string;
  cartState?: CartState;
  paymentState?: PaymentState;
  shipmentState?: ShipmentState;
  dateRange?: {
    from: string;
    to: string;
  };
}

export interface CartQueryOptions {
  limit?: number;
  offset?: number;
  sort?: string[];
  filters?: CartFilters;
}

export interface CreateCartRequest {
  currency?: string;
  country?: string;
  customerId?: string;
  customerEmail?: string;
  anonymousId?: string;
  locale?: string;
  taxMode?: "Platform" | "External" | "ExternalAmount" | "Disabled";
  inventoryMode?: "None" | "TrackOnly" | "ReserveOnOrder";
}

export interface AddLineItemRequest {
  productId?: string;
  variantId?: number;
  sku?: string;
  quantity: number;
}

export interface UpdateLineItemRequest {
  lineItemId: string;
  quantity?: number;
}

export interface RemoveLineItemRequest {
  lineItemId: string;
  quantity?: number;
}

export interface ApplyDiscountCodeRequest {
  code: string;
}

export interface RemoveDiscountCodeRequest {
  discountCode: {
    typeId: "discount-code";
    id: string;
  };
}

export interface SetShippingAddressRequest {
  address: {
    country: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    additionalStreetInfo?: string;
    postalCode?: string;
    city?: string;
    region?: string;
    state?: string;
    company?: string;
    department?: string;
    building?: string;
    apartment?: string;
    pOBox?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    fax?: string;
    additionalAddressInfo?: string;
    externalId?: string;
  };
}

export interface SetBillingAddressRequest {
  address: {
    country: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    additionalStreetInfo?: string;
    postalCode?: string;
    city?: string;
    region?: string;
    state?: string;
    company?: string;
    department?: string;
    building?: string;
    apartment?: string;
    pOBox?: string;
    phone?: string;
    mobile?: string;
    email?: string;
    fax?: string;
    additionalAddressInfo?: string;
    externalId?: string;
  };
}

export interface CommerceCart {
  id: string;
  version: number;
  customerId?: string;
  customerEmail?: string;
  lineItems: CartLineItem[];
  totals: CartTotals;
}

export interface CartLineItem {
  id: string;
  slug?: string;
  name: string;
  sku: string;
  image?: string;
  quantity: number;
  unitprice: Money;
  subtotal: Money;
  total: Money;
}

export interface CartTotals {
  subtotal: Money;
  shipping: Money;
  tax: Money;
  discount: Money;
  total: Money;
}

export interface CartValidationError {
  code: string;
  message: string;
  field?: string;
  invalidValue?: any;
}

export interface CartOperationResult {
  success: boolean;
  cart?: Cart;
  errors?: CartValidationError[];
}
