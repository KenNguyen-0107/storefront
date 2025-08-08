import {
  TokenResponse,
  TokenData,
  CommercetoolsConfig,
} from "@/app/lib/commercetools/models/config.model";

class TokenManager {
  private static instances: Map<string, TokenManager> = new Map();
  private tokenData: TokenData | null = null;
  private tokenPromise: Promise<string> | null = null;
  private refreshPromise: Promise<TokenData> | null = null;
  private config: CommercetoolsConfig;
  private refreshTimeoutId: NodeJS.Timeout | null = null;

  private constructor(config: CommercetoolsConfig) {
    this.config = { ...config }; // Create a copy to avoid external mutations
  }

  public static getInstance(config: CommercetoolsConfig): TokenManager {
    // Create a unique key based on the config to support multiple instances
    const configKey = `${config.projectKey}-${config.clientId}-${config.authUrl}`;

    if (!TokenManager.instances.has(configKey)) {
      TokenManager.instances.set(configKey, new TokenManager(config));
    }

    return TokenManager.instances.get(configKey)!;
  }

  async getAccessToken(): Promise<string> {
    // Return cached token if valid
    if (this.tokenData && this.isTokenValid(this.tokenData)) {
      return this.tokenData.accessToken;
    }

    // If there's already a token request in progress, wait for it
    if (this.tokenPromise) {
      return this.tokenPromise;
    }

    // Try to refresh token first if available and not expired
    if (this.tokenData?.refreshToken && this.canRefreshToken(this.tokenData)) {
      this.tokenPromise = this.refreshAccessToken();
    } else {
      this.tokenPromise = this.fetchNewToken();
    }

    try {
      const token = await this.tokenPromise;
      return token;
    } finally {
      this.tokenPromise = null;
    }
  }

  private isTokenValid(token: TokenData): boolean {
    // Add 5 minute buffer to prevent edge cases
    const bufferTime = 5 * 60 * 1000;
    return Date.now() < token.expiresAt - bufferTime;
  }

  private canRefreshToken(token: TokenData): boolean {
    // Check if we have a refresh token and it's not too close to expiration
    // Refresh tokens typically last longer than access tokens
    if (!token.refreshToken) {
      return false;
    }

    // Add 10 minute buffer for refresh token validity
    const bufferTime = 10 * 60 * 1000;
    return Date.now() < token.expiresAt - bufferTime;
  }

