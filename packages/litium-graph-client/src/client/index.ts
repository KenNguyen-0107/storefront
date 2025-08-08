export { LitiumGraphClient } from "./client";
export * from "./types";
export * from "./utils";

import { LitiumGraphClient } from "./client";
import type { LitiumGraphConfig } from "../types";
import type { ILitiumGraphClientFlags } from "./types";

/**
 * Create a new Litium GraphQL client
 *
 * @param config Optional configuration object. If not provided, will read from environment variables
 * @param token Optional authentication token
 * @param flags Optional client behavior flags
 * @returns A new LitiumGraphClient instance
 */
export function createClient(
  config?: LitiumGraphConfig,
  token?: string,
  flags?: Partial<ILitiumGraphClientFlags>
): LitiumGraphClient {
  return new LitiumGraphClient(config, token, flags);
}

/**
 * Check if an object is a Litium Graph Client
 */
export function isLitiumGraphClient(client: unknown): client is LitiumGraphClient {
  return client instanceof LitiumGraphClient;
}
