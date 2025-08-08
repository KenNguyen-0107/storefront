# CMS-Agnostic Page System

This package provides a CMS-agnostic page system that can work with any CMS through adapters. It supports Optimizely, Litium, and other CMS systems.

## Features

- **CMS-Agnostic**: Works with any CMS through adapter pattern
- **Type-Safe**: Full TypeScript support with generic types
- **Flexible**: Supports custom metadata and content enhancement
- **Static Generation**: Optional static site generation support
- **SEO-Ready**: Built-in metadata handling for SEO

## Setup

### 1. Register CMS Adapters

Before using the CMS-agnostic page system, you need to register your CMS adapters. Create a registration file:

```typescript
// src/cms/adapters/registerAdapters.ts
// Register Litium CMS Adapter
import "@/packages/litium-cms-adapter/";

// Register Optimizely CMS Adapter (when implemented)
// import "@/packages/optimizely-cms-adapter/";

// Register other CMS adapters here as needed
```

Then import this file early in your application (e.g., in your root layout):

```typescript
// src/app/layout.tsx
import "@/cms/adapters/registerAdapters";
```

This ensures all adapters are registered with the `AdapterFactory` before they're needed.

## Basic Usage

### 1. Create a CMS Client

First, create a client that implements the `ICmsClient` interface:

```typescript
import { ICmsClient } from "./page";

class LitiumClient implements ICmsClient {
  async fetchContent(path: string, variables?: Record<string, unknown>): Promise<unknown> {
    // Implement your CMS-specific content fetching logic
    const response = await fetch(`/api/content?path=${path}`, {
      method: "POST",
      body: JSON.stringify(variables),
    });
    return response.json();
  }

  async fetchAllPages(): Promise<unknown> {
    // Implement fetching all pages for static generation
    const response = await fetch("/api/pages");
    return response.json();
  }

  async getSiteId(): Promise<string> {
    return process.env.SITE_ID || "default";
  }
}
```

### 2. Use with Litium CMS

```typescript
import { createPage } from "./page";
import { LitiumAdapter } from "@/packages/litium-cms-adapter";
import { ComponentFactory } from "@/packages/cms-component-registry";

// Create your component factory
const factory = new ComponentFactory();

// Create the page with Litium adapter
const { generateStaticParams, generateMetadata, CmsPage } = createPage(factory, {
  client: new LitiumClient(),
  adapter: new LitiumAdapter({}),
  enableStaticGeneration: true,
  getAllPages: async (client) => {
    return client.fetchAllPages();
  },
  // Required for Optimizely GraphQL queries
  getSiteId: async () => process.env.SITE_ID || "default",
  getLanguageCode: async () => process.env.SITE_LANGUAGE || "en",
  // Optional: Custom metadata enhancement
  enhanceMetadata: async (metadata, payload, adapter) => {
    // Add CMS-specific metadata logic here
    return metadata;
  },
  // Optional: Custom content enhancement
  enhanceContent: async (content, adapter) => {
    // Add CMS-specific content processing here
    return content;
  },
});

export { generateStaticParams, generateMetadata, CmsPage };
```

### 3. Use with Optimizely CMS

```typescript
import { createPage } from "./page";
import { OptimizelyAdapter } from "@/packages/optimizely-cms-adapter";
import { GraphQLClient } from "graphql-request";

class OptimizelyClient implements ICmsClient {
  private graphqlClient: GraphQLClient;

  constructor() {
    this.graphqlClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT || "");
  }

  async fetchContent(path: string, variables?: Record<string, unknown>): Promise<unknown> {
    // Implement Optimizely-specific GraphQL queries
    return this.graphqlClient.request(optimizelyQuery, { path, ...variables });
  }
}

const { generateStaticParams, generateMetadata, CmsPage } = createPage(factory, {
  client: new OptimizelyClient(),
  adapter: new OptimizelyAdapter({}),
  enableStaticGeneration: true,
  // Required for Optimizely GraphQL queries
  getSiteId: async () => process.env.SITE_ID || "default",
  getLanguageCode: async () => process.env.SITE_LANGUAGE || "en",
  // Add Optimizely-specific enhancements
  enhanceContent: async (content, adapter) => {
    // Handle Optimizely-specific content like product variants
    if (content.path?.includes("/product/")) {
      // Add product-specific logic
    }
    return content;
  },
});
```

## Adapter Interface

All CMS adapters must implement the `IAdapter` interface:

```typescript
interface IAdapter {
  name: string;
  getPageData(jsonDataInput: unknown): Promise<RenderPayload>;
  getHeaderData(jsonDataInput: unknown): Promise<RenderHeaderPayload>;
  getFooterData(jsonDataInput: unknown): Promise<RenderFooterPayload>;
  getSettingData(jsonDataInput: unknown): Promise<RenderSettingPayload>;
  // Optional: Static generation support
  generateStaticParams?(response: unknown): Promise<DefaultCmsPageParams[]>;
}
```

## Configuration Options

### CreatePageOptions

| Option                   | Type                                                | Required | Description                                             |
| ------------------------ | --------------------------------------------------- | -------- | ------------------------------------------------------- |
| `client`                 | `ICmsClient`                                        | Yes      | CMS client instance                                     |
| `adapter`                | `IAdapter`                                          | Yes      | CMS adapter for data transformation                     |
| `getContentByPath`       | `GetContentByPathMethod`                            | Yes      | Function to fetch content by path                       |
| `getAllPages`            | `(client: ICmsClient) => Promise<Result>`           | No       | Function to fetch all pages for static generation       |
| `enableStaticGeneration` | `boolean`                                           | No       | Enable static site generation (default: false)          |
| `enhanceMetadata`        | `(metadata, payload, adapter) => Promise<Metadata>` | No       | Custom metadata enhancement                             |
| `enhanceContent`         | `(content, adapter) => Promise<unknown>`            | No       | Custom content enhancement                              |
| `channel`                | `ChannelDefinition`                                 | No       | Channel information for locale handling                 |
| `propsToCmsPath`         | `(props) => Promise<string \| null>`                | No       | Transform Next.js props to CMS path                     |
| `paramsToLocale`         | `(params, channel) => string \| undefined`          | No       | Extract locale from route params                        |
| `getSiteId`              | `() => Promise<string>`                             | No       | Function to get site ID (required for Optimizely)       |
| `getLanguageCode`        | `() => Promise<string>`                             | No       | Function to get language code (required for Optimizely) |

## Benefits

1. **Unified Interface**: Same API for all CMS systems
2. **Easy Migration**: Switch between CMS systems with minimal code changes
3. **Type Safety**: Full TypeScript support prevents runtime errors
4. **Extensible**: Easy to add new CMS adapters
5. **Performance**: Optional static generation for better performance
6. **SEO Optimized**: Built-in metadata handling

## Migration from Optimizely-Specific Implementation

If you're migrating from the Optimizely-specific implementation:

1. Replace `OptiCmsNextJsPage` with `CmsNextJsPage`
2. Replace `GraphQLClient` with your custom `ICmsClient` implementation
3. Add your CMS adapter to the options
4. Update any CMS-specific logic to use the enhancement functions

The core functionality remains the same, but now it's CMS-agnostic and more flexible.
