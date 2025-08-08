import { RenderDynamicContent } from "../../composable-content-engine/RenderDynamicContent";
import { CmsContent } from "../../optimizely-cms-react/src/components/rsc";
import { ComponentType } from "react";
/**
 * Gets the CMS type from environment variables
 * @returns The CMS type string from environment variable CMS_TYPE
 */
export function getCmsType(): "litium" | "optimizely" | "custom" {
  const cmsType = process.env.CMS_TYPE as "litium" | "optimizely" | "custom";

  if (!cmsType) {
    throw new Error("CMS_TYPE environment variable is not defined");
  }

  return cmsType as "litium" | "optimizely" | "custom";
}

/**
 * Gets the CMS type from environment variables with a default fallback
 * @param defaultType - The default CMS type to use if environment variable is not set
 * @returns The CMS type string from environment variable CMS_TYPE or the default value
 */
export function getCmsTypeWithDefault(
  defaultType: "litium" | "optimizely" | "custom" = "litium"
): "litium" | "optimizely" | "custom" {
  return (process.env.CMS_TYPE || defaultType) as "litium" | "optimizely" | "custom";
}

/**
 * Resolves the appropriate CMS component based on the CMS_TYPE environment variable
 * @param defaultType - The default CMS type to use if environment variable is not set
 * @returns The component to use for rendering CMS content
 */
export function resolveCmsComponent(defaultType: "litium" | "optimizely" | "custom" = "litium"): ComponentType<any> {
  const cmsType = getCmsTypeWithDefault(defaultType);

  switch (cmsType) {
    case "optimizely":
      return CmsContent;
    default:
      return RenderDynamicContent;
  }
}

/**
 * Gets the CMS component for the current environment
 * @returns The component to use for rendering CMS content based on current CMS_TYPE
 */
export function getCmsComponent(): ComponentType<any> {
  return resolveCmsComponent();
}
