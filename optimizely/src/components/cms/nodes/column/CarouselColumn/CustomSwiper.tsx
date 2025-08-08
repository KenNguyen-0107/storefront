"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Swiper } from "swiper/react";
import { FreeMode, Pagination, Virtual } from "swiper/modules";
import {
  FreeModeOptions,
  SwiperOptions,
  Swiper as SwiperType,
} from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { cn } from "@/packages/niteco-ui/utils/utils";
import Icon from "./Icon";

export interface CustomSwiperProps {
  type?: string;
  children: ReactNode;
  buttonPrevClass?: string;
  buttonNextClass?: string;
  className?: string;
  wrapperClass?: string;
  handleReachEnd?: () => void;
  handleReachStart?: () => void;
  handleSlideTo?: () => number;
  setIndex?: Dispatch<SetStateAction<number>>;
  slidesPerViewDesktop?: number;
  slidesPerViewMobile?: number;
  slidesPerGroupDesktop?: number;
  slidesPerGroupMobile?: number;
  arrowsDesktop?: boolean;
  arrowsMobile?: boolean;
  arrowPosition?: "Right only" | "Left only" | "Right Left";
  loop?: boolean;
  draggable?: boolean;
  freeMode?: boolean | FreeModeOptions | undefined;
  navigation?: {
    mobile?: boolean;
    desktop?: boolean;
  };
  pagination?: {
    clickable?: boolean;
    modifierClass?: string;
    mobile?: boolean;
    desktop?: boolean;
  };
  dotPositionDesktop?: string;
  dotPositionMobile?: string;
  arrowIconDisplay?: string;
  speed?: number;
  resistance?: boolean | undefined;
  spaceBetween?: number;
  breakpoints?:
    | { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions }
    | undefined;
  paginationEl?: string[];
  iconProps?: {
    startPosition: number;
    viewSize: number;
    size: number;
  };
  count?: number;
  autoplay?: boolean;
  autoSetSpaceBetweenItems?: boolean;
  autoplayDelay?: number;
  setSwiperRef?: (swiper: any) => void;
  slidePrev?: () => void;
  slideNext?: () => void;
}

