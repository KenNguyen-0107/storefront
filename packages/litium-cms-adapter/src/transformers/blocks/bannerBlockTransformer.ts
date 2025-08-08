import { IBanner } from "@/packages/niteco-ui/components/types/cms/IBanner";
import { BannerItemBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import {
  mapStringToText,
  mapButton,
  mapContentImage,
  mapLink,
  mapCommonStyles,
} from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { IButton } from "@/packages/niteco-ui/components/types/cms/IButton";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";

const CMS_BLOCK_TYPE = "BannerItemBlock";

export class BannerItemBlockTransformer extends LitiumBaseBlockTransformer<BannerItemBlock, IBanner> {
  type = CMS_BLOCK_TYPE;

  transform(block: BannerItemBlock): IBanner {
    return {
      type: this.getComponentName(columnTypeComponents.BannerItemBlock),
      image:
        block.fields.contentImage && block.fields.contentImage.length > 0
          ? mapContentImage(block.fields.contentImage[0])
          : undefined,
      text: mapStringToText(block.fields.richText),
      backgroundColorOverlay: block.fields.backgroundColorOverlay,
      backgroundColorOverlayOpacity: block.fields.backgroundColorOverlayOpacity,
      button: block.fields.button
        ? block.fields.button.map(mapButton).filter((btn): btn is IButton => btn !== undefined)
        : undefined,
      backgroundLink: block.fields.backgroundLink ? mapLink(block.fields.backgroundLink) : undefined,
      loading: block.fields.loading && block.fields.loading.length > 0 ? block.fields.loading[0].value : undefined,
      blockHeight: block.fields.blockHeight,
      style: mapCommonStyles(block.fields.commonStyles),
    };
  }
}
LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new BannerItemBlockTransformer());
