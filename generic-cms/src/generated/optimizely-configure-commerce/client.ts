import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const B2BHomePageDataFragmentDoc = gql`
    fragment B2BHomePageData on stagingB2BHomePage {
  Type
  __typename
  ExcludeFromNavigation
  ExcludeFromSignInRequired
  HideBreadcrumbs
  HideFooter
  HideHeader
  HorizontalRule
  Id
  Languages
  LayoutPage
  LayoutPageId
  MetaDescription
  MetaKeywords
  Name
  NodeId
  OpenGraphImage
  OpenGraphTitle
  OpenGraphUrl
  ParentId
  SortOrder
  StructuredPageData
  Tags
  TemplateHash
  Title
  Type
  Url
  UrlSegment
  VariantName
  WebsiteId
}
    `;
export const B2BPageDataFragmentDoc = gql`
    fragment B2BPageData on stagingB2BPage {
  Type
  __typename
  ExcludeFromNavigation
  ExcludeFromSignInRequired
  HideBreadcrumbs
  HideFooter
  HideHeader
  HorizontalRule
  Id
  Languages
  LayoutPage
  LayoutPageId
  MetaDescription
  MetaKeywords
  Name
  NodeId
  OpenGraphImage
  OpenGraphTitle
  OpenGraphUrl
  ParentId
  SortOrder
  StructuredPageData
  Tags
  TemplateHash
  Title
  Type
  Url
  UrlSegment
  VariantName
  WebsiteId
}
    `;
export const BasicBannerDataFragmentDoc = gql`
    fragment BasicBannerData on stagingBasicBanner {
  Type
  __typename
  Background
  BackgroundColor
  BackgroundImage
  ButtonLabel
  ButtonLink {
    Type
    Url
    Value
  }
  CenterTextVertically
  ContentPadding
  CssClass
  CustomCSS
  CustomFontSizes
  Description
  DisableButton
  FocalPoint
  H1FontSize
  H2FontSize
  H3FontSize
  H4FontSize
  H5FontSize
  H6FontSize
  Heading
  Id
  Image
  ImageOverlay
  ImageWidth
  ImageHeight
  IsLayout
  MinimumHeight
  NormalFontSize
  ParentId
  PartialOverlay
  PartialOverlayPositioning
  ResponsiveFontSizes
  Subheading
  Variant
  Zone
  Loading
}
    `;
export const BasicButtonDataFragmentDoc = gql`
    fragment BasicButtonData on stagingBasicButton {
  Type
  __typename
  Alignment
  CssClass
  CustomCSS
  Id
  IsLayout
  Label
  Link {
    Type
    Value
    Url
  }
  ParentId
  Variant
  Zone
}
    `;
export const BasicGridDataFragmentDoc = gql`
    fragment BasicGridData on stagingBasicGrid {
  Type
  __typename
  CssClass
  CustomCSS
  ExtraLargeColumnCount
  ExtraLargeRowCount
  ExtraSmallColumnCount
  Id
  IsFullWidth
  IsLayout
  LargeColumnCount
  MediumColumnCount
  ParentId
  SmallColumnCount
  Zone
}
    `;
export const BasicImageDataFragmentDoc = gql`
    fragment BasicImageData on stagingBasicImage {
  Type
  __typename
  AltText
  CssClass
  CustomCSS
  Id
  ImageUrl
  IsLayout
  ParentId
  Zone
  ImageLink {
    Type
    Value
    Url
  }
  ImageWidth
  ImageHeight
}
    `;
export const BasicLinkDataFragmentDoc = gql`
    fragment BasicLinkData on stagingBasicLink {
  Type
  __typename
  CustomCSS
  Destination {
    Type
    Value
  }
  Id
  IsLayout
  OverrideTitle
  ParentId
  Zone
}
    `;
export const BasicLogoDataFragmentDoc = gql`
    fragment BasicLogoData on stagingBasicLogo {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  IsMobileSpecific
  LogoImage
  MobileSpecificImage
  ParentId
  Zone
}
    `;
