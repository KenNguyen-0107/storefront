import {
  TextOptionDefinition,
  IntOptionDefinition,
  Link,
  Button,
  Metadata,
  ContentImage,
  CommonStyles,
  Image,
} from "./common.types";

export interface BaseBlock {
  __typename: string;
  fields: {
    __typename: string;
    _name: string;
    commonStyles?: CommonStyles[];
  };
  children?: BaseBlock[];
}

export interface SectionBlock extends BaseBlock {
  children: (RowBlock | ContentBlock)[];
  fields: BaseBlock["fields"] & {
    backgroundColorHex?: string;
    paddingX?: IntOptionDefinition[];
    paddingXDesktop?: IntOptionDefinition[];
    paddingY?: IntOptionDefinition[];
    paddingYDesktop?: IntOptionDefinition[];
  };
}

export interface RowBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    numberOfItemOnDesktop?: number;
    numberOfItemOnMobile?: number;
    backgroundColorHex?: string;
    backgroundColorOpacity?: number;
    rowWidthOptionDesktop?: TextOptionDefinition[];
    rowWidthOptionMobile?: TextOptionDefinition[];
    contentSpaceX?: IntOptionDefinition[];
    contentSpaceY?: IntOptionDefinition[];
    contentSpaceXDesktop?: IntOptionDefinition[];
    contentSpaceYDesktop?: IntOptionDefinition[];
    blockHeight?: string;
  };
  children: (ColumnBlock | ContentBlock)[];
}

export interface ColumnBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    numberOfItemOnDesktop?: number;
    numberOfItemOnMobile?: number;
    widthOptionDesktop?: TextOptionDefinition[];
    widthOptionMobile?: TextOptionDefinition[];
    blockHeight?: string;
    contentSpaceX?: IntOptionDefinition[];
    contentSpaceY?: IntOptionDefinition[];
    contentSpaceXDesktop?: IntOptionDefinition[];
    contentSpaceYDesktop?: IntOptionDefinition[];
  };
  children: ContentBlock[];
}

export interface BannerItemBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    contentImage?: ContentImage[];
    richText?: string;
    backgroundColorOverlay?: string;
    backgroundColorOverlayOpacity?: string;
    button?: Button[];
    backgroundLink?: Link;
    loading?: TextOptionDefinition[];
    cssClass?: string;
    blockHeight?: string;
  };
}

export interface ImageTextItemBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    richText: string;
    contentImage: ContentImage[];
    backgroundColorHex?: string;
    backgroundColorOpacity?: string;
    button?: Button[];
    backgroundLink?: Link;
    contentImagePosition?: TextOptionDefinition[];
    loading?: TextOptionDefinition[];
  };
}

export interface SliderBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    paginationDotsOverlapMobile?: boolean;
    slidesPerViewDesktop?: number;
    slidesPerViewMobile?: number;
    slidesPerGroupDesktop?: number;
    slidesPerGroupMobile?: number;
    speedMs?: number;
    centeredSlides?: boolean;
    direction?: TextOptionDefinition[];
    contentSpace?: IntOptionDefinition[];
    autoplay?: boolean;
    autoplayDelayMs?: string;
    infinite?: boolean;
    arrowsDesktop?: boolean;
    arrowsMobile?: boolean;
    arrowPosition?: TextOptionDefinition[];
    paginationDotsDesktop?: boolean;
    paginationDotsMobile?: boolean;
    paginationDotsOverlapDesktop?: boolean;
    contentSpaceX?: IntOptionDefinition[];
    contentSpaceXDesktop?: IntOptionDefinition[];
    contentSpaceY?: IntOptionDefinition[];
    contentSpaceYDesktop?: IntOptionDefinition[];
  };
  children?: ImageTextItemBlock[];
}

export interface SubscriberBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    richText: string;
    subscribeInputText: string;
    placeholderText: string;
    button?: Button;
    cssClass?: string;
    blockHeight?: string;
  };
}

export interface LitiumContent {
  __typename: string;
  id: string;
  url: string;
  name: string;
  metadata: Metadata;
  fields: {
    __typename: string;
    _name: string;
  };
  blocks: {
    main: (SectionBlock | ContentBlock)[];
  };
}

