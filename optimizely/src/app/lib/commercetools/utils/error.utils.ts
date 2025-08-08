import { CommercetoolsError } from "@/app/lib/commercetools/models/error.model";

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

/**
 * API Error Codes
 * Centralized error codes for consistent API responses
 */
export const ERROR_CODES = {
  // Auth-related errors
  ANONYMOUS_AUTH_FAILED: "ANONYMOUS_AUTH_FAILED",
  ANONYMOUS_TOKEN_ERROR: "ANONYMOUS_TOKEN_ERROR",
  MISSING_CREDENTIALS: "MISSING_CREDENTIALS",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  PASSWORD_TOKEN_ERROR: "PASSWORD_TOKEN_ERROR",
  MISSING_REFRESH_TOKEN: "MISSING_REFRESH_TOKEN",
  REFRESH_TOKEN_FAILED: "REFRESH_TOKEN_FAILED",
  REFRESH_TOKEN_ERROR: "REFRESH_TOKEN_ERROR",
  TOKEN_REQUIRED: "TOKEN_REQUIRED",
  AUTH_REQUIRED: "AUTH_REQUIRED",
  AUTH_FAILED: "AUTH_FAILED",
  AUTH_ERROR: "AUTH_ERROR",

  // Customer-related errors
  CUSTOMER_NOT_FOUND: "CUSTOMER_NOT_FOUND",
  MISSING_EMAIL: "MISSING_EMAIL",
  MISSING_VERSION: "MISSING_VERSION",
  FETCH_CUSTOMER_FAILED: "FETCH_CUSTOMER_FAILED",
  FETCH_CUSTOMERS_FAILED: "FETCH_CUSTOMERS_FAILED",
  UPDATE_CUSTOMER_FAILED: "UPDATE_CUSTOMER_FAILED",
  DELETE_CUSTOMER_FAILED: "DELETE_CUSTOMER_FAILED",
  SIGNIN_FAILED: "SIGNIN_FAILED",
  SIGNOUT_FAILED: "SIGNOUT_FAILED",
  SIGNUP_FAILED: "SIGNUP_FAILED",
  REQUEST_EMAIL_VERIFICATION_FAILED: "REQUEST_EMAIL_VERIFICATION_FAILED",
  EMAIL_VERIFICATION_FAILED: "EMAIL_VERIFICATION_FAILED",
  CHANGE_PASSWORD_FAILED: "CHANGE_PASSWORD_FAILED",
  REQUEST_PASSWORD_RESET_FAILED: "REQUEST_PASSWORD_RESET_FAILED",
  RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED",

  // Cart-related errors
  CART_ERROR: "CART_ERROR",
} as const;

/**
 * API Error Messages
 * Centralized error messages for consistent API responses
 */
export const ERROR_MESSAGES = {
  // Auth-related messages
  AUTHORIZATION_HEADER_REQUIRED:
    "Authorization header with Bearer token required",
  AUTHENTICATION_REQUIRED: "Authentication required",
  INVALID_OR_EXPIRED_TOKEN: "Invalid or expired token",
  INVALID_CREDENTIALS: "Invalid credentials",
  INTERNAL_SERVER_ERROR: "Internal server error",
  AUTHENTICATION_FAILED: "Authentication failed",

  // Customer-related messages
  CUSTOMER_NOT_FOUND: "Customer not found",
  EMAIL_PARAMETER_REQUIRED: "Email parameter is required",
  VERSION_PARAMETER_REQUIRED: "Version parameter is required",
  FAILED_TO_FETCH_CUSTOMER: "Failed to fetch customer",
  FAILED_TO_FETCH_CUSTOMERS: "Failed to fetch customers",
  FAILED_TO_UPDATE_CUSTOMER: "Failed to update customer",
  FAILED_TO_DELETE_CUSTOMER: "Failed to delete customer",
  FAILED_TO_SIGN_IN: "Failed to sign in",
  FAILED_TO_SIGN_OUT: "Failed to sign out",
  FAILED_TO_CREATE_CUSTOMER_ACCOUNT: "Failed to create customer account",
  FAILED_TO_SEND_EMAIL_VERIFICATION_TOKEN:
    "Failed to send email verification token",
  FAILED_TO_VERIFY_EMAIL: "Failed to verify email",
  FAILED_TO_CHANGE_PASSWORD: "Failed to change password",
  FAILED_TO_SEND_PASSWORD_RESET_EMAIL: "Failed to send password reset email",
  FAILED_TO_RESET_PASSWORD: "Failed to reset password",

  // Cart-related messages
  CART_OPERATION_FAILED: "Cart operation failed",
} as const;

