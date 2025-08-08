import { TopHeaderBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { mapLink } from "../../utils/transformerDefinitions";
import { BlockData } from "@/packages/composable-content-engine/types/renderPayload";

const CMS_BLOCK_TYPE = "TopHeaderBlock";

export class TopHeaderBlockTransformer extends LitiumBaseBlockTransformer<TopHeaderBlock, BlockData> {
  type = CMS_BLOCK_TYPE;

  transform(block: TopHeaderBlock): BlockData {
    return {
      type: "TopHeader",
      position: block.fields?.position?.[0]?.value,
      richText: block.fields?.richText,
      backgroundColorHex: block.fields?.backgroundColorHex,
      links: block.fields?.links?.map((linkItem) => mapLink(linkItem.navigationLink)) || [],
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new TopHeaderBlockTransformer());
