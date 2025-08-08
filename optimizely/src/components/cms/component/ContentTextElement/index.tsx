import React from "react";
import {
  CmsComponent,
  type LayoutProps,
  type WithGqlFragment,
  type CmsComponentProps,
} from "@remkoj/optimizely-cms-react";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  ContentTextElementDataFragmentDoc,
  type ContentTextElement as ContentTextElementType,
} from "@/gql/graphql";
import clsx from "clsx";
import {
  getComponentSettingsClass,
  textColorClasses,
  ILayoutSettings,
  getHeadingTag,
} from "@/utils";

type ContentTextLayoutProps = {
  data: ContentTextElementType;
  layoutProps?: LayoutProps<any>;
};

type ContentTextElementComponent = CmsComponent<ContentTextElementType> &
  WithGqlFragment<any, ContentTextElementType>;

const ContentTextElement: ContentTextElementComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<ContentTextElementType, ContentTextLayoutProps>) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });
  const containerClasses = clsx(
    "content-text-element flex flex-col gap-4 ",
    getComponentSettingsClass(settings as ILayoutSettings),
  );

  const HeadingBlock: React.FC<{
    text: string | undefined | null;
    tag: string;
    showAs?: string;
    color?: string;
  }> = ({ text, tag, showAs = "heading", color = "default" }) => {
    if (!text) return null;
    const HeadingTag = getHeadingTag(tag, showAs);
    return (
      <HeadingTag
        className={textColorClasses[color as keyof typeof textColorClasses]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  };

  const ContentBlock: React.FC<{
    text: string | undefined | null;
    color?: string;
  }> = ({ text, color = "default" }) => {
    if (!text) return null;
    return (
      <div
        className={textColorClasses[color as keyof typeof textColorClasses]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  };
  return (
    <CmsEditable
      as="div"
      className={containerClasses}
      cmsId={contentLink?.key}
      ctx={ctx}
    >
      <HeadingBlock
        text={data.HeadingText}
        tag={settings.headingFontSize || settings.headingType || "h2"}
        showAs={settings.showAs || "heading"}
        color={settings.headingColor || "default"}
      />
      <ContentBlock
        text={data.Paragraph?.html}
        color={settings.paragraphColor || "default"}
      />
    </CmsEditable>
  );
};

ContentTextElement.displayName = "ContentText (Component/ContentTextElement)";
ContentTextElement.getDataFragment = () => [
  "ContentTextElementData",
  ContentTextElementDataFragmentDoc,
];

export default ContentTextElement;
