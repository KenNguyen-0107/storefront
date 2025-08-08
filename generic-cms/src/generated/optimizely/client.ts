import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
export const ContentUrlDataFragmentDoc = gql`
  fragment ContentUrlData on ContentUrl {
    type
    default
    hierarchical
    internal
    graph
    base
  }
`;
export const IContentInfoFragmentDoc = gql`
  fragment IContentInfo on IContentMetadata {
    key
    locale
    fallbackForLocale
    version
    displayName
    url {
      ...ContentUrlData
    }
    types
    published
    status
    changeset
    created
    lastModified
    sortOrder
    variation
  }
`;
export const CompositionNodeDataFragmentDoc = gql`
  fragment CompositionNodeData on ICompositionNode {
    type
    nodeType
    layoutType
    displayName
    key
    displayTemplateKey
    displaySettings {
      key
      value
    }
  }
`;
export const IContentDataFragmentDoc = gql`
  fragment IContentData on _IContent {
    _deleted
    _fulltext
    _modified
    _score
    _id
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
    _deleted
    _fulltext
    _modified
    _score
    _id
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
export const ArticleListElementDataFragmentDoc = gql`
  fragment ArticleListElementData on ArticleListElement {
    ...IElementData
    articleListCount
  }
`;
export const RichTextDataFragmentDoc = gql`
  fragment RichTextData on RichText {
    html
    json
  }
`;
export const ContentReferenceDataFragmentDoc = gql`
  fragment ContentReferenceData on ContentReference {
    key
    url {
      ...ContentUrlData
    }
  }
`;
export const BannerItemDataFragmentDoc = gql`
  fragment BannerItemData on BannerItem {
    ...IElementData
    RichText {
      ...RichTextData
    }
    BackgroundLink {
      ...ContentUrlData
    }
    ButtonLink {
      ...ContentUrlData
    }
    ButtonText
    ImageDesktop {
      ...ContentReferenceData
    }
    ImageMobile {
      ...ContentReferenceData
    }
    Alt
    ButtonType
    IsFullWidthImage
    Loading
  }
`;
export const ButtonElementDataFragmentDoc = gql`
  fragment ButtonElementData on ButtonElement {
    ...IElementData
    ButtonText
    ButtonLink {
      ...ContentUrlData
    }
    className
  }
`;
export const CompanyDataFragmentDoc = gql`
  fragment CompanyData on Company {
    ...IElementData
    Name
    Logo {
      ...ContentReferenceData
    }
  }
`;
export const ContentTextElementDataFragmentDoc = gql`
  fragment ContentTextElementData on ContentTextElement {
    ...IElementData
    Paragraph {
      ...RichTextData
    }
    Heading {
      ...RichTextData
    }
  }
`;
export const DictionaryDataFragmentDoc = gql`
  fragment DictionaryData on Dictionary {
    ...IElementData
    DictionaryItems {
      DictionaryItemKey
      DictionaryItemValue
    }
    DictionaryKey
  }
`;
export const DictionaryItemDataFragmentDoc = gql`
  fragment DictionaryItemData on DictionaryItem {
    ...IElementData
    DictionaryItemKey
    DictionaryItemValue
  }
`;
export const HeaderBlockDataFragmentDoc = gql`
  fragment HeaderBlockData on HeaderBlock {
    ...IElementData
    site_logo {
      ...ContentReferenceData
    }
    site_logo_dark {
      ...ContentReferenceData
    }
    site_main_navigation {
      ...IContentData
    }
    site_utility_navigation {
      ...IContentData
    }
  }
`;
export const HeadingElementDataFragmentDoc = gql`
  fragment HeadingElementData on HeadingElement {
    ...IElementData
    Heading {
      ...RichTextData
    }
  }
`;
export const ImageBackgroundDataFragmentDoc = gql`
  fragment ImageBackgroundData on ImageBackground {
    ...IElementData
    ImageDesktop {
      ...ContentReferenceData
    }
    ImageMobile {
      ...ContentReferenceData
    }
    Alt
    IsFullIWidthImage
    Loading
  }
