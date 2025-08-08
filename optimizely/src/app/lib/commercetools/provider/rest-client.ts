import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { ClientBuilder } from "@commercetools/ts-client";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const projectKey = process.env.CTP_PROJECT_KEY || "sample-saas-commerce";
const clientId = process.env.CTP_CLIENT_ID || "1iQubhJ8oiZ4rcpwADlOnmTE";
const clientSecret =
  process.env.CTP_CLIENT_SECRET || "FowGc0xWyfIWNI9Y0Cg5__g7UbBpXHD1";
const authUrl =
  process.env.CTP_AUTH_URL || "https://auth.eu-central-1.aws.commercetools.com";
const apiUrl =
  process.env.CTP_API_URL || "https://api.eu-central-1.aws.commercetools.com";
const defaultLocale = process.env.CTP_DEFAULT_LOCALE || "en";

// Add error handling for missing credentials
if (!projectKey || !clientId || !clientSecret) {
  throw new Error("Missing required Commercetools environment variables");
}

// --- Middleware Functions ---

// Logger middleware options
const loggerMiddlewareOptions = {
  loggerFn: (response: any) => {
    console.log(`[CUSTOM LOGGER] Response:`, response);
  },
};

// --- Middleware Options ---

// Auth Middleware Options
const authMiddlewareOptions = {
  host: authUrl,
  projectKey: projectKey,
  credentials: { clientId, clientSecret },
  httpClient: fetch,
};

// Http Middleware Options
const httpMiddlewareOptions = {
  host: apiUrl,
  includeResponseHeaders: true,
  maskSensitiveHeaderData: false,
  includeOriginalRequest: true,
  includeRequestInErrorResponse: true,
  enableRetry: true,
  retryConfig: {
    maxRetries: 3,
    retryDelay: 200,
    backoff: false,
    retryCodes: [500, 503],
  },
  httpClient: fetch,
};

// Correlation ID Middleware Options
const correlationIdMiddlewareOptions = {
  // Generate unique correlation IDs using UUID v4
  generate: () => uuidv4(),
};

// --- Client Creation ---
const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withLoggerMiddleware(loggerMiddlewareOptions)
  .withCorrelationIdMiddleware(correlationIdMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
});

export { projectKey, defaultLocale };
