import { type ComponentFactory } from "./types";
import { DefaultComponentFactory } from "./default";

// Define a type for CMS system identifiers
export type CmsSystemType = string;

// Default CMS system identifier
export const DEFAULT_CMS_SYSTEM = "default";

// Default merge symbol for component type handles
export const MERGE_SYMBOL = "/";

/**
 * The default merge symbol to use when converting between an array based
 * ComponentTypeHandle and string based ComponentTypeHandle
 */
export const TYPE_MERGE_SYMBOL = MERGE_SYMBOL;

// Store factories for different CMS systems
const factoryRegistry = new Map<CmsSystemType, ComponentFactory>();

/**
 * Create a new instance of the included DefaultComponentFactory, which should
 * be wrapped in a form of caching provided by your project.
 *
 * @param   cmsSystem   The CMS system to get or create a factory for
 * @returns The ComponentFactory for the specified CMS system
 */
export const getFactory: (cmsSystem?: CmsSystemType) => ComponentFactory = (cmsSystem = DEFAULT_CMS_SYSTEM) => {
  // If factory for this CMS system already exists, return it
  if (factoryRegistry.has(cmsSystem)) {
    return factoryRegistry.get(cmsSystem)!;
  }
  const factory = new DefaultComponentFactory();
  factoryRegistry.set(cmsSystem, factory);
  return factory;
};

/**
 * Check if a factory exists for a specific CMS system
 *
 * @param   cmsSystem   The CMS system to check for
 * @returns True if a factory exists for the specified CMS system
 */
export const hasFactory = (cmsSystem: CmsSystemType): boolean => {
  return factoryRegistry.has(cmsSystem);
};

/**
 * Get all registered CMS systems
 *
 * @returns Array of registered CMS system identifiers
 */
export const getRegisteredCmsSystems = (): CmsSystemType[] => {
  return Array.from(factoryRegistry.keys());
};
