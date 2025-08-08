// import { BlankSectionProps } from "@/components/cms/nodes/column/DefaultColumn";
import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { CmsEditable, extractSettings } from "@remkoj/optimizely-cms-react/rsc";
// import { BlankSectionProps } from "../displayTemplates";
// import { extractSettings } from "@remkoj/optimizely-cms-react/components";

export const BlankSection: CmsLayoutComponent<any> = ({ contentLink, layoutProps, children }) => {
  let className = "";
  const {
    topBottomSpacing = "none",
    verticalSpacing = "",
    width = "",
    useBackgroundImage = "",
  } = extractSettings(layoutProps);
  className = `${SpacingVerticalSpacing(topBottomSpacing)} ${SelectSpacingMarginTop(verticalSpacing)}`;
  return (
    <CmsEditable
      as="div"
      className={`relative ${className} flex flex-col flex-nowrap justify-start vb:grid`}
      cmsId={contentLink.key}
    >
      {children}
    </CmsEditable>
  );
};

export default BlankSection;
function SelectSpacingMarginTop(value: string): string {
  let className = "";
  switch (value) {
    case "fourty_eight_px":
      className = "gap-12";
      break;
    case "thirty_two_px":
      className = "gap-8";
      break;
    case "twenty_four_px":
      className = "gap-6";
      break;
    case "sixteen_px":
      className = "gap-4";
      break;
    case "none":
      className = "gap-0";
      break;
  }
  return className;
}
function SpacingVerticalSpacing(value: string): string {
  let className = "";
  switch (value) {
    case "fourty_eight_px":
      className = "my-12";
      break;
    case "thirty_two_px":
      className = "my-8";
      break;
    case "twenty_four_px":
      className = "my-6";
      break;
    case "sixteen_px":
      className = "my-4";
      break;
    case "none":
      className = "my-0";
      break;
  }
  return className;
}
function SizingWidth(value: string): string {
  let className = "";
  switch (value) {
    case "narrow":
      className = "max-w-3xl w-full mx-auto";
      break;
    case "wide":
      className = "max-w-7xl w-full mx-auto";
      break;
    case "full_width":
      className = "w-full";
      break;
  }
  return className;
}
