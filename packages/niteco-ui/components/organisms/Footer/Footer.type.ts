import { BlockData } from "../../../../composable-content-engine/types/renderPayload";
import { CommonImageProps } from "../../atoms/image/CommonImage";
import { ILink } from "../../types/cms/ILink";
export interface IFooterBlock extends BlockData {
  collapsibleMobile?: boolean;
  headerLabel?: string;
  link?: ILink;
  navigationLinksHeader?: {
    cssClass?: string;
    target?: string;
    type?: string;
    text?: string;
    url?: string;
  };
  navigationLinks?: ILink[];
  items?: Array<{
    image?: {
      image?: CommonImageProps;
      type?: string;
    };
    imageAltText?: string;
    navigationLink: ILink;
  }>;
  richText?: string;
  numberOfItemOnMobile?: number;
  numberOfItemOnDesktop?: number;
}
