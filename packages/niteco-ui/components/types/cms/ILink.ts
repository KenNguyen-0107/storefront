import { IStyleProps } from "./IStyleProps";

export interface ILink {
  type?: string;
  text?: string;
  url?: string;
  target?: string;
  cssClass?: string;
  style?: IStyleProps;
  [x: string]: any;
}
