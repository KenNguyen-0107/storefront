export interface AnonymousAuthCredentials {
  clientId: string;
  clientSecret: string;
  authUrl: string;
  projectKey?: string;
  scope?: string;
}

export interface AnonymousAuthResult {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: string;
  scope: string;
  anonymousId: string; // Generated UUID
}

export class AnonymousAuthService {
  /**
   * Authenticate anonymously with CommerceTools
   */
  async authenticateAnonymously(
    credentials: AnonymousAuthCredentials,
  ): Promise<AnonymousAuthResult> {
    try {
      const { clientId, clientSecret, authUrl, projectKey, scope } =
        credentials;

      // Prepare the request body
      const body = new URLSearchParams({
        grant_type: "client_credentials",
        scope:
          scope ||
          `manage_project:${projectKey || process.env.CTP_PROJECT_KEY}`,
      });

      // Prepare basic auth header
      const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64",
      );

      const response = await fetch(`${authUrl}/oauth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authHeader}`,
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Anonymous authentication failed: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`,
        );
      }

      const authData = (await response.json()) as any;

      // Generate anonymous ID (UUID v4)
      const anonymousId = this.generateAnonymousId();

      return {
        accessToken: authData.access_token,
        refreshToken: authData.refresh_token,
        expiresIn: authData.expires_in,
        tokenType: authData.token_type || "Bearer",
        scope: authData.scope,
        anonymousId,
      };
    } catch (error: any) {
      console.error("Anonymous authentication error:", error);
      throw new Error(`Anonymous authentication failed: ${error.message}`);
    }
  }

  /**
   * Refresh anonymous token
   */
  async refreshAnonymousToken(
    refreshToken: string,
    credentials: AnonymousAuthCredentials,
  ): Promise<AnonymousAuthResult> {
    try {
      const { clientId, clientSecret, authUrl } = credentials;

      const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      });

      const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64",
      );

      const response = await fetch(`${authUrl}/oauth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authHeader}`,
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Anonymous token refresh failed: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`,
        );
      }

      const authData = (await response.json()) as any;

      // Keep the same anonymous ID when refreshing
      const anonymousId = this.generateAnonymousId();

      return {
        accessToken: authData.access_token,
        refreshToken: authData.refresh_token,
        expiresIn: authData.expires_in,
        tokenType: authData.token_type || "Bearer",
        scope: authData.scope,
        anonymousId,
      };
    } catch (error: any) {
      console.error("Anonymous token refresh error:", error);
      throw new Error(`Anonymous token refresh failed: ${error.message}`);
    }
  }

  /**
   * Generate a UUID v4 for anonymous ID
   */
  private generateAnonymousId(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }
}

// Export singleton instance
export const anonymousAuthService = new AnonymousAuthService();
