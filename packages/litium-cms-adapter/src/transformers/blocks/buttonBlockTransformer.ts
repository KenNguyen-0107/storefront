import { ButtonBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { IButton } from "@/packages/niteco-ui/components/types/cms/IButton";
import { mapButton, mapCommonStyles } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";

const CMS_BLOCK_TYPE = "ButtonBlock";

export class ButtonBlockTransformer extends LitiumBaseBlockTransformer<ButtonBlock, IButton> {
  type = CMS_BLOCK_TYPE;

  transform(block: ButtonBlock): IButton {
    return {
      type: "Button",
      link: block.fields?.button ? mapButton(block.fields.button[0]) : undefined,
      style: mapCommonStyles(block.fields?.commonStyles),
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new ButtonBlockTransformer());
