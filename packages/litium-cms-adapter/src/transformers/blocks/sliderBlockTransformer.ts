import { ISlider } from "@/packages/niteco-ui/components/types/cms/ISlider";
import { SliderBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { mapCommonStyles } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";

const CMS_BLOCK_TYPE = "SliderBlock";

export class SliderBlockTransformer extends LitiumBaseBlockTransformer<SliderBlock, ISlider> {
  type = CMS_BLOCK_TYPE;

  transform(block: SliderBlock): ISlider {
    return {
      type: this.getComponentName(columnTypeComponents.SliderBlock),
      autoplay: block.fields.autoplay ?? false,
      autoplayDelay: block.fields.autoplayDelayMs,
      loop: block.fields?.infinite === undefined ? true : block.fields.infinite,
      arrowsDesktop: block.fields.arrowsDesktop,
      arrowsMobile: block.fields.arrowsMobile,
      arrowPosition:
        block.fields.arrowPosition && block.fields.arrowPosition.length > 0
          ? block.fields.arrowPosition[0].value
          : undefined,
      paginationDotsDesktop: block.fields.paginationDotsDesktop,
      paginationDotsMobile: block.fields.paginationDotsMobile,
      paginationDotsOverlapDesktop: block.fields.paginationDotsOverlapDesktop,
      paginationDotsOverlapMobile: block.fields.paginationDotsOverlapMobile,
      slidesPerViewDesktop: block.fields.slidesPerViewDesktop,
      slidesPerViewMobile: block.fields.slidesPerViewMobile,
      slidesPerGroupDesktop: block.fields.slidesPerGroupDesktop,
      slidesPerGroupMobile: block.fields.slidesPerGroupMobile,
      speed: block.fields.speedMs,
      centeredSlides: block.fields.centeredSlides ?? true,
      direction:
        block.fields.direction && block.fields.direction.length > 0 ? block.fields.direction[0].value : undefined,
      style: mapCommonStyles(block.fields.commonStyles),
      children: block.children ? transformBlocks(block.children, this.transformers) : undefined,
      contentSpaceX: block.fields.contentSpaceX?.[0]?.value,
      contentSpaceY: block.fields.contentSpaceY?.[0]?.value,
      contentSpaceXDesktop: block.fields.contentSpaceXDesktop?.[0]?.value,
      contentSpaceYDesktop: block.fields.contentSpaceYDesktop?.[0]?.value,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new SliderBlockTransformer());
