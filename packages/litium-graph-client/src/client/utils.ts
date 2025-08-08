import { AuthMode, type FrontendUser } from "./types";
import type { ILitiumGraphClient, LitiumGraphSiteInfo } from "./types";
import type { LitiumGraphConfig } from "../types";

/**
 * Encode string to base64
 */
export function base64encode(input: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(input, "utf-8").toString("base64");
  }
  return btoa(input);
}

/**
 * Validate a GraphQL token (simplified for Litium)
 */
export function validateToken(token: string | undefined): boolean {
  // Allow undefined (public mode) or valid string tokens
  return token === undefined || (typeof token === "string" && token.length > 0);
}

/**
 * Get authentication mode from token (simplified for Litium)
 */
export function getAuthMode(token: string | undefined): AuthMode {
  if (!token || token.length === 0) {
    return AuthMode.Public;
  }
  return AuthMode.Token;
}

/**
 * Check if the provided value is an error object
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Validate frontend user object (simplified - not used in Litium)
 */
export function isValidFrontendUser(user: unknown): user is FrontendUser {
  if (!user || typeof user !== "object") return false;
  const userObj = user as Record<string, unknown>;
  return typeof userObj.id === "string" && userObj.id.length > 0;
}

/**
 * Check if the provided object is a Litium Graph Client
 */
export function isLitiumGraphClient(toTest: unknown): toTest is ILitiumGraphClient {
  if (!toTest || typeof toTest !== "object") return false;

  const client = toTest as Record<string, unknown>;
  return (
    typeof client.currentLitiumCmsSchema === "string" &&
    typeof client.debug === "boolean" &&
    typeof client.siteInfo === "object" &&
    typeof client.currentAuthMode === "string" &&
    typeof client.query === "function" &&
    typeof client.updateAuthentication === "function" &&
    typeof client.updateFlags === "function"
  );
}

/**
 * Check if the provided object is a Litium Graph Configuration
 */
export function isLitiumGraphConfig(toTest: unknown): toTest is LitiumGraphConfig {
  if (!toTest || typeof toTest !== "object") return false;

  const config = toTest as Record<string, unknown>;
  return (
    (config.endpoint === undefined || typeof config.endpoint === "string") &&
    (config.token === undefined || typeof config.token === "string") &&
    (config.contextUrl === undefined || typeof config.contextUrl === "string") &&
    (config.debug === undefined || typeof config.debug === "boolean") &&
    (config.query_log === undefined || typeof config.query_log === "boolean")
  );
}

/**
 * Create a site info object
 */
export function createSiteInfo(
  frontendDomain?: string,
  cmsURL?: string,
  storefrontContextURL?: string
): LitiumGraphSiteInfo {
  return {
    frontendDomain,
    cmsURL,
    storefrontContextURL,
  };
}

/**
 * Generate a unique cache key
 */
export function generateCacheKey(query: string, variables?: Record<string, unknown>): string {
  const variablesString = variables ? JSON.stringify(variables) : "";
  const combined = query + variablesString;

  // Simple hash function for cache key
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(36);
}

/**
 * Normalize URL by removing trailing slash
 */
export function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}
