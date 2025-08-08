import { getCmsComponentRegistry } from "../index";

describe("Package exports", () => {
  it("should export getCmsComponentRegistry function", () => {
    expect(typeof getCmsComponentRegistry).toBe("function");
  });

  it("should return a working registry instance from getCmsComponentRegistry", () => {
    const registry = getCmsComponentRegistry();

    // Test basic functionality
    const TestComponent = () => null;
    registry.registerComponent("test-system", "Button", TestComponent);
    const resolved = registry.resolveComponent("test-system", "Button");

    expect(resolved).toBe(TestComponent);
  });
});
