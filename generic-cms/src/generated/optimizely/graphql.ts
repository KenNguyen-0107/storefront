/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Bool: { input: any; output: any };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any };
};

export type ArticleGroupPage = IData &
  _IContent &
  _IPage & {
    __typename?: "ArticleGroupPage";
    LandingPageSeoSettings?: Maybe<PageSeoSettingsProperty>;
    MainContent?: Maybe<Array<Maybe<_IContent>>>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    articleGroupIntro?: Maybe<RichText>;
    articleGroupTitle?: Maybe<Scalars["String"]["output"]>;
  };

export type ArticleGroupPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ArticleGroupPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleGroupPageAutocomplete = {
  __typename?: "ArticleGroupPageAutocomplete";
  LandingPageSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  MainContent?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleGroupIntro?: Maybe<RichTextAutocomplete>;
  articleGroupTitle?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type ArticleGroupPageAutocompletearticleGroupTitleArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ArticleGroupPageFacet = {
  __typename?: "ArticleGroupPageFacet";
  LandingPageSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  MainContent?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  articleGroupIntro?: Maybe<RichTextFacet>;
  articleGroupTitle?: Maybe<Array<Maybe<StringFacet>>>;
};

export type ArticleGroupPageFacetarticleGroupTitleArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleGroupPageOrderByInput = {
  LandingPageSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  MainContent?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  articleGroupIntro?: InputMaybe<RichTextOrderByInput>;
  articleGroupTitle?: InputMaybe<OrderBy>;
};

export type ArticleGroupPageOutput = {
  __typename?: "ArticleGroupPageOutput";
  autocomplete?: Maybe<ArticleGroupPageAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ArticleGroupPageFacet>;
  item?: Maybe<ArticleGroupPage>;
  items?: Maybe<Array<Maybe<ArticleGroupPage>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ArticleGroupPageOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleGroupPageWhereInput = {
  LandingPageSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  MainContent?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  articleGroupIntro?: InputMaybe<RichTextWhereInput>;
  articleGroupTitle?: InputMaybe<StringFilterInput>;
};

export type ArticleListElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ArticleListElement";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    articleListCount?: Maybe<Scalars["Int"]["output"]>;
  };

export type ArticleListElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ArticleListElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: "ArticleListElementAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: "ArticleListElementFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ArticleListElementOutput = {
  __typename?: "ArticleListElementOutput";
  autocomplete?: Maybe<ArticleListElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ArticleListElementFacet>;
  item?: Maybe<ArticleListElement>;
  items?: Maybe<Array<Maybe<ArticleListElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ArticleListElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type ArticlePage = IData &
  _IContent &
  _IPage & {
    __typename?: "ArticlePage";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    articleAuthors?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    articleBody?: Maybe<RichText>;
    articleHeroImage?: Maybe<ContentReference>;
    articleSeoSettings?: Maybe<PageSeoSettingsProperty>;
    articleSummary?: Maybe<RichText>;
    articleTitle?: Maybe<Scalars["String"]["output"]>;
  };

export type ArticlePage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ArticlePage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: "ArticlePageAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleBody?: Maybe<RichTextAutocomplete>;
  articleHeroImage?: Maybe<ContentReferenceAutocomplete>;
  articleSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  articleSummary?: Maybe<RichTextAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: "ArticlePageFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
  articleBody?: Maybe<RichTextFacet>;
  articleHeroImage?: Maybe<ContentReferenceFacet>;
  articleSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  articleSummary?: Maybe<RichTextFacet>;
};

export type ArticlePageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  articleBody?: InputMaybe<RichTextOrderByInput>;
  articleHeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  articleSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  articleSummary?: InputMaybe<RichTextOrderByInput>;
};

export type ArticlePageOutput = {
  __typename?: "ArticlePageOutput";
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ArticlePageFacet>;
  item?: Maybe<ArticlePage>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ArticlePageOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArticlePageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  articleBody?: InputMaybe<RichTextWhereInput>;
  articleHeroImage?: InputMaybe<ContentReferenceWhereInput>;
  articleSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  articleSummary?: InputMaybe<RichTextWhereInput>;
};