`;
export const ImageItemElementDataFragmentDoc = gql`
  fragment ImageItemElementData on ImageItemElement {
    ...IElementData
    ImageDesktop {
      ...ContentReferenceData
    }
    ImageMobile {
      ...ContentReferenceData
    }
    Loading
    Alt
    IsFullWidthImage
  }
`;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
  fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
    ...IElementData
    MenuMenuHeading
    MegaMenuUrl {
      ...ContentUrlData
    }
    MegaMenuContentArea {
      ...IContentData
    }
  }
`;
export const LinkDataFragmentDoc = gql`
  fragment LinkData on Link {
    url {
      ...ContentUrlData
    }
    title
    text
    target
  }
`;
export const NavigationMenuBlockDataFragmentDoc = gql`
  fragment NavigationMenuBlockData on NavigationMenuBlock {
    ...IElementData
    MenuNavigationHeading
    NavigationLinks {
      ...LinkData
    }
  }
`;
export const OfficeLocationDataFragmentDoc = gql`
  fragment OfficeLocationData on OfficeLocation {
    ...IElementData
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
    ...IElementData
    MetaTitle
    MetaDescription
    MetaKeywords
    ThumbnailImage {
      ...ContentReferenceData
    }
  }
`;
export const CompositionComponentNodeDataFragmentDoc = gql`
  fragment CompositionComponentNodeData on ICompositionComponentNode {
    type
    nodeType
    layoutType
    displayName
    key
    displayTemplateKey
    displaySettings {
      key
      value
    }
    component {
      ...BlockData
      ...ElementData
      ...ArticleListElementData
      ...BannerItemData
      ...ButtonElementData
      ...CompanyData
      ...ContentTextElementData
      ...DictionaryData
      ...DictionaryItemData
      ...HeaderBlockData
      ...HeadingElementData
      ...ImageBackgroundData
      ...ImageItemElementData
      ...MegaMenuGroupBlockData
      ...NavigationMenuBlockData
      ...OfficeLocationData
      ...PageSeoSettingsData
    }
  }
`;
export const ExperienceDataFragmentDoc = gql`
  fragment ExperienceData on _IExperience {
    _deleted
    _fulltext
    _modified
    _score
    _id
    _metadata {
      ...IContentInfo
    }
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
export const ReferenceDataFragmentDoc = gql`
  fragment ReferenceData on ContentReference {
    key
    url {
      ...ContentUrlData
    }
  }
