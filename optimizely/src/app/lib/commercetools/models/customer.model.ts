import type {
  Customer,
  CustomerGroup,
  Address,
} from "@commercetools/platform-sdk";

export interface CustomerFilters {
  email?: string;
  firstName?: string;
  lastName?: string;
  customerGroup?: string;
  companyName?: string;
  dateOfBirth?: string;
  isEmailVerified?: boolean;
  createdAt?: {
    from?: string;
    to?: string;
  };
  lastModifiedAt?: {
    from?: string;
    to?: string;
  };
}

export interface CustomerQueryOptions {
  limit?: number;
  offset?: number;
  sort?: string[];
  filters?: CustomerFilters;
}

export interface CustomerRegistrationRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  dateOfBirth?: string;
  companyName?: string;
  vatId?: string;
  addresses?: Address[];
  defaultShippingAddress?: number;
  defaultBillingAddress?: number;
  shippingAddresses?: number[];
  billingAddresses?: number[];
  isEmailVerified?: boolean;
  customerGroup?: {
    typeId: "customer-group";
    id: string;
  };
  custom?: {
    typeId: "type";
    id: string;
    fields?: Record<string, any>;
  };
  locale?: string;
  salutation?: string;
  key?: string;
}

export interface CustomerSignInRequest {
  email: string;
  password: string;
  anonymousCartId?: string;
  anonymousCartSignInMode?:
    | "MergeWithExistingCustomerCart"
    | "UseAsNewActiveCustomerCart";
  anonymousId?: string;
  updateProductData?: boolean;
}

export interface CustomerSignInResult {
  customer: Customer;
  cart?: any; // Cart type from commercetools
}

export interface CustomerUpdateRequest {
  version: number;
  actions: Array<
    | {
        action: "changeEmail";
        email: string;
      }
    | {
        action: "setFirstName";
        firstName?: string;
      }
    | {
        action: "setLastName";
        lastName?: string;
      }
    | {
        action: "setMiddleName";
        middleName?: string;
      }
    | {
        action: "setTitle";
        title?: string;
      }
    | {
        action: "setDateOfBirth";
        dateOfBirth?: string;
      }
    | {
        action: "setCompanyName";
        companyName?: string;
      }
    | {
        action: "setVatId";
        vatId?: string;
      }
    | {
        action: "addAddress";
        address: Address;
      }
    | {
        action: "changeAddress";
        addressId: string;
        address: Address;
      }
    | {
        action: "removeAddress";
        addressId: string;
      }
    | {
        action: "setDefaultShippingAddress";
        addressId?: string;
      }
    | {
        action: "setDefaultBillingAddress";
        addressId?: string;
      }
    | {
        action: "addShippingAddressId";
        addressId: string;
      }
    | {
        action: "removeShippingAddressId";
        addressId: string;
      }
    | {
        action: "addBillingAddressId";
        addressId: string;
      }
    | {
        action: "removeBillingAddressId";
        addressId: string;
      }
    | {
        action: "setCustomerGroup";
        customerGroup?: {
          typeId: "customer-group";
          id: string;
        };
      }
    | {
        action: "setCustomerNumber";
        customerNumber?: string;
      }
    | {
        action: "setExternalId";
        externalId?: string;
      }
    | {
        action: "setKey";
        key?: string;
      }
    | {
        action: "setLocale";
        locale?: string;
      }
    | {
        action: "setSalutation";
        salutation?: string;
      }
  >;
}

export interface ChangePasswordRequest {
  id: string;
  version: number;
  currentPassword: string;
  newPassword: string;
}

export interface ResetPasswordRequest {
  tokenValue: string;
  newPassword: string;
}

export interface PasswordResetTokenRequest {
  email: string;
  ttlMinutes?: number;
}

export interface VerifyEmailRequest {
  tokenValue: string;
}

export interface EmailVerificationTokenRequest {
  id: string;
  version: number;
  ttlMinutes?: number;
}

export interface CustomerProfile {
  id: string;
  version: number;
  key?: string;
  customerNumber?: string;
  externalId?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  dateOfBirth?: string;
  companyName?: string;
  vatId?: string;
  addresses: Address[];
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
  shippingAddressIds: string[];
  billingAddressIds: string[];
  isEmailVerified: boolean;
  customerGroup?: CustomerGroup;
  custom?: {
    typeId: "type";
    id: string;
    fields?: Record<string, any>;
  };
  locale?: string;
  salutation?: string;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy?: {
    clientId?: string;
    externalUserId?: string;
    customer?: {
      typeId: "customer";
      id: string;
    };
    anonymousId?: string;
  };
  createdBy?: {
    clientId?: string;
    externalUserId?: string;
    customer?: {
      typeId: "customer";
      id: string;
    };
    anonymousId?: string;
  };
}

export interface CustomerAddress extends Address {
  id?: string;
  isDefault?: boolean;
  isShipping?: boolean;
  isBilling?: boolean;
}

export interface CustomerOrderHistory {
  customerId: string;
  totalOrders: number;
  totalSpent: {
    currencyCode: string;
    centAmount: number;
  };
  averageOrderValue: {
    currencyCode: string;
    centAmount: number;
  };
  lastOrderDate?: string;
  firstOrderDate?: string;
}

export interface CustomerValidationError {
  code: string;
  message: string;
  field?: string;
  invalidValue?: any;
}

export interface CustomerOperationResult {
  success: boolean;
  customer?: Customer;
  errors?: CustomerValidationError[];
}
