export interface NetworkError {
  code: string;
  message: string;
}

export interface HttpError {
  status: number;
  message: string;
}

export interface GraphQLError {
  message: string;
  networkError?: NetworkError;
}

export interface CommercetoolsError {
  message: string;
  code?: string;
  path?: string[];
  extensions?: Record<string, unknown>;
}

export enum ErrorCode {
  // Authentication errors
  AUTH_FAILED = "AUTH_001",
  TOKEN_EXPIRED = "AUTH_002",
  INVALID_CREDENTIALS = "AUTH_003",

  // Product errors
  PRODUCT_NOT_FOUND = "PROD_001",
  INVALID_PRODUCT_DATA = "PROD_002",
  PRODUCT_UPDATE_FAILED = "PROD_003",

  // API errors
  API_REQUEST_FAILED = "API_001",
  RATE_LIMIT_EXCEEDED = "API_002",
  NETWORK_ERROR = "API_003",

  // GraphQL errors
  GRAPHQL_ERROR = "GQL_001",
  INVALID_QUERY = "GQL_002",
  MUTATION_FAILED = "GQL_003",

  // Validation errors
  INVALID_INPUT = "VAL_001",
  MISSING_REQUIRED_FIELD = "VAL_002",
  INVALID_FORMAT = "VAL_003",
}

// Domain Error Details
export interface ErrorContext {
  code: ErrorCode;
  message: string;
  cause?: Error | unknown;
  timestamp?: string;
  stackTrace?: string;
}

// Base Domain Error
export class DomainError extends Error {
  constructor(
    message: string,
    public readonly code: ErrorCode,
    public readonly cause?: Error | unknown,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toErrorContext(): ErrorContext {
    return {
      code: this.code,
      message: this.message,
      cause: this.cause,
      timestamp: new Date().toISOString(),
      stackTrace: this.stack,
    };
  }
}

// Domain-Specific Errors
export class AuthenticationError extends DomainError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.AUTH_FAILED,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class ProductError extends DomainError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.PRODUCT_NOT_FOUND,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class APIError extends DomainError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.API_REQUEST_FAILED,
    public readonly statusCode?: number,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class GraphQLError extends DomainError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.GRAPHQL_ERROR,
    public readonly errors?: readonly ErrorContext[],
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class ValidationError extends DomainError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.INVALID_INPUT,
    public readonly field?: string,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

// Error Factory
export function createError(error: unknown): DomainError {
  if (error instanceof DomainError) {
    return error;
  }

  if (error instanceof Error) {
    // Handle specific error types
    if (
      error.message.includes("authentication") ||
      error.message.includes("unauthorized")
    ) {
      return new AuthenticationError(
        error.message,
        ErrorCode.AUTH_FAILED,
        error,
      );
    }
    if (error.message.includes("not found")) {
      return new ProductError(
        error.message,
        ErrorCode.PRODUCT_NOT_FOUND,
        error,
      );
    }
    if (error.message.includes("network")) {
      return new APIError(
        error.message,
        ErrorCode.NETWORK_ERROR,
        undefined,
        error,
      );
    }
    if (error.message.includes("GraphQL")) {
      return new GraphQLError(
        error.message,
        ErrorCode.GRAPHQL_ERROR,
        undefined,
        error,
      );
    }
  }

  // Default to API error for unknown errors
  return new APIError(
    error instanceof Error ? error.message : "An unknown error occurred",
    ErrorCode.API_REQUEST_FAILED,
    undefined,
    error instanceof Error ? error : undefined,
  );
}
