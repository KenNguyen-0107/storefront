import { createPage } from "@/packages/cms-nextjs/src/cms-page/page";
import { getFactory } from "@/packages/cms-component-registry/src/factoryRegistry";
import { getSdk, validateCmsType as getCmsType } from "@/utils/sdk";
import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";
import type { ICmsClient } from "@/packages/cms-nextjs/src/cms-page/types/cms-client.types";

const { sdk } = getSdk();

/**
 * CMS-agnostic content fetching function that handles different SDK types
 */
async function fetchContentByCmsType(path: string, variables?: Record<string, unknown>) {
  const cmsType = getCmsType();

  // Handle home page requests (empty path, "/", or length 0)
  const isHomePage = !path || path === "/" || path.length === 0;

  switch (cmsType) {
    case "litium":
      // Import Litium SDK type for type safety
      const { getSdk: getLitiumSdk } = await import("@/generated/litium");
      const litiumSdk = sdk as ReturnType<typeof getLitiumSdk>;

      if (isHomePage) {
        // Litium has a dedicated GetHomePage method
        return litiumSdk.GetHomePage();
      } else {
        // Litium GetContentByPath only requires path parameter
        return litiumSdk.GetContentByPath({ path });
      }

    case "optimizely-configure-commerce":
      // Import OptimizelyConfigureCommerce SDK type for type safety
      const { getSdk: getOptimizelyConfigureCommerceSdk } = await import("@/generated/optimizely-configure-commerce");
      const optimizelyConfigureCommerceSdk = sdk as ReturnType<typeof getOptimizelyConfigureCommerceSdk>;

      // OptimizelyConfigureCommerce doesn't have GetHomePage, use GetContentByPath for both home and other pages
      const configureCommercePath = isHomePage ? "/" : path;
      return optimizelyConfigureCommerceSdk.GetContentByPath({
        path: configureCommercePath,
        siteId: (variables?.siteId as string) || process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_ID || "",
        ...variables,
      });

    default:
      throw new Error(`Unsupported CMS type: ${cmsType}`);
  }
}

// Create a wrapper that implements ICmsClient interface
const cmsClient: ICmsClient = {
  fetchContent: async (path: string, variables?: Record<string, unknown>) => {
    return fetchContentByCmsType(path, variables);
  },
};

const { CmsPage, generateMetadata, generateStaticParams } = createPage(getFactory(), {
  client: cmsClient,
  getContentByPath: (client, variables) => {
    return client.fetchContent(variables.path, variables);
  },
  propsToCmsPath: async (props) => {
    const params = await props.params;
    const path = params?.path;
    if (!path || path.length === 0) return "/";
    return "/" + path.join("/");
  },
  paramsToLocale: () => {
    // Default implementation - can be customized based on your routing structure
    // For now, return undefined as we don't have a lang parameter in DefaultCmsPageParams
    return undefined;
  },
  adapter: AdapterFactory.create(
    process.env.CMS_TYPE as "litium" | "optimizely" | "optimizely-configure-commerce" | "custom"
  ),

  getLanguageCode: () => {
    const cmsType = getCmsType();

    switch (cmsType) {
      case "optimizely-configure-commerce":
        return Promise.resolve(process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_LANGUAGE || "");
      case "optimizely":
        return Promise.resolve(process.env.OPTIMIZELY_SITE_LANGUAGE || "");
      case "litium":
        return Promise.resolve(process.env.LITIUM_SITE_LANGUAGE || "");
      default:
        return Promise.resolve("");
    }
  },
  getSiteId: () => {
    const cmsType = getCmsType();

    switch (cmsType) {
      case "optimizely-configure-commerce":
        return Promise.resolve(process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_ID || "");
      case "optimizely":
        return Promise.resolve(process.env.OPTIMIZELY_SITE_ID || "");
      case "litium":
        return Promise.resolve(process.env.LITIUM_SITE_ID || "");
      default:
        return Promise.resolve("");
    }
  },
});

// export const dynamic = "force-static"; // Make sure we cache    pages
// export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site a
// export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
// export const fetchCache = "default-cache"; // Cache fetch results by default

export const dynamic = "force-dynamic"; // Force SSR
export const dynamicParams = false; // Allow new pages to be resolved without rebuilding the site
export const revalidate = 0;
export const fetchCache = "force-no-store"; // No caching of fetch results

export { generateMetadata, generateStaticParams };
export default CmsPage;
