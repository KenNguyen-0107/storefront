# Customer API Documentation

This documentation provides details about all available customer API endpoints that can be used by frontend components.

## Base URL
All endpoints are available under `/api`

## Response Format
All API responses follow this consistent format:

### Success Response
```json
{
  "success": true,
  "data": {}, // Response data
  "message": "Optional success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE"
  }
}
```

## Authentication System

The API uses a unified token-based authentication system that works for both authenticated customers and anonymous users.

### Token Types
- **Anonymous Tokens**: For guest users to perform cart operations
- **Customer Tokens**: For authenticated customers
- **Refresh Tokens**: For refreshing expired access tokens

### Authentication Flow
1. **Anonymous Users**: Get anonymous token → Use for cart operations
2. **Customer Sign In**: Get customer token → Use for authenticated operations
3. **Token Refresh**: Use refresh token to get new access token when expired

## Token Endpoints

### Get Anonymous Token
**POST** `/api/auth/anonymous-token`

Generates an access token for anonymous users to perform cart operations.

**Request Body:**
```typescript
{
  anonymousId?: string; // Optional: for cart continuity
}
```

**Response:** `200` - Token data
```typescript
{
  success: true;
  data: {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
    scope: string;
    anonymous_id: string;
  };
}
```

### Get Customer Token
**POST** `/api/auth/password-token`

Generates an access token for authenticated customers.

**Request Body:**
```typescript
{
  email: string;
  password: string;
}
```

**Response:** `200` - Token data
```typescript
{
  success: true;
  data: {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
    scope: string;
  };
}
```

### Refresh Token
**POST** `/api/auth/refresh-token`

Refreshes an expired access token using a refresh token.

**Request Body:**
```typescript
{
  refreshToken: string;
}
```

**Response:** `200` - New token data
```typescript
{
  success: true;
  data: {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    token_type: string;
    scope: string;
  };
}
```

## Authentication Endpoints

### Sign Up
**POST** `/api/customer/signup`

Creates a new customer account and returns authentication token.

**Request Body:**
```typescript
{
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
  locale?: string;
  salutation?: string;
  key?: string;
}
```

**Response:** `201` - Customer data with token
```typescript
{
  success: true;
  data: {
    customer: {
      id: string;
      version: number;
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
      customerGroup?: {
        typeId: "customer-group";
        id: string;
      };
      locale?: string;
      salutation?: string;
      createdAt: string;
      lastModifiedAt: string;
    };
    cart?: Cart;
    token?: {
      access_token: string;
      refresh_token?: string;
      expires_in: number;
      token_type: string;
      scope: string;
    };
  };
}
```

### Sign In
**POST** `/api/customer/signin`

Authenticates an existing customer and returns authentication token with cart migration support.

**Request Body:**
```typescript
{
  email: string;
  password: string;
  anonymousCartId?: string; // For cart migration
  anonymousCartSignInMode?: "MergeWithExistingCustomerCart" | "UseAsNewActiveCustomerCart";
  anonymousId?: string; // Anonymous user ID for cart migration
  updateProductData?: boolean;
}
```

**Response:** `200` - Customer data with token
```typescript
{
  success: true;
  data: {
    customer: {
      id: string;
      version: number;
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
      customerGroup?: {
        typeId: "customer-group";
        id: string;
      };
      locale?: string;
      salutation?: string;
      createdAt: string;
      lastModifiedAt: string;
    };
    token: {
      access_token: string;
      refresh_token?: string;
      expires_in: number;
      token_type: string;
      scope: string;
    };
    cart?: Cart; // Migrated cart if anonymousCartId was provided
  };
  meta: {
    cartMigrated: boolean;
    previousAnonymousId?: string;
  };
}
```

### Sign Out
**POST** `/api/customer/signout`

Signs out the current customer. No server-side action required since tokens are managed by frontend.

**Response:** `200` - Success message
```typescript
{
  success: true;
  message: "Successfully signed out";
}
```

**Note:** Frontend should delete stored tokens and redirect user as needed.

## Customer Data Endpoints

### Get Customer by ID
**GET** `/api/customer/{id}`

Retrieves a customer by their ID.

**Response:** `200` - Customer object or `404` if not found
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Get Customer by Key
**GET** `/api/customer/by-key/{key}`

Retrieves a customer by their unique key.

**Response:** `200` - Customer object or `404` if not found
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Get Customer by Email
**GET** `/api/customer/by-email?email={email}`

Retrieves a customer by their email address.

**Query Parameters:**
- `email` (required): Customer email address

