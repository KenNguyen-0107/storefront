import { ILink } from "./ILink";
import { IText } from "./IText";
import { IImage } from "./IImage";
import { IButton } from "./IButton";
export interface IFooterInfo {
  heading?: IText;
  links?: ILink[];
  image?: IImage[];
  button?: IButton;
  text?: IText;
  cssClass?: string;
  [x: string]: any;
}
