import { ILink } from "./ILink";
import { IStyleProps } from "./IStyleProps";

export interface IButton {
  link?: ILink;
  variant?: string;
  cssClass?: string;
  style?: IStyleProps;
  type?: string;
  [x: string]: any;
}
