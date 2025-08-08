/**
 * Shared configuration utilities for Niteco packages
 */
/**
 * Check if value is a non-empty string
 */
export declare function isNonEmptyString(toTest: unknown): toTest is string;
/**
 * Check if value is a valid URL
 */
export declare function isValidUrl(toTest: unknown): boolean;
/**
 * Check if value is a valid HTTPS URL (stricter validation)
 */
export declare function isValidHttpsUrl(toTest: unknown): boolean;
/**
 * Get boolean value from environment variable
 */
export declare function getBoolean(envVarName: string, defaultValue?: boolean | (() => boolean)): boolean;
/**
 * Get mandatory environment variable
 */
export declare function getMandatory(envVarName: string): string;
/**
 * Get optional environment variable
 */
export declare function getOptional(envVarName: string, defaultValue?: string | (() => string | undefined) | undefined): string | undefined;
/**
 * Get selection from allowed values
 */
export declare function getSelection<T>(envVarName: string, allowedValues: T[], defaultValue: T): T;
/**
 * Normalize URL by removing trailing slash - returns original if input is falsy
 */
export declare function normalizeUrl(url: string | undefined): string | undefined;
/**
 * Ensure URL has protocol prefix - returns original if input is falsy
 */
export declare function ensureHttpsProtocol(url: string | undefined): string | undefined;
/**
 * Extract domain from URL - returns original if input is falsy or malformed
 */
export declare function extractDomain(url: string | undefined): string | undefined;