export type BannerItem = IData &
  _IComponent &
  _IContent & {
    __typename?: "BannerItem";
    Alt?: Maybe<Scalars["String"]["output"]>;
    BackgroundLink?: Maybe<ContentUrl>;
    ButtonLink?: Maybe<ContentUrl>;
    ButtonText?: Maybe<Scalars["String"]["output"]>;
    ButtonType?: Maybe<Scalars["String"]["output"]>;
    ImageDesktop?: Maybe<ContentReference>;
    ImageMobile?: Maybe<ContentReference>;
    IsFullWidthImage?: Maybe<Scalars["Boolean"]["output"]>;
    Loading?: Maybe<Scalars["String"]["output"]>;
    RichText?: Maybe<RichText>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type BannerItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type BannerItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BannerItemAutocomplete = {
  __typename?: "BannerItemAutocomplete";
  BackgroundLink?: Maybe<ContentUrlAutocomplete>;
  ButtonLink?: Maybe<ContentUrlAutocomplete>;
  ImageDesktop?: Maybe<ContentReferenceAutocomplete>;
  ImageMobile?: Maybe<ContentReferenceAutocomplete>;
  RichText?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BannerItemFacet = {
  __typename?: "BannerItemFacet";
  BackgroundLink?: Maybe<ContentUrlFacet>;
  ButtonLink?: Maybe<ContentUrlFacet>;
  ImageDesktop?: Maybe<ContentReferenceFacet>;
  ImageMobile?: Maybe<ContentReferenceFacet>;
  RichText?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BannerItemOrderByInput = {
  BackgroundLink?: InputMaybe<ContentUrlOrderByInput>;
  ButtonLink?: InputMaybe<ContentUrlOrderByInput>;
  ImageDesktop?: InputMaybe<ContentReferenceOrderByInput>;
  ImageMobile?: InputMaybe<ContentReferenceOrderByInput>;
  RichText?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type BannerItemOutput = {
  __typename?: "BannerItemOutput";
  autocomplete?: Maybe<BannerItemAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<BannerItemFacet>;
  item?: Maybe<BannerItem>;
  items?: Maybe<Array<Maybe<BannerItem>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type BannerItemOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BannerItemWhereInput = {
  BackgroundLink?: InputMaybe<ContentUrlWhereInput>;
  ButtonLink?: InputMaybe<ContentUrlWhereInput>;
  ImageDesktop?: InputMaybe<ContentReferenceWhereInput>;
  ImageMobile?: InputMaybe<ContentReferenceWhereInput>;
  RichText?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BannerItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BannerItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BannerItemWhereInput>>>;
};

export type BlankExperience = IData &
  _IContent &
  _IExperience &
  _IPage & {
    __typename?: "BlankExperience";
    SeoSettings?: Maybe<PageSeoSettingsProperty>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    composition?: Maybe<CompositionStructureNode>;
  };

export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: "BlankExperienceAutocomplete";
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: "BlankExperienceFacet";
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: "BlankExperienceOutput";
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlankExperienceWhereInput = {
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData &
  _IComponent &
  _IContent &
  _ISection & {
    __typename?: "BlankSection";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    composition?: Maybe<CompositionStructureNode>;
  };

export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: "BlankSectionAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: "BlankSectionFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: "BlankSectionOutput";
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type ButtonElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ButtonElement";
    ButtonLink?: Maybe<ContentUrl>;
    ButtonText?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    className?: Maybe<Scalars["String"]["output"]>;
  };

export type ButtonElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ButtonElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonElementAutocomplete = {
  __typename?: "ButtonElementAutocomplete";
  ButtonLink?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonElementFacet = {
  __typename?: "ButtonElementFacet";
  ButtonLink?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ButtonElementOrderByInput = {
  ButtonLink?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ButtonElementOutput = {
  __typename?: "ButtonElementOutput";
  autocomplete?: Maybe<ButtonElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ButtonElementFacet>;
  item?: Maybe<ButtonElement>;
  items?: Maybe<Array<Maybe<ButtonElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ButtonElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ButtonElementWhereInput = {
  ButtonLink?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonElementWhereInput>>>;
};

export type Company = IData &
  _IComponent &
  _IContent & {
    __typename?: "Company";
    Logo?: Maybe<ContentReference>;
    Name?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type Company_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Company_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CompanyAutocomplete = {
  __typename?: "CompanyAutocomplete";
  Logo?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CompanyFacet = {
  __typename?: "CompanyFacet";
  Logo?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CompanyOrderByInput = {
  Logo?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CompanyOutput = {
  __typename?: "CompanyOutput";
  autocomplete?: Maybe<CompanyAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<CompanyFacet>;
  item?: Maybe<Company>;
  items?: Maybe<Array<Maybe<Company>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompanyWhereInput = {
  Logo?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CompanyWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CompanyWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CompanyWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode &
  ICompositionNode & {
    __typename?: "CompositionComponentNode";
    component?: Maybe<_IComponent>;
    displayName?: Maybe<Scalars["String"]["output"]>;
    displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
    displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
    key?: Maybe<Scalars["String"]["output"]>;
    layoutType?: Maybe<Scalars["String"]["output"]>;
    nodeType?: Maybe<Scalars["String"]["output"]>;
    type?: Maybe<Scalars["String"]["output"]>;
  };

export type CompositionDisplaySetting = {
  __typename?: "CompositionDisplaySetting";
  key?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: "CompositionDisplaySettingAutocomplete";
  key?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  value?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type CompositionDisplaySettingAutocompletekeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionDisplaySettingAutocompletevalueArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionDisplaySettingFacet = {
  __typename?: "CompositionDisplaySettingFacet";
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};

export type CompositionDisplaySettingFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingFacetvalueArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: "CompositionNode";
  displayName?: Maybe<Scalars["String"]["output"]>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  layoutType?: Maybe<Scalars["String"]["output"]>;
  nodeType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type CompositionStructureNode = ICompositionNode &
  ICompositionStructureNode & {
    __typename?: "CompositionStructureNode";
    component?: Maybe<_IComponent>;
    displayName?: Maybe<Scalars["String"]["output"]>;
    displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
    displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
    key?: Maybe<Scalars["String"]["output"]>;
    layoutType?: Maybe<Scalars["String"]["output"]>;
    nodeType?: Maybe<Scalars["String"]["output"]>;
    nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
    type?: Maybe<Scalars["String"]["output"]>;
  };

export type CompositionStructureNodeAutocomplete = {
  __typename?: "CompositionStructureNodeAutocomplete";
  displayName?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  key?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  layoutType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  nodeType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type CompositionStructureNodeAutocompletedisplayNameArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeAutocompletekeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeAutocompletelayoutTypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeAutocompletenodeTypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeAutocompletetypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type CompositionStructureNodeFacet = {
  __typename?: "CompositionStructureNodeFacet";
  component?: Maybe<_IComponentFacet>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};

export type CompositionStructureNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeFacetlayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component?: InputMaybe<_IComponentOrderByInput>;
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component?: InputMaybe<_IComponentWhereInput>;
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContainerElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ContainerElement";
    Items?: Maybe<Array<Maybe<ContentReference>>>;
    TypeOfItems?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type ContainerElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContainerElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContainerElementAutocomplete = {
  __typename?: "ContainerElementAutocomplete";
  Items?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContainerElementFacet = {
  __typename?: "ContainerElementFacet";
  Items?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContainerElementOrderByInput = {
  Items?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ContainerElementOutput = {
  __typename?: "ContainerElementOutput";
  autocomplete?: Maybe<ContainerElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ContainerElementFacet>;
  item?: Maybe<ContainerElement>;
  items?: Maybe<Array<Maybe<ContainerElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ContainerElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContainerElementWhereInput = {
  Items?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ContainerElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContainerElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContainerElementWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: "ContentMetadata";
  changeset?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["DateTime"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["DateTime"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  published?: Maybe<Scalars["DateTime"]["output"]>;
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: "ContentReference";
  key?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: "ContentReferenceAutocomplete";
  key?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};

export type ContentReferenceAutocompletekeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentReferenceFacet = {
  __typename?: "ContentReferenceFacet";
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};

export type ContentReferenceFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentTextElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ContentTextElement";
    Heading?: Maybe<RichText>;
    Paragraph?: Maybe<RichText>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type ContentTextElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentTextElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentTextElementAutocomplete = {
  __typename?: "ContentTextElementAutocomplete";
  Heading?: Maybe<RichTextAutocomplete>;
  Paragraph?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentTextElementFacet = {
  __typename?: "ContentTextElementFacet";
  Heading?: Maybe<RichTextFacet>;
  Paragraph?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentTextElementOrderByInput = {
  Heading?: InputMaybe<RichTextOrderByInput>;
  Paragraph?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ContentTextElementOutput = {
  __typename?: "ContentTextElementOutput";
  autocomplete?: Maybe<ContentTextElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ContentTextElementFacet>;
  item?: Maybe<ContentTextElement>;
  items?: Maybe<Array<Maybe<ContentTextElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ContentTextElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentTextElementWhereInput = {
  Heading?: InputMaybe<RichTextWhereInput>;
  Paragraph?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentTextElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentTextElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentTextElementWhereInput>>>;
};

export type ContentUrl = {
  __typename?: "ContentUrl";
  base?: Maybe<Scalars["String"]["output"]>;
  default?: Maybe<Scalars["String"]["output"]>;
  graph?: Maybe<Scalars["String"]["output"]>;
  hierarchical?: Maybe<Scalars["String"]["output"]>;
  internal?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ContentUrlAutocomplete = {
  __typename?: "ContentUrlAutocomplete";
  base?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  default?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  graph?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  internal?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  type?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlAutocompletegraphArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ContentUrlFacet = {
  __typename?: "ContentUrlFacet";
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};

export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlFacetgraphArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: "Data";
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type DataOutput = {
  __typename?: "DataOutput";
  cursor?: Maybe<Scalars["String"]["output"]>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: "DateFacet";
  count?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = "DAY",
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = "HOUR",
  /** Defined as 1000 milliseconds each. */
  MINUTE = "MINUTE",
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars["Int"]["input"]>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars["Date"]["input"]>;
  rate?: InputMaybe<Scalars["Float"]["input"]>;
  scale?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DefaultVideo = IData &
  _IContent &
  _IMedia &
  _IVideo & {
    __typename?: "DefaultVideo";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type DefaultVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type DefaultVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultVideoAutocomplete = {
  __typename?: "DefaultVideoAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultVideoFacet = {
  __typename?: "DefaultVideoFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultVideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type DefaultVideoOutput = {
  __typename?: "DefaultVideoOutput";
  autocomplete?: Maybe<DefaultVideoAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<DefaultVideoFacet>;
  item?: Maybe<DefaultVideo>;
  items?: Maybe<Array<Maybe<DefaultVideo>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type DefaultVideoOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DefaultVideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
};

export type Dictionary = IData &
  _IComponent &
  _IContent & {
    __typename?: "Dictionary";
    DictionaryItems?: Maybe<Array<Maybe<DictionaryItemProperty>>>;
    DictionaryKey?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type DictionaryDictionaryKeyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Dictionary_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Dictionary_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryAutocomplete = {
  __typename?: "DictionaryAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryFacet = {
  __typename?: "DictionaryFacet";
  DictionaryItems?: Maybe<Array<Maybe<StringFacet>>>;
  DictionaryKey?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DictionaryFacetDictionaryItemsArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryFacetDictionaryKeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryItem = IData &
  _IComponent &
  _IContent & {
    __typename?: "DictionaryItem";
    DictionaryItemKey?: Maybe<Scalars["String"]["output"]>;
    DictionaryItemValue?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type DictionaryItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type DictionaryItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryItemAutocomplete = {
  __typename?: "DictionaryItemAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryItemFacet = {
  __typename?: "DictionaryItemFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DictionaryItemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type DictionaryItemOutput = {
  __typename?: "DictionaryItemOutput";
  autocomplete?: Maybe<DictionaryItemAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<DictionaryItemFacet>;
  item?: Maybe<DictionaryItem>;
  items?: Maybe<Array<Maybe<DictionaryItem>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type DictionaryItemOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DictionaryItemProperty = {
  __typename?: "DictionaryItemProperty";
  DictionaryItemKey?: Maybe<Scalars["String"]["output"]>;
  DictionaryItemValue?: Maybe<Scalars["String"]["output"]>;
};

export type DictionaryItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
};

export type DictionaryOrderByInput = {
  DictionaryItems?: InputMaybe<OrderBy>;
  DictionaryKey?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type DictionaryOutput = {
  __typename?: "DictionaryOutput";
  autocomplete?: Maybe<DictionaryAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<DictionaryFacet>;
  item?: Maybe<Dictionary>;
  items?: Maybe<Array<Maybe<Dictionary>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type DictionaryOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DictionaryWhereInput = {
  DictionaryItems?: InputMaybe<StringFilterInput>;
  DictionaryKey?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  LOG = "LOG",
  /** Do not apply any multiplier to the field value */
  NONE = "NONE",
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  RECIPROCAL = "RECIPROCAL",
  /** Take the square root of the field value */
  SQRT = "SQRT",
  /** Square the field value (multiply it by itself) */
  SQUARE = "SQUARE",
}

export type HeaderBlock = IData &
  _IComponent &
  _IContent & {
    __typename?: "HeaderBlock";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    site_logo?: Maybe<ContentReference>;
    site_logo_dark?: Maybe<ContentReference>;
    site_main_navigation?: Maybe<Array<Maybe<_IContent>>>;
    site_utility_navigation?: Maybe<Array<Maybe<_IContent>>>;
  };

export type HeaderBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type HeaderBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderBlockAutocomplete = {
  __typename?: "HeaderBlockAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  site_logo?: Maybe<ContentReferenceAutocomplete>;
  site_logo_dark?: Maybe<ContentReferenceAutocomplete>;
  site_main_navigation?: Maybe<_IContentAutocomplete>;
  site_utility_navigation?: Maybe<_IContentAutocomplete>;
};

export type HeaderBlockFacet = {
  __typename?: "HeaderBlockFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
  site_logo?: Maybe<ContentReferenceFacet>;
  site_logo_dark?: Maybe<ContentReferenceFacet>;
  site_main_navigation?: Maybe<_IContentFacet>;
  site_utility_navigation?: Maybe<_IContentFacet>;
};

export type HeaderBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  site_logo?: InputMaybe<ContentReferenceOrderByInput>;
  site_logo_dark?: InputMaybe<ContentReferenceOrderByInput>;
  site_main_navigation?: InputMaybe<_IContentOrderByInput>;
  site_utility_navigation?: InputMaybe<_IContentOrderByInput>;
};

export type HeaderBlockOutput = {
  __typename?: "HeaderBlockOutput";
  autocomplete?: Maybe<HeaderBlockAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<HeaderBlockFacet>;
  item?: Maybe<HeaderBlock>;
  items?: Maybe<Array<Maybe<HeaderBlock>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type HeaderBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HeaderBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  site_logo?: InputMaybe<ContentReferenceWhereInput>;
  site_logo_dark?: InputMaybe<ContentReferenceWhereInput>;
  site_main_navigation?: InputMaybe<_IContentWhereInput>;
  site_utility_navigation?: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "HeadingElement";
    Heading?: Maybe<RichText>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type HeadingElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type HeadingElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: "HeadingElementAutocomplete";
  Heading?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: "HeadingElementFacet";
  Heading?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  Heading?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type HeadingElementOutput = {
  __typename?: "HeadingElementOutput";
  autocomplete?: Maybe<HeadingElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<HeadingElementFacet>;
  item?: Maybe<HeadingElement>;
  items?: Maybe<Array<Maybe<HeadingElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type HeadingElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HeadingElementWhereInput = {
  Heading?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  endToken?: InputMaybe<Scalars["String"]["input"]>;
  startToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  layoutType?: Maybe<Scalars["String"]["output"]>;
  nodeType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars["String"]["output"]>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  layoutType?: Maybe<Scalars["String"]["output"]>;
  nodeType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: "ICompositionNodeAutocomplete";
  displayName?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  key?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  layoutType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  nodeType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  type?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type ICompositionNodeAutocompletedisplayNameArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeAutocompletekeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeAutocompletelayoutTypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeAutocompletenodeTypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeAutocompletetypeArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type ICompositionNodeFacet = {
  __typename?: "ICompositionNodeFacet";
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};

export type ICompositionNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeFacetlayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  layoutType?: Maybe<Scalars["String"]["output"]>;
  nodeType?: Maybe<Scalars["String"]["output"]>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["DateTime"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["DateTime"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  published?: Maybe<Scalars["DateTime"]["output"]>;
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: "IContentMetadataAutocomplete";
  changeset?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  key?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  locale?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  status?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  variation?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  version?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type IContentMetadataAutocompletechangesetArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletefallbackForLocaleArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompletevariationArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type IContentMetadataFacet = {
  __typename?: "IContentMetadataFacet";
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  variation?: Maybe<Array<Maybe<StringFacet>>>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};

export type IContentMetadataFacetchangesetArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetcreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetfallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IContentMetadataFacetsortOrderArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetvariationArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  variation?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  variation?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars["String"]["output"]>;
  container?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["DateTime"]["output"]>;
  createdBy?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  expired?: Maybe<Scalars["DateTime"]["output"]>;
  fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["DateTime"]["output"]>;
  lastModifiedBy?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  owner?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  published?: Maybe<Scalars["DateTime"]["output"]>;
  routeSegment?: Maybe<Scalars["String"]["output"]>;
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["DateTime"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  displayOption?: Maybe<Scalars["String"]["output"]>;
  fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["DateTime"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  published?: Maybe<Scalars["DateTime"]["output"]>;
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars["String"]["output"]>;
  container?: Maybe<Scalars["String"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["DateTime"]["output"]>;
  createdBy?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  expired?: Maybe<Scalars["DateTime"]["output"]>;
  fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["DateTime"]["output"]>;
  lastModifiedBy?: Maybe<Scalars["String"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  locales?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  published?: Maybe<Scalars["DateTime"]["output"]>;
  routeSegment?: Maybe<Scalars["String"]["output"]>;
  sortOrder?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Image = IData &
  _IContent &
  _IImage &
  _IMedia & {
    __typename?: "Image";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: "ImageAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageBackground = IData &
  _IComponent &
  _IContent & {
    __typename?: "ImageBackground";
    Alt?: Maybe<Scalars["String"]["output"]>;
    ImageDesktop?: Maybe<ContentReference>;
    ImageMobile?: Maybe<ContentReference>;
    IsFullIWidthImage?: Maybe<Scalars["Boolean"]["output"]>;
    Loading?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type ImageBackground_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageBackground_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageBackgroundAutocomplete = {
  __typename?: "ImageBackgroundAutocomplete";
  ImageDesktop?: Maybe<ContentReferenceAutocomplete>;
  ImageMobile?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageBackgroundFacet = {
  __typename?: "ImageBackgroundFacet";
  ImageDesktop?: Maybe<ContentReferenceFacet>;
  ImageMobile?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageBackgroundOrderByInput = {
  ImageDesktop?: InputMaybe<ContentReferenceOrderByInput>;
  ImageMobile?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImageBackgroundOutput = {
  __typename?: "ImageBackgroundOutput";
  autocomplete?: Maybe<ImageBackgroundAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ImageBackgroundFacet>;
  item?: Maybe<ImageBackground>;
  items?: Maybe<Array<Maybe<ImageBackground>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageBackgroundOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImageBackgroundWhereInput = {
  ImageDesktop?: InputMaybe<ContentReferenceWhereInput>;
  ImageMobile?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageBackgroundWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageBackgroundWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageBackgroundWhereInput>>>;
};

export type ImageFacet = {
  __typename?: "ImageFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageItemElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ImageItemElement";
    Alt?: Maybe<Scalars["String"]["output"]>;
    ImageDesktop?: Maybe<ContentReference>;
    ImageMobile?: Maybe<ContentReference>;
    IsBackground?: Maybe<Scalars["Boolean"]["output"]>;
    IsFullWidthImage?: Maybe<Scalars["Boolean"]["output"]>;
    Loading?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type ImageItemElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageItemElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageItemElementAutocomplete = {
  __typename?: "ImageItemElementAutocomplete";
  ImageDesktop?: Maybe<ContentReferenceAutocomplete>;
  ImageMobile?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageItemElementFacet = {
  __typename?: "ImageItemElementFacet";
  ImageDesktop?: Maybe<ContentReferenceFacet>;
  ImageMobile?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageItemElementOrderByInput = {
  ImageDesktop?: InputMaybe<ContentReferenceOrderByInput>;
  ImageMobile?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImageItemElementOutput = {
  __typename?: "ImageItemElementOutput";
  autocomplete?: Maybe<ImageItemElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ImageItemElementFacet>;
  item?: Maybe<ImageItemElement>;
  items?: Maybe<Array<Maybe<ImageItemElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageItemElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImageItemElementWhereInput = {
  ImageDesktop?: InputMaybe<ContentReferenceWhereInput>;
  ImageMobile?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageItemElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageItemElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageItemElementWhereInput>>>;
};

export type ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImageOutput = {
  __typename?: "ImageOutput";
  autocomplete?: Maybe<ImageAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ImageFacet>;
  item?: Maybe<Image>;
  items?: Maybe<Array<Maybe<Image>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImageTextItemElement = IData &
  _IComponent &
  _IContent & {
    __typename?: "ImageTextItemElement";
    Alt?: Maybe<Scalars["String"]["output"]>;
    BackgroundLink?: Maybe<ContentUrl>;
    ButtonLink?: Maybe<ContentUrl>;
    ButtonText?: Maybe<Scalars["String"]["output"]>;
    ContentImagePosition?: Maybe<Scalars["String"]["output"]>;
    Heading?: Maybe<RichText>;
    Image?: Maybe<ContentReference>;
    ImageMobile?: Maybe<ContentReference>;
    IsFullWidthImage?: Maybe<Scalars["Boolean"]["output"]>;
    Loading?: Maybe<Scalars["String"]["output"]>;
    RichText?: Maybe<RichText>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type ImageTextItemElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageTextItemElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageTextItemElementAutocomplete = {
  __typename?: "ImageTextItemElementAutocomplete";
  BackgroundLink?: Maybe<ContentUrlAutocomplete>;
  ButtonLink?: Maybe<ContentUrlAutocomplete>;
  Heading?: Maybe<RichTextAutocomplete>;
  Image?: Maybe<ContentReferenceAutocomplete>;
  ImageMobile?: Maybe<ContentReferenceAutocomplete>;
  RichText?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageTextItemElementFacet = {
  __typename?: "ImageTextItemElementFacet";
  BackgroundLink?: Maybe<ContentUrlFacet>;
  ButtonLink?: Maybe<ContentUrlFacet>;
  Heading?: Maybe<RichTextFacet>;
  Image?: Maybe<ContentReferenceFacet>;
  ImageMobile?: Maybe<ContentReferenceFacet>;
  RichText?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageTextItemElementOrderByInput = {
  BackgroundLink?: InputMaybe<ContentUrlOrderByInput>;
  ButtonLink?: InputMaybe<ContentUrlOrderByInput>;
  Heading?: InputMaybe<RichTextOrderByInput>;
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  ImageMobile?: InputMaybe<ContentReferenceOrderByInput>;
  RichText?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImageTextItemElementOutput = {
  __typename?: "ImageTextItemElementOutput";
  autocomplete?: Maybe<ImageTextItemElementAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<ImageTextItemElementFacet>;
  item?: Maybe<ImageTextItemElement>;
  items?: Maybe<Array<Maybe<ImageTextItemElement>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageTextItemElementOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImageTextItemElementWhereInput = {
  BackgroundLink?: InputMaybe<ContentUrlWhereInput>;
  ButtonLink?: InputMaybe<ContentUrlWhereInput>;
  Heading?: InputMaybe<RichTextWhereInput>;
  Image?: InputMaybe<ContentReferenceWhereInput>;
  ImageMobile?: InputMaybe<ContentReferenceWhereInput>;
  RichText?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageTextItemElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageTextItemElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageTextItemElementWhereInput>>>;
};

export type ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata &
  IInstanceMetadata & {
    __typename?: "InstanceMetadata";
    changeset?: Maybe<Scalars["String"]["output"]>;
    container?: Maybe<Scalars["String"]["output"]>;
    created?: Maybe<Scalars["DateTime"]["output"]>;
    createdBy?: Maybe<Scalars["String"]["output"]>;
    displayName?: Maybe<Scalars["String"]["output"]>;
    expired?: Maybe<Scalars["DateTime"]["output"]>;
    fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
    key?: Maybe<Scalars["String"]["output"]>;
    lastModified?: Maybe<Scalars["DateTime"]["output"]>;
    lastModifiedBy?: Maybe<Scalars["String"]["output"]>;
    locale?: Maybe<Scalars["String"]["output"]>;
    locales?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    owner?: Maybe<Scalars["String"]["output"]>;
    path?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    published?: Maybe<Scalars["DateTime"]["output"]>;
    routeSegment?: Maybe<Scalars["String"]["output"]>;
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    status?: Maybe<Scalars["String"]["output"]>;
    types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    url?: Maybe<ContentUrl>;
    variation?: Maybe<Scalars["String"]["output"]>;
    version?: Maybe<Scalars["String"]["output"]>;
  };

export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars["Int"]["input"]>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars["Int"]["input"]>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type ItemMetadata = IContentMetadata &
  IItemMetadata & {
    __typename?: "ItemMetadata";
    changeset?: Maybe<Scalars["String"]["output"]>;
    created?: Maybe<Scalars["DateTime"]["output"]>;
    displayName?: Maybe<Scalars["String"]["output"]>;
    displayOption?: Maybe<Scalars["String"]["output"]>;
    fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
    key?: Maybe<Scalars["String"]["output"]>;
    lastModified?: Maybe<Scalars["DateTime"]["output"]>;
    locale?: Maybe<Scalars["String"]["output"]>;
    published?: Maybe<Scalars["DateTime"]["output"]>;
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    status?: Maybe<Scalars["String"]["output"]>;
    types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    url?: Maybe<ContentUrl>;
    variation?: Maybe<Scalars["String"]["output"]>;
    version?: Maybe<Scalars["String"]["output"]>;
  };

export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Link = {
  __typename?: "Link";
  target?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<ContentUrl>;
};

export type LinktextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: "LinkAutocomplete";
  target?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  title?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};

export type LinkAutocompletetargetArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type LinkAutocompletetitleArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
};

export type LinkFacet = {
  __typename?: "LinkFacet";
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};

export type LinkFacettargetArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkFacettextArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkFacettitleArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  ASSETS = "ASSETS",
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  DEFAULT = "DEFAULT",
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  ITEMS = "ITEMS",
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  PATH = "PATH",
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = "ALL",
  NEUTRAL = "NEUTRAL",
  en = "en",
}

export type MediaMetadata = IContentMetadata &
  IInstanceMetadata &
  IMediaMetadata & {
    __typename?: "MediaMetadata";
    changeset?: Maybe<Scalars["String"]["output"]>;
    container?: Maybe<Scalars["String"]["output"]>;
    content?: Maybe<Scalars["String"]["output"]>;
    created?: Maybe<Scalars["DateTime"]["output"]>;
    createdBy?: Maybe<Scalars["String"]["output"]>;
    displayName?: Maybe<Scalars["String"]["output"]>;
    expired?: Maybe<Scalars["DateTime"]["output"]>;
    fallbackForLocale?: Maybe<Scalars["String"]["output"]>;
    key?: Maybe<Scalars["String"]["output"]>;
    lastModified?: Maybe<Scalars["DateTime"]["output"]>;
    lastModifiedBy?: Maybe<Scalars["String"]["output"]>;
    locale?: Maybe<Scalars["String"]["output"]>;
    locales?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    mimeType?: Maybe<Scalars["String"]["output"]>;
    owner?: Maybe<Scalars["String"]["output"]>;
    path?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    published?: Maybe<Scalars["DateTime"]["output"]>;
    routeSegment?: Maybe<Scalars["String"]["output"]>;
    sortOrder?: Maybe<Scalars["Int"]["output"]>;
    status?: Maybe<Scalars["String"]["output"]>;
    thumbnail?: Maybe<Scalars["String"]["output"]>;
    types?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    url?: Maybe<ContentUrl>;
    variation?: Maybe<Scalars["String"]["output"]>;
    version?: Maybe<Scalars["String"]["output"]>;
  };

export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData &
  _IComponent &
  _IContent & {
    __typename?: "MegaMenuGroupBlock";
    MegaMenuContentArea?: Maybe<Array<Maybe<_IContent>>>;
    MegaMenuUrl?: Maybe<ContentUrl>;
    MenuMenuHeading?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type MegaMenuGroupBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: "MegaMenuGroupBlockAutocomplete";
  MegaMenuContentArea?: Maybe<_IContentAutocomplete>;
  MegaMenuUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: "MegaMenuGroupBlockFacet";
  MegaMenuContentArea?: Maybe<_IContentFacet>;
  MegaMenuUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: "MegaMenuGroupBlockOutput";
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  item?: Maybe<MegaMenuGroupBlock>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type MegaMenuGroupBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type NavigationMenuBlock = IData &
  _IComponent &
  _IContent & {
    __typename?: "NavigationMenuBlock";
    MenuNavigationHeading?: Maybe<Scalars["String"]["output"]>;
    NavigationLinks?: Maybe<Array<Maybe<Link>>>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type NavigationMenuBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NavigationMenuBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavigationMenuBlockAutocomplete = {
  __typename?: "NavigationMenuBlockAutocomplete";
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NavigationMenuBlockFacet = {
  __typename?: "NavigationMenuBlockFacet";
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NavigationMenuBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type NavigationMenuBlockOutput = {
  __typename?: "NavigationMenuBlockOutput";
  autocomplete?: Maybe<NavigationMenuBlockAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<NavigationMenuBlockFacet>;
  item?: Maybe<NavigationMenuBlock>;
  items?: Maybe<Array<Maybe<NavigationMenuBlock>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type NavigationMenuBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NavigationMenuBlockProperty = {
  __typename?: "NavigationMenuBlockProperty";
  MenuNavigationHeading?: Maybe<Scalars["String"]["output"]>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
};

export type NavigationMenuBlockPropertyFacet = {
  __typename?: "NavigationMenuBlockPropertyFacet";
  NavigationLinks?: Maybe<LinkFacet>;
};

export type NavigationMenuBlockPropertyOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
};

export type NavigationMenuBlockPropertyWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
};

export type NavigationMenuBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: "NumberFacet";
  count?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OfficeLocation = IData &
  _IComponent &
  _IContent & {
    __typename?: "OfficeLocation";
    OfficeAddressCity?: Maybe<Scalars["String"]["output"]>;
    OfficeAddressCountry?: Maybe<Scalars["String"]["output"]>;
    OfficeAddressPostalCode?: Maybe<Scalars["String"]["output"]>;
    OfficeAddressStreet1?: Maybe<Scalars["String"]["output"]>;
    OfficeAddressStreet2?: Maybe<Scalars["String"]["output"]>;
    OfficeEmail?: Maybe<Scalars["String"]["output"]>;
    OfficePhone?: Maybe<Scalars["String"]["output"]>;
    OfficeTitle?: Maybe<Scalars["String"]["output"]>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type OfficeLocation_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type OfficeLocation_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OfficeLocationAutocomplete = {
  __typename?: "OfficeLocationAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OfficeLocationFacet = {
  __typename?: "OfficeLocationFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OfficeLocationOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OfficeLocationOutput = {
  __typename?: "OfficeLocationOutput";
  autocomplete?: Maybe<OfficeLocationAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<OfficeLocationFacet>;
  item?: Maybe<OfficeLocation>;
  items?: Maybe<Array<Maybe<OfficeLocation>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type OfficeLocationOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OfficeLocationWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
};

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

export enum OrderByFacetType {
  COUNT = "COUNT",
  VALUE = "VALUE",
}

export type PageSeoSettings = IData &
  _IComponent &
  _IContent & {
    __typename?: "PageSeoSettings";
    MetaDescription?: Maybe<Scalars["String"]["output"]>;
    MetaKeywords?: Maybe<Scalars["String"]["output"]>;
    MetaTitle?: Maybe<Scalars["String"]["output"]>;
    ThumbnailImage?: Maybe<ContentReference>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type PageSeoSettings_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type PageSeoSettings_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: "PageSeoSettingsAutocomplete";
  ThumbnailImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: "PageSeoSettingsFacet";
  ThumbnailImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  ThumbnailImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PageSeoSettingsOutput = {
  __typename?: "PageSeoSettingsOutput";
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<PageSeoSettingsFacet>;
  item?: Maybe<PageSeoSettings>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type PageSeoSettingsOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PageSeoSettingsProperty = {
  __typename?: "PageSeoSettingsProperty";
  MetaDescription?: Maybe<Scalars["String"]["output"]>;
  MetaKeywords?: Maybe<Scalars["String"]["output"]>;
  MetaTitle?: Maybe<Scalars["String"]["output"]>;
  ThumbnailImage?: Maybe<ContentReference>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: "PageSeoSettingsPropertyAutocomplete";
  ThumbnailImage?: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: "PageSeoSettingsPropertyFacet";
  ThumbnailImage?: Maybe<ContentReferenceFacet>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  ThumbnailImage?: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  ThumbnailImage?: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  ThumbnailImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type Query = {
  __typename?: "Query";
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BannerItem?: Maybe<BannerItemOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ButtonElement?: Maybe<ButtonElementOutput>;
  Company?: Maybe<CompanyOutput>;
  ContainerElement?: Maybe<ContainerElementOutput>;
  ContentTextElement?: Maybe<ContentTextElementOutput>;
  Data?: Maybe<DataOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageBackground?: Maybe<ImageBackgroundOutput>;
  ImageItemElement?: Maybe<ImageItemElementOutput>;
  ImageTextItemElement?: Maybe<ImageTextItemElementOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Section?: Maybe<SectionOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};

export type QueryArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};

export type QueryArticleListElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleListElementWhereInput>;
};

export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};

export type QueryBannerItemArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerItemOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BannerItemWhereInput>;
};

export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};

export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};

export type QueryButtonElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ButtonElementWhereInput>;
};

export type QueryCompanyArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type QueryContainerElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContainerElementWhereInput>;
};

export type QueryContentTextElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentTextElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContentTextElementWhereInput>;
};

export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};

export type QueryDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DefaultVideoWhereInput>;
};

export type QueryDictionaryArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DictionaryWhereInput>;
};

export type QueryDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DictionaryItemWhereInput>;
};

export type QueryHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeaderBlockWhereInput>;
};

export type QueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeadingElementWhereInput>;
};

export type QueryImageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageWhereInput>;
};

export type QueryImageBackgroundArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageBackgroundOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageBackgroundWhereInput>;
};

export type QueryImageItemElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageItemElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageItemElementWhereInput>;
};

export type QueryImageTextItemElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageTextItemElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageTextItemElementWhereInput>;
};

export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};

export type QueryNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};

export type QueryOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OfficeLocationWhereInput>;
};

export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};

export type QuerySectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};

export type QueryWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<WebsiteFooterWhereInput>;
};

export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};

export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};

export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};

export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};

export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};

export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};

export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};

export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};

export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: "QueryRef";
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BannerItem?: Maybe<BannerItemOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ButtonElement?: Maybe<ButtonElementOutput>;
  Company?: Maybe<CompanyOutput>;
  ContainerElement?: Maybe<ContainerElementOutput>;
  ContentTextElement?: Maybe<ContentTextElementOutput>;
  Data?: Maybe<DataOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageBackground?: Maybe<ImageBackgroundOutput>;
  ImageItemElement?: Maybe<ImageItemElementOutput>;
  ImageTextItemElement?: Maybe<ImageTextItemElementOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Section?: Maybe<SectionOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};

export type QueryRefArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};

export type QueryRefArticleListElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticleListElementWhereInput>;
};

export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};

export type QueryRefBannerItemArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerItemOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BannerItemWhereInput>;
};

export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};

export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};

export type QueryRefButtonElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ButtonElementWhereInput>;
};

export type QueryRefCompanyArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CompanyOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type QueryRefContainerElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContainerElementWhereInput>;
};

export type QueryRefContentTextElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentTextElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContentTextElementWhereInput>;
};

export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};

export type QueryRefDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DefaultVideoWhereInput>;
};

export type QueryRefDictionaryArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DictionaryWhereInput>;
};

export type QueryRefDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DictionaryItemWhereInput>;
};

export type QueryRefHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeaderBlockWhereInput>;
};

export type QueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeadingElementWhereInput>;
};

export type QueryRefImageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageWhereInput>;
};

export type QueryRefImageBackgroundArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageBackgroundOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageBackgroundWhereInput>;
};

export type QueryRefImageItemElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageItemElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageItemElementWhereInput>;
};

export type QueryRefImageTextItemElementArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageTextItemElementOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageTextItemElementWhereInput>;
};

export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};

export type QueryRefNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};

export type QueryRefOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OfficeLocationWhereInput>;
};

export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};

export type QueryRefSectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};

export type QueryRefWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<WebsiteFooterWhereInput>;
};

export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};

export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};

export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};

export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};

export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};

export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};

