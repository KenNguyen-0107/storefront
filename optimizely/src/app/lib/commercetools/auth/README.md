# Authentication Guide

This guide explains how to authenticate and get access tokens using different OAuth 2.0 flows.

## Quick Start

### 1. Password Authentication (Resource Owner Password Credentials)

Use this when you have user credentials (username/email + password):

```typescript
import { passwordAuthService } from "@/app/lib/commercetools/auth/password-auth.service";

const result = await passwordAuthService.authenticateWithPassword({
  clientId: "your-client-id",
  clientSecret: "your-client-secret", 
  username: "user@example.com",
  password: "userPassword123",
  authUrl: "https://auth.commercetools.com",
  projectKey: "your-project-key", // optional
  scope: "manage_project" // optional
});

console.log("Access Token:", result.accessToken);
```

### 2. Client Credentials Authentication

Use this for server-to-server authentication (existing implementation):

```typescript
import { TokenManager } from "@/app/lib/commercetools/auth/token-manager";

const tokenManager = TokenManager.getInstance({
  projectKey: "your-project",
  clientId: "your-client-id",
  clientSecret: "your-client-secret",
  apiUrl: "https://api.commercetools.com",
  authUrl: "https://auth.commercetools.com"
});

const accessToken = await tokenManager.getAccessToken();
```

## Authentication Flows

### OAuth 2.0 Resource Owner Password Credentials Grant

**When to use:** When you have user credentials and need to authenticate on behalf of a user.

**Flow:**
1. Send client credentials (ID + secret) via Basic Auth header
2. Send username + password in request body
3. Receive access token + optional refresh token

**Request Format:**
```
POST {authUrl}/oauth/{projectKey}/customers/token
Authorization: Basic base64(clientId:clientSecret)
Content-Type: application/x-www-form-urlencoded

grant_type=password&username={username}&password={password}&scope={scope}
```

### OAuth 2.0 Client Credentials Grant  

**When to use:** For server-to-server authentication, when your application needs to access resources on its own behalf.

**Flow:**
1. Send client credentials (ID + secret) via Basic Auth header
2. Request access using client_credentials grant type
3. Receive access token

**Request Format:**
```
POST {authUrl}/oauth/{projectKey}/anonymous/token
Authorization: Basic base64(clientId:clientSecret)
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
```

## Complete Example with Error Handling

```typescript
import { AuthenticationManager } from "@/app/lib/commercetools/auth/auth-example";

const authManager = new AuthenticationManager();

// Login
await authManager.login({
  clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
  clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!,
  username: "user@example.com",
  password: "password123",
  authUrl: process.env.COMMERCETOOLS_AUTH_URL!,
  projectKey: process.env.COMMERCETOOLS_PROJECT_KEY
});

// Make authenticated requests
const response = await authManager.makeAuthenticatedRequest(
  "https://api.commercetools.com/your-project/products"
);

// The manager handles token refresh automatically
```

## Cookie-Based Authentication with User-Authenticated CommerceTools Client

### 1. Sign In with Cookies

The signin endpoint automatically handles OAuth2 password grant and sets secure cookies:

```typescript
// POST /api/customers/signin
{
  "email": "user@example.com",
  "password": "password123"
}

// Response includes customer data and sets these cookies:
// - ct_access_token (HTTP-only, secure)
// - ct_refresh_token (HTTP-only, secure) 
// - ct_token_type (HTTP-only, secure)
```

### 2. Protected Routes with User Services

Use user-authenticated services in API routes:

```typescript
import { withUserAuthentication } from "@/app/lib/commercetools/utils/auth.utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return withUserAuthentication(request, async (services) => {
    // Use services - they handle CommerceTools API calls
    const customer = await services.customer.getProfile();

    return NextResponse.json({
      success: true,
      data: customer,
    });
  });
}

// Cart operations
export async function POST(request: NextRequest): Promise<NextResponse> {
  return withUserAuthentication(request, async (services) => {
    const body = await request.json();
    
    // Add item to cart using cart service
    const cart = await services.cart.addLineItem(
      body.productId,
      body.variantId,
      body.quantity
    );

    return NextResponse.json({
      success: true,
      data: cart,
    });
  });
}
```

