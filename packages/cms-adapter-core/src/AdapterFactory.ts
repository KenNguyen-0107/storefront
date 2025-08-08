import { IAdapter } from "./interfaces/IAdapter";

// Type for adapter constructors
export type AdapterConstructor = new (...args: any[]) => IAdapter;

export class AdapterFactory {
  private static registry = new Map<string, AdapterConstructor>();

  /**
   * Register an adapter constructor with a unique name.
   */
  static register(name: string, ctor: AdapterConstructor) {
    if (this.registry.has(name)) {
      throw new Error(`Adapter with name '${name}' is already registered.`);
    }
    this.registry.set(name, ctor);
  }

  /**
   * Create an adapter instance by name, passing any constructor arguments.
   */
  static create(name: string, ...args: any[]): IAdapter {
    const ctor = this.registry.get(name);
    if (!ctor) {
      throw new Error(`Adapter not found: ${name}`);
    }
    return new ctor(...args);
  }

  /**
   * List all registered adapter names.
   */
  static getSupportedAdapters(): string[] {
    return Array.from(this.registry.keys());
  }
}
