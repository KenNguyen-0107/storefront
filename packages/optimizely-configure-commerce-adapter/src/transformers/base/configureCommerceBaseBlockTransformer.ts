import { BaseBlockTransformer } from "@/packages/cms-adapter-core/src/base/BaseBlockTransformer";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";
import { BaseWidget } from "../../parser/blocks.types";

/**
 * Base class for Optimizely Configure Commerce block transformers that extends the core BaseBlockTransformer
 * and adds Optimizely-specific functionality.
 *
 * @template TInput - The input block type (must extend BaseWidget)
 * @template TOutput - The output transformed type
 */
export abstract class ConfigureCommerceBaseBlockTransformer<
  TInput extends BaseWidget,
  TOutput = any,
> extends BaseBlockTransformer<TInput, TOutput> {
  abstract type: string;

  canTransform(block: TInput): boolean {
    return block.Type === this.type;
  }

  constructor() {
    super();
    this.transformers = ConfigureCommerceTransformerRegistry.getAll();
  }
}
