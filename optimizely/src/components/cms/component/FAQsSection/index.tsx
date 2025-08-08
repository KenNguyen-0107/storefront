import { Accordion } from "@/packages/niteco-ui/components/atoms/accordion";
import { CmsComponentProps, LayoutProps } from "@remkoj/optimizely-cms-react";
import { IFAQsSectionProps } from "./FAQsSection.type";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSettingValue } from "@/utils/layout-setting";
import React from "react";
import { convertColorValue } from "@/utils/common-utils";
import {
  HeadingAlignDefaultClasses,
  MarginVerticalDefaultClasses,
} from "./FAQsSection.styles";
import { getBackgroundColorClass } from "@/utils/color-utils";
export const FAQsSectionComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<IFAQsSectionProps, LayoutProps<any>>) => {
  if (!data || !data.ListItem.length) return null;
  const items = data.ListItem.map((item, index) => ({
    id: `accordion-item-${index.toString()}`,
    title: item.HeadingText,
    content: <span dangerouslySetInnerHTML={{ __html: item.Paragraph.html }} />,
  }));

  const { HeadingText, allowMultiple } = data;
  const settings = layoutProps?.settings || [];
  const getTrimmed = (key: string) =>
    getSettingValue(settings, key)?.toString().trim().toLowerCase() || "";

  let headingType = getTrimmed("headingType") || "p";
  const headingColor = convertColorValue(getTrimmed("headingColor"));
  const marginVertical = getTrimmed(
    "marginY",
  ) as keyof typeof MarginVerticalDefaultClasses;
  const marginVerticalClass =
    MarginVerticalDefaultClasses[marginVertical] ||
    MarginVerticalDefaultClasses.default;
  const textAlign =
    (getTrimmed("headingAlign") as keyof typeof HeadingAlignDefaultClasses) ||
    "center";
  const backgroundColor = getTrimmed("backgroundColor");
  const backgroundClass = getBackgroundColorClass(backgroundColor);
  const headingAlignClass = HeadingAlignDefaultClasses[textAlign];
  const renderHeading = () => {
    if (!HeadingText) return null;

    return React.createElement(
      headingType as keyof React.JSX.IntrinsicElements,
      {
        className: `${headingColor} ${headingAlignClass}`,
      },
      HeadingText,
    );
  };

  return (
    <>
      <CmsEditable
        as="div"
        ctx={ctx}
        cmsId={contentLink?.key}
        className={` ${marginVerticalClass} ${backgroundClass}`}
      >
        <div className="max-w-[1120px] mx-auto px-4 md:px-0">
          <div className="flex flex-col gap-10">
            {renderHeading()}
            <Accordion
              items={items}
              defaultOpenItems={allowMultiple ? [] : ["accordion-item-0"]}
              allowMultiple={allowMultiple}
            />
          </div>
        </div>
      </CmsEditable>
    </>
  );
};

export default FAQsSectionComponent;