export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};

export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};

export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars["String"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: Scalars["Int"]["input"];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars["Int"]["input"];
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars["Int"]["input"]>;
  to?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum Ranking {
  BOOST_ONLY = "BOOST_ONLY",
  DOC = "DOC",
  RELEVANCE = "RELEVANCE",
  SEMANTIC = "SEMANTIC",
}

export type RichText = {
  __typename?: "RichText";
  html?: Maybe<Scalars["String"]["output"]>;
  json?: Maybe<Scalars["JSON"]["output"]>;
};

export type RichTextAutocomplete = {
  __typename?: "RichTextAutocomplete";
  html?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type RichTextAutocompletehtmlArgs = {
  limit?: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

export type RichTextFacet = {
  __typename?: "RichTextFacet";
  html?: Maybe<Array<Maybe<StringFacet>>>;
};

export type RichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars["String"]["input"]>>;
  limit?: Scalars["Int"]["input"];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars["Int"]["input"]>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars["String"]["input"]>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars["String"]["input"]>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars["String"]["input"]>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars["String"]["input"]>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type Section = IData &
  _IContent &
  _IPage & {
    __typename?: "Section";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SectionAutocomplete = {
  __typename?: "SectionAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SectionFacet = {
  __typename?: "SectionFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SectionOutput = {
  __typename?: "SectionOutput";
  autocomplete?: Maybe<SectionAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<SectionFacet>;
  item?: Maybe<Section>;
  items?: Maybe<Array<Maybe<Section>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
};

export type StringFacet = {
  __typename?: "StringFacet";
  count?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars["Int"]["input"]>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars["String"]["input"]>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars["String"]["input"]>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = "ONE",
  /** synonym slot 2 */
  TWO = "TWO",
}

export type SysContentFolder = IData &
  _IContent &
  _IFolder & {
    __typename?: "SysContentFolder";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: "SysContentFolderAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: "SysContentFolderFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SysContentFolderOutput = {
  __typename?: "SysContentFolderOutput";
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export enum VariationIncludeMode {
  ALL = "ALL",
  NONE = "NONE",
  SOME = "SOME",
}

export type VariationInput = {
  include?: InputMaybe<VariationIncludeMode>;
  includeOriginal?: InputMaybe<Scalars["Boolean"]["input"]>;
  value?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type WebsiteFooter = IData &
  _IComponent &
  _IContent & {
    __typename?: "WebsiteFooter";
    FooterFirstLinkList?: Maybe<NavigationMenuBlockProperty>;
    FooterLegalLinks?: Maybe<Array<Maybe<Link>>>;
    FooterLogo?: Maybe<ContentReference>;
    FooterLogoAltText?: Maybe<Scalars["String"]["output"]>;
    FooterMainOfficeLocation?: Maybe<Array<Maybe<_IContent>>>;
    FooterSecondLinkList?: Maybe<NavigationMenuBlockProperty>;
    FooterThirdLinkList?: Maybe<NavigationMenuBlockProperty>;
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type WebsiteFooter_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type WebsiteFooter_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type WebsiteFooterAutocomplete = {
  __typename?: "WebsiteFooterAutocomplete";
  FooterLegalLinks?: Maybe<LinkAutocomplete>;
  FooterLogo?: Maybe<ContentReferenceAutocomplete>;
  FooterMainOfficeLocation?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type WebsiteFooterFacet = {
  __typename?: "WebsiteFooterFacet";
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterLegalLinks?: Maybe<LinkFacet>;
  FooterLogo?: Maybe<ContentReferenceFacet>;
  FooterMainOfficeLocation?: Maybe<_IContentFacet>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type WebsiteFooterOrderByInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterLegalLinks?: InputMaybe<LinkOrderByInput>;
  FooterLogo?: InputMaybe<ContentReferenceOrderByInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentOrderByInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type WebsiteFooterOutput = {
  __typename?: "WebsiteFooterOutput";
  autocomplete?: Maybe<WebsiteFooterAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<WebsiteFooterFacet>;
  item?: Maybe<WebsiteFooter>;
  items?: Maybe<Array<Maybe<WebsiteFooter>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type WebsiteFooterOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type WebsiteFooterWhereInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterLegalLinks?: InputMaybe<LinkWhereInput>;
  FooterLogo?: InputMaybe<ContentReferenceWhereInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentWhereInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
};

export type _Component = IData &
  _IComponent &
  _IContent & {
    __typename?: "_Component";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: "_ComponentAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: "_ComponentFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _ComponentOutput = {
  __typename?: "_ComponentOutput";
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData &
  _IContent & {
    __typename?: "_Content";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: "_ContentAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: "_ContentFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _ContentOutput = {
  __typename?: "_ContentOutput";
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData &
  _IContent &
  _IExperience &
  _IPage & {
    __typename?: "_Experience";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    composition?: Maybe<CompositionStructureNode>;
  };

export type _Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: "_ExperienceAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: "_ExperienceFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: "_ExperienceOutput";
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData &
  _IContent &
  _IFolder & {
    __typename?: "_Folder";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: "_FolderAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: "_FolderFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _FolderOutput = {
  __typename?: "_FolderOutput";
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: "_IComponentFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _IComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: "_IContentAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: "_IContentFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
  composition?: Maybe<CompositionStructureNode>;
};

export type _IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
  composition?: Maybe<CompositionStructureNode>;
};

export type _ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars["Bool"]["output"]>;
  _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  _id?: Maybe<Scalars["String"]["output"]>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars["Date"]["output"]>;
  _score?: Maybe<Scalars["Float"]["output"]>;
};

export type _IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData &
  _IContent &
  _IImage &
  _IMedia & {
    __typename?: "_Image";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: "_ImageAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: "_ImageFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _ImageOutput = {
  __typename?: "_ImageOutput";
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData &
  _IContent &
  _IMedia & {
    __typename?: "_Media";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: "_MediaAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: "_MediaFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _MediaOutput = {
  __typename?: "_MediaOutput";
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData &
  _IContent &
  _IPage & {
    __typename?: "_Page";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: "_PageAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: "_PageFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _PageOutput = {
  __typename?: "_PageOutput";
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _PageOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData &
  _IComponent &
  _IContent &
  _ISection & {
    __typename?: "_Section";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
    composition?: Maybe<CompositionStructureNode>;
  };

export type _Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: "_SectionAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: "_SectionFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: "_SectionOutput";
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData &
  _IContent &
  _IMedia &
  _IVideo & {
    __typename?: "_Video";
    /** @deprecated Use `_link` field instead */
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars["Bool"]["output"]>;
    _fulltext?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    _id?: Maybe<Scalars["String"]["output"]>;
    _link?: Maybe<QueryRef>;
    _metadata?: Maybe<IContentMetadata>;
    _modified?: Maybe<Scalars["Date"]["output"]>;
    _score?: Maybe<Scalars["Float"]["output"]>;
  };

export type _Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: "_VideoAutocomplete";
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: "_VideoFacet";
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars["Float"]["input"]>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars["Float"]["input"]>;
};

export type _VideoOutput = {
  __typename?: "_VideoOutput";
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars["String"]["output"]>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type _VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum system_Locales {
  ALL = "ALL",
  NEUTRAL = "NEUTRAL",
}

export type ArticleListElementDataFragment = ({
  __typename?: "ArticleListElement";
  articleListCount?: number | null;
} & { " $fragmentRefs"?: { IElementData_ArticleListElement_Fragment: IElementData_ArticleListElement_Fragment } }) & {
  " $fragmentName"?: "ArticleListElementDataFragment";
};

export type BannerItemDataFragment = ({
  __typename?: "BannerItem";
  ButtonText?: string | null;
  Alt?: string | null;
  ButtonType?: string | null;
  IsFullWidthImage?: boolean | null;
  Loading?: string | null;
  RichText?:
    | ({ __typename?: "RichText" } & { " $fragmentRefs"?: { RichTextDataFragment: RichTextDataFragment } })
    | null;
  BackgroundLink?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
  ButtonLink?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
  ImageDesktop?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
  ImageMobile?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { IElementData_BannerItem_Fragment: IElementData_BannerItem_Fragment } }) & {
  " $fragmentName"?: "BannerItemDataFragment";
};

export type BlankExperienceDataFragment = ({
  __typename?: "BlankExperience";
  SeoSettings?:
    | ({ __typename?: "PageSeoSettingsProperty" } & {
        " $fragmentRefs"?: { PageSeoSettingsPropertyDataFragment: PageSeoSettingsPropertyDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { ExperienceData_BlankExperience_Fragment: ExperienceData_BlankExperience_Fragment } }) & {
  " $fragmentName"?: "BlankExperienceDataFragment";
};

type BlockData_ArticleListElement_Fragment = ({ __typename?: "ArticleListElement" } & {
  " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ArticleListElement_Fragment" };

type BlockData_BannerItem_Fragment = ({ __typename?: "BannerItem" } & {
  " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
}) & { " $fragmentName"?: "BlockData_BannerItem_Fragment" };

type BlockData_BlankSection_Fragment = ({ __typename?: "BlankSection" } & {
  " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
}) & { " $fragmentName"?: "BlockData_BlankSection_Fragment" };

type BlockData_ButtonElement_Fragment = ({ __typename?: "ButtonElement" } & {
  " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ButtonElement_Fragment" };

type BlockData_Company_Fragment = ({ __typename?: "Company" } & {
  " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
}) & { " $fragmentName"?: "BlockData_Company_Fragment" };

type BlockData_ContainerElement_Fragment = ({ __typename?: "ContainerElement" } & {
  " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ContainerElement_Fragment" };

type BlockData_ContentTextElement_Fragment = ({ __typename?: "ContentTextElement" } & {
  " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ContentTextElement_Fragment" };

type BlockData_Dictionary_Fragment = ({ __typename?: "Dictionary" } & {
  " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
}) & { " $fragmentName"?: "BlockData_Dictionary_Fragment" };

type BlockData_DictionaryItem_Fragment = ({ __typename?: "DictionaryItem" } & {
  " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
}) & { " $fragmentName"?: "BlockData_DictionaryItem_Fragment" };

type BlockData_HeaderBlock_Fragment = ({ __typename?: "HeaderBlock" } & {
  " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
}) & { " $fragmentName"?: "BlockData_HeaderBlock_Fragment" };

type BlockData_HeadingElement_Fragment = ({ __typename?: "HeadingElement" } & {
  " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
}) & { " $fragmentName"?: "BlockData_HeadingElement_Fragment" };

type BlockData_ImageBackground_Fragment = ({ __typename?: "ImageBackground" } & {
  " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
}) & { " $fragmentName"?: "BlockData_ImageBackground_Fragment" };

type BlockData_ImageItemElement_Fragment = ({ __typename?: "ImageItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ImageItemElement_Fragment" };

type BlockData_ImageTextItemElement_Fragment = ({ __typename?: "ImageTextItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
}) & { " $fragmentName"?: "BlockData_ImageTextItemElement_Fragment" };

type BlockData_MegaMenuGroupBlock_Fragment = ({ __typename?: "MegaMenuGroupBlock" } & {
  " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
}) & { " $fragmentName"?: "BlockData_MegaMenuGroupBlock_Fragment" };

type BlockData_NavigationMenuBlock_Fragment = ({ __typename?: "NavigationMenuBlock" } & {
  " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
}) & { " $fragmentName"?: "BlockData_NavigationMenuBlock_Fragment" };

type BlockData_OfficeLocation_Fragment = ({ __typename?: "OfficeLocation" } & {
  " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
}) & { " $fragmentName"?: "BlockData_OfficeLocation_Fragment" };

type BlockData_PageSeoSettings_Fragment = ({ __typename?: "PageSeoSettings" } & {
  " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
}) & { " $fragmentName"?: "BlockData_PageSeoSettings_Fragment" };

type BlockData_WebsiteFooter_Fragment = ({ __typename?: "WebsiteFooter" } & {
  " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
}) & { " $fragmentName"?: "BlockData_WebsiteFooter_Fragment" };

type BlockData__Component_Fragment = ({ __typename?: "_Component" } & {
  " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
}) & { " $fragmentName"?: "BlockData__Component_Fragment" };

type BlockData__Section_Fragment = ({ __typename?: "_Section" } & {
  " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
}) & { " $fragmentName"?: "BlockData__Section_Fragment" };

export type BlockDataFragment =
  | BlockData_ArticleListElement_Fragment
  | BlockData_BannerItem_Fragment
  | BlockData_BlankSection_Fragment
  | BlockData_ButtonElement_Fragment
  | BlockData_Company_Fragment
  | BlockData_ContainerElement_Fragment
  | BlockData_ContentTextElement_Fragment
  | BlockData_Dictionary_Fragment
  | BlockData_DictionaryItem_Fragment
  | BlockData_HeaderBlock_Fragment
  | BlockData_HeadingElement_Fragment
  | BlockData_ImageBackground_Fragment
  | BlockData_ImageItemElement_Fragment
  | BlockData_ImageTextItemElement_Fragment
  | BlockData_MegaMenuGroupBlock_Fragment
  | BlockData_NavigationMenuBlock_Fragment
  | BlockData_OfficeLocation_Fragment
  | BlockData_PageSeoSettings_Fragment
  | BlockData_WebsiteFooter_Fragment
  | BlockData__Component_Fragment
  | BlockData__Section_Fragment;

export type ButtonElementDataFragment = ({
  __typename?: "ButtonElement";
  ButtonText?: string | null;
  className?: string | null;
  ButtonLink?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentRefs"?: { IElementData_ButtonElement_Fragment: IElementData_ButtonElement_Fragment } }) & {
  " $fragmentName"?: "ButtonElementDataFragment";
};

export type CompanyDataFragment = ({
  __typename?: "Company";
  Name?: string | null;
  Logo?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { IElementData_Company_Fragment: IElementData_Company_Fragment } }) & {
  " $fragmentName"?: "CompanyDataFragment";
};

export type CompositionComponentNodeDataFragment = {
  __typename?: "CompositionComponentNode";
  type?: string | null;
  nodeType?: string | null;
  layoutType?: string | null;
  displayName?: string | null;
  key?: string | null;
  displayTemplateKey?: string | null;
  displaySettings?: Array<{
    __typename?: "CompositionDisplaySetting";
    key?: string | null;
    value?: string | null;
  } | null> | null;
  component?:
    | ({ __typename?: "ArticleListElement" } & {
        " $fragmentRefs"?: {
          BlockData_ArticleListElement_Fragment: BlockData_ArticleListElement_Fragment;
          ElementData_ArticleListElement_Fragment: ElementData_ArticleListElement_Fragment;
          ArticleListElementDataFragment: ArticleListElementDataFragment;
        };
      })
    | ({ __typename?: "BannerItem" } & {
        " $fragmentRefs"?: {
          BlockData_BannerItem_Fragment: BlockData_BannerItem_Fragment;
          ElementData_BannerItem_Fragment: ElementData_BannerItem_Fragment;
          BannerItemDataFragment: BannerItemDataFragment;
        };
      })
    | ({ __typename?: "BlankSection" } & {
        " $fragmentRefs"?: {
          BlockData_BlankSection_Fragment: BlockData_BlankSection_Fragment;
          ElementData_BlankSection_Fragment: ElementData_BlankSection_Fragment;
        };
      })
    | ({ __typename?: "ButtonElement" } & {
        " $fragmentRefs"?: {
          BlockData_ButtonElement_Fragment: BlockData_ButtonElement_Fragment;
          ElementData_ButtonElement_Fragment: ElementData_ButtonElement_Fragment;
          ButtonElementDataFragment: ButtonElementDataFragment;
        };
      })
    | ({ __typename?: "Company" } & {
        " $fragmentRefs"?: {
          BlockData_Company_Fragment: BlockData_Company_Fragment;
          ElementData_Company_Fragment: ElementData_Company_Fragment;
          CompanyDataFragment: CompanyDataFragment;
        };
      })
    | ({ __typename?: "ContainerElement" } & {
        " $fragmentRefs"?: {
          BlockData_ContainerElement_Fragment: BlockData_ContainerElement_Fragment;
          ElementData_ContainerElement_Fragment: ElementData_ContainerElement_Fragment;
        };
      })
    | ({ __typename?: "ContentTextElement" } & {
        " $fragmentRefs"?: {
          BlockData_ContentTextElement_Fragment: BlockData_ContentTextElement_Fragment;
          ElementData_ContentTextElement_Fragment: ElementData_ContentTextElement_Fragment;
          ContentTextElementDataFragment: ContentTextElementDataFragment;
        };
      })
    | ({ __typename?: "Dictionary" } & {
        " $fragmentRefs"?: {
          BlockData_Dictionary_Fragment: BlockData_Dictionary_Fragment;
          ElementData_Dictionary_Fragment: ElementData_Dictionary_Fragment;
          DictionaryDataFragment: DictionaryDataFragment;
        };
      })
    | ({ __typename?: "DictionaryItem" } & {
        " $fragmentRefs"?: {
          BlockData_DictionaryItem_Fragment: BlockData_DictionaryItem_Fragment;
          ElementData_DictionaryItem_Fragment: ElementData_DictionaryItem_Fragment;
          DictionaryItemDataFragment: DictionaryItemDataFragment;
        };
      })
    | ({ __typename?: "HeaderBlock" } & {
        " $fragmentRefs"?: {
          BlockData_HeaderBlock_Fragment: BlockData_HeaderBlock_Fragment;
          ElementData_HeaderBlock_Fragment: ElementData_HeaderBlock_Fragment;
          HeaderBlockDataFragment: HeaderBlockDataFragment;
        };
      })
    | ({ __typename?: "HeadingElement" } & {
        " $fragmentRefs"?: {
          BlockData_HeadingElement_Fragment: BlockData_HeadingElement_Fragment;
          ElementData_HeadingElement_Fragment: ElementData_HeadingElement_Fragment;
          HeadingElementDataFragment: HeadingElementDataFragment;
        };
      })
    | ({ __typename?: "ImageBackground" } & {
        " $fragmentRefs"?: {
          BlockData_ImageBackground_Fragment: BlockData_ImageBackground_Fragment;
          ElementData_ImageBackground_Fragment: ElementData_ImageBackground_Fragment;
          ImageBackgroundDataFragment: ImageBackgroundDataFragment;
        };
      })
    | ({ __typename?: "ImageItemElement" } & {
        " $fragmentRefs"?: {
          BlockData_ImageItemElement_Fragment: BlockData_ImageItemElement_Fragment;
          ElementData_ImageItemElement_Fragment: ElementData_ImageItemElement_Fragment;
          ImageItemElementDataFragment: ImageItemElementDataFragment;
        };
      })
    | ({ __typename?: "ImageTextItemElement" } & {
        " $fragmentRefs"?: {
          BlockData_ImageTextItemElement_Fragment: BlockData_ImageTextItemElement_Fragment;
          ElementData_ImageTextItemElement_Fragment: ElementData_ImageTextItemElement_Fragment;
        };
      })
    | ({ __typename?: "MegaMenuGroupBlock" } & {
        " $fragmentRefs"?: {
          BlockData_MegaMenuGroupBlock_Fragment: BlockData_MegaMenuGroupBlock_Fragment;
          ElementData_MegaMenuGroupBlock_Fragment: ElementData_MegaMenuGroupBlock_Fragment;
          MegaMenuGroupBlockDataFragment: MegaMenuGroupBlockDataFragment;
        };
      })
    | ({ __typename?: "NavigationMenuBlock" } & {
        " $fragmentRefs"?: {
          BlockData_NavigationMenuBlock_Fragment: BlockData_NavigationMenuBlock_Fragment;
          ElementData_NavigationMenuBlock_Fragment: ElementData_NavigationMenuBlock_Fragment;
          NavigationMenuBlockDataFragment: NavigationMenuBlockDataFragment;
        };
      })
    | ({ __typename?: "OfficeLocation" } & {
        " $fragmentRefs"?: {
          BlockData_OfficeLocation_Fragment: BlockData_OfficeLocation_Fragment;
          ElementData_OfficeLocation_Fragment: ElementData_OfficeLocation_Fragment;
          OfficeLocationDataFragment: OfficeLocationDataFragment;
        };
      })
    | ({ __typename?: "PageSeoSettings" } & {
        " $fragmentRefs"?: {
          BlockData_PageSeoSettings_Fragment: BlockData_PageSeoSettings_Fragment;
          ElementData_PageSeoSettings_Fragment: ElementData_PageSeoSettings_Fragment;
          PageSeoSettingsDataFragment: PageSeoSettingsDataFragment;
        };
      })
    | ({ __typename?: "WebsiteFooter" } & {
        " $fragmentRefs"?: {
          BlockData_WebsiteFooter_Fragment: BlockData_WebsiteFooter_Fragment;
          ElementData_WebsiteFooter_Fragment: ElementData_WebsiteFooter_Fragment;
        };
      })
    | ({ __typename?: "_Component" } & {
        " $fragmentRefs"?: {
          BlockData__Component_Fragment: BlockData__Component_Fragment;
          ElementData__Component_Fragment: ElementData__Component_Fragment;
        };
      })
    | ({ __typename?: "_Section" } & {
        " $fragmentRefs"?: {
          BlockData__Section_Fragment: BlockData__Section_Fragment;
          ElementData__Section_Fragment: ElementData__Section_Fragment;
        };
      })
    | null;
} & { " $fragmentName"?: "CompositionComponentNodeDataFragment" };

type CompositionNodeData_CompositionComponentNode_Fragment = {
  __typename?: "CompositionComponentNode";
  type?: string | null;
  nodeType?: string | null;
  layoutType?: string | null;
  displayName?: string | null;
  key?: string | null;
  displayTemplateKey?: string | null;
  displaySettings?: Array<{
    __typename?: "CompositionDisplaySetting";
    key?: string | null;
    value?: string | null;
  } | null> | null;
} & { " $fragmentName"?: "CompositionNodeData_CompositionComponentNode_Fragment" };

type CompositionNodeData_CompositionNode_Fragment = {
  __typename?: "CompositionNode";
  type?: string | null;
  nodeType?: string | null;
  layoutType?: string | null;
  displayName?: string | null;
  key?: string | null;
  displayTemplateKey?: string | null;
  displaySettings?: Array<{
    __typename?: "CompositionDisplaySetting";
    key?: string | null;
    value?: string | null;
  } | null> | null;
} & { " $fragmentName"?: "CompositionNodeData_CompositionNode_Fragment" };

type CompositionNodeData_CompositionStructureNode_Fragment = {
  __typename?: "CompositionStructureNode";
  type?: string | null;
  nodeType?: string | null;
  layoutType?: string | null;
  displayName?: string | null;
  key?: string | null;
  displayTemplateKey?: string | null;
  displaySettings?: Array<{
    __typename?: "CompositionDisplaySetting";
    key?: string | null;
    value?: string | null;
  } | null> | null;
} & { " $fragmentName"?: "CompositionNodeData_CompositionStructureNode_Fragment" };

export type CompositionNodeDataFragment =
  | CompositionNodeData_CompositionComponentNode_Fragment
  | CompositionNodeData_CompositionNode_Fragment
  | CompositionNodeData_CompositionStructureNode_Fragment;

export type ContentReferenceDataFragment = {
  __typename?: "ContentReference";
  key?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "ContentReferenceDataFragment" };

export type ContentTextElementDataFragment = ({
  __typename?: "ContentTextElement";
  Paragraph?:
    | ({ __typename?: "RichText" } & { " $fragmentRefs"?: { RichTextDataFragment: RichTextDataFragment } })
    | null;
  Heading?:
    | ({ __typename?: "RichText" } & { " $fragmentRefs"?: { RichTextDataFragment: RichTextDataFragment } })
    | null;
} & { " $fragmentRefs"?: { IElementData_ContentTextElement_Fragment: IElementData_ContentTextElement_Fragment } }) & {
  " $fragmentName"?: "ContentTextElementDataFragment";
};

export type ContentUrlDataFragment = {
  __typename?: "ContentUrl";
  type?: string | null;
  default?: string | null;
  hierarchical?: string | null;
  internal?: string | null;
  graph?: string | null;
  base?: string | null;
} & { " $fragmentName"?: "ContentUrlDataFragment" };

export type DictionaryDataFragment = ({
  __typename?: "Dictionary";
  DictionaryKey?: string | null;
  DictionaryItems?: Array<{
    __typename?: "DictionaryItemProperty";
    DictionaryItemKey?: string | null;
    DictionaryItemValue?: string | null;
  } | null> | null;
} & { " $fragmentRefs"?: { IElementData_Dictionary_Fragment: IElementData_Dictionary_Fragment } }) & {
  " $fragmentName"?: "DictionaryDataFragment";
};

export type DictionaryItemDataFragment = ({
  __typename?: "DictionaryItem";
  DictionaryItemKey?: string | null;
  DictionaryItemValue?: string | null;
} & { " $fragmentRefs"?: { IElementData_DictionaryItem_Fragment: IElementData_DictionaryItem_Fragment } }) & {
  " $fragmentName"?: "DictionaryItemDataFragment";
};

export type DictionaryItemPropertyDataFragment = {
  __typename?: "DictionaryItemProperty";
  DictionaryItemKey?: string | null;
  DictionaryItemValue?: string | null;
} & { " $fragmentName"?: "DictionaryItemPropertyDataFragment" };

type ElementData_ArticleListElement_Fragment = ({ __typename?: "ArticleListElement" } & {
  " $fragmentRefs"?: { IElementData_ArticleListElement_Fragment: IElementData_ArticleListElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ArticleListElement_Fragment" };

type ElementData_BannerItem_Fragment = ({ __typename?: "BannerItem" } & {
  " $fragmentRefs"?: { IElementData_BannerItem_Fragment: IElementData_BannerItem_Fragment };
}) & { " $fragmentName"?: "ElementData_BannerItem_Fragment" };

type ElementData_BlankSection_Fragment = ({ __typename?: "BlankSection" } & {
  " $fragmentRefs"?: { IElementData_BlankSection_Fragment: IElementData_BlankSection_Fragment };
}) & { " $fragmentName"?: "ElementData_BlankSection_Fragment" };

type ElementData_ButtonElement_Fragment = ({ __typename?: "ButtonElement" } & {
  " $fragmentRefs"?: { IElementData_ButtonElement_Fragment: IElementData_ButtonElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ButtonElement_Fragment" };

type ElementData_Company_Fragment = ({ __typename?: "Company" } & {
  " $fragmentRefs"?: { IElementData_Company_Fragment: IElementData_Company_Fragment };
}) & { " $fragmentName"?: "ElementData_Company_Fragment" };

type ElementData_ContainerElement_Fragment = ({ __typename?: "ContainerElement" } & {
  " $fragmentRefs"?: { IElementData_ContainerElement_Fragment: IElementData_ContainerElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ContainerElement_Fragment" };

type ElementData_ContentTextElement_Fragment = ({ __typename?: "ContentTextElement" } & {
  " $fragmentRefs"?: { IElementData_ContentTextElement_Fragment: IElementData_ContentTextElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ContentTextElement_Fragment" };

type ElementData_Dictionary_Fragment = ({ __typename?: "Dictionary" } & {
  " $fragmentRefs"?: { IElementData_Dictionary_Fragment: IElementData_Dictionary_Fragment };
}) & { " $fragmentName"?: "ElementData_Dictionary_Fragment" };

type ElementData_DictionaryItem_Fragment = ({ __typename?: "DictionaryItem" } & {
  " $fragmentRefs"?: { IElementData_DictionaryItem_Fragment: IElementData_DictionaryItem_Fragment };
}) & { " $fragmentName"?: "ElementData_DictionaryItem_Fragment" };

type ElementData_HeaderBlock_Fragment = ({ __typename?: "HeaderBlock" } & {
  " $fragmentRefs"?: { IElementData_HeaderBlock_Fragment: IElementData_HeaderBlock_Fragment };
}) & { " $fragmentName"?: "ElementData_HeaderBlock_Fragment" };

type ElementData_HeadingElement_Fragment = ({ __typename?: "HeadingElement" } & {
  " $fragmentRefs"?: { IElementData_HeadingElement_Fragment: IElementData_HeadingElement_Fragment };
}) & { " $fragmentName"?: "ElementData_HeadingElement_Fragment" };

type ElementData_ImageBackground_Fragment = ({ __typename?: "ImageBackground" } & {
  " $fragmentRefs"?: { IElementData_ImageBackground_Fragment: IElementData_ImageBackground_Fragment };
}) & { " $fragmentName"?: "ElementData_ImageBackground_Fragment" };

type ElementData_ImageItemElement_Fragment = ({ __typename?: "ImageItemElement" } & {
  " $fragmentRefs"?: { IElementData_ImageItemElement_Fragment: IElementData_ImageItemElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ImageItemElement_Fragment" };

type ElementData_ImageTextItemElement_Fragment = ({ __typename?: "ImageTextItemElement" } & {
  " $fragmentRefs"?: { IElementData_ImageTextItemElement_Fragment: IElementData_ImageTextItemElement_Fragment };
}) & { " $fragmentName"?: "ElementData_ImageTextItemElement_Fragment" };

type ElementData_MegaMenuGroupBlock_Fragment = ({ __typename?: "MegaMenuGroupBlock" } & {
  " $fragmentRefs"?: { IElementData_MegaMenuGroupBlock_Fragment: IElementData_MegaMenuGroupBlock_Fragment };
}) & { " $fragmentName"?: "ElementData_MegaMenuGroupBlock_Fragment" };

type ElementData_NavigationMenuBlock_Fragment = ({ __typename?: "NavigationMenuBlock" } & {
  " $fragmentRefs"?: { IElementData_NavigationMenuBlock_Fragment: IElementData_NavigationMenuBlock_Fragment };
}) & { " $fragmentName"?: "ElementData_NavigationMenuBlock_Fragment" };

type ElementData_OfficeLocation_Fragment = ({ __typename?: "OfficeLocation" } & {
  " $fragmentRefs"?: { IElementData_OfficeLocation_Fragment: IElementData_OfficeLocation_Fragment };
}) & { " $fragmentName"?: "ElementData_OfficeLocation_Fragment" };

type ElementData_PageSeoSettings_Fragment = ({ __typename?: "PageSeoSettings" } & {
  " $fragmentRefs"?: { IElementData_PageSeoSettings_Fragment: IElementData_PageSeoSettings_Fragment };
}) & { " $fragmentName"?: "ElementData_PageSeoSettings_Fragment" };

type ElementData_WebsiteFooter_Fragment = ({ __typename?: "WebsiteFooter" } & {
  " $fragmentRefs"?: { IElementData_WebsiteFooter_Fragment: IElementData_WebsiteFooter_Fragment };
}) & { " $fragmentName"?: "ElementData_WebsiteFooter_Fragment" };

type ElementData__Component_Fragment = ({ __typename?: "_Component" } & {
  " $fragmentRefs"?: { IElementData__Component_Fragment: IElementData__Component_Fragment };
}) & { " $fragmentName"?: "ElementData__Component_Fragment" };

type ElementData__Section_Fragment = ({ __typename?: "_Section" } & {
  " $fragmentRefs"?: { IElementData__Section_Fragment: IElementData__Section_Fragment };
}) & { " $fragmentName"?: "ElementData__Section_Fragment" };

export type ElementDataFragment =
  | ElementData_ArticleListElement_Fragment
  | ElementData_BannerItem_Fragment
  | ElementData_BlankSection_Fragment
  | ElementData_ButtonElement_Fragment
  | ElementData_Company_Fragment
  | ElementData_ContainerElement_Fragment
  | ElementData_ContentTextElement_Fragment
  | ElementData_Dictionary_Fragment
  | ElementData_DictionaryItem_Fragment
  | ElementData_HeaderBlock_Fragment
  | ElementData_HeadingElement_Fragment
  | ElementData_ImageBackground_Fragment
  | ElementData_ImageItemElement_Fragment
  | ElementData_ImageTextItemElement_Fragment
  | ElementData_MegaMenuGroupBlock_Fragment
  | ElementData_NavigationMenuBlock_Fragment
  | ElementData_OfficeLocation_Fragment
  | ElementData_PageSeoSettings_Fragment
  | ElementData_WebsiteFooter_Fragment
  | ElementData__Component_Fragment
  | ElementData__Section_Fragment;

type ExperienceData_BlankExperience_Fragment = {
  __typename?: "BlankExperience";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
  composition?:
    | ({
        __typename?: "CompositionStructureNode";
        nodes?: Array<
          | ({ __typename?: "CompositionComponentNode" } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                CompositionComponentNodeDataFragment: CompositionComponentNodeDataFragment;
              };
            })
          | ({ __typename?: "CompositionNode" } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
              };
            })
          | ({
              __typename?: "CompositionStructureNode";
              nodes?: Array<
                | ({ __typename?: "CompositionComponentNode" } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                    };
                  })
                | ({ __typename?: "CompositionNode" } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                    };
                  })
                | ({
                    __typename?: "CompositionStructureNode";
                    nodes?: Array<
                      | ({ __typename?: "CompositionComponentNode" } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                          };
                        })
                      | ({ __typename?: "CompositionNode" } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                          };
                        })
                      | ({
                          __typename?: "CompositionStructureNode";
                          nodes?: Array<
                            | ({ __typename?: "CompositionComponentNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                                  CompositionComponentNodeDataFragment: CompositionComponentNodeDataFragment;
                                };
                              })
                            | ({ __typename?: "CompositionNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                                };
                              })
                            | ({ __typename?: "CompositionStructureNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                                };
                              })
                            | null
                          > | null;
                        } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                          };
                        })
                      | null
                    > | null;
                  } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                    };
                  })
                | null
              > | null;
            } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
              };
            })
          | null
        > | null;
      } & {
        " $fragmentRefs"?: {
          CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
        };
      })
    | null;
} & { " $fragmentName"?: "ExperienceData_BlankExperience_Fragment" };

type ExperienceData__Experience_Fragment = {
  __typename?: "_Experience";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
  composition?:
    | ({
        __typename?: "CompositionStructureNode";
        nodes?: Array<
          | ({ __typename?: "CompositionComponentNode" } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                CompositionComponentNodeDataFragment: CompositionComponentNodeDataFragment;
              };
            })
          | ({ __typename?: "CompositionNode" } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
              };
            })
          | ({
              __typename?: "CompositionStructureNode";
              nodes?: Array<
                | ({ __typename?: "CompositionComponentNode" } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                    };
                  })
                | ({ __typename?: "CompositionNode" } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                    };
                  })
                | ({
                    __typename?: "CompositionStructureNode";
                    nodes?: Array<
                      | ({ __typename?: "CompositionComponentNode" } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                          };
                        })
                      | ({ __typename?: "CompositionNode" } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                          };
                        })
                      | ({
                          __typename?: "CompositionStructureNode";
                          nodes?: Array<
                            | ({ __typename?: "CompositionComponentNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionComponentNode_Fragment: CompositionNodeData_CompositionComponentNode_Fragment;
                                  CompositionComponentNodeDataFragment: CompositionComponentNodeDataFragment;
                                };
                              })
                            | ({ __typename?: "CompositionNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionNode_Fragment: CompositionNodeData_CompositionNode_Fragment;
                                };
                              })
                            | ({ __typename?: "CompositionStructureNode" } & {
                                " $fragmentRefs"?: {
                                  CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                                };
                              })
                            | null
                          > | null;
                        } & {
                          " $fragmentRefs"?: {
                            CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                          };
                        })
                      | null
                    > | null;
                  } & {
                    " $fragmentRefs"?: {
                      CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
                    };
                  })
                | null
              > | null;
            } & {
              " $fragmentRefs"?: {
                CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
              };
            })
          | null
        > | null;
      } & {
        " $fragmentRefs"?: {
          CompositionNodeData_CompositionStructureNode_Fragment: CompositionNodeData_CompositionStructureNode_Fragment;
        };
      })
    | null;
} & { " $fragmentName"?: "ExperienceData__Experience_Fragment" };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData__Experience_Fragment;

export type HeaderBlockDataFragment = ({
  __typename?: "HeaderBlock";
  site_logo?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
  site_logo_dark?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
  site_main_navigation?: Array<
    | ({ __typename?: "ArticleGroupPage" } & {
        " $fragmentRefs"?: { IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment };
      })
    | ({ __typename?: "ArticleListElement" } & {
        " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
      })
    | ({ __typename?: "ArticlePage" } & {
        " $fragmentRefs"?: { IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment };
      })
    | ({ __typename?: "BannerItem" } & {
        " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
      })
    | ({ __typename?: "BlankExperience" } & {
        " $fragmentRefs"?: { IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment };
      })
    | ({ __typename?: "BlankSection" } & {
        " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
      })
    | ({ __typename?: "ButtonElement" } & {
        " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
      })
    | ({ __typename?: "Company" } & {
        " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
      })
    | ({ __typename?: "ContainerElement" } & {
        " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
      })
    | ({ __typename?: "ContentTextElement" } & {
        " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
      })
    | ({ __typename?: "DefaultVideo" } & {
        " $fragmentRefs"?: { IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment };
      })
    | ({ __typename?: "Dictionary" } & {
        " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
      })
    | ({ __typename?: "DictionaryItem" } & {
        " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
      })
    | ({ __typename?: "HeaderBlock" } & {
        " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
      })
    | ({ __typename?: "HeadingElement" } & {
        " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
      })
    | ({ __typename?: "Image" } & { " $fragmentRefs"?: { IContentData_Image_Fragment: IContentData_Image_Fragment } })
    | ({ __typename?: "ImageBackground" } & {
        " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
      })
    | ({ __typename?: "ImageItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
      })
    | ({ __typename?: "ImageTextItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
      })
    | ({ __typename?: "MegaMenuGroupBlock" } & {
        " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
      })
    | ({ __typename?: "NavigationMenuBlock" } & {
        " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
      })
    | ({ __typename?: "OfficeLocation" } & {
        " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
      })
    | ({ __typename?: "PageSeoSettings" } & {
        " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
      })
    | ({ __typename?: "Section" } & {
        " $fragmentRefs"?: { IContentData_Section_Fragment: IContentData_Section_Fragment };
      })
    | ({ __typename?: "SysContentFolder" } & {
        " $fragmentRefs"?: { IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment };
      })
    | ({ __typename?: "WebsiteFooter" } & {
        " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
      })
    | ({ __typename?: "_Component" } & {
        " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
      })
    | ({ __typename?: "_Content" } & {
        " $fragmentRefs"?: { IContentData__Content_Fragment: IContentData__Content_Fragment };
      })
    | ({ __typename?: "_Experience" } & {
        " $fragmentRefs"?: { IContentData__Experience_Fragment: IContentData__Experience_Fragment };
      })
    | ({ __typename?: "_Folder" } & {
        " $fragmentRefs"?: { IContentData__Folder_Fragment: IContentData__Folder_Fragment };
      })
    | ({ __typename?: "_Image" } & {
        " $fragmentRefs"?: { IContentData__Image_Fragment: IContentData__Image_Fragment };
      })
    | ({ __typename?: "_Media" } & {
        " $fragmentRefs"?: { IContentData__Media_Fragment: IContentData__Media_Fragment };
      })
    | ({ __typename?: "_Page" } & { " $fragmentRefs"?: { IContentData__Page_Fragment: IContentData__Page_Fragment } })
    | ({ __typename?: "_Section" } & {
        " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
      })
    | ({ __typename?: "_Video" } & {
        " $fragmentRefs"?: { IContentData__Video_Fragment: IContentData__Video_Fragment };
      })
    | null
  > | null;
  site_utility_navigation?: Array<
    | ({ __typename?: "ArticleGroupPage" } & {
        " $fragmentRefs"?: { IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment };
      })
    | ({ __typename?: "ArticleListElement" } & {
        " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
      })
    | ({ __typename?: "ArticlePage" } & {
        " $fragmentRefs"?: { IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment };
      })
    | ({ __typename?: "BannerItem" } & {
        " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
      })
    | ({ __typename?: "BlankExperience" } & {
        " $fragmentRefs"?: { IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment };
      })
    | ({ __typename?: "BlankSection" } & {
        " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
      })
    | ({ __typename?: "ButtonElement" } & {
        " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
      })
    | ({ __typename?: "Company" } & {
        " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
      })
    | ({ __typename?: "ContainerElement" } & {
        " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
      })
    | ({ __typename?: "ContentTextElement" } & {
        " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
      })
    | ({ __typename?: "DefaultVideo" } & {
        " $fragmentRefs"?: { IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment };
      })
    | ({ __typename?: "Dictionary" } & {
        " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
      })
    | ({ __typename?: "DictionaryItem" } & {
        " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
      })
    | ({ __typename?: "HeaderBlock" } & {
        " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
      })
    | ({ __typename?: "HeadingElement" } & {
        " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
      })
    | ({ __typename?: "Image" } & { " $fragmentRefs"?: { IContentData_Image_Fragment: IContentData_Image_Fragment } })
    | ({ __typename?: "ImageBackground" } & {
        " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
      })
    | ({ __typename?: "ImageItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
      })
    | ({ __typename?: "ImageTextItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
      })
    | ({ __typename?: "MegaMenuGroupBlock" } & {
        " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
      })
    | ({ __typename?: "NavigationMenuBlock" } & {
        " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
      })
    | ({ __typename?: "OfficeLocation" } & {
        " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
      })
    | ({ __typename?: "PageSeoSettings" } & {
        " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
      })
    | ({ __typename?: "Section" } & {
        " $fragmentRefs"?: { IContentData_Section_Fragment: IContentData_Section_Fragment };
      })
    | ({ __typename?: "SysContentFolder" } & {
        " $fragmentRefs"?: { IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment };
      })
    | ({ __typename?: "WebsiteFooter" } & {
        " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
      })
    | ({ __typename?: "_Component" } & {
        " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
      })
    | ({ __typename?: "_Content" } & {
        " $fragmentRefs"?: { IContentData__Content_Fragment: IContentData__Content_Fragment };
      })
    | ({ __typename?: "_Experience" } & {
        " $fragmentRefs"?: { IContentData__Experience_Fragment: IContentData__Experience_Fragment };
      })
    | ({ __typename?: "_Folder" } & {
        " $fragmentRefs"?: { IContentData__Folder_Fragment: IContentData__Folder_Fragment };
      })
    | ({ __typename?: "_Image" } & {
        " $fragmentRefs"?: { IContentData__Image_Fragment: IContentData__Image_Fragment };
      })
    | ({ __typename?: "_Media" } & {
        " $fragmentRefs"?: { IContentData__Media_Fragment: IContentData__Media_Fragment };
      })
    | ({ __typename?: "_Page" } & { " $fragmentRefs"?: { IContentData__Page_Fragment: IContentData__Page_Fragment } })
    | ({ __typename?: "_Section" } & {
        " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
      })
    | ({ __typename?: "_Video" } & {
        " $fragmentRefs"?: { IContentData__Video_Fragment: IContentData__Video_Fragment };
      })
    | null
  > | null;
} & { " $fragmentRefs"?: { IElementData_HeaderBlock_Fragment: IElementData_HeaderBlock_Fragment } }) & {
  " $fragmentName"?: "HeaderBlockDataFragment";
};

export type HeadingElementDataFragment = ({
  __typename?: "HeadingElement";
  Heading?:
    | ({ __typename?: "RichText" } & { " $fragmentRefs"?: { RichTextDataFragment: RichTextDataFragment } })
    | null;
} & { " $fragmentRefs"?: { IElementData_HeadingElement_Fragment: IElementData_HeadingElement_Fragment } }) & {
  " $fragmentName"?: "HeadingElementDataFragment";
};

type IContentData_ArticleGroupPage_Fragment = {
  __typename?: "ArticleGroupPage";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ArticleGroupPage";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ArticleGroupPage_Fragment" };

type IContentData_ArticleListElement_Fragment = {
  __typename?: "ArticleListElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ArticleListElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ArticleListElement_Fragment" };

type IContentData_ArticlePage_Fragment = {
  __typename?: "ArticlePage";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ArticlePage";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ArticlePage_Fragment" };

type IContentData_BannerItem_Fragment = {
  __typename?: "BannerItem";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "BannerItem";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_BannerItem_Fragment" };

type IContentData_BlankExperience_Fragment = {
  __typename?: "BlankExperience";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "BlankExperience";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_BlankExperience_Fragment" };

type IContentData_BlankSection_Fragment = {
  __typename?: "BlankSection";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "BlankSection";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_BlankSection_Fragment" };

type IContentData_ButtonElement_Fragment = {
  __typename?: "ButtonElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ButtonElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ButtonElement_Fragment" };

type IContentData_Company_Fragment = {
  __typename?: "Company";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Company";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_Company_Fragment" };

type IContentData_ContainerElement_Fragment = {
  __typename?: "ContainerElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ContainerElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ContainerElement_Fragment" };

type IContentData_ContentTextElement_Fragment = {
  __typename?: "ContentTextElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ContentTextElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ContentTextElement_Fragment" };

type IContentData_DefaultVideo_Fragment = {
  __typename?: "DefaultVideo";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "DefaultVideo";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_DefaultVideo_Fragment" };

type IContentData_Dictionary_Fragment = {
  __typename?: "Dictionary";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Dictionary";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_Dictionary_Fragment" };

type IContentData_DictionaryItem_Fragment = {
  __typename?: "DictionaryItem";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "DictionaryItem";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_DictionaryItem_Fragment" };

type IContentData_HeaderBlock_Fragment = {
  __typename?: "HeaderBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "HeaderBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_HeaderBlock_Fragment" };

type IContentData_HeadingElement_Fragment = {
  __typename?: "HeadingElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "HeadingElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_HeadingElement_Fragment" };

type IContentData_Image_Fragment = {
  __typename?: "Image";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Image";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_Image_Fragment" };

type IContentData_ImageBackground_Fragment = {
  __typename?: "ImageBackground";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageBackground";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ImageBackground_Fragment" };

type IContentData_ImageItemElement_Fragment = {
  __typename?: "ImageItemElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageItemElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ImageItemElement_Fragment" };

type IContentData_ImageTextItemElement_Fragment = {
  __typename?: "ImageTextItemElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageTextItemElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_ImageTextItemElement_Fragment" };

type IContentData_MegaMenuGroupBlock_Fragment = {
  __typename?: "MegaMenuGroupBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "MegaMenuGroupBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_MegaMenuGroupBlock_Fragment" };

type IContentData_NavigationMenuBlock_Fragment = {
  __typename?: "NavigationMenuBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "NavigationMenuBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_NavigationMenuBlock_Fragment" };

type IContentData_OfficeLocation_Fragment = {
  __typename?: "OfficeLocation";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "OfficeLocation";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_OfficeLocation_Fragment" };

type IContentData_PageSeoSettings_Fragment = {
  __typename?: "PageSeoSettings";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "PageSeoSettings";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_PageSeoSettings_Fragment" };

type IContentData_Section_Fragment = {
  __typename?: "Section";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Section";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_Section_Fragment" };

type IContentData_SysContentFolder_Fragment = {
  __typename?: "SysContentFolder";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "SysContentFolder";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_SysContentFolder_Fragment" };

type IContentData_WebsiteFooter_Fragment = {
  __typename?: "WebsiteFooter";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "WebsiteFooter";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData_WebsiteFooter_Fragment" };

type IContentData__Component_Fragment = {
  __typename?: "_Component";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Component";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Component_Fragment" };

type IContentData__Content_Fragment = {
  __typename?: "_Content";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Content";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Content_Fragment" };

type IContentData__Experience_Fragment = {
  __typename?: "_Experience";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Experience";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Experience_Fragment" };

type IContentData__Folder_Fragment = {
  __typename?: "_Folder";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Folder";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Folder_Fragment" };

type IContentData__Image_Fragment = {
  __typename?: "_Image";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Image";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Image_Fragment" };

type IContentData__Media_Fragment = {
  __typename?: "_Media";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Media";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Media_Fragment" };

type IContentData__Page_Fragment = {
  __typename?: "_Page";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Page";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Page_Fragment" };

type IContentData__Section_Fragment = {
  __typename?: "_Section";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Section";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Section_Fragment" };

type IContentData__Video_Fragment = {
  __typename?: "_Video";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Video";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IContentData__Video_Fragment" };

export type IContentDataFragment =
  | IContentData_ArticleGroupPage_Fragment
  | IContentData_ArticleListElement_Fragment
  | IContentData_ArticlePage_Fragment
  | IContentData_BannerItem_Fragment
  | IContentData_BlankExperience_Fragment
  | IContentData_BlankSection_Fragment
  | IContentData_ButtonElement_Fragment
  | IContentData_Company_Fragment
  | IContentData_ContainerElement_Fragment
  | IContentData_ContentTextElement_Fragment
  | IContentData_DefaultVideo_Fragment
  | IContentData_Dictionary_Fragment
  | IContentData_DictionaryItem_Fragment
  | IContentData_HeaderBlock_Fragment
  | IContentData_HeadingElement_Fragment
  | IContentData_Image_Fragment
  | IContentData_ImageBackground_Fragment
  | IContentData_ImageItemElement_Fragment
  | IContentData_ImageTextItemElement_Fragment
  | IContentData_MegaMenuGroupBlock_Fragment
  | IContentData_NavigationMenuBlock_Fragment
  | IContentData_OfficeLocation_Fragment
  | IContentData_PageSeoSettings_Fragment
  | IContentData_Section_Fragment
  | IContentData_SysContentFolder_Fragment
  | IContentData_WebsiteFooter_Fragment
  | IContentData__Component_Fragment
  | IContentData__Content_Fragment
  | IContentData__Experience_Fragment
  | IContentData__Folder_Fragment
  | IContentData__Image_Fragment
  | IContentData__Media_Fragment
  | IContentData__Page_Fragment
  | IContentData__Section_Fragment
  | IContentData__Video_Fragment;

type IContentInfo_ContentMetadata_Fragment = {
  __typename?: "ContentMetadata";
  key?: string | null;
  locale?: string | null;
  fallbackForLocale?: string | null;
  version?: string | null;
  displayName?: string | null;
  types?: Array<string | null> | null;
  published?: any | null;
  status?: string | null;
  changeset?: string | null;
  created?: any | null;
  lastModified?: any | null;
  sortOrder?: number | null;
  variation?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "IContentInfo_ContentMetadata_Fragment" };

type IContentInfo_InstanceMetadata_Fragment = {
  __typename?: "InstanceMetadata";
  key?: string | null;
  locale?: string | null;
  fallbackForLocale?: string | null;
  version?: string | null;
  displayName?: string | null;
  types?: Array<string | null> | null;
  published?: any | null;
  status?: string | null;
  changeset?: string | null;
  created?: any | null;
  lastModified?: any | null;
  sortOrder?: number | null;
  variation?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "IContentInfo_InstanceMetadata_Fragment" };

type IContentInfo_ItemMetadata_Fragment = {
  __typename?: "ItemMetadata";
  key?: string | null;
  locale?: string | null;
  fallbackForLocale?: string | null;
  version?: string | null;
  displayName?: string | null;
  types?: Array<string | null> | null;
  published?: any | null;
  status?: string | null;
  changeset?: string | null;
  created?: any | null;
  lastModified?: any | null;
  sortOrder?: number | null;
  variation?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "IContentInfo_ItemMetadata_Fragment" };

type IContentInfo_MediaMetadata_Fragment = {
  __typename?: "MediaMetadata";
  key?: string | null;
  locale?: string | null;
  fallbackForLocale?: string | null;
  version?: string | null;
  displayName?: string | null;
  types?: Array<string | null> | null;
  published?: any | null;
  status?: string | null;
  changeset?: string | null;
  created?: any | null;
  lastModified?: any | null;
  sortOrder?: number | null;
  variation?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "IContentInfo_MediaMetadata_Fragment" };

export type IContentInfoFragment =
  | IContentInfo_ContentMetadata_Fragment
  | IContentInfo_InstanceMetadata_Fragment
  | IContentInfo_ItemMetadata_Fragment
  | IContentInfo_MediaMetadata_Fragment;

type IContentListItem_ArticleGroupPage_Fragment = ({ __typename?: "ArticleGroupPage" } & {
  " $fragmentRefs"?: { IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ArticleGroupPage_Fragment" };

type IContentListItem_ArticleListElement_Fragment = ({ __typename?: "ArticleListElement" } & {
  " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ArticleListElement_Fragment" };

type IContentListItem_ArticlePage_Fragment = ({ __typename?: "ArticlePage" } & {
  " $fragmentRefs"?: { IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ArticlePage_Fragment" };

type IContentListItem_BannerItem_Fragment = ({ __typename?: "BannerItem" } & {
  " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
}) & { " $fragmentName"?: "IContentListItem_BannerItem_Fragment" };

type IContentListItem_BlankExperience_Fragment = ({ __typename?: "BlankExperience" } & {
  " $fragmentRefs"?: { IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment };
}) & { " $fragmentName"?: "IContentListItem_BlankExperience_Fragment" };

type IContentListItem_BlankSection_Fragment = ({ __typename?: "BlankSection" } & {
  " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
}) & { " $fragmentName"?: "IContentListItem_BlankSection_Fragment" };

type IContentListItem_ButtonElement_Fragment = ({ __typename?: "ButtonElement" } & {
  " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ButtonElement_Fragment" };

type IContentListItem_Company_Fragment = ({ __typename?: "Company" } & {
  " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
}) & { " $fragmentName"?: "IContentListItem_Company_Fragment" };

type IContentListItem_ContainerElement_Fragment = ({ __typename?: "ContainerElement" } & {
  " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ContainerElement_Fragment" };

type IContentListItem_ContentTextElement_Fragment = ({ __typename?: "ContentTextElement" } & {
  " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ContentTextElement_Fragment" };

type IContentListItem_DefaultVideo_Fragment = ({ __typename?: "DefaultVideo" } & {
  " $fragmentRefs"?: { IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment };
}) & { " $fragmentName"?: "IContentListItem_DefaultVideo_Fragment" };

type IContentListItem_Dictionary_Fragment = ({ __typename?: "Dictionary" } & {
  " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
}) & { " $fragmentName"?: "IContentListItem_Dictionary_Fragment" };

type IContentListItem_DictionaryItem_Fragment = ({ __typename?: "DictionaryItem" } & {
  " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
}) & { " $fragmentName"?: "IContentListItem_DictionaryItem_Fragment" };

type IContentListItem_HeaderBlock_Fragment = ({ __typename?: "HeaderBlock" } & {
  " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
}) & { " $fragmentName"?: "IContentListItem_HeaderBlock_Fragment" };

type IContentListItem_HeadingElement_Fragment = ({ __typename?: "HeadingElement" } & {
  " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_HeadingElement_Fragment" };

type IContentListItem_Image_Fragment = ({ __typename?: "Image" } & {
  " $fragmentRefs"?: { IContentData_Image_Fragment: IContentData_Image_Fragment };
}) & { " $fragmentName"?: "IContentListItem_Image_Fragment" };

type IContentListItem_ImageBackground_Fragment = ({ __typename?: "ImageBackground" } & {
  " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ImageBackground_Fragment" };

type IContentListItem_ImageItemElement_Fragment = ({ __typename?: "ImageItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ImageItemElement_Fragment" };

type IContentListItem_ImageTextItemElement_Fragment = ({ __typename?: "ImageTextItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
}) & { " $fragmentName"?: "IContentListItem_ImageTextItemElement_Fragment" };

type IContentListItem_MegaMenuGroupBlock_Fragment = ({ __typename?: "MegaMenuGroupBlock" } & {
  " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
}) & { " $fragmentName"?: "IContentListItem_MegaMenuGroupBlock_Fragment" };

type IContentListItem_NavigationMenuBlock_Fragment = ({ __typename?: "NavigationMenuBlock" } & {
  " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
}) & { " $fragmentName"?: "IContentListItem_NavigationMenuBlock_Fragment" };

type IContentListItem_OfficeLocation_Fragment = ({ __typename?: "OfficeLocation" } & {
  " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
}) & { " $fragmentName"?: "IContentListItem_OfficeLocation_Fragment" };

type IContentListItem_PageSeoSettings_Fragment = ({ __typename?: "PageSeoSettings" } & {
  " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
}) & { " $fragmentName"?: "IContentListItem_PageSeoSettings_Fragment" };

type IContentListItem_Section_Fragment = ({ __typename?: "Section" } & {
  " $fragmentRefs"?: { IContentData_Section_Fragment: IContentData_Section_Fragment };
}) & { " $fragmentName"?: "IContentListItem_Section_Fragment" };

type IContentListItem_SysContentFolder_Fragment = ({ __typename?: "SysContentFolder" } & {
  " $fragmentRefs"?: { IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment };
}) & { " $fragmentName"?: "IContentListItem_SysContentFolder_Fragment" };

type IContentListItem_WebsiteFooter_Fragment = ({ __typename?: "WebsiteFooter" } & {
  " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
}) & { " $fragmentName"?: "IContentListItem_WebsiteFooter_Fragment" };

type IContentListItem__Component_Fragment = ({ __typename?: "_Component" } & {
  " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Component_Fragment" };

type IContentListItem__Content_Fragment = ({ __typename?: "_Content" } & {
  " $fragmentRefs"?: { IContentData__Content_Fragment: IContentData__Content_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Content_Fragment" };

type IContentListItem__Experience_Fragment = ({ __typename?: "_Experience" } & {
  " $fragmentRefs"?: { IContentData__Experience_Fragment: IContentData__Experience_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Experience_Fragment" };

type IContentListItem__Folder_Fragment = ({ __typename?: "_Folder" } & {
  " $fragmentRefs"?: { IContentData__Folder_Fragment: IContentData__Folder_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Folder_Fragment" };

type IContentListItem__Image_Fragment = ({ __typename?: "_Image" } & {
  " $fragmentRefs"?: { IContentData__Image_Fragment: IContentData__Image_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Image_Fragment" };

type IContentListItem__Media_Fragment = ({ __typename?: "_Media" } & {
  " $fragmentRefs"?: { IContentData__Media_Fragment: IContentData__Media_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Media_Fragment" };

type IContentListItem__Page_Fragment = ({ __typename?: "_Page" } & {
  " $fragmentRefs"?: { IContentData__Page_Fragment: IContentData__Page_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Page_Fragment" };

type IContentListItem__Section_Fragment = ({ __typename?: "_Section" } & {
  " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Section_Fragment" };

type IContentListItem__Video_Fragment = ({ __typename?: "_Video" } & {
  " $fragmentRefs"?: { IContentData__Video_Fragment: IContentData__Video_Fragment };
}) & { " $fragmentName"?: "IContentListItem__Video_Fragment" };

export type IContentListItemFragment =
  | IContentListItem_ArticleGroupPage_Fragment
  | IContentListItem_ArticleListElement_Fragment
  | IContentListItem_ArticlePage_Fragment
  | IContentListItem_BannerItem_Fragment
  | IContentListItem_BlankExperience_Fragment
  | IContentListItem_BlankSection_Fragment
  | IContentListItem_ButtonElement_Fragment
  | IContentListItem_Company_Fragment
  | IContentListItem_ContainerElement_Fragment
  | IContentListItem_ContentTextElement_Fragment
  | IContentListItem_DefaultVideo_Fragment
  | IContentListItem_Dictionary_Fragment
  | IContentListItem_DictionaryItem_Fragment
  | IContentListItem_HeaderBlock_Fragment
  | IContentListItem_HeadingElement_Fragment
  | IContentListItem_Image_Fragment
  | IContentListItem_ImageBackground_Fragment
  | IContentListItem_ImageItemElement_Fragment
  | IContentListItem_ImageTextItemElement_Fragment
  | IContentListItem_MegaMenuGroupBlock_Fragment
  | IContentListItem_NavigationMenuBlock_Fragment
  | IContentListItem_OfficeLocation_Fragment
  | IContentListItem_PageSeoSettings_Fragment
  | IContentListItem_Section_Fragment
  | IContentListItem_SysContentFolder_Fragment
  | IContentListItem_WebsiteFooter_Fragment
  | IContentListItem__Component_Fragment
  | IContentListItem__Content_Fragment
  | IContentListItem__Experience_Fragment
  | IContentListItem__Folder_Fragment
  | IContentListItem__Image_Fragment
  | IContentListItem__Media_Fragment
  | IContentListItem__Page_Fragment
  | IContentListItem__Section_Fragment
  | IContentListItem__Video_Fragment;

type IElementData_ArticleListElement_Fragment = {
  __typename?: "ArticleListElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ArticleListElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ArticleListElement_Fragment" };

type IElementData_BannerItem_Fragment = {
  __typename?: "BannerItem";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "BannerItem";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_BannerItem_Fragment" };

type IElementData_BlankSection_Fragment = {
  __typename?: "BlankSection";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "BlankSection";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_BlankSection_Fragment" };

type IElementData_ButtonElement_Fragment = {
  __typename?: "ButtonElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ButtonElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ButtonElement_Fragment" };

type IElementData_Company_Fragment = {
  __typename?: "Company";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Company";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_Company_Fragment" };

type IElementData_ContainerElement_Fragment = {
  __typename?: "ContainerElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ContainerElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ContainerElement_Fragment" };

type IElementData_ContentTextElement_Fragment = {
  __typename?: "ContentTextElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ContentTextElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ContentTextElement_Fragment" };

type IElementData_Dictionary_Fragment = {
  __typename?: "Dictionary";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "Dictionary";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_Dictionary_Fragment" };

type IElementData_DictionaryItem_Fragment = {
  __typename?: "DictionaryItem";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "DictionaryItem";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_DictionaryItem_Fragment" };

type IElementData_HeaderBlock_Fragment = {
  __typename?: "HeaderBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "HeaderBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_HeaderBlock_Fragment" };

type IElementData_HeadingElement_Fragment = {
  __typename?: "HeadingElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "HeadingElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_HeadingElement_Fragment" };

type IElementData_ImageBackground_Fragment = {
  __typename?: "ImageBackground";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageBackground";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ImageBackground_Fragment" };

type IElementData_ImageItemElement_Fragment = {
  __typename?: "ImageItemElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageItemElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ImageItemElement_Fragment" };

type IElementData_ImageTextItemElement_Fragment = {
  __typename?: "ImageTextItemElement";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "ImageTextItemElement";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_ImageTextItemElement_Fragment" };

type IElementData_MegaMenuGroupBlock_Fragment = {
  __typename?: "MegaMenuGroupBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "MegaMenuGroupBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_MegaMenuGroupBlock_Fragment" };

type IElementData_NavigationMenuBlock_Fragment = {
  __typename?: "NavigationMenuBlock";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "NavigationMenuBlock";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_NavigationMenuBlock_Fragment" };

type IElementData_OfficeLocation_Fragment = {
  __typename?: "OfficeLocation";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "OfficeLocation";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_OfficeLocation_Fragment" };

type IElementData_PageSeoSettings_Fragment = {
  __typename?: "PageSeoSettings";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "PageSeoSettings";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_PageSeoSettings_Fragment" };

type IElementData_WebsiteFooter_Fragment = {
  __typename?: "WebsiteFooter";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "WebsiteFooter";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData_WebsiteFooter_Fragment" };

type IElementData__Component_Fragment = {
  __typename?: "_Component";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Component";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData__Component_Fragment" };

type IElementData__Section_Fragment = {
  __typename?: "_Section";
  _deleted?: any | null;
  _fulltext?: Array<string | null> | null;
  _modified?: any | null;
  _score?: number | null;
  _id?: string | null;
  _type: "_Section";
  _metadata?:
    | ({ __typename?: "ContentMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ContentMetadata_Fragment: IContentInfo_ContentMetadata_Fragment };
      })
    | ({ __typename?: "InstanceMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_InstanceMetadata_Fragment: IContentInfo_InstanceMetadata_Fragment };
      })
    | ({ __typename?: "ItemMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_ItemMetadata_Fragment: IContentInfo_ItemMetadata_Fragment };
      })
    | ({ __typename?: "MediaMetadata" } & {
        " $fragmentRefs"?: { IContentInfo_MediaMetadata_Fragment: IContentInfo_MediaMetadata_Fragment };
      })
    | null;
} & { " $fragmentName"?: "IElementData__Section_Fragment" };

export type IElementDataFragment =
  | IElementData_ArticleListElement_Fragment
  | IElementData_BannerItem_Fragment
  | IElementData_BlankSection_Fragment
  | IElementData_ButtonElement_Fragment
  | IElementData_Company_Fragment
  | IElementData_ContainerElement_Fragment
  | IElementData_ContentTextElement_Fragment
  | IElementData_Dictionary_Fragment
  | IElementData_DictionaryItem_Fragment
  | IElementData_HeaderBlock_Fragment
  | IElementData_HeadingElement_Fragment
  | IElementData_ImageBackground_Fragment
  | IElementData_ImageItemElement_Fragment
  | IElementData_ImageTextItemElement_Fragment
  | IElementData_MegaMenuGroupBlock_Fragment
  | IElementData_NavigationMenuBlock_Fragment
  | IElementData_OfficeLocation_Fragment
  | IElementData_PageSeoSettings_Fragment
  | IElementData_WebsiteFooter_Fragment
  | IElementData__Component_Fragment
  | IElementData__Section_Fragment;

export type ImageBackgroundDataFragment = ({
  __typename?: "ImageBackground";
  Alt?: string | null;
  IsFullIWidthImage?: boolean | null;
  Loading?: string | null;
  ImageDesktop?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
  ImageMobile?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { IElementData_ImageBackground_Fragment: IElementData_ImageBackground_Fragment } }) & {
  " $fragmentName"?: "ImageBackgroundDataFragment";
};

export type ImageItemElementDataFragment = ({
  __typename?: "ImageItemElement";
  Loading?: string | null;
  Alt?: string | null;
  IsFullWidthImage?: boolean | null;
  ImageDesktop?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
  ImageMobile?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { IElementData_ImageItemElement_Fragment: IElementData_ImageItemElement_Fragment } }) & {
  " $fragmentName"?: "ImageItemElementDataFragment";
};

export type LinkDataFragment = {
  __typename?: "Link";
  title?: string | null;
  text?: string | null;
  target?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "LinkDataFragment" };

export type MegaMenuGroupBlockDataFragment = ({
  __typename?: "MegaMenuGroupBlock";
  MenuMenuHeading?: string | null;
  MegaMenuUrl?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
  MegaMenuContentArea?: Array<
    | ({ __typename?: "ArticleGroupPage" } & {
        " $fragmentRefs"?: { IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment };
      })
    | ({ __typename?: "ArticleListElement" } & {
        " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
      })
    | ({ __typename?: "ArticlePage" } & {
        " $fragmentRefs"?: { IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment };
      })
    | ({ __typename?: "BannerItem" } & {
        " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
      })
    | ({ __typename?: "BlankExperience" } & {
        " $fragmentRefs"?: { IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment };
      })
    | ({ __typename?: "BlankSection" } & {
        " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
      })
    | ({ __typename?: "ButtonElement" } & {
        " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
      })
    | ({ __typename?: "Company" } & {
        " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
      })
    | ({ __typename?: "ContainerElement" } & {
        " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
      })
    | ({ __typename?: "ContentTextElement" } & {
        " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
      })
    | ({ __typename?: "DefaultVideo" } & {
        " $fragmentRefs"?: { IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment };
      })
    | ({ __typename?: "Dictionary" } & {
        " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
      })
    | ({ __typename?: "DictionaryItem" } & {
        " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
      })
    | ({ __typename?: "HeaderBlock" } & {
        " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
      })
    | ({ __typename?: "HeadingElement" } & {
        " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
      })
    | ({ __typename?: "Image" } & { " $fragmentRefs"?: { IContentData_Image_Fragment: IContentData_Image_Fragment } })
    | ({ __typename?: "ImageBackground" } & {
        " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
      })
    | ({ __typename?: "ImageItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
      })
    | ({ __typename?: "ImageTextItemElement" } & {
        " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
      })
    | ({ __typename?: "MegaMenuGroupBlock" } & {
        " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
      })
    | ({ __typename?: "NavigationMenuBlock" } & {
        " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
      })
    | ({ __typename?: "OfficeLocation" } & {
        " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
      })
    | ({ __typename?: "PageSeoSettings" } & {
        " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
      })
    | ({ __typename?: "Section" } & {
        " $fragmentRefs"?: { IContentData_Section_Fragment: IContentData_Section_Fragment };
      })
    | ({ __typename?: "SysContentFolder" } & {
        " $fragmentRefs"?: { IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment };
      })
    | ({ __typename?: "WebsiteFooter" } & {
        " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
      })
    | ({ __typename?: "_Component" } & {
        " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
      })
    | ({ __typename?: "_Content" } & {
        " $fragmentRefs"?: { IContentData__Content_Fragment: IContentData__Content_Fragment };
      })
    | ({ __typename?: "_Experience" } & {
        " $fragmentRefs"?: { IContentData__Experience_Fragment: IContentData__Experience_Fragment };
      })
    | ({ __typename?: "_Folder" } & {
        " $fragmentRefs"?: { IContentData__Folder_Fragment: IContentData__Folder_Fragment };
      })
    | ({ __typename?: "_Image" } & {
        " $fragmentRefs"?: { IContentData__Image_Fragment: IContentData__Image_Fragment };
      })
    | ({ __typename?: "_Media" } & {
        " $fragmentRefs"?: { IContentData__Media_Fragment: IContentData__Media_Fragment };
      })
    | ({ __typename?: "_Page" } & { " $fragmentRefs"?: { IContentData__Page_Fragment: IContentData__Page_Fragment } })
    | ({ __typename?: "_Section" } & {
        " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
      })
    | ({ __typename?: "_Video" } & {
        " $fragmentRefs"?: { IContentData__Video_Fragment: IContentData__Video_Fragment };
      })
    | null
  > | null;
} & { " $fragmentRefs"?: { IElementData_MegaMenuGroupBlock_Fragment: IElementData_MegaMenuGroupBlock_Fragment } }) & {
  " $fragmentName"?: "MegaMenuGroupBlockDataFragment";
};

export type NavigationMenuBlockDataFragment = ({
  __typename?: "NavigationMenuBlock";
  MenuNavigationHeading?: string | null;
  NavigationLinks?: Array<
    ({ __typename?: "Link" } & { " $fragmentRefs"?: { LinkDataFragment: LinkDataFragment } }) | null
  > | null;
} & { " $fragmentRefs"?: { IElementData_NavigationMenuBlock_Fragment: IElementData_NavigationMenuBlock_Fragment } }) & {
  " $fragmentName"?: "NavigationMenuBlockDataFragment";
};

export type OfficeLocationDataFragment = ({
  __typename?: "OfficeLocation";
  OfficeTitle?: string | null;
  OfficeAddressStreet1?: string | null;
  OfficeAddressStreet2?: string | null;
  OfficeAddressCity?: string | null;
  OfficeAddressPostalCode?: string | null;
  OfficeAddressCountry?: string | null;
  OfficePhone?: string | null;
  OfficeEmail?: string | null;
} & { " $fragmentRefs"?: { IElementData_OfficeLocation_Fragment: IElementData_OfficeLocation_Fragment } }) & {
  " $fragmentName"?: "OfficeLocationDataFragment";
};

type PageData_ArticleGroupPage_Fragment = ({ __typename?: "ArticleGroupPage" } & {
  " $fragmentRefs"?: { IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment };
}) & { " $fragmentName"?: "PageData_ArticleGroupPage_Fragment" };

type PageData_ArticleListElement_Fragment = ({ __typename?: "ArticleListElement" } & {
  " $fragmentRefs"?: { IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment };
}) & { " $fragmentName"?: "PageData_ArticleListElement_Fragment" };

type PageData_ArticlePage_Fragment = ({ __typename?: "ArticlePage" } & {
  " $fragmentRefs"?: { IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment };
}) & { " $fragmentName"?: "PageData_ArticlePage_Fragment" };

type PageData_BannerItem_Fragment = ({ __typename?: "BannerItem" } & {
  " $fragmentRefs"?: { IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment };
}) & { " $fragmentName"?: "PageData_BannerItem_Fragment" };

type PageData_BlankExperience_Fragment = ({ __typename?: "BlankExperience" } & {
  " $fragmentRefs"?: { IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment };
}) & { " $fragmentName"?: "PageData_BlankExperience_Fragment" };

type PageData_BlankSection_Fragment = ({ __typename?: "BlankSection" } & {
  " $fragmentRefs"?: { IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment };
}) & { " $fragmentName"?: "PageData_BlankSection_Fragment" };

type PageData_ButtonElement_Fragment = ({ __typename?: "ButtonElement" } & {
  " $fragmentRefs"?: { IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment };
}) & { " $fragmentName"?: "PageData_ButtonElement_Fragment" };

type PageData_Company_Fragment = ({ __typename?: "Company" } & {
  " $fragmentRefs"?: { IContentData_Company_Fragment: IContentData_Company_Fragment };
}) & { " $fragmentName"?: "PageData_Company_Fragment" };

type PageData_ContainerElement_Fragment = ({ __typename?: "ContainerElement" } & {
  " $fragmentRefs"?: { IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment };
}) & { " $fragmentName"?: "PageData_ContainerElement_Fragment" };

type PageData_ContentTextElement_Fragment = ({ __typename?: "ContentTextElement" } & {
  " $fragmentRefs"?: { IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment };
}) & { " $fragmentName"?: "PageData_ContentTextElement_Fragment" };

type PageData_DefaultVideo_Fragment = ({ __typename?: "DefaultVideo" } & {
  " $fragmentRefs"?: { IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment };
}) & { " $fragmentName"?: "PageData_DefaultVideo_Fragment" };

type PageData_Dictionary_Fragment = ({ __typename?: "Dictionary" } & {
  " $fragmentRefs"?: { IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment };
}) & { " $fragmentName"?: "PageData_Dictionary_Fragment" };

type PageData_DictionaryItem_Fragment = ({ __typename?: "DictionaryItem" } & {
  " $fragmentRefs"?: { IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment };
}) & { " $fragmentName"?: "PageData_DictionaryItem_Fragment" };

type PageData_HeaderBlock_Fragment = ({ __typename?: "HeaderBlock" } & {
  " $fragmentRefs"?: { IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment };
}) & { " $fragmentName"?: "PageData_HeaderBlock_Fragment" };

type PageData_HeadingElement_Fragment = ({ __typename?: "HeadingElement" } & {
  " $fragmentRefs"?: { IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment };
}) & { " $fragmentName"?: "PageData_HeadingElement_Fragment" };

type PageData_Image_Fragment = ({ __typename?: "Image" } & {
  " $fragmentRefs"?: { IContentData_Image_Fragment: IContentData_Image_Fragment };
}) & { " $fragmentName"?: "PageData_Image_Fragment" };

type PageData_ImageBackground_Fragment = ({ __typename?: "ImageBackground" } & {
  " $fragmentRefs"?: { IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment };
}) & { " $fragmentName"?: "PageData_ImageBackground_Fragment" };

type PageData_ImageItemElement_Fragment = ({ __typename?: "ImageItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment };
}) & { " $fragmentName"?: "PageData_ImageItemElement_Fragment" };

type PageData_ImageTextItemElement_Fragment = ({ __typename?: "ImageTextItemElement" } & {
  " $fragmentRefs"?: { IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment };
}) & { " $fragmentName"?: "PageData_ImageTextItemElement_Fragment" };

type PageData_MegaMenuGroupBlock_Fragment = ({ __typename?: "MegaMenuGroupBlock" } & {
  " $fragmentRefs"?: { IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment };
}) & { " $fragmentName"?: "PageData_MegaMenuGroupBlock_Fragment" };

type PageData_NavigationMenuBlock_Fragment = ({ __typename?: "NavigationMenuBlock" } & {
  " $fragmentRefs"?: { IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment };
}) & { " $fragmentName"?: "PageData_NavigationMenuBlock_Fragment" };

type PageData_OfficeLocation_Fragment = ({ __typename?: "OfficeLocation" } & {
  " $fragmentRefs"?: { IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment };
}) & { " $fragmentName"?: "PageData_OfficeLocation_Fragment" };

type PageData_PageSeoSettings_Fragment = ({ __typename?: "PageSeoSettings" } & {
  " $fragmentRefs"?: { IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment };
}) & { " $fragmentName"?: "PageData_PageSeoSettings_Fragment" };

type PageData_Section_Fragment = ({ __typename?: "Section" } & {
  " $fragmentRefs"?: { IContentData_Section_Fragment: IContentData_Section_Fragment };
}) & { " $fragmentName"?: "PageData_Section_Fragment" };

type PageData_SysContentFolder_Fragment = ({ __typename?: "SysContentFolder" } & {
  " $fragmentRefs"?: { IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment };
}) & { " $fragmentName"?: "PageData_SysContentFolder_Fragment" };

type PageData_WebsiteFooter_Fragment = ({ __typename?: "WebsiteFooter" } & {
  " $fragmentRefs"?: { IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment };
}) & { " $fragmentName"?: "PageData_WebsiteFooter_Fragment" };

type PageData__Component_Fragment = ({ __typename?: "_Component" } & {
  " $fragmentRefs"?: { IContentData__Component_Fragment: IContentData__Component_Fragment };
}) & { " $fragmentName"?: "PageData__Component_Fragment" };

type PageData__Content_Fragment = ({ __typename?: "_Content" } & {
  " $fragmentRefs"?: { IContentData__Content_Fragment: IContentData__Content_Fragment };
}) & { " $fragmentName"?: "PageData__Content_Fragment" };

type PageData__Experience_Fragment = ({ __typename?: "_Experience" } & {
  " $fragmentRefs"?: { IContentData__Experience_Fragment: IContentData__Experience_Fragment };
}) & { " $fragmentName"?: "PageData__Experience_Fragment" };

type PageData__Folder_Fragment = ({ __typename?: "_Folder" } & {
  " $fragmentRefs"?: { IContentData__Folder_Fragment: IContentData__Folder_Fragment };
}) & { " $fragmentName"?: "PageData__Folder_Fragment" };

type PageData__Image_Fragment = ({ __typename?: "_Image" } & {
  " $fragmentRefs"?: { IContentData__Image_Fragment: IContentData__Image_Fragment };
}) & { " $fragmentName"?: "PageData__Image_Fragment" };

type PageData__Media_Fragment = ({ __typename?: "_Media" } & {
  " $fragmentRefs"?: { IContentData__Media_Fragment: IContentData__Media_Fragment };
}) & { " $fragmentName"?: "PageData__Media_Fragment" };

type PageData__Page_Fragment = ({ __typename?: "_Page" } & {
  " $fragmentRefs"?: { IContentData__Page_Fragment: IContentData__Page_Fragment };
}) & { " $fragmentName"?: "PageData__Page_Fragment" };

type PageData__Section_Fragment = ({ __typename?: "_Section" } & {
  " $fragmentRefs"?: { IContentData__Section_Fragment: IContentData__Section_Fragment };
}) & { " $fragmentName"?: "PageData__Section_Fragment" };

type PageData__Video_Fragment = ({ __typename?: "_Video" } & {
  " $fragmentRefs"?: { IContentData__Video_Fragment: IContentData__Video_Fragment };
}) & { " $fragmentName"?: "PageData__Video_Fragment" };

export type PageDataFragment =
  | PageData_ArticleGroupPage_Fragment
  | PageData_ArticleListElement_Fragment
  | PageData_ArticlePage_Fragment
  | PageData_BannerItem_Fragment
  | PageData_BlankExperience_Fragment
  | PageData_BlankSection_Fragment
  | PageData_ButtonElement_Fragment
  | PageData_Company_Fragment
  | PageData_ContainerElement_Fragment
  | PageData_ContentTextElement_Fragment
  | PageData_DefaultVideo_Fragment
  | PageData_Dictionary_Fragment
  | PageData_DictionaryItem_Fragment
  | PageData_HeaderBlock_Fragment
  | PageData_HeadingElement_Fragment
  | PageData_Image_Fragment
  | PageData_ImageBackground_Fragment
  | PageData_ImageItemElement_Fragment
  | PageData_ImageTextItemElement_Fragment
  | PageData_MegaMenuGroupBlock_Fragment
  | PageData_NavigationMenuBlock_Fragment
  | PageData_OfficeLocation_Fragment
  | PageData_PageSeoSettings_Fragment
  | PageData_Section_Fragment
  | PageData_SysContentFolder_Fragment
  | PageData_WebsiteFooter_Fragment
  | PageData__Component_Fragment
  | PageData__Content_Fragment
  | PageData__Experience_Fragment
  | PageData__Folder_Fragment
  | PageData__Image_Fragment
  | PageData__Media_Fragment
  | PageData__Page_Fragment
  | PageData__Section_Fragment
  | PageData__Video_Fragment;

export type PageSeoSettingsDataFragment = ({
  __typename?: "PageSeoSettings";
  MetaTitle?: string | null;
  MetaDescription?: string | null;
  MetaKeywords?: string | null;
  ThumbnailImage?:
    | ({ __typename?: "ContentReference" } & {
        " $fragmentRefs"?: { ContentReferenceDataFragment: ContentReferenceDataFragment };
      })
    | null;
} & { " $fragmentRefs"?: { IElementData_PageSeoSettings_Fragment: IElementData_PageSeoSettings_Fragment } }) & {
  " $fragmentName"?: "PageSeoSettingsDataFragment";
};

export type PageSeoSettingsPropertyDataFragment = {
  __typename?: "PageSeoSettingsProperty";
  MetaTitle?: string | null;
  MetaDescription?: string | null;
  MetaKeywords?: string | null;
  ThumbnailImage?:
    | ({ __typename?: "ContentReference" } & { " $fragmentRefs"?: { ReferenceDataFragment: ReferenceDataFragment } })
    | null;
} & { " $fragmentName"?: "PageSeoSettingsPropertyDataFragment" };

export type ReferenceDataFragment = {
  __typename?: "ContentReference";
  key?: string | null;
  url?:
    | ({ __typename?: "ContentUrl" } & { " $fragmentRefs"?: { ContentUrlDataFragment: ContentUrlDataFragment } })
    | null;
} & { " $fragmentName"?: "ReferenceDataFragment" };

export type RichTextDataFragment = { __typename?: "RichText"; html?: string | null; json?: any | null } & {
  " $fragmentName"?: "RichTextDataFragment";
};

export type getContentByIdQueryVariables = Exact<{
  key: Scalars["String"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
  changeset?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type getContentByIdQuery = {
  __typename?: "Query";
  content?: {
    __typename?: "_ContentOutput";
    total?: number | null;
    items?:
      | ({ __typename?: "ArticleGroupPage" } & {
          " $fragmentRefs"?: {
            IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment;
            PageData_ArticleGroupPage_Fragment: PageData_ArticleGroupPage_Fragment;
          };
        })
      | ({ __typename?: "ArticleListElement" } & {
          " $fragmentRefs"?: {
            IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment;
            PageData_ArticleListElement_Fragment: PageData_ArticleListElement_Fragment;
          };
        })
      | ({ __typename?: "ArticlePage" } & {
          " $fragmentRefs"?: {
            IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment;
            PageData_ArticlePage_Fragment: PageData_ArticlePage_Fragment;
          };
        })
      | ({ __typename?: "BannerItem" } & {
          " $fragmentRefs"?: {
            IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment;
            PageData_BannerItem_Fragment: PageData_BannerItem_Fragment;
          };
        })
      | ({ __typename?: "BlankExperience" } & {
          " $fragmentRefs"?: {
            IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment;
            PageData_BlankExperience_Fragment: PageData_BlankExperience_Fragment;
            BlankExperienceDataFragment: BlankExperienceDataFragment;
          };
        })
      | ({ __typename?: "BlankSection" } & {
          " $fragmentRefs"?: {
            IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment;
            PageData_BlankSection_Fragment: PageData_BlankSection_Fragment;
          };
        })
      | ({ __typename?: "ButtonElement" } & {
          " $fragmentRefs"?: {
            IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment;
            PageData_ButtonElement_Fragment: PageData_ButtonElement_Fragment;
          };
        })
      | ({ __typename?: "Company" } & {
          " $fragmentRefs"?: {
            IContentData_Company_Fragment: IContentData_Company_Fragment;
            PageData_Company_Fragment: PageData_Company_Fragment;
          };
        })
      | ({ __typename?: "ContainerElement" } & {
          " $fragmentRefs"?: {
            IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment;
            PageData_ContainerElement_Fragment: PageData_ContainerElement_Fragment;
          };
        })
      | ({ __typename?: "ContentTextElement" } & {
          " $fragmentRefs"?: {
            IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment;
            PageData_ContentTextElement_Fragment: PageData_ContentTextElement_Fragment;
          };
        })
      | ({ __typename?: "DefaultVideo" } & {
          " $fragmentRefs"?: {
            IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment;
            PageData_DefaultVideo_Fragment: PageData_DefaultVideo_Fragment;
          };
        })
      | ({ __typename?: "Dictionary" } & {
          " $fragmentRefs"?: {
            IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment;
            PageData_Dictionary_Fragment: PageData_Dictionary_Fragment;
          };
        })
      | ({ __typename?: "DictionaryItem" } & {
          " $fragmentRefs"?: {
            IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment;
            PageData_DictionaryItem_Fragment: PageData_DictionaryItem_Fragment;
          };
        })
      | ({ __typename?: "HeaderBlock" } & {
          " $fragmentRefs"?: {
            IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment;
            PageData_HeaderBlock_Fragment: PageData_HeaderBlock_Fragment;
          };
        })
      | ({ __typename?: "HeadingElement" } & {
          " $fragmentRefs"?: {
            IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment;
            PageData_HeadingElement_Fragment: PageData_HeadingElement_Fragment;
          };
        })
      | ({ __typename?: "Image" } & {
          " $fragmentRefs"?: {
            IContentData_Image_Fragment: IContentData_Image_Fragment;
            PageData_Image_Fragment: PageData_Image_Fragment;
          };
        })
      | ({ __typename?: "ImageBackground" } & {
          " $fragmentRefs"?: {
            IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment;
            PageData_ImageBackground_Fragment: PageData_ImageBackground_Fragment;
          };
        })
      | ({ __typename?: "ImageItemElement" } & {
          " $fragmentRefs"?: {
            IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment;
            PageData_ImageItemElement_Fragment: PageData_ImageItemElement_Fragment;
          };
        })
      | ({ __typename?: "ImageTextItemElement" } & {
          " $fragmentRefs"?: {
            IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment;
            PageData_ImageTextItemElement_Fragment: PageData_ImageTextItemElement_Fragment;
          };
        })
      | ({ __typename?: "MegaMenuGroupBlock" } & {
          " $fragmentRefs"?: {
            IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment;
            PageData_MegaMenuGroupBlock_Fragment: PageData_MegaMenuGroupBlock_Fragment;
          };
        })
      | ({ __typename?: "NavigationMenuBlock" } & {
          " $fragmentRefs"?: {
            IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment;
            PageData_NavigationMenuBlock_Fragment: PageData_NavigationMenuBlock_Fragment;
          };
        })
      | ({ __typename?: "OfficeLocation" } & {
          " $fragmentRefs"?: {
            IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment;
            PageData_OfficeLocation_Fragment: PageData_OfficeLocation_Fragment;
          };
        })
      | ({ __typename?: "PageSeoSettings" } & {
          " $fragmentRefs"?: {
            IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment;
            PageData_PageSeoSettings_Fragment: PageData_PageSeoSettings_Fragment;
          };
        })
      | ({ __typename?: "Section" } & {
          " $fragmentRefs"?: {
            IContentData_Section_Fragment: IContentData_Section_Fragment;
            PageData_Section_Fragment: PageData_Section_Fragment;
          };
        })
      | ({ __typename?: "SysContentFolder" } & {
          " $fragmentRefs"?: {
            IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment;
            PageData_SysContentFolder_Fragment: PageData_SysContentFolder_Fragment;
          };
        })
      | ({ __typename?: "WebsiteFooter" } & {
          " $fragmentRefs"?: {
            IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment;
            PageData_WebsiteFooter_Fragment: PageData_WebsiteFooter_Fragment;
          };
        })
      | ({ __typename?: "_Component" } & {
          " $fragmentRefs"?: {
            IContentData__Component_Fragment: IContentData__Component_Fragment;
            PageData__Component_Fragment: PageData__Component_Fragment;
          };
        })
      | ({ __typename?: "_Content" } & {
          " $fragmentRefs"?: {
            IContentData__Content_Fragment: IContentData__Content_Fragment;
            PageData__Content_Fragment: PageData__Content_Fragment;
          };
        })
      | ({ __typename?: "_Experience" } & {
          " $fragmentRefs"?: {
            IContentData__Experience_Fragment: IContentData__Experience_Fragment;
            PageData__Experience_Fragment: PageData__Experience_Fragment;
          };
        })
      | ({ __typename?: "_Folder" } & {
          " $fragmentRefs"?: {
            IContentData__Folder_Fragment: IContentData__Folder_Fragment;
            PageData__Folder_Fragment: PageData__Folder_Fragment;
          };
        })
      | ({ __typename?: "_Image" } & {
          " $fragmentRefs"?: {
            IContentData__Image_Fragment: IContentData__Image_Fragment;
            PageData__Image_Fragment: PageData__Image_Fragment;
          };
        })
      | ({ __typename?: "_Media" } & {
          " $fragmentRefs"?: {
            IContentData__Media_Fragment: IContentData__Media_Fragment;
            PageData__Media_Fragment: PageData__Media_Fragment;
          };
        })
      | ({ __typename?: "_Page" } & {
          " $fragmentRefs"?: {
            IContentData__Page_Fragment: IContentData__Page_Fragment;
            PageData__Page_Fragment: PageData__Page_Fragment;
          };
        })
      | ({ __typename?: "_Section" } & {
          " $fragmentRefs"?: {
            IContentData__Section_Fragment: IContentData__Section_Fragment;
            PageData__Section_Fragment: PageData__Section_Fragment;
          };
        })
      | ({ __typename?: "_Video" } & {
          " $fragmentRefs"?: {
            IContentData__Video_Fragment: IContentData__Video_Fragment;
            PageData__Video_Fragment: PageData__Video_Fragment;
          };
        })
      | null;
  } | null;
};

export type getContentByPathQueryVariables = Exact<{
  path: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
  locale?: InputMaybe<Array<Locales> | Locales>;
  siteId?: InputMaybe<Scalars["String"]["input"]>;
  changeset?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type getContentByPathQuery = {
  __typename?: "Query";
  content?: {
    __typename?: "_ContentOutput";
    total?: number | null;
    items?:
      | ({ __typename?: "ArticleGroupPage" } & {
          " $fragmentRefs"?: {
            IContentData_ArticleGroupPage_Fragment: IContentData_ArticleGroupPage_Fragment;
            PageData_ArticleGroupPage_Fragment: PageData_ArticleGroupPage_Fragment;
          };
        })
      | ({ __typename?: "ArticleListElement" } & {
          " $fragmentRefs"?: {
            IContentData_ArticleListElement_Fragment: IContentData_ArticleListElement_Fragment;
            PageData_ArticleListElement_Fragment: PageData_ArticleListElement_Fragment;
          };
        })
      | ({ __typename?: "ArticlePage" } & {
          " $fragmentRefs"?: {
            IContentData_ArticlePage_Fragment: IContentData_ArticlePage_Fragment;
            PageData_ArticlePage_Fragment: PageData_ArticlePage_Fragment;
          };
        })
      | ({ __typename?: "BannerItem" } & {
          " $fragmentRefs"?: {
            IContentData_BannerItem_Fragment: IContentData_BannerItem_Fragment;
            PageData_BannerItem_Fragment: PageData_BannerItem_Fragment;
          };
        })
      | ({ __typename?: "BlankExperience" } & {
          " $fragmentRefs"?: {
            IContentData_BlankExperience_Fragment: IContentData_BlankExperience_Fragment;
            PageData_BlankExperience_Fragment: PageData_BlankExperience_Fragment;
            BlankExperienceDataFragment: BlankExperienceDataFragment;
          };
        })
      | ({ __typename?: "BlankSection" } & {
          " $fragmentRefs"?: {
            IContentData_BlankSection_Fragment: IContentData_BlankSection_Fragment;
            PageData_BlankSection_Fragment: PageData_BlankSection_Fragment;
          };
        })
      | ({ __typename?: "ButtonElement" } & {
          " $fragmentRefs"?: {
            IContentData_ButtonElement_Fragment: IContentData_ButtonElement_Fragment;
            PageData_ButtonElement_Fragment: PageData_ButtonElement_Fragment;
          };
        })
      | ({ __typename?: "Company" } & {
          " $fragmentRefs"?: {
            IContentData_Company_Fragment: IContentData_Company_Fragment;
            PageData_Company_Fragment: PageData_Company_Fragment;
          };
        })
      | ({ __typename?: "ContainerElement" } & {
          " $fragmentRefs"?: {
            IContentData_ContainerElement_Fragment: IContentData_ContainerElement_Fragment;
            PageData_ContainerElement_Fragment: PageData_ContainerElement_Fragment;
          };
        })
      | ({ __typename?: "ContentTextElement" } & {
          " $fragmentRefs"?: {
            IContentData_ContentTextElement_Fragment: IContentData_ContentTextElement_Fragment;
            PageData_ContentTextElement_Fragment: PageData_ContentTextElement_Fragment;
          };
        })
      | ({ __typename?: "DefaultVideo" } & {
          " $fragmentRefs"?: {
            IContentData_DefaultVideo_Fragment: IContentData_DefaultVideo_Fragment;
            PageData_DefaultVideo_Fragment: PageData_DefaultVideo_Fragment;
          };
        })
      | ({ __typename?: "Dictionary" } & {
          " $fragmentRefs"?: {
            IContentData_Dictionary_Fragment: IContentData_Dictionary_Fragment;
            PageData_Dictionary_Fragment: PageData_Dictionary_Fragment;
          };
        })
      | ({ __typename?: "DictionaryItem" } & {
          " $fragmentRefs"?: {
            IContentData_DictionaryItem_Fragment: IContentData_DictionaryItem_Fragment;
            PageData_DictionaryItem_Fragment: PageData_DictionaryItem_Fragment;
          };
        })
      | ({ __typename?: "HeaderBlock" } & {
          " $fragmentRefs"?: {
            IContentData_HeaderBlock_Fragment: IContentData_HeaderBlock_Fragment;
            PageData_HeaderBlock_Fragment: PageData_HeaderBlock_Fragment;
          };
        })
      | ({ __typename?: "HeadingElement" } & {
          " $fragmentRefs"?: {
            IContentData_HeadingElement_Fragment: IContentData_HeadingElement_Fragment;
            PageData_HeadingElement_Fragment: PageData_HeadingElement_Fragment;
          };
        })
      | ({ __typename?: "Image" } & {
          " $fragmentRefs"?: {
            IContentData_Image_Fragment: IContentData_Image_Fragment;
            PageData_Image_Fragment: PageData_Image_Fragment;
          };
        })
      | ({ __typename?: "ImageBackground" } & {
          " $fragmentRefs"?: {
            IContentData_ImageBackground_Fragment: IContentData_ImageBackground_Fragment;
            PageData_ImageBackground_Fragment: PageData_ImageBackground_Fragment;
          };
        })
      | ({ __typename?: "ImageItemElement" } & {
          " $fragmentRefs"?: {
            IContentData_ImageItemElement_Fragment: IContentData_ImageItemElement_Fragment;
            PageData_ImageItemElement_Fragment: PageData_ImageItemElement_Fragment;
          };
        })
      | ({ __typename?: "ImageTextItemElement" } & {
          " $fragmentRefs"?: {
            IContentData_ImageTextItemElement_Fragment: IContentData_ImageTextItemElement_Fragment;
            PageData_ImageTextItemElement_Fragment: PageData_ImageTextItemElement_Fragment;
          };
        })
      | ({ __typename?: "MegaMenuGroupBlock" } & {
          " $fragmentRefs"?: {
            IContentData_MegaMenuGroupBlock_Fragment: IContentData_MegaMenuGroupBlock_Fragment;
            PageData_MegaMenuGroupBlock_Fragment: PageData_MegaMenuGroupBlock_Fragment;
          };
        })
      | ({ __typename?: "NavigationMenuBlock" } & {
          " $fragmentRefs"?: {
            IContentData_NavigationMenuBlock_Fragment: IContentData_NavigationMenuBlock_Fragment;
            PageData_NavigationMenuBlock_Fragment: PageData_NavigationMenuBlock_Fragment;
          };
        })
      | ({ __typename?: "OfficeLocation" } & {
          " $fragmentRefs"?: {
            IContentData_OfficeLocation_Fragment: IContentData_OfficeLocation_Fragment;
            PageData_OfficeLocation_Fragment: PageData_OfficeLocation_Fragment;
          };
        })
      | ({ __typename?: "PageSeoSettings" } & {
          " $fragmentRefs"?: {
            IContentData_PageSeoSettings_Fragment: IContentData_PageSeoSettings_Fragment;
            PageData_PageSeoSettings_Fragment: PageData_PageSeoSettings_Fragment;
          };
        })
      | ({ __typename?: "Section" } & {
          " $fragmentRefs"?: {
            IContentData_Section_Fragment: IContentData_Section_Fragment;
            PageData_Section_Fragment: PageData_Section_Fragment;
          };
        })
      | ({ __typename?: "SysContentFolder" } & {
          " $fragmentRefs"?: {
            IContentData_SysContentFolder_Fragment: IContentData_SysContentFolder_Fragment;
            PageData_SysContentFolder_Fragment: PageData_SysContentFolder_Fragment;
          };
        })
      | ({ __typename?: "WebsiteFooter" } & {
          " $fragmentRefs"?: {
            IContentData_WebsiteFooter_Fragment: IContentData_WebsiteFooter_Fragment;
            PageData_WebsiteFooter_Fragment: PageData_WebsiteFooter_Fragment;
          };
        })
      | ({ __typename?: "_Component" } & {
          " $fragmentRefs"?: {
            IContentData__Component_Fragment: IContentData__Component_Fragment;
            PageData__Component_Fragment: PageData__Component_Fragment;
          };
        })
      | ({ __typename?: "_Content" } & {
          " $fragmentRefs"?: {
            IContentData__Content_Fragment: IContentData__Content_Fragment;
            PageData__Content_Fragment: PageData__Content_Fragment;
          };
        })
      | ({ __typename?: "_Experience" } & {
          " $fragmentRefs"?: {
            IContentData__Experience_Fragment: IContentData__Experience_Fragment;
            PageData__Experience_Fragment: PageData__Experience_Fragment;
          };
        })
      | ({ __typename?: "_Folder" } & {
          " $fragmentRefs"?: {
            IContentData__Folder_Fragment: IContentData__Folder_Fragment;
            PageData__Folder_Fragment: PageData__Folder_Fragment;
          };
        })
      | ({ __typename?: "_Image" } & {
          " $fragmentRefs"?: {
            IContentData__Image_Fragment: IContentData__Image_Fragment;
            PageData__Image_Fragment: PageData__Image_Fragment;
          };
        })
      | ({ __typename?: "_Media" } & {
          " $fragmentRefs"?: {
            IContentData__Media_Fragment: IContentData__Media_Fragment;
            PageData__Media_Fragment: PageData__Media_Fragment;
          };
        })
      | ({ __typename?: "_Page" } & {
          " $fragmentRefs"?: {
            IContentData__Page_Fragment: IContentData__Page_Fragment;
            PageData__Page_Fragment: PageData__Page_Fragment;
          };
        })
      | ({ __typename?: "_Section" } & {
          " $fragmentRefs"?: {
            IContentData__Section_Fragment: IContentData__Section_Fragment;
            PageData__Section_Fragment: PageData__Section_Fragment;
          };
        })
      | ({ __typename?: "_Video" } & {
          " $fragmentRefs"?: {
            IContentData__Video_Fragment: IContentData__Video_Fragment;
            PageData__Video_Fragment: PageData__Video_Fragment;
          };
        })
      | null;
  } | null;
};

export type getContentTypeQueryVariables = Exact<{
  key: Scalars["String"]["input"];
  version?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  domain?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type getContentTypeQuery = {
  __typename?: "Query";
  content?: {
    __typename?: "_ContentOutput";
    total?: number | null;
    items?:
      | {
          __typename?: "ArticleGroupPage";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ArticleListElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ArticlePage";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "BannerItem";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "BlankExperience";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "BlankSection";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ButtonElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "Company";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ContainerElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ContentTextElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "DefaultVideo";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "Dictionary";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "DictionaryItem";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "HeaderBlock";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "HeadingElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "Image";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ImageBackground";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ImageItemElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "ImageTextItemElement";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "MegaMenuGroupBlock";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "NavigationMenuBlock";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "OfficeLocation";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "PageSeoSettings";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "Section";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "SysContentFolder";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "WebsiteFooter";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Component";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Content";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Experience";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Folder";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Image";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Media";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Page";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Section";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | {
          __typename?: "_Video";
          _metadata?:
            | { __typename?: "ContentMetadata"; types?: Array<string | null> | null }
            | { __typename?: "InstanceMetadata"; types?: Array<string | null> | null }
            | { __typename?: "ItemMetadata"; types?: Array<string | null> | null }
            | { __typename?: "MediaMetadata"; types?: Array<string | null> | null }
            | null;
        }
      | null;
  } | null;
};

export const ContentUrlDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentUrlDataFragment, unknown>;
export const IContentInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const CompositionNodeDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompositionNodeDataFragment, unknown>;
export const IContentDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const BlockDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const IElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const ArticleListElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArticleListElementDataFragment, unknown>;
export const RichTextDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RichTextDataFragment, unknown>;
export const ContentReferenceDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentReferenceDataFragment, unknown>;
export const BannerItemDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BannerItemDataFragment, unknown>;
export const ButtonElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ButtonElementDataFragment, unknown>;
export const CompanyDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyDataFragment, unknown>;
export const ContentTextElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentTextElementDataFragment, unknown>;
export const DictionaryDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DictionaryDataFragment, unknown>;
export const DictionaryItemDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DictionaryItemDataFragment, unknown>;
export const HeaderBlockDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderBlockDataFragment, unknown>;
export const HeadingElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeadingElementDataFragment, unknown>;
export const ImageBackgroundDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageBackgroundDataFragment, unknown>;
export const ImageItemElementDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageItemElementDataFragment, unknown>;
export const MegaMenuGroupBlockDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MegaMenuGroupBlockDataFragment, unknown>;
export const LinkDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const NavigationMenuBlockDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationMenuBlockDataFragment, unknown>;
export const OfficeLocationDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OfficeLocationDataFragment, unknown>;
export const PageSeoSettingsDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageSeoSettingsDataFragment, unknown>;
export const CompositionComponentNodeDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionComponentNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionComponentNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "component" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArticleListElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "BannerItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ButtonElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompanyData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ContentTextElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeaderBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeadingElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageBackgroundData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageItemElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "MegaMenuGroupBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "NavigationMenuBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "OfficeLocationData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsData" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompositionComponentNodeDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "composition" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "ICompositionStructureNode" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "ICompositionStructureNode" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "nodes" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "CompositionNodeData" },
                                              },
                                              {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                  kind: "NamedType",
                                                  name: { kind: "Name", value: "ICompositionStructureNode" },
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: { kind: "Name", value: "nodes" },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: { kind: "Name", value: "CompositionNodeData" },
                                                          },
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: {
                                                              kind: "Name",
                                                              value: "CompositionComponentNodeData",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionComponentNodeData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionComponentNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionComponentNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "component" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArticleListElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "BannerItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ButtonElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompanyData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ContentTextElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeaderBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeadingElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageBackgroundData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageItemElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "MegaMenuGroupBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "NavigationMenuBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "OfficeLocationData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsData" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const PageSeoSettingsPropertyDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsPropertyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettingsProperty" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageSeoSettingsPropertyDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlankExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BlankExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "ExperienceData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "SeoSettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsPropertyData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionComponentNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionComponentNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "component" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArticleListElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "BannerItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ButtonElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompanyData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ContentTextElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeaderBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeadingElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageBackgroundData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageItemElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "MegaMenuGroupBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "NavigationMenuBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "OfficeLocationData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsData" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "composition" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "ICompositionStructureNode" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "ICompositionStructureNode" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "nodes" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "CompositionNodeData" },
                                              },
                                              {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                  kind: "NamedType",
                                                  name: { kind: "Name", value: "ICompositionStructureNode" },
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: { kind: "Name", value: "nodes" },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: { kind: "Name", value: "CompositionNodeData" },
                                                          },
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: {
                                                              kind: "Name",
                                                              value: "CompositionComponentNodeData",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionComponentNodeData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsPropertyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettingsProperty" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReferenceData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const DictionaryItemPropertyDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemPropertyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItemProperty" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DictionaryItemPropertyDataFragment, unknown>;
export const IContentListItemFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentListItem" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const PageDataFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDataFragment, unknown>;
export const getContentByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContentById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "key" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "locale" } },
          type: {
            kind: "ListType",
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Locales" } } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "path" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "StringValue", value: "-", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "domain" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "changeset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "content" },
            name: { kind: "Name", value: "_Content" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "variation" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "include" },
                      value: { kind: "EnumValue", value: "ALL" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "_metadata" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "key" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "key" } },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "version" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "version" } },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "_metadata" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "url" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "default" },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: { kind: "Name", value: "eq" },
                                                  value: { kind: "Variable", name: { kind: "Name", value: "path" } },
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "base" },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: { kind: "Name", value: "eq" },
                                                  value: { kind: "Variable", name: { kind: "Name", value: "domain" } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "version" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "version" } },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_metadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "changeset" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: { kind: "Variable", name: { kind: "Name", value: "changeset" } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "locale" },
                value: { kind: "Variable", name: { kind: "Name", value: "locale" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "items" },
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "PageData" } },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "BlankExperienceData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionComponentNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionComponentNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "component" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArticleListElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "BannerItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ButtonElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompanyData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ContentTextElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeaderBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeadingElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageBackgroundData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageItemElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "MegaMenuGroupBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "NavigationMenuBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "OfficeLocationData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsData" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "composition" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "ICompositionStructureNode" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "ICompositionStructureNode" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "nodes" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "CompositionNodeData" },
                                              },
                                              {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                  kind: "NamedType",
                                                  name: { kind: "Name", value: "ICompositionStructureNode" },
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: { kind: "Name", value: "nodes" },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: { kind: "Name", value: "CompositionNodeData" },
                                                          },
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: {
                                                              kind: "Name",
                                                              value: "CompositionComponentNodeData",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionComponentNodeData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsPropertyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettingsProperty" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlankExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BlankExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "ExperienceData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "SeoSettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsPropertyData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContentByPath" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "path" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "locale" } },
          type: {
            kind: "ListType",
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Locales" } } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "siteId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "changeset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "NullValue" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "content" },
            name: { kind: "Name", value: "_Content" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_metadata" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "url" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "default" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "in" },
                                        value: { kind: "Variable", name: { kind: "Name", value: "path" } },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "base" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "eq" },
                                        value: { kind: "Variable", name: { kind: "Name", value: "siteId" } },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "changeset" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "eq" },
                                  value: { kind: "Variable", name: { kind: "Name", value: "changeset" } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "locale" },
                value: { kind: "Variable", name: { kind: "Name", value: "locale" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "items" },
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "PageData" } },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "BlankExperienceData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentUrlData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentUrl" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "default" } },
          { kind: "Field", name: { kind: "Name", value: "hierarchical" } },
          { kind: "Field", name: { kind: "Name", value: "internal" } },
          { kind: "Field", name: { kind: "Name", value: "graph" } },
          { kind: "Field", name: { kind: "Name", value: "base" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IContentMetadata" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "locale" } },
          { kind: "Field", name: { kind: "Name", value: "fallbackForLocale" } },
          { kind: "Field", name: { kind: "Name", value: "version" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "types" } },
          { kind: "Field", name: { kind: "Name", value: "published" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "changeset" } },
          { kind: "Field", name: { kind: "Name", value: "created" } },
          { kind: "Field", name: { kind: "Name", value: "lastModified" } },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" } },
          { kind: "Field", name: { kind: "Name", value: "variation" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IContentData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          { kind: "Field", alias: { kind: "Name", value: "_type" }, name: { kind: "Name", value: "__typename" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IComponent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArticleListElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArticleListElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "articleListCount" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RichTextData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RichText" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BannerItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BannerItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "RichText" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "BackgroundLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonType" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ButtonElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ButtonElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "ButtonText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ButtonLink" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "className" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompanyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Company" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "Name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentTextElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Paragraph" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Dictionary" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "DictionaryItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
                { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "DictionaryKey" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DictionaryItemData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DictionaryItem" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemKey" } },
          { kind: "Field", name: { kind: "Name", value: "DictionaryItemValue" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeaderBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_logo_dark" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_main_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "site_utility_navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeadingElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "HeadingElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "Heading" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "RichTextData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageBackgroundData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageBackground" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullIWidthImage" } },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageItemElementData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageItemElement" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageDesktop" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ImageMobile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "Loading" } },
          { kind: "Field", name: { kind: "Name", value: "Alt" } },
          { kind: "Field", name: { kind: "Name", value: "IsFullWidthImage" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MegaMenuGroupBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MegaMenuGroupBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuMenuHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuUrl" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "MegaMenuContentArea" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LinkData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Link" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "target" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NavigationMenuBlockData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NavigationMenuBlock" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MenuNavigationHeading" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "NavigationLinks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "LinkData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OfficeLocationData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OfficeLocation" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeTitle" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet1" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressStreet2" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCity" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressPostalCode" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeAddressCountry" } },
          { kind: "Field", name: { kind: "Name", value: "OfficePhone" } },
          { kind: "Field", name: { kind: "Name", value: "OfficeEmail" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettings" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "IElementData" } },
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompositionComponentNodeData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ICompositionComponentNode" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "layoutType" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "displayTemplateKey" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "displaySettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "component" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArticleListElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "BannerItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ButtonElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompanyData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ContentTextElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "DictionaryItemData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeaderBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "HeadingElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageBackgroundData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageItemElementData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "MegaMenuGroupBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "NavigationMenuBlockData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "OfficeLocationData" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsData" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_deleted" } },
          { kind: "Field", name: { kind: "Name", value: "_fulltext" } },
          { kind: "Field", name: { kind: "Name", value: "_modified" } },
          { kind: "Field", name: { kind: "Name", value: "_score" } },
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "_metadata" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentInfo" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "composition" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "ICompositionStructureNode" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionNodeData" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "ICompositionStructureNode" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "nodes" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: { kind: "Name", value: "CompositionNodeData" },
                                              },
                                              {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                  kind: "NamedType",
                                                  name: { kind: "Name", value: "ICompositionStructureNode" },
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: { kind: "Name", value: "nodes" },
                                                      selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: { kind: "Name", value: "CompositionNodeData" },
                                                          },
                                                          {
                                                            kind: "FragmentSpread",
                                                            name: {
                                                              kind: "Name",
                                                              value: "CompositionComponentNodeData",
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CompositionComponentNodeData" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReferenceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContentReference" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "url" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContentUrlData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageSeoSettingsPropertyData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageSeoSettingsProperty" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "MetaTitle" } },
          { kind: "Field", name: { kind: "Name", value: "MetaDescription" } },
          { kind: "Field", name: { kind: "Name", value: "MetaKeywords" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ThumbnailImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ReferenceData" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "_IContent" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IContentData" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlankExperienceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BlankExperience" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "ExperienceData" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "SeoSettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageSeoSettingsPropertyData" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getContentTypeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getContentType" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "key" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "locale" } },
          type: {
            kind: "ListType",
            type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Locales" } } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "path" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "StringValue", value: "-", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "domain" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "content" },
            name: { kind: "Name", value: "_Content" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "variation" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "include" },
                      value: { kind: "EnumValue", value: "ALL" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "_metadata" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "key" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "key" } },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "version" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "version" } },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "_metadata" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "url" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "hierarchical" },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: { kind: "Name", value: "eq" },
                                                  value: { kind: "Variable", name: { kind: "Name", value: "path" } },
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "base" },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: { kind: "Name", value: "eq" },
                                                  value: { kind: "Variable", name: { kind: "Name", value: "domain" } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "version" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: { kind: "Name", value: "eq" },
                                            value: { kind: "Variable", name: { kind: "Name", value: "version" } },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "locale" },
                value: { kind: "Variable", name: { kind: "Name", value: "locale" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "items" },
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "_metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "types" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;
