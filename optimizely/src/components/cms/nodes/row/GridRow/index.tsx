import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { GridRowProps } from "../displayTemplates";
import { getBackgroundColorClass } from "@/utils/color-utils";
import { getRowWidthClass } from "@/utils/width-utils";
import { cn } from "@/packages/niteco-ui/utils/utils";
import {
  getComponentSettingsClass,
  ILayoutSettings,
  gridColumnClasses,
} from "@/utils";

export const GridRow: CmsLayoutComponent<GridRowProps> = ({
  contentLink,
  layoutProps,
  children,
}) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });
  const {
    desktopColumns = "one",
    mobileColumns = "one",
    width = "full",
    backgroundColor = "none",
  } = settings;
  const gridColumnsClass = `${gridColumnClasses[mobileColumns as keyof typeof gridColumnClasses]} md:${gridColumnClasses[desktopColumns as keyof typeof gridColumnClasses]}`;

  const containerClasses = getComponentSettingsClass(
    settings as ILayoutSettings,
  );

  const backgroundClass = getBackgroundColorClass(backgroundColor);
  const widthClass = getRowWidthClass(width);

  return (
    <div
      className={cn(
        "vb:row:GridRow flex-1 grid",
        gridColumnsClass,
        widthClass,
        backgroundClass,
        containerClasses,
      )}
    >
      {children}
    </div>
  );
};

GridRow.displayName = "GridRow";

export default GridRow;