**Response:** `200` - Customer object or `404` if not found
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Update Customer
**PATCH** `/api/customer/{id}`

Updates customer information.

**Request Body:**
```typescript
{
  version: number;
  actions: Array<{
    action: "changeEmail" | "setFirstName" | "setLastName" | ...;
    // Additional fields based on action type
  }>;
}
```

**Response:** `200` - Updated Customer object
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Delete Customer
**DELETE** `/api/customer/{id}?version={version}`

Deletes a customer account.

**Query Parameters:**
- `version` (required): Current customer version for optimistic locking

**Response:** `200` - Success message
```typescript
{
  success: true;
  message: "Customer deleted successfully";
}
```

### Get Customers (List/Search)
**GET** `/api/customer`

Retrieves customers with filtering and pagination.

**Query Parameters:**
- `limit` (optional): Number of results per page (default: 20)
- `offset` (optional): Number of results to skip (default: 0)
- `sort` (optional): Comma-separated sort fields (default: "createdAt desc")
- `email` (optional): Filter by email
- `firstName` (optional): Filter by first name
- `lastName` (optional): Filter by last name
- `customerGroup` (optional): Filter by customer group ID
- `companyName` (optional): Filter by company name
- `isEmailVerified` (optional): Filter by email verification status (true/false)
- `createdAtFrom` (optional): Filter by creation date from (ISO string)
- `createdAtTo` (optional): Filter by creation date to (ISO string)

**Response:** `200` - CustomerPagedQueryResponse
```typescript
{
  success: true;
  data: {
    count: number;
    total: number;
    offset: number;
    results: Array<{
      id: string;
      version: number;
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
      customerGroup?: {
        typeId: "customer-group";
        id: string;
      };
      locale?: string;
      salutation?: string;
      createdAt: string;
      lastModifiedAt: string;
    }>;
  };
}
```

## Password Management Endpoints

### Change Password
**POST** `/api/customer/password/change`

Changes a customer's password (requires current password).

**Request Body:**
```typescript
{
  id: string;
  version: number;
  currentPassword: string;
  newPassword: string;
}
```

**Response:** `200` - Updated Customer object
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Request Password Reset
**POST** `/api/customer/password/request-reset`

Sends a password reset email to the customer.

**Request Body:**
```typescript
{
  email: string;
  ttlMinutes?: number;
}
```

**Response:** `200` - Success message
```typescript
{
  success: true;
  message: "Password reset email sent successfully";
}
```

### Reset Password
**POST** `/api/customer/password/reset`

Resets a customer's password using a reset token.

**Request Body:**
```typescript
{
  tokenValue: string;
  newPassword: string;
}
```

**Response:** `200` - Updated Customer object
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

## Email Verification Endpoints

### Request Email Verification
**POST** `/api/customer/email/request-verification`

Sends an email verification token to the customer.

**Request Body:**
```typescript
{
  id: string;
  version: number;
  ttlMinutes?: number;
}
```

**Response:** `200` - Success message
```typescript
{
  success: true;
  message: "Email verification token sent successfully";
}
```

### Verify Email
**POST** `/api/customer/email/verify`

Verifies a customer's email using a verification token.

**Request Body:**
```typescript
{
  tokenValue: string;
}
```

**Response:** `200` - Updated Customer object
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

## Customer Profile Endpoints

### Get Customer Profile
**GET** `/api/customer/profile`

Retrieves the authenticated customer's profile.

**Authentication:** Required - Authorization header with Bearer token

**Response:** `200` - Customer profile
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Update Customer Profile
**PUT/PATCH** `/api/customer/profile`

Updates the authenticated customer's profile.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  actions: Array<{
    action: "changeEmail" | "setFirstName" | "setLastName" | "setMiddleName" | "setTitle" | "setDateOfBirth" | "setCompanyName" | "setVatId" | "setLocale" | "setSalutation";
    // Additional fields based on action type
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    title?: string;
    dateOfBirth?: string;
    companyName?: string;
    vatId?: string;
    locale?: string;
    salutation?: string;
  }>;
}
```

**Response:** `200` - Updated customer profile
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
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
    customerGroup?: {
      typeId: "customer-group";
      id: string;
    };
    locale?: string;
    salutation?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

## Cart Endpoints (Unified for Authenticated and Anonymous Users)

All cart endpoints use unified authentication and work for both authenticated customers and anonymous users. Authentication is handled via Bearer token in the Authorization header.

### Get Active Cart
**GET** `/api/cart`

Retrieves the active cart for the authenticated user (customer or anonymous).

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  cartId: string; // Cart ID to retrieve
}
```

