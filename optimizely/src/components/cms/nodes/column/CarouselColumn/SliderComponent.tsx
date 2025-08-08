"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "./CustomSwiper";
import { extractSettings } from "@remkoj/optimizely-cms-react";
import { useSwiper } from "./useSwiper";
import { getResponsiveColumnWidthClass } from "@/utils/width-utils";
import { parseSliderValue } from "@/utils/common-utils";

const SliderComponent: React.FC<any> = (data) => {
  const { children, settings, style, layoutProps, className } = data;

  const { setSwiperRef, slidePrev, slideNext } = useSwiper();
  const {
    width = "",
    widthDesktop = "",
    arrowIconDisplay = "",
    autoSetSpaceBetweenItems = "",
    slidesPerGroupDesktop = "",
    slidesPerGroupMobile = "",
    slidesPerViewDesktop = "",
    slidesPerViewMobile = "",
    arrowPositionDesktop = "",
    arrowPositionMobile = "",
    autoPlay = "",
    infinite = "",
    dotPositionDesktop = "none",
    dotPositionMobile = "none",
    speed = 1000,
  } = extractSettings(layoutProps);
  const widthClass = getResponsiveColumnWidthClass(width, widthDesktop);

  const slidesPerGroupDesktopParsed = parseSliderValue(
    slidesPerGroupDesktop,
  ) as number;
  const slidesPerGroupMobileParsed = parseSliderValue(
    slidesPerGroupMobile,
  ) as number;
  const slidesPerViewDesktopParsed = parseSliderValue(
    slidesPerViewDesktop,
  ) as number;
  const slidesPerViewMobileParsed = parseSliderValue(
    slidesPerViewMobile,
  ) as number;
  const arrowPositionDesktopParsed = parseSliderValue(
    arrowPositionDesktop,
  ) as boolean;
  const arrowPositionMobileParsed = parseSliderValue(
    arrowPositionMobile,
  ) as boolean;
  const autoSetSpaceBetweenItemsParsed = parseSliderValue(
    autoSetSpaceBetweenItems,
  ) as boolean;
  const autoPlayParsed = parseSliderValue(autoPlay) as boolean;
  const infiniteParsed = parseSliderValue(infinite) as boolean;
  const speedParsed = parseSliderValue(speed) as number;

  const getMaxWidth = (slidesPerView: number) => {
    if (slidesPerView === 1) return "md:max-w-[100%] mr-2 md:mr-8";
    if (slidesPerView === 2)
      return "md:max-w-[calc((100%-32px)/2)] mr-2 md:mr-8";
    if (slidesPerView === 3)
      return "md:max-w-[calc((100%-64px)/3)] mr-2 md:mr-8";
    if (slidesPerView === 4)
      return "md:max-w-[calc((100%-96px)/4)] mr-2 md:mr-8";
    if (slidesPerView === 5)
      return "md:max-w-[calc((100%-128px)/5)] mr-2 md:mr-8";
    return "max-w-[100%]";
  };

  return (
    <div className={`Carousel-Col ${widthClass} min-w-0 w-full`}>
      <CustomSwiper
        className={style?.className}
        autoSetSpaceBetweenItems={autoSetSpaceBetweenItemsParsed}
        arrowIconDisplay={arrowIconDisplay}
        loop={infiniteParsed}
        arrowsDesktop={arrowPositionDesktopParsed}
        arrowsMobile={arrowPositionMobileParsed}
        slidesPerViewDesktop={slidesPerViewDesktopParsed}
        slidesPerViewMobile={slidesPerViewMobileParsed}
        slidesPerGroupDesktop={slidesPerGroupDesktopParsed}
        slidesPerGroupMobile={slidesPerGroupMobileParsed}
        autoplay={autoPlayParsed}
        dotPositionDesktop={dotPositionDesktop}
        dotPositionMobile={dotPositionMobile}
        speed={speedParsed}
        setSwiperRef={setSwiperRef}
        slidePrev={slidePrev}
        slideNext={slideNext}
        count={children?.length}
      >
        {children?.map((item: any, index: any) => (
          <SwiperSlide
            className={`${getMaxWidth(slidesPerViewDesktopParsed)} w-full`}
            key={`slide-${index}`}
          >
            {item}
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default SliderComponent;
