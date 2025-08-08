import { ILink } from "./ILink";

export interface INavigationLinks {
  type?: string;
  collapsibleMobile?: boolean;
  headerLabel?: string;
  navigationLinksHeader?: ILink;
  navigationLinks?: ILink[];
}
