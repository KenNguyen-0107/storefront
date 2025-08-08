import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { BlockData } from "@/packages/composable-content-engine/types/renderPayload";
import { BaseBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";

/**
 * Transforms an array of blocks using the provided transformers
 * @param blocks Array of blocks to transform
 * @param transformers Map of transformers to use
 * @returns Array of transformed blocks
 */
export function transformBlocks(
  blocks: BaseBlock[],
  transformers: Map<string, LitiumBaseBlockTransformer<any, any>>
): BlockData[] {
  return blocks.map((block) => {
    const transformer = transformers.get(block.__typename);
    if (transformer && transformer.canTransform(block)) {
      const transformed = transformer.transform(block);
      return transformed;
    }
    // fallback: return as-is or throw
    return { type: block.__typename, ...(block.fields || {}) };
  });
}
