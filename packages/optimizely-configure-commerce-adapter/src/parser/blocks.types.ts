import { CommonLink } from "./common.types";

// Base interface for all widgets
export interface BaseWidget {
  __typename: string;
  Id: string;
  ParentId: string;
  Zone?: string;
  Variant: string;
  Type: string;
  Children: WidgetBlock[];
}

// Basic Row widget (section)
export interface RowWidget extends BaseWidget {
  Columns: number[];
  CssClass: string | null;
  CustomCSS: string;
  FullWidthColor: string;
  FullWidthImage: string;
  FullWidthImageFocalPoint: string;
  FullWidthStylingType: string;
  Gap: number;
  IsFullWidth: boolean;
  IsLayout: boolean;
  Reflow: boolean;
}

// Basic Banner widget
export interface BannerWidget extends BaseWidget {
  Background: string | null;
  BackgroundColor: string | null;
  BackgroundImage: string | null;
  ButtonLabel: string | null;
  ButtonLink: CommonLink | null;
  CenterTextVertically: boolean;
  ContentPadding: number;
  CssClass: string | null;
  CustomCSS: string | null;
  CustomFontSizes: boolean;
  Description: string | null;
  DisableButton: boolean;
  FocalPoint: string | null;
  H1FontSize: string;
  H2FontSize: string;
  H3FontSize: string;
  H4FontSize: string;
  H5FontSize: string;
  H6FontSize: string;
  Heading: string | null;
  Image: string | null;
  ImageOverlay: string | null;
  ImageWidth: string | null;
  ImageHeight: string | null;
  IsLayout: boolean;
  MinimumHeight: string | null;
  NormalFontSize: string;
  PartialOverlay: boolean;
  PartialOverlayPositioning: string | null;
  ResponsiveFontSizes: boolean;
  Subheading: string | null;
  Loading: string | null;
}

// Basic Grid widget
export interface GridWidget extends BaseWidget {
  CssClass: string;
  CustomCSS: string;
  ExtraLargeColumnCount: number;
  ExtraLargeRowCount: number;
  ExtraSmallColumnCount: number;
  IsFullWidth: boolean;
  IsLayout: boolean;
  LargeColumnCount: number;
  MediumColumnCount: number;
  SmallColumnCount: number;
}

// Basic Rich Content widget
export interface RichContentWidget extends BaseWidget {
  BackgroundColor: string;
  Content: string | null;
  CssClass: string;
  CustomCSS: string;
  IsLayout: boolean;
  Padding: number;
}

// Slide Show widget
export interface SlideShowWidget extends BaseWidget {
  Type: string;
  Height: string;
  TextAlignment: string;
  ShowArrows: boolean;
  SlideIndicator: boolean;
  Autoplay: number;
  ResponsiveFontSizes: boolean;
  CustomFontSizes: boolean;
  CssClass: string;
  SlideType: string;
  SlideContainer: {
    SlideItems: SlideItem[];
  };
}

export interface SlideItem {
  ButtonLink: CommonLink;
  BackgroundLink: CommonLink;
  SlideTitle: string;
  Background: string;
  Image: string;
  ImageOverlay: string;
  PartialOverlay: boolean;
  PartialOverlayPositioning: string;
  ResponsiveImageBehavior: string;
  BackgroundColor: string;
  FocalPoint: string;
  Heading: string;
  Subheading: string;
  ButtonLabel: string;
  ButtonVariant: string;
  ContentPadding: number;
  CenterTextVertically: boolean;
}

// Shared Content widget
export interface SharedContentWidget extends BaseWidget {
  PageId: string;
  Type: string;
  CustomCSS?: string;
  IsLayout?: boolean;
}

// Common Rating and Review widget
export interface CommonRatingAndReviewWidget extends BaseWidget {
  CustomCSS: string | null;
  Destination: CommonLink | null;
  IsLayout: boolean;
  MaxNumberOfItems: number;
  Title: string;
  Type: string;
}

// Widget Container
export interface WidgetContainer {
  __typename: string;
  Widgets: WidgetBlock[];
}

// Union type for all widget blocks
export type WidgetBlock =
  | RowWidget
  | BannerWidget
  | GridWidget
  | RichContentWidget
  | SlideShowWidget
  | SharedContentWidget
  | CommonRatingAndReviewWidget;

// Page data structure
export interface PageData {
  Type: string;
  __typename: string;
  ExcludeFromNavigation: boolean;
  ExcludeFromSignInRequired: boolean;
  HideBreadcrumbs: boolean;
  HideFooter: boolean;
  HideHeader: boolean;
  HorizontalRule: string;
  Id: string;
  Languages: string[];
  LayoutPage: string;
  LayoutPageId: string | null;
  MetaDescription: string;
  MetaKeywords: string | null;
  Name: string;
  NodeId: string;
  OpenGraphImage: string | null;
  OpenGraphTitle: string;
  OpenGraphUrl: string | null;
  ParentId: string;
  SortOrder: number;
  StructuredPageData: string;
  Tags: string[];
  TemplateHash: string;
  Title: string;
  Url: string;
  UrlSegment: string | null;
  VariantName: string;
  WebsiteId: string;
  HideFromSearchEngines: boolean;
  BreadcrumbContainer?: {
    BreadCrumbs: Array<{
      PageUrl: string;
      PageTitle: string;
      PageId: string;
    }>;
  };
  WidgetContainer: WidgetContainer;
}