**Response:** `200` - Cart data
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    customerId?: string;
    customerEmail?: string;
    anonymousId?: string;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
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
    cartState: "Active" | "Merged" | "Ordered" | "Frozen";
    paymentState?: "BalanceDue" | "Failed" | "Pending" | "CreditOwed" | "Paid";
    shippingAddress?: Address;
    billingAddress?: Address;
    country?: string;
    locale?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Create Cart
**POST** `/api/cart`

Creates a new cart for the authenticated user.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  currency?: string;
  country?: string;
  locale?: string;
  taxMode?: "Platform" | "External" | "ExternalAmount" | "Disabled";
  inventoryMode?: "None" | "TrackOnly" | "ReserveOnOrder";
}
```

**Response:** `201` - New cart
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    customerId?: string;
    customerEmail?: string;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
    totalPrice: {
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    cartState: "Active";
    country?: string;
    locale?: string;
    createdAt: string;
    lastModifiedAt: string;
  };
}
```

### Add Item to Cart
**POST** `/api/cart/items`

Adds a product variant to the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  productId: string;
  variantId?: number; // Default: 1
  quantity?: number; // Default: 1
}
```

**Response:** `200` - Updated cart
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    customerId?: string;
    customerEmail?: string;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
    totalPrice: {
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    // ... other cart fields
  };
}
```

### Remove Item from Cart
**DELETE** `/api/cart/items`

Removes or reduces quantity of a line item from the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  lineItemId: string;
  quantity?: number; // If provided, reduces quantity; if omitted, removes item completely
}
```

**Response:** `200` - Updated cart
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    customerId?: string;
    customerEmail?: string;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
    totalPrice: {
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    // ... other cart fields
  };
}
```

### Update Item Quantity
**PATCH** `/api/cart/items`

Updates the quantity of a line item in the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  lineItemId: string;
  quantity: number;
}
```

**Response:** `200` - Updated cart
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    customerId?: string;
    customerEmail?: string;
    lineItems: LineItem[];
    customLineItems: CustomLineItem[];
    totalPrice: {
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    // ... other cart fields
  };
}
```

### Apply Discount Code
**POST** `/api/cart/discount`

Applies a discount code to the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  cartId: string;
  cartVersion: number;
  code: string;
}
```

**Response:** `200` - Updated cart with discount
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    // ... cart fields with applied discount
  };
  message: "Discount code applied successfully";
}
```

### Remove Discount Code
**DELETE** `/api/cart/discount`

Removes a discount code from the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  cartId: string;
  cartVersion: number;
  discountCodeId: string;
}
```

**Response:** `200` - Updated cart without discount
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    // ... cart fields without discount
  };
  message: "Discount code removed successfully";
}
```

### Set Shipping Address
**POST** `/api/cart/shipping`

Sets the shipping address for the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  cartId: string;
  cartVersion: number;
  // Address fields
  title?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
  country: string;
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
}
```

**Response:** `200` - Updated cart with shipping address
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    shippingAddress: Address;
    // ... other cart fields
  };
}
```

### Set Billing Address
**POST** `/api/cart/billing`

Sets the billing address for the cart.

**Authentication:** Required - Authorization header with Bearer token

**Request Body:**
```typescript
{
  cartId: string;
  cartVersion: number;
  // Address fields (same as shipping address)
  title?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
  country: string;
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
}
```

**Response:** `200` - Updated cart with billing address
```typescript
{
  success: true;
  data: {
    id: string;
    version: number;
    billingAddress: Address;
    // ... other cart fields
  };
}
```

## Content Endpoints

### Publish Content
**GET/POST** `/api/content/publish`

Publishes content and regenerates static pages.

**Response:** `200` - Publish status
```typescript
{
  success: true;
  message: "Content published successfully";
}
```

## Error Codes

Common error codes you might encounter:

### Authentication Errors
- `MISSING_CREDENTIALS` - Email and password are required
- `INVALID_CREDENTIALS` - Invalid email or password
- `AUTH_REQUIRED` - Authorization header with Bearer token required
- `AUTH_FAILED` - Authentication failed (invalid token)
- `TOKEN_REQUIRED` - Authentication token required
- `MISSING_REFRESH_TOKEN` - Refresh token is required
- `REFRESH_TOKEN_FAILED` - Token refresh failed

