/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "fragment ArticleListElementData on ArticleListElement {\n  ...IElementData\n  articleListCount\n}": typeof types.ArticleListElementDataFragmentDoc;
  "fragment BannerItemData on BannerItem {\n  ...IElementData\n  RichText {\n    ...RichTextData\n  }\n  BackgroundLink {\n    ...ContentUrlData\n  }\n  ButtonLink {\n    ...ContentUrlData\n  }\n  ButtonText\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  ButtonType\n  IsFullWidthImage\n  Loading\n}": typeof types.BannerItemDataFragmentDoc;
  "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlankExperienceDataFragmentDoc;
  "fragment BlockData on _IComponent {\n  ...IContentData\n}": typeof types.BlockDataFragmentDoc;
  "fragment ButtonElementData on ButtonElement {\n  ...IElementData\n  ButtonText\n  ButtonLink {\n    ...ContentUrlData\n  }\n  className\n}": typeof types.ButtonElementDataFragmentDoc;
  "fragment CompanyData on Company {\n  ...IElementData\n  Name\n  Logo {\n    ...ContentReferenceData\n  }\n}": typeof types.CompanyDataFragmentDoc;
  "fragment CompositionComponentNodeData on ICompositionComponentNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n  component {\n    ...BlockData\n    ...ElementData\n    ...ArticleListElementData\n    ...BannerItemData\n    ...ButtonElementData\n    ...CompanyData\n    ...ContentTextElementData\n    ...DictionaryData\n    ...DictionaryItemData\n    ...HeaderBlockData\n    ...HeadingElementData\n    ...ImageBackgroundData\n    ...ImageItemElementData\n    ...MegaMenuGroupBlockData\n    ...NavigationMenuBlockData\n    ...OfficeLocationData\n    ...PageSeoSettingsData\n  }\n}": typeof types.CompositionComponentNodeDataFragmentDoc;
  "fragment CompositionNodeData on ICompositionNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n}": typeof types.CompositionNodeDataFragmentDoc;
  "fragment ContentReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}": typeof types.ContentReferenceDataFragmentDoc;
  "fragment ContentTextElementData on ContentTextElement {\n  ...IElementData\n  Paragraph {\n    ...RichTextData\n  }\n  Heading {\n    ...RichTextData\n  }\n}": typeof types.ContentTextElementDataFragmentDoc;
  "fragment ContentUrlData on ContentUrl {\n  type\n  default\n  hierarchical\n  internal\n  graph\n  base\n}": typeof types.ContentUrlDataFragmentDoc;
  "fragment DictionaryData on Dictionary {\n  ...IElementData\n  DictionaryItems {\n    DictionaryItemKey\n    DictionaryItemValue\n  }\n  DictionaryKey\n}": typeof types.DictionaryDataFragmentDoc;
  "fragment DictionaryItemData on DictionaryItem {\n  ...IElementData\n  DictionaryItemKey\n  DictionaryItemValue\n}": typeof types.DictionaryItemDataFragmentDoc;
  "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}": typeof types.DictionaryItemPropertyDataFragmentDoc;
  "fragment ElementData on _IComponent {\n  ...IElementData\n}": typeof types.ElementDataFragmentDoc;
  "fragment ExperienceData on _IExperience {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}": typeof types.ExperienceDataFragmentDoc;
  "fragment HeaderBlockData on HeaderBlock {\n  ...IElementData\n  site_logo {\n    ...ContentReferenceData\n  }\n  site_logo_dark {\n    ...ContentReferenceData\n  }\n  site_main_navigation {\n    ...IContentData\n  }\n  site_utility_navigation {\n    ...IContentData\n  }\n}": typeof types.HeaderBlockDataFragmentDoc;
  "fragment HeadingElementData on HeadingElement {\n  ...IElementData\n  Heading {\n    ...RichTextData\n  }\n}": typeof types.HeadingElementDataFragmentDoc;
  "fragment IContentData on _IContent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": typeof types.IContentDataFragmentDoc;
  "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  fallbackForLocale\n  version\n  displayName\n  url {\n    ...ContentUrlData\n  }\n  types\n  published\n  status\n  changeset\n  created\n  lastModified\n  sortOrder\n  variation\n}": typeof types.IContentInfoFragmentDoc;
  "fragment IContentListItem on _IContent {\n  ...IContentData\n}": typeof types.IContentListItemFragmentDoc;
  "fragment IElementData on _IComponent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": typeof types.IElementDataFragmentDoc;
  "fragment ImageBackgroundData on ImageBackground {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}": typeof types.ImageBackgroundDataFragmentDoc;
  "fragment ImageItemElementData on ImageItemElement {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n}": typeof types.ImageItemElementDataFragmentDoc;
  "fragment LinkData on Link {\n  url {\n    ...ContentUrlData\n  }\n  title\n  text\n  target\n}": typeof types.LinkDataFragmentDoc;
  "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  ...IElementData\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...ContentUrlData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n  }\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc;
  "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkData\n  }\n}": typeof types.NavigationMenuBlockDataFragmentDoc;
  "fragment OfficeLocationData on OfficeLocation {\n  ...IElementData\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}": typeof types.OfficeLocationDataFragmentDoc;
  "fragment PageData on _IContent {\n  ...IContentData\n}": typeof types.PageDataFragmentDoc;
  "fragment PageSeoSettingsData on PageSeoSettings {\n  ...IElementData\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ContentReferenceData\n  }\n}": typeof types.PageSeoSettingsDataFragmentDoc;
  "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc;
  "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}": typeof types.ReferenceDataFragmentDoc;
  "fragment RichTextData on RichText {\n  html\n  json\n}": typeof types.RichTextDataFragmentDoc;
  'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}': typeof types.getContentByIdDocument;
  "query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n  content: _Content(\n    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}": typeof types.getContentByPathDocument;
  'query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      _metadata {\n        types\n      }\n    }\n  }\n}': typeof types.getContentTypeDocument;
};
const documents: Documents = {
  "fragment ArticleListElementData on ArticleListElement {\n  ...IElementData\n  articleListCount\n}":
    types.ArticleListElementDataFragmentDoc,
  "fragment BannerItemData on BannerItem {\n  ...IElementData\n  RichText {\n    ...RichTextData\n  }\n  BackgroundLink {\n    ...ContentUrlData\n  }\n  ButtonLink {\n    ...ContentUrlData\n  }\n  ButtonText\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  ButtonType\n  IsFullWidthImage\n  Loading\n}":
    types.BannerItemDataFragmentDoc,
  "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}":
    types.BlankExperienceDataFragmentDoc,
  "fragment BlockData on _IComponent {\n  ...IContentData\n}": types.BlockDataFragmentDoc,
  "fragment ButtonElementData on ButtonElement {\n  ...IElementData\n  ButtonText\n  ButtonLink {\n    ...ContentUrlData\n  }\n  className\n}":
    types.ButtonElementDataFragmentDoc,
  "fragment CompanyData on Company {\n  ...IElementData\n  Name\n  Logo {\n    ...ContentReferenceData\n  }\n}":
    types.CompanyDataFragmentDoc,
  "fragment CompositionComponentNodeData on ICompositionComponentNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n  component {\n    ...BlockData\n    ...ElementData\n    ...ArticleListElementData\n    ...BannerItemData\n    ...ButtonElementData\n    ...CompanyData\n    ...ContentTextElementData\n    ...DictionaryData\n    ...DictionaryItemData\n    ...HeaderBlockData\n    ...HeadingElementData\n    ...ImageBackgroundData\n    ...ImageItemElementData\n    ...MegaMenuGroupBlockData\n    ...NavigationMenuBlockData\n    ...OfficeLocationData\n    ...PageSeoSettingsData\n  }\n}":
    types.CompositionComponentNodeDataFragmentDoc,
  "fragment CompositionNodeData on ICompositionNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n}":
    types.CompositionNodeDataFragmentDoc,
  "fragment ContentReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}":
    types.ContentReferenceDataFragmentDoc,
  "fragment ContentTextElementData on ContentTextElement {\n  ...IElementData\n  Paragraph {\n    ...RichTextData\n  }\n  Heading {\n    ...RichTextData\n  }\n}":
    types.ContentTextElementDataFragmentDoc,
  "fragment ContentUrlData on ContentUrl {\n  type\n  default\n  hierarchical\n  internal\n  graph\n  base\n}":
    types.ContentUrlDataFragmentDoc,
  "fragment DictionaryData on Dictionary {\n  ...IElementData\n  DictionaryItems {\n    DictionaryItemKey\n    DictionaryItemValue\n  }\n  DictionaryKey\n}":
    types.DictionaryDataFragmentDoc,
  "fragment DictionaryItemData on DictionaryItem {\n  ...IElementData\n  DictionaryItemKey\n  DictionaryItemValue\n}":
    types.DictionaryItemDataFragmentDoc,
  "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}":
    types.DictionaryItemPropertyDataFragmentDoc,
  "fragment ElementData on _IComponent {\n  ...IElementData\n}": types.ElementDataFragmentDoc,
  "fragment ExperienceData on _IExperience {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}":
    types.ExperienceDataFragmentDoc,
  "fragment HeaderBlockData on HeaderBlock {\n  ...IElementData\n  site_logo {\n    ...ContentReferenceData\n  }\n  site_logo_dark {\n    ...ContentReferenceData\n  }\n  site_main_navigation {\n    ...IContentData\n  }\n  site_utility_navigation {\n    ...IContentData\n  }\n}":
    types.HeaderBlockDataFragmentDoc,
  "fragment HeadingElementData on HeadingElement {\n  ...IElementData\n  Heading {\n    ...RichTextData\n  }\n}":
    types.HeadingElementDataFragmentDoc,
  "fragment IContentData on _IContent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}":
    types.IContentDataFragmentDoc,
  "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  fallbackForLocale\n  version\n  displayName\n  url {\n    ...ContentUrlData\n  }\n  types\n  published\n  status\n  changeset\n  created\n  lastModified\n  sortOrder\n  variation\n}":
    types.IContentInfoFragmentDoc,
  "fragment IContentListItem on _IContent {\n  ...IContentData\n}": types.IContentListItemFragmentDoc,
  "fragment IElementData on _IComponent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}":
    types.IElementDataFragmentDoc,
  "fragment ImageBackgroundData on ImageBackground {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}":
    types.ImageBackgroundDataFragmentDoc,
  "fragment ImageItemElementData on ImageItemElement {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n}":
    types.ImageItemElementDataFragmentDoc,
  "fragment LinkData on Link {\n  url {\n    ...ContentUrlData\n  }\n  title\n  text\n  target\n}":
    types.LinkDataFragmentDoc,
  "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  ...IElementData\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...ContentUrlData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n  }\n}":
    types.MegaMenuGroupBlockDataFragmentDoc,
  "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkData\n  }\n}":
    types.NavigationMenuBlockDataFragmentDoc,
  "fragment OfficeLocationData on OfficeLocation {\n  ...IElementData\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}":
    types.OfficeLocationDataFragmentDoc,
  "fragment PageData on _IContent {\n  ...IContentData\n}": types.PageDataFragmentDoc,
  "fragment PageSeoSettingsData on PageSeoSettings {\n  ...IElementData\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ContentReferenceData\n  }\n}":
    types.PageSeoSettingsDataFragmentDoc,
  "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}":
    types.PageSeoSettingsPropertyDataFragmentDoc,
  "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}":
    types.ReferenceDataFragmentDoc,
  "fragment RichTextData on RichText {\n  html\n  json\n}": types.RichTextDataFragmentDoc,
  'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}':
    types.getContentByIdDocument,
  "query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n  content: _Content(\n    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}":
    types.getContentByPathDocument,
  'query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      _metadata {\n        types\n      }\n    }\n  }\n}':
    types.getContentTypeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ArticleListElementData on ArticleListElement {\n  ...IElementData\n  articleListCount\n}"
): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  ...IElementData\n  articleListCount\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment BannerItemData on BannerItem {\n  ...IElementData\n  RichText {\n    ...RichTextData\n  }\n  BackgroundLink {\n    ...ContentUrlData\n  }\n  ButtonLink {\n    ...ContentUrlData\n  }\n  ButtonText\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  ButtonType\n  IsFullWidthImage\n  Loading\n}"
): (typeof documents)["fragment BannerItemData on BannerItem {\n  ...IElementData\n  RichText {\n    ...RichTextData\n  }\n  BackgroundLink {\n    ...ContentUrlData\n  }\n  ButtonLink {\n    ...ContentUrlData\n  }\n  ButtonText\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  ButtonType\n  IsFullWidthImage\n  Loading\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"
): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment BlockData on _IComponent {\n  ...IContentData\n}"
): (typeof documents)["fragment BlockData on _IComponent {\n  ...IContentData\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ButtonElementData on ButtonElement {\n  ...IElementData\n  ButtonText\n  ButtonLink {\n    ...ContentUrlData\n  }\n  className\n}"
): (typeof documents)["fragment ButtonElementData on ButtonElement {\n  ...IElementData\n  ButtonText\n  ButtonLink {\n    ...ContentUrlData\n  }\n  className\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CompanyData on Company {\n  ...IElementData\n  Name\n  Logo {\n    ...ContentReferenceData\n  }\n}"
): (typeof documents)["fragment CompanyData on Company {\n  ...IElementData\n  Name\n  Logo {\n    ...ContentReferenceData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CompositionComponentNodeData on ICompositionComponentNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n  component {\n    ...BlockData\n    ...ElementData\n    ...ArticleListElementData\n    ...BannerItemData\n    ...ButtonElementData\n    ...CompanyData\n    ...ContentTextElementData\n    ...DictionaryData\n    ...DictionaryItemData\n    ...HeaderBlockData\n    ...HeadingElementData\n    ...ImageBackgroundData\n    ...ImageItemElementData\n    ...MegaMenuGroupBlockData\n    ...NavigationMenuBlockData\n    ...OfficeLocationData\n    ...PageSeoSettingsData\n  }\n}"
): (typeof documents)["fragment CompositionComponentNodeData on ICompositionComponentNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n  component {\n    ...BlockData\n    ...ElementData\n    ...ArticleListElementData\n    ...BannerItemData\n    ...ButtonElementData\n    ...CompanyData\n    ...ContentTextElementData\n    ...DictionaryData\n    ...DictionaryItemData\n    ...HeaderBlockData\n    ...HeadingElementData\n    ...ImageBackgroundData\n    ...ImageItemElementData\n    ...MegaMenuGroupBlockData\n    ...NavigationMenuBlockData\n    ...OfficeLocationData\n    ...PageSeoSettingsData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CompositionNodeData on ICompositionNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n}"
): (typeof documents)["fragment CompositionNodeData on ICompositionNode {\n  type\n  nodeType\n  layoutType\n  displayName\n  key\n  displayTemplateKey\n  displaySettings {\n    key\n    value\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ContentReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}"
): (typeof documents)["fragment ContentReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ContentTextElementData on ContentTextElement {\n  ...IElementData\n  Paragraph {\n    ...RichTextData\n  }\n  Heading {\n    ...RichTextData\n  }\n}"
): (typeof documents)["fragment ContentTextElementData on ContentTextElement {\n  ...IElementData\n  Paragraph {\n    ...RichTextData\n  }\n  Heading {\n    ...RichTextData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ContentUrlData on ContentUrl {\n  type\n  default\n  hierarchical\n  internal\n  graph\n  base\n}"
): (typeof documents)["fragment ContentUrlData on ContentUrl {\n  type\n  default\n  hierarchical\n  internal\n  graph\n  base\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment DictionaryData on Dictionary {\n  ...IElementData\n  DictionaryItems {\n    DictionaryItemKey\n    DictionaryItemValue\n  }\n  DictionaryKey\n}"
): (typeof documents)["fragment DictionaryData on Dictionary {\n  ...IElementData\n  DictionaryItems {\n    DictionaryItemKey\n    DictionaryItemValue\n  }\n  DictionaryKey\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment DictionaryItemData on DictionaryItem {\n  ...IElementData\n  DictionaryItemKey\n  DictionaryItemValue\n}"
): (typeof documents)["fragment DictionaryItemData on DictionaryItem {\n  ...IElementData\n  DictionaryItemKey\n  DictionaryItemValue\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}"
): (typeof documents)["fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ElementData on _IComponent {\n  ...IElementData\n}"
): (typeof documents)["fragment ElementData on _IComponent {\n  ...IElementData\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ExperienceData on _IExperience {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}"
): (typeof documents)["fragment ExperienceData on _IExperience {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment HeaderBlockData on HeaderBlock {\n  ...IElementData\n  site_logo {\n    ...ContentReferenceData\n  }\n  site_logo_dark {\n    ...ContentReferenceData\n  }\n  site_main_navigation {\n    ...IContentData\n  }\n  site_utility_navigation {\n    ...IContentData\n  }\n}"
): (typeof documents)["fragment HeaderBlockData on HeaderBlock {\n  ...IElementData\n  site_logo {\n    ...ContentReferenceData\n  }\n  site_logo_dark {\n    ...ContentReferenceData\n  }\n  site_main_navigation {\n    ...IContentData\n  }\n  site_utility_navigation {\n    ...IContentData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment HeadingElementData on HeadingElement {\n  ...IElementData\n  Heading {\n    ...RichTextData\n  }\n}"
): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  ...IElementData\n  Heading {\n    ...RichTextData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment IContentData on _IContent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"
): (typeof documents)["fragment IContentData on _IContent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  fallbackForLocale\n  version\n  displayName\n  url {\n    ...ContentUrlData\n  }\n  types\n  published\n  status\n  changeset\n  created\n  lastModified\n  sortOrder\n  variation\n}"
): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  fallbackForLocale\n  version\n  displayName\n  url {\n    ...ContentUrlData\n  }\n  types\n  published\n  status\n  changeset\n  created\n  lastModified\n  sortOrder\n  variation\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment IContentListItem on _IContent {\n  ...IContentData\n}"
): (typeof documents)["fragment IContentListItem on _IContent {\n  ...IContentData\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment IElementData on _IComponent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"
): (typeof documents)["fragment IElementData on _IComponent {\n  _deleted\n  _fulltext\n  _modified\n  _score\n  _id\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ImageBackgroundData on ImageBackground {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}"
): (typeof documents)["fragment ImageBackgroundData on ImageBackground {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ImageItemElementData on ImageItemElement {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n}"
): (typeof documents)["fragment ImageItemElementData on ImageItemElement {\n  ...IElementData\n  ImageDesktop {\n    ...ContentReferenceData\n  }\n  ImageMobile {\n    ...ContentReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment LinkData on Link {\n  url {\n    ...ContentUrlData\n  }\n  title\n  text\n  target\n}"
): (typeof documents)["fragment LinkData on Link {\n  url {\n    ...ContentUrlData\n  }\n  title\n  text\n  target\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  ...IElementData\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...ContentUrlData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n  }\n}"
): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  ...IElementData\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...ContentUrlData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkData\n  }\n}"
): (typeof documents)["fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment OfficeLocationData on OfficeLocation {\n  ...IElementData\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}"
): (typeof documents)["fragment OfficeLocationData on OfficeLocation {\n  ...IElementData\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment PageData on _IContent {\n  ...IContentData\n}"
): (typeof documents)["fragment PageData on _IContent {\n  ...IContentData\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment PageSeoSettingsData on PageSeoSettings {\n  ...IElementData\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ContentReferenceData\n  }\n}"
): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  ...IElementData\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ContentReferenceData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}"
): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}"
): (typeof documents)["fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...ContentUrlData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment RichTextData on RichText {\n  html\n  json\n}"
): (typeof documents)["fragment RichTextData on RichText {\n  html\n  json\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}'
): (typeof documents)['query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n  content: _Content(\n    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}"
): (typeof documents)["query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n  content: _Content(\n    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      ...IContentData\n      ...PageData\n      ...BlankExperienceData\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      _metadata {\n        types\n      }\n    }\n  }\n}'
): (typeof documents)['query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n  content: _Content(\n    variation: {include: ALL}\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items: item {\n      _metadata {\n        types\n      }\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
