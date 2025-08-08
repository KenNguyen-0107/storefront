export interface IImageProps {
  height?: string;
  width?: string;
  src?: string;
  alt?: string;
  loading?: string;
  cssClass?: string;
  filename?: string;
}
export interface IImage {
  Type?: string;
  Image?: IImageProps;
  ImageMobile?: IImageProps;
  CssClass?: string;
  props?: {
    [x: string]: any;
  };
}
