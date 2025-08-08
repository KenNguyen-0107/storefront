import "server-only";
import { getSdk as getGeneratedSdk, type Sdk } from "@/generated/client";
import {
  getSdk as getOptimizelyConfigureCommerceSdk,
  type Sdk as OptimizelyConfigureCommerceSdk,
} from "@/generated/optimizely-configure-commerce";
import { getSdk as getOptimizelySdk, type Sdk as OptimizelySdk } from "@/generated/optimizely";
import { getSdk as getLitiumSdk, type Sdk as LitiumSdk } from "@/generated/litium";
import { ContentProvider } from "@/cms/provider/contentProvider";
import type { GraphQLClient } from "graphql-request";
import { cache } from "react";
import {
  RenderHeaderPayload,
  RenderFooterPayload,
  RenderSettingPayload,
} from "@/packages/composable-content-engine/types/renderPayload";
import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";
import { IAdapter } from "@/packages/cms-adapter-core/src";

/**
 * Global cache to store SDK instances keyed by CMS configuration.
 * Prevents creating multiple SDK instances for the same CMS setup.
 */
const globalCache = new Map<
  string,
  { client: GraphQLClient; sdk: Sdk | LitiumSdk | OptimizelySdk | OptimizelyConfigureCommerceSdk }
>();

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * Uses Node.js global cache keyed by cmsType and litiumEndpoint to ensure
 * different configurations have their own cached instances and persist
 * across browser refreshes.
 *
 * The function is wrapped with React's cache() to ensure the same instance
 * is returned for the same configuration across component renders.
 *
 * @returns {Object} Object containing the GraphQL client and SDK instance
 * @returns {GraphQLClient} returns.client - The configured GraphQL client
 * @returns {Sdk} returns.sdk - The generated SDK with typed queries
 */
export const getSdk = cache<
  () => { client: GraphQLClient; sdk: Sdk | LitiumSdk | OptimizelySdk | OptimizelyConfigureCommerceSdk }
>(() => {
  // Parse CMS configuration from environment variables
  const cmsType = process.env.CMS_TYPE as "litium" | "optimizely" | "optimizely-configure-commerce" | "custom";
  let graphqlEndpoint: string | undefined;
  switch (cmsType) {
    case "litium":
      graphqlEndpoint = process.env.LITIUM_GRAPHQL_URL;
      break;
    case "optimizely":
      graphqlEndpoint = process.env.OPTIMIZELY_GRAPH_GATEWAY;
      break;
    case "optimizely-configure-commerce":
      graphqlEndpoint = process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_GATEWAY;
      break;
  }

  // Create a cache key based on configuration to ensure different
  // CMS setups get their own SDK instances
  const cacheKey = `${cmsType}:${graphqlEndpoint}`;

  // Check if we already have a cached SDK instance for this configuration
  if (globalCache.has(cacheKey)) {
    console.log("Using cached SDK for:", cacheKey);
    return globalCache.get(cacheKey)!;
  }

  // Create new SDK instance if not cached
  console.log("Creating new SDK for:", cacheKey);

  // Initialize content provider with CMS-specific configuration
  let provider: ContentProvider;
  switch (cmsType) {
    case "litium":
      provider = new ContentProvider({
        cmsType,
        litiumEndpoint: graphqlEndpoint,
        litiumContextUrl: process.env.LITIUM_STOREFRONT_CONTEXT_URL,
        debug: true, // Enable debug mode for development
      });
      break;
    case "optimizely":
      provider = new ContentProvider({
        cmsType,
        optimizelyGraphGateway: graphqlEndpoint,
        optimizelyGraphSingleKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY,
        optimizelyGraphSecret: process.env.OPTIMIZELY_GRAPH_SECRET,
        optimizelyGraphUpdateDelay: process.env.OPTIMIZELY_GRAPH_UPDATE_DELAY
          ? parseInt(process.env.OPTIMIZELY_GRAPH_UPDATE_DELAY, 10)
          : undefined,
        optimizelyCmsUrl: process.env.OPTIMIZELY_CMS_URL,
        optimizelyCmsClientId: process.env.OPTIMIZELY_CMS_CLIENT_ID,
        optimizelyCmsClientSecret: process.env.OPTIMIZELY_CMS_CLIENT_SECRET,
        optimizelyCmsUserId: process.env.OPTIMIZELY_CMS_USER_ID,
        siteDomain: process.env.SITE_DOMAIN,
        sitePrimary: process.env.SITE_PRIMARY,
        optimizelyPublishToken: process.env.OPTIMIZELY_PUBLISH_TOKEN,
        debug: true, // Enable debug mode for development
      });
      break;
    case "optimizely-configure-commerce":
      provider = new ContentProvider({
        cmsType,
        optimizelyGraphGateway: graphqlEndpoint,
        optimizelyGraphAppKey: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_APP_KEY,
        optimizelyGraphSecret: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_SECRET,
        optimizelyGraphSingleKey: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_SINGLE_KEY,
        optimizelyGraphUpdateDelay: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_UPDATE_DELAY
          ? parseInt(process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_UPDATE_DELAY, 10)
          : undefined,
        optimizelyCmsUrl: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_CMS_URL,
        optimizelyCmsClientId: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_CMS_CLIENT_ID,
        optimizelyCmsClientSecret: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_CMS_CLIENT_SECRET,
        optimizelyCmsUserId: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_CMS_USER_ID,
        siteDomain: process.env.SITE_DOMAIN,
        sitePrimary: process.env.SITE_PRIMARY,
        optimizelyPublishToken: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_PUBLISH_TOKEN,
        debug: true, // Enable debug mode for development
      });
      break;
    default:
      provider = new ContentProvider({
        cmsType,
        customEndpoint: graphqlEndpoint,
        debug: true, // Enable debug mode for development
      });
      break;
  }

  // Create GraphQL client and SDK instance
  const client = provider.createClient();
  let sdkInstance: { client: GraphQLClient; sdk: Sdk | LitiumSdk | OptimizelySdk | OptimizelyConfigureCommerceSdk } = {
    client,
    sdk: getGeneratedSdk(client as GraphQLClient),
  };
  switch (cmsType) {
    case "litium":
      sdkInstance = { client, sdk: getLitiumSdk(client as GraphQLClient) };
      break;
    case "optimizely":
      sdkInstance = { client, sdk: getOptimizelySdk(client as GraphQLClient) };
      break;
    case "optimizely-configure-commerce":
      sdkInstance = { client, sdk: getOptimizelyConfigureCommerceSdk(client as GraphQLClient) };
      break;
  }
  // Store the new instance in cache for future use
  globalCache.set(cacheKey, sdkInstance);
  return sdkInstance;
});

