import { getFactory, hasFactory, getRegisteredCmsSystems, DEFAULT_CMS_SYSTEM, CmsSystemType } from "./factoryRegistry";
import type { ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from "./types";
import { ICmsComponentRegistry } from "./interfaces";

/**
 * Implementation of the ICmsComponentRegistry interface
 *
 * This class provides methods for registering, resolving, and managing
 * components across multiple CMS systems with fallback support.
 */
export class CmsComponentRegistry implements ICmsComponentRegistry {
  /**
   * Register a component with a specific CMS system
   *
   * @param type           The component type to register
   * @param component      The component to bind to the type
   * @param cmsSystem      The CMS system to register the component with (defaults to DEFAULT_CMS_SYSTEM)
   * @param useSuspense    If set to 'true' the registered component will be wrapped in <Suspense />
   * @param loader         The component to use as "loading" state by the <Suspense />
   * @param errorBoundary  The component to use as error boundary
   */
  public registerComponent(
    type: ComponentTypeHandle,
    component: ComponentType,
    cmsSystem: CmsSystemType = DEFAULT_CMS_SYSTEM,
    useSuspense: boolean = false,
    loader?: ComponentType,
    errorBoundary?: ComponentType
  ): void {
    const factory = getFactory(cmsSystem);
    factory.register(type, component, useSuspense, loader, errorBoundary);
  }

  /**
   * Register multiple components with a specific CMS system
   *
   * @param components     The components to register
   * @param cmsSystem      The CMS system to register the components with (defaults to DEFAULT_CMS_SYSTEM)
   */
  public registerAll(components: ComponentTypeDictionary, cmsSystem: CmsSystemType = DEFAULT_CMS_SYSTEM): void {
    const factory = getFactory(cmsSystem);
    factory.registerAll(components);
  }

  /**
   * Resolve a component for a specific CMS system
   * If not found in the specified CMS system, falls back to the default CMS system
   *
   * @param type           The component type to resolve
   * @param cmsSystem      The CMS system to resolve the component from (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              The resolved component or undefined if not found
   */
  public resolveComponent(
    type: ComponentTypeHandle,
    cmsSystem: CmsSystemType = DEFAULT_CMS_SYSTEM
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
   * @param type           The component type to check for
   * @param cmsSystem      The CMS system to check in (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              True if the component exists in the specified CMS system
   */
  public hasComponent(type: ComponentTypeHandle, cmsSystem: CmsSystemType = DEFAULT_CMS_SYSTEM): boolean {
    const factory = getFactory(cmsSystem);
    return factory.has(type);
  }

  /**
   * Extract all components from a specific CMS system
   *
   * @param cmsSystem      The CMS system to extract components from (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              The component dictionary
   */
  public extractComponents(cmsSystem: CmsSystemType = DEFAULT_CMS_SYSTEM): ComponentTypeDictionary {
    const factory = getFactory(cmsSystem);
    return factory.extract();
  }

  /**
   * Get all registered CMS systems
   *
   * @returns Array of registered CMS system identifiers
   */
  public getRegisteredCmsSystems(): CmsSystemType[] {
    return getRegisteredCmsSystems();
  }

  /**
   * Check if a factory exists for a specific CMS system
   *
   * @param cmsSystem      The CMS system to check for
   * @returns              True if a factory exists for the specified CMS system
   */
  public hasFactory(cmsSystem: CmsSystemType): boolean {
    return hasFactory(cmsSystem);
  }
}
