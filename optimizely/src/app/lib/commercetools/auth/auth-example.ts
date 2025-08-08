import {
  passwordAuthService,
  PasswordAuthCredentials,
} from "@/app/lib/commercetools/auth/password-auth.service";
import TokenManager from "@/app/lib/commercetools/auth/token-manager";
import { CommercetoolsConfig } from "@/app/lib/commercetools/models/config.model";

/**
 * Examples of how to authenticate and get access tokens
 */

// Example 1: Using Resource Owner Password Credentials (username/password)
export async function authenticateWithUserCredentials() {
  const credentials: PasswordAuthCredentials = {
    clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
    clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!,
    username: "user@example.com", // User's email or username
    password: "userPassword123", // User's password
    authUrl: process.env.COMMERCETOOLS_AUTH_URL!,
    projectKey: process.env.COMMERCETOOLS_PROJECT_KEY,
    scope: "manage_project", // Optional: specify required scopes
  };

  try {
    const result =
      await passwordAuthService.authenticateWithPassword(credentials);

    console.log("Access Token:", result.accessToken);
    console.log("Expires in:", result.expiresIn, "seconds");

    // Use the access token in your API calls
    const apiResponse = await fetch(
      "https://api.commercetools.com/your-project/...",
      {
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return result;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
}

// Example 2: Using Client Credentials (existing TokenManager)
export async function authenticateWithClientCredentials() {
  const config: CommercetoolsConfig = {
    projectKey: process.env.COMMERCETOOLS_PROJECT_KEY!,
    clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
    clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!,
    apiUrl: process.env.COMMERCETOOLS_API_URL!,
    authUrl: process.env.COMMERCETOOLS_AUTH_URL!,
  };

  try {
    const tokenManager = TokenManager.getInstance(config);
    const accessToken = await tokenManager.getAccessToken();

    console.log("Access Token:", accessToken);

    // Use the access token in your API calls
    const apiResponse = await fetch(
      `${config.apiUrl}/${config.projectKey}/...`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return accessToken;
  } catch (error) {
    console.error("Client credentials authentication failed:", error);
    throw error;
  }
}

// Example 3: Refreshing tokens
export async function refreshAccessToken(refreshToken: string) {
  const credentials = {
    clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
    clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!,
    authUrl: process.env.COMMERCETOOLS_AUTH_URL!,
    projectKey: process.env.COMMERCETOOLS_PROJECT_KEY,
  };

  try {
    const result = await passwordAuthService.refreshToken(
      refreshToken,
      credentials,
    );

    console.log("New Access Token:", result.accessToken);
    console.log("Expires in:", result.expiresIn, "seconds");

    return result;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw error;
  }
}

// Example 4: Generic function to authenticate with different methods
export async function authenticate(
  method: "password" | "client_credentials",
  credentials: any,
) {
  switch (method) {
    case "password":
      return await passwordAuthService.authenticateWithPassword(
        credentials as PasswordAuthCredentials,
      );

    case "client_credentials":
      const tokenManager = TokenManager.getInstance(
        credentials as CommercetoolsConfig,
      );
      const token = await tokenManager.getAccessToken();
      return { accessToken: token };

    default:
      throw new Error(`Unsupported authentication method: ${method}`);
  }
}

// Example 5: Complete authentication workflow with error handling
export class AuthenticationManager {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private expiresAt: number = 0;

  async login(credentials: PasswordAuthCredentials): Promise<void> {
    try {
      const result =
        await passwordAuthService.authenticateWithPassword(credentials);

      this.accessToken = result.accessToken;
      this.refreshToken = result.refreshToken || null;
      this.expiresAt = Date.now() + result.expiresIn * 1000;

      console.log("✅ Successfully authenticated");
    } catch (error) {
      console.error("❌ Login failed:", error);
      throw error;
    }
  }

  async getValidToken(): Promise<string> {
    // Return cached token if still valid (with 5-minute buffer)
    const buffer = 5 * 60 * 1000; // 5 minutes
    if (this.accessToken && this.expiresAt > Date.now() + buffer) {
      return this.accessToken;
    }

    // Try to refresh if we have a refresh token
    if (this.refreshToken) {
      try {
        const result = await passwordAuthService.refreshToken(
          this.refreshToken,
          {
            clientId: process.env.COMMERCETOOLS_CLIENT_ID!,
            clientSecret: process.env.COMMERCETOOLS_CLIENT_SECRET!,
            authUrl: process.env.COMMERCETOOLS_AUTH_URL!,
            projectKey: process.env.COMMERCETOOLS_PROJECT_KEY,
          },
        );

        this.accessToken = result.accessToken;
        this.refreshToken = result.refreshToken || this.refreshToken;
        this.expiresAt = Date.now() + result.expiresIn * 1000;

        return this.accessToken;
      } catch (error) {
        console.error("Token refresh failed, need to re-authenticate:", error);
        throw new Error("Authentication expired, please login again");
      }
    }

    throw new Error("No valid token available, please login first");
  }

  async makeAuthenticatedRequest(
    url: string,
    options: RequestInit = {},
  ): Promise<Response> {
    const token = await this.getValidToken();

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  logout(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.expiresAt = 0;
  }
}
