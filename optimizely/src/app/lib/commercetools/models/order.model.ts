import type {
  Order,
  OrderState,
  PaymentState,
  ShipmentState,
  LineItem,
  Price,
  Image,
  Attribute,
} from "@commercetools/platform-sdk";

export interface OrderFilters {
  customerId?: string;
  customerEmail?: string;
  orderNumber?: string;
  orderState?: OrderState;
  paymentState?: PaymentState;
  shipmentState?: ShipmentState;
  store?: string;
  createdAt?: {
    from?: string;
    to?: string;
  };
  lastModifiedAt?: {
    from?: string;
    to?: string;
  };
  totalPrice?: {
    min?: number;
    max?: number;
    currency?: string;
  };
}

export interface OrderQueryOptions {
  limit?: number;
  offset?: number;
  sort?: string[];
  filters?: OrderFilters;
  expand?: string[];
}

export interface CreateOrderFromCartRequest {
  id: string;
  version: number;
  orderNumber?: string;
  paymentState?: PaymentState;
  shipmentState?: ShipmentState;
  orderState?: OrderState;
}

export interface OrderUpdateRequest {
  version: number;
  actions: Array<
    | {
        action: "changeOrderState";
        orderState: OrderState;
      }
    | {
        action: "changePaymentState";
        paymentState: PaymentState;
      }
    | {
        action: "changeShipmentState";
        shipmentState: ShipmentState;
      }
    | {
        action: "setOrderNumber";
        orderNumber?: string;
      }
    | {
        action: "setCustomerId";
        customerId?: string;
      }
    | {
        action: "setCustomerEmail";
        email?: string;
      }
    | {
        action: "setBillingAddress";
        address?: {
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
    | {
        action: "setShippingAddress";
        address?: {
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
    | {
        action: "addReturnInfo";
        returnTrackingId?: string;
        items: Array<{
          lineItemId: string;
          quantity: number;
          shipmentState: ShipmentState;
          comment?: string;
        }>;
        returnDate?: string;
      }
    | {
        action: "setReturnShipmentState";
        returnItemId: string;
        shipmentState: ShipmentState;
      }
    | {
        action: "setReturnPaymentState";
        returnItemId: string;
        paymentState: PaymentState;
      }
    | {
        action: "addDelivery";
        items?: Array<{
          id: string;
          quantity: number;
        }>;
        address?: {
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
        parcels?: Array<{
          id?: string;
          createdAt?: string;
          measurements?: {
            heightInMillimeter?: number;
            lengthInMillimeter?: number;
            widthInMillimeter?: number;
            weightInGram?: number;
          };
          trackingData?: {
            trackingId?: string;
            carrier?: string;
            provider?: string;
            providerTransaction?: string;
            isReturn?: boolean;
          };
          items?: Array<{
            id: string;
            quantity: number;
          }>;
        }>;
      }
  >;
}

export interface OrderSummary {
  id: string;
  version: number;
  orderNumber?: string;
  customerId?: string;
  customerEmail?: string;
  anonymousId?: string;
  createdAt: string;
  lastModifiedAt: string;
  orderState: OrderState;
  paymentState?: PaymentState;
  shipmentState?: ShipmentState;
  totalPrice: {
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
  };
  taxedPrice?: {
    totalNet: {
      currencyCode: string;
      centAmount: number;
    };
    totalGross: {
      currencyCode: string;
      centAmount: number;
    };
    totalTax: {
      currencyCode: string;
      centAmount: number;
    };
  };
  lineItemCount: number;
  totalLineItemQuantity: number;
  shippingAddress?: {
    country: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    city?: string;
    postalCode?: string;
    region?: string;
    state?: string;
  };
  billingAddress?: {
    country: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    city?: string;
    postalCode?: string;
    region?: string;
    state?: string;
  };
}

export interface OrderLineItem extends LineItem {
  productName: Record<string, string>;
  productSlug: Record<string, string>;
  variant: {
    id: number;
    sku?: string;
    key?: string;
    prices: Price[];
    images: Image[];
    attributes: Attribute[];
  };
}

export interface OrderTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
}

export interface OrderTracking {
  orderId: string;
  orderNumber?: string;
  trackingNumber?: string;
  carrier?: string;
  status: string;
  estimatedDelivery?: string;
  deliveryAddress?: {
    country: string;
    firstName?: string;
    lastName?: string;
    streetName?: string;
    streetNumber?: string;
    city?: string;
    postalCode?: string;
    region?: string;
    state?: string;
  };
  trackingEvents: Array<{
    timestamp: string;
    status: string;
    location?: string;
    description?: string;
  }>;
}

export interface OrderReturn {
  id: string;
  orderId: string;
  returnNumber?: string;
  createdAt: string;
  returnTrackingId?: string;
  returnDate?: string;
  items: Array<{
    id: string;
    lineItemId: string;
    quantity: number;
    shipmentState: ShipmentState;
    paymentState?: PaymentState;
    comment?: string;
    createdAt: string;
    lastModifiedAt: string;
  }>;
  totalAmount: {
    currencyCode: string;
    centAmount: number;
  };
  status: string;
}

export interface OrderInvoice {
  id: string;
  orderId: string;
  invoiceNumber: string;
  createdAt: string;
  dueDate?: string;
  totalAmount: {
    currencyCode: string;
    centAmount: number;
  };
  taxAmount: {
    currencyCode: string;
    centAmount: number;
  };
  status: "pending" | "paid" | "overdue" | "cancelled";
  downloadUrl?: string;
}

export interface OrderValidationError {
  code: string;
  message: string;
  field?: string;
  invalidValue?: any;
}

export interface OrderOperationResult {
  success: boolean;
  order?: Order;
  errors?: OrderValidationError[];
}

export interface OrderStatistics {
  totalOrders: number;
  totalRevenue: {
    currencyCode: string;
    centAmount: number;
  };
  averageOrderValue: {
    currencyCode: string;
    centAmount: number;
  };
  ordersByState: Record<OrderState, number>;
  ordersByPaymentState: Record<PaymentState, number>;
  ordersByShipmentState: Record<ShipmentState, number>;
  topProducts: Array<{
    productId: string;
    productName: string;
    quantity: number;
    revenue: {
      currencyCode: string;
      centAmount: number;
    };
  }>;
  period: {
    from: string;
    to: string;
  };
}
