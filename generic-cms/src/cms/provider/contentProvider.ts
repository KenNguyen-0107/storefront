import { LitiumGraphClient, createClient as createLitiumGraphClient } from "@/packages/litium-graph-client/src/index";
import type {
  ContentProviderConfig,
  LitiumContentProviderConfig,
  OptimizelyContentProviderConfig,
  CustomContentProviderConfig,
  PartialContentProviderConfig,
  PartialLitiumConfig,
  PartialOptimizelyConfig,
  PartialCustomConfig,
  ValidationResult,
  ContentServiceConfig,
} from "../types/index";

import {
  createClient as createOptimizelyGraphClient,
  type IOptiGraphClient,
} from "@/packages/optimizely-graph-client/src/index";

// Cached validation result
let cachedValidation: ValidationResult | null = null;

// Provider factory class
export class ContentProvider {
  private static instance: ContentProvider;
  private config: ContentProviderConfig;
  private validationResult: ValidationResult;

  constructor(config?: PartialContentProviderConfig) {
    this.config = this.resolveConfig(config);
    // Validate configuration once during initialization
    this.validationResult = this.validateConfig();

    if (!this.validationResult.valid) {
      console.warn("[ContentProvider] Environment validation failed:", this.validationResult.errors);
    }
  }

  /**
   * Get singleton instance
   */
  static getInstance(config?: PartialContentProviderConfig): ContentProvider {
    if (!ContentProvider.instance) {
      ContentProvider.instance = new ContentProvider(config);
    }
    return ContentProvider.instance;
  }

  /**
   * Get validation result (cached)
   */
  getValidationResult(): ValidationResult {
    return this.validationResult;
  }

