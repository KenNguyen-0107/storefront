import {
  Button,
  Link,
  TextOptionDefinition,
  FileItem,
  ContentImage,
  Image,
} from "@/packages/litium-cms-adapter/src/parser/common.types";
import { CommonStyles } from "@/packages/litium-cms-adapter/src/parser/common.types";
import { IImage } from "@/packages/niteco-ui/components/types/cms/IImage";
import { IButton } from "@/packages/niteco-ui/components/types/cms/IButton";
import { IText } from "@/packages/niteco-ui/components/types/cms/IText";
import { ILink } from "@/packages/niteco-ui/components/types/cms/ILink";
import { StyleProps } from "@/packages/composable-content-engine/types/renderPayload";

/**
 * Transforms a Litium Button object into an IButton interface
 * @param btn The Litium Button object to transform
 * @returns IButton object or undefined if button is invalid
 */
export function mapButton(btn: Button): IButton | undefined {
  if (!btn) return undefined;
  return {
    link: mapLink(btn.buttonLink),
    type: btn.buttonType?.[0]?.value,
    cssClass: btn.cssClass,
  };
}

/**
 * Transforms a Litium Link object into an ILink interface
 * @param link The Litium Link object to transform
 * @returns ILink object or undefined if link is invalid
 */
export function mapLink(link: Link | undefined): ILink | undefined {
  if (!link?.url) return undefined;
  return {
    text: link.text,
    url: link.url,
    target: "_self",
  };
}

/**
 * Transforms a Litium TextOptionDefinition object into an IText interface
 * @param textOption The Litium TextOptionDefinition object to transform
 * @returns IText object or undefined if textOption is invalid
 */
export function mapTextOption(textOption: TextOptionDefinition): IText | undefined {
  if (!textOption?.value) return undefined;
  return {
    content: textOption.value,
  };
}

/**
 * Transforms a Litium FileItem object into an ILink interface
 * @param fileItem The Litium FileItem object to transform
 * @returns ILink object or undefined if fileItem is invalid
 */
export function mapFileItem(fileItem: FileItem): ILink | undefined {
  if (!fileItem?.url) return undefined;
  return {
    type: "Link",
    url: fileItem.url,
    text: fileItem.alt || fileItem.filename,
    target: "_self",
  };
}

/**
 * Transforms a Litium CommonStylesBlock object into a StyleProps interface
 * @param styles The Litium CommonStylesBlock object to transform (can be array or single object)
 * @returns StyleProps object or undefined if styles are invalid
 */
export function mapCommonStyles(styles: CommonStyles[] | CommonStyles | undefined): StyleProps | undefined {
  if (!styles) return undefined;

  const styleObject = Array.isArray(styles) ? styles[0] : styles;

  if (!styleObject) return undefined;

  const style: StyleProps = {
    className: styleObject.cssClass,
    inlineStyles: {},
  };

  // Properties to ignore when mapping to inlineStyles
  const ignoreProperties = ["__typename", "cssClass"];

  // Map all CommonStyles properties to inlineStyles, excluding ignored properties
  const styleProperties = Object.keys(styleObject).filter((property) => !ignoreProperties.includes(property));

  styleProperties.forEach((property) => {
    const styleValue = styleObject[property as keyof CommonStyles];

    if (styleValue !== undefined && styleValue !== null) {
      if (Array.isArray(styleValue) && styleValue.length > 0) {
        // Handle array of option definitions
        const value = styleValue[0].value;
        style.inlineStyles![property] = typeof value === "string" && !isNaN(Number(value)) ? Number(value) : value;
      } else if (typeof styleValue === "string" || typeof styleValue === "number") {
        // Handle direct string/number values
        style.inlineStyles![property] = styleValue;
      }
    }
  });

  return style;
}

/**
 * Transforms a string into an IText interface
 * @param text The string to transform
 * @returns IText object or undefined if text is invalid
 */
export function mapStringToText(text: string | undefined): IText | undefined {
  if (!text) return undefined;
  return {
    content: text,
  };
}

/**
 * Transforms a Litium ContentImage object into an IImage interface
 * @param contentImage The Litium ContentImage object to transform
 * @returns IImage object or undefined if contentImage is invalid
 */
export function mapContentImage(contentImage: ContentImage | undefined): IImage | undefined {
  if (!contentImage?.image?.item?.url) return undefined;
  const image = {
    src: contentImage.image.item.url,
    width: contentImage.imageWidth || contentImage.image.item.dimension?.width?.toString(),
    height: contentImage.imageHeight || contentImage.image.item.dimension?.height?.toString(),
    alt: contentImage.imageAltText || contentImage.image.item.alt,
    isFullWidthImage: contentImage.isFullWidthImage,
  };

  const imageMobile = contentImage.imageMobile?.item
    ? {
        src: contentImage.imageMobile.item.url,
        width: contentImage.imageMobileWidth || contentImage.imageMobile.item.dimension?.width?.toString(),
        height: contentImage.imageMobileHeight || contentImage.imageMobile.item.dimension?.height?.toString(),
        alt: contentImage.imageAltText || contentImage.imageMobile.item.alt,
        isFullWidthImage: contentImage.isFullWidthImage,
      }
    : image;

  return {
    type: "Image",
    image: image,
    imageMobile: imageMobile,
    cssClass: contentImage.cssClass,
  };
}
