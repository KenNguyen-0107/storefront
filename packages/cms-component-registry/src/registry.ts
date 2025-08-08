import { CmsComponentRegistry } from "./CmsComponentRegistry";

/**
 * Get a singleton instance of the CmsComponentRegistry
 *
 * @returns A singleton instance of the CmsComponentRegistry
 */
export const getCmsComponentRegistry = (() => {
  let instance: CmsComponentRegistry | null = null;

  return () => {
    if (!instance) {
      instance = new CmsComponentRegistry();
    }
    return instance;
  };
})();