export const BasicPageTitleDataFragmentDoc = gql`
    fragment BasicPageTitleData on stagingBasicPageTitle {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const BasicQuestionAnswersDataFragmentDoc = gql`
    fragment BasicQuestionAnswersData on stagingBasicQuestionAnswers {
  Type
  __typename
  CustomCSS
  Description
  Id
  IsLayout
  ParentId
  QuestionAnswersContainer {
    QuestionAnswers {
      Answer
      Question
    }
  }
  Title
  Type
  Zone
}
    `;
export const BasicRichContentDataFragmentDoc = gql`
    fragment BasicRichContentData on stagingBasicRichContent {
  Type
  __typename
  BackgroundColor
  Content
  CssClass
  CustomCSS
  Id
  IsLayout
  Padding
  ParentId
  Zone
}
    `;
export const BasicRowDataFragmentDoc = gql`
    fragment BasicRowData on stagingBasicRow {
  Type
  __typename
  Columns
  CssClass
  CustomCSS
  FullWidthColor
  FullWidthImage
  FullWidthImageFocalPoint
  FullWidthStylingType
  Gap
  Id
  IsFullWidth
  IsLayout
  ParentId
  Reflow
  Variant
  Zone
}
    `;
export const BasicRowsDataFragmentDoc = gql`
    fragment BasicRowsData on stagingBasicRows {
  Type
  __typename
  CssClass
  CustomCSS
  Gap
  Id
  IsFullWidth
  IsLayout
  ParentId
  RowCount
  Zone
}
    `;
export const BasicSocialLinksDataFragmentDoc = gql`
    fragment BasicSocialLinksData on stagingBasicSocialLinks {
  Type
  __typename
  Alignment
  BackgroundColor
  CustomCSS
  Direction
  IconColor
  IconSize
  Id
  IsLayout
  Links {
    LinkItems {
      Destination {
        Type
        Value
      }
      Icon
      OpenInNewWindow
      OverriddenTitle
      Title
    }
  }
  LinksPerRow
  ParentId
  VisibilityState
  Zone
}
    `;
export const CategoryListDataFragmentDoc = gql`
    fragment CategoryListData on stagingCategoryList {
  Type
  __typename
  Categories {
    Items {
      HtmlContent
      Id
      ImageAltText
      IsDynamic
      IsFeatured
      LargeImagePath
      MetaDescription
      MetaKeywords
      MobileBannerImageUrl
      MobilePrimaryText
      MobileSecondaryText
      MobileTextColor
      MobileTextJustification
      Name
      Path
      ShortDescription
      SmallImagePath
      SortOrder
      UrlSegment
    }
  }
  CustomCSS
  Id
  IsLayout
  ParentId
  ShowImages
  ShowOnlyTopLevelCategories
  Zone
}
    `;
export const CommonCartLinkDataFragmentDoc = gql`
    fragment CommonCartLinkData on stagingCommonCartLink {
  Type
  __typename
  CustomCSS
  Icon
  Id
  IsLayout
  ParentId
  VisibilityState
  Zone
}
    `;
export const CommonHeaderSignInDataFragmentDoc = gql`
    fragment CommonHeaderSignInData on stagingCommonHeaderSignIn {
  Type
  __typename
  CustomCSS
  Icon
  Id
  IncludeAccountMenu
  IsLayout
  ParentId
  ShowInventoryToggle
  ShowPricingToggle
  VisibilityState
  Zone
}
    `;
export const CommonPlaceholderDataFragmentDoc = gql`
    fragment CommonPlaceholderData on stagingCommonPlaceholder {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Variant
  Zone
}
    `;
export const CommonProductCarouselDataFragmentDoc = gql`
    fragment CommonProductCarouselData on stagingCommonProductCarousel {
  Type
  __typename
  CarouselType
  CustomCSS
  DisplayProductsFrom
  Id
  IsLayout
  MaxNumberOfColumns
  MaximumNumberOfImageBadges
  MaximumNumberOfTextBadges
  NumberOfProductsToDisplay
  ParentId
  RelatedProductType
  SeedWithManuallyAssigned
  SelectedCategoryIds
  ShowAddToCart
  ShowAddToList
  ShowBrandName
  ShowImage
  ShowImageBadges
  ShowPartNumbers
  ShowPrice
  ShowTextBadges
  ShowTitle
  Title
  TitleAlignment
  Type
  WidgetPosition
  Zone
}
    `;
export const CommonRatingAndReviewDataFragmentDoc = gql`
    fragment CommonRatingAndReviewData on stagingCommonRatingAndReview {
  Type
  __typename
  CustomCSS
  Destination {
    Type
    Value
    Url
  }
  Id
  IsLayout
  MaxNumberOfItems
  ParentId
  Title
  Type
  Zone
}
    `;
export const CommonSignInDataFragmentDoc = gql`
    fragment CommonSignInData on stagingCommonSignIn {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const CustomVideoDataFragmentDoc = gql`
    fragment CustomVideoData on stagingCustomVideo {
  Type
  CssClass
  Title
  Type
  VideoUrl
  CustomCSS
  Title
  BackgroundImageUrl
  Description
  IsLayout
  autoplayAsBool: Autoplay
  PlayOnPopup
  ParentId
  Id
  __typename
  IsLayout
  Zone
  Loading
}
    `;
export const FooterContainerDataFragmentDoc = gql`
    fragment FooterContainerData on stagingFooterContainer {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const HeaderMainNavigationDataFragmentDoc = gql`
    fragment HeaderMainNavigationData on stagingHeaderMainNavigation {
  Type
  CustomCSS
  __typename
  Id
  IsLayout
  Links {
    LinkItems {
      SubLinksContainer {
        SubLinks {
          Id
          Level
          Title
          Url
          Type
        }
      }
      Title
      LinkType
      OverrideTitle
      OverriddenTitle
      Destination {
        Type
        Url
        Value
      }
    }
  }
  OpenParentPages
  ParentId
  ShowQuickOrder
  Zone
  _id
  _modified
  _score
}
    `;
export const HeaderSearchInputDataFragmentDoc = gql`
    fragment HeaderSearchInputData on stagingHeaderSearchInput {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const LinkListDataFragmentDoc = gql`
    fragment LinkListData on stagingLinkList {
  Type
  __typename
  Alignment
  CustomCSS
  Direction
  Id
  IsLayout
  Links {
    LinkItems {
      Destination {
        Type
        Value
        Url
      }
      Icon
      OpenInNewWindow
      OverriddenTitle
      OverrideTitle
      Title
    }
  }
  ParentId
  Title
  TitleLink {
    Type
    Value
  }
  Zone
}
    `;
export const ProductDetailsViewDataFragmentDoc = gql`
    fragment ProductDetailsViewData on stagingProductDetailsView {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const ProductListCardListDataFragmentDoc = gql`
    fragment ProductListCardListData on stagingProductListCardList {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const ProductListColumnsDataFragmentDoc = gql`
    fragment ProductListColumnsData on stagingProductListColumns {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const ProductListPageDataFragmentDoc = gql`
    fragment ProductListPageData on stagingProductListPage {
  Type
  __typename
  CategoryId
  ExcludeFromNavigation
  ExcludeFromSignInRequired
  HideBreadcrumbs
  HideFooter
  HideHeader
  HorizontalRule
  Id
  Languages
  LayoutPage
  LayoutPageId
  MetaDescription
  MetaKeywords
  Name
  NodeId
  OpenGraphImage
  OpenGraphTitle
  OpenGraphUrl
  ParentId
  SortOrder
  StructuredPageData
  Tags
  TemplateHash
  Title
  Type
  Url
  UrlSegment
  VariantName
  WebsiteId
}
    `;
export const SharedContentDataFragmentDoc = gql`
    fragment SharedContentData on stagingSharedContent {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  PageId
  ParentId
  Type
  Zone
}
    `;
export const ButtonLinkFragmentDoc = gql`
    fragment ButtonLink on stagingButtonLink {
  __typename
  Type
  Value
  Url
}
    `;
export const SlideItemFragmentDoc = gql`
    fragment SlideItem on stagingSlideItem {
  ButtonLink {
    ...ButtonLink
  }
  BackgroundLink {
    ...ButtonLink
  }
  SlideTitle
  Background
  Background
  Image
  ImageOverlay
  PartialOverlay
  PartialOverlayPositioning
  ResponsiveImageBehavior
  BackgroundColor
  FocalPoint
  Heading
  Subheading
  ButtonLabel
  ButtonVariant
  ContentPadding
  CenterTextVertically
}
    `;
export const SlideShowDataFragmentDoc = gql`
    fragment SlideShowData on stagingSlideShow {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
  Height
  TextAlignment
  ShowArrows
  SlideIndicator
  Autoplay
  ResponsiveFontSizes
  CustomFontSizes
  CssClass
  SlideType
  SlideContainer {
    SlideItems {
      ...SlideItem
    }
  }
}
    `;
export const SubscribeDataFragmentDoc = gql`
    fragment SubscribeData on stagingSubscribe {
  Type
  __typename
  CustomCSS
  Id
  IsLayout
  ParentId
  Type
  Zone
}
    `;
export const GetContentByPathDocument = gql`
    query GetContentByPath($path: String!, $siteId: String!) {
  stagingB2BPage(where: {Url: {eq: $path}, WebsiteId: {eq: $siteId}}) {
    items {
      Type
      Locales {
        Items {
          Code
          Segment
          IsDefault
        }
      }
      Language {
        _deleted
        _modified
        _score
        _id
        Id
        LanguageCode
        CultureCode
        Description
      }
      ...B2BHomePageData
      ...B2BPageData
      ...ProductListPageData
      HideFromSearchEngines
      BreadcrumbContainer {
        BreadCrumbs {
          PageUrl
          PageTitle
          PageId
        }
      }
      WidgetContainer {
        __typename
        Widgets {
          ...BasicBannerData
          ...BasicButtonData
          ...BasicGridData
          ...BasicImageData
          ...BasicLinkData
          ...BasicLogoData
          ...BasicPageTitleData
          ...BasicQuestionAnswersData
          ...BasicRichContentData
          ...BasicRowData
          ...BasicRowsData
          ...BasicSocialLinksData
          ...CategoryListData
          ...CommonCartLinkData
          ...CommonHeaderSignInData
          ...CommonPlaceholderData
          ...CommonProductCarouselData
          ...CommonRatingAndReviewData
          ...CommonSignInData
          ...FooterContainerData
          ...HeaderMainNavigationData
          ...HeaderSearchInputData
          ...LinkListData
          ...ProductDetailsViewData
          ...ProductListCardListData
          ...ProductListColumnsData
          ...SharedContentData
          ...SlideShowData
          ...SubscribeData
          ...CustomVideoData
        }
      }
    }
  }
}
    ${B2BHomePageDataFragmentDoc}
${B2BPageDataFragmentDoc}
${ProductListPageDataFragmentDoc}
${BasicBannerDataFragmentDoc}
${BasicButtonDataFragmentDoc}
${BasicGridDataFragmentDoc}
${BasicImageDataFragmentDoc}
${BasicLinkDataFragmentDoc}
${BasicLogoDataFragmentDoc}
${BasicPageTitleDataFragmentDoc}
${BasicQuestionAnswersDataFragmentDoc}
${BasicRichContentDataFragmentDoc}
${BasicRowDataFragmentDoc}
${BasicRowsDataFragmentDoc}
${BasicSocialLinksDataFragmentDoc}
${CategoryListDataFragmentDoc}
${CommonCartLinkDataFragmentDoc}
${CommonHeaderSignInDataFragmentDoc}
${CommonPlaceholderDataFragmentDoc}
${CommonProductCarouselDataFragmentDoc}
${CommonRatingAndReviewDataFragmentDoc}
${CommonSignInDataFragmentDoc}
${FooterContainerDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${HeaderSearchInputDataFragmentDoc}
${LinkListDataFragmentDoc}
${ProductDetailsViewDataFragmentDoc}
${ProductListCardListDataFragmentDoc}
${ProductListColumnsDataFragmentDoc}
${SharedContentDataFragmentDoc}
${SlideShowDataFragmentDoc}
${SlideItemFragmentDoc}
${ButtonLinkFragmentDoc}
${SubscribeDataFragmentDoc}
${CustomVideoDataFragmentDoc}`;
export const GetContentByTypeDocument = gql`
    query GetContentByType($type: String!, $siteId: String!, $languageCode: String!) {
  B2BPage: stagingB2BPage(
    where: {Type: {eq: $type}, WebsiteId: {eq: $siteId}, Language: {LanguageCode: {eq: $languageCode}}}
  ) {
    items {
      WidgetContainer {
        __typename
        Widgets {
          ...BasicBannerData
          ...BasicButtonData
          ...BasicGridData
          ...BasicImageData
          ...BasicLinkData
          ...BasicLogoData
          ...BasicPageTitleData
          ...BasicQuestionAnswersData
          ...BasicRichContentData
          ...BasicRowData
          ...BasicRowsData
          ...BasicSocialLinksData
          ...CategoryListData
          ...CommonCartLinkData
          ...CommonHeaderSignInData
          ...CommonPlaceholderData
          ...CommonProductCarouselData
          ...CommonRatingAndReviewData
          ...CommonSignInData
          ...FooterContainerData
          ...HeaderMainNavigationData
          ...HeaderSearchInputData
          ...LinkListData
          ...ProductDetailsViewData
          ...ProductListCardListData
          ...ProductListColumnsData
          ...SharedContentData
          ...SlideShowData
          ...SubscribeData
          ...CustomVideoData
        }
      }
    }
  }
}
    ${BasicBannerDataFragmentDoc}
${BasicButtonDataFragmentDoc}
${BasicGridDataFragmentDoc}
${BasicImageDataFragmentDoc}
${BasicLinkDataFragmentDoc}
${BasicLogoDataFragmentDoc}
${BasicPageTitleDataFragmentDoc}
${BasicQuestionAnswersDataFragmentDoc}
${BasicRichContentDataFragmentDoc}
${BasicRowDataFragmentDoc}
${BasicRowsDataFragmentDoc}
${BasicSocialLinksDataFragmentDoc}
${CategoryListDataFragmentDoc}
${CommonCartLinkDataFragmentDoc}
${CommonHeaderSignInDataFragmentDoc}
${CommonPlaceholderDataFragmentDoc}
${CommonProductCarouselDataFragmentDoc}
${CommonRatingAndReviewDataFragmentDoc}
${CommonSignInDataFragmentDoc}
${FooterContainerDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${HeaderSearchInputDataFragmentDoc}
${LinkListDataFragmentDoc}
${ProductDetailsViewDataFragmentDoc}
${ProductListCardListDataFragmentDoc}
${ProductListColumnsDataFragmentDoc}
${SharedContentDataFragmentDoc}
${SlideShowDataFragmentDoc}
${SlideItemFragmentDoc}
${ButtonLinkFragmentDoc}
${SubscribeDataFragmentDoc}
${CustomVideoDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetContentByPath(variables: Schema.GetContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetContentByPathQuery>({ document: GetContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetContentByPath', 'query', variables);
    },
    GetContentByType(variables: Schema.GetContentByTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetContentByTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetContentByTypeQuery>({ document: GetContentByTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetContentByType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;