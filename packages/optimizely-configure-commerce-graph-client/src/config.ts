import type * as Types from "./types";
import { OptiCmsSchema, SchemaVersion } from "./client/types";
import {
  isNonEmptyString,
  isValidHttpsUrl,
  getBoolean,
  getOptional,
  getSelection,
  normalizeUrl,
  ensureHttpsProtocol,
  extractDomain,
} from "../../niteco-utils-server/src/config";

export type { ContentGraphConfig, OptimizelyGraphConfigInternal, OptimizelyGraphConfig } from "./types";
export { OptiCmsSchema, SchemaVersion } from "./client/types";

export function readEnvironmentVariables(): Types.OptimizelyGraphConfig {
  const config: Types.OptimizelyGraphConfig = {
    secret: getOptional("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_SECRET", () =>
      getOptional("OPTIMIZELY_CONTENTGRAPH_SECRET")
    ),
    app_key: getOptional("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_APP_KEY", () =>
      getOptional("OPTIMIZELY_CONTENTGRAPH_APP_KEY")
    ),
    single_key: getOptional("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_SINGLE_KEY", () =>
      getOptional("OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY", "")
    ) as string,
    gateway: getOptional("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_GATEWAY", () =>
      getOptional("OPTIMIZELY_CONTENTGRAPH_GATEWAY", "https://cg.optimizely.com")
    ),
    tenant_id: getOptional("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_TENANT_ID"),
    deploy_domain: resolveDeploymentDomain(),
    dxp_url: getOptional("OPTIMIZELY_CMS_URL", () => getOptional("DXP_URL")),
    query_log: getBoolean("OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_QUERY_LOG", () =>
      getBoolean("OPTIMIZELY_CONTENTGRAPH_QUERY_LOG", false)
    ),
    debug: getBoolean("OPTIMIZELY_DEBUG", () => getBoolean("DXP_DEBUG", false)),
    publish: getOptional("OPTIMIZELY_PUBLISH_TOKEN"),
    opti_cms_schema: getSelection<OptiCmsSchema>(
      "OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_CMS_SCHEMA",
      [OptiCmsSchema.CMS12, OptiCmsSchema.CMS13],
      OptiCmsSchema.CMS13
    ),
    graph_schema: getSelection<SchemaVersion>(
      "OPTIMIZELY_CONFIGURE_COMMERCE_GRAPH_SCHEMA",
      [SchemaVersion.Default, SchemaVersion.Next],
      SchemaVersion.Default
    ),
  };

  // Make sure that the Gateway is normalized
  const normalizedGateway = normalizeUrl(config.gateway);
  if (normalizedGateway !== undefined) {
    config.gateway = normalizedGateway;
  }

  // Make sure that the Optimizely CMS Domain is adjusted correctly
  const normalizedDxpUrl = ensureHttpsProtocol(config.dxp_url);
  if (normalizedDxpUrl !== undefined) {
    config.dxp_url = normalizedDxpUrl;
  }

  // Normalize the deployment domain
  const normalizedDeployDomain = extractDomain(config.deploy_domain);
  if (normalizedDeployDomain !== undefined) {
    config.deploy_domain = normalizedDeployDomain;
  }

  if (config.debug) console.log("🚧 Detected configuration from Environment Variables:", JSON.stringify(config));

  return config;
}

export function applyConfigDefaults(
  configuredValues: Types.OptimizelyGraphConfig
): Types.OptimizelyGraphConfigInternal {
  const defaults: Types.OptimizelyGraphConfigInternal = {
    single_key: "",
    gateway: "https://cg.optimizely.com",
    dxp_url: "",
    deploy_domain: "",
    debug: false,
    query_log: false,
    opti_cms_schema: OptiCmsSchema.CMS13,
    graph_schema: SchemaVersion.Default,
  };
  const config = {
    ...defaults,
    ...configuredValues,
  };

  const normalizedGateway = normalizeUrl(config.gateway);
  if (normalizedGateway !== undefined) {
    config.gateway = normalizedGateway;
  }
  return config;
}

/**
 * Resolve the deployment domain based upon either configuration specific to
 * this package, or well known environment variables of FE hosting providers.
 *
 * @returns The resolved deployment domain
 */
function resolveDeploymentDomain(): string | undefined {
  // First resolve based upon Optimizely Frontend configuration
  const opti_variables = getOptional("SITE_DOMAIN", () => getOptional("SITE_PRIMARY"));
  if (opti_variables && opti_variables != "") return opti_variables;

  // Then try to resolve based upon Vercel environment variables
  const vercelEnv = getOptional("VERCEL_TARGET_ENV");
  if (vercelEnv && vercelEnv != "development") {
    const vercelDomain =
      vercelEnv == "production" ? getOptional("VERCEL_PROJECT_PRODUCTION_URL") : getOptional("VERCEL_BRANCH_URL");
    if (vercelDomain && vercelDomain != "") return vercelDomain;
  }

  // Then try to resolve based upon Netlify environment variables
  const netlifyEnv = getOptional("CONTEXT");
  if (netlifyEnv && netlifyEnv != "dev") {
    const netlifyDomain = netlifyEnv == "production" ? getOptional("URL") : getOptional("DEPLOY_PRIME_URL");
    if (netlifyDomain && netlifyDomain != "") return netlifyDomain;
  }

  // Well, now we just give up...
  return undefined;
}

/**
 * Validate the configuration
 *
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns
 */
export function validateConfig(
  toValidate: Types.OptimizelyGraphConfig,
  forPublishedOnly: boolean = true,
  throwError: boolean = false
): toValidate is Types.OptimizelyGraphConfigInternal {
  const hasSingleKey = isNonEmptyString(toValidate?.single_key);
  const hasGateway = isValidHttpsUrl(toValidate?.gateway);
  const hasSecret = forPublishedOnly || isNonEmptyString(toValidate?.secret);
  const hasAppKey = forPublishedOnly || isNonEmptyString(toValidate?.app_key);

  if (throwError && !hasSingleKey) throw new Error("Optimizely Graph Configuration does not have a valid Single Key");
  if (throwError && !hasGateway) throw new Error("Optimizely Graph Configuration does not have a valid Gateway");
  if (throwError && !hasSecret) throw new Error("Optimizely Graph Configuration does not have a valid Secret");
  if (throwError && !hasAppKey) throw new Error("Optimizely Graph Configuration does not have a valid App Key");
  return hasGateway && hasSingleKey && hasAppKey && hasSecret;
}
