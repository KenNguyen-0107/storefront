import { GraphQLClient } from "graphql-request";
import TokenManager from "@/app/lib/commercetools/auth/token-manager";
import { withRetry } from "@/app/lib/commercetools/retry-utils";
import type { CommercetoolsConfig } from "@/app/lib/commercetools/models";
import { DEFAULT_CONFIG } from "@/app/lib/commercetools/models/config.model";
import { IGraphQLClient } from "@/app/lib/commercetools/interfaces/client.interface";

class CommercetoolsGraphQLClient implements IGraphQLClient {
  private static instance: CommercetoolsGraphQLClient;
  private client: GraphQLClient;
  private tokenManager: TokenManager;
  private config: CommercetoolsConfig;

  private constructor() {
    // Get config from environment variables with defaults
    this.config = {
      projectKey: process.env.CTP_PROJECT_KEY!,
      clientId: process.env.CTP_CLIENT_ID!,
      clientSecret: process.env.CTP_CLIENT_SECRET!,
      apiUrl: process.env.CTP_API_URL || DEFAULT_CONFIG.apiUrl!,
      authUrl: process.env.CTP_AUTH_URL || DEFAULT_CONFIG.authUrl!,
      defaultLocale:
        process.env.CTP_DEFAULT_LOCALE || DEFAULT_CONFIG.defaultLocale,
    };

    // Validate required fields
    const requiredFields: (keyof CommercetoolsConfig)[] = [
      "projectKey",
      "clientId",
      "clientSecret",
      "apiUrl",
      "authUrl",
    ];

    for (const field of requiredFields) {
      if (!this.config[field]) {
        throw new Error(`Missing required configuration field: ${field}`);
      }
    }

    this.tokenManager = TokenManager.getInstance(this.config);

    this.client = new GraphQLClient(
      `${this.config.apiUrl}/${this.config.projectKey}/graphql`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  public static getInstance(): CommercetoolsGraphQLClient {
    if (!CommercetoolsGraphQLClient.instance) {
      CommercetoolsGraphQLClient.instance = new CommercetoolsGraphQLClient();
    }

    return CommercetoolsGraphQLClient.instance;
  }

  async query<T = any, V extends object = Record<string, any>>(
    query: string,
    variables?: V,
    requestHeaders?: Record<string, string>,
  ): Promise<T> {
    return withRetry(
      async () => {
        const token = await this.tokenManager.getAccessToken();
        const headers = {
          ...requestHeaders,
          Authorization: `Bearer ${token}`,
        };

        try {
          return await this.client.request<T>(query, variables, headers);
        } catch (error: any) {
          // If unauthorized, clear token cache and retry once
          if (error.status === 401) {
            console.warn("Unauthorized error, clearing token cache");
            this.tokenManager.clearCache();

            const newToken = await this.tokenManager.getAccessToken();
            return await this.client.request<T>(query, variables, {
              ...requestHeaders,
              Authorization: `Bearer ${newToken}`,
            });
          }
          throw error;
        }
      },
      {
        maxRetries: 3,
        baseDelay: 1000,
        maxDelay: 10000,
      },
    );
  }

  async mutate<T = any, V extends object = Record<string, any>>(
    mutation: string,
    variables?: V,
    requestHeaders?: Record<string, string>,
  ): Promise<T> {
    // Mutations are more sensitive, so we use fewer retries
    return withRetry(
      async () => {
        const token = await this.tokenManager.getAccessToken();
        const headers = {
          ...requestHeaders,
          Authorization: `Bearer ${token}`,
        };

        try {
          return await this.client.request<T>(mutation, variables, headers);
        } catch (error: any) {
          if (error.status === 401) {
            console.warn("Unauthorized error, clearing token cache");
            this.tokenManager.clearCache();

            const newToken = await this.tokenManager.getAccessToken();
            return await this.client.request<T>(mutation, variables, {
              ...requestHeaders,
              Authorization: `Bearer ${newToken}`,
            });
          }
          throw error;
        }
      },
      {
        maxRetries: 1, // Fewer retries for mutations to avoid duplicate operations
        baseDelay: 1000,
        maxDelay: 5000,
        retryCondition: (error: unknown) => {
          // Only retry mutations on network errors, not business logic errors
          return (error as any).networkError || (error as any).status >= 500;
        },
      },
    );
  }

  public clearTokenCache(): void {
    this.tokenManager.clearCache();
  }

  public updateConfig(newConfig: unknown): void {
    if (typeof newConfig !== "object" || !newConfig) {
      throw new Error("Invalid configuration: must be an object");
    }

    const typedConfig = newConfig as Record<string, unknown>;
    const updatedConfig = { ...this.config };

    // Only update known configuration properties
    if ("apiUrl" in typedConfig && typeof typedConfig.apiUrl === "string") {
      updatedConfig.apiUrl = typedConfig.apiUrl;
    }
    if (
      "projectKey" in typedConfig &&
      typeof typedConfig.projectKey === "string"
    ) {
      updatedConfig.projectKey = typedConfig.projectKey;
    }
    if ("clientId" in typedConfig && typeof typedConfig.clientId === "string") {
      updatedConfig.clientId = typedConfig.clientId;
    }
    if (
      "clientSecret" in typedConfig &&
      typeof typedConfig.clientSecret === "string"
    ) {
      updatedConfig.clientSecret = typedConfig.clientSecret;
    }
    if ("authUrl" in typedConfig && typeof typedConfig.authUrl === "string") {
      updatedConfig.authUrl = typedConfig.authUrl;
    }
    if (
      "defaultLocale" in typedConfig &&
      typeof typedConfig.defaultLocale === "string"
    ) {
      updatedConfig.defaultLocale = typedConfig.defaultLocale;
    }

    // Validate required fields
    const requiredFields: (keyof CommercetoolsConfig)[] = [
      "projectKey",
      "clientId",
      "clientSecret",
      "apiUrl",
      "authUrl",
    ];

    for (const field of requiredFields) {
      if (!updatedConfig[field]) {
        throw new Error(`Missing required configuration field: ${field}`);
      }
    }

    this.config = updatedConfig;

    // Update GraphQL client if URL-related config changed
    if ("apiUrl" in typedConfig || "projectKey" in typedConfig) {
      this.client = new GraphQLClient(
        `${this.config.apiUrl}/${this.config.projectKey}/graphql`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Update token manager config
    this.tokenManager.updateConfig(updatedConfig);
  }

  public getConfig(): unknown {
    return { ...this.config };
  }

  public static clearInstance(): void {
    if (CommercetoolsGraphQLClient.instance) {
      CommercetoolsGraphQLClient.instance.tokenManager.clearCache();
      CommercetoolsGraphQLClient.instance =
        null as unknown as CommercetoolsGraphQLClient;
    }
  }
}

// Export the getInstance method as the main function
export function getGraphQLClient(): IGraphQLClient {
  return CommercetoolsGraphQLClient.getInstance();
}

export { CommercetoolsGraphQLClient };
