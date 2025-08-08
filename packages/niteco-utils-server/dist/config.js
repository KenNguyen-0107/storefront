/**
 * Shared configuration utilities for Niteco packages
 */
/**
 * Check if value is a non-empty string
 */
export function isNonEmptyString(toTest) {
    return typeof toTest == "string" && toTest.length > 0;
}
/**
 * Check if value is a valid URL
 */
export function isValidUrl(toTest) {
    if (!isNonEmptyString(toTest))
        return false;
    try {
        const u = new URL(toTest);
        if (u.protocol != "https:" && u.protocol != "http:")
            return false;
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Check if value is a valid HTTPS URL (stricter validation)
 */
export function isValidHttpsUrl(toTest) {
    if (!isNonEmptyString(toTest))
        return false;
    try {
        const u = new URL(toTest);
        if (u.protocol != "https:")
            return false;
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Get boolean value from environment variable
 */
export function getBoolean(envVarName, defaultValue = false) {
    const currentValue = getOptional(envVarName);
    if (!currentValue) {
        if (typeof defaultValue == "function")
            return defaultValue();
        return defaultValue;
    }
    return currentValue == "1" || currentValue.toLowerCase() == "true";
}
/**
 * Get mandatory environment variable
 */
export function getMandatory(envVarName) {
    let value = undefined;
    try {
        value = process.env[envVarName];
    }
    catch {
        // Ignore on purpose
    }
    if (value == null || value == undefined || value.trim() == "")
        throw new Error(`The environment variable ${envVarName} is required, but not set`);
    return value.trim();
}
/**
 * Get optional environment variable
 */
export function getOptional(envVarName, defaultValue) {
    try {
        return getMandatory(envVarName);
    }
    catch {
        if (typeof defaultValue == "function")
            return defaultValue();
        return defaultValue;
    }
}
/**
 * Get selection from allowed values
 */
export function getSelection(envVarName, allowedValues, defaultValue) {
    const rawValue = getOptional(envVarName, defaultValue);
    if (!rawValue)
        return defaultValue;
    if (allowedValues.some((av) => av == rawValue))
        return rawValue;
    return defaultValue;
}
/**
 * Normalize URL by removing trailing slash - returns original if input is falsy
 */
export function normalizeUrl(url) {
    if (!url)
        return url;
    return url.endsWith("/") ? url.substring(0, url.length - 1) : url;
}
/**
 * Ensure URL has protocol prefix - returns original if input is falsy
 */
export function ensureHttpsProtocol(url) {
    if (!url || url === "")
        return url;
    if (url.includes("://"))
        return url;
    return "https://" + url;
}
/**
 * Extract domain from URL - returns original if input is falsy or malformed
 */
export function extractDomain(url) {
    if (!url || url === "")
        return url;
    if (!url.includes("://"))
        return url;
    try {
        const urlObj = new URL(url);
        return urlObj.host;
    }
    catch {
        // Fallback to string manipulation
        return url.substring(url.indexOf("://") + 3);
    }
}
