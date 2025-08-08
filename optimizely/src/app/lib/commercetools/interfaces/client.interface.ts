export interface IGraphQLClient {
  query<T = any, V extends object = Record<string, any>>(
    query: string,
    variables?: V,
    requestHeaders?: Record<string, string>,
  ): Promise<T>;

  mutate<T = any, V extends object = Record<string, any>>(
    mutation: string,
    variables?: V,
    requestHeaders?: Record<string, string>,
  ): Promise<T>;

  clearTokenCache(): void;
  updateConfig(newConfig: unknown): void;
  getConfig(): unknown;
}
