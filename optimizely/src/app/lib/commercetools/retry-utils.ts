import type { RetryOptions } from "@/app/lib/commercetools/models/config.model";
import type {
  CommercetoolsError,
  NetworkError,
  HttpError,
  GraphQLError,
} from "@/app/lib/commercetools/models/error.model";

export class RetryError extends Error {
  constructor(
    message: string,
    public readonly attempts: number,
    public readonly lastError: CommercetoolsError,
  ) {
    super(message);
    this.name = "RetryError";
  }
}

export async function withRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000,
  },
): Promise<T> {
  let lastError: CommercetoolsError;

  for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as CommercetoolsError;

      // Don't retry if this is the last attempt
      if (attempt === options.maxRetries) {
        break;
      }

      // Check if we should retry this error
      if (options.retryCondition && !options.retryCondition(error)) {
        throw error;
      }

      // Check if error is retryable (network errors, 5xx, rate limits)
      if (!isRetryableError(error)) {
        throw error;
      }

      // Calculate delay with exponential backoff and jitter
      const delay = Math.min(
        options.baseDelay * Math.pow(2, attempt) + Math.random() * 1000,
        options.maxDelay,
      );

      console.warn(
        `Attempt ${attempt + 1} failed, retrying in ${delay}ms:`,
        error,
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw new RetryError(
    `Operation failed after ${options.maxRetries + 1} attempts`,
    options.maxRetries + 1,
    lastError!,
  );
}

function isRetryableError(error: unknown): boolean {
  // Network errors
  if (isNetworkError(error)) {
    return ["ECONNRESET", "ENOTFOUND", "ETIMEDOUT"].includes(error.code);
  }

  // HTTP errors
  if (isHttpError(error)) {
    // 5xx server errors
    if (error.status >= 500 && error.status < 600) {
      return true;
    }

    // Rate limiting
    if (error.status === 429) {
      return true;
    }

    // Unauthorized (might need token refresh)
    if (error.status === 401) {
      return true;
    }
  }

  // GraphQL errors that might be temporary
  if (isGraphQLError(error)) {
    return !!error.networkError || error.message?.includes("Network error");
  }

  return false;
}

function isNetworkError(error: unknown): error is NetworkError {
  return typeof (error as NetworkError)?.code === "string";
}

function isHttpError(error: unknown): error is HttpError {
  return typeof (error as HttpError)?.status === "number";
}

function isGraphQLError(error: unknown): error is GraphQLError {
  const gqlError = error as GraphQLError;
  return (
    typeof gqlError?.message === "string" &&
    (gqlError.networkError === undefined ||
      isNetworkError(gqlError.networkError))
  );
}