/**
 * Validates CMS type environment variable
 */
export function validateCmsType(): "litium" | "optimizely" | "optimizely-configure-commerce" | "custom" {
  const cmsType = process.env.CMS_TYPE;
  if (!cmsType) {
    throw new Error("CMS_TYPE environment variable is required");
  }

  if (!["litium", "optimizely", "optimizely-configure-commerce", "custom"].includes(cmsType)) {
    throw new Error(
      `Invalid CMS_TYPE: ${cmsType}. Must be one of: litium, optimizely, optimizely-configure-commerce, custom`
    );
  }

  return cmsType as "litium" | "optimizely" | "optimizely-configure-commerce" | "custom";
}

export const getLayoutWithAdapter = cache<
  (adapter: IAdapter) => Promise<{ header: RenderHeaderPayload; footer: RenderFooterPayload }>
>(async (adapter: IAdapter) => {
  try {
    const { sdk } = getSdk();
    const cmsType = validateCmsType();

    let layoutResponse: any;

    switch (cmsType) {
      case "litium":
        layoutResponse = await (sdk as LitiumSdk).GetWebsite();
        return {
          header: await adapter.getHeaderData(layoutResponse),
          footer: await adapter.getFooterData(layoutResponse),
        };
      case "optimizely-configure-commerce":
        const headerResponse = await (sdk as OptimizelyConfigureCommerceSdk).GetContentByType({
          type: "Header",
          siteId: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_ID || "",
          languageCode: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_LANGUAGE || "",
        });
        const footerResponse = await (sdk as OptimizelyConfigureCommerceSdk).GetContentByType({
          type: "Footer",
          siteId: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_ID || "",
          languageCode: process.env.OPTIMIZELY_CONFIGURE_COMMERCE_SITE_LANGUAGE || "",
        });

        return {
          header: await adapter.getHeaderData(headerResponse),
          footer: await adapter.getFooterData(footerResponse),
        };
      default:
        return {
          header: {
            topHeader: { rows: [] },
            mainNavigation: {
              layout: { layoutDesktop: "", layoutMobile: "", layoutTablet: "" },
              items: [],
            },
          },
          footer: {
            footer: { rows: [] },
          },
        };
    }
  } catch (error) {
    console.error("Error in getLayoutWithAdapter:", error);
    throw new Error(`Failed to get layout with adapter: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
});

export const getLayout = cache<() => Promise<{ header: RenderHeaderPayload; footer: RenderFooterPayload }>>(
  async () => {
    try {
      const cmsType = validateCmsType();
      const adapter = AdapterFactory.create(cmsType);
      return await getLayoutWithAdapter(adapter);
    } catch (error) {
      console.error("Error in getLayout:", error);
      throw new Error(`Failed to get layout: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }
);

export const getSettingWithAdapter = cache<(adapter: IAdapter) => Promise<RenderSettingPayload>>(
  async (adapter: IAdapter) => {
    try {
      const { sdk } = getSdk();
      const cmsType = validateCmsType();
      let settingResponse: any;

      // Fetch setting data from GraphQL based on CMS type
      switch (cmsType) {
        case "litium":
          settingResponse = await (sdk as LitiumSdk).GetWebsite();
          break;
        default:
          settingResponse = {};
          break;
      }

      if (!settingResponse) {
        throw new Error("Failed to fetch setting data");
      }

      const settingPayload = await adapter.getSettingData(settingResponse);
      return settingPayload;
    } catch (error) {
      console.error("Error in getSettingWithAdapter:", error);
      throw new Error(
        `Failed to get setting with adapter: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
);

export const getSetting = cache<() => Promise<RenderSettingPayload>>(async () => {
  try {
    const cmsType = validateCmsType();
    const adapter = AdapterFactory.create(cmsType);
    return await getSettingWithAdapter(adapter);
  } catch (error) {
    console.error("Error in getSetting:", error);
    throw new Error(`Failed to get setting: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
});