export interface NavigationContainerBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    layoutDesktop?: TextOptionDefinition[];
    layoutTablet?: TextOptionDefinition[];
    layoutMobile?: TextOptionDefinition[];
  };
  children?: NavigationItem[];
}

export interface NavigationItem extends BaseBlock {
  fields: BaseBlock["fields"] & {
    navigationLink?: Link;
    bannerItem?: NavigationBannerItem[];
  };
  children?: NavigationItem[];
}

export interface NavigationLinksBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    collapsibleMobile?: boolean;
    headerLabel?: string;
    navigationLinksHeader?: Link;
    navigationLinks?: {
      navigationLink?: Link;
    }[];
  };
}

export interface ImageItemBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    contentImage?: ContentImage[];
    navigationLink?: Link;
  };
}

export interface ImageListBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    contentSpaceX?: IntOptionDefinition[];
    contentSpaceXDesktop?: IntOptionDefinition[];
    contentSpaceY?: IntOptionDefinition[];
    contentSpaceYDesktop?: IntOptionDefinition[];
    numberOfItemOnDesktop?: number;
    numberOfItemOnMobile?: number;
  };
  children?: ImageItemBlock[];
}

export interface ButtonBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    button?: Button[];
  };
}

export interface RichContentBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    richText?: string;
    backgroundColorHex?: string;
  };
}

export interface TopHeaderBlock extends BaseBlock {
  fields: BaseBlock["fields"] & {
    position?: TextOptionDefinition[];
    richText?: string;
    backgroundColorHex?: string;
    links?: {
      navigationLink?: Link;
    }[];
  };
}

export interface TopHeaderContainerBlock extends BaseBlock {
  children: RowBlock[];
}

export type ContentBlock =
  | BannerItemBlock
  | ImageTextItemBlock
  | SliderBlock
  | SubscriberBlock
  | TopHeaderBlock
  | NavigationContainerBlock
  | NavigationLinksBlock
  | ImageListBlock
  | ImageItemBlock
  | ButtonBlock
  | RichContentBlock
  | FooterColumnBlock
  | ColumnBlock
  | RowBlock;

export interface FooterContainerBlock extends BaseBlock {
  __typename: "FooterContainerBlock";
  children: RowBlock[];
}

export interface FooterColumnBlock extends BaseBlock {
  __typename: "FooterColumnBlock";
  fields: BaseBlock["fields"] & {
    _name?: string;
    title?: string;
    links?: any[];
  };
  children: ContentBlock[];
}

export interface RowBlockFieldContainer {
  __typename: "RowBlockFieldContainer";
  _name: string | null;
  rowWidthOptionDesktop: TextOptionDefinition[] | null;
  rowWidthOptionMobile: TextOptionDefinition[] | null;
  numberOfItemOnDesktop: number | null;
  numberOfItemOnMobile: number | null;
  contentSpace: IntOptionDefinition[] | null;
  commonStyles: CommonStyles[] | null;
  backgroundColorHex: string | null;
  backgroundColorOpacity: number | null;
  blockHeight: string | null;
}

export interface ImageTextItemBlockFieldContainer {
  __typename: "ImageTextItemBlockFieldContainer";
  _name: string | null;
  commonStyles: CommonStyles[] | null;
  richText: string | null;
  contentImage: ContentImage[] | null;
  contentImagePosition: TextOptionDefinition[] | null;
  button: Button[] | null;
}

export interface NavigationBannerItem {
  __typename: "NavigationBannerItem";
  richText: string;
  imageAltText: string;
  isFullWidthImage: boolean;
  cssClass?: string | null;
  backgroundLink?: Link | null;
  blockHeight?: string | null;
  backgroundColorOverlay?: string | null;
  backgroundColorOverlayOpacity?: string | null;
  loading?: TextOptionDefinition[];
  buttonLink?: Link | null;
  buttonType?: TextOptionDefinition[];
  image: Image;
  imageMobile: Image;
}

export type FooterContainer = FooterContainerBlock[];

export type TopHeaderContainer = TopHeaderContainerBlock[];

export type NavigationContainer = NavigationContainerBlock[];
