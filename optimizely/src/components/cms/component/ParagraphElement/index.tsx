import React from "react";
import {
  CmsComponent,
  type LayoutProps,
  type WithGqlFragment,
  type CmsComponentProps,
} from "@remkoj/optimizely-cms-react";
import RichText from "@/packages/niteco-ui/components/atoms/text/RichText";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  ParagraphElementDataFragmentDoc,
  type ParagraphElement as ParagraphElementType,
} from "@/gql/graphql";
import { getComponentSettingsClass, ILayoutSettings } from "@/utils";
import clsx from "clsx";

type ParagraphLayoutProps = {
  data: ParagraphElementType;
  layoutProps?: LayoutProps<any>;
};

type ParagraphElementComponent = CmsComponent<ParagraphElementType> &
  WithGqlFragment<any, ParagraphElementType>;

const ParagraphElement: ParagraphElementComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<ParagraphElementType, ParagraphLayoutProps>) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });

  const containerClasses = clsx(
    `paragraph-element`,
    getComponentSettingsClass(settings as ILayoutSettings),
  );

  return (
    <CmsEditable
      as={RichText}
      cmsId={contentLink?.key}
      cmsFieldName="Text"
      editType="floating"
      ctx={ctx}
      className={containerClasses}
      block={{
        content: data.text?.html || "",
        style: { className: containerClasses },
      }}
    />
  );
};

ParagraphElement.displayName = "Paragraph (Component/ParagraphElement)";
ParagraphElement.getDataFragment = () => [
  "ParagraphElementData",
  ParagraphElementDataFragmentDoc,
];
export default ParagraphElement;
