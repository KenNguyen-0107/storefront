import { cn } from "@/packages/niteco-ui/utils/utils";
import { getBackgroundColorClass } from "@/utils/color-utils";
import {
  getResponsiveSpacingClasses,
  getSectionSpacing,
} from "@/utils/spacing-utils";
import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
enum ContentSpacingClasses {
  none = "gap-0 ",
  small = "gap-1 md:gap-2",
  medium = "gap-2 md:gap-4",
  large = "gap-4 md:gap-6",
  xlarge = "gap-8 md:gap-10",
}
enum PaddingYClasses {
  none = "py-0 ",
  small = "py-1 py-2",
  medium = "py-2 py-4",
  large = "py-4 md:py-6",
  xlarge = "py-6 md:py-12",
}
enum PaddingXClasses {
  none = "px-0 ",
  small = "px-1 px-2",
  medium = "px-2 px-4",
  large = "px-4 md:px-6",
  xlarge = "px-6 md:px-12",
}
export const VisualBuilderNode: CmsLayoutComponent = ({
  contentLink,
  layoutProps,
  children,
  ctx,
}: any) => {
  if (!layoutProps || layoutProps?.layoutType === "experience") {
    return children;
  }

  const {
    contentSpaceY = "medium",
    backgroundColor = "",
    paddingX = "none",
    paddingY = "none",
    displayOnMobile = "yes",
  } = extractSettings(layoutProps);

  const paddingXClass =
    PaddingXClasses[paddingX as keyof typeof PaddingXClasses] ?? "";
  const paddingYClass =
    PaddingYClasses[paddingY as keyof typeof PaddingYClasses] ?? "";
  const gapClass =
    ContentSpacingClasses[
      contentSpaceY as keyof typeof ContentSpacingClasses
    ] ?? "";

  const displayOnMobileClass =
    displayOnMobile === "yes" ? "flex flex-col" : "hidden md:flex md:flex-col";

  const backgroundClass = getBackgroundColorClass(backgroundColor);

  const className = `vb:${layoutProps?.layoutType || ""}`;

  if (layoutProps?.layoutType === "section") {
    return (
      <CmsEditable
        as="div"
        className={cn(
          displayOnMobileClass,
          className,
          backgroundClass,
          getSectionSpacing(contentSpaceY),
          paddingXClass,
          paddingYClass,
          gapClass,
        )}
        data-component="section-component"
        cmsId={contentLink?.key ?? ""}
        ctx={ctx}
      >
        {children}
      </CmsEditable>
    );
  }

  return (
    <div data-component="node-component" className={className}>
      {children}
    </div>
  );
};

VisualBuilderNode.displayName = "[VisualBuilder] Default node";

export default VisualBuilderNode;
