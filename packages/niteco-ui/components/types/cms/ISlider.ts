import { BlockData } from "../../../../composable-content-engine/types/renderPayload";

export interface ISlider extends BlockData {
  className?: string;
  wrapperClass?: string;
  autoplay: boolean;
  autoplayDelay?: string;
  arrowsDesktop?: boolean;
  arrowsMobile?: boolean;
  arrowPosition?: string;
  paginationDotsDesktop?: boolean;
  paginationDotsMobile?: boolean;
  paginationDotsOverlapDesktop?: boolean;
  paginationDotsOverlapMobile?: boolean;
  slidesPerViewDesktop?: number;
  slidesPerViewMobile?: number;
  slidesPerGroupDesktop?: number;
  slidesPerGroupMobile?: number;
  loop?: boolean;
  speed?: number;
  centeredSlides: boolean;
  direction?: string;
  navigation?: {
    mobile?: boolean;
    desktop?: boolean;
  };
  pagination?: {
    clickable?: boolean;
    modifierClass?: string;
    [x: string]: any;
  };
  resistance?: boolean | undefined;
  spaceBetween?: number;
  paginationEl?: string[];
  iconProps?: {
    startPosition: number;
    viewSize: number;
    size: number;
  };
  contentSpaceX?: number;
  contentSpaceY?: number;
  contentSpaceXDesktop?: number;
  contentSpaceYDesktop?: number;
  [x: string]: any;
}
