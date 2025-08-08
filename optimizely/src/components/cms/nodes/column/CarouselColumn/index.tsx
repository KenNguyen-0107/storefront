import React from "react";
import SliderComponent from "./SliderComponent";
import { CmsLayoutComponent } from "@remkoj/optimizely-cms-react";

export const CarouselColumn: CmsLayoutComponent<any> = ({ contentLink, layoutProps, children }) => {
  return (
    <SliderComponent className="vb:row vb:row:CarouselColumn" layoutProps={layoutProps}>
      {children}
    </SliderComponent>
  );
};

export default CarouselColumn;
