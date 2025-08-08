import type * as Types from "./types";
import { LitiumCmsSchema, SchemaVersion } from "./client/types";
import {
  isNonEmptyString,
  isValidUrl,
  getBoolean,
  getOptional,
  getSelection,
  normalizeUrl,
  ensureHttpsProtocol,
} from "../../niteco-utils-server/src/config";

export type { ContentGraphConfig, LitiumGraphConfigInternal, LitiumGraphConfig } from "./types";
export { LitiumCmsSchema, SchemaVersion } from "./client/types";

/**
 * Read configuration from environment variables (simplified for Litium)
 */
export function readEnvironmentVariables(): Types.LitiumGraphConfig {
  const config: Types.LitiumGraphConfig = {
    endpoint: getOptional("LITIUM_GRAPHQL_URL", "https://demo.litium.com/storefront.graphql") as string,
    token: getOptional("LITIUM_TOKEN"),
    contextUrl: getOptional("LITIUM_STOREFRONT_CONTEXT_URL", () => getOptional("LITIUM_CONTEXT_URL")),
    query_log: getBoolean("LITIUM_QUERY_LOG", false),
    debug: getBoolean("LITIUM_DEBUG", false),
    litium_cms_schema: getSelection<LitiumCmsSchema>(
      "LITIUM_CMS_SCHEMA",
      [LitiumCmsSchema.V8, LitiumCmsSchema.V9],
      LitiumCmsSchema.V9
    ),
    graph_schema: getSelection<SchemaVersion>(
      "LITIUM_GRAPH_SCHEMA",
      [SchemaVersion.Default, SchemaVersion.Next],
      SchemaVersion.Default
    ),
  };

  // Normalize the endpoint URL
  config.endpoint = normalizeUrl(config.endpoint) ?? config.endpoint;

  // Normalize the context URL
  config.contextUrl = ensureHttpsProtocol(config.contextUrl) ?? config.contextUrl;

  if (config.debug)
    console.log("🚧 Detected Litium Graph configuration from Environment Variables:", JSON.stringify(config));

  return config;
}

/**
 * Apply default values to configuration (simplified)
 */
export function applyConfigDefaults(configuredValues: Types.LitiumGraphConfig): Types.LitiumGraphConfigInternal {
  const defaults: Types.LitiumGraphConfigInternal = {
    endpoint: "https://demo.litium.com/storefront.graphql",
    token: "",
    contextUrl: "",
    debug: false,
    query_log: false,
    litium_cms_schema: LitiumCmsSchema.V9,
    graph_schema: SchemaVersion.Default,
  };

  const config = {
    ...defaults,
    ...configuredValues,
  };

  // Normalize endpoint URL
  config.endpoint = normalizeUrl(config.endpoint) ?? config.endpoint;

  return config;
}

/**
 * Validate the configuration (simplified for Litium)
 */
export function validateConfig(
  toValidate: Types.LitiumGraphConfig,
  forPublishedOnly: boolean = true,
  throwError: boolean = false
): toValidate is Types.LitiumGraphConfigInternal {
  const hasEndpoint = isValidUrl(toValidate?.endpoint);
  const hasToken = forPublishedOnly || isNonEmptyString(toValidate?.token);

  if (throwError && !hasEndpoint) throw new Error("Litium Graph Configuration does not have a valid endpoint URL");
  if (throwError && !hasToken)
    throw new Error("Litium Graph Configuration does not have a valid token for authenticated requests");

  return hasEndpoint && hasToken;
}
