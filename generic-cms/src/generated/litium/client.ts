import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const IntOptionFragmentDoc = gql`
    fragment IntOption on IntOptionDefinition {
  __typename
  value
  name
}
    `;
export const TextOptionFragmentDoc = gql`
    fragment TextOption on TextOptionDefinition {
  __typename
  value
  name
}
    `;
export const CommonStylesBlockFragmentDoc = gql`
    fragment CommonStylesBlock on CommonStylesBlockFieldDefinition {
  __typename
  cssClass
  textAlign {
    ...TextOption
  }
  verticalAlign {
    ...TextOption
  }
  paddingTop {
    ...IntOption
  }
  paddingRight {
    ...IntOption
  }
  paddingBottom {
    ...IntOption
  }
  paddingLeft {
    ...IntOption
  }
  marginTop {
    ...IntOption
  }
  marginRight {
    ...IntOption
  }
  marginBottom {
    ...IntOption
  }
  marginLeft {
    ...IntOption
  }
  textAlignDesktop {
    ...TextOption
  }
  verticalAlignDesktop {
    ...TextOption
  }
  paddingTopDesktop {
    ...IntOption
  }
  paddingLeftDesktop {
    ...IntOption
  }
  paddingBottomDesktop {
    ...IntOption
  }
  paddingRightDesktop {
    ...IntOption
  }
  marginTopDesktop {
    ...IntOption
  }
  marginLeftDesktop {
    ...IntOption
  }
  marginBottomDesktop {
    ...IntOption
  }
  marginRightDesktop {
    ...IntOption
  }
}
    `;
export const SizeFragmentDoc = gql`
    fragment Size on Size {
  __typename
  height
  width
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on PointerMediaImageItem {
  __typename
  item {
    url
    dimension {
      ...Size
    }
    alt
    filename
  }
}
    `;
export const ContentImageFragmentDoc = gql`
    fragment ContentImage on ContentImageBlockFieldDefinition {
  __typename
  image {
    ...Image
  }
  imageMobile {
    ...Image
  }
  imageAltText
  imageHeight
  imageWidth
  cssClass
  isFullWidthImage
  imageMobileHeight
  imageMobileWidth
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on LinkFieldDefinition {
  __typename
  url
  text
}
    `;
export const ButtonFragmentDoc = gql`
    fragment Button on ButtonBlockFieldDefinition {
  __typename
  cssClass
  buttonLink {
    ...Link
  }
  buttonType {
    ...TextOption
  }
}
    `;
export const BannerItemBlockFragmentDoc = gql`
    fragment BannerItemBlock on BannerItemBlock {
  __typename
  fields {
    __typename
    _name
    commonStyles {
      ...CommonStylesBlock
    }
    richText
    backgroundColorOverlay
    backgroundColorOverlayOpacity
    contentImage {
      ...ContentImage
    }
    backgroundLink {
      ...Link
    }
    button {
      ...Button
    }
    blockHeight
    loading {
      ...TextOption
    }
  }
}
    `;
export const ImageTextItemBlockFragmentDoc = gql`
    fragment ImageTextItemBlock on ImageTextItemBlock {
  __typename
  fields {
    __typename
    _name
    commonStyles {
      ...CommonStylesBlock
    }
    richText
    contentImage {
      ...ContentImage
    }
    contentImagePosition {
      ...TextOption
    }
    button {
      ...Button
    }
    backgroundColorHex
    backgroundLink {
      ...Link
    }
    loading {
      ...TextOption
    }
  }
}
    `;
export const SliderBlockFragmentDoc = gql`
    fragment SliderBlock on SliderBlock {
  __typename
  fields {
    __typename
    _name
    autoplay
    autoplayDelayMs
    infinite
    arrowsDesktop
    arrowsMobile
    arrowPosition {
      ...TextOption
    }
    paginationDotsDesktop
    paginationDotsMobile
    paginationDotsOverlapDesktop
    paginationDotsOverlapMobile
    slidesPerViewDesktop
    slidesPerViewMobile
    slidesPerGroupDesktop
    slidesPerGroupMobile
    speedMs
    centeredSlides
    direction {
      ...TextOption
    }
    commonStyles {
      ...CommonStylesBlock
    }
    contentSpaceX {
      ...IntOption
    }
    contentSpaceXDesktop {
      ...IntOption
    }
    contentSpaceY {
      ...IntOption
    }
    contentSpaceYDesktop {
      ...IntOption
    }
  }
  children {
    __typename
    ...ImageTextItemBlock
    ...BannerItemBlock
  }
}
    `;
