export { ContentGraphClient } from "./client";
export { createHmacFetch } from "../hmac-fetch";
export { isContentGraphClient, isOptiGraphClient, isOptiGraphConfig } from "./utils";
export * from "./types";

import type { OptimizelyGraphConfig } from "../types";
import { type IOptiGraphClient, type IOptiGraphClientFlags } from "./types";
import { ContentGraphClient } from "./client";

/**
 * Create a new instance of the default Optimizely Graph client
 *
 * @param   config   The client configuration
 * @param   token    The authentication token to apply to the client
 * @param   flags    The initial flag values
 * @returns The newly created instance
 */
export function createClient(
  config?: OptimizelyGraphConfig,
  token?: string | undefined,
  flags?: Partial<IOptiGraphClientFlags>
): IOptiGraphClient {
  return new ContentGraphClient(config, token, flags);
}

export default createClient;
