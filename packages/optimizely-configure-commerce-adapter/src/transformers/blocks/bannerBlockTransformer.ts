import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { BannerWidget } from "../../parser/blocks.types";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";
import { IBanner } from "@/packages/niteco-ui/components/types/cms/IBanner";
import { ITextImage } from "@/packages/niteco-ui/components/types/cms/ITextImage";
import { IImage } from "@/packages/niteco-ui/components/types/cms/IImage";
import { IText } from "@/packages/niteco-ui/components/atoms/text/text.type";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";
import { combineTextParts } from "../../utils/transformerDefinitions";

const CMS_BLOCK_TYPE = "Basic/Banner";

export class BannerBlockTransformer extends ConfigureCommerceBaseBlockTransformer<BannerWidget, IBanner | ITextImage> {
  type = CMS_BLOCK_TYPE;

  transform(widget: BannerWidget): IBanner | ITextImage {
    // Check if widget has background image
    if (widget.Background === "backgroundImage") {
      // Transform to IBanner
      return {
        type: this.getComponentName(columnTypeComponents.BannerItemBlock),
        image: {
          type: "Image",
          image: {
            src: widget.BackgroundImage || undefined,
            alt: "",
            loading: widget.Loading || undefined,
            height: widget.ImageHeight || undefined,
            width: widget.ImageWidth || undefined,
            isFullWidthImage: true,
          },
          imageMobile: {
            src: widget.BackgroundImage || undefined,
            alt: "",
            loading: widget.Loading || undefined,
            height: widget.ImageHeight || undefined,
            width: widget.ImageWidth || undefined,
          },
        } as IImage,
        text: {
          content: combineTextParts(widget.Heading, widget.Subheading, widget.Description),
        } as IText,
        backgroundColorOverlayOpacity: widget.ImageOverlay || undefined,
        button: widget.ButtonLabel
          ? [
              {
                link: {
                  text: widget.ButtonLabel,
                  url: widget.ButtonLink?.Url || undefined,
                },
                type: widget.ButtonLink?.Type || undefined,
              },
            ]
          : undefined,
        //loading: widget.Loading || undefined,
        style: {
          className: widget.CssClass || undefined,
          inlineStyles: {
            textAlign: widget.CenterTextVertically ? "center" : "",
            verticalAlign: widget.CenterTextVertically ? "middle" : "",
            paddingTop: undefined,
            paddingRight: undefined,
            paddingBottom: undefined,
            paddingLeft: undefined,
            marginTop: undefined,
            marginRight: undefined,
            marginBottom: undefined,
            marginLeft: undefined,
          },
        },
      } as IBanner;
    } else {
      // Transform to ITextImage (when Background is null or other values)
      return {
        type: this.getComponentName(columnTypeComponents.ImageTextItemBlock),
        image: widget.Image
          ? {
              image: {
                src: widget.Image,
                alt: "",
                loading: widget.Loading || undefined,
                height: widget.ImageHeight || undefined,
                width: widget.ImageWidth || undefined,
                isFullWidthImage: true,
              },
              imageMobile: {
                src: widget.Image,
                alt: "",
                loading: widget.Loading || undefined,
                height: widget.ImageHeight || undefined,
                width: widget.ImageWidth || undefined,
              },
            }
          : undefined,
        text: {
          content: combineTextParts(widget.Heading, widget.Subheading, widget.Description),
        } as IText,
        button: widget.ButtonLabel
          ? [
              {
                link: {
                  text: widget.ButtonLabel,
                  url: widget.ButtonLink?.Url || undefined,
                },
                type: widget.ButtonLink?.Type || undefined,
              },
            ]
          : undefined,
        backgroundColorHex: widget.BackgroundColor || undefined,
        loading: widget.Loading || undefined,
      } as ITextImage;
    }
  }
}

ConfigureCommerceTransformerRegistry.register(CMS_BLOCK_TYPE, new BannerBlockTransformer());
