# Dynamic Content System Example

This example demonstrates how to use the Litium GraphQL Client with an adapter pattern to fetch CMS data and render it using the Dynamic Content Engine.

## Overview

The system consists of several key components:

1. **ContentService** - Orchestrates data fetching from the CMS
2. **ContentProvider** - Factory pattern for resolving clients and adapters via environment configuration
3. **Content Adapters** - Transform CMS-specific data to the standard RenderPayload format
4. **RenderDynamicContent** - Renders the transformed payload into React components

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────┐
│  Environment    │───▶│  ContentProvider │───▶│   ContentService    │
│  Configuration  │    │   (Factory)      │    │                     │
└─────────────────┘    └──────────────────┘    └─────────────────────┘
                                │                          │
                                ▼                          ▼
                       ┌──────────────────┐    ┌─────────────────────┐
                       │ CMS GraphClient  │    │   Content Adapter   │
                       │ (Litium/Opti)   │    │ (Litium/Opti/Custom)│
                       └──────────────────┘    └─────────────────────┘
                                │                          │
                                ▼                          ▼
                       ┌──────────────────┐    ┌─────────────────────┐
                       │  GraphQL Query   │    │   RenderPayload     │
                       │  (CMS Specific)  │    │   (Standardized)    │
                       └──────────────────┘    └─────────────────────┘
                                                          │
                                                          ▼
                                               ┌─────────────────────┐
                                               │ RenderDynamicContent│
                                               │   (React UI)        │
                                               └─────────────────────┘
```

## Setup

### 1. Environment Configuration

The system now supports multiple CMS providers with dedicated configuration for each:

#### Litium CMS Configuration

Create a `.env.local` file in your project root:

```bash
# CMS Configuration
CMS_TYPE=litium
LITIUM_ENDPOINT=https://your-litium-instance.com/storefront.graphql
LITIUM_TOKEN=your-bearer-token-here
LITIUM_CONTEXT_URL=https://your-litium-instance.com

# Optional settings
CONTENT_DEBUG=true
NEXTJS_FEATURES=true
CONTENT_ADAPTER_TYPE=litium
```

#### Optimizely CMS Configuration

```bash
# CMS Configuration
CMS_TYPE=optimizely

# Optimizely Graph Authentication
OPTIMIZELY_GRAPH_SECRET=YOUR-SECRET-HERE
OPTIMIZELY_GRAPH_APP_KEY=YOUR-KEY-HERE
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com

# Optimizely CMS API Client credentials
OPTIMIZELY_CMS_CLIENT_ID=YOUR_CMS_API_CLIENT_ID
OPTIMIZELY_CMS_CLIENT_SECRET=YOUR_CMS_API_CLIENT_SECRET

# Optimizely CMS API Impersonation (optional)
OPTIMIZELY_CMS_USER_ID=YOUR_CMS_LOGIN_HERE

# Site Configuration
SITE_DOMAIN=your-project.vercel.app
SITE_PRIMARY=your-project.vercel.app

# Debug and Logging
OPTIMIZELY_GRAPH_QUERY_LOG=1
OPTIMIZELY_DEBUG=1

# Data Platform Integration (optional)
OPTIMIZELY_DATAPLATFORM_ID=your-dataplatform-id
OPTIMIZLEY_DATAPLATFORM_ENDPOINT=https://api.zaius.com

# Content Intelligence / Content Recs (optional)
OPTIMIZELY_CONTENTRECS_CLIENT=your-client-id
OPTIMIZELY_CONTENTRECS_DELIVERY=your-delivery-key
OPTIMIZELY_CONTENTRECS_DELIVERY_KEY=your-delivery-key
OPTIMIZELY_CONTENTRECS_DOMAIN=idio.co

# Web Experimentation (optional)
OPTIMIZELY_WEB_EXPERIMENTATION_PROJECT=your-project-id

# Optional settings
CONTENT_DEBUG=true
NEXTJS_FEATURES=true
CONTENT_ADAPTER_TYPE=optimizely
```

#### Custom CMS Configuration

```bash
# CMS Configuration
CMS_TYPE=custom
CUSTOM_CMS_ENDPOINT=https://your-custom-cms.com/graphql
CUSTOM_CMS_TOKEN=your-custom-token

# Optional settings
CONTENT_DEBUG=true
NEXTJS_FEATURES=true
CONTENT_ADAPTER_TYPE=custom
```

### 2. Basic Usage

```typescript
import { getContentService } from "../lib/content-provider";
import { RenderDynamicContent } from "../packages/composable-content-engine/RenderDynamicContent";

// Get the content service (auto-configured from environment)
const contentService = getContentService();