### Token Endpoint Errors
- `ANONYMOUS_AUTH_FAILED` - Anonymous authentication failed
- `PASSWORD_TOKEN_ERROR` - Password token generation error
- `ANONYMOUS_TOKEN_ERROR` - Anonymous token generation error
- `REFRESH_TOKEN_ERROR` - Token refresh error

### General Errors
- `MISSING_REQUIRED_FIELD` - Required field is missing
- `INVALID_INPUT` - Input validation failed (e.g., duplicate email)
- `API_REQUEST_FAILED` - General API request failure
- `CUSTOMER_NOT_FOUND` - Customer not found
- `MISSING_EMAIL` - Email parameter is missing
- `MISSING_VERSION` - Version parameter is missing
- `SIGNIN_FAILED` - Customer signin failed
- `SIGNUP_FAILED` - Customer signup failed
- `SIGNOUT_FAILED` - Customer signout failed

## Usage Examples

### Frontend Service Example

```typescript
// customer-api.service.ts
class CustomerApiService {
  private baseUrl = '/api';
  private authUrl = '/api/auth';

  // Get and store access token
  private getAuthHeaders(token?: string) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  // Get anonymous token for cart operations
  async getAnonymousToken(anonymousId?: string) {
    const response = await fetch(`${this.authUrl}/anonymous-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ anonymousId }),
    });
    return response.json();
  }

  // Get customer token for authentication
  async getCustomerToken(email: string, password: string) {
    const response = await fetch(`${this.authUrl}/password-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  }

  // Refresh expired token
  async refreshToken(refreshToken: string) {
    const response = await fetch(`${this.authUrl}/refresh-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });
    return response.json();
  }

  async signUp(data: CustomerRegistrationRequest) {
    const response = await fetch(`${this.baseUrl}/customer/signup`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async signIn(email: string, password: string, cartMigration?: {
    anonymousCartId?: string;
    anonymousId?: string;
    anonymousCartSignInMode?: string;
  }) {
    const response = await fetch(`${this.baseUrl}/customer/signin`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ 
        email, 
        password,
        ...cartMigration
      }),
    });
    return response.json();
  }

  async signOut() {
    const response = await fetch(`${this.baseUrl}/customer/signout`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
    });
    return response.json();
  }

  async getProfile(token: string) {
    const response = await fetch(`${this.baseUrl}/customer/profile`, {
      headers: this.getAuthHeaders(token),
    });
    return response.json();
  }

  async getCustomerById(id: string) {
    const response = await fetch(`${this.baseUrl}/customer/${id}`);
    return response.json();
  }

  async getCustomers(params?: {
    limit?: number;
    offset?: number;
    email?: string;
    // ... other filters
  }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    
    const response = await fetch(`${this.baseUrl}/customer?${searchParams}`);
    return response.json();
  }

  async changePassword(data: ChangePasswordRequest) {
    const response = await fetch(`${this.baseUrl}/customer/password/change`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
```

### Authentication Hook Example

```typescript
// useAuth.hook.ts
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  customer: Customer | null;
  isAnonymous: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
    customer: null,
    isAnonymous: false,
  });

  const customerService = new CustomerApiService();

  // Initialize authentication state
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const customer = localStorage.getItem('customer');
    
    if (token && customer) {
      setAuthState({
        isAuthenticated: true,
        token,
        customer: JSON.parse(customer),
        isAnonymous: false,
      });
    } else {
      // Get anonymous token for cart operations
      initializeAnonymousSession();
    }
  }, []);

  const initializeAnonymousSession = async () => {
    try {
      const result = await customerService.getAnonymousToken();
      if (result.success) {
        const token = result.data.access_token;
        localStorage.setItem('anonymous_token', token);
        localStorage.setItem('anonymous_id', result.data.anonymous_id);
        
        setAuthState({
          isAuthenticated: false,
          token,
          customer: null,
          isAnonymous: true,
        });
      }
    } catch (error) {
      console.error('Failed to initialize anonymous session:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Get anonymous cart info for migration
      const anonymousId = localStorage.getItem('anonymous_id');
      const cartMigration = anonymousId ? { anonymousId } : undefined;

      const result = await customerService.signIn(email, password, cartMigration);
      
      if (result.success) {
        const { customer, token } = result.data;
        
        // Store authentication data
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('refresh_token', token.refresh_token);
        localStorage.setItem('customer', JSON.stringify(customer));
        
        // Clear anonymous session
        localStorage.removeItem('anonymous_token');
        localStorage.removeItem('anonymous_id');
        
        setAuthState({
          isAuthenticated: true,
          token: token.access_token,
          customer,
          isAnonymous: false,
        });
        
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Sign in failed' };
    }
  };

  const signOut = async () => {
    try {
      await customerService.signOut();
      
      // Clear stored data
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('customer');
      
      // Initialize new anonymous session
      await initializeAnonymousSession();
      
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) return false;

      const result = await customerService.refreshToken(refreshToken);
      if (result.success) {
        const newToken = result.data.access_token;
        localStorage.setItem('access_token', newToken);
        localStorage.setItem('refresh_token', result.data.refresh_token);
        
        setAuthState(prev => ({
          ...prev,
          token: newToken,
        }));
        
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    return false;
  };

  return {
    ...authState,
    signIn,
    signOut,
    refreshToken,
    initializeAnonymousSession,
  };
}
```

### Cart Hook Example

```typescript
// useCart.hook.ts
import { useState, useEffect } from 'react';
import { useAuth } from './useAuth.hook';

export function useCart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, isAuthenticated } = useAuth();

  const makeCartRequest = async (url: string, options: RequestInit = {}) => {
    if (!token) throw new Error('No authentication token available');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    return response.json();
  };

  const getCart = async (cartId: string) => {
    setLoading(true);
    try {
      const result = await makeCartRequest('/api/cart', {
        method: 'GET',
        body: JSON.stringify({ cartId }),
      });
      if (result.success) {
        setCart(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, variantId: number = 1, quantity: number = 1) => {
    try {
      const result = await makeCartRequest('/api/cart/items', {
        method: 'POST',
        body: JSON.stringify({ productId, variantId, quantity }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to add item to cart' };
    }
  };

  const removeFromCart = async (lineItemId: string, quantity?: number) => {
    try {
      const result = await makeCartRequest('/api/cart/items', {
        method: 'DELETE',
        body: JSON.stringify({ lineItemId, quantity }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to remove item from cart' };
    }
  };

  const updateCartItem = async (lineItemId: string, quantity: number) => {
    try {
      const result = await makeCartRequest('/api/cart/items', {
        method: 'PATCH',
        body: JSON.stringify({ lineItemId, quantity }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to update cart item' };
    }
  };

  const applyDiscountCode = async (cartId: string, cartVersion: number, code: string) => {
    try {
      const result = await makeCartRequest('/api/cart/discount', {
        method: 'POST',
        body: JSON.stringify({ cartId, cartVersion, code }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to apply discount code' };
    }
  };

  const setShippingAddress = async (cartId: string, cartVersion: number, address: Address) => {
    try {
      const result = await makeCartRequest('/api/cart/shipping', {
        method: 'POST',
        body: JSON.stringify({ cartId, cartVersion, ...address }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to set shipping address' };
    }
  };

  const setBillingAddress = async (cartId: string, cartVersion: number, address: Address) => {
    try {
      const result = await makeCartRequest('/api/cart/billing', {
        method: 'POST',
        body: JSON.stringify({ cartId, cartVersion, ...address }),
      });
      
      if (result.success) {
        setCart(result.data);
        return { success: true };
      } else {
        return { success: false, error: result.error.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to set billing address' };
    }
  };

  return {
    cart,
    loading,
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    applyDiscountCode,
    setShippingAddress,
    setBillingAddress,
  };
}
```

## Notes

### Authentication System
- **Token-based authentication**: The API has migrated from HTTP-only cookies to frontend token management
- **Bearer tokens required**: All authenticated endpoints require `Authorization: Bearer <token>` headers
- **Unified cart authentication**: Both authenticated users and anonymous users use the same authentication flow with access tokens

### Token Management
- **Anonymous tokens**: Use `/api/auth/anonymous-token` for cart operations before user signs in
- **Customer tokens**: Use `/api/auth/password-token` for authenticated customer sessions
- **Token refresh**: Use `/api/auth/refresh-token` to refresh expired access tokens
- **Frontend responsibility**: Frontend must store tokens securely and include them in API requests

### Cart Migration
- Anonymous carts can be migrated to customer accounts during signin
- Include `anonymousId` and `anonymousCartId` in signin requests for seamless cart transfer
- Cart operations work identically for both anonymous and authenticated users

### Technical Details
- All endpoints use dynamic rendering (`force-dynamic`)
- All requests are executed on the Node.js runtime
- Error handling includes proper HTTP status codes and token-specific error codes
- Validation is performed at the service layer
- CommerceTools SDK types are used for type safety

### Security Considerations
- Store access tokens securely (memory/secure storage, not localStorage for production)
- Implement token refresh logic for expired tokens
- Clear all token data on signout
- Use HTTPS in production for secure token transmission