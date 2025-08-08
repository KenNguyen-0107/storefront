import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";

export class LitiumTransformerRegistry {
  private static registry = new Map<string, LitiumBaseBlockTransformer<any, any>>();

  static register(type: string, transformer: LitiumBaseBlockTransformer<any, any>) {
    this.registry.set(type, transformer);
  }

  static get(type: string): LitiumBaseBlockTransformer<any, any> | undefined {
    return this.registry.get(type);
  }

  static getAll(): Map<string, LitiumBaseBlockTransformer<any, any>> {
    return this.registry;
  }

  static has(type: string): boolean {
    return this.registry.has(type);
  }
}