export const SubscribeBlockFragmentDoc = gql`
    fragment SubscribeBlock on SubscribeBlock {
  __typename
  fields {
    __typename
    _name
    richText
    subscribeInputText
    placeholderText
    button {
      ...Button
    }
    commonStyles {
      ...CommonStylesBlock
    }
  }
}
    `;
export const TopHeaderFragmentDoc = gql`
    fragment TopHeader on TopHeaderBlock {
  __typename
  templateName
  fields {
    __typename
    _name
    position {
      ...TextOption
    }
    richText
    backgroundColorHex
    links {
      __typename
      navigationLink {
        ...Link
      }
    }
  }
}
    `;
export const NavigationLinksBlockFragmentDoc = gql`
    fragment NavigationLinksBlock on NavigationLinksBlock {
  fields {
    collapsibleMobile
    headerLabel
    navigationLinksHeader {
      ...Link
    }
    navigationLinks {
      navigationLink {
        ...Link
      }
    }
  }
}
    `;
export const ImageItemBlockFragmentDoc = gql`
    fragment ImageItemBlock on ImageItemBlock {
  fields {
    contentImage {
      ...ContentImage
    }
    navigationLink {
      ...Link
    }
  }
}
    `;
export const ImageListBlockFragmentDoc = gql`
    fragment ImageListBlock on ImageListBlock {
  fields {
    contentSpaceX {
      ...IntOption
    }
    contentSpaceXDesktop {
      ...IntOption
    }
    contentSpaceY {
      ...IntOption
    }
    contentSpaceYDesktop {
      ...IntOption
    }
    commonStyles {
      ...CommonStylesBlock
    }
    numberOfItemOnDesktop
    numberOfItemOnMobile
  }
  children {
    ...ImageItemBlock
  }
}
    `;
export const ButtonBlockFragmentDoc = gql`
    fragment ButtonBlock on ButtonBlock {
  fields {
    button {
      ...Button
    }
    commonStyles {
      ...CommonStylesBlock
    }
  }
}
    `;
export const RichContentBlockFragmentDoc = gql`
    fragment RichContentBlock on RichContentBlock {
  fields {
    richText
    backgroundColorHex
    commonStyles {
      ...CommonStylesBlock
    }
  }
}
    `;
export const ContentBlockTypesFragmentDoc = gql`
    fragment ContentBlockTypes on IBlock {
  __typename
  ...BannerItemBlock
  ...ImageTextItemBlock
  ...SliderBlock
  ...SubscribeBlock
  ...TopHeader
  ...NavigationLinksBlock
  ...ImageListBlock
  ...ButtonBlock
  ...RichContentBlock
}
    `;
export const ColumnBlockFragmentDoc = gql`
    fragment ColumnBlock on ColumnBlock {
  __typename
  templateName
  systemId
  fields {
    __typename
    _name
    commonStyles {
      ...CommonStylesBlock
    }
    numberOfItemOnDesktop
    numberOfItemOnMobile
    widthOptionDesktop {
      ...TextOption
    }
    widthOptionMobile {
      ...TextOption
    }
    blockHeight
    contentSpaceX {
      ...IntOption
    }
    contentSpaceXDesktop {
      ...IntOption
    }
    contentSpaceY {
      ...IntOption
    }
    contentSpaceYDesktop {
      ...IntOption
    }
  }
  children {
    __typename
    ...ContentBlockTypes
  }
}
    `;
export const FooterColumnBlockFragmentDoc = gql`
    fragment FooterColumnBlock on FooterColumnBlock {
  __typename
  templateName
  systemId
  fields {
    __typename
    _name
    navigationLinksHeader {
      ...Link
    }
    richText
  }
  children {
    __typename
    ...ContentBlockTypes
  }
}
    `;
