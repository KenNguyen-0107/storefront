import { ConfigureCommerceBaseBlockTransformer } from "./base/configureCommerceBaseBlockTransformer";

export class ConfigureCommerceTransformerRegistry {
  private static registry = new Map<string, ConfigureCommerceBaseBlockTransformer<any, any>>();

  static register(type: string, transformer: ConfigureCommerceBaseBlockTransformer<any, any>) {
    this.registry.set(type, transformer);
  }

  static get(type: string): ConfigureCommerceBaseBlockTransformer<any, any> | undefined {
    return this.registry.get(type);
  }

  static getAll(): Map<string, ConfigureCommerceBaseBlockTransformer<any, any>> {
    return this.registry;
  }

  static has(type: string): boolean {
    return this.registry.has(type);
  }
}
