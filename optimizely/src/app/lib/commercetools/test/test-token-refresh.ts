import TokenManager from "@/app/lib/commercetools/auth/token-manager";
import { TokenMonitor } from "@/app/lib/commercetools/test/token-monitor";
import {
  CommercetoolsConfig,
  DEFAULT_CONFIG,
} from "@/app/lib/commercetools/models/config.model";

// Test configuration with default values
const testConfig: CommercetoolsConfig = {
  projectKey: process.env.CTP_PROJECT_KEY || "sample-saas-commerce",
  clientId: process.env.CTP_CLIENT_ID || "1iQubhJ8oiZ4rcpwADlOnmTE",
  clientSecret:
    process.env.CTP_CLIENT_SECRET || "FowGc0xWyfIWNI9Y0Cg5__g7UbBpXHD1",
  apiUrl:
    DEFAULT_CONFIG.apiUrl || "https://api.eu-central-1.aws.commercetools.com",
  authUrl:
    DEFAULT_CONFIG.authUrl || "https://auth.eu-central-1.aws.commercetools.com",
  defaultLocale: DEFAULT_CONFIG.defaultLocale,
};

export async function testTokenRefresh() {
  console.log("🧪 Testing token refresh functionality...");

  const tokenManager = TokenManager.getInstance(testConfig);
  const monitor = new TokenMonitor(testConfig);

  try {
    // Get initial token
    console.log("1️⃣ Getting initial token...");
    const initialToken = await tokenManager.getAccessToken();
    console.log(
      "✅ Initial token obtained:",
      initialToken.substring(0, 20) + "...",
    );

    // Check initial status
    console.log("2️⃣ Initial token status:");
    console.log(monitor.getStatus());

    // Test force refresh
    console.log("3️⃣ Testing force refresh...");
    const refreshedToken = await tokenManager.forceRefresh();
    console.log("✅ Token refreshed:", refreshedToken.substring(0, 20) + "...");

    // Check status after refresh
    console.log("4️⃣ Status after refresh:");
    console.log(monitor.getStatus());

    // Test token info
    console.log("5️⃣ Detailed token info:");
    console.log(tokenManager.getTokenInfo());

    // Test needs refresh
    console.log("6️⃣ Needs refresh check:");
    console.log("Needs refresh:", tokenManager.needsRefresh());

    return {
      success: true,
      initialToken: initialToken.substring(0, 20) + "...",
      refreshedToken: refreshedToken.substring(0, 20) + "...",
      status: monitor.getStatus(),
    };
  } catch (error) {
    console.error("❌ Token refresh test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Export for use in development/testing
if (typeof window === "undefined") {
  // Only run in Node.js environment
  testTokenRefresh().then((result) => {
    if (result.success) {
      console.log("✅ Token refresh test completed successfully");
    } else {
      console.error("❌ Token refresh test failed:", result.error);
    }
  });
}
