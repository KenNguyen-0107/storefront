import { gql, type GraphQLClient } from "graphql-request";
import type * as Types from "./graphql";

export function getContentType(
  client: GraphQLClient,
  variables: Types.getContentTypeQueryVariables
): Promise<Types.getContentTypeQuery> {
  const query = gql`
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
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables);
}
export function getContentByPath(
  client: GraphQLClient,
  variables: Types.getContentByPathQueryVariables
): Promise<Types.getContentByPathQuery> {
  const query = gql`
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
    fragment BlankExperienceData on BlankExperience {
      ...ExperienceData
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
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
    fragment PageData on _IContent {
      ...IContentData
    }
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
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
      MetaTitle
      MetaDescription
      MetaKeywords
      ThumbnailImage {
        ...ReferenceData
      }
    }
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
    fragment ArticleListElementData on ArticleListElement {
      ...IElementData
      articleListCount
    }
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
    fragment BlockData on _IComponent {
      ...IContentData
    }
    fragment ButtonElementData on ButtonElement {
      ...IElementData
      ButtonText
      ButtonLink {
        ...ContentUrlData
      }
      className
    }
    fragment CompanyData on Company {
      ...IElementData
      Name
      Logo {
        ...ContentReferenceData
      }
    }
    fragment ContentTextElementData on ContentTextElement {
      ...IElementData
      Paragraph {
        ...RichTextData
      }
      Heading {
        ...RichTextData
      }
    }
    fragment DictionaryData on Dictionary {
      ...IElementData
      DictionaryItems {
        DictionaryItemKey
        DictionaryItemValue
      }
      DictionaryKey
    }
    fragment DictionaryItemData on DictionaryItem {
      ...IElementData
      DictionaryItemKey
      DictionaryItemValue
    }
    fragment ElementData on _IComponent {
      ...IElementData
    }
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
    fragment HeadingElementData on HeadingElement {
      ...IElementData
      Heading {
        ...RichTextData
      }
    }
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
    fragment NavigationMenuBlockData on NavigationMenuBlock {
      ...IElementData
      MenuNavigationHeading
      NavigationLinks {
        ...LinkData
      }
    }
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
    fragment PageSeoSettingsData on PageSeoSettings {
      ...IElementData
      MetaTitle
      MetaDescription
      MetaKeywords
      ThumbnailImage {
        ...ContentReferenceData
      }
    }
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
    fragment ContentReferenceData on ContentReference {
      key
      url {
        ...ContentUrlData
      }
    }
    fragment ContentUrlData on ContentUrl {
      type
      default
      hierarchical
      internal
      graph
      base
    }
    fragment RichTextData on RichText {
      html
      json
    }
    fragment LinkData on Link {
      url {
        ...ContentUrlData
      }
      title
      text
      target
    }
    fragment ReferenceData on ContentReference {
      key
      url {
        ...ContentUrlData
      }
    }
  `;
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables);
}
export function getContentById(
  client: GraphQLClient,
  variables: Types.getContentByIdQueryVariables
): Promise<Types.getContentByIdQuery> {
  const query = gql`
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
    fragment BlankExperienceData on BlankExperience {
      ...ExperienceData
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
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
    fragment PageData on _IContent {
      ...IContentData
    }
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
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
      MetaTitle
      MetaDescription
      MetaKeywords
      ThumbnailImage {
        ...ReferenceData
      }
    }
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
    fragment ArticleListElementData on ArticleListElement {
      ...IElementData
      articleListCount
    }
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
    fragment BlockData on _IComponent {
      ...IContentData
    }
    fragment ButtonElementData on ButtonElement {
      ...IElementData
      ButtonText
      ButtonLink {
        ...ContentUrlData
      }
      className
    }
    fragment CompanyData on Company {
      ...IElementData
      Name
      Logo {
        ...ContentReferenceData
      }
    }
    fragment ContentTextElementData on ContentTextElement {
      ...IElementData
      Paragraph {
        ...RichTextData
      }
      Heading {
        ...RichTextData
      }
    }
    fragment DictionaryData on Dictionary {
      ...IElementData
      DictionaryItems {
        DictionaryItemKey
        DictionaryItemValue
      }
      DictionaryKey
    }
    fragment DictionaryItemData on DictionaryItem {
      ...IElementData
      DictionaryItemKey
      DictionaryItemValue
    }
    fragment ElementData on _IComponent {
      ...IElementData
    }
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
    fragment HeadingElementData on HeadingElement {
      ...IElementData
      Heading {
        ...RichTextData
      }
    }
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
    fragment NavigationMenuBlockData on NavigationMenuBlock {
      ...IElementData
      MenuNavigationHeading
      NavigationLinks {
        ...LinkData
      }
    }
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
    fragment PageSeoSettingsData on PageSeoSettings {
      ...IElementData
      MetaTitle
      MetaDescription
      MetaKeywords
      ThumbnailImage {
        ...ContentReferenceData
      }
    }
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
    fragment ContentReferenceData on ContentReference {
      key
      url {
        ...ContentUrlData
      }
    }
    fragment ContentUrlData on ContentUrl {
      type
      default
      hierarchical
      internal
      graph
      base
    }
    fragment RichTextData on RichText {
      html
      json
    }
    fragment LinkData on Link {
      url {
        ...ContentUrlData
      }
      title
      text
      target
    }
    fragment ReferenceData on ContentReference {
      key
      url {
        ...ContentUrlData
      }
    }
  `;
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables);
}
