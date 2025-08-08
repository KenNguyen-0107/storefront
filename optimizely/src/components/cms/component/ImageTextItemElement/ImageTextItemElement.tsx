import React from "react";
import { getSettingValue } from "@/utils/layout-setting";
import { Button } from "@/packages/niteco-ui/components/atoms/button";
import NextImage from "next/image";
import { getUserAgent } from "./imageTextItemElementHelpers";
import {
  type LayoutProps,
  type CmsComponentProps,
} from "@remkoj/optimizely-cms-react";

import {
  ImageTextItemElementTemplate,
  textTransformMap,
  ContentSpacingDefaultClasses,
  BlockTemplate,
  PaddingContentClassesTextImage,
  PaddingContentClassesDefault,
  PaddingContentClassesCategoryItem,
  HorizontalAlignment,
  VerticalAlignment,
  ContentSpacing,
} from "./imageTextItemElementHelpers";

import { ImageTextItemElementProps } from "./ImageTextItemElement.type";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getBackgroundColorClass } from "@/utils/color-utils";
import { convertColorValue } from "@/utils/common-utils";
const ImageTextItemElement = async ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<ImageTextItemElementProps, LayoutProps<any>>) => {
  const isMobile = await getUserAgent();
  const {
    Heading,
    RichText,
    Image,
    ImageMobile,
    Alt,
    Loading = "lazy",
    ButtonLink,
    ButtonText,
    IsFullWidthImage,
    BackgroundLink,
    CssClass,
  } = data || {};

  const settings = layoutProps?.settings || [];
  const template = layoutProps?.template as ImageTextItemElementTemplate;

  const getTrimmed = (key: string) =>
    getSettingValue(settings, key)?.toString().trim().toLowerCase() || "";

  // --- Extract style values from settings ---
  const textTransform = getTrimmed("textTransform");
  const headingColor = convertColorValue(getTrimmed("headingColor"));
  const paragraphColor = convertColorValue(getTrimmed("paragraphColor"));
  let headingType = getTrimmed("fontAsHeading") || "div";
  const buttonType = getTrimmed("buttonType");

  const borderColor = getTrimmed("borderColor");
  const borderWidth = getTrimmed("borderWidth") === "border" ? "border" : "0px";
  const borderStyle = getTrimmed("borderStyle");
  const borderValue = `${borderWidth} border-${borderStyle} border-${borderColor}`;
  const textTransformClass = textTransformMap[textTransform] || "";
  const shadow =
    getTrimmed("shadow") === "yes" ? "shadow-[0_4px_8px_0_#00000040]" : "";

  const paddingKey = getTrimmed(
    "padding",
  ) as keyof typeof PaddingContentClassesDefault;

  let responsivePadding = "";
  switch (template) {
    case BlockTemplate.DefaultItem:
      responsivePadding = PaddingContentClassesDefault[paddingKey] || "";
      break;
    case BlockTemplate.CategoryItem:
      responsivePadding = PaddingContentClassesCategoryItem[paddingKey] || "";
      break;
    default:
      responsivePadding = PaddingContentClassesTextImage[paddingKey] || "";
  }

  const justifyContentKey = getTrimmed("justifyContent") || "center";
  const alignContentKey = getTrimmed("alignContent") || "center";
  const spacingKey = getTrimmed("contentSpacing") || "small";
  const backgroundColor = getTrimmed("backgroundColor");
  const justifyContentClass =
    HorizontalAlignment[justifyContentKey as keyof typeof HorizontalAlignment];
  const alignContentClass =
    VerticalAlignment[alignContentKey as keyof typeof VerticalAlignment];
  const contentSpacingClass =
    ContentSpacingDefaultClasses[
      spacingKey as keyof typeof ContentSpacingDefaultClasses
    ];

  const imageSrc =
    (isMobile ? ImageMobile?.url?.default : null) || Image?.url?.default;

  const renderHeading = () => {
    if (!Heading?.html) return null;
    if (!headingType) {
      return <div dangerouslySetInnerHTML={{ __html: Heading.html }} />;
    }
    const contentText = Heading.html.replace(/<[^>]+>/g, "");
    if (headingType === "plain") {
      headingType = "p";
    }
    return React.createElement(
      headingType as keyof React.JSX.IntrinsicElements,
      {
        className: `font-primary ${headingColor} ${textTransformClass}`,
        dangerouslySetInnerHTML: { __html: contentText },
      },
    );
  };

  const widthImgDefaultTemplate = `${
    paddingKey && template === BlockTemplate.DefaultItem && IsFullWidthImage
      ? "!w-[calc(100%+16px)] md:!w-[calc(100%+32px)]"
      : ""
  } `;

  const backgroundClass = getBackgroundColorClass(backgroundColor);
  const borderCategoryTemplate =
    template === BlockTemplate.CategoryItem
      ? "border-b border-b-solid border-[#283270]"
      : "";

  const spacingInItem = getSettingValue(settings, "alignContentItem")
    ?.toString()
    .trim();

  const contentSpacingClassInItem =
    ContentSpacing[spacingInItem as keyof typeof ContentSpacing];

  return (
    <CmsEditable
      as="div"
      ctx={ctx}
      cmsId={contentLink?.key}
      className={[
        responsivePadding,
        backgroundClass,
        justifyContentClass,
        alignContentClass,
        contentSpacingClass,
        "relative w-full flex flex-col ",
        borderValue,
        shadow,
        `${CssClass ? CssClass : "h-full"}`,
        borderCategoryTemplate,
      ].join(" ")}
      data-component="image-text-item-element"
    >
      {BackgroundLink?.default && (
        <a
          aria-label={Alt || "image text"}
          href={BackgroundLink?.default}
          className="absolute inset-0 z-2"
        />
      )}
      <div
        className={`relative ${IsFullWidthImage ? "w-full" : ""} ${widthImgDefaultTemplate}`}
      >
        {imageSrc && (
          <NextImage
            unoptimized={true}
            loading={Loading || "lazy"}
            src={imageSrc}
            alt={Alt || "Image"}
            width={100}
            height={100}
            className="w-full h-auto object-cover z-1"
          />
        )}
      </div>

      <div
        className={`flex flex-col h-full ${contentSpacingClassInItem} ${contentSpacingClass}`}
      >
        {renderHeading()}
        <div
          className={paragraphColor}
          dangerouslySetInnerHTML={{ __html: RichText?.html || "" }}
        />

        {buttonType && ButtonText && (
          <div>
            <Button href={ButtonLink?.default || "/"} buttonType={buttonType}>
              {ButtonText}
            </Button>
          </div>
        )}
      </div>
    </CmsEditable>
  );
};

export default ImageTextItemElement;