// Fetch page content by URL
const payload = await contentService.getPageContentByUrl("/my-page");

// Render the content
return <RenderDynamicContent payload={payload} />;
```

### 3. Advanced Usage with CMS-Specific Configuration

#### Litium Example

```typescript
import { createContentProvider } from "../lib/content-provider";

// Create provider with Litium-specific configuration
const provider = createContentProvider({
  cmsType: "litium",
  litiumEndpoint: "https://custom-endpoint.com/graphql",
  litiumToken: "custom-token",
  debug: true,
});

const contentService = provider.getContentService();
const payload = await contentService.getPageContentByUrl("/my-page");
```

#### Optimizely Example

```typescript
import { createContentProvider } from "../lib/content-provider";

// Create provider with Optimizely-specific configuration
const provider = createContentProvider({
  cmsType: "optimizely",
  optimizelyGraphGateway: "https://cg.optimizely.com",
  optimizelyGraphSecret: "your-secret",
  optimizelyGraphAppKey: "your-app-key",
  debug: true,
});

const contentService = provider.getContentService();
const payload = await contentService.getPageContentByUrl("/my-page");
```

## API Reference

### Configuration Interfaces

The system now uses discriminated union types for type-safe configuration:

#### LitiumContentProviderConfig

```typescript
interface LitiumContentProviderConfig {
  cmsType: "litium";
  litiumEndpoint?: string;
  litiumToken?: string;
  litiumContextUrl?: string;
  debug?: boolean;
  adapterType?: string;
  enableCache?: boolean;
  enableNextJsFeatures?: boolean;
}
```

#### OptimizelyContentProviderConfig

```typescript
interface OptimizelyContentProviderConfig {
  cmsType: "optimizely";
  // Optimizely Graph Authentication
  optimizelyGraphSecret?: string;
  optimizelyGraphAppKey?: string;
  optimizelyGraphGateway?: string;

  // Optimizely CMS API
  optimizelyCmsClientId?: string;
  optimizelyCmsClientSecret?: string;
  optimizelyCmsUserId?: string;

  // Site Configuration
  siteDomain?: string;
  sitePrimary?: string;

  // Debug and Logging
  optimizelyGraphQueryLog?: boolean;
  optimizelyDebug?: boolean;

  // Data Platform Integration
  optimizelyDataPlatformId?: string;
  optimizelyDataPlatformEndpoint?: string;

  // Content Intelligence / Content Recs
  optimizelyContentRecsClient?: string;
  optimizelyContentRecsDelivery?: string;
  optimizelyContentRecsDeliveryKey?: string;
  optimizelyContentRecsDomain?: string;

  // Web Experimentation
  optimizelyWebExperimentationProject?: string;

