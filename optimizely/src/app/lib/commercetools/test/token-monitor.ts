import TokenManager from "@/app/lib/commercetools/auth/token-manager";
import type { CommercetoolsConfig } from "@/app/lib/commercetools/models";

export interface TokenStatus {
  isValid: boolean;
  hasRefreshToken: boolean;
  expiresAt: number | null;
  expiresIn: number | null;
  timeUntilExpiry: string;
  scope: string | null;
  needsRefresh: boolean;
}

export class TokenMonitor {
  private tokenManager: TokenManager;

  constructor(config: CommercetoolsConfig) {
    this.tokenManager = TokenManager.getInstance(config);
  }

  public getStatus(): TokenStatus {
    const tokenInfo = this.tokenManager.getTokenInfo();
    const needsRefresh = this.tokenManager.needsRefresh();

    let timeUntilExpiry = "N/A";
    if (tokenInfo.expiresIn !== null) {
      const minutes = Math.floor(tokenInfo.expiresIn / 1000 / 60);
      const seconds = Math.floor((tokenInfo.expiresIn / 1000) % 60);
      timeUntilExpiry = `${minutes}m ${seconds}s`;
    }

    return {
      isValid:
        tokenInfo.hasToken &&
        tokenInfo.expiresIn !== null &&
        tokenInfo.expiresIn > 0,
      hasRefreshToken: tokenInfo.hasRefreshToken,
      expiresAt: tokenInfo.expiresAt,
      expiresIn: tokenInfo.expiresIn,
      timeUntilExpiry,
      scope: tokenInfo.scope,
      needsRefresh,
    };
  }

  public async forceRefresh(): Promise<string> {
    return this.tokenManager.forceRefresh();
  }

  public clearCache(): void {
    this.tokenManager.clearCache();
  }

  // Start monitoring with periodic status logging
  public startMonitoring(intervalMs = 60000): NodeJS.Timeout {
    console.log("🔍 Starting token monitoring...");

    return setInterval(() => {
      const status = this.getStatus();
      console.log("📊 Token Status:", {
        valid: status.isValid,
        hasRefresh: status.hasRefreshToken,
        expiresIn: status.timeUntilExpiry,
        needsRefresh: status.needsRefresh,
        scope: status.scope,
      });

      if (status.needsRefresh && status.hasRefreshToken) {
        console.log("⚠️ Token needs refresh soon!");
      }
    }, intervalMs);
  }
}
