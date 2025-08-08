import {
  ITokenService,
  TokenResponse,
  ServiceResponse,
} from "@/app/lib/commercetools/interfaces/token-service.interface";

export class TokenService implements ITokenService {
  private static instance: TokenService;

  private constructor() {}

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  /**
   * Get anonymous token for guest users
   */
  async getAnonymousToken(
    anonymousId?: string,
  ): Promise<ServiceResponse<TokenResponse>> {
    try {
      const projectKey = process.env.CTP_PROJECT_KEY!;
      const clientId = process.env.CTP_CLIENT_ID!;
      const clientSecret = process.env.CTP_CLIENT_SECRET!;
      const authUrl =
        process.env.CTP_AUTH_URL ||
        "https://auth.eu-central-1.aws.commercetools.com";

      // Construct the anonymous token endpoint URL
      const tokenUrl = `${authUrl}/oauth/${projectKey}/anonymous/token`;

      const tokenBody = new URLSearchParams({
        grant_type: "client_credentials",
      });

      // Add anonymousId if provided for cart continuity
      if (anonymousId) {
        tokenBody.append("anonymous_id", anonymousId);
      }

      // Encode client credentials for Basic Authentication
      const clientCredentials = Buffer.from(
        `${clientId}:${clientSecret}`,
      ).toString("base64");

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${clientCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: tokenBody.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Anonymous token request failed:",
          response.status,
          errorText,
        );

        return {
          success: false,
          error: {
            message: "Anonymous authentication failed",
            code: "ANONYMOUS_AUTH_FAILED",
          },
        };
      }

      const tokenData = await response.json();

      return {
        success: true,
        data: tokenData,
      };
    } catch (error: any) {
      console.error("Anonymous token service error:", error);

      return {
        success: false,
        error: {
          message: error.message || "Internal server error",
          code: "ANONYMOUS_TOKEN_ERROR",
        },
      };
    }
  }

  /**
   * Get customer token using email/password authentication
   */
  async getPasswordToken(
    email: string,
    password: string,
  ): Promise<ServiceResponse<TokenResponse>> {
    try {
      if (!email || !password) {
        return {
          success: false,
          error: {
            message: "Email and password are required",
            code: "MISSING_CREDENTIALS",
          },
        };
      }

      const projectKey = process.env.CTP_PROJECT_KEY!;
      const clientId = process.env.CTP_CLIENT_ID!;
      const clientSecret = process.env.CTP_CLIENT_SECRET!;
      const authUrl =
        process.env.CTP_AUTH_URL ||
        "https://auth.eu-central-1.aws.commercetools.com";

      // Construct the customer token endpoint URL
      const tokenUrl = `${authUrl}/oauth/${projectKey}/customers/token`;

      const tokenBody = new URLSearchParams({
        grant_type: "password",
        username: email,
        password: password,
      });

      // Encode client credentials for Basic Authentication
      const clientCredentials = Buffer.from(
        `${clientId}:${clientSecret}`,
      ).toString("base64");

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${clientCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: tokenBody.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Password token request failed:",
          response.status,
          errorText,
        );

        return {
          success: false,
          error: {
            message: "Authentication failed",
            code: "INVALID_CREDENTIALS",
          },
        };
      }

      const tokenData = await response.json();

      return {
        success: true,
        data: tokenData,
      };
    } catch (error: any) {
      console.error("Password token service error:", error);

      return {
        success: false,
        error: {
          message: error.message || "Internal server error",
          code: "PASSWORD_TOKEN_ERROR",
        },
      };
    }
  }

  /**
   * Refresh an existing token
   */
  async refreshToken(
    refreshToken: string,
  ): Promise<ServiceResponse<TokenResponse>> {
    try {
      if (!refreshToken) {
        return {
          success: false,
          error: {
            message: "Refresh token is required",
            code: "MISSING_REFRESH_TOKEN",
          },
        };
      }

      const clientId = process.env.CTP_CLIENT_ID!;
      const clientSecret = process.env.CTP_CLIENT_SECRET!;
      const authUrl =
        process.env.CTP_AUTH_URL ||
        "https://auth.eu-central-1.aws.commercetools.com";

      // Construct the token refresh endpoint URL
      const tokenUrl = `${authUrl}/oauth/token`;

      const tokenBody = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      });

      // Encode client credentials for Basic Authentication
      const clientCredentials = Buffer.from(
        `${clientId}:${clientSecret}`,
      ).toString("base64");

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${clientCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: tokenBody.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Token refresh failed:", response.status, errorText);

        return {
          success: false,
          error: {
            message: "Token refresh failed",
            code: "REFRESH_TOKEN_FAILED",
          },
        };
      }

      const tokenData = await response.json();

      return {
        success: true,
        data: tokenData,
      };
    } catch (error: any) {
      console.error("Refresh token service error:", error);

      return {
        success: false,
        error: {
          message: error.message || "Internal server error",
          code: "REFRESH_TOKEN_ERROR",
        },
      };
    }
  }
}

// Export singleton instance
export const tokenService = TokenService.getInstance();