export const RowBlockFragmentDoc = gql`
    fragment RowBlock on RowBlock {
  __typename
  fields {
    __typename
    _name
    rowWidthOptionDesktop {
      ...TextOption
    }
    rowWidthOptionMobile {
      ...TextOption
    }
    numberOfItemOnDesktop
    numberOfItemOnMobile
    contentSpaceXDesktop {
      ...IntOption
    }
    contentSpaceX {
      ...IntOption
    }
    contentSpaceY {
      ...IntOption
    }
    contentSpaceYDesktop {
      ...IntOption
    }
    commonStyles {
      ...CommonStylesBlock
    }
    backgroundColorHex
    backgroundColorOpacity
    blockHeight
  }
  children {
    ...ColumnBlock
    ...ContentBlockTypes
    ...TopHeader
    ...FooterColumnBlock
  }
}
    `;
export const SectionBlockFragmentDoc = gql`
    fragment SectionBlock on SectionBlock {
  __typename
  fields {
    __typename
    _name
    backgroundColorHex
    paddingX {
      ...IntOption
    }
    paddingXDesktop {
      ...IntOption
    }
    paddingY {
      ...IntOption
    }
    paddingYDesktop {
      ...IntOption
    }
  }
  children {
    ...RowBlock
  }
}
    `;
export const FooterContainerBlockFragmentDoc = gql`
    fragment FooterContainerBlock on FooterContainerBlock {
  __typename
  children {
    ...RowBlock
  }
}
    `;
export const CountryFragmentDoc = gql`
    fragment Country on Country {
  name
  code
  currency {
    name
    code
    symbol
  }
}
    `;
export const CurrencyFragmentDoc = gql`
    fragment Currency on Currency {
  name
  code
  symbol
}
    `;
export const UnitOfMeasurementFragmentDoc = gql`
    fragment UnitOfMeasurement on UnitOfMeasurement {
  unitOfMeasurementId
  name
  decimalDigits
}
    `;
export const VatDetailFragmentDoc = gql`
    fragment VatDetail on VatDetail {
  vatRate
  amountIncludingVat
  vat
}
    `;
export const DiscountInfoFragmentDoc = gql`
    fragment DiscountInfo on DiscountInfo {
  description
  discountCode
  discountType
}
    `;
export const OrderRowFragmentDoc = gql`
    fragment OrderRow on OrderRow {
  rowId
  articleNumber
  quantity
  description
  rowType
  unitPriceIncludingVat
  unitPriceExcludingVat
  totalIncludingVat
  totalExcludingVat
  totalVat
  vatRate
  product {
    id
    name
    articleNumber
  }
  additionalInfo {
    key
    value
  }
  unitOfMeasurement {
    ...UnitOfMeasurement
  }
  vatDetails {
    ...VatDetail
  }
  discountInfos {
    ...DiscountInfo
  }
}
    `;
