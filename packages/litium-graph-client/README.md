# Litium Graph Client

A simple GraphQL client for the Litium e-commerce platform, designed to provide seamless integration with Litium's GraphQL API.

## 📖 Overview

The Litium Graph Client provides:

- **Type-safe GraphQL operations** with full TypeScript support
- **Bearer token authentication** for secure API access
- **B2B/B2C context filtering** via storefront context URL
- **Environment-based configuration** for easy deployment
- **Built-in query and mutation methods**
- **Next.js integration** with cache tagging support

## 🚀 Installation

```bash
npm install @niteco/litium-graph-client
# or
yarn add @niteco/litium-graph-client
# or
pnpm add @niteco/litium-graph-client
```

## ⚙️ Configuration

### Environment Variables

The client can be configured using environment variables:

```bash
# Required
LITIUM_GRAPHQL_URL=https://demo.litium.com/storefront.graphql

# Optional
LITIUM_TOKEN=your-bearer-token
LITUM_STOREFRONT_CONTEXT_URL=https://your-storefront.com
LITIUM_DEBUG=false
LITIUM_QUERY_LOG=false
LITIUM_CMS_SCHEMA=v9
```

### Programmatic Configuration

```typescript
import { createClient, LitiumGraphConfig } from "@niteco/litium-graph-client";

const config: LitiumGraphConfig = {
  endpoint: "https://demo.litium.com/storefront.graphql",
  token: "your-bearer-token", // Optional
  contextUrl: "https://your-storefront.com", // Optional for B2B/B2C filtering
  debug: false,
};

const client = createClient(config);
```

## 🏃‍♂️ Quick Start

### Basic Usage (Public Access)

```typescript
import { createClient } from "@niteco/litium-graph-client";
import { gql } from "graphql-request";

// Create client for public access
const client = createClient();

// Define your query
const GET_PRODUCTS = gql`
  query GetProducts($first: Int!) {
    products(first: $first) {
      nodes {
        id
        articleNumber
        name
        price {
          unitPriceIncludingVat
          currency {
            code
          }
        }
      }
    }
  }
`;

// Execute query
const data = await client.query(GET_PRODUCTS, { first: 10 });
console.log(data.products);
```

### With Authentication

```typescript
import { createClient } from "@niteco/litium-graph-client";

// Create client with bearer token
const client = createClient({
  endpoint: "https://demo.litium.com/storefront.graphql",
  token: "your-bearer-token",
  contextUrl: "https://your-b2b-context.com", // For B2B/B2C filtering
});

// Or update token after login
client.setToken("new-token-after-login");
client.setContextUrl("https://updated-context.com");
```

### Login Example

```typescript
import { createClient } from "@niteco/litium-graph-client";
import { gql } from "graphql-request";

const client = createClient();

// Login mutation (example)
const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

async function authenticateAndQuery() {
  try {
    // Perform login
    const loginResult = await client.mutate(LOGIN_MUTATION, {
      username: "your_username",
      password: "your_password",
    });

    // Set the token for subsequent requests
    client.setToken(loginResult.login.token);

    // Now make authenticated queries
    const GET_ORDERS = gql`
      query GetOrders {
        orders {
          id
          status
          total
          currency {
            code
          }
        }
      }
    `;

    const orders = await client.query(GET_ORDERS);
    console.log("User orders:", orders);
  } catch (error) {
    console.error("Authentication failed:", error);
  }
}
```

## 🔧 Advanced Usage

### Request Middleware

```typescript
import { createClient } from "@niteco/litium-graph-client";

const client = createClient();

// Add custom middleware
client.setRequestMiddleware(async (request) => {
  // Add custom headers
  request.headers = {
    ...request.headers,
    "X-Custom-Header": "custom-value",
  };

  // Log requests in development
  if (process.env.NODE_ENV === "development") {
    console.log("GraphQL Request:", request.body);
  }

  return request;
});
```

### Client Flags

```typescript
import { createClient } from "@niteco/litium-graph-client";

const client = createClient();

// Enable Next.js features and debug logging
client.updateFlags({
  nextJsFetchDirectives: true, // Enable Next.js cache tagging
  debug: true, // Enable debug logging
});

// Temporarily disable debug logging
client.updateFlags({ debug: false }, true); // temporary = true
// ... perform operations
client.restoreFlags(); // restore previous flags
```

### Error Handling

```typescript
import { createClient } from "@niteco/litium-graph-client";
import { gql } from "graphql-request";

const client = createClient();

try {
  const data = await client.query(GET_PRODUCTS, { first: 10 });
} catch (error) {
  if (error.response?.errors) {
    // GraphQL errors
    console.error("GraphQL Errors:", error.response.errors);
  } else {
    // Network or other errors
    console.error("Request Error:", error.message);
  }
}
```

## 🎯 Authentication

Litium supports Bearer token authentication:

### Public Access

```typescript
const client = createClient(); // No token - public read access
```

### Token Authentication

```typescript
const client = createClient({
  endpoint: "https://demo.litium.com/storefront.graphql",
  token: "your-bearer-token",
});

// Or set token after client creation
client.setToken("your-bearer-token");
```

### B2B/B2C Context

```typescript
const client = createClient({
  endpoint: "https://demo.litium.com/storefront.graphql",
  token: "your-bearer-token",
  contextUrl: "https://your-b2b-context.com", // Enables B2B/B2C filtering
});

// Or set context URL dynamically
client.setContextUrl("https://different-context.com");
```

## 🔄 Next.js Integration

```typescript
// app/lib/litium-client.ts
import { createClient } from '@niteco/litium-graph-client'

export const litiumClient = createClient({
  endpoint: process.env.LITIUM_GRAPHQL_URL!,
  token: process.env.LITIUM_TOKEN,
}, undefined, {
  nextJsFetchDirectives: true, // Enable Next.js cache tagging
  debug: process.env.NODE_ENV === 'development' // Enable debug in development
})

// app/products/page.tsx
import { litiumClient } from '@/lib/litium-client'
import { gql } from 'graphql-request'

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        name
        articleNumber
      }
    }
  }
`

export default async function ProductsPage() {
  const data = await litiumClient.query(GET_PRODUCTS)

  return (
    <div>
      {data.products.nodes.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Article: {product.articleNumber}</p>
        </div>
      ))}
    </div>
  )
}
```

## 📚 API Reference

### Main Classes

- `LitiumGraphClient` - Main GraphQL client class
- `createClient()` - Factory function for creating client instances

### Configuration Types

- `LitiumGraphConfig` - Client configuration interface
- `ILitiumGraphClientFlags` - Client behavior flags
- `AuthMode` - Authentication mode enumeration (Public, Token)

### Methods

- `client.query(query, variables)` - Execute GraphQL query
- `client.mutate(mutation, variables)` - Execute GraphQL mutation
- `client.setToken(token)` - Set bearer token
- `client.setContextUrl(url)` - Set B2B/B2C context URL

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 📄 License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.

## 🔗 Related Packages

- `graphql-request` - The underlying GraphQL client library
