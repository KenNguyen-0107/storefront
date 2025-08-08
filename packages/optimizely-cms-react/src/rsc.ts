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

// Export React Server Components
export * from "./context/rsc";
export * from "./components/rsc";
export * from "./rsc-utilities";
