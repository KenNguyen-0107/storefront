/**
 * Generic client interface for any CMS
 */
export interface ICmsClient {
  fetchContent(path: string, variables?: Record<string, unknown>): Promise<unknown>;
  fetchAllPages?(): Promise<unknown>;
}
