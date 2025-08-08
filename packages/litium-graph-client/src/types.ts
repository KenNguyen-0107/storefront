import type { LitiumCmsSchema, SchemaVersion } from "./client/types.js";

/**
 * Base configuration for Litium Graph API (simplified)
 */
export type LitiumGraphConfig = {
  /**
   * The Litium GraphQL endpoint URL
   */
  endpoint: string;

  /**
   * Bearer token for authentication (optional)
   */
  token?: string;

  /**
   * The storefront context URL for B2B/B2C filtering (optional)
   */
  contextUrl?: string;

  /**
   * Enable query logging
   */
  query_log?: boolean;

  /**
   * Enable debug mode
   */
  debug?: boolean;

  /**
   * The Litium CMS schema version
   */
  litium_cms_schema?: LitiumCmsSchema;

  /**
   * The GraphQL schema version
   */
  graph_schema?: SchemaVersion;
};

/**
 * Internal configuration with applied defaults
 */
export type LitiumGraphConfigInternal = Required<LitiumGraphConfig>;

/**
 * Content Graph Configuration (alias for compatibility)
 */
export type ContentGraphConfig = LitiumGraphConfig;

/**
 * Brand data structure
 */
export type BrandData = {
  id: string;
  name: string;
  slug: string;
};

/**
 * Channel data structure
 */
export type ChannelData = {
  id: string;
  name: string;
  slug: string;
  locale: string;
  isDefault: boolean;
};

/**
 * Site configuration structure
 */
export type SiteConfig = {
  /**
   * Available brands
   */
  brands: BrandData[];

  /**
   * Available channels
   */
  channels: ChannelData[];

  /**
   * Default channel
   */
  defaultChannel: ChannelData;

  /**
   * Supported locales
   */
  locales: string[];
};

/**
 * Frontend user information (simplified)
 */
export type FrontendUser = {
  id: string;
  email?: string;
  name?: string;
  roles?: string[];
};

/**
 * Error response structure
 */
export type ErrorResponse = {
  message: string;
  code?: string;
  details?: any;
};
