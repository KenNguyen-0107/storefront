/**
 * @deprecated This service is deprecated as the application has migrated to frontend token management.
 * Use the new token endpoints instead:
 * - /api/auth/password-token for customer authentication
 * - /api/auth/anonymous-token for anonymous authentication
 * - /api/auth/refresh-token for token refresh
 */

import {
  TokenResponse,
  TokenData,
} from "@/app/lib/commercetools/models/config.model";

export interface PasswordAuthCredentials {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
  authUrl: string;
  projectKey?: string;
  scope?: string;
}

export interface PasswordAuthResult {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: string;
  scope: string;
}

export class PasswordAuthService {
  /**
   * Authenticate using Resource Owner Password Credentials Grant
   * https://tools.ietf.org/html/rfc6749#section-4.3
   */
  async authenticateWithPassword(
    credentials: PasswordAuthCredentials,
  ): Promise<PasswordAuthResult> {
    const {
      clientId,
      clientSecret,
      username,
      password,
      authUrl,
      projectKey,
      scope,
    } = credentials;

    // Encode client credentials for Basic Authentication
    const clientCredentials = Buffer.from(
      `${clientId}:${clientSecret}`,
    ).toString("base64");

    // Construct the token endpoint URL
    const tokenUrl = projectKey
      ? `${authUrl}/oauth/${projectKey}/customers/token`
      : `${authUrl}/oauth/token`;

    // Prepare the request body
    const body = new URLSearchParams({
      grant_type: "password",
      username: username,
      password: password,
    });

    // Add scope if provided
    if (scope) {
      body.append("scope", scope);
    }

    console.log("🔐 Requesting access token with password grant...");

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${clientCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Password authentication failed:", {
          url: tokenUrl,
          status: response.status,
          statusText: response.statusText,
          username: username,
          clientId: clientId,
          responseBody: errorText,
        });

        throw new Error(
          `Authentication failed: ${response.status} ${response.statusText} - ${errorText}`,
        );
      }

      const tokenResponse: TokenResponse = await response.json();

      console.log("✅ Password authentication successful");
      console.log("📋 Token details:", {
        scope: tokenResponse.scope,
        expiresIn: tokenResponse.expires_in,
        tokenType: tokenResponse.token_type,
        hasRefreshToken: !!tokenResponse.refresh_token,
      });

      return {
        accessToken: tokenResponse.access_token,
        refreshToken: tokenResponse.refresh_token,
        expiresIn: tokenResponse.expires_in,
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope,
      };
    } catch (error) {
      console.error("❌ Error during password authentication:", error);
      throw error;
    }
  }

  /**
   * Refresh an access token using a refresh token
   */
  async refreshToken(
    refreshToken: string,
    credentials: Pick<
      PasswordAuthCredentials,
      "clientId" | "clientSecret" | "authUrl" | "projectKey"
    >,
  ): Promise<PasswordAuthResult> {
    const { clientId, clientSecret, authUrl, projectKey } = credentials;

    const clientCredentials = Buffer.from(
      `${clientId}:${clientSecret}`,
    ).toString("base64");

    const tokenUrl = projectKey
      ? `${authUrl}/oauth/${projectKey}/customers/token`
      : `${authUrl}/oauth/token`;

    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    console.log("🔄 Refreshing access token...");

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${clientCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: body.toString(),
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

      console.log("✅ Token refreshed successfully");

      return {
        accessToken: tokenResponse.access_token,
        refreshToken: tokenResponse.refresh_token || refreshToken, // Keep old if new not provided
        expiresIn: tokenResponse.expires_in,
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope,
      };
    } catch (error) {
      console.error("❌ Error during token refresh:", error);
      throw error;
    }
  }
}

// Export a singleton instance
export const passwordAuthService = new PasswordAuthService();
