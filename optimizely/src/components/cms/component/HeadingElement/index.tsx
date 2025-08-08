import React, { type ElementType } from "react";
import {
  CmsComponent,
  type LayoutProps,
  type WithGqlFragment,
  type CmsComponentProps,
} from "@remkoj/optimizely-cms-react";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  HeadingElementDataFragmentDoc,
  type HeadingElement as HeadingElementType,
} from "@/gql/graphql";
import clsx from "clsx";
import {
  getComponentSettingsClass,
  ILayoutSettings,
  textColorClasses,
  getHeadingTag,
} from "@/utils";

type HeadingLayoutProps = {
  data: HeadingElementType;
  layoutProps?: LayoutProps<any>;
};

type HeadingElementComponent = CmsComponent<HeadingElementType> &
  WithGqlFragment<any, HeadingElementType>;

const HeadingElement: HeadingElementComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<HeadingElementType, HeadingLayoutProps>) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });

  const headingClasses = clsx(
    settings.headingColor &&
      textColorClasses[settings.headingColor as keyof typeof textColorClasses],
  );
  const containerClasses = clsx(
    headingClasses,
    getComponentSettingsClass(settings as ILayoutSettings),
  );
  const HeadingTag = getHeadingTag(
    settings.headingType || settings.fontAsHeading || "h2",
    settings.showAs || "heading",
  );

  return data.HeadingText ? (
    <CmsEditable
      as={HeadingTag}
      cmsId={contentLink?.key}
      cmsFieldName="Heading"
      editType="floating"
      ctx={ctx}
      className={containerClasses}
      dangerouslySetInnerHTML={{ __html: data.HeadingText }}
    />
  ) : null;
};

HeadingElement.displayName = "Heading (Component/HeadingElement)";
HeadingElement.getDataFragment = () => [
  "HeadingElementData",
  HeadingElementDataFragmentDoc,
];

export default HeadingElement;
