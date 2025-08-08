import { ImageBlock } from "@/components/ListBlock/ListBlock";
import ImageTextBlocks from "../niteco-ui/components/molecules/ImageTextBlocks/index";
import SliderComponent from "../niteco-ui/components/organisms/Slider/SliderComponent";
import BasicBanner from "../niteco-ui/components/organisms/BasicBanner/BasicBanner";
import RichText from "../niteco-ui/components/atoms/text/RichText";

export const columnTypeComponents = {
  ImageTextItemBlock: ImageTextBlocks,
  SliderBlock: SliderComponent,
  RichText: RichText,
  Image: ImageBlock,
  BannerItemBlock: BasicBanner,
};
