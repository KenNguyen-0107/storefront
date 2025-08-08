"use client";
import React, { useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "./CustomSwiper";
import ImageTextBlocks from "../../molecules/ImageTextBlocks";
import {
  BlockData,
  ColumnData,
} from "../../../../composable-content-engine/types/renderPayload";
import { BasicBanner } from "../BasicBanner";
import ProductCard from "../ProductCard";

const SliderComponent: React.FC<BlockData & { column?: ColumnData }> = (
  data,
) => {
  const {
    column,
    children,
    settings,
    style,
    autoplay,
    autoplayDelay,
    arrowsDesktop,
    arrowsMobile,
    paginationDotsDesktop,
    paginationDotsMobile,
    slidesPerViewDesktop,
    slidesPerViewMobile,
    slidesPerGroupDesktop,
    slidesPerGroupMobile,
    arrowIconDisplay,
    mobileSpaceBetween,
    loop,
    speed,
  } = data;

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const defaultRenderBlock = (item: BlockData) => {
    switch (item.type) {
      case "ImageTextItemBlock":
        return <ImageTextBlocks block={item} />;
      case "BannerItemBlock":
      case "relatedProduct":
        return <BasicBanner block={item} />;
      default:
        return (
          <ProductCard
            {...item}
            mobileHeigh={125}
            height={264}
            cssClass="px-2"
            from="card-carousel"
          />
        );
    }
  };

  return (
    <CustomSwiper
      wrapperClass={column?.style?.className}
      className={style?.className}
      navigation={settings?.navigation}
      pagination={
        settings?.pagination || {
          clickable: true,
          modifierClass: "modifierPagination",
          enabled: isMobile ? paginationDotsMobile : paginationDotsDesktop,
        }
      }
      loop={loop}
      arrowIconDisplay={arrowIconDisplay}
      arrowsDesktop={arrowsDesktop}
      arrowsMobile={arrowsMobile}
      slidesPerViewDesktop={slidesPerViewDesktop}
      slidesPerViewMobile={slidesPerViewMobile}
      slidesPerGroupDesktop={slidesPerGroupDesktop}
      slidesPerGroupMobile={slidesPerGroupMobile}
      autoplay={autoplay}
      autoplayDelay={autoplayDelay}
      mobileSpaceBetween={mobileSpaceBetween}
      speed={speed}
    >
      {children?.map((item, index) => (
        <SwiperSlide className="w-full" key={`slide-${index}`}>
          {defaultRenderBlock(item)}
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default SliderComponent;
