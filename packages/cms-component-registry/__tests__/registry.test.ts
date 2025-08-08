import { getCmsComponentRegistry } from "../src/registry";
import { CmsComponentRegistry } from "../src/CmsComponentRegistry";

describe("getCmsComponentRegistry", () => {
  it("should return a singleton instance of CmsComponentRegistry", () => {
    const registry1 = getCmsComponentRegistry();
    const registry2 = getCmsComponentRegistry();

    // Verify it's a CmsComponentRegistry instance
    expect(registry1).toBeInstanceOf(CmsComponentRegistry);

    // Verify it returns the same instance on multiple calls
    expect(registry1).toBe(registry2);
  });

  it("should have all expected methods from ICmsComponentRegistry", () => {
    const registry = getCmsComponentRegistry();

    // Check for existence of the required methods
    expect(typeof registry.registerComponent).toBe("function");
    expect(typeof registry.registerAll).toBe("function");
    expect(typeof registry.resolveComponent).toBe("function");
    expect(typeof registry.hasComponent).toBe("function");
    expect(typeof registry.extractComponents).toBe("function");
    expect(typeof registry.getRegisteredCmsSystems).toBe("function");
    expect(typeof registry.hasFactory).toBe("function");
  });

  it("should work correctly when registering and resolving components", () => {
    const registry = getCmsComponentRegistry();
    const TestComponent = () => null;

    // Register a component
    registry.registerComponent("test-system", "Button", TestComponent);

    // Should be able to resolve the component
    const resolved = registry.resolveComponent("test-system", "Button");
    expect(resolved).toBe(TestComponent);
  });
});
