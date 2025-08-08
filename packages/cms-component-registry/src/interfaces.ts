import { CmsSystemType } from "./factoryRegistry";
import type { ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from "./types";

/**
 * Interface for working with CMS components across different CMS systems
 *
 * This interface provides methods for registering, resolving, and managing
 * components across multiple CMS systems with fallback support.
 */
export interface ICmsComponentRegistry {
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
  registerComponent(
    type: ComponentTypeHandle,
    component: ComponentType,
    cmsSystem?: CmsSystemType,
    useSuspense?: boolean,
    loader?: ComponentType,
    errorBoundary?: ComponentType
  ): void;

  /**
   * Register multiple components with a specific CMS system
   *
   * @param components     The components to register
   * @param cmsSystem      The CMS system to register the components with (defaults to DEFAULT_CMS_SYSTEM)
   */
  registerAll(components: ComponentTypeDictionary, cmsSystem?: CmsSystemType): void;

  /**
   * Resolve a component for a specific CMS system
   * If not found in the specified CMS system, falls back to the default CMS system
   *
   * @param type           The component type to resolve
   * @param cmsSystem      The CMS system to resolve the component from (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              The resolved component or undefined if not found
   */
  resolveComponent(type: ComponentTypeHandle, cmsSystem?: CmsSystemType): ComponentType | undefined;

  /**
   * Check if a component type exists in a specific CMS system
   *
   * @param type           The component type to check for
   * @param cmsSystem      The CMS system to check in (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              True if the component exists in the specified CMS system
   */
  hasComponent(type: ComponentTypeHandle, cmsSystem?: CmsSystemType): boolean;

  /**
   * Extract all components from a specific CMS system
   *
   * @param cmsSystem      The CMS system to extract components from (defaults to DEFAULT_CMS_SYSTEM)
   * @returns              The component dictionary
   */
  extractComponents(cmsSystem?: CmsSystemType): ComponentTypeDictionary;

  /**
   * Get all registered CMS systems
   *
   * @returns Array of registered CMS system identifiers
   */
  getRegisteredCmsSystems(): CmsSystemType[];
}
