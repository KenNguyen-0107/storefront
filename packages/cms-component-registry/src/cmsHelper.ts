import { getFactory, CmsSystemType, DEFAULT_CMS_SYSTEM } from "./factoryRegistry";
import type { ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from "./types";

/**
 * Register a component with a specific CMS system
 *
 * @param cmsSystem      The CMS system to register the component with
 * @param type           The component type to register
 * @param component      The component to bind to the type
 * @param useSuspense    If set to 'true' the registered component will be wrapped in <Suspense />
 * @param loader         The component to use as "loading" state by the <Suspense />
 */
export function registerComponentForCmsSystem(
  cmsSystem: CmsSystemType,
  type: ComponentTypeHandle,
  component: ComponentType,
  useSuspense: boolean = false,
  loader?: ComponentType
): void {
  const factory = getFactory(cmsSystem);
  factory.register(type, component, useSuspense, loader);
}

/**
 * Register multiple components with a specific CMS system
 *
 * @param cmsSystem      The CMS system to register the components with
 * @param components     The components to register
 */
export function registerAllForCmsSystem(cmsSystem: CmsSystemType, components: ComponentTypeDictionary): void {
  const factory = getFactory(cmsSystem);
  factory.registerAll(components);
}

/**
 * Resolve a component for a specific CMS system
 * If not found in the specified CMS system, falls back to the default CMS system
 *
 * @param cmsSystem      The CMS system to resolve the component from
 * @param type           The component type to resolve
 * @returns              The resolved component or undefined if not found
 */
export function resolveComponentForCmsSystem(
  cmsSystem: CmsSystemType,
  type: ComponentTypeHandle
): ComponentType | undefined {
  // Try to resolve from the specified CMS system
  const specificFactory = getFactory(cmsSystem);
  if (specificFactory.has(type)) {
    return specificFactory.resolve(type);
  }

  // If not found and not already checking default, try default CMS system
  if (cmsSystem !== DEFAULT_CMS_SYSTEM) {
    const defaultFactory = getFactory(DEFAULT_CMS_SYSTEM);
    return defaultFactory.resolve(type);
  }

  return undefined;
}

/**
 * Check if a component type exists in a specific CMS system
 *
 * @param cmsSystem      The CMS system to check in
 * @param type           The component type to check for
 * @returns              True if the component exists in the specified CMS system
 */
export function hasComponentInCmsSystem(cmsSystem: CmsSystemType, type: ComponentTypeHandle): boolean {
  const factory = getFactory(cmsSystem);
  return factory.has(type);
}

/**
 * Extract all components from a specific CMS system
 *
 * @param cmsSystem      The CMS system to extract components from
 * @returns              The component dictionary
 */
export function extractComponentsFromCmsSystem(cmsSystem: CmsSystemType): ComponentTypeDictionary {
  const factory = getFactory(cmsSystem);
  return factory.extract();
}
