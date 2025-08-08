import { ImageTextItemBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { ITextImage } from "@/packages/niteco-ui/components/types/cms/ITextImage";
import { IButton } from "@/packages/niteco-ui/components/types/cms/IButton";
import {
  mapCommonStyles,
  mapStringToText,
  mapButton,
  mapLink,
  mapContentImage,
} from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";

const CMS_BLOCK_TYPE = "ImageTextItemBlock";

export class ImageTextItemBlockTransformer extends LitiumBaseBlockTransformer<ImageTextItemBlock, ITextImage> {
  type = CMS_BLOCK_TYPE;

  transform(block: ImageTextItemBlock): ITextImage {
    return {
      type: this.getComponentName(columnTypeComponents.ImageTextItemBlock),
      button: block.fields.button
        ? block.fields.button.map(mapButton).filter((btn): btn is IButton => btn !== undefined)
        : undefined,
      image:
        block.fields.contentImage && block.fields.contentImage.length > 0
          ? mapContentImage(block.fields.contentImage[0])
          : undefined,
      loading:
        block.fields.loading && block.fields.loading.length > 0
          ? block.fields.loading[0].value?.toLowerCase()
          : undefined,
      text: mapStringToText(block.fields.richText),
      style: mapCommonStyles(block.fields.commonStyles),
      backgroundLink: block.fields.backgroundLink ? mapLink(block.fields.backgroundLink) : undefined,
      backgroundColorHex: block.fields.backgroundColorHex,
      backgroundColorOpacity: block.fields.backgroundColorOpacity,
      contentImagePosition:
        block.fields.contentImagePosition && block.fields.contentImagePosition.length > 0
          ? block.fields.contentImagePosition[0].value
          : undefined,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new ImageTextItemBlockTransformer());
