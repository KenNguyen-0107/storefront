# CMS Directory

This directory contains all content management system integration code, including providers, services, adapters, and types.

## Structure

```
src/cms/
├── adapters/
│   └── litiumContentAdapter.ts     # Litium CMS data adapter
├── provider/
│   └── contentProvider.ts          # CMS provider factory
├── services/
│   └── contentService.ts           # Content fetching service
├── types/
│   ├── contentProvider.types.ts    # Content provider configuration types
│   ├── contentService.types.ts     # Content service interfaces
│   └── index.ts                    # Barrel exports for all types
└── README.md                       # This file
```

## File Naming Convention

All files follow **camelCase** naming convention:

- ✅ `contentProvider.ts` (not `content-provider.ts`)
- ✅ `contentService.ts` (not `content-service.ts`)
- ✅ `litiumContentAdapter.ts` (not `litium-content-adapter.ts`)
- ✅ `contentProvider.types.ts` (not `content-provider.types.ts`)

## Core Components

### `provider/contentProvider.ts`

Factory class that handles:

- **Multi-CMS Support** - Litium, Optimizely, Custom CMS
- **Environment Configuration** - Resolves config from environment variables
- **Validation** - Validates CMS-specific configuration requirements
- **Client Creation** - Creates appropriate CMS clients based on config
- **Singleton Pattern** - Ensures single instance per application

### `services/contentService.ts`

Service class that provides:

- **Content Fetching** - Fetch pages by URL or ID
- **Data Transformation** - Uses adapters to transform CMS data
- **GraphQL Queries** - Optimized queries for different page types
- **Error Handling** - Comprehensive error handling and logging

### `adapters/litiumContentAdapter.ts`

Adapter that transforms:

- **Litium Page Data** → **RenderPayload Format**
- **Content Areas** → **Rows and Columns**
- **Blocks** → **Standardized Block Types**
- **Fallback Content** - Provides default content when none available

### `types/`

Type definitions organized by purpose:

- **contentProvider.types.ts** - Provider configuration interfaces

  - `BaseContentProviderConfig` - Base configuration interface
  - `LitiumContentProviderConfig` - Litium CMS specific configuration
  - `OptimizelyContentProviderConfig` - Optimizely CMS specific configuration
  - `CustomContentProviderConfig` - Custom CMS configuration
  - `ContentProviderConfig` - Union type for all provider configurations
  - `ValidationResult` - Configuration validation result interface
  - `CMSType` - CMS type enumeration

- **contentService.types.ts** - Service and adapter interfaces

  - `ContentServiceConfig` - Service configuration interface
  - `IContentService` - Main service interface
  - `ContentAdapter` - Content transformation adapter interface
  - `ContentFetchOptions` - Options for content fetching
  - `ContentServiceError` - Error handling interfaces
  - `ContentServiceResult` - Result wrapper interface
  - `AdapterFactory` - Factory interface for adapters

- **index.ts** - Barrel exports for convenient importing

## Usage Examples

### Basic Usage

```typescript
import { getContentService } from "./cms/provider/contentProvider.js";

// Get content service (uses environment configuration)
const contentService = getContentService();

// Fetch page content
const payload = await contentService.getPageContentByUrl("/home");
```

### Custom Configuration

```typescript
import { ContentProvider } from "./cms/provider/contentProvider.js";

// Create provider with custom config
const provider = new ContentProvider({
  cmsType: "litium",
  litiumEndpoint: "https://my-litium-site.com/graphql",
  debug: true,
});

const contentService = provider.getContentService();
```

### Type-Safe Imports

```typescript
import type {
  ContentProviderConfig,
  LitiumContentProviderConfig,
  ContentServiceConfig,
  RenderPayload,
} from "./cms/types/index.js";
```

## Environment Variables

The system supports multiple CMS types with their respective environment variables:

### Litium CMS

```env
CMS_TYPE=litium
LITIUM_ENDPOINT=https://your-litium-site.com/graphql
LITIUM_TOKEN=your-token-here
LITIUM_CONTEXT_URL=https://your-litium-site.com
```

### Optimizely CMS

```env
CMS_TYPE=optimizely
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com/content/v2
OPTIMIZELY_GRAPH_SECRET=your-secret
OPTIMIZELY_GRAPH_APP_KEY=your-app-key
```

### Custom CMS

```env
CMS_TYPE=custom
CUSTOM_CMS_ENDPOINT=https://your-cms.com/api
CUSTOM_CMS_TOKEN=your-token
```

## Benefits of CMS Directory Structure

1. **Clear Purpose** - `cms` folder clearly indicates CMS-related code
2. **Logical Organization** - Separate subdirectories for providers, services, adapters, and types
3. **Scalability** - Easy to add more CMS providers and adapters
4. **Maintainability** - Organized by functionality with clear separation
5. **Type Safety** - Comprehensive TypeScript support with separated types
6. **Performance** - Cached validation and singleton patterns
7. **Consistency** - camelCase naming throughout for better readability

## Import Path Examples

With the current structure, import paths follow this pattern:

```typescript
// Provider
import { ContentProvider } from "./cms/provider/contentProvider.js";

// Service
import { ContentService } from "./cms/services/contentService.js";

// Adapter
import { LitiumContentAdapter } from "./cms/adapters/litiumContentAdapter.js";

// Types
import type { ContentProviderConfig } from "./cms/types/index.js";
```

This structure provides a clean, professional, and maintainable foundation for CMS integration that can easily scale to support additional content management systems.
