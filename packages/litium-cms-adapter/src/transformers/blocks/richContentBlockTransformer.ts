import { RichContentBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { IRichContent } from "@/packages/niteco-ui/components/types/cms/IRichContent";
import { mapCommonStyles } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";

const CMS_BLOCK_TYPE = "RichContentBlock";

export class RichContentBlockTransformer extends LitiumBaseBlockTransformer<RichContentBlock, IRichContent> {
  type = CMS_BLOCK_TYPE;

  transform(block: RichContentBlock): IRichContent {
    return {
      type: "RichText",
      content: block.fields?.richText,
      backgroundColorHex: block.fields?.backgroundColorHex,
      style: mapCommonStyles(block.fields?.commonStyles),
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new RichContentBlockTransformer());
