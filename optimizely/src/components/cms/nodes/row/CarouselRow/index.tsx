import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { CarouselRowProps } from "../displayTemplates";

export const CarouselRow: CmsLayoutComponent<CarouselRowProps> = ({ contentLink, layoutProps, children }) => {
  //   const layout = extractSettings(layoutProps);
  return <div className="vb:row vb:row:CarouselRow">{children}</div>;
};

export default CarouselRow;