  // Base configuration
  debug?: boolean;
  adapterType?: string;
  enableCache?: boolean;
  enableNextJsFeatures?: boolean;
}
```

#### CustomContentProviderConfig

```typescript
interface CustomContentProviderConfig {
  cmsType: "custom";
  customEndpoint?: string;
  customToken?: string;
  customConfig?: Record<string, unknown>;
  debug?: boolean;
  adapterType?: string;
  enableCache?: boolean;
  enableNextJsFeatures?: boolean;
}
```

### ContentService

The main service class for fetching and transforming content.

#### Methods

- `getPageContentByUrl(url: string): Promise<RenderPayload>`
- `getPageContentById(id: string): Promise<RenderPayload>`
- `updateClient(client: any): void`
- `getClient(): any`

### ContentProvider

Factory class for creating configured content services with CMS-specific validation.

#### Validation Rules

**Litium:**

- `LITIUM_ENDPOINT` or `LITIUM_ENDPOINT` is required

**Optimizely:**

- `OPTIMIZELY_GRAPH_GATEWAY` is required
- If using authentication: both `OPTIMIZELY_GRAPH_SECRET` and `OPTIMIZELY_GRAPH_APP_KEY` are required
- If using CMS API: both `OPTIMIZELY_CMS_CLIENT_ID` and `OPTIMIZELY_CMS_CLIENT_SECRET` are required

**Custom:**

- `CUSTOM_CMS_ENDPOINT` is required

### Supported Content Adapters

#### Litium Content Adapter

Transforms Litium CMS data structures to the standard RenderPayload format.

**Supported Block Types:**

- `TextBlock` → `text`
- `ImageBlock` → `image`
- `VideoBlock` → `video`
- `HtmlBlock` → `html`
- `ButtonBlock` → `button`
- `CarouselBlock` → `carousel`
- `ProductBlock` → `product`
- `CategoryBlock` → `category`

#### Optimizely Content Adapter

_Coming soon_ - Will transform Optimizely CMS data structures to RenderPayload format.

## Environment Variable Reference

### Litium Environment Variables

| Variable             | Required | Description                             |
| -------------------- | -------- | --------------------------------------- |
| `CMS_TYPE`           | No       | Set to `litium` (default)               |
| `LITIUM_ENDPOINT`    | Yes      | Litium GraphQL endpoint URL             |
| `LITIUM_TOKEN`       | No       | Bearer token for authenticated requests |
| `LITIUM_CONTEXT_URL` | No       | Context URL for Litium requests         |

### Optimizely Environment Variables

| Variable                       | Required | Description                            |
| ------------------------------ | -------- | -------------------------------------- |
| `CMS_TYPE`                     | No       | Set to `optimizely`                    |
| `OPTIMIZELY_GRAPH_GATEWAY`     | Yes      | Optimizely Graph gateway URL           |
| `OPTIMIZELY_GRAPH_SECRET`      | No\*     | Secret for authenticated Graph access  |
| `OPTIMIZELY_GRAPH_APP_KEY`     | No\*     | App key for authenticated Graph access |
| `OPTIMIZELY_CMS_CLIENT_ID`     | No       | CMS API client ID                      |
| `OPTIMIZELY_CMS_CLIENT_SECRET` | No       | CMS API client secret                  |
| `OPTIMIZELY_CMS_USER_ID`       | No       | User ID for CMS API impersonation      |
| `SITE_DOMAIN`                  | No       | Frontend domain                        |
| `SITE_PRIMARY`                 | No       | Primary site domain                    |
| `OPTIMIZELY_GRAPH_QUERY_LOG`   | No       | Enable query logging (1/0)             |
| `OPTIMIZELY_DEBUG`             | No       | Enable debug mode (1/0)                |

\*Required as a pair for authenticated access

### General Environment Variables

| Variable               | Required | Description                         |
| ---------------------- | -------- | ----------------------------------- |
| `CONTENT_DEBUG`        | No       | Enable content system debug logging |
| `DEBUG`                | No       | Global debug mode                   |
| `CONTENT_ADAPTER_TYPE` | No       | Override adapter type               |
| `CONTENT_ENABLE_CACHE` | No       | Enable caching (default: true)      |
| `NEXTJS_FEATURES`      | No       | Enable Next.js specific features    |

## Testing

Run the example page to test the integration:

```bash
npm run dev
```

Navigate to: `http://localhost:3000/dynamic-content-example?url=/your-page-url`

Or test with a specific page ID: `http://localhost:3000/dynamic-content-example?id=your-page-id`

## Troubleshooting

### Common Issues

1. **Environment Configuration Errors**

   - Ensure all required environment variables are set for your CMS type
   - Check that endpoints are accessible
   - Verify authentication credentials are valid

2. **CMS-Specific Issues**

   **Litium:**

   - Verify the GraphQL endpoint is accessible
   - Check that the bearer token is valid
   - Ensure the requested page exists in Litium

   **Optimizely:**

   - Verify the Graph gateway URL is correct
   - Check that secret/app key pair is valid
   - Ensure the site domain is properly configured

3. **Adapter Transformation Issues**
   - Check the console for transformation errors
   - Verify that CMS blocks match the expected structure
   - Test with a simple page first

### Debug Mode

Enable debug mode for detailed logging:

```bash
# For all CMS types
CONTENT_DEBUG=true
DEBUG=true

# For Optimizely specifically
OPTIMIZELY_DEBUG=1
OPTIMIZELY_GRAPH_QUERY_LOG=1
```

This will log:

- GraphQL queries and responses
- Adapter transformations
- Client configuration
- Validation results
- Error details

## Performance Considerations

1. **Environment Validation**: Performed once at startup and cached
2. **Caching**: Enable caching for production environments
3. **Next.js Features**: Use Next.js cache tagging for optimal performance
4. **Query Optimization**: Only fetch required fields in GraphQL queries
5. **Error Handling**: Implement proper error boundaries for content loading

## Extending the System

### Adding New CMS Support

1. Create a new configuration interface extending `BaseContentProviderConfig`
2. Add the new CMS type to the `ContentProviderConfig` union
3. Implement validation logic in `validateXXXConfig` method
4. Implement client creation in `createXXXClient` method
5. Create corresponding content adapter
6. Update environment variable documentation

### Adding Custom Adapters

1. Create a new adapter class implementing the adapter interface
2. Register it in the ContentService
3. Update the adapter type mapping

## License

This example is part of the Niteco Storefront project.