/**
 * API Success Messages
 * Centralized success messages for consistent API responses
 */
export const SUCCESS_MESSAGES = {
  // Auth-related messages
  SUCCESSFULLY_SIGNED_OUT: "Successfully signed out",

  // Customer-related messages
  PASSWORD_CHANGED_SUCCESSFULLY: "Password changed successfully",
  PASSWORD_RESET_SUCCESSFULLY: "Password reset successfully",
  PASSWORD_RESET_EMAIL_SENT_SUCCESSFULLY:
    "Password reset email sent successfully",
  EMAIL_VERIFICATION_TOKEN_SENT_SUCCESSFULLY:
    "Email verification token sent successfully",
  EMAIL_VERIFIED_SUCCESSFULLY: "Email verified successfully",
  CUSTOMER_DELETED_SUCCESSFULLY: "Customer deleted successfully",

  // Cart-related messages
  DISCOUNT_CODE_APPLIED_SUCCESSFULLY: "Discount code applied successfully",
  DISCOUNT_CODE_REMOVED_SUCCESSFULLY: "Discount code removed successfully",
} as const;

export class CommercetoolsBaseError extends Error {
  constructor(
    message: string,
    public readonly code: ErrorCode,
    public readonly cause?: Error | unknown,
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class AuthenticationError extends CommercetoolsBaseError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.AUTH_FAILED,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class ProductError extends CommercetoolsBaseError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.PRODUCT_NOT_FOUND,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class APIError extends CommercetoolsBaseError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.API_REQUEST_FAILED,
    public readonly statusCode?: number,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class GraphQLError extends CommercetoolsBaseError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.GRAPHQL_ERROR,
    public readonly errors?: readonly CommercetoolsError[],
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export class ValidationError extends CommercetoolsBaseError {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.INVALID_INPUT,
    public readonly field?: string,
    cause?: Error,
  ) {
    super(message, code, cause);
  }
}

export function isCommercetoolsError(
  error: unknown,
): error is CommercetoolsBaseError {
  return error instanceof CommercetoolsBaseError;
}

export function createError(error: unknown): CommercetoolsBaseError {
  if (isCommercetoolsError(error)) {
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

/**
 * API Error Response Utilities
 * Helper functions for consistent API error responses
 */

/**
 * Creates a standardized error response object for API routes
 * Returns an object that can be passed to NextResponse.json()
 */
export function createErrorResponse(
  errorCode: ApiErrorCode,
  message?: string,
  additionalData?: Record<string, any>,
) {
  const errorMessage = message || getDefaultErrorMessage(errorCode);

  return {
    success: false,
    error: {
      message: errorMessage,
      code: errorCode,
      ...additionalData,
    },
  };
}

/**
 * Creates a standardized error response object from an unknown error
 * Returns an object that can be passed to NextResponse.json()
 */
export function createErrorResponseFromError(
  error: any,
  fallbackCode: ApiErrorCode,
  fallbackMessage?: string,
) {
  const message =
    error?.message || fallbackMessage || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
  const code = error?.code || fallbackCode;

  return createErrorResponse(code, message);
}

/**
 * Gets the HTTP status code for an error
 */
export function getErrorStatusCode(
  error: any,
  fallbackCode: ApiErrorCode,
  defaultStatusCode: number = 500,
): number {
  // Check if error has explicit statusCode
  if (error?.statusCode) {
    return error.statusCode;
  }

  // Map error codes to appropriate HTTP status codes
  const errorCode = error?.code || fallbackCode;

  const statusCodeMap: Record<string, number> = {
    [ERROR_CODES.MISSING_CREDENTIALS]: 400,
    [ERROR_CODES.INVALID_CREDENTIALS]: 401,
    [ERROR_CODES.ANONYMOUS_AUTH_FAILED]: 401,
    [ERROR_CODES.REFRESH_TOKEN_FAILED]: 401,
    [ERROR_CODES.AUTH_FAILED]: 401,
    [ERROR_CODES.AUTH_REQUIRED]: 401,
    [ERROR_CODES.TOKEN_REQUIRED]: 401,
    [ERROR_CODES.MISSING_REFRESH_TOKEN]: 400,
    [ERROR_CODES.MISSING_EMAIL]: 400,
    [ERROR_CODES.MISSING_VERSION]: 400,
    [ERROR_CODES.CUSTOMER_NOT_FOUND]: 404,
  };

  return statusCodeMap[errorCode] || defaultStatusCode;
}

/**
 * Gets the default error message for a given error code
 */
function getDefaultErrorMessage(errorCode: ApiErrorCode): string {
  const errorMessageMap: Record<ApiErrorCode, string> = {
    [ERROR_CODES.ANONYMOUS_AUTH_FAILED]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.ANONYMOUS_TOKEN_ERROR]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.MISSING_CREDENTIALS]: ERROR_MESSAGES.INVALID_CREDENTIALS,
    [ERROR_CODES.INVALID_CREDENTIALS]: ERROR_MESSAGES.INVALID_CREDENTIALS,
    [ERROR_CODES.PASSWORD_TOKEN_ERROR]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.MISSING_REFRESH_TOKEN]:
      ERROR_MESSAGES.INVALID_OR_EXPIRED_TOKEN,
    [ERROR_CODES.REFRESH_TOKEN_FAILED]: ERROR_MESSAGES.INVALID_OR_EXPIRED_TOKEN,
    [ERROR_CODES.REFRESH_TOKEN_ERROR]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.TOKEN_REQUIRED]: ERROR_MESSAGES.AUTHORIZATION_HEADER_REQUIRED,
    [ERROR_CODES.AUTH_REQUIRED]: ERROR_MESSAGES.AUTHENTICATION_REQUIRED,
    [ERROR_CODES.AUTH_FAILED]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.AUTH_ERROR]: ERROR_MESSAGES.AUTHENTICATION_FAILED,
    [ERROR_CODES.CUSTOMER_NOT_FOUND]: ERROR_MESSAGES.CUSTOMER_NOT_FOUND,
    [ERROR_CODES.MISSING_EMAIL]: ERROR_MESSAGES.EMAIL_PARAMETER_REQUIRED,
    [ERROR_CODES.MISSING_VERSION]: ERROR_MESSAGES.VERSION_PARAMETER_REQUIRED,
    [ERROR_CODES.FETCH_CUSTOMER_FAILED]:
      ERROR_MESSAGES.FAILED_TO_FETCH_CUSTOMER,
    [ERROR_CODES.FETCH_CUSTOMERS_FAILED]:
      ERROR_MESSAGES.FAILED_TO_FETCH_CUSTOMERS,
    [ERROR_CODES.UPDATE_CUSTOMER_FAILED]:
      ERROR_MESSAGES.FAILED_TO_UPDATE_CUSTOMER,
    [ERROR_CODES.DELETE_CUSTOMER_FAILED]:
      ERROR_MESSAGES.FAILED_TO_DELETE_CUSTOMER,
    [ERROR_CODES.SIGNIN_FAILED]: ERROR_MESSAGES.FAILED_TO_SIGN_IN,
    [ERROR_CODES.SIGNOUT_FAILED]: ERROR_MESSAGES.FAILED_TO_SIGN_OUT,
    [ERROR_CODES.SIGNUP_FAILED]:
      ERROR_MESSAGES.FAILED_TO_CREATE_CUSTOMER_ACCOUNT,
    [ERROR_CODES.REQUEST_EMAIL_VERIFICATION_FAILED]:
      ERROR_MESSAGES.FAILED_TO_SEND_EMAIL_VERIFICATION_TOKEN,
    [ERROR_CODES.EMAIL_VERIFICATION_FAILED]:
      ERROR_MESSAGES.FAILED_TO_VERIFY_EMAIL,
    [ERROR_CODES.CHANGE_PASSWORD_FAILED]:
      ERROR_MESSAGES.FAILED_TO_CHANGE_PASSWORD,
    [ERROR_CODES.REQUEST_PASSWORD_RESET_FAILED]:
      ERROR_MESSAGES.FAILED_TO_SEND_PASSWORD_RESET_EMAIL,
    [ERROR_CODES.RESET_PASSWORD_FAILED]:
      ERROR_MESSAGES.FAILED_TO_RESET_PASSWORD,
    [ERROR_CODES.CART_ERROR]: ERROR_MESSAGES.CART_OPERATION_FAILED,
  };

  return errorMessageMap[errorCode] || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
}

/**
 * Type definitions for API constants
 */
export type ApiErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
export type ApiErrorMessage =
  (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES];
export type ApiSuccessMessage =
  (typeof SUCCESS_MESSAGES)[keyof typeof SUCCESS_MESSAGES];