`;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
  fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
    MetaTitle
    MetaDescription
    MetaKeywords
    ThumbnailImage {
      ...ReferenceData
    }
  }
`;
export const BlankExperienceDataFragmentDoc = gql`
  fragment BlankExperienceData on BlankExperience {
    ...ExperienceData
    SeoSettings {
      ...PageSeoSettingsPropertyData
    }
  }
`;
export const DictionaryItemPropertyDataFragmentDoc = gql`
  fragment DictionaryItemPropertyData on DictionaryItemProperty {
    DictionaryItemKey
    DictionaryItemValue
  }
`;
export const IContentListItemFragmentDoc = gql`
  fragment IContentListItem on _IContent {
    ...IContentData
  }
`;
export const PageDataFragmentDoc = gql`
  fragment PageData on _IContent {
    ...IContentData
  }
`;
export const getContentByIdDocument = gql`
  query getContentById(
    $key: String!
    $version: String
    $locale: [Locales!]
    $path: String = "-"
    $domain: String
    $changeset: String
  ) {
    content: _Content(
      variation: { include: ALL }
      where: {
        _or: [
          { _metadata: { key: { eq: $key }, version: { eq: $version } } }
          { _metadata: { url: { default: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }
        ]
        _metadata: { changeset: { eq: $changeset } }
      }
      locale: $locale
    ) {
      total
      items: item {
        ...IContentData
        ...PageData
        ...BlankExperienceData
      }
    }
  }
  ${IContentDataFragmentDoc}
  ${IContentInfoFragmentDoc}
  ${ContentUrlDataFragmentDoc}
  ${PageDataFragmentDoc}
  ${BlankExperienceDataFragmentDoc}
  ${ExperienceDataFragmentDoc}
  ${CompositionNodeDataFragmentDoc}
  ${CompositionComponentNodeDataFragmentDoc}
  ${BlockDataFragmentDoc}
  ${ElementDataFragmentDoc}
  ${IElementDataFragmentDoc}
  ${ArticleListElementDataFragmentDoc}
  ${BannerItemDataFragmentDoc}
  ${RichTextDataFragmentDoc}
  ${ContentReferenceDataFragmentDoc}
  ${ButtonElementDataFragmentDoc}
  ${CompanyDataFragmentDoc}
  ${ContentTextElementDataFragmentDoc}
  ${DictionaryDataFragmentDoc}
  ${DictionaryItemDataFragmentDoc}
  ${HeaderBlockDataFragmentDoc}
  ${HeadingElementDataFragmentDoc}
  ${ImageBackgroundDataFragmentDoc}
  ${ImageItemElementDataFragmentDoc}
  ${MegaMenuGroupBlockDataFragmentDoc}
  ${NavigationMenuBlockDataFragmentDoc}
  ${LinkDataFragmentDoc}
  ${OfficeLocationDataFragmentDoc}
  ${PageSeoSettingsDataFragmentDoc}
  ${PageSeoSettingsPropertyDataFragmentDoc}
  ${ReferenceDataFragmentDoc}
`;
export const getContentByPathDocument = gql`
  query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
    content: _Content(
      where: { _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }, changeset: { eq: $changeset } } }
      locale: $locale
    ) {
      total
      items: item {
        ...IContentData
        ...PageData
        ...BlankExperienceData
      }
    }
  }
  ${IContentDataFragmentDoc}
  ${IContentInfoFragmentDoc}
  ${ContentUrlDataFragmentDoc}
  ${PageDataFragmentDoc}
  ${BlankExperienceDataFragmentDoc}
  ${ExperienceDataFragmentDoc}
  ${CompositionNodeDataFragmentDoc}
  ${CompositionComponentNodeDataFragmentDoc}
  ${BlockDataFragmentDoc}
  ${ElementDataFragmentDoc}
  ${IElementDataFragmentDoc}
  ${ArticleListElementDataFragmentDoc}
  ${BannerItemDataFragmentDoc}
  ${RichTextDataFragmentDoc}
  ${ContentReferenceDataFragmentDoc}
  ${ButtonElementDataFragmentDoc}
  ${CompanyDataFragmentDoc}
  ${ContentTextElementDataFragmentDoc}
  ${DictionaryDataFragmentDoc}
  ${DictionaryItemDataFragmentDoc}
  ${HeaderBlockDataFragmentDoc}
  ${HeadingElementDataFragmentDoc}
  ${ImageBackgroundDataFragmentDoc}
  ${ImageItemElementDataFragmentDoc}
  ${MegaMenuGroupBlockDataFragmentDoc}
  ${NavigationMenuBlockDataFragmentDoc}
  ${LinkDataFragmentDoc}
  ${OfficeLocationDataFragmentDoc}
  ${PageSeoSettingsDataFragmentDoc}
  ${PageSeoSettingsPropertyDataFragmentDoc}
  ${ReferenceDataFragmentDoc}
`;
export const getContentTypeDocument = gql`
  query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
    content: _Content(
      variation: { include: ALL }
      where: {
        _or: [
          { _metadata: { key: { eq: $key }, version: { eq: $version } } }
          { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }
        ]
      }
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

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(
      variables: Schema.getContentByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit["signal"]
    ): Promise<Schema.getContentByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Schema.getContentByIdQuery>({
            document: getContentByIdDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        "getContentById",
        "query",
        variables
      );
    },
    getContentByPath(
      variables: Schema.getContentByPathQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit["signal"]
    ): Promise<Schema.getContentByPathQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Schema.getContentByPathQuery>({
            document: getContentByPathDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        "getContentByPath",
        "query",
        variables
      );
    },
    getContentType(
      variables: Schema.getContentTypeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
      signal?: RequestInit["signal"]
    ): Promise<Schema.getContentTypeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Schema.getContentTypeQuery>({
            document: getContentTypeDocument,
            variables,
            requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
            signal,
          }),
        "getContentType",
        "query",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
