import type { ByProjectKeyRequestBuilder } from "@commercetools/platform-sdk";

/**
 * Type for CommerceTools API client used throughout the application.
 * This represents a project-scoped API client that provides access to all
 * CommerceTools API endpoints for a specific project.
 */
export type CommerceToolsClient = ByProjectKeyRequestBuilder;

/**
 * Type guard to check if a client is a valid CommerceTools client
 */
export function isCommerceToolsClient(
  client: any,
): client is CommerceToolsClient {
  return (
    client &&
    typeof client === "object" &&
    typeof client.me === "function" &&
    typeof client.customers === "function" &&
    typeof client.carts === "function"
  );
}
