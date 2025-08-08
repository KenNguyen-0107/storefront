import { INavigation } from "@/packages/niteco-ui/components/types/cms/INavigation";
import { ITopHeader } from "@/packages/niteco-ui/components/types/cms/ITopHeader";
import { IFooter } from "@/packages/niteco-ui/components/types/cms/IFooter";
import { ISetting } from "@/packages/niteco-ui/components/types/cms/ISetting";

export interface StyleProps {
  className?: string;
  inlineStyles?: {
    textAlign?: string;
    verticalAlign?: string;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    textAlignDesktop?: string;
    verticalAlignDesktop?: string;
    paddingTopDesktop?: number;
    paddingRightDesktop?: number;
    paddingBottomDesktop?: number;
    paddingLeftDesktop?: number;
    marginTopDesktop?: number;
    marginRightDesktop?: number;
    marginBottomDesktop?: number;
    marginLeftDesktop?: number;
    [x: string]: any;
  };
}

export interface BlockData {
  type?: string;
  style?: StyleProps;
  hidden?: boolean;
  children?: BlockData[];
  [x: string]: any;
}

export interface ColumnData {
  type?: string;
  width?: number | string;
  style?: StyleProps;
  blocks?: BlockData[];
  numberOfItemOnDesktop?: number;
  numberOfItemOnMobile?: number;
  widthOptionDesktop?: string;
  widthOptionMobile?: string;
  height?: string;
  contentSpaceX?: number;
  contentSpaceY?: number;
  contentSpaceXDesktop?: number;
  contentSpaceYDesktop?: number;
  [x: string]: any;
}

export interface RowData {
  style?: StyleProps;
  columns?: ColumnData[];
  numberOfItemOnDesktop?: number;
  numberOfItemOnMobile?: number;
  rowWidthOptionDesktop?: string;
  rowWidthOptionMobile?: string;
  backgroundColorHex?: string;
  backgroundColorOpacity?: number;
  contentSpaceX?: number;
  contentSpaceY?: number;
  contentSpaceXDesktop?: number;
  contentSpaceYDesktop?: number;
  height?: string;
  [x: string]: any;
}

export interface SectionData {
  rows?: RowData[];
  backgroundColorHex?: string;
  paddingX?: number;
  paddingY?: number;
  paddingXDesktop?: number;
  paddingYDesktop?: number;
}

export interface RenderPayload {
  pageId: string;
  title: string;
  meta?: {
    description?: string;
    keywords?: string[];
    ogImage?: string;
    [key: string]: unknown;
  };
  sections: SectionData[];
  extra?: Record<string, unknown>;
}

export interface RenderHeaderPayload {
  topHeader: ITopHeader;
  mainNavigation: INavigation;
}

export interface RenderFooterPayload {
  footer: IFooter;
}

export interface RenderSettingPayload {
  setting: ISetting;
}
