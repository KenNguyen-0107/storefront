# @niteco/cms-component-registry

A flexible CMS component registry for React applications that supports multiple CMS systems.

## Features

- Register React components for multiple CMS systems
- Simple API for component registration and resolution
- TypeScript support with comprehensive type definitions
- Fallback to default components when CMS-specific components aren't available
- Suspense support for code-splitting and lazy loading
- Error boundary support for graceful error handling
- Singleton registry pattern for easy access across your application

## Installation

```bash
npm install @niteco/cms-component-registry
# or
yarn add @niteco/cms-component-registry
```

## Usage

### Basic Usage with Registry Singleton

The recommended way to use the component registry is through the singleton instance:

```tsx
import { getCmsComponentRegistry } from "@niteco/cms-component-registry";

// Get the registry singleton
const registry = getCmsComponentRegistry();

// Register a component for a specific CMS system
registry.registerComponent("optimizely", "Button", MyOptimizelyButton);
registry.registerComponent("contentful", "Button", MyContentfulButton);
registry.registerComponent("default", "Button", MyDefaultButton);

// Resolve a component (with fallback to default)
const Button = registry.resolveComponent("optimizely", "Button");
if (Button) {
  // Render the component
  return <Button {...props} />;
}
```

### Using the Legacy Factory API

For backward compatibility, the package also provides the factory-based API:

```tsx
import { getFactory } from "@niteco/cms-component-registry";

// Get the default component factory
const factory = getFactory();

// Register a component
factory.register("Button", MyButtonComponent);

// Resolve a component
const Button = factory.resolve("Button");
if (Button) {
  // Render the component
  return <Button {...props} />;
}
```

### Working with Multiple CMS Systems

```tsx
import {
  registerComponentForCmsSystem,
  resolveComponentForCmsSystem,
  DEFAULT_CMS_SYSTEM,
} from "@niteco/cms-component-registry";

// Define CMS systems
const OPTIMIZELY_CMS = "optimizely";
const CONTENTFUL_CMS = "contentful";

// Register components for specific CMS systems
registerComponentForCmsSystem(OPTIMIZELY_CMS, "Button", OptimizelyButton);
registerComponentForCmsSystem(CONTENTFUL_CMS, "Button", ContentfulButton);
registerComponentForCmsSystem(DEFAULT_CMS_SYSTEM, "Button", DefaultButton);

// Resolve components (with fallback to default)
const button = resolveComponentForCmsSystem(OPTIMIZELY_CMS, "Button");
```

### Using Suspense for Code Splitting

```tsx
import { getCmsComponentRegistry } from "@niteco/cms-component-registry";

const registry = getCmsComponentRegistry();

// Register a component with Suspense
const LazyComponent = React.lazy(() => import("./LazyComponent"));
const LoadingComponent = () => <div>Loading...</div>;

registry.registerComponent("default", "LazyFeature", LazyComponent, true, LoadingComponent);

// When resolved, the component will be wrapped in Suspense
const Feature = registry.resolveComponent("default", "LazyFeature");
```

### Using Error Boundaries for Graceful Error Handling

```tsx
import { getCmsComponentRegistry, DefaultErrorBoundary } from "@niteco/cms-component-registry";

const registry = getCmsComponentRegistry();

// Register a component with a custom error boundary
const MyComponent = () => <div>My Component</div>;
const MyCustomErrorBoundary = ({ children }) => {
  // Your custom error boundary implementation
  return <DefaultErrorBoundary>{children}</DefaultErrorBoundary>;
};

// Use the built-in DefaultErrorBoundary or your custom implementation
registry.registerComponent("default", "Feature", MyComponent, false, null, DefaultErrorBoundary);

// When resolved, the component will be wrapped in the error boundary
const Feature = registry.resolveComponent("default", "Feature");
```

## API Reference

### Registry API (Recommended)

- `getCmsComponentRegistry()`: Get the singleton registry instance
- `registry.registerComponent(cmsSystem, type, component, useSuspense?, loader?)`: Register a component
- `registry.registerAll(cmsSystem, components)`: Register multiple components
- `registry.resolveComponent(cmsSystem, type)`: Resolve a component with fallback
- `registry.hasComponent(cmsSystem, type)`: Check if a component exists
- `registry.extractComponents(cmsSystem)`: Get all components from a CMS system
- `registry.getRegisteredCmsSystems()`: Get all registered CMS systems
- `registry.hasFactory(cmsSystem)`: Check if a factory exists for a CMS system

### Legacy Factory API

- `getFactory(cmsSystem?)`: Get or create a component factory for a specific CMS system
- `hasFactory(cmsSystem)`: Check if a factory exists for a specific CMS system
- `getRegisteredCmsSystems()`: Get all registered CMS systems

### Helper Functions

- `registerComponentForCmsSystem(cmsSystem, type, component, useSuspense?, loader?)`: Register a component
- `registerAllForCmsSystem(cmsSystem, components)`: Register multiple components
- `resolveComponentForCmsSystem(cmsSystem, type)`: Resolve a component with fallback
- `hasComponentInCmsSystem(cmsSystem, type)`: Check if a component exists
- `extractComponentsFromCmsSystem(cmsSystem)`: Get all components from a CMS system

## License

MIT

## Contributing & Publishing

See [PUBLISHING.md](./PUBLISHING.md) for details on how to publish new versions of this package.
