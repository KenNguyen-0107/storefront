import { IBanner } from "./IBanner";
import { ILink } from "./ILink";

export interface INavigation {
  layout: ILayout;
  items: INavigationItem[];
}

export interface INavigationItem {
  link?: ILink;
  content?: IBanner;
  children: INavigationItem[];
}

export interface ILayout {
  layoutDesktop: string;
  layoutMobile: string;
  layoutTablet: string;
}