export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  discountCodes
  showPricesIncludingVat
  productTotalIncludingVat
  productTotalExcludingVat
  shippingCostIncludingVat
  shippingCostExcludingVat
  totalFeesIncludingVat
  totalFeesExcludingVat
  totalPromotionsAndDiscountsIncludingVat
  totalPromotionsAndDiscountsExcludingVat
  grandTotal
  totalVat
  productCount
  giftCards
  country {
    ...Country
  }
  currency {
    ...Currency
  }
  rows {
    ...OrderRow
  }
  discountInfos {
    ...DiscountInfo
  }
}
    `;
export const CartMutationFragmentDoc = gql`
    fragment CartMutation on Cart {
  discountCodes
  showPricesIncludingVat
  productTotalIncludingVat
  productTotalExcludingVat
  shippingCostIncludingVat
  shippingCostExcludingVat
  totalFeesIncludingVat
  totalFeesExcludingVat
  totalPromotionsAndDiscountsIncludingVat
  totalPromotionsAndDiscountsExcludingVat
  grandTotal
  totalVat
  productCount
  giftCards
}
    `;
export const MetadataFragmentDoc = gql`
    fragment Metadata on Metadata {
  title
  language
  links {
    href
    attributes {
      name
      value
    }
  }
  tags {
    name
    content
  }
  title
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on ICategoryItem {
  id
  url
  metadata {
    ...Metadata
  }
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const CategoryProductCategoryFragmentDoc = gql`
    fragment CategoryProductCategory on CategoryProductCategory {
  ...Category
  name
  templateName
  fields {
    _name
    _description
  }
  children(first: 100) {
    nodes {
      ...Category
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    `;
export const NodeFragmentDoc = gql`
    fragment Node on Node {
  id
}
    `;
export const ContentFragmentDoc = gql`
    fragment Content on IContentItem {
  id
  url
  metadata {
    ...Metadata
  }
}
    `;
export const FileItemFragmentDoc = gql`
    fragment FileItem on IFileItem {
  __typename
  url
  filename
  alt
}
    `;
export const VideoFragmentDoc = gql`
    fragment Video on PointerMediaVideoItem {
  __typename
  item {
    ...FileItem
  }
}
    `;
export const BannerItemBlockFieldDefinitionFragmentDoc = gql`
    fragment BannerItemBlockFieldDefinition on BannerItemBlockFieldDefinition {
  richText
  imageAltText
  isFullWidthImage
  cssClass
  backgroundLink {
    ...Link
  }
  blockHeight
  backgroundColorOverlay
  backgroundColorOverlayOpacity
  loading {
    ...TextOption
  }
  buttonLink {
    ...Link
  }
  buttonType {
    ...TextOption
  }
  image {
    ...Image
  }
  imageMobile {
    ...Image
  }
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on IPageItem {
  id
  name
  url
  metadata {
    ...Metadata
  }
}
    `;
export const ArticlePageFragmentDoc = gql`
    fragment ArticlePage on ArticlePage {
  ...Page
  templateName
  fields {
    _name
    title
    introduction
  }
}
    `;
export const ProductListPageFragmentDoc = gql`
    fragment ProductListPage on ProductListPage {
  ...Page
  templateName
  fields {
    _name
  }
}
    `;
export const HomePageFragmentDoc = gql`
    fragment HomePage on HomePage {
  ...Page
  templateName
  fields {
    _name
  }
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on IProductItem {
  id
  articleNumber
  name
  isVariant
  description
  stockStatus {
    inStockQuantity
    description
  }
  price {
    unitPriceIncludingVat
    unitPriceExcludingVat
    discountPriceIncludingVat
    discountPriceExcludingVat
    vatRate
    currency {
      ...Currency
    }
  }
  images {
    dimension {
      width
      height
    }
    url
    alt
    filename
  }
  unitOfMeasurement {
    ...UnitOfMeasurement
  }
}
    `;
export const ProductWithVariantsFragmentDoc = gql`
    fragment ProductWithVariants on ProductWithVariantsProduct {
  ...Product
  templateName
  url
  metadata {
    ...Metadata
  }
  baseProduct {
    id
    articleNumber
    name
  }
  variants(first: 100) {
    nodes {
      id
      articleNumber
      name
      stockStatus {
        inStockQuantity
      }
      price {
        unitPriceIncludingVat
        unitPriceExcludingVat
      }
      images {
        dimension {
          width
          height
        }
        url
        alt
        filename
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
  fields {
    _name
    _description
    brand {
      name
      value
    }
  }
}
    `;
export const WebsiteTextFragmentDoc = gql`
    fragment WebsiteText on WebsiteText {
  key
  value
}
    `;
export const WebsiteFragmentDoc = gql`
    fragment Website on IWebsiteItem {
  id
  texts {
    ...WebsiteText
  }
}
    `;
export const AcceleratorWebsiteFragmentDoc = gql`
    fragment AcceleratorWebsite on AcceleratorWebsiteWebsite {
  ...Website
  fields {
    _name
    footerHeader
    megaMenuColumnHeader
  }
}
    `;
export const PointerPageFragmentDoc = gql`
    fragment PointerPage on PointerPageItem {
  id
  item {
    ...Page
  }
}
    `;
export const PointerProductFieldFragmentDoc = gql`
    fragment PointerProductField on PointerProductFieldItem {
  fieldType
  field
}
    `;
export const FooterWebsiteFieldFragmentDoc = gql`
    fragment FooterWebsiteField on FooterWebsiteFieldDefinition {
  title
  footerText
}
    `;
export const GetContentByPathDocument = gql`
    query GetContentByPath($path: String!) {
  pageSearch(
    query: {bool: {should: [{field: {stringValue: {field: "_url", value: $path}}}]}}
  ) {
    nodes {
      __typename
      ... on HomePage {
        __typename
        id
        url
        name
        metadata {
          ...Metadata
        }
        fields {
          _name
          __typename
        }
        blocks {
          main {
            ...SectionBlock
          }
        }
      }
      ... on ArticlePage {
        __typename
        id
        url
        name
        metadata {
          ...Metadata
        }
        fields {
          _name
          __typename
        }
        blocks {
          top {
            __typename
          }
          content {
            __typename
          }
        }
      }
      ... on LoginPage {
        __typename
        id
        url
        name
        metadata {
          ...Metadata
        }
        fields {
          _name
          __typename
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionBlockFragmentDoc}
${IntOptionFragmentDoc}
${RowBlockFragmentDoc}
${TextOptionFragmentDoc}
${CommonStylesBlockFragmentDoc}
${ColumnBlockFragmentDoc}
${ContentBlockTypesFragmentDoc}
${BannerItemBlockFragmentDoc}
${ContentImageFragmentDoc}
${ImageFragmentDoc}
${SizeFragmentDoc}
${LinkFragmentDoc}
${ButtonFragmentDoc}
${ImageTextItemBlockFragmentDoc}
${SliderBlockFragmentDoc}
${SubscribeBlockFragmentDoc}
${TopHeaderFragmentDoc}
${NavigationLinksBlockFragmentDoc}
${ImageListBlockFragmentDoc}
${ImageItemBlockFragmentDoc}
${ButtonBlockFragmentDoc}
${RichContentBlockFragmentDoc}
${FooterColumnBlockFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  content {
    ... on HomePage {
      __typename
      id
      url
      name
      metadata {
        ...Metadata
      }
      fields {
        _name
        __typename
      }
      blocks {
        main {
          ...SectionBlock
        }
      }
    }
  }
}
    ${MetadataFragmentDoc}
${SectionBlockFragmentDoc}
${IntOptionFragmentDoc}
${RowBlockFragmentDoc}
${TextOptionFragmentDoc}
${CommonStylesBlockFragmentDoc}
${ColumnBlockFragmentDoc}
${ContentBlockTypesFragmentDoc}
${BannerItemBlockFragmentDoc}
${ContentImageFragmentDoc}
${ImageFragmentDoc}
${SizeFragmentDoc}
${LinkFragmentDoc}
${ButtonFragmentDoc}
${ImageTextItemBlockFragmentDoc}
${SliderBlockFragmentDoc}
${SubscribeBlockFragmentDoc}
${TopHeaderFragmentDoc}
${NavigationLinksBlockFragmentDoc}
${ImageListBlockFragmentDoc}
${ImageItemBlockFragmentDoc}
${ButtonBlockFragmentDoc}
${RichContentBlockFragmentDoc}
${FooterColumnBlockFragmentDoc}`;
export const GetPageByUrlDocument = gql`
    query GetPageByUrl($url: String!) {
  pageSearch(
    query: {field: {stringValue: {field: "_url", value: $url}}}
    first: 1
  ) {
    nodes {
      id
      name
      url
      ... on LandingPage {
        fields {
          _name
          _url
        }
      }
    }
  }
}
    `;
export const GetProductsDocument = gql`
    query GetProducts($first: Int!, $after: String, $content: String) {
  productSearch(first: $first, after: $after, query: {content: {value: $content}}) {
    nodes {
      ...ProductWithVariants
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ProductWithVariantsFragmentDoc}
${ProductFragmentDoc}
${CurrencyFragmentDoc}
${UnitOfMeasurementFragmentDoc}
${MetadataFragmentDoc}
${PageInfoFragmentDoc}`;
export const GetProductDocument = gql`
    query GetProduct($articleNumber: String) {
  productSearch(first: 1, query: {articleNumber: {value: $articleNumber}}) {
    nodes {
      ...ProductWithVariants
    }
  }
}
    ${ProductWithVariantsFragmentDoc}
${ProductFragmentDoc}
${CurrencyFragmentDoc}
${UnitOfMeasurementFragmentDoc}
${MetadataFragmentDoc}
${PageInfoFragmentDoc}`;
export const GetWebsiteDocument = gql`
    query GetWebsite {
  channel {
    ... on DefaultChannelFieldTemplateChannel {
      id
      url
      culture {
        code
      }
      analytics {
        googleTagManager
      }
      website {
        ... on AcceleratorWebsiteWebsite {
          id
          texts {
            key
            value
          }
          fields {
            companyAddress {
              phoneNumber
            }
            logotypeMain {
              ...Image
            }
            loginPage {
              item {
                id
                url
              }
            }
            myPagesPage {
              item {
                id
                url
              }
            }
            pageNotFound {
              item {
                id
                url
              }
            }
            generalError {
              item {
                url
                id
              }
            }
            searchResultPage {
              item {
                id
                url
              }
            }
            checkoutPage {
              item {
                id
                url
              }
            }
            orderConfirmationPage {
              item {
                id
                url
              }
            }
            orderPage {
              item {
                id
                url
              }
            }
            productFilterFields {
              field
            }
          }
          blocks {
            footer {
              __typename
              ...FooterContainerBlock
            }
            mainMenu {
              __typename
              ... on NavigationContainerBlock {
                templateName
                __typename
                fields {
                  layoutDesktop {
                    ...TextOption
                  }
                  layoutMobile {
                    ...TextOption
                  }
                  layoutTablet {
                    ...TextOption
                  }
                }
                children {
                  __typename
                  ... on NavigationItemBlock {
                    __typename
                    fields {
                      _name
                      navigationLink {
                        ...Link
                      }
                      bannerItem {
                        ...BannerItemBlockFieldDefinition
                      }
                    }
                    children {
                      ... on NavigationItemBlock {
                        __typename
                        fields {
                          _name
                          navigationLink {
                            ...Link
                          }
                          bannerItem {
                            ...BannerItemBlockFieldDefinition
                          }
                        }
                        children {
                          __typename
                          ... on NavigationItemBlock {
                            __typename
                            fields {
                              _name
                              navigationLink {
                                ...Link
                              }
                              bannerItem {
                                ...BannerItemBlockFieldDefinition
                              }
                            }
                          }
                          ...BannerItemBlock
                        }
                      }
                    }
                  }
                }
              }
            }
            topHeader {
              __typename
              ... on TopHeaderContainerBlock {
                children {
                  ...RowBlock
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ImageFragmentDoc}
${SizeFragmentDoc}
${FooterContainerBlockFragmentDoc}
${RowBlockFragmentDoc}
${TextOptionFragmentDoc}
${IntOptionFragmentDoc}
${CommonStylesBlockFragmentDoc}
${ColumnBlockFragmentDoc}
${ContentBlockTypesFragmentDoc}
${BannerItemBlockFragmentDoc}
${ContentImageFragmentDoc}
${LinkFragmentDoc}
${ButtonFragmentDoc}
${ImageTextItemBlockFragmentDoc}
${SliderBlockFragmentDoc}
${SubscribeBlockFragmentDoc}
${TopHeaderFragmentDoc}
${NavigationLinksBlockFragmentDoc}
${ImageListBlockFragmentDoc}
${ImageItemBlockFragmentDoc}
${ButtonBlockFragmentDoc}
${RichContentBlockFragmentDoc}
${FooterColumnBlockFragmentDoc}
${BannerItemBlockFieldDefinitionFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetContentByPath(variables: Schema.GetContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetContentByPathQuery>({ document: GetContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetContentByPath', 'query', variables);
    },
    GetHomePage(variables?: Schema.GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetHomePageQuery>({ document: GetHomePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHomePage', 'query', variables);
    },
    GetPageByUrl(variables: Schema.GetPageByUrlQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetPageByUrlQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetPageByUrlQuery>({ document: GetPageByUrlDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPageByUrl', 'query', variables);
    },
    GetProducts(variables: Schema.GetProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetProductsQuery>({ document: GetProductsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProducts', 'query', variables);
    },
    GetProduct(variables?: Schema.GetProductQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetProductQuery>({ document: GetProductDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProduct', 'query', variables);
    },
    GetWebsite(variables?: Schema.GetWebsiteQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.GetWebsiteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetWebsiteQuery>({ document: GetWebsiteDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetWebsite', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;