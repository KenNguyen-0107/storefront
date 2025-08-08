import { WidgetBlock } from "../parser/blocks.types";
import { BlockData } from "@/packages/composable-content-engine/types/renderPayload";
import { ConfigureCommerceBaseBlockTransformer } from "../transformers/base/configureCommerceBaseBlockTransformer";

export function transformBlocks(
  blocks: WidgetBlock[],
  transformers: Map<string, ConfigureCommerceBaseBlockTransformer<any, any>>
): BlockData[] {
  return blocks.map((block) => {
    const transformer = transformers.get(block.__typename);
    if (transformer && transformer.canTransform(block)) {
      const transformed = transformer.transform(block);
      return transformed;
    }
    // fallback: return as-is or throw
    return { ...block };
  });
}
