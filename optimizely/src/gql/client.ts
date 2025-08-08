import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const BannerItemElementDataFragmentDoc = gql`
    fragment BannerItemElementData on BannerItemElement {
  HeadingText
  SubHeading
  RichText {
    json
    html
  }
  BackgroundLink {
    ...LinkData
  }
  ImageDesktop {
    ...ReferenceData
  }
  ImageMobile {
    ...ReferenceData
  }
  OverlayColor
  OverlayOpacity
  Alt
  IsFullWidthImage
  Loading
  ButtonText
  ButtonLink {
    ...LinkData
  }
  CssClass
}
    `;
export const ButtonElementDataFragmentDoc = gql`
    fragment ButtonElementData on ButtonElement {
  ButtonText
  ButtonLink {
    ...LinkData
  }
  className
}
    `;
export const CompanyDataFragmentDoc = gql`
    fragment CompanyData on Company {
  Name
  Logo {
    ...ReferenceData
  }
}
    `;
export const ContainerElementDataFragmentDoc = gql`
    fragment ContainerElementData on ContainerElement {
  Items {
    ...ReferenceData
  }
  TypeOfItems
}
    `;
export const ContentTextElementDataFragmentDoc = gql`
    fragment ContentTextElementData on ContentTextElement {
  HeadingText
  Paragraph {
    json
    html
  }
}
    `;
export const DictionaryItemPropertyDataFragmentDoc = gql`
    fragment DictionaryItemPropertyData on DictionaryItemProperty {
  DictionaryItemKey
  DictionaryItemValue
}
    `;
export const DictionaryDataFragmentDoc = gql`
    fragment DictionaryData on Dictionary {
  DictionaryItems {
    ...DictionaryItemPropertyData
  }
  DictionaryKey
}
    `;
export const DictionaryItemDataFragmentDoc = gql`
    fragment DictionaryItemData on DictionaryItem {
  DictionaryItemKey
  DictionaryItemValue
}
    `;
export const ExpandableTextDataFragmentDoc = gql`
    fragment ExpandableTextData on ExpandableText {
  ContentText {
    json
    html
  }
  Threshold
  ShowLessText
  ReadMoreText
  MobileThreshold
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  HeadingText
}
    `;
export const FAQsSectionDataFragmentDoc = gql`
    fragment FAQsSectionData on FAQsSection {
  HeadingText
  allowMultiple
  ListItem {
    ...ContentTextElementData
    ...HeadingElementData
  }
}
    `;
export const ImageBackgroundDataFragmentDoc = gql`
    fragment ImageBackgroundData on ImageBackground {
  ImageDesktop {
    ...ReferenceData
  }
  ImageMobile {
    ...ReferenceData
  }
  Alt
  IsFullIWidthImage
  Loading
}
    `;
export const ImageItemElementDataFragmentDoc = gql`
    fragment ImageItemElementData on ImageItemElement {
  ImageDesktop {
    ...ReferenceData
  }
  ImageWidth
  ImageHeight
  ImageMobile {
    ...ReferenceData
  }
  ImageMobileWidth
  ImageMobileHeight
  Loading
  Alt
  IsFullWidthImage
  IsBackground
  OverlayOpacity
  OverlayColor
}
    `;
