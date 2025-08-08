/**
 * Litium Graph Client - A GraphQL client for Litium e-commerce platform
 */

// Main client exports
export { LitiumGraphClient, createClient, isLitiumGraphClient } from "./client/index";

// Configuration exports
export {
  readEnvironmentVariables,
  applyConfigDefaults,
  validateConfig,
  LitiumCmsSchema,
  SchemaVersion,
} from "./config";

// Type exports
export type { LitiumGraphConfig, LitiumGraphConfigInternal, ContentGraphConfig, FrontendUser } from "./types";

export type {
  AuthMode,
  ILitiumGraphClient,
  ILitiumGraphClientFlags,
  LitiumGraphSiteInfo,
  RequestMethod,
  ProductData,
  CurrencyData,
  ImageData,
  CategoryData,
  MetadataData,
  PageData,
  CartData,
  CartItemData,
} from "./client/types";

// Utility exports
export { validateToken, getAuthMode, isError, isValidFrontendUser } from "./client/utils";

// Codegen utilities
export { defaultCodegenConfig, createCodegenConfig } from "../codegen";

export type { CodegenConfig, CodegenOutput } from "../codegen";
