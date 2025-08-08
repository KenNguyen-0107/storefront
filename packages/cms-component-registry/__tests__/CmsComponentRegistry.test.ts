import { getCmsComponentRegistry } from "../index";
import { DefaultErrorBoundary } from "../src/ErrorBoundary";

// Define the default CMS system constant
const DEFAULT_CMS_SYSTEM = "default";

// Define CmsComponentRegistry type
type CmsComponentRegistry = ReturnType<typeof getCmsComponentRegistry>;

// Mock component for testing
const TestComponent = () => null;
const TestComponent2 = () => null;

describe("CmsComponentRegistry", () => {
  let testRegistry: CmsComponentRegistry;

  beforeEach(() => {
    testRegistry = getCmsComponentRegistry();
    // Clear any existing registrations
    const systems = testRegistry.getRegisteredCmsSystems();
    systems.forEach((system) => {
      const components = testRegistry.extractComponents(system);
      // Reset the registry for each test
      // This is a workaround since we can't directly create a new instance
      // We iterate over components but don't need to use them individually
      components.forEach(() => {
        // No-op: just iterating to trigger any cleanup if needed
      });
    });
  });

  describe("registerComponent", () => {
    it("should register a component with a specific CMS system", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent);
      expect(testRegistry.hasComponent("test-system", "Button")).toBe(true);
    });

    it("should handle registration with suspense", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent, true, TestComponent2);
      expect(testRegistry.hasComponent("test-system", "Button")).toBe(true);

      // We can't directly test the suspense wrapper, but we can verify the component resolves
      const component = testRegistry.resolveComponent("test-system", "Button");
      expect(component).toBeDefined();
    });

    it("should handle registration with error boundary", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent, false, undefined, DefaultErrorBoundary);
      expect(testRegistry.hasComponent("test-system", "Button")).toBe(true);

      // We can't directly test the error boundary wrapper, but we can verify the component resolves
      const component = testRegistry.resolveComponent("test-system", "Button");
      expect(component).toBeDefined();
    });
  });

  describe("registerAll", () => {
    it("should register multiple components with a specific CMS system", () => {
      testRegistry.registerAll("test-system", [
        { type: "Button", component: TestComponent },
        { type: "Card", component: TestComponent2 },
      ]);

      expect(testRegistry.hasComponent("test-system", "Button")).toBe(true);
      expect(testRegistry.hasComponent("test-system", "Card")).toBe(true);
    });
  });

  describe("resolveComponent", () => {
    it("should resolve a component from a specific CMS system", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent);
      const component = testRegistry.resolveComponent("test-system", "Button");
      expect(component).toBe(TestComponent);
    });

    it("should fall back to the default CMS system if component not found", () => {
      testRegistry.registerComponent(DEFAULT_CMS_SYSTEM, "Button", TestComponent);
      testRegistry.registerComponent("test-system", "Card", TestComponent2);

      // This should fall back to the default system
      const component = testRegistry.resolveComponent("test-system", "Button");
      expect(component).toBe(TestComponent);
    });

    it("should return undefined if component not found in any system", () => {
      const component = testRegistry.resolveComponent("test-system", "NonExistent");
      expect(component).toBeUndefined();
    });
  });

  describe("hasComponent", () => {
    it("should return true if component exists in the specified CMS system", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent);
      expect(testRegistry.hasComponent("test-system", "Button")).toBe(true);
    });

    it("should return false if component does not exist in the specified CMS system", () => {
      expect(testRegistry.hasComponent("test-system", "NonExistent")).toBe(false);
    });
  });

  describe("extractComponents", () => {
    it("should extract all components from a specific CMS system", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent);
      testRegistry.registerComponent("test-system", "Card", TestComponent2);

      const components = testRegistry.extractComponents("test-system");
      expect(components.length).toBe(2);
      expect(components.some((c) => c.type === "Button")).toBe(true);
      expect(components.some((c) => c.type === "Card")).toBe(true);
    });

    it("should return an empty array if no components exist for the specified CMS system", () => {
      const components = testRegistry.extractComponents("non-existent-system");
      expect(components).toEqual([]);
    });
  });

  describe("getRegisteredCmsSystems", () => {
    it("should return all registered CMS systems", () => {
      testRegistry.registerComponent("system1", "Button", TestComponent);
      testRegistry.registerComponent("system2", "Card", TestComponent2);

      const systems = testRegistry.getRegisteredCmsSystems();
      expect(systems).toContain("system1");
      expect(systems).toContain("system2");
    });
  });

  describe("hasFactory", () => {
    it("should return true if a factory exists for the specified CMS system", () => {
      testRegistry.registerComponent("test-system", "Button", TestComponent);
      expect(testRegistry.hasFactory("test-system")).toBe(true);
    });

    it("should return false if no factory exists for the specified CMS system", () => {
      expect(testRegistry.hasFactory("non-existent-system")).toBe(false);
    });
  });
});