export const ImageTextItemElementDataFragmentDoc = gql`
    fragment ImageTextItemElementData on ImageTextItemElement {
  Heading {
    json
    html
  }
  RichText {
    json
    html
  }
  Image {
    ...ReferenceData
  }
  ImageMobile {
    ...ReferenceData
  }
  Alt
  IsFullWidthImage
  Loading
  BackgroundLink {
    ...LinkData
  }
  ButtonLink {
    ...LinkData
  }
  ButtonText
  ContentImagePosition
  CssClass
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const NavigationMenuBlockFieldsFragmentDoc = gql`
    fragment NavigationMenuBlockFields on NavigationMenuBlock {
  ...IElementData
  MenuNavigationHeading
  Link {
    ...LinkItemData
  }
  ThumbnailBanner {
    ...ReferenceData
  }
}
    `;
export const NavigationMenuBlockDataFragmentDoc = gql`
    fragment NavigationMenuBlockData on NavigationMenuBlock {
  ...NavigationMenuBlockFields
  SubMenuItem {
    ...NavigationMenuBlockFields
  }
}
    `;
export const LinkPropertyDataFragmentDoc = gql`
    fragment LinkPropertyData on Link {
  url {
    ...LinkData
  }
  title
  text
  target
}
    `;
export const SocialMediaBlockDataFragmentDoc = gql`
    fragment SocialMediaBlockData on SocialMediaBlock {
  URLMedia {
    ...LinkPropertyData
  }
  imageIcon {
    ImageDesktop {
      ...ReferenceData
    }
    ImageWidth
    ImageHeight
    ImageMobile {
      ...ReferenceData
    }
    ImageMobileWidth
    ImageMobileHeight
    Loading
    OverlayColor
    OverlayOpacity
    Alt
    IsFullWidthImage
    IsBackground
  }
}
    `;
export const SocialMediaBlocksDataFragmentDoc = gql`
    fragment SocialMediaBlocksData on SocialMediaBlocks {
  ListItems {
    ...SocialMediaBlockData
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentListItem
    ...NavigationMenuBlockData
    ...ButtonElementData
    ...SocialMediaBlockData
    ...ContentTextElementData
    ...SocialMediaBlocksData
  }
  ExpandableMobile
}
    `;
export const OfficeLocationDataFragmentDoc = gql`
    fragment OfficeLocationData on OfficeLocation {
  OfficeTitle
  OfficeAddressStreet1
  OfficeAddressStreet2
  OfficeAddressCity
  OfficeAddressPostalCode
  OfficeAddressCountry
  OfficePhone
  OfficeEmail
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  ThumbnailImage {
    ...ReferenceData
  }
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
    html
  }
}
    `;
export const ProductCardElementDataFragmentDoc = gql`
    fragment ProductCardElementData on ProductCardElement {
  ProductName
  Image {
    ...ReferenceData
  }
  ShortDescription {
    json
    html
  }
  InventoryStatus
  inventory
  CanBuy
}
    `;
export const ProductCardListElementDataFragmentDoc = gql`
    fragment ProductCardListElementData on ProductCardListElement {
  CategoryID
  EnableFilter
  EnableSorting
  DefaultView
  EnableProductCount
  VisibleElements {
    ...ReferenceData
  }
  PagingSize
}
    `;
export const TopHeaderContainerDataFragmentDoc = gql`
    fragment TopHeaderContainerData on TopHeaderContainer {
  description {
    json
    html
  }
  Links {
    ...LinkItemData
  }
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  Video {
    ...ReferenceData
  }
  Placeholder {
    ...ReferenceData
  }
  VideoUrl
  Autoplay
  PlayOnPopup
  Loading
}
    `;
export const WebFooterConfigrationBlockDataFragmentDoc = gql`
    fragment WebFooterConfigrationBlockData on WebFooterConfigrationBlock {
  SiteLogoFooter {
    ...ReferenceData
  }
  LogoAltText
  LocationDetails {
    json
    html
  }
  ButtonURLFooter {
    ...LinkItemData
  }
  FooterNavigation {
    ...IContentListItem
    ...MegaMenuGroupBlockData
  }
  SocialMediaArea {
    ...IContentListItem
    ...SocialMediaBlockData
  }
  CopyrightText {
    json
    html
  }
  TermsAndConditionsArea {
    ...LinkItemData
  }
  paymentmethodarea {
    ...IContentListItem
    ...ImageItemElementData
  }
}
    `;
export const WebHeaderConfigrationBlockDataFragmentDoc = gql`
    fragment WebHeaderConfigrationBlockData on WebHeaderConfigrationBlock {
  HeaderCTA {
    ...LinkData
  }
  TopNavigationHeader {
    ...MegaMenuGroupBlockData
    ...TopHeaderContainerData
  }
  MainNavigationHeader {
    ...MegaMenuGroupBlockData
  }
  SearchBarText
  SiteLogoAltText
  SiteLogoIcon {
    ...ReferenceData
  }
  SiteSearchEnable
}
    `;
export const PDPCarouselElementDataFragmentDoc = gql`
    fragment PDPCarouselElementData on PDPCarouselElement {
  Heading {
    json
    html
  }
  CarouselSource
  VisibleElements {
    ...ReferenceData
  }
  productsofView
  PagingSize
}
    `;
export const PDPSpecificationsElementDataFragmentDoc = gql`
    fragment PDPSpecificationsElementData on PDPSpecificationsElement {
  empty: _metadata {
    key
  }
}
    `;
export const ProductCarouselElementDataFragmentDoc = gql`
    fragment ProductCarouselElementData on ProductCarouselElement {
  Heading {
    json
    html
  }
  CarouselSource
  CategoryID
  VisibleElements {
    ...ReferenceData
  }
  PagingSize
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...BannerItemElementData
    ...ButtonElementData
    ...CompanyData
    ...ContainerElementData
    ...ContentTextElementData
    ...DictionaryData
    ...DictionaryItemData
    ...ExpandableTextData
    ...FAQsSectionData
    ...HeadingElementData
    ...ImageBackgroundData
    ...ImageItemElementData
    ...ImageTextItemElementData
    ...MegaMenuGroupBlockData
    ...NavigationMenuBlockData
    ...NavigationMenuBlockFields
    ...OfficeLocationData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...ProductCardElementData
    ...ProductCardListElementData
    ...SocialMediaBlockData
    ...SocialMediaBlocksData
    ...TopHeaderContainerData
    ...VideoElementData
    ...WebFooterConfigrationBlockData
    ...WebHeaderConfigrationBlockData
    ...PDPCarouselElementData
    ...PDPSpecificationsElementData
    ...ProductCarouselElementData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const ProductDetailExperienceDataFragmentDoc = gql`
    fragment ProductDetailExperienceData on ProductDetailExperience {
  SEOsettings {
    ...PageSeoSettingsData
  }
  ...ExperienceData
}
    `;
export const ProductListingEPageDataFragmentDoc = gql`
    fragment ProductListingEPageData on ProductListingEPage {
  ...ExperienceData
}
    `;
export const SectionDataFragmentDoc = gql`
    fragment SectionData on Section {
  empty: _metadata {
    key
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getFooterDocument = gql`
    query getFooter {
  footer: WebFooterConfigrationBlock(
    where: {_metadata: {status: {eq: "Published"}}}
  ) {
    item {
      ...WebFooterConfigrationBlockData
    }
  }
}
    ${WebFooterConfigrationBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}
${LinkItemDataFragmentDoc}
${IContentListItemFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${NavigationMenuBlockFieldsFragmentDoc}
${IElementDataFragmentDoc}
${ButtonElementDataFragmentDoc}
${SocialMediaBlockDataFragmentDoc}
${LinkPropertyDataFragmentDoc}
${ContentTextElementDataFragmentDoc}
${SocialMediaBlocksDataFragmentDoc}
${ImageItemElementDataFragmentDoc}`;
export const getBannerDocument = gql`
    query getBanner($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  banner: BannerItemElement(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    item {
      ...BannerItemElementData
    }
  }
}
    ${BannerItemElementDataFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getHeaderDocument = gql`
    query getHeader {
  header: WebHeaderConfigrationBlock(
    where: {_metadata: {status: {eq: "Published"}}}
  ) {
    item {
      ...WebHeaderConfigrationBlockData
    }
  }
}
    ${WebHeaderConfigrationBlockDataFragmentDoc}
${LinkDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${NavigationMenuBlockFieldsFragmentDoc}
${IElementDataFragmentDoc}
${LinkItemDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonElementDataFragmentDoc}
${SocialMediaBlockDataFragmentDoc}
${LinkPropertyDataFragmentDoc}
${ContentTextElementDataFragmentDoc}
${SocialMediaBlocksDataFragmentDoc}
${TopHeaderContainerDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...BannerItemElementData
      ...ButtonElementData
      ...CompanyData
      ...ContainerElementData
      ...ContentTextElementData
      ...DictionaryData
      ...DictionaryItemData
      ...ExpandableTextData
      ...FAQsSectionData
      ...HeadingElementData
      ...ImageBackgroundData
      ...ImageItemElementData
      ...ImageTextItemElementData
      ...MegaMenuGroupBlockData
      ...NavigationMenuBlockData
      ...NavigationMenuBlockFields
      ...OfficeLocationData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...ProductCardElementData
      ...ProductCardListElementData
      ...SocialMediaBlockData
      ...SocialMediaBlocksData
      ...TopHeaderContainerData
      ...VideoElementData
      ...WebFooterConfigrationBlockData
      ...WebHeaderConfigrationBlockData
      ...PDPCarouselElementData
      ...PDPSpecificationsElementData
      ...ProductCarouselElementData
      ...BlankExperienceData
      ...ProductDetailExperienceData
      ...ProductListingEPageData
      ...SectionData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${BannerItemElementDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonElementDataFragmentDoc}
${CompanyDataFragmentDoc}
${ContainerElementDataFragmentDoc}
${ContentTextElementDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemPropertyDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${ExpandableTextDataFragmentDoc}
${FAQsSectionDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageBackgroundDataFragmentDoc}
${ImageItemElementDataFragmentDoc}
${ImageTextItemElementDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${NavigationMenuBlockFieldsFragmentDoc}
${IElementDataFragmentDoc}
${LinkItemDataFragmentDoc}
${SocialMediaBlockDataFragmentDoc}
${LinkPropertyDataFragmentDoc}
${SocialMediaBlocksDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductCardElementDataFragmentDoc}
${ProductCardListElementDataFragmentDoc}
${TopHeaderContainerDataFragmentDoc}
${VideoElementDataFragmentDoc}
${WebFooterConfigrationBlockDataFragmentDoc}
${WebHeaderConfigrationBlockDataFragmentDoc}
${PDPCarouselElementDataFragmentDoc}
${PDPSpecificationsElementDataFragmentDoc}
${ProductCarouselElementDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${ProductDetailExperienceDataFragmentDoc}
${ProductListingEPageDataFragmentDoc}
${SectionDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...ProductDetailExperienceData
      ...ProductListingEPageData
      ...SectionData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${BannerItemElementDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonElementDataFragmentDoc}
${CompanyDataFragmentDoc}
${ContainerElementDataFragmentDoc}
${ContentTextElementDataFragmentDoc}
${DictionaryDataFragmentDoc}
${DictionaryItemPropertyDataFragmentDoc}
${DictionaryItemDataFragmentDoc}
${ExpandableTextDataFragmentDoc}
${FAQsSectionDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageBackgroundDataFragmentDoc}
${ImageItemElementDataFragmentDoc}
${ImageTextItemElementDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${NavigationMenuBlockDataFragmentDoc}
${NavigationMenuBlockFieldsFragmentDoc}
${LinkItemDataFragmentDoc}
${SocialMediaBlockDataFragmentDoc}
${LinkPropertyDataFragmentDoc}
${SocialMediaBlocksDataFragmentDoc}
${OfficeLocationDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${ProductCardElementDataFragmentDoc}
${ProductCardListElementDataFragmentDoc}
${TopHeaderContainerDataFragmentDoc}
${VideoElementDataFragmentDoc}
${WebFooterConfigrationBlockDataFragmentDoc}
${WebHeaderConfigrationBlockDataFragmentDoc}
${PDPCarouselElementDataFragmentDoc}
${PDPSpecificationsElementDataFragmentDoc}
${ProductCarouselElementDataFragmentDoc}
${ProductDetailExperienceDataFragmentDoc}
${ProductListingEPageDataFragmentDoc}
${SectionDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getFooter(variables?: Schema.getFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterQuery>({ document: getFooterDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getFooter', 'query', variables);
    },
    getBanner(variables: Schema.getBannerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBannerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBannerQuery>({ document: getBannerDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBanner', 'query', variables);
    },
    getHeader(variables?: Schema.getHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderQuery>({ document: getHeaderDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getHeader', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;