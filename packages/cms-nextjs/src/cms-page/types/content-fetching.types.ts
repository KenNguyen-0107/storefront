import type { ICmsClient } from "./cms-client.types";

/**
 * Generic content fetching method type
 */
export type GetContentByPathMethod<Variables extends Record<string, unknown> = { path: string }, Result = unknown> = (
  client: ICmsClient,
  variables: Variables
) => Promise<Result>;
