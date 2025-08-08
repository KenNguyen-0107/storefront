// Base configuration interface
export interface BaseContentProviderConfig {
  debug?: boolean;
  adapterType?: string;
  enableCache?: boolean;
  enableNextJsFeatures?: boolean;
}

// Litium-specific configuration
export interface LitiumContentProviderConfig extends BaseContentProviderConfig {
  cmsType: "litium";
  litiumEndpoint?: string;
  litiumToken?: string;
  litiumContextUrl?: string;
}

// Optimizely-specific configuration
export interface OptimizelyContentProviderConfig extends BaseContentProviderConfig {
  cmsType: "optimizely" | "optimizely-configure-commerce";
  // Optimizely Graph Authentication
  optimizelyGraphSecret?: string;
  optimizelyGraphAppKey?: string;
  optimizelyGraphSingleKey?: string;
  optimizelyGraphGateway?: string;
  optimizelyGraphUpdateDelay?: number;

  // Optimizely CMS API
  optimizelyCmsUrl?: string;
  optimizelyCmsClientId?: string;
  optimizelyCmsClientSecret?: string;
  optimizelyCmsUserId?: string;

  // Site Configuration
  siteDomain?: string;
  sitePrimary?: string;

  // Debug and Logging
  optimizelyGraphQueryLog?: boolean;
  optimizelyDebug?: boolean;
  optimizelyPublishToken?: string;

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
}

// Custom CMS configuration
export interface CustomContentProviderConfig extends BaseContentProviderConfig {
  cmsType: "custom";
  customEndpoint?: string;
  customToken?: string;
  customConfig?: Record<string, unknown>;
}

// Union type for all provider configurations
export type ContentProviderConfig =
  | LitiumContentProviderConfig
  | OptimizelyContentProviderConfig
  | CustomContentProviderConfig;

// Partial configuration types for convenience
export type PartialLitiumConfig = Partial<LitiumContentProviderConfig>;
export type PartialOptimizelyConfig = Partial<OptimizelyContentProviderConfig>;
export type PartialCustomConfig = Partial<CustomContentProviderConfig>;
export type PartialContentProviderConfig = PartialLitiumConfig | PartialOptimizelyConfig | PartialCustomConfig;

// CMS Type enum for better type safety
export enum CMSType {
  LITIUM = "litium",
  OPTIMIZELY = "optimizely",
  CUSTOM = "custom",
  OPTIMIZELY_CONFIGURE_COMMERCE = "optimizely-configure-commerce",
}

// Validation result interface
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// Environment variable mapping type
export interface EnvironmentVariableMap {
  [key: string]: string | undefined;
}

// Content provider factory options
export interface ContentProviderFactoryOptions {
  singleton?: boolean;
  validateOnCreate?: boolean;
  enableLogging?: boolean;
}