### 3. Manual Authentication Check

For more control, use the auth utilities directly:

```typescript
import { 
  createAuthenticatedClient,
  requireAuthentication,
  getAuthenticatedUser 
} from "@/app/lib/commercetools/utils/auth.utils";

export async function GET(request: NextRequest) {
  // Simple auth check
  const authError = requireAuthentication(request);
  if (authError) return authError;
  
  // Get authenticated user data
  const user = getAuthenticatedUser(request);
  
  // Create authenticated client
  const result = createAuthenticatedClient(request);
  if ('error' in result) return result.error;
  
  const { userApiRoot } = result;
  
  // Use userApiRoot for CommerceTools API calls
}
```

### 4. Cart Operations Example

```typescript
import { withUserAuthentication } from "@/app/lib/commercetools/utils/auth.utils";

// Get customer's cart
export async function GET(request: NextRequest): Promise<NextResponse> {
  return withUserAuthentication(request, async (userApiRoot, user) => {
    const response = await userApiRoot
      .me()
      .activeCart()
      .get()
      .execute();

    return NextResponse.json({
      success: true,
      data: response.body,
    });
  });
}

// Add item to cart
export async function POST(request: NextRequest): Promise<NextResponse> {
  return withUserAuthentication(request, async (userApiRoot, user) => {
    const body = await request.json();
    
    // Get cart version
    const cart = await userApiRoot.me().activeCart().get().execute();
    
    // Add item
    const response = await userApiRoot
      .me()
      .carts()
      .withId({ ID: cart.body.id })
      .post({
        body: {
          version: cart.body.version,
          actions: [{
            action: "addLineItem",
            productId: body.productId,
            quantity: body.quantity || 1,
          }],
        },
      })
      .execute();

    return NextResponse.json({
      success: true,
      data: response.body,
    });
  });
}
```

### 4. Sign Out

Clear authentication cookies:

```typescript
// POST /api/customers/signout
// No body required - clears all auth cookies
```

## Environment Variables

Make sure you have these environment variables set:

```env
CTP_PROJECT_KEY=your-project-key
CTP_CLIENT_ID=your-client-id
CTP_CLIENT_SECRET=your-client-secret
CTP_API_URL=https://api.eu-central-1.aws.commercetools.com
CTP_AUTH_URL=https://auth.eu-central-1.aws.commercetools.com
CTP_DEFAULT_LOCALE=en
```

## Error Handling

Common error scenarios:

- **401 Unauthorized**: Invalid client credentials or user credentials
- **400 Bad Request**: Malformed request (missing required fields)
- **Token Expired**: Access token has expired, use refresh token or re-authenticate

## Security Notes

1. **Never expose client secrets** in frontend code
2. **Store tokens securely** (use secure HTTP-only cookies for web apps)
3. **Use HTTPS** for all authentication requests
4. **Set proper cookie options** (httpOnly, secure, sameSite)
5. **Implement CSRF protection** for state-changing operations

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Next.js API    │    │ CommerceTools   │
│                 │    │   Routes         │    │ Platform        │
├─────────────────┤    ├──────────────────┤    ├─────────────────┤
│ • Login Form    │───▶│ • /signin        │───▶│ • Customer API  │
│ • Protected     │    │ • /signout       │    │ • OAuth2 Auth   │
│   Pages         │    │ • /profile       │    │ • Token Mgmt    │
│                 │    │ • Auth Middleware│    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         ▲                        │                       │
         │                        ▼                       │
         │              ┌──────────────────┐              │
         └──────────────│ Secure Cookies   │◀─────────────┘
                        │ • Access Token   │
                        │ • Refresh Token  │
                        │ • Customer ID    │
                        └──────────────────┘
```