  private async fetchNewToken(): Promise<string> {
    console.log("🔄 Fetching new access token...");

    const credentials = Buffer.from(
      `${this.config.clientId}:${this.config.clientSecret}`,
    ).toString("base64");
    const tokenUrl = `${this.config.authUrl}/oauth/${this.config.projectKey}/anonymous/token`;

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Token request failed:", {
        url: tokenUrl,
        status: response.status,
        statusText: response.statusText,
        clientId: this.config.clientId,
        projectKey: this.config.projectKey,
        responseBody: errorText,
      });
      throw new Error(
        `Token request failed: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    const tokenResponse: TokenResponse = await response.json();

    this.tokenData = {
      accessToken: tokenResponse.access_token,
      refreshToken: tokenResponse.refresh_token,
      expiresAt: Date.now() + tokenResponse.expires_in * 1000,
      scope: tokenResponse.scope,
    };

    console.log("✅ New access token obtained successfully");
    console.log("📋 Token details:", {
      scope: tokenResponse.scope,
      expiresIn: tokenResponse.expires_in,
      tokenType: tokenResponse.token_type,
      hasRefreshToken: !!tokenResponse.refresh_token,
    });

    // Schedule automatic refresh before token expires
    this.scheduleTokenRefresh();

    return tokenResponse.access_token;
  }

  private async refreshAccessToken(): Promise<string> {
    if (!this.tokenData?.refreshToken) {
      console.warn("⚠️ No refresh token available, fetching new token");
      return this.fetchNewToken();
    }

    // If there's already a refresh in progress, wait for it
    if (this.refreshPromise) {
      const refreshedToken = await this.refreshPromise;
      return refreshedToken.accessToken;
    }

    console.log("🔄 Refreshing access token...");

    this.refreshPromise = this.performTokenRefresh();

    try {
      const refreshedToken = await this.refreshPromise;
      return refreshedToken.accessToken;
    } catch (error) {
      console.warn("⚠️ Token refresh failed, fetching new token:", error);
      // Clear the failed refresh token data
      this.tokenData = null;
      return this.fetchNewToken();
    } finally {
      this.refreshPromise = null;
    }
  }

  private async performTokenRefresh(): Promise<TokenData> {
    const credentials = Buffer.from(
      `${this.config.clientId}:${this.config.clientSecret}`,
    ).toString("base64");
    const tokenUrl = `${this.config.authUrl}/oauth/${this.config.projectKey}/anonymous/token`;

    if (!this.tokenData?.refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: this.tokenData.refreshToken,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Token refresh failed:", {
        url: tokenUrl,
        status: response.status,
        statusText: response.statusText,
        responseBody: errorText,
      });
      throw new Error(
        `Token refresh failed: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    const tokenResponse: TokenResponse = await response.json();

    this.tokenData = {
      accessToken: tokenResponse.access_token,
      refreshToken: tokenResponse.refresh_token || this.tokenData.refreshToken, // Keep old refresh token if new one not provided
      expiresAt: Date.now() + tokenResponse.expires_in * 1000,
      scope: tokenResponse.scope,
    };

    console.log("✅ Access token refreshed successfully");
    console.log("📋 Refreshed token details:", {
      scope: tokenResponse.scope,
      expiresIn: tokenResponse.expires_in,
      tokenType: tokenResponse.token_type,
      hasRefreshToken: !!this.tokenData.refreshToken,
    });

    // Schedule next automatic refresh
    this.scheduleTokenRefresh();

    return this.tokenData;
  }

  private scheduleTokenRefresh(): void {
    // Clear any existing timeout
    if (this.refreshTimeoutId) {
      clearTimeout(this.refreshTimeoutId);
      this.refreshTimeoutId = null;
    }

    if (!this.tokenData) {
      return;
    }

    // Schedule refresh 10 minutes before token expires
    const refreshBuffer = 10 * 60 * 1000; // 10 minutes
    const timeUntilRefresh =
      this.tokenData.expiresAt - Date.now() - refreshBuffer;

    // Only schedule if we have enough time and a refresh token
    if (timeUntilRefresh > 0 && this.tokenData.refreshToken) {
      console.log(
        `⏰ Scheduling token refresh in ${Math.round(timeUntilRefresh / 1000 / 60)} minutes`,
      );

      this.refreshTimeoutId = setTimeout(async () => {
        try {
          console.log("🔄 Automatic token refresh triggered");
          await this.refreshAccessToken();
        } catch (error) {
          console.error("❌ Automatic token refresh failed:", error);
          // Clear token data to force new token fetch on next request
          this.tokenData = null;
        }
      }, timeUntilRefresh);
    }
  }

  public clearCache(): void {
    // Clear timeout
    if (this.refreshTimeoutId) {
      clearTimeout(this.refreshTimeoutId);
      this.refreshTimeoutId = null;
    }

    this.tokenData = null;
    this.tokenPromise = null;
    this.refreshPromise = null;

    console.log("🧹 Token cache cleared");
  }

  // Method to update configuration
  public updateConfig(newConfig: Partial<CommercetoolsConfig>): void {
    this.config = { ...this.config, ...newConfig };
    // Clear cache when config changes
    this.clearCache();
  }

  // Get current configuration (read-only)
  public getConfig(): Readonly<CommercetoolsConfig> {
    return { ...this.config };
  }

  // Get current token info (for debugging/monitoring)
  public getTokenInfo(): {
    hasToken: boolean;
    hasRefreshToken: boolean;
    expiresAt: number | null;
    expiresIn: number | null;
    scope: string | null;
  } {
    if (!this.tokenData) {
      return {
        hasToken: false,
        hasRefreshToken: false,
        expiresAt: null,
        expiresIn: null,
        scope: null,
      };
    }

    return {
      hasToken: true,
      hasRefreshToken: !!this.tokenData.refreshToken,
      expiresAt: this.tokenData.expiresAt,
      expiresIn: Math.max(0, this.tokenData.expiresAt - Date.now()),
      scope: this.tokenData.scope,
    };
  }

  // Force token refresh (useful for testing or manual refresh)
  public async forceRefresh(): Promise<string> {
    console.log("🔄 Forcing token refresh...");

    if (this.tokenData?.refreshToken) {
      try {
        return await this.refreshAccessToken();
      } catch (error) {
        console.warn("⚠️ Forced refresh failed, fetching new token:", error);
        this.tokenData = null;
        return this.fetchNewToken();
      }
    } else {
      console.log("ℹ️ No refresh token available, fetching new token");
      return this.fetchNewToken();
    }
  }

  // Check if token needs refresh soon
  public needsRefresh(): boolean {
    if (!this.tokenData) {
      return true;
    }

    // Check if token expires within 15 minutes
    const refreshBuffer = 15 * 60 * 1000;
    return Date.now() >= this.tokenData.expiresAt - refreshBuffer;
  }

  // Static method to clear all instances (useful for testing)
  public static clearAllInstances(): void {
    // Clear all timeouts before clearing instances
    TokenManager.instances.forEach((instance) => {
      instance.clearCache();
    });
    TokenManager.instances.clear();
  }

  // Cleanup method to be called when instance is no longer needed
  public destroy(): void {
    this.clearCache();
    const configKey = `${this.config.projectKey}-${this.config.clientId}-${this.config.authUrl}`;
    TokenManager.instances.delete(configKey);
  }
}

export default TokenManager;
