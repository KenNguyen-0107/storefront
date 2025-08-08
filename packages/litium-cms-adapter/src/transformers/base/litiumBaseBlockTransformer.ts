import { BaseBlockTransformer } from "@/packages/cms-adapter-core/src/base/BaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { BaseBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";

/**
 * Base class for Litium CMS block transformers that extends the core BaseBlockTransformer
 * and adds Litium-specific functionality.
 *
 * @template TInput - The input block type (must extend BaseBlock)
 * @template TOutput - The output transformed type
 */
export abstract class LitiumBaseBlockTransformer<TInput extends BaseBlock, TOutput = any> extends BaseBlockTransformer<
  TInput,
  TOutput
> {
  /**
   * Constructor that initializes the transformers registry with Litium transformers
   */
  constructor() {
    super();
    this.transformers = LitiumTransformerRegistry.getAll();
  }
}
