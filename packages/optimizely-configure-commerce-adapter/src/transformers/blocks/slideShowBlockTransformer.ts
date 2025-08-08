import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { SlideShowWidget, SlideItem } from "../../parser/blocks.types";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";
import { BlockData } from "@/packages/composable-content-engine/types/renderPayload";
import { IBanner } from "@/packages/niteco-ui/components/types/cms/IBanner";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";
import { combineTextParts } from "../../utils/transformerDefinitions";

const CMS_BLOCK_TYPE = "Basic/Slideshow";

export class SlideShowBlockTransformer extends ConfigureCommerceBaseBlockTransformer<SlideShowWidget, BlockData> {
  type = CMS_BLOCK_TYPE;

  transform(widget: SlideShowWidget): BlockData {
    // Transform slide items to banner blocks
    const slideChildren: BlockData[] =
      widget.SlideContainer?.SlideItems?.map((slideItem: SlideItem) => {
        return this.transformSlideItem(slideItem);
      }) || [];

    return {
      type: this.getComponentName(columnTypeComponents.SliderBlock),
      children: slideChildren,
      autoplay: widget.Autoplay > 0,
      autoplayDelay: widget.Autoplay,
      arrowsDesktop: widget.ShowArrows,
      arrowsMobile: widget.ShowArrows,
      paginationDotsDesktop: widget.SlideIndicator,
      paginationDotsMobile: widget.SlideIndicator,
      loop: true,
      speed: 500,
      slidesPerViewDesktop: 1,
      slidesPerViewMobile: 1,
      slidesPerGroupDesktop: 1,
      slidesPerGroupMobile: 1,
      style: {
        className: widget.CssClass || undefined,
        inlineStyles: {
          height: widget.Height || undefined,
          textAlign: widget.TextAlignment || undefined,
        },
      },
    };
  }

  /**
   * Transform individual slide item to IBanner
   */
  private transformSlideItem(slideItem: SlideItem): IBanner {
    return {
      type: this.getComponentName(columnTypeComponents.BannerItemBlock),
      image: {
        type: "Image",
        image: {
          src: slideItem.Image || undefined,
          alt: slideItem.SlideTitle || "",
          loading: "lazy",
          height: undefined,
          width: undefined,
          isFullWidthImage: true,
        },
        imageMobile: {
          src: slideItem.Image || undefined,
          alt: slideItem.SlideTitle || "",
          loading: "lazy",
          height: undefined,
          width: undefined,
        },
      },
      text: {
        content: combineTextParts(slideItem.Heading, slideItem.Subheading),
      },
      backgroundColorOverlayOpacity: slideItem.ImageOverlay || undefined,
      button: slideItem.ButtonLabel
        ? [
            {
              link: {
                text: slideItem.ButtonLabel,
                url: slideItem.ButtonLink?.Url || undefined,
              },
              type: slideItem.ButtonLink?.Type || undefined,
            },
          ]
        : undefined,
      style: {
        className: undefined,
        inlineStyles: {
          textAlign: slideItem.CenterTextVertically ? "center" : undefined,
          verticalAlign: slideItem.CenterTextVertically ? "middle" : undefined,
          paddingTop: slideItem.ContentPadding || undefined,
          paddingRight: slideItem.ContentPadding || undefined,
          paddingBottom: slideItem.ContentPadding || undefined,
          paddingLeft: slideItem.ContentPadding || undefined,
        },
      },
    } as IBanner;
  }
}

ConfigureCommerceTransformerRegistry.register(CMS_BLOCK_TYPE, new SlideShowBlockTransformer());
