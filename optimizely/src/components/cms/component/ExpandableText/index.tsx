import React from "react";
import {
  CmsComponent,
  type LayoutProps,
  type WithGqlFragment,
  type CmsComponentProps,
} from "@remkoj/optimizely-cms-react";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  ExpandableTextDataFragmentDoc,
  type ExpandableText as ExpandableTextElementType,
} from "@/gql/graphql";
import ExpandableTextUI from "@/packages/niteco-ui/components/atoms/text/ExpandableText";
import clsx from "clsx";
import {
  getComponentSettingsClass,
  ILayoutSettings,
  textColorClasses,
  backgroundColorVariables,
} from "@/utils";

type ExpandableTextLayoutProps = {
  data: ExpandableTextElementType;
  layoutProps?: LayoutProps<any>;
};

type ExpandableTextComponent = CmsComponent<ExpandableTextElementType> &
  WithGqlFragment<any, ExpandableTextElementType>;

const ExpandableTextComponent: ExpandableTextComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<ExpandableTextElementType, ExpandableTextLayoutProps>) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });
  const containerClasses = clsx(
    "expandable-text-element",
    getComponentSettingsClass(settings as ILayoutSettings),
  );
  const btnClassName =
    clsx(
      textColorClasses[
        settings.buttonTextColor as keyof typeof textColorClasses
      ],
    ) || "";
  // Extract settings specific to ExpandableText

  // Set word count thresholds (not character counts)
  const threshold = data.Threshold
    ? parseInt(data.Threshold.toString(), 10)
    : 60;
  const mobileThreshold = data.MobileThreshold
    ? parseInt(data.MobileThreshold.toString(), 10)
    : threshold; // Default to same as threshold
  const showMoreText = (data.ReadMoreText as string) || "Read More";
  const showLessText = (data.ShowLessText as string) || "Show Less";

  // Get background color from settings or use default
  const backgroundColor =
    backgroundColorVariables[
      settings.backgroundColor as keyof typeof backgroundColorVariables
    ];

  return (
    <CmsEditable
      as={ExpandableTextUI}
      cmsId={contentLink?.key}
      cmsFieldName="ContentText"
      editType="floating"
      ctx={ctx}
      text={data.ContentText?.html || ""}
      mobileThreshold={mobileThreshold}
      threshold={threshold}
      isRichText={true}
      showMoreText={showMoreText}
      showLessText={showLessText}
      className={containerClasses}
      btnClassName={btnClassName}
      gradientColor={backgroundColor}
    />
  );
};

ExpandableTextComponent.displayName =
  "ExpandableText (Component/ExpandableText)";
ExpandableTextComponent.getDataFragment = () => [
  "ExpandableTextData",
  ExpandableTextDataFragmentDoc,
];

export default ExpandableTextComponent;
