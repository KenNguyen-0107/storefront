import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { getResponsiveColumnWidthClass } from "@/utils/width-utils";
import { getBackgroundColorClass } from "@/utils/color-utils";
import { cn } from "@/packages/niteco-ui/utils/utils";
import {
  contentSpacingClasses,
  paddingYClasses,
  paddingXClasses,
  horizontalAlignClasses,
  verticalAlignClasses,
  columnHeightClasses,
  directionClasses,
} from "./_enums";
import { DefaultColumnProps } from "../displayTemplates";

export const DefaultColumn: CmsLayoutComponent<DefaultColumnProps> = ({
  layoutProps,
  children,
}) => {
  const {
    paddingX = "none",
    paddingY = "none",
    displayPosition = "",
    width = "w_full",
    widthDesktop = "w_full",
    backgroundColor = "",
    contentSpacing = "none",
    horizontalAlign = "start",
    verticalAlign = "start",
    columnHeight = "default",
    direction = "vertical",
  } = extractSettings(layoutProps);

  const getDisplayPosition = (displayPosition: string) => {
    if (displayPosition === "relative") return "relative";
    if (displayPosition === "absolute") return "absolute";
    return "";
  };

  const contentSpacingClass = contentSpacingClasses[contentSpacing] ?? "";
  const paddingYClass = paddingYClasses[paddingY] ?? "";
  const paddingXClass = paddingXClasses[paddingX] ?? "";
  const widthClass = getResponsiveColumnWidthClass(width, widthDesktop);
  const backgroundClass = getBackgroundColorClass(backgroundColor);
  const horizontalAlignClass = horizontalAlignClasses[horizontalAlign] ?? "";
  const verticalAlignClass = verticalAlignClasses[verticalAlign] ?? "";
  const columnHeightClass = columnHeightClasses[columnHeight] ?? "";
  const directionClass = directionClasses[direction] ?? "";

  return (
    <div
      className={cn(
        "default-column w-full flex flex-1 flex-nowrap grow-0",
        getDisplayPosition(displayPosition),
        directionClass,
        contentSpacingClass,
        paddingYClass,
        paddingXClass,
        backgroundClass,
        widthClass,
        horizontalAlignClass,
        verticalAlignClass,
        columnHeightClass,
      )}
    >
      {children}
    </div>
  );
};

DefaultColumn.displayName = "DefaultColumn";

export default DefaultColumn;
