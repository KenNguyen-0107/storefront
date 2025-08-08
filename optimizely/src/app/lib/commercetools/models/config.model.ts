export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  refresh_token?: string;
}

export interface TokenData {
  accessToken: string;
  expiresAt: number;
  refreshToken?: string;
  scope: string;
}

export interface CommercetoolsConfig {
  projectKey: string;
  clientId: string;
  clientSecret: string;
  apiUrl: string;
  authUrl: string;
  defaultLocale?: string;
}

export interface RetryOptions {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  retryCondition?: (error: unknown) => boolean;
}

export const DEFAULT_CONFIG: Partial<CommercetoolsConfig> = {
  apiUrl: "https://api.eu-central-1.aws.commercetools.com",
  authUrl: "https://auth.eu-central-1.aws.commercetools.com",
  defaultLocale: "en",
};

export const DEFAULT_RETRY_OPTIONS: RetryOptions = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 10000,
};
