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
  "fragment BannerItemElementData on BannerItemElement {\n  HeadingText\n  SubHeading\n  RichText {\n    json\n    html\n  }\n  BackgroundLink {\n    ...LinkData\n  }\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  OverlayColor\n  OverlayOpacity\n  Alt\n  IsFullWidthImage\n  Loading\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  CssClass\n}": typeof types.BannerItemElementDataFragmentDoc;
  "fragment ButtonElementData on ButtonElement {\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  className\n}": typeof types.ButtonElementDataFragmentDoc;
  "fragment CompanyData on Company {\n  Name\n  Logo {\n    ...ReferenceData\n  }\n}": typeof types.CompanyDataFragmentDoc;
  "fragment ContainerElementData on ContainerElement {\n  Items {\n    ...ReferenceData\n  }\n  TypeOfItems\n}": typeof types.ContainerElementDataFragmentDoc;
  "fragment ContentTextElementData on ContentTextElement {\n  HeadingText\n  Paragraph {\n    json\n    html\n  }\n}": typeof types.ContentTextElementDataFragmentDoc;
  "fragment DictionaryData on Dictionary {\n  DictionaryItems {\n    ...DictionaryItemPropertyData\n  }\n  DictionaryKey\n}": typeof types.DictionaryDataFragmentDoc;
  "fragment DictionaryItemData on DictionaryItem {\n  DictionaryItemKey\n  DictionaryItemValue\n}": typeof types.DictionaryItemDataFragmentDoc;
  "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}": typeof types.DictionaryItemPropertyDataFragmentDoc;
  "fragment ExpandableTextData on ExpandableText {\n  ContentText {\n    json\n    html\n  }\n  Threshold\n  ShowLessText\n  ReadMoreText\n  MobileThreshold\n}": typeof types.ExpandableTextDataFragmentDoc;
  "fragment FAQsSectionData on FAQsSection {\n  HeadingText\n  allowMultiple\n  ListItem {\n    ...ContentTextElementData\n    ...HeadingElementData\n  }\n}": typeof types.FAQsSectionDataFragmentDoc;
  "fragment HeadingElementData on HeadingElement {\n  HeadingText\n}": typeof types.HeadingElementDataFragmentDoc;
  "fragment ImageBackgroundData on ImageBackground {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}": typeof types.ImageBackgroundDataFragmentDoc;
  "fragment ImageItemElementData on ImageItemElement {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n  IsBackground\n  OverlayOpacity\n  OverlayColor\n}": typeof types.ImageItemElementDataFragmentDoc;
  "fragment ImageTextItemElementData on ImageTextItemElement {\n  Heading {\n    json\n    html\n  }\n  RichText {\n    json\n    html\n  }\n  Image {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullWidthImage\n  Loading\n  BackgroundLink {\n    ...LinkData\n  }\n  ButtonLink {\n    ...LinkData\n  }\n  ButtonText\n  ContentImagePosition\n  CssClass\n}": typeof types.ImageTextItemElementDataFragmentDoc;
  "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n    ...NavigationMenuBlockData\n    ...ButtonElementData\n    ...SocialMediaBlockData\n    ...ContentTextElementData\n    ...SocialMediaBlocksData\n  }\n  ExpandableMobile\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc;
  "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...NavigationMenuBlockFields\n  SubMenuItem {\n    ...NavigationMenuBlockFields\n  }\n}\n\nfragment NavigationMenuBlockFields on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  Link {\n    ...LinkItemData\n  }\n  ThumbnailBanner {\n    ...ReferenceData\n  }\n}": typeof types.NavigationMenuBlockDataFragmentDoc;
  "fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}": typeof types.OfficeLocationDataFragmentDoc;
  "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}": typeof types.PageSeoSettingsDataFragmentDoc;
  "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": typeof types.ParagraphElementDataFragmentDoc;
  "fragment ProductCardElementData on ProductCardElement {\n  ProductName\n  Image {\n    ...ReferenceData\n  }\n  ShortDescription {\n    json\n    html\n  }\n  InventoryStatus\n  inventory\n  CanBuy\n}": typeof types.ProductCardElementDataFragmentDoc;
  "fragment ProductCardListElementData on ProductCardListElement {\n  CategoryID\n  EnableFilter\n  EnableSorting\n  DefaultView\n  EnableProductCount\n  VisibleElements {\n    ...ReferenceData\n  }\n  PagingSize\n}": typeof types.ProductCardListElementDataFragmentDoc;
  "fragment SocialMediaBlockData on SocialMediaBlock {\n  URLMedia {\n    ...LinkPropertyData\n  }\n  imageIcon {\n    ImageDesktop {\n      ...ReferenceData\n    }\n    ImageMobile {\n      ...ReferenceData\n    }\n    Loading\n    OverlayColor\n    OverlayOpacity\n    Alt\n    IsFullWidthImage\n    IsBackground\n  }\n}": typeof types.SocialMediaBlockDataFragmentDoc;
  "fragment SocialMediaBlocksData on SocialMediaBlocks {\n  ListItems {\n    ...SocialMediaBlockData\n  }\n}": typeof types.SocialMediaBlocksDataFragmentDoc;
  "fragment TopHeaderContainerData on TopHeaderContainer {\n  description {\n    json\n    html\n  }\n  Links {\n    ...LinkItemData\n  }\n}": typeof types.TopHeaderContainerDataFragmentDoc;
  "fragment VideoElementData on VideoElement {\n  Video {\n    ...ReferenceData\n  }\n  Placeholder {\n    ...ReferenceData\n  }\n  VideoUrl\n  Autoplay\n  PlayOnPopup\n  Loading\n}": typeof types.VideoElementDataFragmentDoc;
  "fragment WebFooterConfigrationBlockData on WebFooterConfigrationBlock {\n  SiteLogoFooter {\n    ...ReferenceData\n  }\n  LogoAltText\n  LocationDetails {\n    json\n    html\n  }\n  ButtonURLFooter {\n    ...LinkItemData\n  }\n  FooterNavigation {\n    ...IContentListItem\n    ...MegaMenuGroupBlockData\n  }\n  SocialMediaArea {\n    ...IContentListItem\n    ...SocialMediaBlockData\n  }\n  CopyrightText {\n    json\n    html\n  }\n  TermsAndConditionsArea {\n    ...LinkItemData\n  }\n  paymentmethodarea {\n    ...IContentListItem\n    ...ImageItemElementData\n  }\n}": typeof types.WebFooterConfigrationBlockDataFragmentDoc;
  'query getFooter {\n  footer: WebFooterConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebFooterConfigrationBlockData\n    }\n  }\n}': typeof types.getFooterDocument;
  'query getBanner($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  banner: BannerItemElement(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    item {\n      ...BannerItemElementData\n    }\n  }\n}': typeof types.getBannerDocument;
  "fragment WebHeaderConfigrationBlockData on WebHeaderConfigrationBlock {\n  HeaderCTA {\n    ...LinkData\n  }\n  TopNavigationHeader {\n    ...MegaMenuGroupBlockData\n    ...TopHeaderContainerData\n  }\n  MainNavigationHeader {\n    ...MegaMenuGroupBlockData\n  }\n  SearchBarText\n  SiteLogoAltText\n  SiteLogoIcon {\n    ...ReferenceData\n  }\n  SiteSearchEnable\n}": typeof types.WebHeaderConfigrationBlockDataFragmentDoc;
  'query getHeader {\n  header: WebHeaderConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebHeaderConfigrationBlockData\n    }\n  }\n}': typeof types.getHeaderDocument;
  "fragment LinkPropertyData on Link {\n  url {\n    ...LinkData\n  }\n  title\n  text\n  target\n}": typeof types.LinkPropertyDataFragmentDoc;
  "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": typeof types.BlankExperienceDataFragmentDoc;
  "fragment ProductDetailExperienceData on ProductDetailExperience {\n  SEOsettings {\n    ...PageSeoSettingsData\n  }\n  ...ExperienceData\n}": typeof types.ProductDetailExperienceDataFragmentDoc;
  "fragment ProductListingEPageData on ProductListingEPage {\n  ...ExperienceData\n}": typeof types.ProductListingEPageDataFragmentDoc;
  "fragment SectionData on Section {\n  empty: _metadata {\n    key\n  }\n}": typeof types.SectionDataFragmentDoc;
  "fragment PDPSpecificationsElementData on PDPSpecificationsElement {\n  empty: _metadata {\n    key\n  }\n}": typeof types.PDPSpecificationsElementDataFragmentDoc;
  "fragment ProductCarouselElementData on ProductCarouselElement {\n  Heading {\n    json\n    html\n  }\n  CarouselSource\n  CategoryID\n  VisibleElements {\n    ...ReferenceData\n  }\n  productsofView\n  PagingSize\n}": typeof types.ProductCarouselElementDataFragmentDoc;
  "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": typeof types.IContentDataFragmentDoc;
  'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }': typeof types.getContentByIdDocument;
};
const documents: Documents = {
  "fragment BannerItemElementData on BannerItemElement {\n  HeadingText\n  SubHeading\n  RichText {\n    json\n    html\n  }\n  BackgroundLink {\n    ...LinkData\n  }\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  OverlayColor\n  OverlayOpacity\n  Alt\n  IsFullWidthImage\n  Loading\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  CssClass\n}":
    types.BannerItemElementDataFragmentDoc,
  "fragment ButtonElementData on ButtonElement {\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  className\n}":
    types.ButtonElementDataFragmentDoc,
  "fragment CompanyData on Company {\n  Name\n  Logo {\n    ...ReferenceData\n  }\n}":
    types.CompanyDataFragmentDoc,
  "fragment ContainerElementData on ContainerElement {\n  Items {\n    ...ReferenceData\n  }\n  TypeOfItems\n}":
    types.ContainerElementDataFragmentDoc,
  "fragment ContentTextElementData on ContentTextElement {\n  HeadingText\n  Paragraph {\n    json\n    html\n  }\n}":
    types.ContentTextElementDataFragmentDoc,
  "fragment DictionaryData on Dictionary {\n  DictionaryItems {\n    ...DictionaryItemPropertyData\n  }\n  DictionaryKey\n}":
    types.DictionaryDataFragmentDoc,
  "fragment DictionaryItemData on DictionaryItem {\n  DictionaryItemKey\n  DictionaryItemValue\n}":
    types.DictionaryItemDataFragmentDoc,
  "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}":
    types.DictionaryItemPropertyDataFragmentDoc,
  "fragment ExpandableTextData on ExpandableText {\n  ContentText {\n    json\n    html\n  }\n  Threshold\n  ShowLessText\n  ReadMoreText\n  MobileThreshold\n}":
    types.ExpandableTextDataFragmentDoc,
  "fragment FAQsSectionData on FAQsSection {\n  HeadingText\n  allowMultiple\n  ListItem {\n    ...ContentTextElementData\n    ...HeadingElementData\n  }\n}":
    types.FAQsSectionDataFragmentDoc,
  "fragment HeadingElementData on HeadingElement {\n  HeadingText\n}":
    types.HeadingElementDataFragmentDoc,
  "fragment ImageBackgroundData on ImageBackground {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}":
    types.ImageBackgroundDataFragmentDoc,
  "fragment ImageItemElementData on ImageItemElement {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n  IsBackground\n  OverlayOpacity\n  OverlayColor\n}":
    types.ImageItemElementDataFragmentDoc,
  "fragment ImageTextItemElementData on ImageTextItemElement {\n  Heading {\n    json\n    html\n  }\n  RichText {\n    json\n    html\n  }\n  Image {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullWidthImage\n  Loading\n  BackgroundLink {\n    ...LinkData\n  }\n  ButtonLink {\n    ...LinkData\n  }\n  ButtonText\n  ContentImagePosition\n  CssClass\n}":
    types.ImageTextItemElementDataFragmentDoc,
  "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n    ...NavigationMenuBlockData\n    ...ButtonElementData\n    ...SocialMediaBlockData\n    ...ContentTextElementData\n    ...SocialMediaBlocksData\n  }\n  ExpandableMobile\n}":
    types.MegaMenuGroupBlockDataFragmentDoc,
  "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...NavigationMenuBlockFields\n  SubMenuItem {\n    ...NavigationMenuBlockFields\n  }\n}\n\nfragment NavigationMenuBlockFields on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  Link {\n    ...LinkItemData\n  }\n  ThumbnailBanner {\n    ...ReferenceData\n  }\n}":
    types.NavigationMenuBlockDataFragmentDoc,
  "fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}":
    types.OfficeLocationDataFragmentDoc,
  "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}":
    types.PageSeoSettingsDataFragmentDoc,
  "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}":
    types.ParagraphElementDataFragmentDoc,
  "fragment ProductCardElementData on ProductCardElement {\n  ProductName\n  Image {\n    ...ReferenceData\n  }\n  ShortDescription {\n    json\n    html\n  }\n  InventoryStatus\n  inventory\n  CanBuy\n}":
    types.ProductCardElementDataFragmentDoc,
  "fragment ProductCardListElementData on ProductCardListElement {\n  CategoryID\n  EnableFilter\n  EnableSorting\n  DefaultView\n  EnableProductCount\n  VisibleElements {\n    ...ReferenceData\n  }\n  PagingSize\n}":
    types.ProductCardListElementDataFragmentDoc,
  "fragment SocialMediaBlockData on SocialMediaBlock {\n  URLMedia {\n    ...LinkPropertyData\n  }\n  imageIcon {\n    ImageDesktop {\n      ...ReferenceData\n    }\n    ImageMobile {\n      ...ReferenceData\n    }\n    Loading\n    OverlayColor\n    OverlayOpacity\n    Alt\n    IsFullWidthImage\n    IsBackground\n  }\n}":
    types.SocialMediaBlockDataFragmentDoc,
  "fragment SocialMediaBlocksData on SocialMediaBlocks {\n  ListItems {\n    ...SocialMediaBlockData\n  }\n}":
    types.SocialMediaBlocksDataFragmentDoc,
  "fragment TopHeaderContainerData on TopHeaderContainer {\n  description {\n    json\n    html\n  }\n  Links {\n    ...LinkItemData\n  }\n}":
    types.TopHeaderContainerDataFragmentDoc,
  "fragment VideoElementData on VideoElement {\n  Video {\n    ...ReferenceData\n  }\n  Placeholder {\n    ...ReferenceData\n  }\n  VideoUrl\n  Autoplay\n  PlayOnPopup\n  Loading\n}":
    types.VideoElementDataFragmentDoc,
  "fragment WebFooterConfigrationBlockData on WebFooterConfigrationBlock {\n  SiteLogoFooter {\n    ...ReferenceData\n  }\n  LogoAltText\n  LocationDetails {\n    json\n    html\n  }\n  ButtonURLFooter {\n    ...LinkItemData\n  }\n  FooterNavigation {\n    ...IContentListItem\n    ...MegaMenuGroupBlockData\n  }\n  SocialMediaArea {\n    ...IContentListItem\n    ...SocialMediaBlockData\n  }\n  CopyrightText {\n    json\n    html\n  }\n  TermsAndConditionsArea {\n    ...LinkItemData\n  }\n  paymentmethodarea {\n    ...IContentListItem\n    ...ImageItemElementData\n  }\n}":
    types.WebFooterConfigrationBlockDataFragmentDoc,
  'query getFooter {\n  footer: WebFooterConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebFooterConfigrationBlockData\n    }\n  }\n}':
    types.getFooterDocument,
  'query getBanner($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  banner: BannerItemElement(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    item {\n      ...BannerItemElementData\n    }\n  }\n}':
    types.getBannerDocument,
  "fragment WebHeaderConfigrationBlockData on WebHeaderConfigrationBlock {\n  HeaderCTA {\n    ...LinkData\n  }\n  TopNavigationHeader {\n    ...MegaMenuGroupBlockData\n    ...TopHeaderContainerData\n  }\n  MainNavigationHeader {\n    ...MegaMenuGroupBlockData\n  }\n  SearchBarText\n  SiteLogoAltText\n  SiteLogoIcon {\n    ...ReferenceData\n  }\n  SiteSearchEnable\n}":
    types.WebHeaderConfigrationBlockDataFragmentDoc,
  'query getHeader {\n  header: WebHeaderConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebHeaderConfigrationBlockData\n    }\n  }\n}':
    types.getHeaderDocument,
  "fragment LinkPropertyData on Link {\n  url {\n    ...LinkData\n  }\n  title\n  text\n  target\n}":
    types.LinkPropertyDataFragmentDoc,
  "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}":
    types.BlankExperienceDataFragmentDoc,
  "fragment ProductDetailExperienceData on ProductDetailExperience {\n  SEOsettings {\n    ...PageSeoSettingsData\n  }\n  ...ExperienceData\n}":
    types.ProductDetailExperienceDataFragmentDoc,
  "fragment ProductListingEPageData on ProductListingEPage {\n  ...ExperienceData\n}":
    types.ProductListingEPageDataFragmentDoc,
  "fragment SectionData on Section {\n  empty: _metadata {\n    key\n  }\n}":
    types.SectionDataFragmentDoc,
  "fragment PDPSpecificationsElementData on PDPSpecificationsElement {\n  empty: _metadata {\n    key\n  }\n}":
    types.PDPSpecificationsElementDataFragmentDoc,
  "fragment ProductCarouselElementData on ProductCarouselElement {\n  Heading {\n    json\n    html\n  }\n  CarouselSource\n  CategoryID\n  VisibleElements {\n    ...ReferenceData\n  }\n  productsofView\n  PagingSize\n}":
    types.ProductCarouselElementDataFragmentDoc,
  "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}":
    types.IContentDataFragmentDoc,
  'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }':
    types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment BannerItemElementData on BannerItemElement {\n  HeadingText\n  SubHeading\n  RichText {\n    json\n    html\n  }\n  BackgroundLink {\n    ...LinkData\n  }\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  OverlayColor\n  OverlayOpacity\n  Alt\n  IsFullWidthImage\n  Loading\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  CssClass\n}",
): (typeof documents)["fragment BannerItemElementData on BannerItemElement {\n  HeadingText\n  SubHeading\n  RichText {\n    json\n    html\n  }\n  BackgroundLink {\n    ...LinkData\n  }\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  OverlayColor\n  OverlayOpacity\n  Alt\n  IsFullWidthImage\n  Loading\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  CssClass\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ButtonElementData on ButtonElement {\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  className\n}",
): (typeof documents)["fragment ButtonElementData on ButtonElement {\n  ButtonText\n  ButtonLink {\n    ...LinkData\n  }\n  className\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment CompanyData on Company {\n  Name\n  Logo {\n    ...ReferenceData\n  }\n}",
): (typeof documents)["fragment CompanyData on Company {\n  Name\n  Logo {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ContainerElementData on ContainerElement {\n  Items {\n    ...ReferenceData\n  }\n  TypeOfItems\n}",
): (typeof documents)["fragment ContainerElementData on ContainerElement {\n  Items {\n    ...ReferenceData\n  }\n  TypeOfItems\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ContentTextElementData on ContentTextElement {\n  HeadingText\n  Paragraph {\n    json\n    html\n  }\n}",
): (typeof documents)["fragment ContentTextElementData on ContentTextElement {\n  HeadingText\n  Paragraph {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment DictionaryData on Dictionary {\n  DictionaryItems {\n    ...DictionaryItemPropertyData\n  }\n  DictionaryKey\n}",
): (typeof documents)["fragment DictionaryData on Dictionary {\n  DictionaryItems {\n    ...DictionaryItemPropertyData\n  }\n  DictionaryKey\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment DictionaryItemData on DictionaryItem {\n  DictionaryItemKey\n  DictionaryItemValue\n}",
): (typeof documents)["fragment DictionaryItemData on DictionaryItem {\n  DictionaryItemKey\n  DictionaryItemValue\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}",
): (typeof documents)["fragment DictionaryItemPropertyData on DictionaryItemProperty {\n  DictionaryItemKey\n  DictionaryItemValue\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ExpandableTextData on ExpandableText {\n  ContentText {\n    json\n    html\n  }\n  Threshold\n  ShowLessText\n  ReadMoreText\n  MobileThreshold\n}",
): (typeof documents)["fragment ExpandableTextData on ExpandableText {\n  ContentText {\n    json\n    html\n  }\n  Threshold\n  ShowLessText\n  ReadMoreText\n  MobileThreshold\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment FAQsSectionData on FAQsSection {\n  HeadingText\n  allowMultiple\n  ListItem {\n    ...ContentTextElementData\n    ...HeadingElementData\n  }\n}",
): (typeof documents)["fragment FAQsSectionData on FAQsSection {\n  HeadingText\n  allowMultiple\n  ListItem {\n    ...ContentTextElementData\n    ...HeadingElementData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment HeadingElementData on HeadingElement {\n  HeadingText\n}",
): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  HeadingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ImageBackgroundData on ImageBackground {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}",
): (typeof documents)["fragment ImageBackgroundData on ImageBackground {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullIWidthImage\n  Loading\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ImageItemElementData on ImageItemElement {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n  IsBackground\n  OverlayOpacity\n  OverlayColor\n}",
): (typeof documents)["fragment ImageItemElementData on ImageItemElement {\n  ImageDesktop {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Loading\n  Alt\n  IsFullWidthImage\n  IsBackground\n  OverlayOpacity\n  OverlayColor\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ImageTextItemElementData on ImageTextItemElement {\n  Heading {\n    json\n    html\n  }\n  RichText {\n    json\n    html\n  }\n  Image {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullWidthImage\n  Loading\n  BackgroundLink {\n    ...LinkData\n  }\n  ButtonLink {\n    ...LinkData\n  }\n  ButtonText\n  ContentImagePosition\n  CssClass\n}",
): (typeof documents)["fragment ImageTextItemElementData on ImageTextItemElement {\n  Heading {\n    json\n    html\n  }\n  RichText {\n    json\n    html\n  }\n  Image {\n    ...ReferenceData\n  }\n  ImageMobile {\n    ...ReferenceData\n  }\n  Alt\n  IsFullWidthImage\n  Loading\n  BackgroundLink {\n    ...LinkData\n  }\n  ButtonLink {\n    ...LinkData\n  }\n  ButtonText\n  ContentImagePosition\n  CssClass\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n    ...NavigationMenuBlockData\n    ...ButtonElementData\n    ...SocialMediaBlockData\n    ...ContentTextElementData\n    ...SocialMediaBlocksData\n  }\n  ExpandableMobile\n}",
): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n    ...NavigationMenuBlockData\n    ...ButtonElementData\n    ...SocialMediaBlockData\n    ...ContentTextElementData\n    ...SocialMediaBlocksData\n  }\n  ExpandableMobile\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...NavigationMenuBlockFields\n  SubMenuItem {\n    ...NavigationMenuBlockFields\n  }\n}\n\nfragment NavigationMenuBlockFields on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  Link {\n    ...LinkItemData\n  }\n  ThumbnailBanner {\n    ...ReferenceData\n  }\n}",
): (typeof documents)["fragment NavigationMenuBlockData on NavigationMenuBlock {\n  ...NavigationMenuBlockFields\n  SubMenuItem {\n    ...NavigationMenuBlockFields\n  }\n}\n\nfragment NavigationMenuBlockFields on NavigationMenuBlock {\n  ...IElementData\n  MenuNavigationHeading\n  Link {\n    ...LinkItemData\n  }\n  ThumbnailBanner {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}",
): (typeof documents)["fragment OfficeLocationData on OfficeLocation {\n  OfficeTitle\n  OfficeAddressStreet1\n  OfficeAddressStreet2\n  OfficeAddressCity\n  OfficeAddressPostalCode\n  OfficeAddressCountry\n  OfficePhone\n  OfficeEmail\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}",
): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  ThumbnailImage {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}",
): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ProductCardElementData on ProductCardElement {\n  ProductName\n  Image {\n    ...ReferenceData\n  }\n  ShortDescription {\n    json\n    html\n  }\n  InventoryStatus\n  inventory\n  CanBuy\n}",
): (typeof documents)["fragment ProductCardElementData on ProductCardElement {\n  ProductName\n  Image {\n    ...ReferenceData\n  }\n  ShortDescription {\n    json\n    html\n  }\n  InventoryStatus\n  inventory\n  CanBuy\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ProductCardListElementData on ProductCardListElement {\n  CategoryID\n  EnableFilter\n  EnableSorting\n  DefaultView\n  EnableProductCount\n  VisibleElements {\n    ...ReferenceData\n  }\n  PagingSize\n}",
): (typeof documents)["fragment ProductCardListElementData on ProductCardListElement {\n  CategoryID\n  EnableFilter\n  EnableSorting\n  DefaultView\n  EnableProductCount\n  VisibleElements {\n    ...ReferenceData\n  }\n  PagingSize\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment SocialMediaBlockData on SocialMediaBlock {\n  URLMedia {\n    ...LinkPropertyData\n  }\n  imageIcon {\n    ImageDesktop {\n      ...ReferenceData\n    }\n    ImageMobile {\n      ...ReferenceData\n    }\n    Loading\n    OverlayColor\n    OverlayOpacity\n    Alt\n    IsFullWidthImage\n    IsBackground\n  }\n}",
): (typeof documents)["fragment SocialMediaBlockData on SocialMediaBlock {\n  URLMedia {\n    ...LinkPropertyData\n  }\n  imageIcon {\n    ImageDesktop {\n      ...ReferenceData\n    }\n    ImageMobile {\n      ...ReferenceData\n    }\n    Loading\n    OverlayColor\n    OverlayOpacity\n    Alt\n    IsFullWidthImage\n    IsBackground\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment SocialMediaBlocksData on SocialMediaBlocks {\n  ListItems {\n    ...SocialMediaBlockData\n  }\n}",
): (typeof documents)["fragment SocialMediaBlocksData on SocialMediaBlocks {\n  ListItems {\n    ...SocialMediaBlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment TopHeaderContainerData on TopHeaderContainer {\n  description {\n    json\n    html\n  }\n  Links {\n    ...LinkItemData\n  }\n}",
): (typeof documents)["fragment TopHeaderContainerData on TopHeaderContainer {\n  description {\n    json\n    html\n  }\n  Links {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment VideoElementData on VideoElement {\n  Video {\n    ...ReferenceData\n  }\n  Placeholder {\n    ...ReferenceData\n  }\n  VideoUrl\n  Autoplay\n  PlayOnPopup\n  Loading\n}",
): (typeof documents)["fragment VideoElementData on VideoElement {\n  Video {\n    ...ReferenceData\n  }\n  Placeholder {\n    ...ReferenceData\n  }\n  VideoUrl\n  Autoplay\n  PlayOnPopup\n  Loading\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment WebFooterConfigrationBlockData on WebFooterConfigrationBlock {\n  SiteLogoFooter {\n    ...ReferenceData\n  }\n  LogoAltText\n  LocationDetails {\n    json\n    html\n  }\n  ButtonURLFooter {\n    ...LinkItemData\n  }\n  FooterNavigation {\n    ...IContentListItem\n    ...MegaMenuGroupBlockData\n  }\n  SocialMediaArea {\n    ...IContentListItem\n    ...SocialMediaBlockData\n  }\n  CopyrightText {\n    json\n    html\n  }\n  TermsAndConditionsArea {\n    ...LinkItemData\n  }\n  paymentmethodarea {\n    ...IContentListItem\n    ...ImageItemElementData\n  }\n}",
): (typeof documents)["fragment WebFooterConfigrationBlockData on WebFooterConfigrationBlock {\n  SiteLogoFooter {\n    ...ReferenceData\n  }\n  LogoAltText\n  LocationDetails {\n    json\n    html\n  }\n  ButtonURLFooter {\n    ...LinkItemData\n  }\n  FooterNavigation {\n    ...IContentListItem\n    ...MegaMenuGroupBlockData\n  }\n  SocialMediaArea {\n    ...IContentListItem\n    ...SocialMediaBlockData\n  }\n  CopyrightText {\n    json\n    html\n  }\n  TermsAndConditionsArea {\n    ...LinkItemData\n  }\n  paymentmethodarea {\n    ...IContentListItem\n    ...ImageItemElementData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query getFooter {\n  footer: WebFooterConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebFooterConfigrationBlockData\n    }\n  }\n}',
): (typeof documents)['query getFooter {\n  footer: WebFooterConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebFooterConfigrationBlockData\n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query getBanner($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  banner: BannerItemElement(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    item {\n      ...BannerItemElementData\n    }\n  }\n}',
): (typeof documents)['query getBanner($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n  banner: BannerItemElement(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}\n    locale: $locale\n  ) {\n    item {\n      ...BannerItemElementData\n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment WebHeaderConfigrationBlockData on WebHeaderConfigrationBlock {\n  HeaderCTA {\n    ...LinkData\n  }\n  TopNavigationHeader {\n    ...MegaMenuGroupBlockData\n    ...TopHeaderContainerData\n  }\n  MainNavigationHeader {\n    ...MegaMenuGroupBlockData\n  }\n  SearchBarText\n  SiteLogoAltText\n  SiteLogoIcon {\n    ...ReferenceData\n  }\n  SiteSearchEnable\n}",
): (typeof documents)["fragment WebHeaderConfigrationBlockData on WebHeaderConfigrationBlock {\n  HeaderCTA {\n    ...LinkData\n  }\n  TopNavigationHeader {\n    ...MegaMenuGroupBlockData\n    ...TopHeaderContainerData\n  }\n  MainNavigationHeader {\n    ...MegaMenuGroupBlockData\n  }\n  SearchBarText\n  SiteLogoAltText\n  SiteLogoIcon {\n    ...ReferenceData\n  }\n  SiteSearchEnable\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query getHeader {\n  header: WebHeaderConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebHeaderConfigrationBlockData\n    }\n  }\n}',
): (typeof documents)['query getHeader {\n  header: WebHeaderConfigrationBlock(\n    where: {_metadata: {status: {eq: "Published"}}}\n  ) {\n    item {\n      ...WebHeaderConfigrationBlockData\n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment LinkPropertyData on Link {\n  url {\n    ...LinkData\n  }\n  title\n  text\n  target\n}",
): (typeof documents)["fragment LinkPropertyData on Link {\n  url {\n    ...LinkData\n  }\n  title\n  text\n  target\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}",
): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ProductDetailExperienceData on ProductDetailExperience {\n  SEOsettings {\n    ...PageSeoSettingsData\n  }\n  ...ExperienceData\n}",
): (typeof documents)["fragment ProductDetailExperienceData on ProductDetailExperience {\n  SEOsettings {\n    ...PageSeoSettingsData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ProductListingEPageData on ProductListingEPage {\n  ...ExperienceData\n}",
): (typeof documents)["fragment ProductListingEPageData on ProductListingEPage {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment SectionData on Section {\n  empty: _metadata {\n    key\n  }\n}",
): (typeof documents)["fragment SectionData on Section {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment PDPSpecificationsElementData on PDPSpecificationsElement {\n  empty: _metadata {\n    key\n  }\n}",
): (typeof documents)["fragment PDPSpecificationsElementData on PDPSpecificationsElement {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment ProductCarouselElementData on ProductCarouselElement {\n  Heading {\n    json\n    html\n  }\n  CarouselSource\n  CategoryID\n  VisibleElements {\n    ...ReferenceData\n  }\n  productsofView\n  PagingSize\n}",
): (typeof documents)["fragment ProductCarouselElementData on ProductCarouselElement {\n  Heading {\n    json\n    html\n  }\n  CarouselSource\n  CategoryID\n  VisibleElements {\n    ...ReferenceData\n  }\n  productsofView\n  PagingSize\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}",
): (typeof documents)["fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }',
): (typeof documents)['query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
