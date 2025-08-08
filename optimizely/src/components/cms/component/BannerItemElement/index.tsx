import { CmsComponent, type LayoutProps } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import type { BannerItemElement as BannerItemElementType } from "@/gql/graphql";
import { BasicBanner } from "@/packages/niteco-ui/components/organisms/BasicBanner";
import { IBanner } from "@/packages/niteco-ui/components/types/cms/IBanner";
import { ILayoutSettings } from "../../types/settings";
import {
  formatHeight,
  getComponentSettingsClass,
  contentSpacingClasses,
  maxWidthClasses,
  textColorClasses,
  getHeadingTag,
  formatRichText,
} from "@/utils";
import clsx from "clsx";

interface BannerItemElementProps {
  data: BannerItemElementType;
  layoutProps?: LayoutProps<any>;
}

export const FormatHeadingText = (
  text: string | undefined | null,
  tag: string,
  showAs: string = "heading",
  color: string = "default",
) => {
  if (!text) {
    return "";
  }
  const HeadingTag = getHeadingTag(tag, showAs);
  return (
    <HeadingTag
      className={textColorClasses[color as keyof typeof textColorClasses]}
    >
      {text}
    </HeadingTag>
  );
};

const BannerItemElement: CmsComponent<
  BannerItemElementType,
  BannerItemElementProps
> = ({ data, layoutProps }) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });
  const componentSettingsClass = getComponentSettingsClass(
    settings as ILayoutSettings,
  );

  const banner: IBanner = {
    // blockHeight: formatHeight(settings.blockHeight as string),
    textAlign: (settings.textAlign as string) || "center",
    showAs: (settings.showAs as string) || "heading",
    image: {
      image: {
        src: data.ImageDesktop?.url?.default || undefined,
        alt: data.Alt || undefined,
        loading: data.Loading || undefined,
      },
      imageMobile: {
        src: data.ImageMobile?.url?.default || undefined,
        alt: data.Alt || undefined,
        loading: data.Loading || undefined,
      },
    },
    heading: FormatHeadingText(
      data.HeadingText,
      settings.headingType || settings.headingFontSize || "h2",
      settings.showAs || "heading",
      settings.headingColor || "default",
    ),
    subheading: FormatHeadingText(
      data.SubHeading,
      settings.subHeadingFontSize || "h3",
      settings.showAs || "heading",
      settings.subHeadingColor || "default",
    ),
    text: {
      content: data.RichText?.html
        ? formatRichText(
            data.RichText?.html,
            settings.paragraphColor || "default",
          )
        : undefined,
    },
    button: [
      {
        link: {
          text: data.ButtonText || undefined,
          url: data.ButtonLink?.default || undefined,
        },
        type: settings.buttonType || undefined,
      },
    ],
    backgroundLink: {
      url: data.BackgroundLink?.default || undefined,
    },
    backgroundColorOverlay: data.OverlayColor || undefined,
    backgroundColorOverlayOpacity: data.OverlayOpacity
      ? data.OverlayOpacity.toString()
      : undefined,
    contentClassName:
      [
        contentSpacingClasses[
          settings.contentSpacing as keyof typeof contentSpacingClasses
        ],
        maxWidthClasses[
          settings.maxWidthContent as keyof typeof maxWidthClasses
        ],
      ].join(" ") || "",
    style: { className: componentSettingsClass },
    cssClass: data.CssClass || "",
  };

  return <BasicBanner block={banner} />;
};

export default BannerItemElement;
