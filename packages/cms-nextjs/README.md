# Multi-CMS Next.js Integration

This package provides the needed components to implement a Next.js based frontend for multiple CMS platforms, including **Litium CMS** and **Optimizely SaaS CMS**, with full support for preview capabilities and dynamic content rendering.

## Supported CMS Platforms

- **Litium CMS** - Full support with GraphQL integration
- **Optimizely SaaS CMS** - Full support with Content Graph integration
- **Custom CMS** - Extensible adapter system for custom implementations

## Features

### Catch-all route rendering

Default implementation of the Catch-All route in Next.js to allow rendering any page created and managed by editors across different CMS platforms.

```typescript
// In `src/app/[[...path]]/page.tsx`

import { createPage } from "@niteco/cms-nextjs";
import { getFactory } from "@/packages/cms-component-registry/src/factoryRegistry";
import { getSdk } from "@/utils/sdk";
import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";

const { sdk, client } = getSdk();

const { CmsPage, generateMetadata, generateStaticParams } = createPage(getFactory(), {
  client,
  getContentByPath: (client, variables) => {
    if (!variables?.path || variables.path === "/" || variables.path?.length === 0) {
      return sdk.GetHomePage();
    }
    return sdk.GetContentByPath(variables);
  },
  adapter: AdapterFactory.create(process.env.CMS_TYPE as "litium" | "optimizely" | "custom"),
});

// Configure the Next.JS route handling for the pages
export const dynamic = "force-dynamic"; // Force SSR
export const dynamicParams = false; // Allow new pages to be resolved without rebuilding the site
export const revalidate = 0;
export const fetchCache = "force-no-store"; // No caching of fetch results

// Export CMS Page
export { generateMetadata, generateStaticParams };
export default CmsPage;
```

The `createPage` method accepts a component factory and configuration options including:

- `client`: GraphQL client instance
- `getContentByPath`: Function to fetch content by path
- `adapter`: CMS adapter for content transformation (supports litium, optimizely, custom)
- `channel`: Channel definition for locale handling
- `propsToCmsPath`: Custom path transformation function
- `paramsToLocale`: Custom locale resolution function

### CMS Adapter System

The package includes a flexible adapter system that transforms CMS-specific data structures into a unified format:

```typescript
// Configure adapter based on CMS type
const adapter = AdapterFactory.create(process.env.CMS_TYPE as "litium" | "optimizely" | "custom");
```

**Supported Adapters:**

- **Litium Adapter**: Transforms Litium CMS data structures
- **Optimizely Adapter**: Transforms Optimizely Content Graph data
- **Custom Adapter**: Extensible for custom CMS implementations

### Middleware

The package provides the following enhancements for Next.js middleware:
| Wrapper | import | Purpose |
| --- | --- | --- |
| withLanguagePrefix | `@niteco/cms-nextjs/page` | Handle the redirect of the homepage `/` to the locale that best matches the incoming request, such as `/en`. The locales and their URLs are taken from the second parameter - the ChannelDefinition.

### Components

The package provides shared components for common CMS functionality:

```typescript
import { CmsContentLink, CmsImage, CmsLink } from "@niteco/cms-nextjs/components";
```

These components provide consistent rendering of CMS content across your application.

### Client Utilities

For server-side rendering and client-side operations:

```typescript
import { createClient } from "@niteco/cms-nextjs";
```

The client utilities help with content fetching and management in your Next.js application.

## Configuration

### Environment Variables

Set your CMS type and configuration:

```bash
# For Litium CMS
CMS_TYPE=litium
LITIUM_GRAPHQL_URL=https://your-litium-instance.com/graphql
LITIUM_STOREFRONT_CONTEXT_URL=https://your-litium-instance.com

# For Optimizely CMS
CMS_TYPE=optimizely
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com
OPTIMIZELY_GRAPH_SECRET=your-secret
OPTIMIZELY_GRAPH_APP_KEY=your-app-key

# For Custom CMS
CMS_TYPE=custom
CUSTOM_CMS_ENDPOINT=https://your-custom-cms.com/api
```
