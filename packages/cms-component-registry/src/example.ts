// This is an example file showing how to use the multiple CMS system component factory

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

// Import from factoryRegistry for functional API
import { getFactory, DEFAULT_CMS_SYSTEM } from "./factoryRegistry";

// Import from cmsHelper for functional API helpers
import { registerComponentForCmsSystem, resolveComponentForCmsSystem, hasComponentInCmsSystem } from "./cmsHelper";

// Import from registry for class-based API
import { getCmsComponentRegistry } from "./registry";

// Import CmsComponentRegistry class and interface
import { CmsComponentRegistry } from "./CmsComponentRegistry";
import { ICmsComponentRegistry } from "./interfaces";

// Example React components (these would normally be imported)
const DefaultButton = (props: any) => ({ type: "default-button", ...props });
const OptimizelyButton = (props: any) => ({
  type: "optimizely-button",
  ...props,
});
const ContentfulButton = (props: any) => ({
  type: "contentful-button",
  ...props,
});

// Define CMS systems
const OPTIMIZELY_CMS = "optimizely";
const CONTENTFUL_CMS = "contentful";

// Example 1: Using the functional API
function functionalApiExample() {
  // Register components for Optimizely CMS
  registerComponentForCmsSystem(OPTIMIZELY_CMS, "Button", OptimizelyButton);

  // Register components for Contentful CMS
  registerComponentForCmsSystem(CONTENTFUL_CMS, "Button", ContentfulButton);

  // Register default components
  registerComponentForCmsSystem(DEFAULT_CMS_SYSTEM, "Button", DefaultButton);

  // Get buttons from different CMS systems
  const optimizelyButton = resolveComponentForCmsSystem(OPTIMIZELY_CMS, "Button");
  const contentfulButton = resolveComponentForCmsSystem(CONTENTFUL_CMS, "Button");

  // Get a component that doesn't exist in Contentful - will fall back to default
  const contentfulCard = resolveComponentForCmsSystem(CONTENTFUL_CMS, "Card");

  // Check if components exist
  const hasOptimizelyButton = hasComponentInCmsSystem(OPTIMIZELY_CMS, "Button"); // true
  const hasContentfulCard = hasComponentInCmsSystem(CONTENTFUL_CMS, "Card"); // false

  // Demonstrate usage of resolved components
  console.log("Optimizely Button:", optimizelyButton);
  console.log("Contentful Button:", contentfulButton);
  console.log("Contentful Card (fallback):", contentfulCard);
  console.log("Has Optimizely Button:", hasOptimizelyButton);
  console.log("Has Contentful Card:", hasContentfulCard);

  // You can also access factories directly
  const optimizelyFactory = getFactory(OPTIMIZELY_CMS);
  optimizelyFactory.register("Card", DefaultButton);
}

// Example 2: Using the class-based API with the singleton
function classBasedSingletonExample() {
  // Get the registry singleton
  const registry = getCmsComponentRegistry();

  // Register components for different CMS systems
  registry.registerComponent("Button", OptimizelyButton, OPTIMIZELY_CMS);
  registry.registerComponent("Button", ContentfulButton, CONTENTFUL_CMS);
  registry.registerComponent("Button", DefaultButton, DEFAULT_CMS_SYSTEM);

  // Resolve components
  const optimizelyButton = registry.resolveComponent(OPTIMIZELY_CMS, "Button");
  const contentfulButton = registry.resolveComponent(CONTENTFUL_CMS, "Button");

  // Check if components exist
  const hasOptimizelyButton = registry.hasComponent(OPTIMIZELY_CMS, "Button");

  // Demonstrate usage of resolved components
  console.log("Registry - Optimizely Button:", optimizelyButton);
  console.log("Registry - Contentful Button:", contentfulButton);
  console.log("Registry - Has Optimizely Button:", hasOptimizelyButton);

  // Get all registered CMS systems
  const systems = registry.getRegisteredCmsSystems();
  console.log("Registered CMS systems:", systems);
}

// Example 3: Creating your own registry instance
function customRegistryExample() {
  // Create a new registry instance
  const registry = new CmsComponentRegistry();

  // Register components
  registry.registerComponent("Button", DefaultButton, "custom-cms");

  // Use dependency injection with the interface
  useRegistryInComponent(registry);
}

// Example of dependency injection with the interface
function useRegistryInComponent(registry: ICmsComponentRegistry) {
  // Register a component
  registry.registerComponent("Button", DefaultButton, "injected-cms");

  // Resolve a component
  const button = registry.resolveComponent("injected-cms", "Button");

  // Use the button component
  if (button) {
    console.log("Button component resolved:", button);
  }
}

// Export for reference
export const example = {
  functionalApiExample,
  classBasedSingletonExample,
  customRegistryExample,
};
