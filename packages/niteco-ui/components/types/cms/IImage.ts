import { IStyleProps } from "./IStyleProps";

export interface IImageProps {
  height?: string | number;
  width?: string | number;
  src?: string;
  alt?: string;
  loading?: string;
  cssClass?: string;
  isFullWidthImage?: boolean;
}

export interface IImage {
  type?: string;
  image?: IImageProps;
  imageMobile?: IImageProps;
  cssClass?: string;
  style?: IStyleProps;
  [x: string]: any;
}
