import React from "react";
import LazyImage from "../../atoms/image/LazyImage";
import Text from "../../atoms/text/Text";
import { Button } from "../../atoms/button";
import { IButton } from "components/types/cms/IButton";
import { cn, getDefaultPadding } from "../../../utils/utils";
import { ITextImage } from "components/types/cms/ITextImage";
import {
  renderSpacingClasses,
  renderVerticalClasses,
} from "../../../../composable-content-engine/renderSpacingClasses";
import { LinkText } from "../../atoms/link/Link";
import ButtonImage from "./ButtonImage";

const ImageTextBlocks: React.FC<ITextImage> = ({ block }) => {
  const { image, button, text, contentImagePosition, loading, style, backgroundLink } = block;

  const getButtonClass = (type: string) => {
    switch (type) {
      case "Primary":
        return "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed h-10 lg:h-14 text-white bg-primary hover:bg-black";
      case "Secondary":
        return "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white disabled:text-primary h-10 lg:h-14 text-primary bg-white border border-white border-[1px] hover:bg-primary hover:text-white hover:border-white";
      case "Stroke":
        return "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white disabled:text-primary h-10 lg:h-14 text-white bg-transparent border border-white border-[1px] hover:bg-white hover:text-primary hover:border-primary";
      case "Emphasize":
        return "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed h-10 lg:h-14 text-white bg-red-brown hover:bg-brown";
      case "Stroke-blue":
        return "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed  h-10 lg:h-14 text-primary bg-transparent border border-[1px] hover:bg-white";
    }
  };

  const getLayoutClass = (position?: string) => {
    switch (position) {
      case "ImageTop":
        return "flex items-center flex-col";
      case "ImageBottom":
        return "flex items-center flex-col-reverse";
      case "ImageLeft":
        return "flex justify-center flex-row";
      case "ImageRight":
        return "flex justify-center flex-row-reverse";
      default:
        return "flex items-center flex-col"; // default là top
    }
  };

  return (
    <div
      className={`${cn(getDefaultPadding(), "relative text-center flex gap-4 h-full", getLayoutClass(contentImagePosition), renderVerticalClasses(style, contentImagePosition).spacingClassName, renderSpacingClasses(style).spacingClassName, style?.className)} `}
    >
      {image?.image?.src && (
        <LazyImage
          loading={loading as "eager" | "lazy"}
          src={image?.image?.src}
          alt={image?.image?.alt || "Image"}
          width={+image?.image?.width}
          widthMobile={+image?.imageMobile?.width}
          height={+image?.image?.height}
          heightMobile={+image?.imageMobile?.height}
          className={cn(`${image?.cssClass ? image?.cssClass : ""}`)}
        />
      )}
      <div className={`flex-grow`}>
        <div
          className={`${cn("flex flex-col h-full ", renderVerticalClasses(style, contentImagePosition).spacingClassName, button && button.length >= 1 ? "justify-between md:justify-between" : "")}`}
        >
          <Text content={text?.content} className={`${button && button.length >= 1 ? "mb-4" : ""}`} />
          {button && button.length === 1 && <ButtonImage button={button[0]} cssClass="relative z-10" />}
          {button && button.length > 1 && (
            <div className="flex gap-2 relative z-10">
              {button?.map((button: IButton, index: number) => (
                <ButtonImage button={button} key={index + button.label} />
              ))}
            </div>
          )}
        </div>
      </div>
      {backgroundLink?.url && (
        <LinkText
          aria-label={backgroundLink?.text || "label link"}
          href={backgroundLink?.url || "www.google.com"}
          className="absolute top-0 left-0 right-0 bottom-0"
        ></LinkText>
      )}
    </div>
  );
};

export default ImageTextBlocks;
