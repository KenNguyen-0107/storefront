import { IImage } from "./IImage";
import { ILink } from "./ILink";
import { IStyleProps } from "./IStyleProps";

export interface IImageItem {
  image?: IImage;
  navigationLink?: ILink;
}

export interface IImageList {
  type?: string;
  contentSpaceX?: number;
  contentSpaceXDesktop?: number;
  contentSpaceY?: number;
  contentSpaceYDesktop?: number;
  numberOfItemOnDesktop?: number;
  numberOfItemOnMobile?: number;
  style?: IStyleProps;
  items?: IImageItem[];
}
