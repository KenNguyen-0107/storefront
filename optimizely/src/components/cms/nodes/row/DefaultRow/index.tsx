import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultRowProps } from "../displayTemplates";
import { getResponsiveSpacingClasses } from "@/utils/spacing-utils";
import { getBackgroundColorClass } from "@/utils/color-utils";
import { getRowWidthClass } from "@/utils/width-utils";
import { cn } from "@/packages/niteco-ui/utils/utils";
import {
  ContentSpacingClasses,
  HorizontalAlignClasses,
  PaddingXClasses,
  VerticalAlignClasses,
  VerticalSpacingClasses,
} from "./_enums";

export const DefaultRow: CmsLayoutComponent<DefaultRowProps> = ({
  contentLink,
  layoutProps,
  children,
}) => {
  const {
    width = "full",
    backgroundColor = "none",
    contentSpacing = "none",
    verticalSpacing = "none",
    paddingX = "none",
    horizontalAlign = "center",
    verticalAlign = "center",
    displayOnMobile = "yes",
  } = extractSettings(layoutProps);

  const contentSpacingClass = ContentSpacingClasses[contentSpacing] ?? "";
  const horizontalAlignClass = HorizontalAlignClasses[horizontalAlign] ?? "";
  const verticalAlignClass = VerticalAlignClasses[verticalAlign] ?? "";
  const verticalSpacingClass = VerticalSpacingClasses[verticalSpacing] ?? "";
  const paddingXClass = PaddingXClasses[paddingX] ?? "";
  const displayOnMobileClass =
    displayOnMobile === "yes"
      ? "flex flex-col md:flex-row"
      : "hidden md:flex md:flex-row";

  const backgroundClass = getBackgroundColorClass(backgroundColor);
  const widthClass = getRowWidthClass(width);

  return (
    <div
      className={cn(
        "vb:row:DefaultRow flex-1 flex-nowrap",
        displayOnMobileClass,
        backgroundClass,
        widthClass,
        paddingXClass,
        contentSpacingClass,
        verticalSpacingClass,
        horizontalAlignClass,
        verticalAlignClass,
      )}
    >
      {children}
    </div>
  );
};

DefaultRow.displayName = "DefaultRow";

export default DefaultRow;
