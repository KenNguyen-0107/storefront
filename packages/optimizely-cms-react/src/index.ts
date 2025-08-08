/**
 * The version of the current Optimizely DXP React SDK
 */
import buildInfo from "./version.json" with { type: "json" };
export const Version = buildInfo.version;

// Export library
export * as Errors from "./errors";
export * as Utils from "./utilities";
export * from "./types";
export * from "./factory/index";
export * from "./context/types";

// Export React Client Components
export * from "./context/client";
export * from "./factory/index";
export * from "./components/client";