const CustomSwiper = ({
  setSwiperRef,
  slidePrev,
  slideNext,
  count,
  type,
  dotPositionDesktop = "none",
  dotPositionMobile = "none",
  children,
  autoSetSpaceBetweenItems,
  buttonPrevClass,
  buttonNextClass,
  className,
  wrapperClass,
  speed = 1000,
  arrowIconDisplay = "both",
  navigation = {
    mobile: false,
    desktop: false,
  },
  pagination,
  handleSlideTo,
  setIndex,
  spaceBetween,
  loop = false,
  iconProps = {
    startPosition: 2,
    viewSize: 26,
    size: 26,
  },
  slidesPerViewDesktop,
  slidesPerViewMobile,
  slidesPerGroupDesktop,
  slidesPerGroupMobile,
  arrowsDesktop,
  arrowsMobile,
  arrowPosition,
  autoplay,
  autoplayDelay,
  ...props
}: CustomSwiperProps) => {
  const [isReachBegin, setIsReachBegin] = useState(true);
  const [isReachEnd, setIsReachEnd] = useState(false);

  useEffect(() => {
    if (!!handleSlideTo) {
      slideNext?.(); // Assuming slideNext is the correct way to navigate
    }
  }, [handleSlideTo, slideNext]);

  // Đặt hàm getArrowIconPosition trong useCallback
  const getArrowIconPosition = useCallback((position: string, from: string) => {
    if (from === "pre") {
      if (arrowIconDisplay === "left")
        return "-translate-y-[19px] -left-[62px]";
      if (arrowIconDisplay === "right")
        return "-translate-y-[19px] -right-[62px]";
      return "-left-[62px]";
    }
    if (from === "next") {
      if (arrowIconDisplay === "left") return "translate-y-[19px] -left-[62px]";
      if (arrowIconDisplay === "right")
        return "translate-y-[19px] -right-[62px]";
      return "-right-[62px]";
    }
  }, []); // Không có dependencies vì hàm không phụ thuộc vào bất kỳ giá trị nào từ component

  const getDotPositionClass = (dotPosition: string, from: string) => {
    const prefix = from === "desktop" ? "md:" : "";

    if (dotPosition === "left")
      return `${prefix}flex ${prefix}items-center ${prefix}justify-start`;
    if (dotPosition === "right")
      return `${prefix}flex ${prefix}items-center ${prefix}justify-end`;
    if (dotPosition === "center")
      return `${prefix}flex ${prefix}items-center ${prefix}justify-center`;
    return `${prefix}hidden`;
  };

  // Memoize navigation buttons to prevent unnecessary re-renders
  const navigationButtons = useMemo(() => {
    return (
      <>
        <button
          aria-label="Previous slide"
          aria-disabled={!loop && isReachBegin}
          onClick={slidePrev}
          disabled={!loop && isReachBegin}
          className={cn(
            "items-center justify-center",
            getArrowIconPosition(arrowIconDisplay, "pre"),
            "z-[3] absolute  top-1/2 ",
            "bg-transparent rounded-full overflow-hidden",
            "disabled:opacity-50",
            arrowsMobile ? "flex" : "hidden",
            arrowsDesktop ? "md:flex" : "md:hidden",
            buttonPrevClass,
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              slidePrev?.();
            }
          }}
        >
          <Icon iconName="chevronleft" size={30} viewSize={30} />
        </button>

        <button
          aria-label="Next slide"
          aria-disabled={!loop && isReachEnd}
          onClick={slideNext}
          disabled={!loop && isReachEnd}
          className={cn(
            "items-center justify-center",
            getArrowIconPosition(arrowIconDisplay, "next"),
            "z-[3] absolute top-1/2",
            "bg-transparent rounded-full overflow-hidden",
            "disabled:opacity-50",
            arrowsMobile ? "flex" : "hidden",
            arrowsDesktop ? "md:flex" : "md:hidden",
            buttonNextClass,
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              slideNext?.();
            }
          }}
        >
          <Icon iconName="chevronright" size={30} viewSize={30} />
        </button>
      </>
    );
  }, [
    loop,
    isReachBegin,
    isReachEnd,
    slidePrev,
    slideNext,
    buttonPrevClass,
    buttonNextClass,
    arrowIconDisplay,
    arrowsMobile,
    arrowsDesktop,
    getArrowIconPosition, // Bây giờ là một hàm ổn định từ useCallback
  ]);

  const autoplayOptions = autoplay
    ? {
        delay: Number(autoplayDelay) || 3000, // default 3000ms nếu không truyền
        disableOnInteraction: false,
      }
    : false;

  const getSlideCondition = (sliderPerView: number = 0) => {
    return sliderPerView < (count ?? 0);
  };

  return (
    <div className={cn("relative w-full", wrapperClass)}>
      <Swiper
        modules={[Pagination, Virtual, FreeMode]}
        className={className}
        pagination={{
          clickable: true,
          el: ".optimizely-swiper-pagination",
          renderBullet: function (index, className) {
            return '<div class="' + className + '"></div>';
          },
        }}
        onSwiper={setSwiperRef}
        loop={loop}
        slidesPerView={slidesPerViewMobile}
        slidesPerGroup={slidesPerGroupMobile}
        allowTouchMove={getSlideCondition(slidesPerViewMobile)} // Disable touch/swipe khi disabled
        allowSlideNext={getSlideCondition(slidesPerViewMobile)} // Disable next slide khi disabled
        allowSlidePrev={getSlideCondition(slidesPerViewMobile)} // Disable prev slide khi disabled
        breakpoints={{
          1025: {
            slidesPerView: slidesPerViewDesktop,
            slidesPerGroup: slidesPerGroupDesktop,
            allowTouchMove: getSlideCondition(slidesPerViewDesktop), // Disable touch/swipe khi disabled
            allowSlideNext: getSlideCondition(slidesPerViewDesktop), // Disable next slide khi disabled
            allowSlidePrev: getSlideCondition(slidesPerViewDesktop), // Disable prev slide khi disabled
            grid: {
              rows: 1,
              fill: "row",
            },
          },
        }}
        speed={speed}
        autoplay={autoplayOptions}
        onSlideChange={(swiper: SwiperType) => {
          setIndex?.(swiper.activeIndex);
          setIsReachBegin(swiper.isBeginning);
          setIsReachEnd(swiper.isEnd);
        }}
        {...props}
      >
        {children}
        <div
          className={cn(
            "optimizely-swiper-pagination gap-4 my-4",
            getDotPositionClass(dotPositionMobile, "mobile"),
            getDotPositionClass(dotPositionDesktop, "desktop"),
          )}
        ></div>
      </Swiper>

      {navigationButtons}
    </div>
  );
};

export default CustomSwiper;