  /**
   * Validate configuration based on CMS type
   */
  private validateConfig(): ValidationResult {
    const errors: string[] = [];

    switch (this.config.cmsType) {
      case "litium":
        this.validateLitiumConfig(this.config, errors);
        break;
      case "optimizely":
      case "optimizely-configure-commerce":
        this.validateOptimizelyConfig(this.config, errors);
        break;
      case "custom":
        this.validateCustomConfig(this.config, errors);
        break;
      default:
        errors.push(`Unknown CMS type: ${(this.config as any).cmsType}`);
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Validate Litium-specific configuration
   */
  private validateLitiumConfig(config: LitiumContentProviderConfig, errors: string[]): void {
    if (!config.litiumEndpoint) {
      errors.push("LITIUM_ENDPOINT environment variable is required for Litium CMS");
    }
  }

  /**
   * Validate Optimizely-specific configuration
   */
  private validateOptimizelyConfig(config: OptimizelyContentProviderConfig, errors: string[]): void {
    if (!config.optimizelyGraphGateway) {
      errors.push("OPTIMIZELY_GRAPH_GATEWAY environment variable is required for Optimizely CMS");
    }

    // For authenticated access, both secret and app key are required
    if (config.optimizelyGraphSecret && !config.optimizelyGraphAppKey) {
      errors.push("OPTIMIZELY_GRAPH_APP_KEY is required when OPTIMIZELY_GRAPH_SECRET is provided");
    }

    if (config.optimizelyGraphAppKey && !config.optimizelyGraphSecret) {
      errors.push("OPTIMIZELY_GRAPH_SECRET is required when OPTIMIZELY_GRAPH_APP_KEY is provided");
    }

    // CMS API requires both client ID and secret
    if (config.optimizelyCmsClientId && !config.optimizelyCmsClientSecret) {
      errors.push("OPTIMIZELY_CMS_CLIENT_SECRET is required when OPTIMIZELY_CMS_CLIENT_ID is provided");
    }
  }

  /**
   * Validate Custom CMS configuration
   */
  private validateCustomConfig(config: CustomContentProviderConfig, errors: string[]): void {
    if (!config.customEndpoint) {
      errors.push("Custom endpoint is required for custom CMS configuration");
    }
  }

  /**
   * Resolve configuration from environment variables and provided config
   */
  private resolveConfig(providedConfig?: PartialContentProviderConfig): ContentProviderConfig {
    const cmsType = (providedConfig?.cmsType || process.env.CMS_TYPE || "litium") as
      | "litium"
      | "optimizely"
      | "optimizely-configure-commerce"
      | "custom";

    switch (cmsType) {
      case "litium":
        return this.resolveLitiumConfig(providedConfig as PartialLitiumConfig);
      case "optimizely":
        return this.resolveOptimizelyConfig("optimizely", providedConfig as PartialOptimizelyConfig);
      case "optimizely-configure-commerce":
        return this.resolveOptimizelyConfig("optimizely-configure-commerce", providedConfig as PartialOptimizelyConfig);
      case "custom":
        return this.resolveCustomConfig(providedConfig as PartialCustomConfig);
      default:
        throw new Error(`Unknown CMS type: ${cmsType}`);
    }
  }

  /**
   * Resolve Litium configuration
   */
  private resolveLitiumConfig(providedConfig?: PartialLitiumConfig): LitiumContentProviderConfig {
    return {
      cmsType: "litium",
      litiumEndpoint: providedConfig?.litiumEndpoint || process.env.LITIUM_ENDPOINT,
      litiumToken: providedConfig?.litiumToken || process.env.LITIUM_TOKEN,
      litiumContextUrl: providedConfig?.litiumContextUrl || process.env.LITIUM_CONTEXT_URL,
      debug: providedConfig?.debug ?? process.env.NODE_ENV === "development",
      adapterType: providedConfig?.adapterType || "litium",
      enableCache: providedConfig?.enableCache ?? true,
      enableNextJsFeatures: providedConfig?.enableNextJsFeatures ?? true,
    };
  }

  /**
   * Resolve Optimizely configuration
   */
  private resolveOptimizelyConfig(
    cmsType: "optimizely" | "optimizely-configure-commerce",
    providedConfig?: PartialOptimizelyConfig
  ): OptimizelyContentProviderConfig {
    return {
      cmsType: cmsType,
      // Optimizely Graph Authentication
      optimizelyGraphSecret: providedConfig?.optimizelyGraphSecret || process.env.OPTIMIZELY_GRAPH_SECRET,
      optimizelyGraphAppKey: providedConfig?.optimizelyGraphAppKey || process.env.OPTIMIZELY_GRAPH_APP_KEY,
      optimizelyGraphSingleKey: providedConfig?.optimizelyGraphSingleKey || process.env.OPTIMIZELY_GRAPH_SINGLE_KEY,
      optimizelyGraphGateway: providedConfig?.optimizelyGraphGateway || process.env.OPTIMIZELY_GRAPH_GATEWAY,
      optimizelyGraphUpdateDelay:
        providedConfig?.optimizelyGraphUpdateDelay ||
        (process.env.OPTIMIZELY_GRAPH_UPDATE_DELAY
          ? parseInt(process.env.OPTIMIZELY_GRAPH_UPDATE_DELAY, 10)
          : undefined),

      // Optimizely CMS API
      optimizelyCmsUrl: providedConfig?.optimizelyCmsUrl || process.env.OPTIMIZELY_CMS_URL,
      optimizelyCmsClientId: providedConfig?.optimizelyCmsClientId || process.env.OPTIMIZELY_CMS_CLIENT_ID,
      optimizelyCmsClientSecret: providedConfig?.optimizelyCmsClientSecret || process.env.OPTIMIZELY_CMS_CLIENT_SECRET,
      optimizelyCmsUserId: providedConfig?.optimizelyCmsUserId || process.env.OPTIMIZELY_CMS_USER_ID,

      // Site Configuration
      siteDomain: providedConfig?.siteDomain || process.env.SITE_DOMAIN,
      sitePrimary: providedConfig?.sitePrimary || process.env.SITE_PRIMARY,

      // Debug and Logging
      optimizelyGraphQueryLog:
        providedConfig?.optimizelyGraphQueryLog ?? process.env.OPTIMIZELY_GRAPH_QUERY_LOG === "true",
      optimizelyDebug: providedConfig?.optimizelyDebug ?? process.env.OPTIMIZELY_DEBUG === "true",
      optimizelyPublishToken: providedConfig?.optimizelyPublishToken || process.env.OPTIMIZELY_PUBLISH_TOKEN,

      // Data Platform Integration
      optimizelyDataPlatformId: providedConfig?.optimizelyDataPlatformId || process.env.OPTIMIZELY_DATAPLATFORM_ID,
      optimizelyDataPlatformEndpoint:
        providedConfig?.optimizelyDataPlatformEndpoint || process.env.OPTIMIZELY_DATAPLATFORM_ENDPOINT,

      // Content Intelligence / Content Recs
      optimizelyContentRecsClient:
        providedConfig?.optimizelyContentRecsClient || process.env.OPTIMIZELY_CONTENTRECS_CLIENT,
      optimizelyContentRecsDelivery:
        providedConfig?.optimizelyContentRecsDelivery || process.env.OPTIMIZELY_CONTENTRECS_DELIVERY,
      optimizelyContentRecsDeliveryKey:
        providedConfig?.optimizelyContentRecsDeliveryKey || process.env.OPTIMIZELY_CONTENTRECS_DELIVERY_KEY,
      optimizelyContentRecsDomain:
        providedConfig?.optimizelyContentRecsDomain || process.env.OPTIMIZELY_CONTENTRECS_DOMAIN,

      // Web Experimentation
      optimizelyWebExperimentationProject:
        providedConfig?.optimizelyWebExperimentationProject || process.env.OPTIMIZELY_WEB_EXPERIMENTATION_PROJECT,

      // Base config
      debug: providedConfig?.debug ?? process.env.NODE_ENV === "development",
      adapterType: providedConfig?.adapterType || "optimizely",
      enableCache: providedConfig?.enableCache ?? true,
      enableNextJsFeatures: providedConfig?.enableNextJsFeatures ?? true,
    };
  }

  /**
   * Resolve Custom CMS configuration
   */
  private resolveCustomConfig(providedConfig?: PartialCustomConfig): CustomContentProviderConfig {
    return {
      cmsType: "custom",
      customEndpoint: providedConfig?.customEndpoint || process.env.CUSTOM_CMS_ENDPOINT,
      customToken: providedConfig?.customToken || process.env.CUSTOM_CMS_TOKEN,
      customConfig: providedConfig?.customConfig || {},
      debug: providedConfig?.debug ?? process.env.NODE_ENV === "development",
      adapterType: providedConfig?.adapterType || "custom",
      enableCache: providedConfig?.enableCache ?? true,
      enableNextJsFeatures: providedConfig?.enableNextJsFeatures ?? true,
    };
  }

  /**
   * Create appropriate CMS client based on configuration
   */
  public createClient(): any {
    switch (this.config.cmsType) {
      case "litium":
        return this.createLitiumClient(this.config);
      case "optimizely":
      case "optimizely-configure-commerce":
        return this.createOptimizelyClient(this.config);
      case "custom":
        return this.createCustomClient(this.config);
      default:
        throw new Error(`Unknown CMS type: ${(this.config as any).cmsType}`);
    }
  }

  /**
   * Create Litium GraphQL client
   */
  private createLitiumClient(config: LitiumContentProviderConfig): LitiumGraphClient {
    if (!config.litiumEndpoint) {
      throw new Error("Litium endpoint is required");
    }

    return createLitiumGraphClient({
      endpoint: config.litiumEndpoint,
      token: config.litiumToken,
      contextUrl: config.litiumContextUrl,
      debug: config.debug,
    });
  }

  /**
   * Create Optimizely client
   */
  private createOptimizelyClient(config: OptimizelyContentProviderConfig): IOptiGraphClient {
    // Map ContentProviderConfig properties to OptimizelyGraphConfig format
    const optimizelyConfig = {
      single_key: config.optimizelyGraphSingleKey || "", // single_key is required, fallback to empty string if not available
      gateway: config.optimizelyGraphGateway,
      secret: config.optimizelyGraphSecret,
      app_key: config.optimizelyGraphAppKey,
      debug: config.optimizelyDebug || false,
      query_log: config.optimizelyGraphQueryLog || false,
      dxp_url: config.siteDomain,
      deploy_domain: config.sitePrimary,
    };

    return createOptimizelyGraphClient(optimizelyConfig);
  }

  /**
   * Create Custom CMS client
   */
  private createCustomClient(config: CustomContentProviderConfig): any {
    // TODO: Implement custom client creation
    throw new Error("Custom client not implemented yet");
  }

  /**
   * Resolve adapter type based on configuration
   */
  private resolveAdapterType(): string {
    switch (this.config.cmsType) {
      case "litium":
        return "litium";
      case "optimizely":
        return "optimizely";
      case "custom":
        return this.config.adapterType || "custom";
      default:
        return "litium";
    }
  }

  /**
   * Update provider configuration
   */
  updateConfig(newConfig: PartialContentProviderConfig): void {
    this.config = this.resolveConfig(newConfig);
    this.validationResult = this.validateConfig();

    if (!this.validationResult.valid) {
      console.warn("[ContentProvider] Configuration update validation failed:", this.validationResult.errors);
    }
  }

  /**
   * Get current configuration
   */
  getConfig(): ContentProviderConfig {
    return { ...this.config };
  }

  /**
   * Reset singleton instance (useful for testing)
   */
  static resetInstance(): void {
    ContentProvider.instance = null as any;
  }
}

// Factory function for creating ContentProvider
export function createContentProvider(config?: PartialContentProviderConfig): ContentProvider {
  return new ContentProvider(config);
}

// Convenience function for environment validation (cached)
export function validateEnvironmentConfig(): ValidationResult {
  if (cachedValidation === null) {
    const provider = ContentProvider.getInstance();
    cachedValidation = provider.getValidationResult();
  }
  return cachedValidation;
}
