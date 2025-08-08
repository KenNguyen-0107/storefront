export interface TextOptionDefinition {
  __typename: string;
  value: string;
  name: string;
}

export interface IntOptionDefinition {
  __typename: string;
  value: number;
  name: string;
}

export interface Size {
  __typename: string;
  height: number;
  width: number;
}

export interface Image {
  __typename: string;
  item: {
    url: string;
    dimension: Size;
    alt: string;
    filename: string;
  };
}

export interface FileItem {
  __typename: string;
  url: string;
  filename: string;
  alt: string;
}

export interface Video {
  __typename: string;
  item: FileItem;
}

export interface Link {
  __typename: string;
  url: string;
  text: string;
}

export interface Button {
  __typename: string;
  buttonLink: Link;
  buttonType: TextOptionDefinition[];
  cssClass?: string;
}

export interface CommonStyles {
  __typename: string;
  textAlign?: TextOptionDefinition[];
  verticalAlign?: TextOptionDefinition[];
  paddingTop?: IntOptionDefinition[];
  paddingRight?: IntOptionDefinition[];
  paddingBottom?: IntOptionDefinition[];
  paddingLeft?: IntOptionDefinition[];
  marginTop?: IntOptionDefinition[];
  marginRight?: IntOptionDefinition[];
  marginBottom?: IntOptionDefinition[];
  marginLeft?: IntOptionDefinition[];
  textAlignDesktop?: TextOptionDefinition[];
  verticalAlignDesktop?: TextOptionDefinition[];
  paddingTopDesktop?: IntOptionDefinition[];
  paddingRightDesktop?: IntOptionDefinition[];
  paddingBottomDesktop?: IntOptionDefinition[];
  paddingLeftDesktop?: IntOptionDefinition[];
  marginTopDesktop?: IntOptionDefinition[];
  marginRightDesktop?: IntOptionDefinition[];
  marginBottomDesktop?: IntOptionDefinition[];
  marginLeftDesktop?: IntOptionDefinition[];
  cssClass?: string;
}

export interface ContentImage {
  __typename: string;
  image: Image;
  imageMobile: Image;
  imageAltText: string;
  imageHeight: string;
  imageWidth: string;
  imageMobileHeight: string;
  imageMobileWidth: string;
  isFullWidthImage: boolean;
  cssClass?: string;
}

export interface Metadata {
  __typename: string;
  links: MetadataLink[];
  tags: MetadataTag[];
  title: string;
  language: string;
}

export interface MetadataLink {
  __typename: string;
  href: string;
  attributes: TextOptionDefinition[][];
}

export interface MetadataTag {
  __typename: string;
  name: string;
  content: string;
}
