import { ColumnBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { ColumnData } from "@/packages/composable-content-engine/types/renderPayload";
import { mapCommonStyles } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";

const CMS_BLOCK_TYPE = "ColumnBlock";

export class ColumnBlockTransformer extends LitiumBaseBlockTransformer<ColumnBlock, ColumnData> {
  type = CMS_BLOCK_TYPE;

  transform(block: ColumnBlock): ColumnData {
    return {
      width: block.fields?.widthOptionDesktop?.[0]?.value,
      widthOptionDesktop: block.fields?.widthOptionDesktop?.[0]?.value,
      widthOptionMobile: block.fields?.widthOptionMobile?.[0]?.value,
      blocks: transformBlocks(block.children || [], this.transformers as any),
      style: mapCommonStyles(block.fields?.commonStyles),
      numberOfItemOnDesktop: block.fields?.numberOfItemOnDesktop,
      numberOfItemOnMobile: block.fields?.numberOfItemOnMobile,
      height: block.fields?.blockHeight,
      contentSpaceX: block.fields?.contentSpaceX?.[0]?.value,
      contentSpaceY: block.fields?.contentSpaceY?.[0]?.value,
      contentSpaceXDesktop: block.fields?.contentSpaceXDesktop?.[0]?.value,
      contentSpaceYDesktop: block.fields?.contentSpaceYDesktop?.[0]?.value,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new ColumnBlockTransformer());
