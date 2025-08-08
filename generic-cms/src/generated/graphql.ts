/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a decimal floating-point number. */
  Decimal: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: { input: any; output: any; }
  /** The `TimeSpan` scalar represents an ISO-8601 compliant duration type. */
  TimeSpan: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AcceleratorWebsiteWebsite = IWebsiteItem & Node & {
  __typename?: 'AcceleratorWebsiteWebsite';
  /** The blocks for the website type. */
  blocks: AcceleratorWebsiteWebsiteBlockContainer;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: AcceleratorWebsiteWebsiteFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Website texts */
  texts?: Maybe<Array<WebsiteText>>;
};


export type AcceleratorWebsiteWebsitefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type AcceleratorWebsiteWebsitetextsArgs = {
  filter?: InputMaybe<FilterInput>;
};

export type AcceleratorWebsiteWebsiteBlockContainer = {
  __typename?: 'AcceleratorWebsiteWebsiteBlockContainer';
  /** The blocks for footer. */
  footer: Array<Maybe<IBlock>>;
  /** The blocks for MainMenu. */
  mainMenu: Array<Maybe<IBlock>>;
  /** The blocks for SecondHeader. */
  secondHeader: Array<Maybe<IBlock>>;
  /** The blocks for TopHeader. */
  topHeader: Array<Maybe<IBlock>>;
};

export type AcceleratorWebsiteWebsiteFieldContainer = {
  __typename?: 'AcceleratorWebsiteWebsiteFieldContainer';
  /** Icon */
  _icon?: Maybe<PointerMediaImageItem>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Additional header links */
  additionalHeaderLinks?: Maybe<Array<PointerPageItem>>;
  /** Checkout page */
  checkoutPage?: Maybe<Array<PointerPageItem>>;
  /** Translation missing */
  companyAddress?: Maybe<Array<CompanyAddressWebsiteFieldDefinition>>;
  /** Header */
  footerHeader?: Maybe<Scalars['String']['output']>;
  /** Forbidden page (403) */
  forbiddenPage?: Maybe<Array<PointerPageItem>>;
  /** General error (500) */
  generalError?: Maybe<Array<PointerPageItem>>;
  /** Header layout */
  headerLayout?: Maybe<Array<TextOptionDefinition>>;
  /** Login page */
  loginPage?: Maybe<Array<PointerPageItem>>;
  /** Logotype (main) */
  logotypeMain?: Maybe<PointerMediaImageItem>;
  /** Column header */
  megaMenuColumnHeader?: Maybe<Scalars['String']['output']>;
  /** My pages page */
  myPagesPage?: Maybe<Array<PointerPageItem>>;
  /** Order confirmation page */
  orderConfirmationPage?: Maybe<Array<PointerPageItem>>;
  /** Order page */
  orderPage?: Maybe<Array<PointerPageItem>>;
  /** Page not found (404) */
  pageNotFound?: Maybe<Array<PointerPageItem>>;
  /** Product filters */
  productFilterFields?: Maybe<Array<PointerProductFieldItem>>;
  /** Search result page */
  searchResultPage?: Maybe<Array<PointerPageItem>>;
};

export type AddDiscountCodesToCartInput = {
  codes: Array<Scalars['String']['input']>;
};

export type AddDiscountCodesToCartPayload = {
  __typename?: 'AddDiscountCodesToCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type AddVariantToCartInput = {
  additionalInfo?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  articleNumber: Scalars['String']['input'];
  /**
   * Add the variant as new row instead of updating quantity on existing.
   * 
   * If the cart already contains multiple rows for the same variant, then we will always add a new row.
   * To update an existing row, use the updateVariantInCart mutation.
   */
  asNewRow?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Decimal']['input']>;
};

export type AddVariantToCartPayload = {
  __typename?: 'AddVariantToCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

/** Additional info. */
export type AdditionalInfo = {
  __typename?: 'AdditionalInfo';
  /** Additional info key. */
  key: Scalars['String']['output'];
  /** Additional info value. */
  value: Scalars['String']['output'];
};

/** Additional info. */
export type AdditionalInfoInput = {
  /** Additional info key. */
  key: Scalars['String']['input'];
  /** Additional info value. */
  value: Scalars['String']['input'];
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AFTER_RESOLVER = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BEFORE_RESOLVER = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  VALIDATION = 'VALIDATION'
}

export type ApproveOrderForOrganizationError = Failure | Forbidden;

export type ApproveOrderForOrganizationInput = {
  /** Order identifier. */
  orderId: Scalars['ID']['input'];
};

export type ApproveOrderForOrganizationPayload = {
  __typename?: 'ApproveOrderForOrganizationPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<ApproveOrderForOrganizationError>>;
  query: StorefrontQuery;
};

export type ArticlePage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'ArticlePage';
  /** The blocks for the page type. */
  blocks: ArticlePageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ArticlePageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type ArticlePagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticlePagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ArticlePagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ArticlePageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticlePageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageBlockContainer = {
  __typename?: 'ArticlePageBlockContainer';
  /** The blocks for Content. */
  content: Array<Maybe<IBlock>>;
  /** The blocks for Top. */
  top: Array<Maybe<IBlock>>;
};

export type ArticlePageFieldContainer = {
  __typename?: 'ArticlePageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Text */
  editor?: Maybe<Scalars['String']['output']>;
  /** Introduction */
  introduction?: Maybe<Scalars['String']['output']>;
  /** Show navigation */
  showNavigation?: Maybe<Scalars['Boolean']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Authentication result for cookie sign in. */
export type AuthenticationCookie = authentication & {
  __typename?: 'AuthenticationCookie';
  /** Cookie name. For chunked cookies the name is used to prefix the chunked cookie value. */
  cookieName: Scalars['String']['output'];
  /** Token exires in (seconds). */
  expiresIn: Scalars['Int']['output'];
  /** Token issued at. */
  issuedAt: Scalars['DateTime']['output'];
  /** Provides access to the current logged in person information. */
  me: CurrentUser;
};

/** Authentication failure. */
export type AuthenticationFailure = Error & {
  __typename?: 'AuthenticationFailure';
  /** Failure message. */
  message: Scalars['String']['output'];
  /** Failure type. */
  type: AuthenticationFailureType;
};

/** Authentication failure type. */
export enum AuthenticationFailureType {
  /** Sign in failed. */
  FAILURE = 'FAILURE',
  /** User is locked out. */
  LOCKED_OUT = 'LOCKED_OUT',
  /** Provided password does not meet the password complixity. */
  PASSWORD_COMPLEXITY = 'PASSWORD_COMPLEXITY',
  /** Requires that password is changed. */
  REQUIRES_CHANGED_PASSWORD = 'REQUIRES_CHANGED_PASSWORD'
}

/** Authentication result types. */
export enum AuthenticationResultType {
  /** Authentication should be of result type cookie. */
  COOKIE = 'COOKIE',
  /** Authentication should be of result type token. */
  TOKEN = 'TOKEN'
}

/** Authentication result for token sign in. */
export type AuthenticationToken = authentication & {
  __typename?: 'AuthenticationToken';
  /** Authentication scheme. */
  authenticationScheme: Scalars['String']['output'];
  /** Token exires in (seconds). */
  expiresIn: Scalars['Int']['output'];
  /** Token issued at. */
  issuedAt: Scalars['DateTime']['output'];
  /** Provides access to the current logged in person information. */
  me: CurrentUser;
  /** Token. */
  token: Scalars['String']['output'];
  /** Token type. */
  tokenType: Scalars['String']['output'];
  /** Username. */
  username: Scalars['String']['output'];
};

/** Authorization error. */
export type AuthorizationError = {
  __typename?: 'AuthorizationError';
  /** Message */
  message: Scalars['String']['output'];
  /** Query data when user are unauthorized for the URL. */
  query?: Maybe<StorefrontQuery>;
};

export type B2BPersonTemplatePerson = IPersonItem & Node & {
  __typename?: 'B2BPersonTemplatePerson';
  /** Addresses connected to the person. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the person. */
  customerNumber: Scalars['String']['output'];
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: B2BPersonTemplatePersonFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Organizations connected to the person. */
  organizations?: Maybe<OrganizationConnection>;
};


export type B2BPersonTemplatePersonfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type B2BPersonTemplatePersonorganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type B2BPersonTemplatePersonFieldContainer = {
  __typename?: 'B2BPersonTemplatePersonFieldContainer';
  /** Email */
  _email?: Maybe<Scalars['String']['output']>;
  /** First name */
  _firstName?: Maybe<Scalars['String']['output']>;
  /** Last name */
  _lastName?: Maybe<Scalars['String']['output']>;
};

export type B2CPersonTemplatePerson = IPersonItem & Node & {
  __typename?: 'B2CPersonTemplatePerson';
  /** Addresses connected to the person. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the person. */
  customerNumber: Scalars['String']['output'];
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: B2CPersonTemplatePersonFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Organizations connected to the person. */
  organizations?: Maybe<OrganizationConnection>;
};


export type B2CPersonTemplatePersonfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type B2CPersonTemplatePersonorganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type B2CPersonTemplatePersonFieldContainer = {
  __typename?: 'B2CPersonTemplatePersonFieldContainer';
  /** Email */
  _email?: Maybe<Scalars['String']['output']>;
  /** First name */
  _firstName?: Maybe<Scalars['String']['output']>;
  /** Last name */
  _lastName?: Maybe<Scalars['String']['output']>;
};

export type BackgroundImageBlockFieldDefinition = {
  __typename?: 'BackgroundImageBlockFieldDefinition';
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  image?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageHeight?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageMobile?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageMobileHeight?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageMobileWidth?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageWidth?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  isFullWidthImage?: Maybe<Scalars['Boolean']['output']>;
};

export type BackgroundImageBlockFieldValues = IFieldValueItem & {
  __typename?: 'BackgroundImageBlockFieldValues';
  /** The field data. */
  backgroundImageBlockFieldValues?: Maybe<Array<BackgroundImageBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type BannerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'BannerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: BannerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type BannerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BannerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type BannerBlockFieldContainer = {
  __typename?: 'BannerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** Banners */
  banners?: Maybe<Array<BannersBlockFieldDefinition>>;
};

export type BannerItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'BannerItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: BannerItemBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: BannerItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type BannerItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BannerItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type BannerItemBlockFieldContainer = {
  __typename?: 'BannerItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOverlay?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOverlayOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  backgroundLink?: Maybe<LinkFieldDefinition>;
  /** Translation missing */
  blockHeight?: Maybe<Scalars['Int']['output']>;
  /** Translation missing */
  button?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentImage?: Maybe<Array<ContentImageBlockFieldDefinition>>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type BannerItemBlockFieldDefinition = {
  __typename?: 'BannerItemBlockFieldDefinition';
  /** Translation missing */
  backgroundColorOverlay?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOverlayOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  backgroundLink?: Maybe<LinkFieldDefinition>;
  /** Translation missing */
  blockHeight?: Maybe<Scalars['Int']['output']>;
  /** Translation missing */
  buttonLink?: Maybe<LinkFieldDefinition>;
  /** ButtonType */
  buttonType?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  image?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageMobile?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  isFullWidthImage?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type BannerItemBlockFieldGroups = {
  __typename?: 'BannerItemBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type BannerItemBlockFieldValues = IFieldValueItem & {
  __typename?: 'BannerItemBlockFieldValues';
  /** The field data. */
  bannerItemBlockFieldValues?: Maybe<Array<BannerItemBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type BannersBlockFieldDefinition = {
  __typename?: 'BannersBlockFieldDefinition';
  /** Call to action text */
  actionText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** Link to category */
  bannerLinkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  bannerLinkToPage?: Maybe<Array<PointerPageItem>>;
  /** Link to product */
  bannerLinkToProduct?: Maybe<Array<PointerProductItem>>;
  /** Image */
  blockImagePointer?: Maybe<PointerMediaImageItem>;
  /** Title */
  blockTitle?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  image?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  subTitle?: Maybe<Scalars['String']['output']>;
};

export type BannersBlockFieldValues = IFieldValueItem & {
  __typename?: 'BannersBlockFieldValues';
  /** The field data. */
  bannersBlockFieldValues?: Maybe<Array<BannersBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Match information in related blocks. */
export type BlockQueryInput = {
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
};

/** Boolean container. */
export type BoolContainerOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput = {
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput>;
};

/** Boolean container. */
export type BoolContainerOfPageSearchQueryAndStorefrontPageDocumentInput = {
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfPageSearchQueryAndStorefrontPageDocumentInput>;
};

/** Boolean container. */
export type BoolContainerOfProductSearchQueryItemAndStorefrontProductDocumentInput = {
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfProductSearchQueryItemAndStorefrontProductDocumentInput>;
};

/** Configure the boolean container. */
export type BoolQueryOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput = {
  /** Filter that are used for the query but excluded for score calculation. */
  filter?: InputMaybe<Array<BoolContainerOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput>>;
  /** Must. */
  must?: InputMaybe<Array<CategorySearchQueryItemInput>>;
  /** Must not. */
  mustNot?: InputMaybe<Array<CategorySearchQueryItemInput>>;
  /** Should. */
  should?: InputMaybe<Array<CategorySearchQueryItemInput>>;
};

/** Configure the boolean container. */
export type BoolQueryOfPageSearchQueryAndStorefrontPageDocumentInput = {
  /** Filter that are used for the query but excluded for score calculation. */
  filter?: InputMaybe<Array<BoolContainerOfPageSearchQueryAndStorefrontPageDocumentInput>>;
  /** Must. */
  must?: InputMaybe<Array<PageSearchQueryInput>>;
  /** Must not. */
  mustNot?: InputMaybe<Array<PageSearchQueryInput>>;
  /** Should. */
  should?: InputMaybe<Array<PageSearchQueryInput>>;
};

/** Configure the boolean container. */
export type BoolQueryOfProductSearchQueryItemAndStorefrontProductDocumentInput = {
  /** Filter that are used for the query but excluded for score calculation. */
  filter?: InputMaybe<Array<BoolContainerOfProductSearchQueryItemAndStorefrontProductDocumentInput>>;
  /** Must. */
  must?: InputMaybe<Array<ProductSearchQueryItemInput>>;
  /** Must not. */
  mustNot?: InputMaybe<Array<ProductSearchQueryItemInput>>;
  /** Should. */
  should?: InputMaybe<Array<ProductSearchQueryItemInput>>;
};

export type BooleanValue = IFieldValueItem & {
  __typename?: 'BooleanValue';
  /** The field data. */
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Match information inside boolean field. */
export type BooleanValueItemInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Value to match. */
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'BrandBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: BrandBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type BrandBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BrandBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type BrandBlockFieldContainer = {
  __typename?: 'BrandBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Title */
  blockTitle?: Maybe<Scalars['String']['output']>;
  /** Brands */
  brandsLinkList?: Maybe<Array<PointerPageItem>>;
  /** Link */
  link?: Maybe<Array<PointerPageItem>>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
};

export type BrandListPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'BrandListPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: BrandListPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type BrandListPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BrandListPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BrandListPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BrandListPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandListPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BrandListPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandListPageFieldContainer = {
  __typename?: 'BrandListPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Title */
  titleFilterSelector?: Maybe<Scalars['String']['output']>;
};

export type BrandPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'BrandPage';
  /** The blocks for the page type. */
  blocks: BrandPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: BrandPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type BrandPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BrandPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BrandPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type BrandPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BrandPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandPageBlockContainer = {
  __typename?: 'BrandPageBlockContainer';
  /** The blocks for Header. */
  header: Array<Maybe<IBlock>>;
};

export type BrandPageFieldContainer = {
  __typename?: 'BrandPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Image */
  image?: Maybe<PointerMediaImageItem>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ButtonBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ButtonBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ButtonBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ButtonBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ButtonBlockFieldContainer = {
  __typename?: 'ButtonBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  button?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
};

export type ButtonBlockFieldDefinition = {
  __typename?: 'ButtonBlockFieldDefinition';
  /** Translation missing */
  buttonLink?: Maybe<LinkFieldDefinition>;
  /** ButtonType */
  buttonType?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockFieldValues = IFieldValueItem & {
  __typename?: 'ButtonBlockFieldValues';
  /** The field data. */
  buttonBlockFieldValues?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  /** Country selected for shipping. */
  country: Country;
  /** Currency for the cart. */
  currency: Currency;
  /** Discount codes. */
  discountCodes: Array<Scalars['String']['output']>;
  /** Discount information. */
  discountInfos: Array<DiscountInfo>;
  /** List of gift cards. */
  giftCards: Array<Scalars['String']['output']>;
  /** Grand total (includes VAT) */
  grandTotal: Scalars['Decimal']['output'];
  /** Product count in cart. */
  productCount: Scalars['Decimal']['output'];
  /** Product total excluding VAT. */
  productTotalExcludingVat: Scalars['Decimal']['output'];
  /** Product total including VAT. */
  productTotalIncludingVat: Scalars['Decimal']['output'];
  /** Cart rows. */
  rows: Array<OrderRow>;
  /** Shipping cost excluding VAT. */
  shippingCostExcludingVat: Scalars['Decimal']['output'];
  /** Shipping cost including VAT. */
  shippingCostIncludingVat: Scalars['Decimal']['output'];
  /** Show prices including VAT. */
  showPricesIncludingVat: Scalars['Boolean']['output'];
  /** Total fee excluding VAT. */
  totalFeesExcludingVat: Scalars['Decimal']['output'];
  /** Total fee including VAT. */
  totalFeesIncludingVat: Scalars['Decimal']['output'];
  /** Total promotions and discounts excluding VAT. */
  totalPromotionsAndDiscountsExcludingVat: Scalars['Decimal']['output'];
  /** Total promotions and discounts including VAT. */
  totalPromotionsAndDiscountsIncludingVat: Scalars['Decimal']['output'];
  /** Total VAT. */
  totalVat: Scalars['Decimal']['output'];
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CategoryEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ICategoryItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ICategoryItem;
};

/** Product search category query item. */
export type CategoryFieldInput = {
  /** Boost hits on this category. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Category id. */
  categoryId: Scalars['ID']['input'];
  /** Include child categories. */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of items. */
export type CategoryItemsConnection = {
  __typename?: 'CategoryItemsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CategoryItemsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<CategorySearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type CategoryItemsEdge = {
  __typename?: 'CategoryItemsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<CategorySearchResultItem>;
};

/** A connection to a list of items. */
export type CategoryOrProductConnection = {
  __typename?: 'CategoryOrProductConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CategoryOrProductEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ICategoryOrProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type CategoryOrProductEdge = {
  __typename?: 'CategoryOrProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ICategoryOrProduct;
};

export type CategoryProductCategory = ICategoryItem & IContentItem & ITemplateInfo & Node & {
  __typename?: 'CategoryProductCategory';
  /** The blocks for the category type. */
  blocks: CategoryProductCategoryBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<CategoryConnection>;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: CategoryProductCategoryFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** The relationships for product or category. */
  relations: Array<Relationship>;
  /** The relationships for product or category. */
  relationships: CategoryProductCategoryRelationships;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type CategoryProductCategorychildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CategoryProductCategorydisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type CategoryProductCategoryfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type CategoryProductCategoryimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type CategoryProductCategoryparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryProductCategoryparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CategoryProductCategoryrelationsArgs = {
  filter?: InputMaybe<RelationshipFilterInput>;
};


export type CategoryProductCategoryurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryProductCategoryBlockContainer = {
  __typename?: 'CategoryProductCategoryBlockContainer';
  /** The blocks for Top. */
  top: Array<Maybe<IBlock>>;
};

export type CategoryProductCategoryFieldContainer = {
  __typename?: 'CategoryProductCategoryFieldContainer';
  /** Description */
  _description?: Maybe<Scalars['String']['output']>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized description */
  _seoDescription?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized title */
  _seoTitle?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type CategoryProductCategoryRelationships = {
  __typename?: 'CategoryProductCategoryRelationships';
  accessory: Relationship;
  similarProducts: Relationship;
};

/** A connection to a list of items. */
export type CategorySearchConnection = {
  __typename?: 'CategorySearchConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CategorySearchEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ICategoryItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type CategorySearchEdge = {
  __typename?: 'CategorySearchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ICategoryItem;
  /** The search score. */
  score?: Maybe<Scalars['Float']['output']>;
};

/** Category search query item. */
export type CategorySearchQueryInput = {
  /** Match item based on block data. */
  block?: InputMaybe<BlockQueryInput>;
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput>;
  /** Match item based on category. */
  category?: InputMaybe<CategoryFieldInput>;
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
  /** Match item based on field that is marked as searchable. */
  field?: InputMaybe<SearchFieldItemInput>;
  /** Match item based on name. */
  name?: InputMaybe<NgramStringFieldTermInput>;
};

/** Category search query item. */
export type CategorySearchQueryItemInput = {
  /** Match item based on block data. */
  block?: InputMaybe<BlockQueryInput>;
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfCategorySearchQueryItemAndStorefrontCategoryDocumentInput>;
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
  /** Match item based on field that is marked as searchable. */
  field?: InputMaybe<SearchFieldItemInput>;
  /** Match item based on name. */
  name?: InputMaybe<NgramStringFieldTermInput>;
};

export type CategorySearchResultContext = {
  __typename?: 'CategorySearchResultContext';
  categoryItems?: Maybe<CategoryItemsConnection>;
  /** The sort criterias */
  sortCriteria: Array<SortResultItem>;
};


export type CategorySearchResultContextcategoryItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type CategorySearchResultItem = {
  __typename?: 'CategorySearchResultItem';
  data?: Maybe<ICategoryItem>;
  id: Scalars['UUID']['output'];
  score: Scalars['Float']['output'];
};

export type ChangeMyEmailError = Failure | Forbidden | ValidationError;

export type ChangeMyEmailInput = {
  /** The notification url that will be called when email is changed. */
  notificationUrl: Scalars['String']['input'];
  /** The token returned by changeMyEmailVerification notification. */
  token: Scalars['String']['input'];
  /** The verification token notified in changeMyEmailVerification. */
  verificationToken: Scalars['String']['input'];
};

export type ChangeMyEmailPayload = {
  __typename?: 'ChangeMyEmailPayload';
  errors?: Maybe<Array<ChangeMyEmailError>>;
  me?: Maybe<IPersonItem>;
  query: StorefrontQuery;
};

export type ChangeMyEmailVerificationError = Failure | Forbidden | ValidationError;

export type ChangeMyEmailVerificationInput = {
  /** The new email for the user. */
  email: Scalars['String']['input'];
  /** The notification url that will be called for verification. */
  notificationUrl: Scalars['String']['input'];
};

export type ChangeMyEmailVerificationPayload = {
  __typename?: 'ChangeMyEmailVerificationPayload';
  errors?: Maybe<Array<ChangeMyEmailVerificationError>>;
  query: StorefrontQuery;
  token?: Maybe<Scalars['String']['output']>;
};

export type ChangeMyPasswordError = Failure | Forbidden | ValidationError;

export type ChangeMyPasswordInput = {
  /** The current password for the user. */
  currentPassword: Scalars['String']['input'];
  /** The notification url that will be called when password is changed. */
  notificationUrl: Scalars['String']['input'];
  /** The new password for the user. */
  password: Scalars['String']['input'];
};

export type ChangeMyPasswordPayload = {
  __typename?: 'ChangeMyPasswordPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<ChangeMyPasswordError>>;
  query: StorefrontQuery;
};

/** Container for analytics settings for the channel. */
export type ChannelAnalysisSetting = {
  __typename?: 'ChannelAnalysisSetting';
  /** Google Analytics 4 Measurement ID for the channel. */
  googleAnalytics4?: Maybe<Scalars['String']['output']>;
  /** Google Tag Manager Container ID for the channel. */
  googleTagManager?: Maybe<Scalars['String']['output']>;
};

/** Represents a checkout. */
export type Checkout = {
  __typename?: 'Checkout';
  /** Additional order info. */
  additionalInfo: Array<AdditionalInfo>;
  /** Additional shipping info. */
  additionalShippingInfo: Array<AdditionalInfo>;
  /** Billing address. */
  billingAddress: OrderAddress;
  /** Checkout flow info. */
  checkoutFlowInfo?: Maybe<CheckoutFlowInfo>;
  /** Customer details. */
  customerDetails: OrderCustomerDetails;
  /** Delivery options. */
  deliveryOptions?: Maybe<Array<DeliveryOptionGroup>>;
  /** Order note. */
  note?: Maybe<Scalars['String']['output']>;
  /** Notification urls. */
  notifications: NotificationType;
  /** Payment HTML snippet from payment provider. */
  paymentHtmlSnippet?: Maybe<Scalars['String']['output']>;
  /** Paymet options available. */
  paymentOptions: Array<PaymentOption>;
  /** Shipment HTML snippet from shipping provider. */
  shipmentHtmlSnippet?: Maybe<Scalars['String']['output']>;
  /** Shipping address. */
  shippingAddress: OrderAddress;
  /** Shipping options available. */
  shippingOptions: Array<ShippingOption>;
};

/** Represents a checkout flow info. */
export type CheckoutFlowInfo = {
  __typename?: 'CheckoutFlowInfo';
  /** Additional checkout flow info. */
  additionalInfo?: Maybe<Array<AdditionalInfo>>;
  /** Enable separate shipping address in IFRAME_CHECKOUT. */
  allowSeparateShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Cancel page url. */
  cancelPageUrl: Scalars['String']['output'];
  /** Checkout page url. */
  checkoutPageUrl: Scalars['String']['output'];
  /** Customer type. */
  customerType?: Maybe<CustomerType>;
  /** Disable shipping options in IFRAME_CHECKOUT. */
  disablePaymentShippingOptions?: Maybe<Scalars['Boolean']['output']>;
  /** Recipt page url. */
  receiptPageUrl: Scalars['String']['output'];
  /** Shipping tags. */
  shippingTags?: Maybe<Array<Scalars['String']['output']>>;
  /** Terms page url. */
  termUrl?: Maybe<Scalars['String']['output']>;
};

/** Represents a checkout flow info. */
export type CheckoutFlowInfoInput = {
  /** Additional checkout flow info. */
  additionalInfo?: InputMaybe<Array<AdditionalInfoInput>>;
  /** Enable separate shipping address in IFRAME_CHECKOUT. */
  allowSeparateShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cancel page url. */
  cancelPageUrl: Scalars['String']['input'];
  /** Checkout page url. */
  checkoutPageUrl: Scalars['String']['input'];
  /** Customer type. */
  customerType?: InputMaybe<CustomerType>;
  /** Disable shipping options in IFRAME_CHECKOUT. */
  disablePaymentShippingOptions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Recipt page url. */
  receiptPageUrl: Scalars['String']['input'];
  /** Shipping tags. */
  shippingTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Terms page url. */
  termUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CheckoutPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'CheckoutPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: CheckoutPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type CheckoutPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CheckoutPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type CheckoutPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type CheckoutPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type CheckoutPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CheckoutPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CheckoutPageFieldContainer = {
  __typename?: 'CheckoutPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type ClearCartPayload = {
  __typename?: 'ClearCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type ColumnBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ColumnBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ColumnBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ColumnBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ColumnBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ColumnBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ColumnBlockFieldContainer = {
  __typename?: 'ColumnBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  blockHeight?: Maybe<Scalars['Int']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentSpaceX?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceXDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceY?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceYDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  numberOfItemOnDesktop?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  numberOfItemOnMobile?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  widthOptionDesktop?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  widthOptionMobile?: Maybe<Array<TextOptionDefinition>>;
};

export type ColumnBlockFieldGroups = {
  __typename?: 'ColumnBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type CommonStylesBlockFieldDefinition = {
  __typename?: 'CommonStylesBlockFieldDefinition';
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  marginBottom?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginBottomDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginLeft?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginLeftDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginRight?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginRightDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginTop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  marginTopDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingBottom?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingBottomDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingLeft?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingLeftDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingRight?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingRightDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingTop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingTopDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  textAlign?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  textAlignDesktop?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  verticalAlign?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  verticalAlignDesktop?: Maybe<Array<TextOptionDefinition>>;
};

export type CommonStylesBlockFieldValues = IFieldValueItem & {
  __typename?: 'CommonStylesBlockFieldValues';
  /** The field data. */
  commonStylesBlockFieldValues?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyAddressWebsiteFieldDefinition = {
  __typename?: 'CompanyAddressWebsiteFieldDefinition';
  /** Translation missing */
  address1?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  address2?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  city?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  companyDescription?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  companyName?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  country?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  postCode?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  state?: Maybe<Scalars['String']['output']>;
};

export type CompanyAddressWebsiteFieldValues = IFieldValueItem & {
  __typename?: 'CompanyAddressWebsiteFieldValues';
  /** The field data. */
  companyAddressWebsiteFieldValues?: Maybe<Array<CompanyAddressWebsiteFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type ContentConnection = {
  __typename?: 'ContentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ContentEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IContent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ContentEdge = {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IContent;
};

export type ContentImageBlockFieldDefinition = {
  __typename?: 'ContentImageBlockFieldDefinition';
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  image?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageHeight?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageMobile?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageMobileHeight?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageMobileWidth?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  imageWidth?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  isFullWidthImage?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
};

export type ContentImageBlockFieldValues = IFieldValueItem & {
  __typename?: 'ContentImageBlockFieldValues';
  /** The field data. */
  contentImageBlockFieldValues?: Maybe<Array<ContentImageBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Represents a country. */
export type Country = {
  __typename?: 'Country';
  /** Country code. */
  code: Scalars['String']['output'];
  /** Currency for the country. */
  currency: Currency;
  /** Country name. */
  name: Scalars['String']['output'];
};

export type CreateCartPayload = {
  __typename?: 'CreateCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type CreateCheckoutSessionError = ValidationError;

export type CreateCheckoutSessionInput = {
  checkoutFlowInfo: CheckoutFlowInfoInput;
  notifications?: InputMaybe<NotificationInput>;
};

export type CreateCheckoutSessionPayload = {
  __typename?: 'CreateCheckoutSessionPayload';
  checkout?: Maybe<Checkout>;
  errors?: Maybe<Array<CreateCheckoutSessionError>>;
  query: StorefrontQuery;
};

/** Culture information. */
export type Culture = {
  __typename?: 'Culture';
  /** Culture code. */
  code: Scalars['String']['output'];
  /** Culture english name. */
  englishName: Scalars['String']['output'];
  /** Culture native name. */
  nativeName: Scalars['String']['output'];
};

/** Represents a currency. */
export type Currency = {
  __typename?: 'Currency';
  /** Currency code. */
  code: Scalars['String']['output'];
  /** Minor currency unit. */
  minorCurrencyUnit: Scalars['Short']['output'];
  /** Minor units. */
  minorUnits: Scalars['Short']['output'];
  /** Currency name. */
  name: Scalars['String']['output'];
  /** Currency symbol. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** Currency symbol position. */
  symbolPosition?: Maybe<CurrencyPositions>;
};

/** Currency positions. */
export enum CurrencyPositions {
  /** Left position without padding. */
  LEFT = 'LEFT',
  /** Left position with padding. */
  LEFT_WITH_PADDING = 'LEFT_WITH_PADDING',
  /** Right position without padding. */
  RIGHT = 'RIGHT',
  /** Right position with padding. */
  RIGHT_WITH_PADDING = 'RIGHT_WITH_PADDING'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  /** Orders for the current user. */
  orders?: Maybe<OrderConnection>;
  /** Person for the current user. */
  person: IPersonItem;
  /** Selected organization for the current user. */
  selectedOrganization?: Maybe<PersonOrganizationLink>;
};


export type CurrentUserordersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents a address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** Address line 1. */
  address1?: Maybe<Scalars['String']['output']>;
  /** Address line 2. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Address type. */
  addressType: CustomerAddressType;
  /** Care of. */
  careOf?: Maybe<Scalars['String']['output']>;
  /** City. */
  city?: Maybe<Scalars['String']['output']>;
  /** Country. */
  country?: Maybe<Scalars['String']['output']>;
  /** House extension. */
  houseExtension?: Maybe<Scalars['String']['output']>;
  /** House number. */
  houseNumber?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** State. */
  state?: Maybe<Scalars['String']['output']>;
  /** Zip code. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Represents a address. */
export type CustomerAddressInput = {
  /** Address line 1. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** Address line 2. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Address type. */
  addressTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Care of. */
  careOf?: InputMaybe<Scalars['String']['input']>;
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** House extension. */
  houseExtension?: InputMaybe<Scalars['String']['input']>;
  /** House number. */
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** State. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Zip code. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a address type. */
export type CustomerAddressType = Node & {
  __typename?: 'CustomerAddressType';
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Address type name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Represents a customer type. */
export enum CustomerType {
  /** Organization customer. */
  ORGANIZATION = 'ORGANIZATION',
  /** Personal customer. */
  PERSON = 'PERSON'
}

export type DateTimeValue = IFieldValueItem & {
  __typename?: 'DateTimeValue';
  /** The field data. */
  dateTimeValue?: Maybe<Scalars['DateTime']['output']>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Match information inside date time field. */
export type DateTimeValueItemInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Match values. */
  match: MatcherOfNullableOfDateTimeOffsetInput;
};

/** Operational hours information. */
export type DayOfWeekOperationalHours = {
  __typename?: 'DayOfWeekOperationalHours';
  /** Closed. */
  closed: Scalars['Boolean']['output'];
  /** Closing time. */
  closingTime?: Maybe<Scalars['TimeSpan']['output']>;
  /** English name for the day or week. */
  englishName: Scalars['String']['output'];
  /** Opening time. */
  openingTime?: Maybe<Scalars['TimeSpan']['output']>;
};

export type DecimalOptionDefinition = {
  __typename?: 'DecimalOptionDefinition';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['Decimal']['output'];
};

export type DecimalOptionFieldValues = IFieldValueItem & {
  __typename?: 'DecimalOptionFieldValues';
  /** The field data. */
  decimalOptionFieldValues?: Maybe<Array<DecimalOptionDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type DecimalOptions = {
  __typename?: 'DecimalOptions';
  items: Array<DecimalOptionsItem>;
  multiSelect: Scalars['Boolean']['output'];
};

export type DecimalOptionsItem = {
  __typename?: 'DecimalOptionsItem';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['Decimal']['output'];
};

export type DecimalValue = IFieldValueItem & {
  __typename?: 'DecimalValue';
  /** The field data. */
  decimalValue?: Maybe<Scalars['Decimal']['output']>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Match information inside nuber field. */
export type DecimalValueItemInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Match values. */
  match: MatcherOfNullableOfDecimalInput;
};

export type DefaultChannelFieldTemplateChannel = IChannelItem & Node & {
  __typename?: 'DefaultChannelFieldTemplateChannel';
  /** The analytics settings for the channel. */
  analytics: ChannelAnalysisSetting;
  /** Culture information for assortment. */
  assortmentCulture?: Maybe<Culture>;
  /** Culture information. */
  culture?: Maybe<Culture>;
  /** The possible delivery countries for the channel. */
  deliveryCountries: Array<Country>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: DefaultChannelFieldTemplateChannelFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Market for the channel. */
  market?: Maybe<IMarket>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Website for the channel. */
  website?: Maybe<IWebsite>;
};


export type DefaultChannelFieldTemplateChannelfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type DefaultChannelFieldTemplateChannelurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultChannelFieldTemplateChannelFieldContainer = {
  __typename?: 'DefaultChannelFieldTemplateChannelFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Sender email address */
  senderEmailAddress?: Maybe<Scalars['String']['output']>;
};

export type DefaultMarketFieldTemplateMarket = Node & {
  __typename?: 'DefaultMarketFieldTemplateMarket';
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: DefaultMarketFieldTemplateMarketFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
};


export type DefaultMarketFieldTemplateMarketfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type DefaultMarketFieldTemplateMarketFieldContainer = {
  __typename?: 'DefaultMarketFieldTemplateMarketFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

/** Delivery add on information. */
export type DeliveryAddOnOption = {
  __typename?: 'DeliveryAddOnOption';
  /** Add on id. */
  addOnId: Scalars['String']['output'];
  /** Description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name. */
  name: Scalars['String']['output'];
  /** Add on is preselected. */
  preselected: Scalars['Boolean']['output'];
  /** Price including VAT. */
  priceIncludingVat?: Maybe<Scalars['Decimal']['output']>;
  /** Add on is required. */
  required: Scalars['Boolean']['output'];
  /** VAT rate as decimal value (between 0 and 1). */
  vatRate?: Maybe<Scalars['Decimal']['output']>;
};

export type DeliveryAddonInput = {
  /** Add on id. */
  addOnId: Scalars['String']['input'];
};

/** Delivery date information. */
export type DeliveryDate = {
  __typename?: 'DeliveryDate';
  /** Cutoff date. */
  cutoff?: Maybe<Scalars['DateTime']['output']>;
  /** Earliest delivered at. */
  earliest?: Maybe<Scalars['DateTime']['output']>;
  /** Earliest delivered at the time of day. */
  earliestTimeOfDay?: Maybe<Scalars['TimeSpan']['output']>;
  /** Latest delivered at. */
  latest?: Maybe<Scalars['DateTime']['output']>;
  /** Latest delivered at the time of day. */
  latestTimeOfDay?: Maybe<Scalars['TimeSpan']['output']>;
};

/** Delivery option information. */
export type DeliveryOption = {
  __typename?: 'DeliveryOption';
  /** Add ons. */
  addOns?: Maybe<Array<DeliveryAddOnOption>>;
  /** Additional info. */
  additionalInfo?: Maybe<Array<AdditionalInfo>>;
  /** Delivery carrier id. */
  deliveryCarrierId?: Maybe<Scalars['String']['output']>;
  /** Delivery carrier name. */
  deliveryCarrierName?: Maybe<Scalars['String']['output']>;
  /** Delivery carrier service id. */
  deliveryCarrierServiceId?: Maybe<Scalars['String']['output']>;
  /** Delivery carrier service name. */
  deliveryCarrierServiceName?: Maybe<Scalars['String']['output']>;
  /** Delivery date. */
  deliveryDate?: Maybe<DeliveryDate>;
  /** Delivery option id. */
  deliveryOptionId: Scalars['String']['output'];
  /** Time slot for delivery. */
  deliveryTimeSlots?: Maybe<Array<DeliveryTimeSlot>>;
  /** Description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name. */
  name: Scalars['String']['output'];
  /** Pickup locations. */
  pickupLocations?: Maybe<Array<PickupLocation>>;
  /** Price including vat. */
  priceIncludingVat?: Maybe<Scalars['Decimal']['output']>;
  /** Shipping method. */
  shippingMethod?: Maybe<Scalars['String']['output']>;
  /** VAT rate as decimal value (between 0 and 1). */
  vatRate?: Maybe<Scalars['Decimal']['output']>;
};

/** Delivery option group to present for the customer. */
export type DeliveryOptionGroup = {
  __typename?: 'DeliveryOptionGroup';
  /** Delivery options the customer can select between. */
  items: Array<DeliveryOption>;
  /** Shipping group id. */
  shippingGroupId: Scalars['String']['output'];
};

export type DeliveryOptionInput = {
  /** Add ons. */
  addOns?: InputMaybe<Array<DeliveryAddonInput>>;
  /** Delivery option id. */
  deliveryOptionId: Scalars['String']['input'];
  /** Pickup location id. */
  pickupLocationId?: InputMaybe<Scalars['String']['input']>;
  /** Shipping group id. */
  shippingGroupId: Scalars['String']['input'];
  /** Time slot id. */
  timeSlotId?: InputMaybe<Scalars['String']['input']>;
};

/** Delivery time slots. */
export type DeliveryTimeSlot = {
  __typename?: 'DeliveryTimeSlot';
  /** Cutoff date. */
  cutoff?: Maybe<Scalars['DateTime']['output']>;
  /** End the time of day. */
  end: Scalars['TimeSpan']['output'];
  /** Start the time of day. */
  start: Scalars['TimeSpan']['output'];
  /** Time slot id. */
  timeSlotId: Scalars['String']['output'];
};

/** Represents a discount info. */
export type DiscountInfo = {
  __typename?: 'DiscountInfo';
  /** Description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount code used to activate this discount. */
  discountCode?: Maybe<Scalars['String']['output']>;
  /** Discount type. */
  discountType: Scalars['String']['output'];
  /** Describes if a product discount. */
  productDiscount: Scalars['Boolean']['output'];
  /** Result order row. */
  resultOrderRow: OrderRow;
  /** Source order rows. */
  sourceOrderRows: Array<OrderRow>;
};

/** The group of fields, that can be used in different areas when designing a page. Once an area is connected to a display group, administrators can configure which fields that should be shown in that group. */
export type DisplayFieldGroup = {
  __typename?: 'DisplayFieldGroup';
  /** Field group identifier. */
  fieldGroupId: Scalars['String']['output'];
  /** Field group fields. */
  fields: Array<IFieldValueItem>;
};

export type DistinctFacet = IFacet & {
  __typename?: 'DistinctFacet';
  /** Facet field. */
  field: Scalars['String']['output'];
  /** Facet items. */
  items: Array<DistinctFacetItem>;
  /** Facet name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type DistinctFacetItem = {
  __typename?: 'DistinctFacetItem';
  /** Number of entities belonging to this facet. */
  count: Scalars['Int']['output'];
  /** Gets the name of the facet. */
  name?: Maybe<Scalars['String']['output']>;
  /** Whether or not this facet was marked selected in the request. */
  selected: Scalars['Boolean']['output'];
  /** Gets the value of the facet. */
  value: Scalars['String']['output'];
};

/** Distinct facet item. */
export type DistinctFacetItemInput = {
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Selected values. */
  selected?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type ErrorPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'ErrorPage';
  /** The blocks for the page type. */
  blocks: ErrorPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ErrorPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type ErrorPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ErrorPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ErrorPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ErrorPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ErrorPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ErrorPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ErrorPageBlockContainer = {
  __typename?: 'ErrorPageBlockContainer';
  /** The blocks for BlockContainer. */
  blockContainer: Array<Maybe<IBlock>>;
};

export type ErrorPageFieldContainer = {
  __typename?: 'ErrorPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Text */
  editor?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type FAQBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'FAQBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: FAQBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: FAQBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type FAQBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type FAQBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type FAQBlockFieldContainer = {
  __typename?: 'FAQBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  fAQItem?: Maybe<Array<FAQItemBlockFieldDefinition>>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
};

export type FAQBlockFieldGroups = {
  __typename?: 'FAQBlockFieldGroups';
  /** Field group: FAQ */
  faq: FieldGroup;
};

export type FAQItemBlockFieldDefinition = {
  __typename?: 'FAQItemBlockFieldDefinition';
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** RichTitle */
  richTitle?: Maybe<Scalars['String']['output']>;
};

export type FAQItemBlockFieldValues = IFieldValueItem & {
  __typename?: 'FAQItemBlockFieldValues';
  /** The field data. */
  faqItemBlockFieldValues?: Maybe<Array<FAQItemBlockFieldDefinition>>;
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type FacetGroupItem = {
  __typename?: 'FacetGroupItem';
  /** The facet group id. */
  id: Scalars['String']['output'];
  /** The facet group label. */
  label?: Maybe<Scalars['String']['output']>;
  /** The facet items. */
  options: Array<Maybe<FacetItem>>;
  /** If single select facet group. */
  singleSelect?: Maybe<Scalars['Boolean']['output']>;
};

export type FacetItem = {
  __typename?: 'FacetItem';
  /** The facet group id. */
  id: Scalars['String']['output'];
  /** The facet group label. */
  label?: Maybe<Scalars['String']['output']>;
  /** The facet quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Is the facet item selected. */
  selected: Scalars['Boolean']['output'];
};

/** Failure. */
export type Failure = Error & {
  __typename?: 'Failure';
  /** Failure message. */
  message: Scalars['String']['output'];
  /** Failure type. */
  type: Scalars['String']['output'];
};

/** Field group storage. */
export type FieldGroup = {
  __typename?: 'FieldGroup';
  /** Field group identifier. */
  fieldGroupId: Scalars['String']['output'];
  /** Field group fields. */
  fields: Array<IFieldValueItem>;
  /** Field group name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Filter field group. */
export type FieldGroupFilterInput = {
  /** Filter based on the field group id. */
  id?: InputMaybe<SimpleStringFilterInput>;
};

export type FieldTypeMetadataBoolean = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataBoolean';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataCustomerPointerOrganization = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataCustomerPointerOrganization';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataDate = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataDate';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataDateTime = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataDateTime';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataDecimal = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataDecimal';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataDecimalOption = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataDecimalOption';
  /** Field metadata for fields of type DecimalOption. */
  decimalOptions?: Maybe<DecimalOptions>;
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataEditor = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataEditor';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataFilterFields = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataFilterFields';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataInt = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataInt';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataIntOption = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataIntOption';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Field metadata for fields of type IntOption. */
  intOptions?: Maybe<IntOptions>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataLimitedText = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataLimitedText';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataLink = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataLink';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataLong = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataLong';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataMediaPointerFile = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataMediaPointerFile';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataMediaPointerImage = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataMediaPointerImage';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataMediaPointerImageArray = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataMediaPointerImageArray';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataMultiField = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataMultiField';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Field metadata for fields of type TextOption. */
  multiFieldmultiFieldOptions?: Maybe<MultiFieldOptions>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataMultirowText = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataMultirowText';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataObject = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataObject';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataPointer = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataPointer';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Field metadata for fields of type Pointer. */
  pointerOptions?: Maybe<PointerOptions>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataText = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataText';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type FieldTypeMetadataTextOption = IFieldMetadataItem & {
  __typename?: 'FieldTypeMetadataTextOption';
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the input model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Field metadata for fields of type TextOption. */
  textOptions?: Maybe<TextOptions>;
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

/** Field update error. */
export type FieldUpdateError = Error & {
  __typename?: 'FieldUpdateError';
  /** Error message. */
  message: Scalars['String']['output'];
};

export type FieldValueUpdateBooleanValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FieldValueUpdateDateTimeValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FieldValueUpdateDecimalValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['Decimal']['input']>;
};

export type FieldValueUpdateDecimalValues = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type FieldValueUpdateInput = {
  booleanValue?: InputMaybe<FieldValueUpdateBooleanValue>;
  dateTimeValue?: InputMaybe<FieldValueUpdateDateTimeValue>;
  decimalValue?: InputMaybe<FieldValueUpdateDecimalValue>;
  decimalValues?: InputMaybe<FieldValueUpdateDecimalValues>;
  intValue?: InputMaybe<FieldValueUpdateIntValue>;
  intValues?: InputMaybe<FieldValueUpdateIntValues>;
  longValue?: InputMaybe<FieldValueUpdateLongValue>;
  stringValue?: InputMaybe<FieldValueUpdateStringValue>;
  stringValues?: InputMaybe<FieldValueUpdateStringValues>;
};

export type FieldValueUpdateIntValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FieldValueUpdateIntValues = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type FieldValueUpdateLongValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['Long']['input']>;
};

export type FieldValueUpdateStringValue = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FieldValueUpdateStringValues = {
  /** Global Unique Id. */
  id: Scalars['ID']['input'];
  /** The field data. */
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type File = IFileItem & {
  __typename?: 'File';
  alt?: Maybe<Scalars['String']['output']>;
  /** The filename */
  filename: Scalars['String']['output'];
  /** The url of the image. */
  url: Scalars['String']['output'];
};

export type FilterDataInput = {
  endsWith?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type FilterInput = {
  /** Exclude items matching the filter. */
  exclude?: InputMaybe<FilterDataInput>;
  /** Include items matching the filter. */
  include?: InputMaybe<FilterDataInput>;
};

export type FooterColumnBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'FooterColumnBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: FooterColumnBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type FooterColumnBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type FooterColumnBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type FooterColumnBlockFieldContainer = {
  __typename?: 'FooterColumnBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** NavigationLinksHeader */
  navigationLinksHeader?: Maybe<LinkFieldDefinition>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type FooterContainerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'FooterContainerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: FooterContainerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type FooterContainerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type FooterContainerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type FooterContainerBlockFieldContainer = {
  __typename?: 'FooterContainerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

export type FooterLinksBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'FooterLinksBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: FooterLinksBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type FooterLinksBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type FooterLinksBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type FooterLinksBlockFieldContainer = {
  __typename?: 'FooterLinksBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** NavigationLinksHeader */
  navigationLinksHeader?: Maybe<LinkFieldDefinition>;
};

export type FooterWebsiteFieldDefinition = {
  __typename?: 'FooterWebsiteFieldDefinition';
  /** Link list */
  footerLinkList?: Maybe<Array<PointerPageItem>>;
  /** Text */
  footerText?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type FooterWebsiteFieldValues = IFieldValueItem & {
  __typename?: 'FooterWebsiteFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** The field data. */
  footerWebsiteFieldValues?: Maybe<Array<FooterWebsiteFieldDefinition>>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Forbidden. */
export type Forbidden = Error & {
  __typename?: 'Forbidden';
  /** Forbidden message. */
  message: Scalars['String']['output'];
};

/** Forbidden error. */
export type ForbiddenError = {
  __typename?: 'ForbiddenError';
  /** Message */
  message: Scalars['String']['output'];
  /** Query data when results are forbidden for the URL. */
  query?: Maybe<StorefrontQuery>;
};

export type ForgotPasswordPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'ForgotPasswordPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ForgotPasswordPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type ForgotPasswordPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ForgotPasswordPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ForgotPasswordPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ForgotPasswordPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ForgotPasswordPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ForgotPasswordPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForgotPasswordPageFieldContainer = {
  __typename?: 'ForgotPasswordPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Body */
  forgottenPasswordBody?: Maybe<Scalars['String']['output']>;
  /** Body */
  forgottenPasswordLockedBody?: Maybe<Scalars['String']['output']>;
  /** Subject */
  forgottenPasswordLockedSubject?: Maybe<Scalars['String']['output']>;
  /** Subject */
  forgottenPasswordSubject?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Configure the fuzziness. Defaults generates an edit distance based on the length of the term. */
export type FuzzinessItemInput = {
  /** The maximum allowed Levenshtein Edit Distance (or number of edits). */
  distance?: InputMaybe<Scalars['Int']['input']>;
  /** Generates an edit distance based on the length of the term. */
  length?: InputMaybe<FuzzinessLengthInput>;
  /** Ratio. */
  ratio?: InputMaybe<Scalars['Float']['input']>;
};

/** Configure the edit distance based on the length of the term. */
export type FuzzinessLengthInput = {
  /** Two edits allowed for terms with greater length. */
  high: Scalars['Int']['input'];
  /** Must match exactly for terms with less length */
  low: Scalars['Int']['input'];
};

export type GlobalBlockPreview = {
  __typename?: 'GlobalBlockPreview';
  block: IBlock;
  page: IPageItem;
};

export type HaColumnBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'HaColumnBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: HaColumnBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type HaColumnBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type HaColumnBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type HaColumnBlockFieldContainer = {
  __typename?: 'HaColumnBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

export type HaRowBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'HaRowBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: HaRowBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type HaRowBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type HaRowBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type HaRowBlockFieldContainer = {
  __typename?: 'HaRowBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

export type HeaderUserInfoBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'HeaderUserInfoBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: HeaderUserInfoBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: HeaderUserInfoBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type HeaderUserInfoBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type HeaderUserInfoBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type HeaderUserInfoBlockFieldContainer = {
  __typename?: 'HeaderUserInfoBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  button?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Link */
  link?: Maybe<Array<PointerPageItem>>;
  /** Translation missing */
  userInfo?: Maybe<Array<Pointer>>;
};

export type HeaderUserInfoBlockFieldDefinition = {
  __typename?: 'HeaderUserInfoBlockFieldDefinition';
  /** Translation missing */
  buttonLink?: Maybe<LinkFieldDefinition>;
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  userInfo?: Maybe<Array<Pointer>>;
};

export type HeaderUserInfoBlockFieldGroups = {
  __typename?: 'HeaderUserInfoBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type HeaderUserInfoBlockFieldValues = IFieldValueItem & {
  __typename?: 'HeaderUserInfoBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** The field data. */
  headerUserInfoBlockFieldValues?: Maybe<Array<HeaderUserInfoBlockFieldDefinition>>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type HomePage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'HomePage';
  /** The blocks for the page type. */
  blocks: HomePageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: HomePageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type HomePagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HomePagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type HomePagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type HomePageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HomePageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageBlockContainer = {
  __typename?: 'HomePageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type HomePageFieldContainer = {
  __typename?: 'HomePageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

export type IBlock = BannerBlock | BannerItemBlock | BrandBlock | ButtonBlock | ColumnBlock | FAQBlock | FooterColumnBlock | FooterContainerBlock | FooterLinksBlock | HaColumnBlock | HaRowBlock | HeaderUserInfoBlock | ImageItemBlock | ImageListBlock | ImageTextBlocksBlock | ImageTextItemBlock | NavigationContainerBlock | NavigationItemBlock | NavigationLinksBlock | ObjectItemBlock | PrimaryNavigationBannerBlock | PrimaryNavigationCategoriesBlock | PrimaryNavigationColumnBlock | PrimaryNavigationLinkBlock | ProductBlock | ProductsAndBannerBlock | ProductsBlock | RatingReviewItemBlock | RichContentBlock | RowBlock | SecondaryNavigationLinkBlock | SectionBlock | SliderBlock | SubscribeBlock | TextImageBlockBlock | TopHeaderBlock | TopHeaderContainerBlock | VideoBlock;

export type IBlockItem = {
  /** The block system Id */
  systemId: Scalars['UUID']['output'];
};

export type ICategoryItem = {
  /** Get the children for this item. */
  children?: Maybe<CategoryConnection>;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type ICategoryItemchildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ICategoryItemimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type ICategoryItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ICategoryItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ICategoryItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ICategoryOrProduct = CategoryProductCategory | ProductWithOneVariantProduct | ProductWithVariantsFurnitureProduct | ProductWithVariantsListProduct | ProductWithVariantsProduct | RestrictedCategoryItem | RestrictedProductItem;

export type IChannel = DefaultChannelFieldTemplateChannel;

export type IChannelItem = {
  /** The analytics settings for the channel. */
  analytics: ChannelAnalysisSetting;
  /** Culture information for assortment. */
  assortmentCulture?: Maybe<Culture>;
  /** Culture information. */
  culture?: Maybe<Culture>;
  /** The possible delivery countries for the channel. */
  deliveryCountries: Array<Country>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The market for the channel. */
  market?: Maybe<IMarket>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** The website for the channel. */
  website?: Maybe<IWebsite>;
};


export type IChannelItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IContent = ArticlePage | AuthorizationError | BrandListPage | BrandPage | CategoryProductCategory | CheckoutPage | ErrorPage | ForbiddenError | ForgotPasswordPage | GlobalBlockPreview | HomePage | LandingPage | LoginPage | MegaMenuPage | MyAccountAddressesPage | MyAccountDashboardPage | MyAccountLoginDetailsPage | MyAccountMyProfilePage | MyAccountOrderHistoryPage | MyAccountOrderPage | MyPagesPage | NewsListPage | NewsPage | NotFoundError | OrderConfirmationPage | OrderHistoryPage | OrderPage | PageNotFoundPage | ProductListPage | ProductWithOneVariantProduct | ProductWithVariantsFurnitureProduct | ProductWithVariantsListProduct | ProductWithVariantsProduct | Redirect | RestrictedCategoryItem | RestrictedPageItem | RestrictedProductItem | SearchResultPage | SiteSelectorPage | WelcomeEmailPage;

export type IContentItem = {
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type IContentItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IContentItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Facet item. */
export type IFacet = {
  /** Facet field. */
  field: Scalars['String']['output'];
  /** Facet name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type IFieldMetadataItem = {
  /** Field type. */
  fieldType: Scalars['String']['output'];
  /** Field in the update model that values should be assigned to when the field is modified. */
  inputField?: Maybe<Scalars['String']['output']>;
  /** Model that will should be used when the field is modified. */
  inputModel?: Maybe<Scalars['String']['output']>;
  /** Flag indicating if the field values will be readable by the user. */
  readable: Scalars['Boolean']['output'];
  /** Flag indicating if the field values will be writable by the user. */
  writable: Scalars['Boolean']['output'];
};

export type IFieldValueItem = {
  /** Field id. */
  field: Scalars['String']['output'];
  /** Field metadata. */
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type IFileItem = {
  alt?: Maybe<Scalars['String']['output']>;
  /** The filename */
  filename: Scalars['String']['output'];
  /** The url of the image. */
  url: Scalars['String']['output'];
};

export type IImageItem = {
  alt?: Maybe<Scalars['String']['output']>;
  /** The dimension of the image. */
  dimension?: Maybe<Size>;
  filename: Scalars['String']['output'];
  /** The url of the image. */
  url: Scalars['String']['output'];
};

export type IMarket = DefaultMarketFieldTemplateMarket;

export type IOrganizationItem = {
  /** Addresses connected to the organization. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the organization. */
  customerNumber: Scalars['String']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Orders connected to the organization. */
  orders?: Maybe<OrderConnection>;
  /** Persons connected to the organization. */
  persons?: Maybe<PersonConnection>;
};


export type IOrganizationItemordersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type IOrganizationItempersonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type IPageItem = {
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type IPageItemchildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IPageItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type IPageItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type IPageItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IPageOrCategory = ArticlePage | BrandListPage | BrandPage | CategoryProductCategory | CheckoutPage | ErrorPage | ForgotPasswordPage | HomePage | LandingPage | LoginPage | MegaMenuPage | MyAccountAddressesPage | MyAccountDashboardPage | MyAccountLoginDetailsPage | MyAccountMyProfilePage | MyAccountOrderHistoryPage | MyAccountOrderPage | MyPagesPage | NewsListPage | NewsPage | OrderConfirmationPage | OrderHistoryPage | OrderPage | PageNotFoundPage | ProductListPage | RestrictedCategoryItem | RestrictedPageItem | SearchResultPage | SiteSelectorPage | WelcomeEmailPage;

export type IPersonItem = {
  /** Addresses connected to the person. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the person. */
  customerNumber: Scalars['String']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Organizations connected to the person. */
  organizations?: Maybe<OrganizationConnection>;
};


export type IPersonItemorganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type IPointerItem = {
  entitySystemId: Scalars['UUID']['output'];
};

export type IProductItem = {
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  isVariant: Scalars['Boolean']['output'];
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
};


export type IProductItemimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};

export type IRelationshipItem = {
  /** Get the items data for relationships. */
  items?: Maybe<CategoryOrProductConnection>;
  /** The name of the relationship. */
  name?: Maybe<Scalars['String']['output']>;
  /** The id of the relationship. */
  relationshipId: Scalars['String']['output'];
};


export type IRelationshipItemitemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ITemplateInfo = {
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};

export type IWebsite = AcceleratorWebsiteWebsite;

export type IWebsiteItem = {
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Website texts */
  texts: Array<WebsiteText>;
};


export type IWebsiteItemtextsArgs = {
  filter?: InputMaybe<FilterInput>;
};

export type Image = IImageItem & {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']['output']>;
  /** The dimension of the image. */
  dimension?: Maybe<Size>;
  filename: Scalars['String']['output'];
  /** The url of the image. */
  url: Scalars['String']['output'];
};

export type ImageItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ImageItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ImageItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ImageItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ImageItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ImageItemBlockFieldContainer = {
  __typename?: 'ImageItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  contentImage?: Maybe<Array<ContentImageBlockFieldDefinition>>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type ImageListBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ImageListBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ImageListBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ImageListBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ImageListBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ImageListBlockFieldContainer = {
  __typename?: 'ImageListBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentSpaceX?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceXDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceY?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceYDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  numberOfItemOnDesktop?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  numberOfItemOnMobile?: Maybe<Scalars['Decimal']['output']>;
};

export type ImageTextBlocksBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ImageTextBlocksBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ImageTextBlocksBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ImageTextBlocksBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ImageTextBlocksBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ImageTextBlocksBlockFieldContainer = {
  __typename?: 'ImageTextBlocksBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type ImageTextItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ImageTextItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ImageTextItemBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ImageTextItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ImageTextItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ImageTextItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ImageTextItemBlockFieldContainer = {
  __typename?: 'ImageTextItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundLink?: Maybe<LinkFieldDefinition>;
  /** Translation missing */
  button?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentImage?: Maybe<Array<ContentImageBlockFieldDefinition>>;
  /** Translation missing */
  contentImagePosition?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type ImageTextItemBlockFieldGroups = {
  __typename?: 'ImageTextItemBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type IntOptionDefinition = {
  __typename?: 'IntOptionDefinition';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['Int']['output'];
};

export type IntOptionFieldValues = IFieldValueItem & {
  __typename?: 'IntOptionFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  intOptionFieldValues?: Maybe<Array<IntOptionDefinition>>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type IntOptions = {
  __typename?: 'IntOptions';
  items: Array<IntOptionsItem>;
  multiSelect: Scalars['Boolean']['output'];
};

export type IntOptionsItem = {
  __typename?: 'IntOptionsItem';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['Int']['output'];
};

export type IntValue = IFieldValueItem & {
  __typename?: 'IntValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  intValue?: Maybe<Scalars['Int']['output']>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type KeyValuePairOfStringAndStringInput = {
  /** Additional info key. */
  key: Scalars['String']['input'];
  /** Additional info value. */
  value: Scalars['String']['input'];
};

export type LandingPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'LandingPage';
  /** The blocks for the page type. */
  blocks: LandingPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: LandingPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type LandingPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LandingPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type LandingPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type LandingPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LandingPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageBlockContainer = {
  __typename?: 'LandingPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type LandingPageFieldContainer = {
  __typename?: 'LandingPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type LinkFieldDefinition = {
  __typename?: 'LinkFieldDefinition';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LinkFieldValue = IFieldValueItem & {
  __typename?: 'LinkFieldValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  linkFieldValue?: Maybe<LinkFieldDefinition>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type LinksBlockFieldDefinition = {
  __typename?: 'LinksBlockFieldDefinition';
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type LinksBlockFieldValues = IFieldValueItem & {
  __typename?: 'LinksBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  linksBlockFieldValues?: Maybe<Array<LinksBlockFieldDefinition>>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type LoginPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'LoginPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: LoginPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type LoginPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LoginPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type LoginPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type LoginPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type LoginPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LoginPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoginPageFieldContainer = {
  __typename?: 'LoginPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** New Password */
  newPassword?: Maybe<Scalars['String']['output']>;
};

export type LongValue = IFieldValueItem & {
  __typename?: 'LongValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  longValue?: Maybe<Scalars['Long']['output']>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ManageAddressForOrganizationError = Forbidden;

export type ManageAddressForOrganizationInput = {
  /** The address for the organization that should be added or updated. */
  address: CustomerAddressInput;
  /** The address id to update an address, omit to create a new address. */
  addressId?: InputMaybe<Scalars['ID']['input']>;
  /** The organization id, omit to use selected organization. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type ManageAddressForOrganizationPayload = {
  __typename?: 'ManageAddressForOrganizationPayload';
  customerAddress?: Maybe<CustomerAddress>;
  errors?: Maybe<Array<ManageAddressForOrganizationError>>;
  query: StorefrontQuery;
};

export type ManageAddressForPersonError = Forbidden;

export type ManageAddressForPersonInput = {
  /** The address for the persion that should be added or updated. */
  address: CustomerAddressInput;
  /** The address id to update an address, omit to create a new address. */
  addressId?: InputMaybe<Scalars['ID']['input']>;
  /** The person id, omit to use current user. */
  personId?: InputMaybe<Scalars['ID']['input']>;
};

export type ManageAddressForPersonPayload = {
  __typename?: 'ManageAddressForPersonPayload';
  customerAddress?: Maybe<CustomerAddress>;
  errors?: Maybe<Array<ManageAddressForPersonError>>;
  query: StorefrontQuery;
};

export type ManageOrganizationPersonLink = {
  __typename?: 'ManageOrganizationPersonLink';
  /** Organization */
  organization: IOrganizationItem;
  /** Person */
  person: IPersonItem;
  /** Roles */
  roles: Array<Role>;
};

export type ManagePersonInOrganizationError = Forbidden;

export type ManagePersonInOrganizationInput = {
  /** The roles for the person in the organization that should be added. */
  addRoleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The organization id. */
  organizationId: Scalars['ID']['input'];
  /** The person id. */
  personId: Scalars['ID']['input'];
  /** The roles for the person in the organization that should be removed. */
  removeRoleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ManagePersonInOrganizationPayload = {
  __typename?: 'ManagePersonInOrganizationPayload';
  errors?: Maybe<Array<ManagePersonInOrganizationError>>;
  manageOrganizationPersonLink?: Maybe<ManageOrganizationPersonLink>;
  query: StorefrontQuery;
};

/** Matcher for fields. */
export type MatcherOfNullableOfDateTimeOffsetInput = {
  /** Match on ange value. */
  range?: InputMaybe<RangeMatchOfNullableOfDateTimeOffsetInput>;
  /** Exact match on value. */
  value?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Matcher for fields. */
export type MatcherOfNullableOfDecimalInput = {
  /** Match on ange value. */
  range?: InputMaybe<RangeMatchOfNullableOfDecimalInput>;
  /** Exact match on value. */
  value?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MegaMenuColumnWebsiteFieldDefinition = {
  __typename?: 'MegaMenuColumnWebsiteFieldDefinition';
  /** Additional link */
  megaMenuAdditionalLink?: Maybe<Scalars['String']['output']>;
  /** Categories */
  megaMenuCategories?: Maybe<Array<PointerProductCategoryItem>>;
  /** Column header */
  megaMenuColumnHeader?: Maybe<Scalars['String']['output']>;
  /** Editor */
  megaMenuEditor?: Maybe<Scalars['String']['output']>;
  /** Filters */
  megaMenuFilters?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Link to category */
  megaMenuLinkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  megaMenuLinkToPage?: Maybe<Array<PointerPageItem>>;
  /** Pages */
  megaMenuPages?: Maybe<Array<PointerPageItem>>;
};

export type MegaMenuColumnWebsiteFieldValues = IFieldValueItem & {
  __typename?: 'MegaMenuColumnWebsiteFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The field data. */
  megaMenuColumnWebsiteFieldValues?: Maybe<Array<MegaMenuColumnWebsiteFieldDefinition>>;
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type MegaMenuPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MegaMenuPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MegaMenuPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MegaMenuPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MegaMenuPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MegaMenuPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MegaMenuPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MegaMenuPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuPageFieldContainer = {
  __typename?: 'MegaMenuPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Category */
  megaMenuCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Mega menu column */
  megaMenuColumn?: Maybe<Array<MegaMenuColumnWebsiteFieldDefinition>>;
  /** Page */
  megaMenuPage?: Maybe<Array<PointerPageItem>>;
  /** Show mega menu content */
  megaMenuShowContent?: Maybe<Scalars['Boolean']['output']>;
  /** Show sub categories */
  megaMenuShowSubCategories?: Maybe<Scalars['Boolean']['output']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  language: Scalars['String']['output'];
  links: Array<MetadateLinkItem>;
  tags: Array<MetadateTagItem>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MetadateLinkItem = {
  __typename?: 'MetadateLinkItem';
  attributes: Array<MetadateLinkItemAttribute>;
  href: Scalars['String']['output'];
};

export type MetadateLinkItemAttribute = {
  __typename?: 'MetadateLinkItemAttribute';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MetadateTagItem = {
  __typename?: 'MetadateTagItem';
  content: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MultiFieldOptions = {
  __typename?: 'MultiFieldOptions';
  array: Scalars['Boolean']['output'];
  fields: Array<MultiFieldOptionsField>;
};

export type MultiFieldOptionsField = {
  __typename?: 'MultiFieldOptionsField';
  fieldId: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  name?: Maybe<Scalars['String']['output']>;
};

export type MyAccountAddressesPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountAddressesPage';
  /** The blocks for the page type. */
  blocks: MyAccountAddressesPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountAddressesPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountAddressesPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountAddressesPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountAddressesPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountAddressesPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountAddressesPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountAddressesPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountAddressesPageBlockContainer = {
  __typename?: 'MyAccountAddressesPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type MyAccountAddressesPageFieldContainer = {
  __typename?: 'MyAccountAddressesPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyAccountDashboardPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountDashboardPage';
  /** The blocks for the page type. */
  blocks: MyAccountDashboardPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountDashboardPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountDashboardPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountDashboardPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountDashboardPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountDashboardPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountDashboardPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountDashboardPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountDashboardPageBlockContainer = {
  __typename?: 'MyAccountDashboardPageBlockContainer';
  /** The blocks for Content. */
  content: Array<Maybe<IBlock>>;
  /** The blocks for Top. */
  top: Array<Maybe<IBlock>>;
};

export type MyAccountDashboardPageFieldContainer = {
  __typename?: 'MyAccountDashboardPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyAccountLoginDetailsPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountLoginDetailsPage';
  /** The blocks for the page type. */
  blocks: MyAccountLoginDetailsPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountLoginDetailsPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountLoginDetailsPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountLoginDetailsPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountLoginDetailsPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountLoginDetailsPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountLoginDetailsPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountLoginDetailsPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountLoginDetailsPageBlockContainer = {
  __typename?: 'MyAccountLoginDetailsPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type MyAccountLoginDetailsPageFieldContainer = {
  __typename?: 'MyAccountLoginDetailsPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyAccountMyProfilePage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountMyProfilePage';
  /** The blocks for the page type. */
  blocks: MyAccountMyProfilePageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountMyProfilePageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountMyProfilePagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountMyProfilePagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountMyProfilePagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountMyProfilePageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountMyProfilePageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountMyProfilePageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountMyProfilePageBlockContainer = {
  __typename?: 'MyAccountMyProfilePageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type MyAccountMyProfilePageFieldContainer = {
  __typename?: 'MyAccountMyProfilePageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyAccountOrderHistoryPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountOrderHistoryPage';
  /** The blocks for the page type. */
  blocks: MyAccountOrderHistoryPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountOrderHistoryPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountOrderHistoryPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountOrderHistoryPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountOrderHistoryPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountOrderHistoryPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountOrderHistoryPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountOrderHistoryPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountOrderHistoryPageBlockContainer = {
  __typename?: 'MyAccountOrderHistoryPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type MyAccountOrderHistoryPageFieldContainer = {
  __typename?: 'MyAccountOrderHistoryPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyAccountOrderPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyAccountOrderPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyAccountOrderPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyAccountOrderPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountOrderPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountOrderPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyAccountOrderPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyAccountOrderPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyAccountOrderPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyAccountOrderPageFieldContainer = {
  __typename?: 'MyAccountOrderPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type MyPagesPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'MyPagesPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: MyPagesPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type MyPagesPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyPagesPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyPagesPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type MyPagesPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MyPagesPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MyPagesPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyPagesPageFieldContainer = {
  __typename?: 'MyPagesPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** User can edit login username and password */
  mayUserEditLogin?: Maybe<Scalars['Boolean']['output']>;
};

export type NavigationContainerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'NavigationContainerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: NavigationContainerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type NavigationContainerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NavigationContainerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type NavigationContainerBlockFieldContainer = {
  __typename?: 'NavigationContainerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** LayoutDesktop */
  layoutDesktop?: Maybe<Array<TextOptionDefinition>>;
  /** LayoutMobile */
  layoutMobile?: Maybe<Array<TextOptionDefinition>>;
  /** LayoutTablet */
  layoutTablet?: Maybe<Array<TextOptionDefinition>>;
};

export type NavigationItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'NavigationItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: NavigationItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type NavigationItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NavigationItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type NavigationItemBlockFieldContainer = {
  __typename?: 'NavigationItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  bannerItem?: Maybe<Array<BannerItemBlockFieldDefinition>>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type NavigationLinksBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'NavigationLinksBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: NavigationLinksBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type NavigationLinksBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NavigationLinksBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type NavigationLinksBlockFieldContainer = {
  __typename?: 'NavigationLinksBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Collapsible Mobile */
  collapsibleMobile?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  headerLabel?: Maybe<Scalars['String']['output']>;
  /** Navigation links */
  navigationLinks?: Maybe<Array<NavigationLinksBlockFieldDefinition>>;
  /** NavigationLinksHeader */
  navigationLinksHeader?: Maybe<LinkFieldDefinition>;
};

export type NavigationLinksBlockFieldDefinition = {
  __typename?: 'NavigationLinksBlockFieldDefinition';
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type NavigationLinksBlockFieldValues = IFieldValueItem & {
  __typename?: 'NavigationLinksBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  navigationLinksBlockFieldValues?: Maybe<Array<NavigationLinksBlockFieldDefinition>>;
};

export type NewFAQItemBlockFieldDefinition = {
  __typename?: 'NewFAQItemBlockFieldDefinition';
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type NewFAQItemBlockFieldValues = IFieldValueItem & {
  __typename?: 'NewFAQItemBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  newFAQItemBlockFieldValues?: Maybe<Array<NewFAQItemBlockFieldDefinition>>;
};

export type NewProductSpecificationsProductFieldDefinition = {
  __typename?: 'NewProductSpecificationsProductFieldDefinition';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  newSpecificationItem?: Maybe<Scalars['String']['output']>;
};

export type NewProductSpecificationsProductFieldValues = IFieldValueItem & {
  __typename?: 'NewProductSpecificationsProductFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  newProductSpecificationsProductFieldValues?: Maybe<Array<NewProductSpecificationsProductFieldDefinition>>;
};

export type NewRatingItemBlockFieldDefinition = {
  __typename?: 'NewRatingItemBlockFieldDefinition';
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  ratingNumber?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  ratingStatus?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** RichTitle */
  richTitle?: Maybe<Scalars['String']['output']>;
};

export type NewRatingItemBlockFieldValues = IFieldValueItem & {
  __typename?: 'NewRatingItemBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  newRatingItemBlockFieldValues?: Maybe<Array<NewRatingItemBlockFieldDefinition>>;
};

export type NewsDateInput = {
  /** From date */
  from: Scalars['DateTime']['input'];
  /** To date */
  to: Scalars['DateTime']['input'];
};

export type NewsListPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'NewsListPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: NewsListPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type NewsListPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsListPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NewsListPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NewsListPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsListPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsListPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsListPageFieldContainer = {
  __typename?: 'NewsListPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Files */
  files?: Maybe<Array<PointerMediaFileItem>>;
  /** Introduction */
  introduction?: Maybe<Scalars['String']['output']>;
  /** Links */
  links?: Maybe<Array<PointerPageItem>>;
  /** Number of news per page */
  numberOfNewsPerPage?: Maybe<Scalars['Int']['output']>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type NewsPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'NewsPage';
  /** The blocks for the page type. */
  blocks: NewsPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: NewsPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type NewsPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NewsPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type NewsPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NewsPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsPageBlockContainer = {
  __typename?: 'NewsPageBlockContainer';
  /** The blocks for Header. */
  header: Array<Maybe<IBlock>>;
};

export type NewsPageFieldContainer = {
  __typename?: 'NewsPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Files */
  files?: Maybe<Array<PointerMediaFileItem>>;
  /** Image */
  image?: Maybe<PointerMediaImageItem>;
  /** Introduction */
  introduction?: Maybe<Scalars['String']['output']>;
  /** Links */
  links?: Maybe<Array<PointerPageItem>>;
  /** News date */
  newsDate?: Maybe<Scalars['DateTime']['output']>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Match information inside text field. */
export type NgramStringFieldTermInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Configure fuzziness. */
  fuzziness?: InputMaybe<FuzzinessItemInput>;
  /** Type of search for this field that should be used. */
  searchType?: InputMaybe<StringFieldSearchType>;
  /** Use synonym analyzer capability. */
  synonymAnalyzer?: Scalars['Boolean']['input'];
  /** Value to match. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID']['output'];
};

/** Not found. */
export type NotFoundError = {
  __typename?: 'NotFoundError';
  /** Query data when no results are found for the URL. */
  query?: Maybe<StorefrontQuery>;
};


/** Not found. */
export type NotFoundErrorqueryArgs = {
  contextUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Notification urls */
export type NotificationInput = {
  /** A notification will be sent when order is confirmed. */
  orderConfirmedUrl?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationType = {
  __typename?: 'NotificationType';
  /** A notification will be sent when order is confirmed. */
  orderConfirmedUrl?: Maybe<Scalars['String']['output']>;
};

export type ObjectItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ObjectItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ObjectItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ObjectItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ObjectItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ObjectItemBlockFieldContainer = {
  __typename?: 'ObjectItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Icon Src */
  iconSrc?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type ObjectItemBlockFieldDefinition = {
  __typename?: 'ObjectItemBlockFieldDefinition';
  /** Icon Src */
  iconSrc?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Link */
  link?: Maybe<Array<PointerPageItem>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type ObjectItemBlockFieldValues = IFieldValueItem & {
  __typename?: 'ObjectItemBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  objectItemBlockFieldValues?: Maybe<Array<ObjectItemBlockFieldDefinition>>;
};

/** Represents a order. */
export type Order = Node & {
  __typename?: 'Order';
  /** Additional order info. */
  additionalInfo: Array<AdditionalInfo>;
  /** Additional shipping info. */
  additionalShippingInfo: Array<AdditionalInfo>;
  /** Billing address. */
  billingAddress: OrderAddress;
  /** Country selected for shipping. */
  country: Country;
  /** Currency for the order. */
  currency: Currency;
  /** Customer details. */
  customerDetails: OrderCustomerDetails;
  /** Discount information. */
  discountInfos: Array<DiscountInfo>;
  /** Grand total (includes VAT) */
  grandTotal: Scalars['Decimal']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Order note. */
  note?: Maybe<Scalars['String']['output']>;
  /** Order date. */
  orderDate: Scalars['DateTime']['output'];
  /** Order number. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** Product total excluding VAT. */
  productTotalExcludingVat: Scalars['Decimal']['output'];
  /** Product total including VAT. */
  productTotalIncludingVat: Scalars['Decimal']['output'];
  /** Order rows. */
  rows: Array<OrderRow>;
  /** Shipping address. */
  shippingAddress: OrderAddress;
  /** Shipping cost excluding VAT. */
  shippingCostExcludingVat: Scalars['Decimal']['output'];
  /** Shipping cost including VAT. */
  shippingCostIncludingVat: Scalars['Decimal']['output'];
  /** Order status */
  status?: Maybe<Scalars['String']['output']>;
  /** Order tags */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Total fee excluding VAT. */
  totalFeesExcludingVat: Scalars['Decimal']['output'];
  /** Total fee including VAT. */
  totalFeesIncludingVat: Scalars['Decimal']['output'];
  /** Total promotions and discounts excluding VAT. */
  totalPromotionsAndDiscountsExcludingVat: Scalars['Decimal']['output'];
  /** Total promotions and discounts including VAT. */
  totalPromotionsAndDiscountsIncludingVat: Scalars['Decimal']['output'];
  /** Total VAT. */
  totalVat: Scalars['Decimal']['output'];
};

/** Represents a address. */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** Address line 1. */
  address1?: Maybe<Scalars['String']['output']>;
  /** Address line 2. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Care of. */
  careOf?: Maybe<Scalars['String']['output']>;
  /** City. */
  city?: Maybe<Scalars['String']['output']>;
  /** Country. */
  country?: Maybe<Scalars['String']['output']>;
  /** Email. */
  email?: Maybe<Scalars['String']['output']>;
  /** Fax. */
  fax?: Maybe<Scalars['String']['output']>;
  /** First name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** House extension. */
  houseExtension?: Maybe<Scalars['String']['output']>;
  /** House number. */
  houseNumber?: Maybe<Scalars['String']['output']>;
  /** Last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Mobile phone. */
  mobilePhone?: Maybe<Scalars['String']['output']>;
  /** Organization name. */
  organizationName?: Maybe<Scalars['String']['output']>;
  /** Phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Reference. */
  reference?: Maybe<Scalars['String']['output']>;
  /** State. */
  state?: Maybe<Scalars['String']['output']>;
  /** Title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Zip code. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Represents a address. */
export type OrderAddressInput = {
  /** Address line 1. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** Address line 2. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Care of. */
  careOf?: InputMaybe<Scalars['String']['input']>;
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Fax. */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** First name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** House extension. */
  houseExtension?: InputMaybe<Scalars['String']['input']>;
  /** House number. */
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Mobile phone. */
  mobilePhone?: InputMaybe<Scalars['String']['input']>;
  /** Organization name. */
  organizationName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Reference. */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** State. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Zip code. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type OrderConfirmationPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'OrderConfirmationPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: OrderConfirmationPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type OrderConfirmationPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderConfirmationPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderConfirmationPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderConfirmationPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderConfirmationPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderConfirmationPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderConfirmationPageFieldContainer = {
  __typename?: 'OrderConfirmationPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrderEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** Represents a customer details. */
export type OrderCustomerDetails = {
  __typename?: 'OrderCustomerDetails';
  /** Business registration number. */
  businessRegistrationNumber?: Maybe<Scalars['String']['output']>;
  /** Customer number. */
  customerNumber?: Maybe<Scalars['String']['output']>;
  /** Customer type. */
  customerType?: Maybe<CustomerType>;
  /** Email. */
  email?: Maybe<Scalars['String']['output']>;
  /** First name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Natianal identification number. */
  nationalIdentificationNumber?: Maybe<Scalars['String']['output']>;
  /** Phone. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Title. */
  title?: Maybe<Scalars['String']['output']>;
  /** VAT registration number. */
  vatRegistrationNumber?: Maybe<Scalars['String']['output']>;
};

/** Represents a customer details. */
export type OrderCustomerDetailsInput = {
  /** Business registration number. */
  businessRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Customer number. */
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  /** Customer type. */
  customerType?: InputMaybe<CustomerType>;
  /** Email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Natianal identification number. */
  nationalIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Phone. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** VAT registration number. */
  vatRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderHistoryPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'OrderHistoryPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: OrderHistoryPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type OrderHistoryPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderHistoryPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderHistoryPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderHistoryPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderHistoryPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderHistoryPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderHistoryPageFieldContainer = {
  __typename?: 'OrderHistoryPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Introduction */
  introduction?: Maybe<Scalars['String']['output']>;
  /** Number of orders per page */
  numberOfOrdersPerPage?: Maybe<Scalars['Int']['output']>;
  /** Order link */
  orderLink?: Maybe<Array<PointerPageItem>>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type OrderPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'OrderPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: OrderPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type OrderPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrderPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OrderPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderPageFieldContainer = {
  __typename?: 'OrderPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

/** Represents a row item. */
export type OrderRow = {
  __typename?: 'OrderRow';
  /** Additional row info. */
  additionalInfo: Array<AdditionalInfo>;
  /** Article number. */
  articleNumber: Scalars['String']['output'];
  /** Description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount informations. */
  discountInfos?: Maybe<Array<DiscountInfo>>;
  /** Product item. */
  product?: Maybe<IProductItem>;
  /** Quantity. */
  quantity: Scalars['Decimal']['output'];
  /** Row id. */
  rowId: Scalars['String']['output'];
  /** Row type. */
  rowType: OrderRowType;
  /** Total price excluding VAT. */
  totalExcludingVat: Scalars['Decimal']['output'];
  /** Total price including VAT. */
  totalIncludingVat: Scalars['Decimal']['output'];
  /** Total VAT amount. */
  totalVat: Scalars['Decimal']['output'];
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
  /** Unit price excluding VAT. */
  unitPriceExcludingVat: Scalars['Decimal']['output'];
  /** Unit price including VAT. */
  unitPriceIncludingVat: Scalars['Decimal']['output'];
  /** VAT details. */
  vatDetails: Array<VatDetail>;
  /** VAT rate. */
  vatRate: Scalars['Decimal']['output'];
};

/** Represents a row item type. */
export enum OrderRowType {
  /** Row is of type alternative payment method. */
  ALTERNATIVE_PAYMENT_METHOD = 'ALTERNATIVE_PAYMENT_METHOD',
  /** Row is of type discount. */
  DISCOUNT = 'DISCOUNT',
  /** Row is of type fee. */
  FEE = 'FEE',
  /** Row is of type product. */
  PRODUCT = 'PRODUCT',
  /** Row is of type rounding off adjustment. */
  ROUNDING_OFF_ADJUSTMENT = 'ROUNDING_OFF_ADJUSTMENT',
  /** Row is of type shipping fee. */
  SHIPPING_FEE = 'SHIPPING_FEE'
}

/** A connection to a list of items. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrganizationEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PersonOrganizationLink>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonOrganizationLink;
};

export type OrganizationPersonLink = {
  __typename?: 'OrganizationPersonLink';
  /** Person */
  person: IPersonItem;
  /** Role operations */
  roleOperations: Array<RoleOperation>;
  /** Roles */
  roles: Array<Role>;
};

export type OrganizationTemplateOrganization = IOrganizationItem & Node & {
  __typename?: 'OrganizationTemplateOrganization';
  /** Addresses connected to the organization. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the organization. */
  customerNumber: Scalars['String']['output'];
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: OrganizationTemplateOrganizationFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Orders connected to the organization. */
  orders?: Maybe<OrderConnection>;
  /** Persons connected to the organization. */
  persons?: Maybe<PersonConnection>;
};


export type OrganizationTemplateOrganizationfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type OrganizationTemplateOrganizationordersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationTemplateOrganizationpersonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationTemplateOrganizationFieldContainer = {
  __typename?: 'OrganizationTemplateOrganizationFieldContainer';
  /** Name */
  _nameInvariantCulture?: Maybe<Scalars['String']['output']>;
};

/** Overrides of operational hours for specific dates. */
export type OverrideOperationalHours = {
  __typename?: 'OverrideOperationalHours';
  /** Closed. */
  closed: Scalars['Boolean']['output'];
  /** Closing time. */
  closingTime?: Maybe<Scalars['TimeSpan']['output']>;
  /** Opening time. */
  openingTime?: Maybe<Scalars['TimeSpan']['output']>;
  /** Overrides opening hours for the specific date. */
  overrideDate: Scalars['DateTime']['output'];
};

/** Product search page query item. */
export type PageFieldInput = {
  /** Boost hits on this page. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Include child pages. */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  /** Page id. */
  pageId: Scalars['ID']['input'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type PageItemsConnection = {
  __typename?: 'PageItemsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PageItemsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<PageSearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PageItemsEdge = {
  __typename?: 'PageItemsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<PageSearchResultItem>;
};

export type PageNotFoundPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'PageNotFoundPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: PageNotFoundPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type PageNotFoundPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageNotFoundPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PageNotFoundPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PageNotFoundPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type PageNotFoundPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageNotFoundPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageNotFoundPageFieldContainer = {
  __typename?: 'PageNotFoundPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type PageOrCategoryConnection = {
  __typename?: 'PageOrCategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PageOrCategoryEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IPageOrCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PageOrCategoryEdge = {
  __typename?: 'PageOrCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IPageOrCategory;
};

/** A connection to a list of items. */
export type PageSearchConnection = {
  __typename?: 'PageSearchConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PageSearchEdge>>;
  /** The facets. */
  facets: Array<IFacet>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IPageItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PageSearchEdge = {
  __typename?: 'PageSearchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IPageItem;
  /** The search score. */
  score?: Maybe<Scalars['Float']['output']>;
};

/** Page search query. */
export type PageSearchQueryInput = {
  /** Match item based on block data. */
  block?: InputMaybe<BlockQueryInput>;
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfPageSearchQueryAndStorefrontPageDocumentInput>;
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
  /** Match item based on field that is marked as searchable. */
  field?: InputMaybe<SearchFieldItemInput>;
  /** Match item based on name. */
  name?: InputMaybe<NgramStringFieldTermInput>;
  /** Match item based on page. */
  page?: InputMaybe<PageFieldInput>;
  /** Match item based on the page type. */
  pageTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PageSearchResultContext = {
  __typename?: 'PageSearchResultContext';
  pageItems?: Maybe<PageItemsConnection>;
};


export type PageSearchResultContextpageItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type PageSearchResultItem = {
  __typename?: 'PageSearchResultItem';
  data?: Maybe<IPageItem>;
  id: Scalars['UUID']['output'];
  score: Scalars['Float']['output'];
};

export enum PaymentIntegrationType {
  DIRECT_PAYMENT = 'DIRECT_PAYMENT',
  GIFT_CARD = 'GIFT_CARD',
  HOSTED_PAYMENT_PAGE = 'HOSTED_PAYMENT_PAGE',
  IFRAME_CHECKOUT = 'IFRAME_CHECKOUT',
  PAYMENT_APP = 'PAYMENT_APP',
  PAYMENT_LINK = 'PAYMENT_LINK',
  PAYMENT_TOKEN = 'PAYMENT_TOKEN',
  PAYMENT_WIDGETS = 'PAYMENT_WIDGETS',
  QUICK_CHECKOUT_BUTTON = 'QUICK_CHECKOUT_BUTTON'
}

/** Represents a payment option. */
export type PaymentOption = {
  __typename?: 'PaymentOption';
  /** Description of payment option. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The image. */
  image?: Maybe<IImageItem>;
  /** Payment integration type. */
  integrationType: PaymentIntegrationType;
  /** Name of payment option. */
  name?: Maybe<Scalars['String']['output']>;
  /** Price of payment option. */
  price?: Maybe<Scalars['Decimal']['output']>;
  /** Flag to indicate if option is selected. */
  selected: Scalars['Boolean']['output'];
};


/** Represents a payment option. */
export type PaymentOptionimageArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PersonEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<OrganizationPersonLink>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrganizationPersonLink;
};

export type PersonOrganizationLink = {
  __typename?: 'PersonOrganizationLink';
  /** Organization */
  organization: IOrganizationItem;
  /** Role operations */
  roleOperations: Array<RoleOperation>;
  /** Roles */
  roles: Array<Role>;
};

/** Delivery pickup location */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  /** Address. */
  address?: Maybe<OrderAddress>;
  /** Latitude. */
  latitude?: Maybe<Scalars['Decimal']['output']>;
  /** Longitude. */
  longitude?: Maybe<Scalars['Decimal']['output']>;
  /** Name. */
  name: Scalars['String']['output'];
  /** Operational hours. */
  operationalHours?: Maybe<Array<DayOfWeekOperationalHours>>;
  /** Overrides of operational hours. */
  operationalHoursOverrides?: Maybe<Array<OverrideOperationalHours>>;
  /** Pickup location id. */
  pickupLocationId: Scalars['String']['output'];
  /** Type. */
  type: PickupLocationType;
};

/** Delivery pickup location types. */
export enum PickupLocationType {
  /** Automated pickup station. */
  AUTOMATED_PICKUP_STATION = 'AUTOMATED_PICKUP_STATION',
  /** Other. */
  OTHER = 'OTHER',
  /** Pickup point. */
  PICKUP_POINT = 'PICKUP_POINT',
  /** Pickup store. */
  PICKUP_STORE = 'PICKUP_STORE'
}

export type PlaceOrderError = ValidationError;

export type PlaceOrderPayload = {
  __typename?: 'PlaceOrderPayload';
  errors?: Maybe<Array<PlaceOrderError>>;
  query: StorefrontQuery;
  receipt?: Maybe<Receipt>;
};

/** The default pointer that contains only the reference for the specified item. */
export type Pointer = IPointerItem & {
  __typename?: 'Pointer';
  entitySystemId: Scalars['UUID']['output'];
};

/** Pointer for media file item. */
export type PointerMediaFileItem = IPointerItem & {
  __typename?: 'PointerMediaFileItem';
  entitySystemId: Scalars['UUID']['output'];
  /** The image. */
  item?: Maybe<IFileItem>;
};

export type PointerMediaFileValue = IFieldValueItem & {
  __typename?: 'PointerMediaFileValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerMediaFileValue?: Maybe<PointerMediaFileItem>;
};

export type PointerMediaFileValues = IFieldValueItem & {
  __typename?: 'PointerMediaFileValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerMediaFileValues?: Maybe<Array<PointerMediaFileItem>>;
};

/** Pointer for media image item. */
export type PointerMediaImageItem = IPointerItem & {
  __typename?: 'PointerMediaImageItem';
  entitySystemId: Scalars['UUID']['output'];
  /** The image. */
  item?: Maybe<IImageItem>;
};


/** Pointer for media image item. */
export type PointerMediaImageItemitemArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};

export type PointerMediaImageValue = IFieldValueItem & {
  __typename?: 'PointerMediaImageValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerMediaImageValue?: Maybe<PointerMediaImageItem>;
};

export type PointerMediaImageValues = IFieldValueItem & {
  __typename?: 'PointerMediaImageValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerMediaImageValues?: Maybe<Array<PointerMediaImageItem>>;
};

/** Pointer for media video item. */
export type PointerMediaVideoItem = IPointerItem & {
  __typename?: 'PointerMediaVideoItem';
  entitySystemId: Scalars['UUID']['output'];
  /** The image. */
  item?: Maybe<IFileItem>;
};

export type PointerMediaVideoValues = IFieldValueItem & {
  __typename?: 'PointerMediaVideoValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerMediaVideoValues?: Maybe<Array<PointerMediaVideoItem>>;
};

export type PointerOptions = {
  __typename?: 'PointerOptions';
  entityType: Scalars['String']['output'];
  multiSelect: Scalars['Boolean']['output'];
};

/** Pointer for page item. */
export type PointerPageItem = IPointerItem & {
  __typename?: 'PointerPageItem';
  channelSystemId?: Maybe<Scalars['UUID']['output']>;
  entitySystemId: Scalars['UUID']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The page item. */
  item?: Maybe<IPageItem>;
};

export type PointerPageValues = IFieldValueItem & {
  __typename?: 'PointerPageValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerPageValues?: Maybe<Array<PointerPageItem>>;
};

/** Pointer for product category item. */
export type PointerProductCategoryItem = IPointerItem & {
  __typename?: 'PointerProductCategoryItem';
  entitySystemId: Scalars['UUID']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The product category item. */
  item?: Maybe<ICategoryItem>;
};

export type PointerProductCategoryValues = IFieldValueItem & {
  __typename?: 'PointerProductCategoryValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerProductCategoryValues?: Maybe<Array<PointerProductCategoryItem>>;
};

/** Pointer for product field. */
export type PointerProductFieldItem = IPointerItem & {
  __typename?: 'PointerProductFieldItem';
  /** Product field doesn't contain entity system identifier. Use Field instead. */
  entitySystemId: Scalars['UUID']['output'];
  field: Scalars['String']['output'];
  /** Field type. */
  fieldType?: Maybe<Scalars['String']['output']>;
};

export type PointerProductFieldValues = IFieldValueItem & {
  __typename?: 'PointerProductFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerProductFieldValues?: Maybe<Array<PointerProductFieldItem>>;
};

/** Pointer for product item. */
export type PointerProductItem = IPointerItem & {
  __typename?: 'PointerProductItem';
  entitySystemId: Scalars['UUID']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The product item. */
  item?: Maybe<IProductItem>;
};

/** Pointer for product category item. */
export type PointerProductListItem = IPointerItem & {
  __typename?: 'PointerProductListItem';
  entitySystemId: Scalars['UUID']['output'];
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
};

export type PointerProductListValues = IFieldValueItem & {
  __typename?: 'PointerProductListValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerProductListValues?: Maybe<Array<PointerProductListItem>>;
};

export type PointerProductValues = IFieldValueItem & {
  __typename?: 'PointerProductValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerProductValues?: Maybe<Array<PointerProductItem>>;
};

export type PointerValues = IFieldValueItem & {
  __typename?: 'PointerValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  pointerValues?: Maybe<Array<Pointer>>;
};

/** When running a page in preview mode the preview item includes information related to the preview. */
export type Preview = {
  __typename?: 'Preview';
  /** Scripts that should be injected on the site for live editing. */
  scripts: Array<PreviewFileItem>;
  /** CSS files that should be injected on the site for live editing. */
  styleSheets?: Maybe<Array<PreviewFileItem>>;
};

export type PreviewFileItem = {
  __typename?: 'PreviewFileItem';
  attributes?: Maybe<Array<PreviewFileItemAttribute>>;
  src: Scalars['String']['output'];
};

export type PreviewFileItemAttribute = {
  __typename?: 'PreviewFileItemAttribute';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Product search price list query item. */
export type PriceListFieldInput = {
  /** Require that product has price. */
  requirePrice?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriceRangeInputLegacy = {
  /** From price */
  from: Scalars['Int']['input'];
  /** To price */
  to: Scalars['Int']['input'];
};

export type PrimaryNavigationBannerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'PrimaryNavigationBannerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: PrimaryNavigationBannerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type PrimaryNavigationBannerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PrimaryNavigationBannerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type PrimaryNavigationBannerBlockFieldContainer = {
  __typename?: 'PrimaryNavigationBannerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Image */
  blockImagePointer?: Maybe<PointerMediaImageItem>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type PrimaryNavigationCategoriesBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'PrimaryNavigationCategoriesBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: PrimaryNavigationCategoriesBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type PrimaryNavigationCategoriesBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PrimaryNavigationCategoriesBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type PrimaryNavigationCategoriesBlockFieldContainer = {
  __typename?: 'PrimaryNavigationCategoriesBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Category */
  categoryLink?: Maybe<Array<PointerProductCategoryItem>>;
};

export type PrimaryNavigationColumnBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'PrimaryNavigationColumnBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: PrimaryNavigationColumnBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: PrimaryNavigationColumnBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type PrimaryNavigationColumnBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PrimaryNavigationColumnBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type PrimaryNavigationColumnBlockFieldContainer = {
  __typename?: 'PrimaryNavigationColumnBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

export type PrimaryNavigationColumnBlockFieldGroups = {
  __typename?: 'PrimaryNavigationColumnBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type PrimaryNavigationLinkBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'PrimaryNavigationLinkBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: PrimaryNavigationLinkBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: PrimaryNavigationLinkBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type PrimaryNavigationLinkBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type PrimaryNavigationLinkBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type PrimaryNavigationLinkBlockFieldContainer = {
  __typename?: 'PrimaryNavigationLinkBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
  /** Navigation links */
  navigationLinks?: Maybe<Array<NavigationLinksBlockFieldDefinition>>;
};

export type PrimaryNavigationLinkBlockFieldGroups = {
  __typename?: 'PrimaryNavigationLinkBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type ProductBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ProductBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ProductBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ProductBlockFieldContainer = {
  __typename?: 'ProductBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Title */
  blockTitle?: Maybe<Scalars['String']['output']>;
  /** Category */
  categoryLink?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
  /** Link to category */
  linkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  linkToPage?: Maybe<Array<PointerPageItem>>;
  /** Number of products */
  numberOfProducts?: Maybe<Scalars['Int']['output']>;
  /** Product list */
  productListLink?: Maybe<Array<PointerProductListItem>>;
  /** Product sorting */
  productSorting?: Maybe<Array<TextOptionDefinition>>;
  /** Products */
  productsLinkList?: Maybe<Array<PointerProductItem>>;
  /** Products to the right */
  showProductToTheRight?: Maybe<Scalars['Boolean']['output']>;
};

/** Product search category query item. */
export type ProductCategoryFieldInput = {
  /** Category id. */
  categoryId: Scalars['ID']['input'];
  /** Include products in child categories. */
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of items. */
export type ProductItemsConnection = {
  __typename?: 'ProductItemsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductItemsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ProductSearchResultItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductItemsEdge = {
  __typename?: 'ProductItemsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ProductSearchResultItem>;
};

/** Product search product list query item. */
export type ProductListFieldInput = {
  /** Product list id. */
  productListId: Scalars['ID']['input'];
};

export type ProductListPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'ProductListPage';
  /** The blocks for the page type. */
  blocks: ProductListPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductListPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type ProductListPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductListPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductListPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductListPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductListPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductListPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductListPageBlockContainer = {
  __typename?: 'ProductListPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
  /** The blocks for MarketingContent. */
  marketingContent: Array<Maybe<IBlock>>;
  /** The blocks for ProductList. */
  productList: Array<Maybe<IBlock>>;
};

export type ProductListPageFieldContainer = {
  __typename?: 'ProductListPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** description Rich text */
  descriptionRichtext?: Maybe<Scalars['String']['output']>;
  /** Categories */
  megaMenuCategories?: Maybe<Array<PointerProductCategoryItem>>;
  /** Category */
  megaMenuCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Product list */
  productList?: Maybe<Array<PointerProductListItem>>;
};

/** The price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The currency. */
  currency: Currency;
  /** The discount price excluding VAT. */
  discountPriceExcludingVat?: Maybe<Scalars['Decimal']['output']>;
  /** The discount price including VAT. */
  discountPriceIncludingVat?: Maybe<Scalars['Decimal']['output']>;
  /** The tier prices. */
  tierPrices?: Maybe<Array<Maybe<ProductTierPrice>>>;
  /** The unit price excluding VAT. */
  unitPriceExcludingVat: Scalars['Decimal']['output'];
  /** The unit price including VAT. */
  unitPriceIncludingVat: Scalars['Decimal']['output'];
  /** The vat rate. */
  vatRate: Scalars['Decimal']['output'];
};

/** A connection to a list of items. */
export type ProductSearchConnection = {
  __typename?: 'ProductSearchConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductSearchEdge>>;
  /** The facets. */
  facets: Array<IFacet>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IProductItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductSearchEdge = {
  __typename?: 'ProductSearchEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IProductItem;
  /** The search score. */
  score?: Maybe<Scalars['Float']['output']>;
};

/** Product search query. */
export type ProductSearchQueryInput = {
  /** Match item based on article number. */
  articleNumber?: InputMaybe<SimpleStringFieldTermInput>;
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfProductSearchQueryItemAndStorefrontProductDocumentInput>;
  /** Match item based on category. */
  category?: InputMaybe<ProductCategoryFieldInput>;
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
  /** Match item based on field that is marked as searchable. */
  field?: InputMaybe<SearchFieldItemInput>;
  /** Match item based on name. */
  name?: InputMaybe<NgramStringFieldTermInput>;
  /** Match item based on price list. */
  priceList?: InputMaybe<PriceListFieldInput>;
  /** Match item based on product list. */
  productList?: InputMaybe<ProductListFieldInput>;
};

/** Product search query item. */
export type ProductSearchQueryItemInput = {
  /** Match item based on article number. */
  articleNumber?: InputMaybe<SimpleStringFieldTermInput>;
  /** Group multiple conditions into a boolean group. */
  bool?: InputMaybe<BoolQueryOfProductSearchQueryItemAndStorefrontProductDocumentInput>;
  /** Match item based on any field that is marked as searchable. */
  content?: InputMaybe<StringFieldTermInput>;
  /** Match item based on field that is marked as searchable. */
  field?: InputMaybe<SearchFieldItemInput>;
  /** Match item based on name. */
  name?: InputMaybe<NgramStringFieldTermInput>;
};

export type ProductSearchResultContext = {
  __typename?: 'ProductSearchResultContext';
  /** The faceted filters. */
  facetedFilters?: Maybe<Array<Maybe<FacetGroupItem>>>;
  productItems?: Maybe<ProductItemsConnection>;
  /** The sort criterias */
  sortCriteria: Array<SortResultItem>;
};


export type ProductSearchResultContextproductItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSearchResultItem = {
  __typename?: 'ProductSearchResultItem';
  data?: Maybe<IProductItem>;
  id: Scalars['UUID']['output'];
  score: Scalars['Float']['output'];
};

/** The tier price. */
export type ProductTierPrice = {
  __typename?: 'ProductTierPrice';
  /** The minimum quantity to buy to get the tier price. */
  minimumQuantity: Scalars['Decimal']['output'];
  /** The next minimum quantity. */
  nextMinimumQuantity?: Maybe<Scalars['Decimal']['output']>;
  /** The previous minimum quantity. */
  previousMinimumQuantity?: Maybe<Scalars['Decimal']['output']>;
  /** The unit price excluding VAT. */
  unitPriceExcludingVat: Scalars['Decimal']['output'];
  /** The unit price including VAT. */
  unitPriceIncludingVat: Scalars['Decimal']['output'];
};

export type ProductWithOneVariantProduct = IContentItem & IProductItem & ITemplateInfo & Node & {
  __typename?: 'ProductWithOneVariantProduct';
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** BaseProduct data. */
  baseProduct: ProductWithOneVariantProduct;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ProductWithOneVariantProductFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductWithOneVariantProductFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  /** If the item is variant. */
  isVariant: Scalars['Boolean']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Raw product data with the base product and variant. */
  rawData: ProductWithOneVariantProductRawData;
  /** The relationships for product or category. */
  relations: Array<Relationship>;
  /** The relationships for product or category. */
  relationships: ProductWithOneVariantProductRelationships;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Variants. */
  variants?: Maybe<ProductWithOneVariantProductVariantConnection>;
};


export type ProductWithOneVariantProductdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithOneVariantProductfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithOneVariantProductimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type ProductWithOneVariantProductparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductWithOneVariantProductparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithOneVariantProductrelationsArgs = {
  filter?: InputMaybe<RelationshipFilterInput>;
};


export type ProductWithOneVariantProducturlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithOneVariantProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWithOneVariantProductFieldContainer = {
  __typename?: 'ProductWithOneVariantProductFieldContainer';
  /** Description */
  _description?: Maybe<Scalars['String']['output']>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized description */
  _seoDescription?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized title */
  _seoTitle?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Brand */
  brand?: Maybe<Array<TextOptionDefinition>>;
  /** Color */
  color?: Maybe<Array<TextOptionDefinition>>;
  /** News */
  news?: Maybe<Scalars['DateTime']['output']>;
  /** Product sheet */
  productSheet?: Maybe<PointerMediaFileItem>;
  /** Size */
  size?: Maybe<Array<TextOptionDefinition>>;
  /** Product specifications */
  specification?: Maybe<Scalars['String']['output']>;
  /** Weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductWithOneVariantProductFieldGroups = {
  __typename?: 'ProductWithOneVariantProductFieldGroups';
  /** Field group: Product information */
  product_information: FieldGroup;
  /** Field group: Product specification */
  product_specification: FieldGroup;
};

export type ProductWithOneVariantProductRawData = {
  __typename?: 'ProductWithOneVariantProductRawData';
  baseProduct: ProductWithOneVariantProduct;
  variants: Array<ProductWithOneVariantProduct>;
};

export type ProductWithOneVariantProductRelationships = {
  __typename?: 'ProductWithOneVariantProductRelationships';
  accessory: Relationship;
  similarProducts: Relationship;
};

/** A connection to a list of items. */
export type ProductWithOneVariantProductVariantConnection = {
  __typename?: 'ProductWithOneVariantProductVariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductWithOneVariantProductVariantEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductWithOneVariantProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductWithOneVariantProductVariantEdge = {
  __typename?: 'ProductWithOneVariantProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductWithOneVariantProduct;
};

export type ProductWithVariantsFurnitureProduct = IContentItem & IProductItem & ITemplateInfo & Node & {
  __typename?: 'ProductWithVariantsFurnitureProduct';
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** BaseProduct data. */
  baseProduct: ProductWithVariantsFurnitureProduct;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ProductWithVariantsFurnitureProductFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductWithVariantsFurnitureProductFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  /** If the item is variant. */
  isVariant: Scalars['Boolean']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Raw product data with the base product and variant. */
  rawData: ProductWithVariantsFurnitureProductRawData;
  /** The relationships for product or category. */
  relations: Array<Relationship>;
  /** The relationships for product or category. */
  relationships: ProductWithVariantsFurnitureProductRelationships;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Variants. */
  variants?: Maybe<ProductWithVariantsFurnitureProductVariantConnection>;
};


export type ProductWithVariantsFurnitureProductdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsFurnitureProductfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsFurnitureProductimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type ProductWithVariantsFurnitureProductparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductWithVariantsFurnitureProductparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsFurnitureProductrelationsArgs = {
  filter?: InputMaybe<RelationshipFilterInput>;
};


export type ProductWithVariantsFurnitureProducturlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsFurnitureProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWithVariantsFurnitureProductFieldContainer = {
  __typename?: 'ProductWithVariantsFurnitureProductFieldContainer';
  /** Description */
  _description?: Maybe<Scalars['String']['output']>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized description */
  _seoDescription?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized title */
  _seoTitle?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Assembling instruction */
  assemblingInstruction?: Maybe<PointerMediaFileItem>;
  /** Body material */
  bodyMaterial?: Maybe<Array<TextOptionDefinition>>;
  /** Care advice */
  careAdvice?: Maybe<Scalars['String']['output']>;
  /** Color */
  color?: Maybe<Array<TextOptionDefinition>>;
  /** Depth */
  depth?: Maybe<Scalars['Decimal']['output']>;
  /** EAN */
  eAN?: Maybe<Scalars['String']['output']>;
  /** ETIM */
  eTIM?: Maybe<Scalars['String']['output']>;
  /** Front material */
  frontMaterial?: Maybe<Array<TextOptionDefinition>>;
  /** Height */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** Hole spacing, handle (mm) */
  holeSpacingHandle?: Maybe<Array<DecimalOptionDefinition>>;
  /** Main material */
  mainMaterial?: Maybe<Array<TextOptionDefinition>>;
  /** Measurement */
  measurement?: Maybe<PointerMediaFileItem>;
  /** NOBB */
  nOBB?: Maybe<Scalars['String']['output']>;
  /** Opening function */
  openingFunction?: Maybe<Array<TextOptionDefinition>>;
  /** Package depth */
  packageDepth?: Maybe<Scalars['Decimal']['output']>;
  /** Package height */
  packageHeight?: Maybe<Scalars['Decimal']['output']>;
  /** Package weight */
  packageWeight?: Maybe<Scalars['Decimal']['output']>;
  /** Package width */
  packageWidth?: Maybe<Scalars['Decimal']['output']>;
  /** Product line */
  productLine?: Maybe<Array<TextOptionDefinition>>;
  /** Product sheet */
  productSheet?: Maybe<PointerMediaFileItem>;
  /** RSK */
  rSK?: Maybe<Scalars['String']['output']>;
  /** Säker vatten */
  sakerVatten?: Maybe<Scalars['Boolean']['output']>;
  /** Spare parts */
  spareParts?: Maybe<PointerMediaFileItem>;
  /** Stocked article */
  stockedArticle?: Maybe<Scalars['Boolean']['output']>;
  /** Surface finish */
  surfaceFinish?: Maybe<Array<TextOptionDefinition>>;
  /** Surface treatment */
  surfaceTreatment?: Maybe<Array<TextOptionDefinition>>;
  /** Suspension type */
  suspensionType?: Maybe<Array<TextOptionDefinition>>;
  /** Weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Width */
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductWithVariantsFurnitureProductFieldGroups = {
  __typename?: 'ProductWithVariantsFurnitureProductFieldGroups';
  /** Field group: CareAdvice */
  careAdvice: FieldGroup;
  /** Field group: DimensionsAndWeight */
  dimensionsAndWeight: FieldGroup;
  /** Field group: Documents */
  documents: FieldGroup;
  /** Field group: ItemNumber */
  itemNumber: FieldGroup;
  /** Field group: MaterialAndSurface */
  materialAndSurface: FieldGroup;
  /** Field group: Packaging */
  packaging: FieldGroup;
  /** Field group: StandardsAndClassifications */
  standardsAndClassifications: FieldGroup;
};

export type ProductWithVariantsFurnitureProductRawData = {
  __typename?: 'ProductWithVariantsFurnitureProductRawData';
  baseProduct: ProductWithVariantsFurnitureProduct;
  variants: Array<ProductWithVariantsFurnitureProduct>;
};

export type ProductWithVariantsFurnitureProductRelationships = {
  __typename?: 'ProductWithVariantsFurnitureProductRelationships';
  accessory: Relationship;
  similarProducts: Relationship;
};

/** A connection to a list of items. */
export type ProductWithVariantsFurnitureProductVariantConnection = {
  __typename?: 'ProductWithVariantsFurnitureProductVariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductWithVariantsFurnitureProductVariantEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductWithVariantsFurnitureProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductWithVariantsFurnitureProductVariantEdge = {
  __typename?: 'ProductWithVariantsFurnitureProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductWithVariantsFurnitureProduct;
};

export type ProductWithVariantsListProduct = IContentItem & IProductItem & ITemplateInfo & Node & {
  __typename?: 'ProductWithVariantsListProduct';
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** BaseProduct data. */
  baseProduct: ProductWithVariantsListProduct;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display field group. */
  displayFieldGroup: ProductWithVariantsListProductDisplayFieldGroups;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ProductWithVariantsListProductFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductWithVariantsListProductFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  /** If the item is variant. */
  isVariant: Scalars['Boolean']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Raw product data with the base product and variant. */
  rawData: ProductWithVariantsListProductRawData;
  /** The relationships for product or category. */
  relations: Array<Relationship>;
  /** The relationships for product or category. */
  relationships: ProductWithVariantsListProductRelationships;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Variants. */
  variants?: Maybe<ProductWithVariantsListProductVariantConnection>;
};


export type ProductWithVariantsListProductdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsListProductfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsListProductimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type ProductWithVariantsListProductparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductWithVariantsListProductparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsListProductrelationsArgs = {
  filter?: InputMaybe<RelationshipFilterInput>;
};


export type ProductWithVariantsListProducturlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsListProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWithVariantsListProductDisplayFieldGroups = {
  __typename?: 'ProductWithVariantsListProductDisplayFieldGroups';
  /** Display field group: variantFieldColumns */
  variantFieldColumns: DisplayFieldGroup;
};

export type ProductWithVariantsListProductFieldContainer = {
  __typename?: 'ProductWithVariantsListProductFieldContainer';
  /** Description */
  _description?: Maybe<Scalars['String']['output']>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized description */
  _seoDescription?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized title */
  _seoTitle?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Brand */
  brand?: Maybe<Array<TextOptionDefinition>>;
  /** Color */
  color?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  newProductSpecifications?: Maybe<Array<NewProductSpecificationsProductFieldDefinition>>;
  /** Product sheet */
  productSheet?: Maybe<PointerMediaFileItem>;
  /** Size */
  size?: Maybe<Array<TextOptionDefinition>>;
  /** Product specifications */
  specification?: Maybe<Scalars['String']['output']>;
};

export type ProductWithVariantsListProductFieldGroups = {
  __typename?: 'ProductWithVariantsListProductFieldGroups';
  /** Field group: Product specification */
  product_specification: FieldGroup;
};

export type ProductWithVariantsListProductRawData = {
  __typename?: 'ProductWithVariantsListProductRawData';
  baseProduct: ProductWithVariantsListProduct;
  variants: Array<ProductWithVariantsListProduct>;
};

export type ProductWithVariantsListProductRelationships = {
  __typename?: 'ProductWithVariantsListProductRelationships';
  accessory: Relationship;
  similarProducts: Relationship;
};

/** A connection to a list of items. */
export type ProductWithVariantsListProductVariantConnection = {
  __typename?: 'ProductWithVariantsListProductVariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductWithVariantsListProductVariantEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductWithVariantsListProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductWithVariantsListProductVariantEdge = {
  __typename?: 'ProductWithVariantsListProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductWithVariantsListProduct;
};

export type ProductWithVariantsProduct = IContentItem & IProductItem & ITemplateInfo & Node & {
  __typename?: 'ProductWithVariantsProduct';
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** BaseProduct data. */
  baseProduct: ProductWithVariantsProduct;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: ProductWithVariantsProductFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductWithVariantsProductFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  /** If the item is variant. */
  isVariant: Scalars['Boolean']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Raw product data with the base product and variant. */
  rawData: ProductWithVariantsProductRawData;
  /** The relationships for product or category. */
  relations: Array<Relationship>;
  /** The relationships for product or category. */
  relationships: ProductWithVariantsProductRelationships;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement?: Maybe<UnitOfMeasurement>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
  /** Variants. */
  variants?: Maybe<ProductWithVariantsProductVariantConnection>;
};


export type ProductWithVariantsProductdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsProductfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductWithVariantsProductimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type ProductWithVariantsProductparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductWithVariantsProductparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsProductrelationsArgs = {
  filter?: InputMaybe<RelationshipFilterInput>;
};


export type ProductWithVariantsProducturlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductWithVariantsProductvariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWithVariantsProductFieldContainer = {
  __typename?: 'ProductWithVariantsProductFieldContainer';
  /** Description */
  _description?: Maybe<Scalars['String']['output']>;
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized description */
  _seoDescription?: Maybe<Scalars['String']['output']>;
  /** Search engine optimized title */
  _seoTitle?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Brand */
  brand?: Maybe<Array<TextOptionDefinition>>;
  /** Color */
  color?: Maybe<Array<TextOptionDefinition>>;
  /** Product sheet */
  productSheet?: Maybe<PointerMediaFileItem>;
  /** Size */
  size?: Maybe<Array<TextOptionDefinition>>;
  /** Product specifications */
  specification?: Maybe<Scalars['String']['output']>;
};

export type ProductWithVariantsProductFieldGroups = {
  __typename?: 'ProductWithVariantsProductFieldGroups';
  /** Field group: Product information */
  product_information: FieldGroup;
  /** Field group: Product specification */
  product_specification: FieldGroup;
};

export type ProductWithVariantsProductRawData = {
  __typename?: 'ProductWithVariantsProductRawData';
  baseProduct: ProductWithVariantsProduct;
  variants: Array<ProductWithVariantsProduct>;
};

export type ProductWithVariantsProductRelationships = {
  __typename?: 'ProductWithVariantsProductRelationships';
  accessory: Relationship;
  similarProducts: Relationship;
};

/** A connection to a list of items. */
export type ProductWithVariantsProductVariantConnection = {
  __typename?: 'ProductWithVariantsProductVariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductWithVariantsProductVariantEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductWithVariantsProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProductWithVariantsProductVariantEdge = {
  __typename?: 'ProductWithVariantsProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductWithVariantsProduct;
};

export type ProductsAndBannerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ProductsAndBannerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductsAndBannerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ProductsAndBannerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductsAndBannerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ProductsAndBannerBlockFieldContainer = {
  __typename?: 'ProductsAndBannerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Call to action text */
  actionText?: Maybe<Scalars['String']['output']>;
  /** Link to category */
  bannerLinkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  bannerLinkToPage?: Maybe<Array<PointerPageItem>>;
  /** Link to product */
  bannerLinkToProduct?: Maybe<Array<PointerProductItem>>;
  /** Image */
  blockImagePointer?: Maybe<PointerMediaImageItem>;
  /** Title */
  blockTitle?: Maybe<Scalars['String']['output']>;
  /** Category */
  categoryLink?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
  /** Link to category */
  linkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  linkToPage?: Maybe<Array<PointerPageItem>>;
  /** Number of products */
  numberOfProducts?: Maybe<Scalars['Int']['output']>;
  /** Link text */
  productLinkText?: Maybe<Scalars['String']['output']>;
  /** Product list */
  productListLink?: Maybe<Array<PointerProductListItem>>;
  /** Product sorting */
  productSorting?: Maybe<Array<TextOptionDefinition>>;
  /** Products */
  productsLinkList?: Maybe<Array<PointerProductItem>>;
  /** Products to the right */
  showProductToTheRight?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductsBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'ProductsBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: ProductsBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type ProductsBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type ProductsBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type ProductsBlockFieldContainer = {
  __typename?: 'ProductsBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Category */
  category?: Maybe<Array<PointerProductCategoryItem>>;
  /** Number of products */
  numberOfProducts?: Maybe<Scalars['Int']['output']>;
  /** Product list */
  productList?: Maybe<Array<PointerProductListItem>>;
  /** Sorting */
  sorting?: Maybe<Array<TextOptionDefinition>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type RangeFacet = IFacet & {
  __typename?: 'RangeFacet';
  /** Facet field. */
  field: Scalars['String']['output'];
  /** Facet items. */
  items: Array<RangeFacetItem>;
  /** Facet name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type RangeFacetItem = {
  __typename?: 'RangeFacetItem';
  /** Number of entities belonging to this facet. */
  count: Scalars['Int']['output'];
  /** Gets the maximum value of the facet. */
  max: Scalars['Decimal']['output'];
  /** Gets the minimum value of the facet. */
  min: Scalars['Decimal']['output'];
  /** Gets selected value of the facet if min and max value matching with the provided in the reqyest. */
  selected: Scalars['Boolean']['output'];
  /** Gets the maximum selected value of the facet, as provided in the request if facet bucket count is 1. */
  selectedMax?: Maybe<Scalars['Decimal']['output']>;
  /** Gets the minimum selected value of the facet, as provided in the request if facet bucket count is 1. */
  selectedMin?: Maybe<Scalars['Decimal']['output']>;
};

/** Range facet item. */
export type RangeFacetItemInput = {
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Max bucket count. */
  maxBucketCount?: Scalars['Int']['input'];
  /** Selected ranges. */
  selected?: InputMaybe<Array<RangeFacetValueInput>>;
};

export type RangeFacetValueInput = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

/** Matcher for fields. */
export type RangeMatchOfNullableOfDateTimeOffsetInput = {
  /** Match on values below or equal max value. */
  max?: InputMaybe<Scalars['DateTime']['input']>;
  /** Match on values above or equal min value. */
  min?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Matcher for fields. */
export type RangeMatchOfNullableOfDecimalInput = {
  /** Match on values below or equal max value. */
  max?: InputMaybe<Scalars['Decimal']['input']>;
  /** Match on values above or equal min value. */
  min?: InputMaybe<Scalars['Decimal']['input']>;
};

export type RatingReviewItemBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'RatingReviewItemBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: RatingReviewItemBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type RatingReviewItemBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type RatingReviewItemBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type RatingReviewItemBlockFieldContainer = {
  __typename?: 'RatingReviewItemBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  author?: Maybe<Array<Pointer>>;
  /** DateTime */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  ratingNumber?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  ratingReviewType?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  ratingStatus?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** RichTitle */
  richTitle?: Maybe<Scalars['String']['output']>;
};

/** Represents a receipt. */
export type Receipt = {
  __typename?: 'Receipt';
  htmlSnippet?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type Redirect = {
  __typename?: 'Redirect';
  /** The redirect url that should be used to redirect the client. */
  location: Scalars['String']['output'];
  /** Indicate if the redirect is a permanent redirect. */
  permanent: Scalars['Boolean']['output'];
};

export type Relationship = IRelationshipItem & {
  __typename?: 'Relationship';
  /** Get the items data for relationships. */
  items?: Maybe<CategoryOrProductConnection>;
  /** The name of the relationship. */
  name?: Maybe<Scalars['String']['output']>;
  /** The id of the relationship. */
  relationshipId: Scalars['String']['output'];
};


export type RelationshipitemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Filter relationship. */
export type RelationshipFilterInput = {
  /** Filter based on the id. */
  id?: InputMaybe<SimpleStringFilterInput>;
};

export type RemoveAddressFromOrganizationError = Forbidden;

export type RemoveAddressFromOrganizationInput = {
  /** The address system id. */
  addressId: Scalars['ID']['input'];
  /** The organization id, omit to use selected organization. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveAddressFromOrganizationPayload = {
  __typename?: 'RemoveAddressFromOrganizationPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<RemoveAddressFromOrganizationError>>;
  query: StorefrontQuery;
};

export type RemoveAddressFromPersonError = Forbidden;

export type RemoveAddressFromPersonInput = {
  /** The address id. */
  addressId: Scalars['ID']['input'];
  /** The person id, omit to use current user. */
  personId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveAddressFromPersonPayload = {
  __typename?: 'RemoveAddressFromPersonPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<RemoveAddressFromPersonError>>;
  query: StorefrontQuery;
};

export type RemoveDiscountCodesFromCartInput = {
  codes: Array<Scalars['String']['input']>;
};

export type RemoveDiscountCodesFromCartPayload = {
  __typename?: 'RemoveDiscountCodesFromCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type RemovePersonFromOrganizationError = Forbidden;

export type RemovePersonFromOrganizationInput = {
  /** The organization id. */
  organizationId: Scalars['ID']['input'];
  /** The person id. */
  personId: Scalars['ID']['input'];
};

export type RemovePersonFromOrganizationPayload = {
  __typename?: 'RemovePersonFromOrganizationPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<RemovePersonFromOrganizationError>>;
  query: StorefrontQuery;
};

export type RemoveVariantFromCartInput = {
  rowId: Scalars['String']['input'];
};

export type RemoveVariantFromCartPayload = {
  __typename?: 'RemoveVariantFromCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type ResetUserPasswordError = Failure | Forbidden | ValidationError;

export type ResetUserPasswordInput = {
  /** The login name for the user. */
  login: Scalars['String']['input'];
  /** The notification url that will be called when email is changed. */
  notificationUrl: Scalars['String']['input'];
  /** The new password for the user. */
  password: Scalars['String']['input'];
  /** The token returned by resetUserPasswordVerification notification. */
  token: Scalars['String']['input'];
  /** The verification token notified in resetUserPasswordVerification. */
  verificationToken: Scalars['String']['input'];
};

export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<ResetUserPasswordError>>;
  query: StorefrontQuery;
};

export type ResetUserPasswordVerificationError = Failure | Forbidden | ValidationError;

export type ResetUserPasswordVerificationInput = {
  /** The login name for the user. */
  login: Scalars['String']['input'];
  /** The notification url that will be called for verification. */
  notificationUrl: Scalars['String']['input'];
};

export type ResetUserPasswordVerificationPayload = {
  __typename?: 'ResetUserPasswordVerificationPayload';
  errors?: Maybe<Array<ResetUserPasswordVerificationError>>;
  query: StorefrontQuery;
  token?: Maybe<Scalars['String']['output']>;
};

export type RestrictedCategoryItem = ICategoryItem & IContentItem & ITemplateInfo & Node & {
  __typename?: 'RestrictedCategoryItem';
  /** Get the children for this item. */
  children?: Maybe<CategoryConnection>;
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type RestrictedCategoryItemchildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RestrictedCategoryItemimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type RestrictedCategoryItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type RestrictedCategoryItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RestrictedCategoryItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestrictedPageItem = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'RestrictedPageItem';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type RestrictedPageItemchildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RestrictedPageItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type RestrictedPageItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RestrictedPageItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RestrictedProductItem = IContentItem & IProductItem & ITemplateInfo & Node & {
  __typename?: 'RestrictedProductItem';
  /** The article number */
  articleNumber: Scalars['String']['output'];
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The images. */
  images: Array<IImageItem>;
  /**
   * If the item is in stock.
   * @deprecated Use StockStatus.InStockQuantity instead.
   */
  inStock: Scalars['Boolean']['output'];
  isVariant: Scalars['Boolean']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Calculated product price. */
  price?: Maybe<ProductPrice>;
  /** Stock status. */
  stockStatus: StockStatus;
  /**
   * Stock status information.
   * @deprecated Use StockStatus.Description instead.
   */
  stockStatusDescription?: Maybe<Scalars['String']['output']>;
  templateName?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement. */
  unitOfMeasurement: UnitOfMeasurement;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type RestrictedProductItemimagesArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};


export type RestrictedProductItemparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type RestrictedProductItemparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RestrictedProductItemurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichContentBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'RichContentBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: RichContentBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type RichContentBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type RichContentBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type RichContentBlockFieldContainer = {
  __typename?: 'RichContentBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

/** Role definition. */
export type Role = Node & {
  __typename?: 'Role';
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Role name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Role operation definition. */
export type RoleOperation = {
  __typename?: 'RoleOperation';
  /** Role name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Role operation id. */
  roleOperationId: Scalars['String']['output'];
};

export type RowBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'RowBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: RowBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: RowBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type RowBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type RowBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type RowBlockFieldContainer = {
  __typename?: 'RowBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorOpacity?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  blockHeight?: Maybe<Scalars['Int']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentSpaceX?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceXDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceY?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceYDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  numberOfItemOnDesktop?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  numberOfItemOnMobile?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  rowWidthOptionDesktop?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  rowWidthOptionMobile?: Maybe<Array<TextOptionDefinition>>;
};

export type RowBlockFieldGroups = {
  __typename?: 'RowBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type SearchContext = {
  __typename?: 'SearchContext';
  category: CategorySearchResultContext;
  page: PageSearchResultContext;
  product: ProductSearchResultContext;
};

/** Facet item. */
export type SearchFacetItemInput = {
  /** Distinct facet item. */
  distinct?: InputMaybe<DistinctFacetItemInput>;
  /** Range facet item. */
  range?: InputMaybe<RangeFacetItemInput>;
};

/** Match information inside field framework. */
export type SearchFieldItemInput = {
  booleanValue?: InputMaybe<BooleanValueItemInput>;
  dateTimeValue?: InputMaybe<DateTimeValueItemInput>;
  numberValue?: InputMaybe<DecimalValueItemInput>;
  stringValue?: InputMaybe<StringValueItemInput>;
};

export type SearchQueryInput = {
  articleNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<Array<Scalars['ID']['input']>>;
  categoryShowRecursively?: InputMaybe<Scalars['Boolean']['input']>;
  categorySystemId?: InputMaybe<Scalars['UUID']['input']>;
  newsDate?: InputMaybe<NewsDateInput>;
  pageSystemId?: InputMaybe<Scalars['ID']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  priceRanges?: InputMaybe<Array<PriceRangeInputLegacy>>;
  productListSystemId?: InputMaybe<Scalars['UUID']['input']>;
  sortBy?: InputMaybe<SortByEnum>;
  sortDirection?: InputMaybe<SortDirectionEnum>;
  tags?: InputMaybe<Array<TagItemInputLegacy>>;
  text?: InputMaybe<Scalars['String']['input']>;
  websiteSystemId?: InputMaybe<Scalars['UUID']['input']>;
};

export type SearchResultPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'SearchResultPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SearchResultPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type SearchResultPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SearchResultPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SearchResultPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SearchResultPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type SearchResultPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SearchResultPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchResultPageFieldContainer = {
  __typename?: 'SearchResultPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type SearchSortItemInput = {
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  order?: InputMaybe<SearchSortOrder>;
};

export enum SearchSortOrder {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING'
}

export type SecondaryNavigationLinkBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'SecondaryNavigationLinkBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SecondaryNavigationLinkBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type SecondaryNavigationLinkBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SecondaryNavigationLinkBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type SecondaryNavigationLinkBlockFieldContainer = {
  __typename?: 'SecondaryNavigationLinkBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Navigation link */
  navigationLink?: Maybe<LinkFieldDefinition>;
};

export type SectionBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'SectionBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SectionBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type SectionBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SectionBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type SectionBlockFieldContainer = {
  __typename?: 'SectionBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  paddingX?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingXDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingY?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  paddingYDesktop?: Maybe<Array<IntOptionDefinition>>;
};

export type SelectUserOrganizationError = Forbidden;

export type SelectUserOrganizationInput = {
  /** The organization system id. Use 'null' to unselect organization. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SelectUserOrganizationPayload = {
  __typename?: 'SelectUserOrganizationPayload';
  authentication?: Maybe<authentication>;
  errors?: Maybe<Array<SelectUserOrganizationError>>;
  query: StorefrontQuery;
};

export enum ShippingIntegrationType {
  DELIVERY_CHECKOUT = 'DELIVERY_CHECKOUT',
  DELIVERY_OPTIONS = 'DELIVERY_OPTIONS',
  INLINE = 'INLINE',
  PAYMENT_CHECKOUT = 'PAYMENT_CHECKOUT'
}

/** Represents a shipping option. */
export type ShippingOption = {
  __typename?: 'ShippingOption';
  /** Description of shipping option. */
  description?: Maybe<Scalars['String']['output']>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The image. */
  image?: Maybe<IImageItem>;
  /** Shipping integration type. */
  integrationType: ShippingIntegrationType;
  /** Name of shipping option. */
  name?: Maybe<Scalars['String']['output']>;
  /** Price of shipping option. */
  price?: Maybe<Scalars['Decimal']['output']>;
  /** Flag to indicate if option is selected. */
  selected: Scalars['Boolean']['output'];
};


/** Represents a shipping option. */
export type ShippingOptionimageArgs = {
  max?: InputMaybe<SizeInput>;
  min?: InputMaybe<SizeInput>;
};

export type SignInUserError = AuthenticationFailure;

export type SignInUserInput = {
  /** The new password for the user when password change is required. */
  newPassword?: InputMaybe<Scalars['String']['input']>;
  /** The password for the user. */
  password: Scalars['String']['input'];
  /** Authentication result type. */
  type?: InputMaybe<AuthenticationResultType>;
  /** The username for the user. */
  username: Scalars['String']['input'];
};

export type SignInUserPayload = {
  __typename?: 'SignInUserPayload';
  authentication?: Maybe<authentication>;
  errors?: Maybe<Array<SignInUserError>>;
  query: StorefrontQuery;
};

export type SignOutUserInput = {
  /** Sign out all sessions on all devices. */
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SignOutUserPayload = {
  __typename?: 'SignOutUserPayload';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  query: StorefrontQuery;
};

/** Match information inside simple text field. */
export type SimpleStringFieldTermInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Value to match. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Simple string filter. */
export type SimpleStringFilterInput = {
  /**
   * Filter operation.
   * 
   * All operations are not implemented for all instances where this filter may be applied.
   * 
   * Example operations.
   * - eq - Equals filter.
   * - ne - Not equals filter.
   * - contains - Contains filter.
   * - not-contains - Not contains filter.
   * - starts-width - Starts width filter.
   * - ends-width - Ends width filter.
   *
   */
  operator: Scalars['String']['input'];
  /** Filter value. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSelectorPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'SiteSelectorPage';
  /** The blocks for the page type. */
  blocks: SiteSelectorPageBlockContainer;
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SiteSelectorPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type SiteSelectorPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SiteSelectorPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SiteSelectorPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SiteSelectorPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteSelectorPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SiteSelectorPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteSelectorPageBlockContainer = {
  __typename?: 'SiteSelectorPageBlockContainer';
  /** The blocks for Main. */
  main: Array<Maybe<IBlock>>;
};

export type SiteSelectorPageFieldContainer = {
  __typename?: 'SiteSelectorPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
};

export type Size = {
  __typename?: 'Size';
  /** The height of the image. */
  height: Scalars['Int']['output'];
  /** The width of the image. */
  width: Scalars['Int']['output'];
};

export type SizeInput = {
  /** The height of the image. */
  height: Scalars['Int']['input'];
  /** The width of the image. */
  width: Scalars['Int']['input'];
};

export type SliderBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'SliderBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field group. */
  displayFieldGroup: SliderBlockDisplayFieldGroups;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: SliderBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SliderBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type SliderBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SliderBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type SliderBlockDisplayFieldGroups = {
  __typename?: 'SliderBlockDisplayFieldGroups';
  /** Display field group: Column1 */
  column1: DisplayFieldGroup;
  /** Display field group: Column2 */
  column2: DisplayFieldGroup;
};

export type SliderBlockFieldContainer = {
  __typename?: 'SliderBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  arrowPosition?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  arrowsDesktop?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  arrowsMobile?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  autoplayDelayMs?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  centeredSlides?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  contentSpaceX?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceXDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceY?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  contentSpaceYDesktop?: Maybe<Array<IntOptionDefinition>>;
  /** Translation missing */
  direction?: Maybe<Array<TextOptionDefinition>>;
  /** Translation missing */
  infinite?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  paginationDotsDesktop?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  paginationDotsMobile?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  paginationDotsOverlapDesktop?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  paginationDotsOverlapMobile?: Maybe<Scalars['Boolean']['output']>;
  /** Translation missing */
  slidesPerGroupDesktop?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  slidesPerGroupMobile?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  slidesPerViewDesktop?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  slidesPerViewMobile?: Maybe<Scalars['Decimal']['output']>;
  /** Translation missing */
  speedMs?: Maybe<Scalars['Int']['output']>;
};

export type SliderBlockFieldDefinition = {
  __typename?: 'SliderBlockFieldDefinition';
  /** Call to action text */
  actionText?: Maybe<Scalars['String']['output']>;
  /** Link to category */
  bannerLinkToCategory?: Maybe<Array<PointerProductCategoryItem>>;
  /** Link to page */
  bannerLinkToPage?: Maybe<Array<PointerPageItem>>;
  /** Link to product */
  bannerLinkToProduct?: Maybe<Array<PointerProductItem>>;
  /** Image */
  blockImagePointer?: Maybe<PointerMediaImageItem>;
  /** Translation missing */
  imageAltText?: Maybe<Scalars['String']['output']>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  sliderType?: Maybe<Array<TextOptionDefinition>>;
};

export type SliderBlockFieldGroups = {
  __typename?: 'SliderBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type SliderBlockFieldValues = IFieldValueItem & {
  __typename?: 'SliderBlockFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  sliderBlockFieldValues?: Maybe<Array<SliderBlockFieldDefinition>>;
};

export enum SortByEnum {
  NAME = 'NAME',
  POPULAR = 'POPULAR',
  PRICE = 'PRICE',
  RECOMMENDED = 'RECOMMENDED',
  RELEVANCE = 'RELEVANCE'
}

export enum SortDirection {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING'
}

export enum SortDirectionEnum {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING'
}

export type SortResultItem = {
  __typename?: 'SortResultItem';
  /** Sort direction */
  direction: SortDirection;
  /** Sort by */
  field: Scalars['String']['output'];
  selected: Scalars['Boolean']['output'];
};

/** Stock status for a product variant. */
export type StockStatus = {
  __typename?: 'StockStatus';
  /** Description of the product variants stock status. */
  description?: Maybe<Scalars['String']['output']>;
  /** In stock quantity of the product variant. */
  inStockQuantity: Scalars['Decimal']['output'];
};

export type StorefrontMutation = {
  __typename?: 'StorefrontMutation';
  addDiscountCodesToCart: AddDiscountCodesToCartPayload;
  addVariantToCart: AddVariantToCartPayload;
  /**
   * Approve an order for the organization. The user must have permission to approve order.
   * Failure types: wrong_order_id, approval_denied, already_approved
   */
  approveOrderForOrganization: ApproveOrderForOrganizationPayload;
  /**
   * Change the current users email.
   * Failure types: account_exists, expired_token, verification_token, wrong_user
   */
  changeMyEmail: ChangeMyEmailPayload;
  /** Verify email for change on the current user. */
  changeMyEmailVerification: ChangeMyEmailVerificationPayload;
  /**
   * Change current users password.
   * Failure types: password_complexity, password_missmatch
   */
  changeMyPassword: ChangeMyPasswordPayload;
  clearCart: ClearCartPayload;
  createCart: CreateCartPayload;
  createCheckoutSession: CreateCheckoutSessionPayload;
  /** Manage a address for the organization. */
  manageAddressForOrganization: ManageAddressForOrganizationPayload;
  /** Manage a address for the person. */
  manageAddressForPerson: ManageAddressForPersonPayload;
  /** Manage a person in the organization. The person is attached to the organization with the specified roles. */
  managePersonInOrganization: ManagePersonInOrganizationPayload;
  placeOrder: PlaceOrderPayload;
  /** Remove a address from the organization. */
  removeAddressFromOrganization: RemoveAddressFromOrganizationPayload;
  /** Remove a address from the person. */
  removeAddressFromPerson: RemoveAddressFromPersonPayload;
  removeDiscountCodesFromCart: RemoveDiscountCodesFromCartPayload;
  /** Remove a person from the organization. The person is disconnected from the organization. */
  removePersonFromOrganization: RemovePersonFromOrganizationPayload;
  removeVariantFromCart: RemoveVariantFromCartPayload;
  /**
   * Reset user password.
   * Failure types: expired_token, no_user, password_complexity, verification_token, wrong_email
   */
  resetUserPassword: ResetUserPasswordPayload;
  /** Verify login for user password reset. */
  resetUserPasswordVerification: ResetUserPasswordVerificationPayload;
  /** Select the organzation on the user context. */
  selectUserOrganization: SelectUserOrganizationPayload;
  /** Sign in the user with username and password. */
  signInUser: SignInUserPayload;
  /** Sign out the signed in user. */
  signOutUser: SignOutUserPayload;
  updateCartDetails: UpdateCartDetailsPayload;
  updateCheckoutDetails: UpdateCheckoutDetailsPayload;
  updateCheckoutOptions: UpdateCheckoutOptionsPayload;
  /** Update field values for the organization. */
  updateFieldForOrganization: UpdateFieldForOrganizationPayload;
  /** Update field values for the person. */
  updateFieldForPerson: UpdateFieldForPersonPayload;
  updateVariantInCart: UpdateVariantInCartPayload;
  validateCart: ValidateCartPayload;
};


export type StorefrontMutationaddDiscountCodesToCartArgs = {
  input: AddDiscountCodesToCartInput;
};


export type StorefrontMutationaddVariantToCartArgs = {
  input: AddVariantToCartInput;
};


export type StorefrontMutationapproveOrderForOrganizationArgs = {
  input: ApproveOrderForOrganizationInput;
};


export type StorefrontMutationchangeMyEmailArgs = {
  input: ChangeMyEmailInput;
};


export type StorefrontMutationchangeMyEmailVerificationArgs = {
  input: ChangeMyEmailVerificationInput;
};


export type StorefrontMutationchangeMyPasswordArgs = {
  input: ChangeMyPasswordInput;
};


export type StorefrontMutationcreateCheckoutSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type StorefrontMutationmanageAddressForOrganizationArgs = {
  input: ManageAddressForOrganizationInput;
};


export type StorefrontMutationmanageAddressForPersonArgs = {
  input: ManageAddressForPersonInput;
};


export type StorefrontMutationmanagePersonInOrganizationArgs = {
  input: ManagePersonInOrganizationInput;
};


export type StorefrontMutationremoveAddressFromOrganizationArgs = {
  input: RemoveAddressFromOrganizationInput;
};


export type StorefrontMutationremoveAddressFromPersonArgs = {
  input: RemoveAddressFromPersonInput;
};


export type StorefrontMutationremoveDiscountCodesFromCartArgs = {
  input: RemoveDiscountCodesFromCartInput;
};


export type StorefrontMutationremovePersonFromOrganizationArgs = {
  input: RemovePersonFromOrganizationInput;
};


export type StorefrontMutationremoveVariantFromCartArgs = {
  input: RemoveVariantFromCartInput;
};


export type StorefrontMutationresetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type StorefrontMutationresetUserPasswordVerificationArgs = {
  input: ResetUserPasswordVerificationInput;
};


export type StorefrontMutationselectUserOrganizationArgs = {
  input: SelectUserOrganizationInput;
};


export type StorefrontMutationsignInUserArgs = {
  input: SignInUserInput;
};


export type StorefrontMutationsignOutUserArgs = {
  input: SignOutUserInput;
};


export type StorefrontMutationupdateCartDetailsArgs = {
  input: UpdateCartDetailsInput;
};


export type StorefrontMutationupdateCheckoutDetailsArgs = {
  input: UpdateCheckoutDetailsInput;
};


export type StorefrontMutationupdateCheckoutOptionsArgs = {
  input: UpdateCheckoutOptionsInput;
};


export type StorefrontMutationupdateFieldForOrganizationArgs = {
  input: UpdateFieldForOrganizationInput;
};


export type StorefrontMutationupdateFieldForPersonArgs = {
  input: UpdateFieldForPersonInput;
};


export type StorefrontMutationupdateVariantInCartArgs = {
  input: UpdateVariantInCartInput;
};


export type StorefrontMutationvalidateCartArgs = {
  input: ValidateCartInput;
};

export type StorefrontQuery = {
  __typename?: 'StorefrontQuery';
  /** The cart. */
  cart: Cart;
  /** Search for categories. */
  categorySearch?: Maybe<CategorySearchConnection>;
  channel?: Maybe<IChannel>;
  /** Checkout options. */
  checkout?: Maybe<Checkout>;
  content: IContent;
  /** Provides to the address types for customers. */
  customerAddressTypes: Array<CustomerAddressType>;
  /** Provides the roles applicable to customers organization person. */
  customerRoles: Array<Role>;
  /** Provides access to the current logged in person information. */
  me?: Maybe<CurrentUser>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Order identifier. */
  order?: Maybe<Order>;
  /** Search for pages. */
  pageSearch?: Maybe<PageSearchConnection>;
  preview?: Maybe<Preview>;
  /** Search for products. */
  productSearch?: Maybe<ProductSearchConnection>;
  /** Receipt for the cart or order. */
  receipt?: Maybe<Receipt>;
  /** @deprecated Use categorySearch, pageSearch or productSearch instead. */
  search: SearchContext;
};


export type StorefrontQuerycategorySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: CategorySearchQueryInput;
  sortBy?: InputMaybe<Array<SearchSortItemInput>>;
};


export type StorefrontQuerynodeArgs = {
  id: Scalars['ID']['input'];
};


export type StorefrontQuerynodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type StorefrontQueryorderArgs = {
  orderId: Scalars['String']['input'];
};


export type StorefrontQuerypageSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  facets?: InputMaybe<Array<SearchFacetItemInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: PageSearchQueryInput;
  sortBy?: InputMaybe<Array<SearchSortItemInput>>;
};


export type StorefrontQueryproductSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  facets?: InputMaybe<Array<SearchFacetItemInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: ProductSearchQueryInput;
  sortBy?: InputMaybe<Array<SearchSortItemInput>>;
};


export type StorefrontQuerysearchArgs = {
  query: SearchQueryInput;
};

/** Definition of search types. */
export enum StringFieldSearchType {
  /** Default. */
  DEFAULT = 'DEFAULT',
  /** Keyword. */
  KEYWORD = 'KEYWORD',
  /** Keyword normalized to lowercase. */
  KEYWORD_LOWERCASE = 'KEYWORD_LOWERCASE',
  /** Ngram. */
  N_GRAM = 'N_GRAM'
}

/** Match information inside text field. */
export type StringFieldTermInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Configure fuzziness. */
  fuzziness?: InputMaybe<FuzzinessItemInput>;
  /** Type of search for this field that should be used. */
  searchType?: InputMaybe<StringFieldSearchType>;
  /** Use synonym analyzer capability. */
  synonymAnalyzer?: Scalars['Boolean']['input'];
  /** Value to match. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StringValue = IFieldValueItem & {
  __typename?: 'StringValue';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  stringValue?: Maybe<Scalars['String']['output']>;
};

/** Match information inside text field. */
export type StringValueItemInput = {
  /** Boost hits on match. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** Field. Use dot (.) as separator for multifield, eg: multifield.itemfield1. */
  field: Scalars['String']['input'];
  /** Configure fuzziness. */
  fuzziness?: InputMaybe<FuzzinessItemInput>;
  /** Type of search for this field that should be used. */
  searchType?: InputMaybe<StringFieldSearchType>;
  /** Use synonym analyzer capability. */
  synonymAnalyzer?: Scalars['Boolean']['input'];
  /** Value to match. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type StringValues = IFieldValueItem & {
  __typename?: 'StringValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  stringValues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SubscribeBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'SubscribeBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: SubscribeBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type SubscribeBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type SubscribeBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type SubscribeBlockFieldContainer = {
  __typename?: 'SubscribeBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  blockHeight?: Maybe<Scalars['Int']['output']>;
  /** Translation missing */
  button?: Maybe<Array<ButtonBlockFieldDefinition>>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  cssClass?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  placeholderText?: Maybe<Scalars['String']['output']>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  subscribeInputText?: Maybe<Scalars['String']['output']>;
};

export type TagItemInputLegacy = {
  /** Tag name */
  key: Scalars['String']['input'];
  /** Tag values */
  value: Array<Scalars['String']['input']>;
};

export type TextImageBlockBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'TextImageBlockBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field group. */
  fieldGroup: TextImageBlockBlockFieldGroups;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: TextImageBlockBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type TextImageBlockBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type TextImageBlockBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type TextImageBlockBlockFieldContainer = {
  __typename?: 'TextImageBlockBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Image */
  blockImagePointer?: Maybe<PointerMediaImageItem>;
  /** Link */
  link?: Maybe<Array<PointerPageItem>>;
  /** Link text */
  linkText?: Maybe<Scalars['String']['output']>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type TextImageBlockBlockFieldGroups = {
  __typename?: 'TextImageBlockBlockFieldGroups';
  /** Field group: General */
  general: FieldGroup;
};

export type TextOptionDefinition = {
  __typename?: 'TextOptionDefinition';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type TextOptionFieldValues = IFieldValueItem & {
  __typename?: 'TextOptionFieldValues';
  /** Field id. */
  field: Scalars['String']['output'];
  fieldMetadata: IFieldMetadataItem;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Field name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The field data. */
  textOptionFieldValues?: Maybe<Array<TextOptionDefinition>>;
};

export type TextOptions = {
  __typename?: 'TextOptions';
  items: Array<TextOptionsItem>;
  multiSelect: Scalars['Boolean']['output'];
};

export type TextOptionsItem = {
  __typename?: 'TextOptionsItem';
  name?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type TopHeaderBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'TopHeaderBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: TopHeaderBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type TopHeaderBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type TopHeaderBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type TopHeaderBlockFieldContainer = {
  __typename?: 'TopHeaderBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  backgroundColorHex?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  links?: Maybe<Array<LinksBlockFieldDefinition>>;
  /** Option */
  position?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
};

export type TopHeaderContainerBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'TopHeaderContainerBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: TopHeaderContainerBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type TopHeaderContainerBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type TopHeaderContainerBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type TopHeaderContainerBlockFieldContainer = {
  __typename?: 'TopHeaderContainerBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
};

/** Represents a unit of measurement. */
export type UnitOfMeasurement = {
  __typename?: 'UnitOfMeasurement';
  /** Decimal digits for unit of measurement. */
  decimalDigits: Scalars['Decimal']['output'];
  /**
   * Unit of measurement id.
   * @deprecated Use unitOfMeasurementId instead.
   */
  id: Scalars['String']['output'];
  /** Unit of measurement name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Unit of measurement id. */
  unitOfMeasurementId: Scalars['String']['output'];
};

export type UpdateCartDetailsInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  showPricesIncludingVat?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCartDetailsPayload = {
  __typename?: 'UpdateCartDetailsPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type UpdateCheckoutDetailsInput = {
  additionalInfo?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  billingAddress?: InputMaybe<OrderAddressInput>;
  customer?: InputMaybe<OrderCustomerDetailsInput>;
  deliveryOptions?: InputMaybe<Array<DeliveryOptionInput>>;
  note?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<OrderAddressInput>;
  shippingWidgetData?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCheckoutDetailsPayload = {
  __typename?: 'UpdateCheckoutDetailsPayload';
  checkout?: Maybe<Checkout>;
  query: StorefrontQuery;
};

export type UpdateCheckoutOptionsInput = {
  paymentOptionId?: InputMaybe<Scalars['ID']['input']>;
  shippingOptionId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCheckoutOptionsPayload = {
  __typename?: 'UpdateCheckoutOptionsPayload';
  checkout?: Maybe<Checkout>;
  query: StorefrontQuery;
};

export type UpdateFieldForOrganizationError = FieldUpdateError | Forbidden | ValidationError;

export type UpdateFieldForOrganizationInput = {
  /** The items to update */
  items: Array<FieldValueUpdateInput>;
  /** The organization id, omit to use selected organization. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateFieldForOrganizationPayload = {
  __typename?: 'UpdateFieldForOrganizationPayload';
  errors?: Maybe<Array<UpdateFieldForOrganizationError>>;
  organization?: Maybe<IOrganizationItem>;
  query: StorefrontQuery;
};

export type UpdateFieldForPersonError = FieldUpdateError | Forbidden | ValidationError;

export type UpdateFieldForPersonInput = {
  /** The items to update */
  items: Array<FieldValueUpdateInput>;
  /** The person id, omit to use current user. */
  personId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateFieldForPersonPayload = {
  __typename?: 'UpdateFieldForPersonPayload';
  errors?: Maybe<Array<UpdateFieldForPersonError>>;
  person?: Maybe<IPersonItem>;
  query: StorefrontQuery;
};

export type UpdateVariantInCartInput = {
  additionalInfo?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  quantity?: InputMaybe<Scalars['Decimal']['input']>;
  rowId: Scalars['String']['input'];
};

export type UpdateVariantInCartPayload = {
  __typename?: 'UpdateVariantInCartPayload';
  cart?: Maybe<Cart>;
  query: StorefrontQuery;
};

export type ValidateCartInput = {
  /** Include technical details in the error. */
  includeDetails?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ValidateCartPayload = {
  __typename?: 'ValidateCartPayload';
  query: StorefrontQuery;
  validationError?: Maybe<Array<ValidationError>>;
};

/** Validation error. */
export type ValidationError = Error & {
  __typename?: 'ValidationError';
  /** Validation message. */
  message: Scalars['String']['output'];
};

/** Represents a VAT detail. */
export type VatDetail = {
  __typename?: 'VatDetail';
  /** Amount for this VAT detail. */
  amountIncludingVat: Scalars['Decimal']['output'];
  /** VAT. */
  vat: Scalars['Decimal']['output'];
  /** VAT rate. */
  vatRate: Scalars['Decimal']['output'];
};

export type VideoBlock = IBlockItem & ITemplateInfo & {
  __typename?: 'VideoBlock';
  /** The child blocks for the block type. */
  children?: Maybe<Array<Maybe<IBlock>>>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: VideoBlockFieldContainer;
  systemId: Scalars['UUID']['output'];
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
};


export type VideoBlockdisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type VideoBlockfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};

export type VideoBlockFieldContainer = {
  __typename?: 'VideoBlockFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Video */
  blockVideo?: Maybe<Array<PointerMediaVideoItem>>;
  /** Translation missing */
  commonStyles?: Maybe<Array<CommonStylesBlockFieldDefinition>>;
  /** Translation missing */
  loading?: Maybe<Array<TextOptionDefinition>>;
  /** RichText */
  richText?: Maybe<Scalars['String']['output']>;
  /** Translation missing */
  videoPlayOption?: Maybe<Array<TextOptionDefinition>>;
};

export type WebsiteText = {
  __typename?: 'WebsiteText';
  /** The key for the website text. */
  key: Scalars['String']['output'];
  /** The value for the website text. */
  value?: Maybe<Scalars['String']['output']>;
};

export type WelcomeEmailPage = IContentItem & IPageItem & ITemplateInfo & Node & {
  __typename?: 'WelcomeEmailPage';
  /** Get the children for this item. */
  children?: Maybe<PageOrCategoryConnection>;
  /** The display field groups. */
  displayFieldGroups: Array<DisplayFieldGroup>;
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** The field data. */
  fields: WelcomeEmailPageFieldContainer;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** The metadata for the content. */
  metadata: Metadata;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Get the parent for this item. */
  parent?: Maybe<IContent>;
  /** Get the parents for this item. */
  parents?: Maybe<ContentConnection>;
  /** Display template. */
  templateName?: Maybe<Scalars['String']['output']>;
  /** The url. */
  url?: Maybe<Scalars['String']['output']>;
};


export type WelcomeEmailPagechildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeRestrictedItems?: InputMaybe<Scalars['Boolean']['input']>;
};


export type WelcomeEmailPagedisplayFieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type WelcomeEmailPagefieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type WelcomeEmailPageparentArgs = {
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type WelcomeEmailPageparentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type WelcomeEmailPageurlArgs = {
  absoluteUrl?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WelcomeEmailPageFieldContainer = {
  __typename?: 'WelcomeEmailPageFieldContainer';
  /** Name */
  _name?: Maybe<Scalars['String']['output']>;
  /** Url */
  _url?: Maybe<Scalars['String']['output']>;
  /** Subject */
  welcomeEmailSubject?: Maybe<Scalars['String']['output']>;
  /** Welcome email text */
  welcomeEmailText?: Maybe<Scalars['String']['output']>;
};

export type _systemPerson = IPersonItem & Node & {
  __typename?: '_systemPerson';
  /** Addresses connected to the person. */
  addresses: Array<CustomerAddress>;
  /** Customer number for the person. */
  customerNumber: Scalars['String']['output'];
  /** The field groups. */
  fieldGroups: Array<FieldGroup>;
  /** Global Unique Id. */
  id: Scalars['ID']['output'];
  /** Organizations connected to the person. */
  organizations?: Maybe<OrganizationConnection>;
};


export type _systemPersonfieldGroupsArgs = {
  filter?: InputMaybe<FieldGroupFilterInput>;
};


export type _systemPersonorganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Authentication result. */
export type authentication = {
  /** Provides access to the current logged in person information. */
  me: CurrentUser;
};

export type SectionBlockFragment = { __typename: 'SectionBlock', fields: { __typename: 'SectionBlockFieldContainer', _name?: string | null, backgroundColorHex?: string | null, paddingX?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, paddingXDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, paddingY?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, paddingYDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null }, children?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | (
    { __typename?: 'RowBlock' }
    & { ' $fragmentRefs'?: { 'RowBlockFragment': RowBlockFragment } }
  ) | { __typename?: 'SecondaryNavigationLinkBlock' } | { __typename?: 'SectionBlock' } | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> | null } & { ' $fragmentName'?: 'SectionBlockFragment' };

export type RowBlockFragment = { __typename: 'RowBlock', fields: { __typename: 'RowBlockFieldContainer', _name?: string | null, numberOfItemOnDesktop?: any | null, numberOfItemOnMobile?: any | null, backgroundColorHex?: string | null, backgroundColorOpacity?: any | null, blockHeight?: number | null, rowWidthOptionDesktop?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, rowWidthOptionMobile?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, contentSpaceXDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceX?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceY?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceYDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null }, children?: Array<(
    { __typename?: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerBlock_Fragment': ContentBlockTypes_BannerBlock_Fragment } }
  ) | (
    { __typename?: 'BannerItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerItemBlock_Fragment': ContentBlockTypes_BannerItemBlock_Fragment } }
  ) | (
    { __typename?: 'BrandBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BrandBlock_Fragment': ContentBlockTypes_BrandBlock_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ButtonBlock_Fragment': ContentBlockTypes_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'ColumnBlock' }
    & { ' $fragmentRefs'?: { 'ColumnBlockFragment': ColumnBlockFragment;'ContentBlockTypes_ColumnBlock_Fragment': ContentBlockTypes_ColumnBlock_Fragment } }
  ) | (
    { __typename?: 'FAQBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FAQBlock_Fragment': ContentBlockTypes_FAQBlock_Fragment } }
  ) | (
    { __typename?: 'FooterColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterColumnBlock_Fragment': ContentBlockTypes_FooterColumnBlock_Fragment;'FooterColumnBlockFragment': FooterColumnBlockFragment } }
  ) | (
    { __typename?: 'FooterContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterContainerBlock_Fragment': ContentBlockTypes_FooterContainerBlock_Fragment } }
  ) | (
    { __typename?: 'FooterLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterLinksBlock_Fragment': ContentBlockTypes_FooterLinksBlock_Fragment } }
  ) | (
    { __typename?: 'HaColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaColumnBlock_Fragment': ContentBlockTypes_HaColumnBlock_Fragment } }
  ) | (
    { __typename?: 'HaRowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaRowBlock_Fragment': ContentBlockTypes_HaRowBlock_Fragment } }
  ) | (
    { __typename?: 'HeaderUserInfoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HeaderUserInfoBlock_Fragment': ContentBlockTypes_HeaderUserInfoBlock_Fragment } }
  ) | (
    { __typename?: 'ImageItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageItemBlock_Fragment': ContentBlockTypes_ImageItemBlock_Fragment } }
  ) | (
    { __typename?: 'ImageListBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageListBlock_Fragment': ContentBlockTypes_ImageListBlock_Fragment } }
  ) | (
    { __typename?: 'ImageTextBlocksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextBlocksBlock_Fragment': ContentBlockTypes_ImageTextBlocksBlock_Fragment } }
  ) | (
    { __typename?: 'ImageTextItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextItemBlock_Fragment': ContentBlockTypes_ImageTextItemBlock_Fragment } }
  ) | (
    { __typename?: 'NavigationContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationContainerBlock_Fragment': ContentBlockTypes_NavigationContainerBlock_Fragment } }
  ) | (
    { __typename?: 'NavigationItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationItemBlock_Fragment': ContentBlockTypes_NavigationItemBlock_Fragment } }
  ) | (
    { __typename?: 'NavigationLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationLinksBlock_Fragment': ContentBlockTypes_NavigationLinksBlock_Fragment } }
  ) | (
    { __typename?: 'ObjectItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ObjectItemBlock_Fragment': ContentBlockTypes_ObjectItemBlock_Fragment } }
  ) | (
    { __typename?: 'PrimaryNavigationBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment': ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment } }
  ) | (
    { __typename?: 'PrimaryNavigationCategoriesBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment': ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment } }
  ) | (
    { __typename?: 'PrimaryNavigationColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment': ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment } }
  ) | (
    { __typename?: 'PrimaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment': ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename?: 'ProductBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductBlock_Fragment': ContentBlockTypes_ProductBlock_Fragment } }
  ) | (
    { __typename?: 'ProductsAndBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsAndBannerBlock_Fragment': ContentBlockTypes_ProductsAndBannerBlock_Fragment } }
  ) | (
    { __typename?: 'ProductsBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsBlock_Fragment': ContentBlockTypes_ProductsBlock_Fragment } }
  ) | (
    { __typename?: 'RatingReviewItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RatingReviewItemBlock_Fragment': ContentBlockTypes_RatingReviewItemBlock_Fragment } }
  ) | (
    { __typename?: 'RichContentBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RichContentBlock_Fragment': ContentBlockTypes_RichContentBlock_Fragment } }
  ) | (
    { __typename?: 'RowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RowBlock_Fragment': ContentBlockTypes_RowBlock_Fragment } }
  ) | (
    { __typename?: 'SecondaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment': ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename?: 'SectionBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SectionBlock_Fragment': ContentBlockTypes_SectionBlock_Fragment } }
  ) | (
    { __typename?: 'SliderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SliderBlock_Fragment': ContentBlockTypes_SliderBlock_Fragment } }
  ) | (
    { __typename?: 'SubscribeBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SubscribeBlock_Fragment': ContentBlockTypes_SubscribeBlock_Fragment } }
  ) | (
    { __typename?: 'TextImageBlockBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TextImageBlockBlock_Fragment': ContentBlockTypes_TextImageBlockBlock_Fragment } }
  ) | (
    { __typename?: 'TopHeaderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderBlock_Fragment': ContentBlockTypes_TopHeaderBlock_Fragment;'TopHeaderFragment': TopHeaderFragment } }
  ) | (
    { __typename?: 'TopHeaderContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderContainerBlock_Fragment': ContentBlockTypes_TopHeaderContainerBlock_Fragment } }
  ) | (
    { __typename?: 'VideoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_VideoBlock_Fragment': ContentBlockTypes_VideoBlock_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'RowBlockFragment' };

export type ColumnBlockFragment = { __typename: 'ColumnBlock', templateName?: string | null, systemId: any, fields: { __typename: 'ColumnBlockFieldContainer', _name?: string | null, numberOfItemOnDesktop?: any | null, numberOfItemOnMobile?: any | null, blockHeight?: number | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null, widthOptionDesktop?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, widthOptionMobile?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, contentSpaceX?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceXDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceY?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceYDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null }, children?: Array<(
    { __typename: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerBlock_Fragment': ContentBlockTypes_BannerBlock_Fragment } }
  ) | (
    { __typename: 'BannerItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerItemBlock_Fragment': ContentBlockTypes_BannerItemBlock_Fragment } }
  ) | (
    { __typename: 'BrandBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BrandBlock_Fragment': ContentBlockTypes_BrandBlock_Fragment } }
  ) | (
    { __typename: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ButtonBlock_Fragment': ContentBlockTypes_ButtonBlock_Fragment } }
  ) | (
    { __typename: 'ColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ColumnBlock_Fragment': ContentBlockTypes_ColumnBlock_Fragment } }
  ) | (
    { __typename: 'FAQBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FAQBlock_Fragment': ContentBlockTypes_FAQBlock_Fragment } }
  ) | (
    { __typename: 'FooterColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterColumnBlock_Fragment': ContentBlockTypes_FooterColumnBlock_Fragment } }
  ) | (
    { __typename: 'FooterContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterContainerBlock_Fragment': ContentBlockTypes_FooterContainerBlock_Fragment } }
  ) | (
    { __typename: 'FooterLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterLinksBlock_Fragment': ContentBlockTypes_FooterLinksBlock_Fragment } }
  ) | (
    { __typename: 'HaColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaColumnBlock_Fragment': ContentBlockTypes_HaColumnBlock_Fragment } }
  ) | (
    { __typename: 'HaRowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaRowBlock_Fragment': ContentBlockTypes_HaRowBlock_Fragment } }
  ) | (
    { __typename: 'HeaderUserInfoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HeaderUserInfoBlock_Fragment': ContentBlockTypes_HeaderUserInfoBlock_Fragment } }
  ) | (
    { __typename: 'ImageItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageItemBlock_Fragment': ContentBlockTypes_ImageItemBlock_Fragment } }
  ) | (
    { __typename: 'ImageListBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageListBlock_Fragment': ContentBlockTypes_ImageListBlock_Fragment } }
  ) | (
    { __typename: 'ImageTextBlocksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextBlocksBlock_Fragment': ContentBlockTypes_ImageTextBlocksBlock_Fragment } }
  ) | (
    { __typename: 'ImageTextItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextItemBlock_Fragment': ContentBlockTypes_ImageTextItemBlock_Fragment } }
  ) | (
    { __typename: 'NavigationContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationContainerBlock_Fragment': ContentBlockTypes_NavigationContainerBlock_Fragment } }
  ) | (
    { __typename: 'NavigationItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationItemBlock_Fragment': ContentBlockTypes_NavigationItemBlock_Fragment } }
  ) | (
    { __typename: 'NavigationLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationLinksBlock_Fragment': ContentBlockTypes_NavigationLinksBlock_Fragment } }
  ) | (
    { __typename: 'ObjectItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ObjectItemBlock_Fragment': ContentBlockTypes_ObjectItemBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment': ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationCategoriesBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment': ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment': ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment': ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename: 'ProductBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductBlock_Fragment': ContentBlockTypes_ProductBlock_Fragment } }
  ) | (
    { __typename: 'ProductsAndBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsAndBannerBlock_Fragment': ContentBlockTypes_ProductsAndBannerBlock_Fragment } }
  ) | (
    { __typename: 'ProductsBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsBlock_Fragment': ContentBlockTypes_ProductsBlock_Fragment } }
  ) | (
    { __typename: 'RatingReviewItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RatingReviewItemBlock_Fragment': ContentBlockTypes_RatingReviewItemBlock_Fragment } }
  ) | (
    { __typename: 'RichContentBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RichContentBlock_Fragment': ContentBlockTypes_RichContentBlock_Fragment } }
  ) | (
    { __typename: 'RowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RowBlock_Fragment': ContentBlockTypes_RowBlock_Fragment } }
  ) | (
    { __typename: 'SecondaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment': ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename: 'SectionBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SectionBlock_Fragment': ContentBlockTypes_SectionBlock_Fragment } }
  ) | (
    { __typename: 'SliderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SliderBlock_Fragment': ContentBlockTypes_SliderBlock_Fragment } }
  ) | (
    { __typename: 'SubscribeBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SubscribeBlock_Fragment': ContentBlockTypes_SubscribeBlock_Fragment } }
  ) | (
    { __typename: 'TextImageBlockBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TextImageBlockBlock_Fragment': ContentBlockTypes_TextImageBlockBlock_Fragment } }
  ) | (
    { __typename: 'TopHeaderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderBlock_Fragment': ContentBlockTypes_TopHeaderBlock_Fragment } }
  ) | (
    { __typename: 'TopHeaderContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderContainerBlock_Fragment': ContentBlockTypes_TopHeaderContainerBlock_Fragment } }
  ) | (
    { __typename: 'VideoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_VideoBlock_Fragment': ContentBlockTypes_VideoBlock_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ColumnBlockFragment' };

export type FooterColumnBlockFragment = { __typename: 'FooterColumnBlock', templateName?: string | null, systemId: any, fields: { __typename: 'FooterColumnBlockFieldContainer', _name?: string | null, richText?: string | null, navigationLinksHeader?: (
      { __typename?: 'LinkFieldDefinition' }
      & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
    ) | null }, children?: Array<(
    { __typename: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerBlock_Fragment': ContentBlockTypes_BannerBlock_Fragment } }
  ) | (
    { __typename: 'BannerItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BannerItemBlock_Fragment': ContentBlockTypes_BannerItemBlock_Fragment } }
  ) | (
    { __typename: 'BrandBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_BrandBlock_Fragment': ContentBlockTypes_BrandBlock_Fragment } }
  ) | (
    { __typename: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ButtonBlock_Fragment': ContentBlockTypes_ButtonBlock_Fragment } }
  ) | (
    { __typename: 'ColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ColumnBlock_Fragment': ContentBlockTypes_ColumnBlock_Fragment } }
  ) | (
    { __typename: 'FAQBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FAQBlock_Fragment': ContentBlockTypes_FAQBlock_Fragment } }
  ) | (
    { __typename: 'FooterColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterColumnBlock_Fragment': ContentBlockTypes_FooterColumnBlock_Fragment } }
  ) | (
    { __typename: 'FooterContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterContainerBlock_Fragment': ContentBlockTypes_FooterContainerBlock_Fragment } }
  ) | (
    { __typename: 'FooterLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_FooterLinksBlock_Fragment': ContentBlockTypes_FooterLinksBlock_Fragment } }
  ) | (
    { __typename: 'HaColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaColumnBlock_Fragment': ContentBlockTypes_HaColumnBlock_Fragment } }
  ) | (
    { __typename: 'HaRowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HaRowBlock_Fragment': ContentBlockTypes_HaRowBlock_Fragment } }
  ) | (
    { __typename: 'HeaderUserInfoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_HeaderUserInfoBlock_Fragment': ContentBlockTypes_HeaderUserInfoBlock_Fragment } }
  ) | (
    { __typename: 'ImageItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageItemBlock_Fragment': ContentBlockTypes_ImageItemBlock_Fragment } }
  ) | (
    { __typename: 'ImageListBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageListBlock_Fragment': ContentBlockTypes_ImageListBlock_Fragment } }
  ) | (
    { __typename: 'ImageTextBlocksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextBlocksBlock_Fragment': ContentBlockTypes_ImageTextBlocksBlock_Fragment } }
  ) | (
    { __typename: 'ImageTextItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ImageTextItemBlock_Fragment': ContentBlockTypes_ImageTextItemBlock_Fragment } }
  ) | (
    { __typename: 'NavigationContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationContainerBlock_Fragment': ContentBlockTypes_NavigationContainerBlock_Fragment } }
  ) | (
    { __typename: 'NavigationItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationItemBlock_Fragment': ContentBlockTypes_NavigationItemBlock_Fragment } }
  ) | (
    { __typename: 'NavigationLinksBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_NavigationLinksBlock_Fragment': ContentBlockTypes_NavigationLinksBlock_Fragment } }
  ) | (
    { __typename: 'ObjectItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ObjectItemBlock_Fragment': ContentBlockTypes_ObjectItemBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment': ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationCategoriesBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment': ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationColumnBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment': ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment } }
  ) | (
    { __typename: 'PrimaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment': ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename: 'ProductBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductBlock_Fragment': ContentBlockTypes_ProductBlock_Fragment } }
  ) | (
    { __typename: 'ProductsAndBannerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsAndBannerBlock_Fragment': ContentBlockTypes_ProductsAndBannerBlock_Fragment } }
  ) | (
    { __typename: 'ProductsBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_ProductsBlock_Fragment': ContentBlockTypes_ProductsBlock_Fragment } }
  ) | (
    { __typename: 'RatingReviewItemBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RatingReviewItemBlock_Fragment': ContentBlockTypes_RatingReviewItemBlock_Fragment } }
  ) | (
    { __typename: 'RichContentBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RichContentBlock_Fragment': ContentBlockTypes_RichContentBlock_Fragment } }
  ) | (
    { __typename: 'RowBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_RowBlock_Fragment': ContentBlockTypes_RowBlock_Fragment } }
  ) | (
    { __typename: 'SecondaryNavigationLinkBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment': ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment } }
  ) | (
    { __typename: 'SectionBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SectionBlock_Fragment': ContentBlockTypes_SectionBlock_Fragment } }
  ) | (
    { __typename: 'SliderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SliderBlock_Fragment': ContentBlockTypes_SliderBlock_Fragment } }
  ) | (
    { __typename: 'SubscribeBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_SubscribeBlock_Fragment': ContentBlockTypes_SubscribeBlock_Fragment } }
  ) | (
    { __typename: 'TextImageBlockBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TextImageBlockBlock_Fragment': ContentBlockTypes_TextImageBlockBlock_Fragment } }
  ) | (
    { __typename: 'TopHeaderBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderBlock_Fragment': ContentBlockTypes_TopHeaderBlock_Fragment } }
  ) | (
    { __typename: 'TopHeaderContainerBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_TopHeaderContainerBlock_Fragment': ContentBlockTypes_TopHeaderContainerBlock_Fragment } }
  ) | (
    { __typename: 'VideoBlock' }
    & { ' $fragmentRefs'?: { 'ContentBlockTypes_VideoBlock_Fragment': ContentBlockTypes_VideoBlock_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'FooterColumnBlockFragment' };

type ContentBlockTypes_BannerBlock_Fragment = { __typename: 'BannerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_BannerBlock_Fragment' };

type ContentBlockTypes_BannerItemBlock_Fragment = (
  { __typename: 'BannerItemBlock' }
  & { ' $fragmentRefs'?: { 'BannerItemBlockFragment': BannerItemBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_BannerItemBlock_Fragment' };

type ContentBlockTypes_BrandBlock_Fragment = { __typename: 'BrandBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_BrandBlock_Fragment' };

type ContentBlockTypes_ButtonBlock_Fragment = (
  { __typename: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'ButtonBlockFragment': ButtonBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_ButtonBlock_Fragment' };

type ContentBlockTypes_ColumnBlock_Fragment = { __typename: 'ColumnBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ColumnBlock_Fragment' };

type ContentBlockTypes_FAQBlock_Fragment = { __typename: 'FAQBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_FAQBlock_Fragment' };

type ContentBlockTypes_FooterColumnBlock_Fragment = { __typename: 'FooterColumnBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_FooterColumnBlock_Fragment' };

type ContentBlockTypes_FooterContainerBlock_Fragment = { __typename: 'FooterContainerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_FooterContainerBlock_Fragment' };

type ContentBlockTypes_FooterLinksBlock_Fragment = { __typename: 'FooterLinksBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_FooterLinksBlock_Fragment' };

type ContentBlockTypes_HaColumnBlock_Fragment = { __typename: 'HaColumnBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_HaColumnBlock_Fragment' };

type ContentBlockTypes_HaRowBlock_Fragment = { __typename: 'HaRowBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_HaRowBlock_Fragment' };

type ContentBlockTypes_HeaderUserInfoBlock_Fragment = { __typename: 'HeaderUserInfoBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_HeaderUserInfoBlock_Fragment' };

type ContentBlockTypes_ImageItemBlock_Fragment = { __typename: 'ImageItemBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ImageItemBlock_Fragment' };

type ContentBlockTypes_ImageListBlock_Fragment = (
  { __typename: 'ImageListBlock' }
  & { ' $fragmentRefs'?: { 'ImageListBlockFragment': ImageListBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_ImageListBlock_Fragment' };

type ContentBlockTypes_ImageTextBlocksBlock_Fragment = { __typename: 'ImageTextBlocksBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ImageTextBlocksBlock_Fragment' };

type ContentBlockTypes_ImageTextItemBlock_Fragment = (
  { __typename: 'ImageTextItemBlock' }
  & { ' $fragmentRefs'?: { 'ImageTextItemBlockFragment': ImageTextItemBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_ImageTextItemBlock_Fragment' };

type ContentBlockTypes_NavigationContainerBlock_Fragment = { __typename: 'NavigationContainerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_NavigationContainerBlock_Fragment' };

type ContentBlockTypes_NavigationItemBlock_Fragment = { __typename: 'NavigationItemBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_NavigationItemBlock_Fragment' };

type ContentBlockTypes_NavigationLinksBlock_Fragment = (
  { __typename: 'NavigationLinksBlock' }
  & { ' $fragmentRefs'?: { 'NavigationLinksBlockFragment': NavigationLinksBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_NavigationLinksBlock_Fragment' };

type ContentBlockTypes_ObjectItemBlock_Fragment = { __typename: 'ObjectItemBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ObjectItemBlock_Fragment' };

type ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment = { __typename: 'PrimaryNavigationBannerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment' };

type ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment = { __typename: 'PrimaryNavigationCategoriesBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment' };

type ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment = { __typename: 'PrimaryNavigationColumnBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment' };

type ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment = { __typename: 'PrimaryNavigationLinkBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment' };

type ContentBlockTypes_ProductBlock_Fragment = { __typename: 'ProductBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ProductBlock_Fragment' };

type ContentBlockTypes_ProductsAndBannerBlock_Fragment = { __typename: 'ProductsAndBannerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ProductsAndBannerBlock_Fragment' };

type ContentBlockTypes_ProductsBlock_Fragment = { __typename: 'ProductsBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_ProductsBlock_Fragment' };

type ContentBlockTypes_RatingReviewItemBlock_Fragment = { __typename: 'RatingReviewItemBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_RatingReviewItemBlock_Fragment' };

type ContentBlockTypes_RichContentBlock_Fragment = (
  { __typename: 'RichContentBlock' }
  & { ' $fragmentRefs'?: { 'RichContentBlockFragment': RichContentBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_RichContentBlock_Fragment' };

type ContentBlockTypes_RowBlock_Fragment = { __typename: 'RowBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_RowBlock_Fragment' };

type ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment = { __typename: 'SecondaryNavigationLinkBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment' };

type ContentBlockTypes_SectionBlock_Fragment = { __typename: 'SectionBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_SectionBlock_Fragment' };

type ContentBlockTypes_SliderBlock_Fragment = (
  { __typename: 'SliderBlock' }
  & { ' $fragmentRefs'?: { 'SliderBlockFragment': SliderBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_SliderBlock_Fragment' };

type ContentBlockTypes_SubscribeBlock_Fragment = (
  { __typename: 'SubscribeBlock' }
  & { ' $fragmentRefs'?: { 'SubscribeBlockFragment': SubscribeBlockFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_SubscribeBlock_Fragment' };

type ContentBlockTypes_TextImageBlockBlock_Fragment = { __typename: 'TextImageBlockBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_TextImageBlockBlock_Fragment' };

type ContentBlockTypes_TopHeaderBlock_Fragment = (
  { __typename: 'TopHeaderBlock' }
  & { ' $fragmentRefs'?: { 'TopHeaderFragment': TopHeaderFragment } }
) & { ' $fragmentName'?: 'ContentBlockTypes_TopHeaderBlock_Fragment' };

type ContentBlockTypes_TopHeaderContainerBlock_Fragment = { __typename: 'TopHeaderContainerBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_TopHeaderContainerBlock_Fragment' };

type ContentBlockTypes_VideoBlock_Fragment = { __typename: 'VideoBlock' } & { ' $fragmentName'?: 'ContentBlockTypes_VideoBlock_Fragment' };

export type ContentBlockTypesFragment = ContentBlockTypes_BannerBlock_Fragment | ContentBlockTypes_BannerItemBlock_Fragment | ContentBlockTypes_BrandBlock_Fragment | ContentBlockTypes_ButtonBlock_Fragment | ContentBlockTypes_ColumnBlock_Fragment | ContentBlockTypes_FAQBlock_Fragment | ContentBlockTypes_FooterColumnBlock_Fragment | ContentBlockTypes_FooterContainerBlock_Fragment | ContentBlockTypes_FooterLinksBlock_Fragment | ContentBlockTypes_HaColumnBlock_Fragment | ContentBlockTypes_HaRowBlock_Fragment | ContentBlockTypes_HeaderUserInfoBlock_Fragment | ContentBlockTypes_ImageItemBlock_Fragment | ContentBlockTypes_ImageListBlock_Fragment | ContentBlockTypes_ImageTextBlocksBlock_Fragment | ContentBlockTypes_ImageTextItemBlock_Fragment | ContentBlockTypes_NavigationContainerBlock_Fragment | ContentBlockTypes_NavigationItemBlock_Fragment | ContentBlockTypes_NavigationLinksBlock_Fragment | ContentBlockTypes_ObjectItemBlock_Fragment | ContentBlockTypes_PrimaryNavigationBannerBlock_Fragment | ContentBlockTypes_PrimaryNavigationCategoriesBlock_Fragment | ContentBlockTypes_PrimaryNavigationColumnBlock_Fragment | ContentBlockTypes_PrimaryNavigationLinkBlock_Fragment | ContentBlockTypes_ProductBlock_Fragment | ContentBlockTypes_ProductsAndBannerBlock_Fragment | ContentBlockTypes_ProductsBlock_Fragment | ContentBlockTypes_RatingReviewItemBlock_Fragment | ContentBlockTypes_RichContentBlock_Fragment | ContentBlockTypes_RowBlock_Fragment | ContentBlockTypes_SecondaryNavigationLinkBlock_Fragment | ContentBlockTypes_SectionBlock_Fragment | ContentBlockTypes_SliderBlock_Fragment | ContentBlockTypes_SubscribeBlock_Fragment | ContentBlockTypes_TextImageBlockBlock_Fragment | ContentBlockTypes_TopHeaderBlock_Fragment | ContentBlockTypes_TopHeaderContainerBlock_Fragment | ContentBlockTypes_VideoBlock_Fragment;

export type ImageTextItemBlockFragment = { __typename: 'ImageTextItemBlock', fields: { __typename: 'ImageTextItemBlockFieldContainer', _name?: string | null, richText?: string | null, backgroundColorHex?: string | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null, contentImage?: Array<(
      { __typename?: 'ContentImageBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ContentImageFragment': ContentImageFragment } }
    )> | null, contentImagePosition?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, button?: Array<(
      { __typename?: 'ButtonBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    )> | null, backgroundLink?: (
      { __typename?: 'LinkFieldDefinition' }
      & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
    ) | null, loading?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null } } & { ' $fragmentName'?: 'ImageTextItemBlockFragment' };

export type SliderBlockFragment = { __typename: 'SliderBlock', fields: { __typename: 'SliderBlockFieldContainer', _name?: string | null, autoplay?: boolean | null, autoplayDelayMs?: string | null, infinite?: boolean | null, arrowsDesktop?: boolean | null, arrowsMobile?: boolean | null, paginationDotsDesktop?: boolean | null, paginationDotsMobile?: boolean | null, paginationDotsOverlapDesktop?: boolean | null, paginationDotsOverlapMobile?: boolean | null, slidesPerViewDesktop?: any | null, slidesPerViewMobile?: any | null, slidesPerGroupDesktop?: any | null, slidesPerGroupMobile?: any | null, speedMs?: number | null, centeredSlides?: boolean | null, arrowPosition?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, direction?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null, contentSpaceX?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceXDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceY?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceYDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null }, children?: Array<{ __typename: 'BannerBlock' } | (
    { __typename: 'BannerItemBlock' }
    & { ' $fragmentRefs'?: { 'BannerItemBlockFragment': BannerItemBlockFragment } }
  ) | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | (
    { __typename: 'ImageTextItemBlock' }
    & { ' $fragmentRefs'?: { 'ImageTextItemBlockFragment': ImageTextItemBlockFragment } }
  ) | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null> | null } & { ' $fragmentName'?: 'SliderBlockFragment' };

export type SubscribeBlockFragment = { __typename: 'SubscribeBlock', fields: { __typename: 'SubscribeBlockFieldContainer', _name?: string | null, richText?: string | null, subscribeInputText?: string | null, placeholderText?: string | null, button?: Array<(
      { __typename?: 'ButtonBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    )> | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null } } & { ' $fragmentName'?: 'SubscribeBlockFragment' };

export type BannerItemBlockFragment = { __typename: 'BannerItemBlock', fields: { __typename: 'BannerItemBlockFieldContainer', _name?: string | null, richText?: string | null, backgroundColorOverlay?: string | null, backgroundColorOverlayOpacity?: any | null, blockHeight?: number | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null, contentImage?: Array<(
      { __typename?: 'ContentImageBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ContentImageFragment': ContentImageFragment } }
    )> | null, backgroundLink?: (
      { __typename?: 'LinkFieldDefinition' }
      & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
    ) | null, button?: Array<(
      { __typename?: 'ButtonBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    )> | null, loading?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null } } & { ' $fragmentName'?: 'BannerItemBlockFragment' };

export type ButtonFragment = { __typename: 'ButtonBlockFieldDefinition', cssClass?: string | null, buttonLink?: (
    { __typename?: 'LinkFieldDefinition' }
    & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
  ) | null, buttonType?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null } & { ' $fragmentName'?: 'ButtonFragment' };

export type CommonStylesBlockFragment = { __typename: 'CommonStylesBlockFieldDefinition', cssClass?: string | null, textAlign?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, verticalAlign?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, paddingTop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingRight?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingBottom?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingLeft?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginTop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginRight?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginBottom?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginLeft?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, textAlignDesktop?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, verticalAlignDesktop?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, paddingTopDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingLeftDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingBottomDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, paddingRightDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginTopDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginLeftDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginBottomDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null, marginRightDesktop?: Array<(
    { __typename?: 'IntOptionDefinition' }
    & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
  )> | null } & { ' $fragmentName'?: 'CommonStylesBlockFragment' };

export type FooterContainerBlockFragment = { __typename: 'FooterContainerBlock', children?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | (
    { __typename?: 'RowBlock' }
    & { ' $fragmentRefs'?: { 'RowBlockFragment': RowBlockFragment } }
  ) | { __typename?: 'SecondaryNavigationLinkBlock' } | { __typename?: 'SectionBlock' } | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> | null } & { ' $fragmentName'?: 'FooterContainerBlockFragment' };

export type TopHeaderFragment = { __typename: 'TopHeaderBlock', templateName?: string | null, fields: { __typename: 'TopHeaderBlockFieldContainer', _name?: string | null, richText?: string | null, backgroundColorHex?: string | null, position?: Array<(
      { __typename?: 'TextOptionDefinition' }
      & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
    )> | null, links?: Array<{ __typename: 'LinksBlockFieldDefinition', navigationLink?: (
        { __typename?: 'LinkFieldDefinition' }
        & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
      ) | null }> | null } } & { ' $fragmentName'?: 'TopHeaderFragment' };

export type NavigationLinksBlockFragment = { __typename?: 'NavigationLinksBlock', fields: { __typename?: 'NavigationLinksBlockFieldContainer', collapsibleMobile?: boolean | null, headerLabel?: string | null, navigationLinksHeader?: (
      { __typename?: 'LinkFieldDefinition' }
      & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
    ) | null, navigationLinks?: Array<{ __typename?: 'NavigationLinksBlockFieldDefinition', navigationLink?: (
        { __typename?: 'LinkFieldDefinition' }
        & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
      ) | null }> | null } } & { ' $fragmentName'?: 'NavigationLinksBlockFragment' };

export type RichContentBlockFragment = { __typename?: 'RichContentBlock', fields: { __typename?: 'RichContentBlockFieldContainer', richText?: string | null, backgroundColorHex?: string | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null } } & { ' $fragmentName'?: 'RichContentBlockFragment' };

export type ButtonBlockFragment = { __typename?: 'ButtonBlock', fields: { __typename?: 'ButtonBlockFieldContainer', button?: Array<(
      { __typename?: 'ButtonBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    )> | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null } } & { ' $fragmentName'?: 'ButtonBlockFragment' };

export type ImageListBlockFragment = { __typename?: 'ImageListBlock', fields: { __typename?: 'ImageListBlockFieldContainer', numberOfItemOnDesktop?: any | null, numberOfItemOnMobile?: any | null, contentSpaceX?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceXDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceY?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, contentSpaceYDesktop?: Array<(
      { __typename?: 'IntOptionDefinition' }
      & { ' $fragmentRefs'?: { 'IntOptionFragment': IntOptionFragment } }
    )> | null, commonStyles?: Array<(
      { __typename?: 'CommonStylesBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'CommonStylesBlockFragment': CommonStylesBlockFragment } }
    )> | null }, children?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | (
    { __typename?: 'ImageItemBlock' }
    & { ' $fragmentRefs'?: { 'ImageItemBlockFragment': ImageItemBlockFragment } }
  ) | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | { __typename?: 'RowBlock' } | { __typename?: 'SecondaryNavigationLinkBlock' } | { __typename?: 'SectionBlock' } | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> | null } & { ' $fragmentName'?: 'ImageListBlockFragment' };

export type ImageItemBlockFragment = { __typename?: 'ImageItemBlock', fields: { __typename?: 'ImageItemBlockFieldContainer', contentImage?: Array<(
      { __typename?: 'ContentImageBlockFieldDefinition' }
      & { ' $fragmentRefs'?: { 'ContentImageFragment': ContentImageFragment } }
    )> | null, navigationLink?: (
      { __typename?: 'LinkFieldDefinition' }
      & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
    ) | null } } & { ' $fragmentName'?: 'ImageItemBlockFragment' };

export type CartFragment = { __typename?: 'Cart', discountCodes: Array<string>, showPricesIncludingVat: boolean, productTotalIncludingVat: any, productTotalExcludingVat: any, shippingCostIncludingVat: any, shippingCostExcludingVat: any, totalFeesIncludingVat: any, totalFeesExcludingVat: any, totalPromotionsAndDiscountsIncludingVat: any, totalPromotionsAndDiscountsExcludingVat: any, grandTotal: any, totalVat: any, productCount: any, giftCards: Array<string>, country: (
    { __typename?: 'Country' }
    & { ' $fragmentRefs'?: { 'CountryFragment': CountryFragment } }
  ), currency: (
    { __typename?: 'Currency' }
    & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
  ), rows: Array<(
    { __typename?: 'OrderRow' }
    & { ' $fragmentRefs'?: { 'OrderRowFragment': OrderRowFragment } }
  )>, discountInfos: Array<(
    { __typename?: 'DiscountInfo' }
    & { ' $fragmentRefs'?: { 'DiscountInfoFragment': DiscountInfoFragment } }
  )> } & { ' $fragmentName'?: 'CartFragment' };

export type CartMutationFragment = { __typename?: 'Cart', discountCodes: Array<string>, showPricesIncludingVat: boolean, productTotalIncludingVat: any, productTotalExcludingVat: any, shippingCostIncludingVat: any, shippingCostExcludingVat: any, totalFeesIncludingVat: any, totalFeesExcludingVat: any, totalPromotionsAndDiscountsIncludingVat: any, totalPromotionsAndDiscountsExcludingVat: any, grandTotal: any, totalVat: any, productCount: any, giftCards: Array<string> } & { ' $fragmentName'?: 'CartMutationFragment' };

export type OrderRowFragment = { __typename?: 'OrderRow', rowId: string, articleNumber: string, quantity: any, description?: string | null, rowType: OrderRowType, unitPriceIncludingVat: any, unitPriceExcludingVat: any, totalIncludingVat: any, totalExcludingVat: any, totalVat: any, vatRate: any, product?: { __typename?: 'ProductWithOneVariantProduct', id: string, name?: string | null, articleNumber: string } | { __typename?: 'ProductWithVariantsFurnitureProduct', id: string, name?: string | null, articleNumber: string } | { __typename?: 'ProductWithVariantsListProduct', id: string, name?: string | null, articleNumber: string } | { __typename?: 'ProductWithVariantsProduct', id: string, name?: string | null, articleNumber: string } | { __typename?: 'RestrictedProductItem', id: string, name?: string | null, articleNumber: string } | null, additionalInfo: Array<{ __typename?: 'AdditionalInfo', key: string, value: string }>, unitOfMeasurement?: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) | null, vatDetails: Array<(
    { __typename?: 'VatDetail' }
    & { ' $fragmentRefs'?: { 'VatDetailFragment': VatDetailFragment } }
  )>, discountInfos?: Array<(
    { __typename?: 'DiscountInfo' }
    & { ' $fragmentRefs'?: { 'DiscountInfoFragment': DiscountInfoFragment } }
  )> | null } & { ' $fragmentName'?: 'OrderRowFragment' };

type Category_CategoryProductCategory_Fragment = { __typename?: 'CategoryProductCategory', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Category_CategoryProductCategory_Fragment' };

type Category_RestrictedCategoryItem_Fragment = { __typename?: 'RestrictedCategoryItem', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Category_RestrictedCategoryItem_Fragment' };

export type CategoryFragment = Category_CategoryProductCategory_Fragment | Category_RestrictedCategoryItem_Fragment;

export type CategoryProductCategoryFragment = (
  { __typename?: 'CategoryProductCategory', name?: string | null, templateName?: string | null, fields: { __typename?: 'CategoryProductCategoryFieldContainer', _name?: string | null, _description?: string | null }, children?: { __typename?: 'CategoryConnection', nodes?: Array<(
      { __typename?: 'CategoryProductCategory' }
      & { ' $fragmentRefs'?: { 'Category_CategoryProductCategory_Fragment': Category_CategoryProductCategory_Fragment } }
    ) | (
      { __typename?: 'RestrictedCategoryItem' }
      & { ' $fragmentRefs'?: { 'Category_RestrictedCategoryItem_Fragment': Category_RestrictedCategoryItem_Fragment } }
    )> | null, pageInfo: (
      { __typename?: 'PageInfo' }
      & { ' $fragmentRefs'?: { 'PageInfoFragment': PageInfoFragment } }
    ) } | null }
  & { ' $fragmentRefs'?: { 'Category_CategoryProductCategory_Fragment': Category_CategoryProductCategory_Fragment } }
) & { ' $fragmentName'?: 'CategoryProductCategoryFragment' };

export type CountryFragment = { __typename?: 'Country', name: string, code: string, currency: { __typename?: 'Currency', name: string, code: string, symbol?: string | null } } & { ' $fragmentName'?: 'CountryFragment' };

export type CurrencyFragment = { __typename?: 'Currency', name: string, code: string, symbol?: string | null } & { ' $fragmentName'?: 'CurrencyFragment' };

export type UnitOfMeasurementFragment = { __typename?: 'UnitOfMeasurement', unitOfMeasurementId: string, name?: string | null, decimalDigits: any } & { ' $fragmentName'?: 'UnitOfMeasurementFragment' };

export type VatDetailFragment = { __typename?: 'VatDetail', vatRate: any, amountIncludingVat: any, vat: any } & { ' $fragmentName'?: 'VatDetailFragment' };

export type DiscountInfoFragment = { __typename?: 'DiscountInfo', description?: string | null, discountCode?: string | null, discountType: string } & { ' $fragmentName'?: 'DiscountInfoFragment' };

export type MetadataFragment = { __typename?: 'Metadata', title?: string | null, language: string, links: Array<{ __typename?: 'MetadateLinkItem', href: string, attributes: Array<{ __typename?: 'MetadateLinkItemAttribute', name: string, value: string }> }>, tags: Array<{ __typename?: 'MetadateTagItem', name: string, content: string }> } & { ' $fragmentName'?: 'MetadataFragment' };

type Node_AcceleratorWebsiteWebsite_Fragment = { __typename?: 'AcceleratorWebsiteWebsite', id: string } & { ' $fragmentName'?: 'Node_AcceleratorWebsiteWebsite_Fragment' };

type Node_ArticlePage_Fragment = { __typename?: 'ArticlePage', id: string } & { ' $fragmentName'?: 'Node_ArticlePage_Fragment' };

type Node_B2BPersonTemplatePerson_Fragment = { __typename?: 'B2BPersonTemplatePerson', id: string } & { ' $fragmentName'?: 'Node_B2BPersonTemplatePerson_Fragment' };

type Node_B2CPersonTemplatePerson_Fragment = { __typename?: 'B2CPersonTemplatePerson', id: string } & { ' $fragmentName'?: 'Node_B2CPersonTemplatePerson_Fragment' };

type Node_BrandListPage_Fragment = { __typename?: 'BrandListPage', id: string } & { ' $fragmentName'?: 'Node_BrandListPage_Fragment' };

type Node_BrandPage_Fragment = { __typename?: 'BrandPage', id: string } & { ' $fragmentName'?: 'Node_BrandPage_Fragment' };

type Node_CategoryProductCategory_Fragment = { __typename?: 'CategoryProductCategory', id: string } & { ' $fragmentName'?: 'Node_CategoryProductCategory_Fragment' };

type Node_CheckoutPage_Fragment = { __typename?: 'CheckoutPage', id: string } & { ' $fragmentName'?: 'Node_CheckoutPage_Fragment' };

type Node_CustomerAddressType_Fragment = { __typename?: 'CustomerAddressType', id: string } & { ' $fragmentName'?: 'Node_CustomerAddressType_Fragment' };

type Node_DefaultChannelFieldTemplateChannel_Fragment = { __typename?: 'DefaultChannelFieldTemplateChannel', id: string } & { ' $fragmentName'?: 'Node_DefaultChannelFieldTemplateChannel_Fragment' };

type Node_DefaultMarketFieldTemplateMarket_Fragment = { __typename?: 'DefaultMarketFieldTemplateMarket', id: string } & { ' $fragmentName'?: 'Node_DefaultMarketFieldTemplateMarket_Fragment' };

type Node_ErrorPage_Fragment = { __typename?: 'ErrorPage', id: string } & { ' $fragmentName'?: 'Node_ErrorPage_Fragment' };

type Node_ForgotPasswordPage_Fragment = { __typename?: 'ForgotPasswordPage', id: string } & { ' $fragmentName'?: 'Node_ForgotPasswordPage_Fragment' };

type Node_HomePage_Fragment = { __typename?: 'HomePage', id: string } & { ' $fragmentName'?: 'Node_HomePage_Fragment' };

type Node_LandingPage_Fragment = { __typename?: 'LandingPage', id: string } & { ' $fragmentName'?: 'Node_LandingPage_Fragment' };

type Node_LoginPage_Fragment = { __typename?: 'LoginPage', id: string } & { ' $fragmentName'?: 'Node_LoginPage_Fragment' };

type Node_MegaMenuPage_Fragment = { __typename?: 'MegaMenuPage', id: string } & { ' $fragmentName'?: 'Node_MegaMenuPage_Fragment' };

type Node_MyAccountAddressesPage_Fragment = { __typename?: 'MyAccountAddressesPage', id: string } & { ' $fragmentName'?: 'Node_MyAccountAddressesPage_Fragment' };

type Node_MyAccountDashboardPage_Fragment = { __typename?: 'MyAccountDashboardPage', id: string } & { ' $fragmentName'?: 'Node_MyAccountDashboardPage_Fragment' };

type Node_MyAccountLoginDetailsPage_Fragment = { __typename?: 'MyAccountLoginDetailsPage', id: string } & { ' $fragmentName'?: 'Node_MyAccountLoginDetailsPage_Fragment' };

type Node_MyAccountMyProfilePage_Fragment = { __typename?: 'MyAccountMyProfilePage', id: string } & { ' $fragmentName'?: 'Node_MyAccountMyProfilePage_Fragment' };

type Node_MyAccountOrderHistoryPage_Fragment = { __typename?: 'MyAccountOrderHistoryPage', id: string } & { ' $fragmentName'?: 'Node_MyAccountOrderHistoryPage_Fragment' };

type Node_MyAccountOrderPage_Fragment = { __typename?: 'MyAccountOrderPage', id: string } & { ' $fragmentName'?: 'Node_MyAccountOrderPage_Fragment' };

type Node_MyPagesPage_Fragment = { __typename?: 'MyPagesPage', id: string } & { ' $fragmentName'?: 'Node_MyPagesPage_Fragment' };

type Node_NewsListPage_Fragment = { __typename?: 'NewsListPage', id: string } & { ' $fragmentName'?: 'Node_NewsListPage_Fragment' };

type Node_NewsPage_Fragment = { __typename?: 'NewsPage', id: string } & { ' $fragmentName'?: 'Node_NewsPage_Fragment' };

type Node_Order_Fragment = { __typename?: 'Order', id: string } & { ' $fragmentName'?: 'Node_Order_Fragment' };

type Node_OrderConfirmationPage_Fragment = { __typename?: 'OrderConfirmationPage', id: string } & { ' $fragmentName'?: 'Node_OrderConfirmationPage_Fragment' };

type Node_OrderHistoryPage_Fragment = { __typename?: 'OrderHistoryPage', id: string } & { ' $fragmentName'?: 'Node_OrderHistoryPage_Fragment' };

type Node_OrderPage_Fragment = { __typename?: 'OrderPage', id: string } & { ' $fragmentName'?: 'Node_OrderPage_Fragment' };

type Node_OrganizationTemplateOrganization_Fragment = { __typename?: 'OrganizationTemplateOrganization', id: string } & { ' $fragmentName'?: 'Node_OrganizationTemplateOrganization_Fragment' };

type Node_PageNotFoundPage_Fragment = { __typename?: 'PageNotFoundPage', id: string } & { ' $fragmentName'?: 'Node_PageNotFoundPage_Fragment' };

type Node_ProductListPage_Fragment = { __typename?: 'ProductListPage', id: string } & { ' $fragmentName'?: 'Node_ProductListPage_Fragment' };

type Node_ProductWithOneVariantProduct_Fragment = { __typename?: 'ProductWithOneVariantProduct', id: string } & { ' $fragmentName'?: 'Node_ProductWithOneVariantProduct_Fragment' };

type Node_ProductWithVariantsFurnitureProduct_Fragment = { __typename?: 'ProductWithVariantsFurnitureProduct', id: string } & { ' $fragmentName'?: 'Node_ProductWithVariantsFurnitureProduct_Fragment' };

type Node_ProductWithVariantsListProduct_Fragment = { __typename?: 'ProductWithVariantsListProduct', id: string } & { ' $fragmentName'?: 'Node_ProductWithVariantsListProduct_Fragment' };

type Node_ProductWithVariantsProduct_Fragment = { __typename?: 'ProductWithVariantsProduct', id: string } & { ' $fragmentName'?: 'Node_ProductWithVariantsProduct_Fragment' };

type Node_RestrictedCategoryItem_Fragment = { __typename?: 'RestrictedCategoryItem', id: string } & { ' $fragmentName'?: 'Node_RestrictedCategoryItem_Fragment' };

type Node_RestrictedPageItem_Fragment = { __typename?: 'RestrictedPageItem', id: string } & { ' $fragmentName'?: 'Node_RestrictedPageItem_Fragment' };

type Node_RestrictedProductItem_Fragment = { __typename?: 'RestrictedProductItem', id: string } & { ' $fragmentName'?: 'Node_RestrictedProductItem_Fragment' };

type Node_Role_Fragment = { __typename?: 'Role', id: string } & { ' $fragmentName'?: 'Node_Role_Fragment' };

type Node_SearchResultPage_Fragment = { __typename?: 'SearchResultPage', id: string } & { ' $fragmentName'?: 'Node_SearchResultPage_Fragment' };

type Node_SiteSelectorPage_Fragment = { __typename?: 'SiteSelectorPage', id: string } & { ' $fragmentName'?: 'Node_SiteSelectorPage_Fragment' };

type Node_WelcomeEmailPage_Fragment = { __typename?: 'WelcomeEmailPage', id: string } & { ' $fragmentName'?: 'Node_WelcomeEmailPage_Fragment' };

type Node__systemPerson_Fragment = { __typename?: '_systemPerson', id: string } & { ' $fragmentName'?: 'Node__systemPerson_Fragment' };

export type NodeFragment = Node_AcceleratorWebsiteWebsite_Fragment | Node_ArticlePage_Fragment | Node_B2BPersonTemplatePerson_Fragment | Node_B2CPersonTemplatePerson_Fragment | Node_BrandListPage_Fragment | Node_BrandPage_Fragment | Node_CategoryProductCategory_Fragment | Node_CheckoutPage_Fragment | Node_CustomerAddressType_Fragment | Node_DefaultChannelFieldTemplateChannel_Fragment | Node_DefaultMarketFieldTemplateMarket_Fragment | Node_ErrorPage_Fragment | Node_ForgotPasswordPage_Fragment | Node_HomePage_Fragment | Node_LandingPage_Fragment | Node_LoginPage_Fragment | Node_MegaMenuPage_Fragment | Node_MyAccountAddressesPage_Fragment | Node_MyAccountDashboardPage_Fragment | Node_MyAccountLoginDetailsPage_Fragment | Node_MyAccountMyProfilePage_Fragment | Node_MyAccountOrderHistoryPage_Fragment | Node_MyAccountOrderPage_Fragment | Node_MyPagesPage_Fragment | Node_NewsListPage_Fragment | Node_NewsPage_Fragment | Node_Order_Fragment | Node_OrderConfirmationPage_Fragment | Node_OrderHistoryPage_Fragment | Node_OrderPage_Fragment | Node_OrganizationTemplateOrganization_Fragment | Node_PageNotFoundPage_Fragment | Node_ProductListPage_Fragment | Node_ProductWithOneVariantProduct_Fragment | Node_ProductWithVariantsFurnitureProduct_Fragment | Node_ProductWithVariantsListProduct_Fragment | Node_ProductWithVariantsProduct_Fragment | Node_RestrictedCategoryItem_Fragment | Node_RestrictedPageItem_Fragment | Node_RestrictedProductItem_Fragment | Node_Role_Fragment | Node_SearchResultPage_Fragment | Node_SiteSelectorPage_Fragment | Node_WelcomeEmailPage_Fragment | Node__systemPerson_Fragment;

type Content_ArticlePage_Fragment = { __typename?: 'ArticlePage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ArticlePage_Fragment' };

type Content_BrandListPage_Fragment = { __typename?: 'BrandListPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_BrandListPage_Fragment' };

type Content_BrandPage_Fragment = { __typename?: 'BrandPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_BrandPage_Fragment' };

type Content_CategoryProductCategory_Fragment = { __typename?: 'CategoryProductCategory', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_CategoryProductCategory_Fragment' };

type Content_CheckoutPage_Fragment = { __typename?: 'CheckoutPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_CheckoutPage_Fragment' };

type Content_ErrorPage_Fragment = { __typename?: 'ErrorPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ErrorPage_Fragment' };

type Content_ForgotPasswordPage_Fragment = { __typename?: 'ForgotPasswordPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ForgotPasswordPage_Fragment' };

type Content_HomePage_Fragment = { __typename?: 'HomePage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_HomePage_Fragment' };

type Content_LandingPage_Fragment = { __typename?: 'LandingPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_LandingPage_Fragment' };

type Content_LoginPage_Fragment = { __typename?: 'LoginPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_LoginPage_Fragment' };

type Content_MegaMenuPage_Fragment = { __typename?: 'MegaMenuPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MegaMenuPage_Fragment' };

type Content_MyAccountAddressesPage_Fragment = { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountAddressesPage_Fragment' };

type Content_MyAccountDashboardPage_Fragment = { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountDashboardPage_Fragment' };

type Content_MyAccountLoginDetailsPage_Fragment = { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountLoginDetailsPage_Fragment' };

type Content_MyAccountMyProfilePage_Fragment = { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountMyProfilePage_Fragment' };

type Content_MyAccountOrderHistoryPage_Fragment = { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountOrderHistoryPage_Fragment' };

type Content_MyAccountOrderPage_Fragment = { __typename?: 'MyAccountOrderPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyAccountOrderPage_Fragment' };

type Content_MyPagesPage_Fragment = { __typename?: 'MyPagesPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_MyPagesPage_Fragment' };

type Content_NewsListPage_Fragment = { __typename?: 'NewsListPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_NewsListPage_Fragment' };

type Content_NewsPage_Fragment = { __typename?: 'NewsPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_NewsPage_Fragment' };

type Content_OrderConfirmationPage_Fragment = { __typename?: 'OrderConfirmationPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_OrderConfirmationPage_Fragment' };

type Content_OrderHistoryPage_Fragment = { __typename?: 'OrderHistoryPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_OrderHistoryPage_Fragment' };

type Content_OrderPage_Fragment = { __typename?: 'OrderPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_OrderPage_Fragment' };

type Content_PageNotFoundPage_Fragment = { __typename?: 'PageNotFoundPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_PageNotFoundPage_Fragment' };

type Content_ProductListPage_Fragment = { __typename?: 'ProductListPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ProductListPage_Fragment' };

type Content_ProductWithOneVariantProduct_Fragment = { __typename?: 'ProductWithOneVariantProduct', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ProductWithOneVariantProduct_Fragment' };

type Content_ProductWithVariantsFurnitureProduct_Fragment = { __typename?: 'ProductWithVariantsFurnitureProduct', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ProductWithVariantsFurnitureProduct_Fragment' };

type Content_ProductWithVariantsListProduct_Fragment = { __typename?: 'ProductWithVariantsListProduct', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ProductWithVariantsListProduct_Fragment' };

type Content_ProductWithVariantsProduct_Fragment = { __typename?: 'ProductWithVariantsProduct', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_ProductWithVariantsProduct_Fragment' };

type Content_RestrictedCategoryItem_Fragment = { __typename?: 'RestrictedCategoryItem', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_RestrictedCategoryItem_Fragment' };

type Content_RestrictedPageItem_Fragment = { __typename?: 'RestrictedPageItem', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_RestrictedPageItem_Fragment' };

type Content_RestrictedProductItem_Fragment = { __typename?: 'RestrictedProductItem', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_RestrictedProductItem_Fragment' };

type Content_SearchResultPage_Fragment = { __typename?: 'SearchResultPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_SearchResultPage_Fragment' };

type Content_SiteSelectorPage_Fragment = { __typename?: 'SiteSelectorPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_SiteSelectorPage_Fragment' };

type Content_WelcomeEmailPage_Fragment = { __typename?: 'WelcomeEmailPage', id: string, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Content_WelcomeEmailPage_Fragment' };

export type ContentFragment = Content_ArticlePage_Fragment | Content_BrandListPage_Fragment | Content_BrandPage_Fragment | Content_CategoryProductCategory_Fragment | Content_CheckoutPage_Fragment | Content_ErrorPage_Fragment | Content_ForgotPasswordPage_Fragment | Content_HomePage_Fragment | Content_LandingPage_Fragment | Content_LoginPage_Fragment | Content_MegaMenuPage_Fragment | Content_MyAccountAddressesPage_Fragment | Content_MyAccountDashboardPage_Fragment | Content_MyAccountLoginDetailsPage_Fragment | Content_MyAccountMyProfilePage_Fragment | Content_MyAccountOrderHistoryPage_Fragment | Content_MyAccountOrderPage_Fragment | Content_MyPagesPage_Fragment | Content_NewsListPage_Fragment | Content_NewsPage_Fragment | Content_OrderConfirmationPage_Fragment | Content_OrderHistoryPage_Fragment | Content_OrderPage_Fragment | Content_PageNotFoundPage_Fragment | Content_ProductListPage_Fragment | Content_ProductWithOneVariantProduct_Fragment | Content_ProductWithVariantsFurnitureProduct_Fragment | Content_ProductWithVariantsListProduct_Fragment | Content_ProductWithVariantsProduct_Fragment | Content_RestrictedCategoryItem_Fragment | Content_RestrictedPageItem_Fragment | Content_RestrictedProductItem_Fragment | Content_SearchResultPage_Fragment | Content_SiteSelectorPage_Fragment | Content_WelcomeEmailPage_Fragment;

export type PageInfoFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } & { ' $fragmentName'?: 'PageInfoFragment' };

export type ImageFragment = { __typename: 'PointerMediaImageItem', item?: { __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: (
      { __typename?: 'Size' }
      & { ' $fragmentRefs'?: { 'SizeFragment': SizeFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'ImageFragment' };

export type SizeFragment = { __typename: 'Size', height: number, width: number } & { ' $fragmentName'?: 'SizeFragment' };

export type VideoFragment = { __typename: 'PointerMediaVideoItem', item?: (
    { __typename?: 'File' }
    & { ' $fragmentRefs'?: { 'FileItemFragment': FileItemFragment } }
  ) | null } & { ' $fragmentName'?: 'VideoFragment' };

export type FileItemFragment = { __typename: 'File', url: string, filename: string, alt?: string | null } & { ' $fragmentName'?: 'FileItemFragment' };

export type TextOptionFragment = { __typename: 'TextOptionDefinition', value: string, name?: string | null } & { ' $fragmentName'?: 'TextOptionFragment' };

export type IntOptionFragment = { __typename: 'IntOptionDefinition', value: number, name?: string | null } & { ' $fragmentName'?: 'IntOptionFragment' };

export type LinkFragment = { __typename: 'LinkFieldDefinition', url: string, text: string } & { ' $fragmentName'?: 'LinkFragment' };

export type BannerItemBlockFieldDefinitionFragment = { __typename?: 'BannerItemBlockFieldDefinition', richText?: string | null, imageAltText?: string | null, isFullWidthImage?: boolean | null, cssClass?: string | null, blockHeight?: number | null, backgroundColorOverlay?: string | null, backgroundColorOverlayOpacity?: any | null, backgroundLink?: (
    { __typename?: 'LinkFieldDefinition' }
    & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
  ) | null, loading?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, buttonLink?: (
    { __typename?: 'LinkFieldDefinition' }
    & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
  ) | null, buttonType?: Array<(
    { __typename?: 'TextOptionDefinition' }
    & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
  )> | null, image?: (
    { __typename?: 'PointerMediaImageItem' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null, imageMobile?: (
    { __typename?: 'PointerMediaImageItem' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null } & { ' $fragmentName'?: 'BannerItemBlockFieldDefinitionFragment' };

export type ContentImageFragment = { __typename: 'ContentImageBlockFieldDefinition', imageAltText?: string | null, imageHeight?: string | null, imageWidth?: string | null, cssClass?: string | null, isFullWidthImage?: boolean | null, imageMobileHeight?: string | null, imageMobileWidth?: string | null, image?: (
    { __typename?: 'PointerMediaImageItem' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null, imageMobile?: (
    { __typename?: 'PointerMediaImageItem' }
    & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
  ) | null } & { ' $fragmentName'?: 'ContentImageFragment' };

type Page_ArticlePage_Fragment = { __typename?: 'ArticlePage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_ArticlePage_Fragment' };

type Page_BrandListPage_Fragment = { __typename?: 'BrandListPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_BrandListPage_Fragment' };

type Page_BrandPage_Fragment = { __typename?: 'BrandPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_BrandPage_Fragment' };

type Page_CheckoutPage_Fragment = { __typename?: 'CheckoutPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_CheckoutPage_Fragment' };

type Page_ErrorPage_Fragment = { __typename?: 'ErrorPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_ErrorPage_Fragment' };

type Page_ForgotPasswordPage_Fragment = { __typename?: 'ForgotPasswordPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_ForgotPasswordPage_Fragment' };

type Page_HomePage_Fragment = { __typename?: 'HomePage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_HomePage_Fragment' };

type Page_LandingPage_Fragment = { __typename?: 'LandingPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_LandingPage_Fragment' };

type Page_LoginPage_Fragment = { __typename?: 'LoginPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_LoginPage_Fragment' };

type Page_MegaMenuPage_Fragment = { __typename?: 'MegaMenuPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MegaMenuPage_Fragment' };

type Page_MyAccountAddressesPage_Fragment = { __typename?: 'MyAccountAddressesPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountAddressesPage_Fragment' };

type Page_MyAccountDashboardPage_Fragment = { __typename?: 'MyAccountDashboardPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountDashboardPage_Fragment' };

type Page_MyAccountLoginDetailsPage_Fragment = { __typename?: 'MyAccountLoginDetailsPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountLoginDetailsPage_Fragment' };

type Page_MyAccountMyProfilePage_Fragment = { __typename?: 'MyAccountMyProfilePage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountMyProfilePage_Fragment' };

type Page_MyAccountOrderHistoryPage_Fragment = { __typename?: 'MyAccountOrderHistoryPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountOrderHistoryPage_Fragment' };

type Page_MyAccountOrderPage_Fragment = { __typename?: 'MyAccountOrderPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyAccountOrderPage_Fragment' };

type Page_MyPagesPage_Fragment = { __typename?: 'MyPagesPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_MyPagesPage_Fragment' };

type Page_NewsListPage_Fragment = { __typename?: 'NewsListPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_NewsListPage_Fragment' };

type Page_NewsPage_Fragment = { __typename?: 'NewsPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_NewsPage_Fragment' };

type Page_OrderConfirmationPage_Fragment = { __typename?: 'OrderConfirmationPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_OrderConfirmationPage_Fragment' };

type Page_OrderHistoryPage_Fragment = { __typename?: 'OrderHistoryPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_OrderHistoryPage_Fragment' };

type Page_OrderPage_Fragment = { __typename?: 'OrderPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_OrderPage_Fragment' };

type Page_PageNotFoundPage_Fragment = { __typename?: 'PageNotFoundPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_PageNotFoundPage_Fragment' };

type Page_ProductListPage_Fragment = { __typename?: 'ProductListPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_ProductListPage_Fragment' };

type Page_RestrictedPageItem_Fragment = { __typename?: 'RestrictedPageItem', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_RestrictedPageItem_Fragment' };

type Page_SearchResultPage_Fragment = { __typename?: 'SearchResultPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_SearchResultPage_Fragment' };

type Page_SiteSelectorPage_Fragment = { __typename?: 'SiteSelectorPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_SiteSelectorPage_Fragment' };

type Page_WelcomeEmailPage_Fragment = { __typename?: 'WelcomeEmailPage', id: string, name?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ) } & { ' $fragmentName'?: 'Page_WelcomeEmailPage_Fragment' };

export type PageFragment = Page_ArticlePage_Fragment | Page_BrandListPage_Fragment | Page_BrandPage_Fragment | Page_CheckoutPage_Fragment | Page_ErrorPage_Fragment | Page_ForgotPasswordPage_Fragment | Page_HomePage_Fragment | Page_LandingPage_Fragment | Page_LoginPage_Fragment | Page_MegaMenuPage_Fragment | Page_MyAccountAddressesPage_Fragment | Page_MyAccountDashboardPage_Fragment | Page_MyAccountLoginDetailsPage_Fragment | Page_MyAccountMyProfilePage_Fragment | Page_MyAccountOrderHistoryPage_Fragment | Page_MyAccountOrderPage_Fragment | Page_MyPagesPage_Fragment | Page_NewsListPage_Fragment | Page_NewsPage_Fragment | Page_OrderConfirmationPage_Fragment | Page_OrderHistoryPage_Fragment | Page_OrderPage_Fragment | Page_PageNotFoundPage_Fragment | Page_ProductListPage_Fragment | Page_RestrictedPageItem_Fragment | Page_SearchResultPage_Fragment | Page_SiteSelectorPage_Fragment | Page_WelcomeEmailPage_Fragment;

export type ArticlePageFragment = (
  { __typename?: 'ArticlePage', templateName?: string | null, fields: { __typename?: 'ArticlePageFieldContainer', _name?: string | null, title?: string | null, introduction?: string | null } }
  & { ' $fragmentRefs'?: { 'Page_ArticlePage_Fragment': Page_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'ArticlePageFragment' };

export type ProductListPageFragment = (
  { __typename?: 'ProductListPage', templateName?: string | null, fields: { __typename?: 'ProductListPageFieldContainer', _name?: string | null } }
  & { ' $fragmentRefs'?: { 'Page_ProductListPage_Fragment': Page_ProductListPage_Fragment } }
) & { ' $fragmentName'?: 'ProductListPageFragment' };

export type HomePageFragment = (
  { __typename?: 'HomePage', templateName?: string | null, fields: { __typename?: 'HomePageFieldContainer', _name?: string | null } }
  & { ' $fragmentRefs'?: { 'Page_HomePage_Fragment': Page_HomePage_Fragment } }
) & { ' $fragmentName'?: 'HomePageFragment' };

type Product_ProductWithOneVariantProduct_Fragment = { __typename?: 'ProductWithOneVariantProduct', id: string, articleNumber: string, name?: string | null, isVariant: boolean, description?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any, description?: string | null }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any, discountPriceIncludingVat?: any | null, discountPriceExcludingVat?: any | null, vatRate: any, currency: (
      { __typename?: 'Currency' }
      & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
    ) } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }>, unitOfMeasurement?: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) | null } & { ' $fragmentName'?: 'Product_ProductWithOneVariantProduct_Fragment' };

type Product_ProductWithVariantsFurnitureProduct_Fragment = { __typename?: 'ProductWithVariantsFurnitureProduct', id: string, articleNumber: string, name?: string | null, isVariant: boolean, description?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any, description?: string | null }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any, discountPriceIncludingVat?: any | null, discountPriceExcludingVat?: any | null, vatRate: any, currency: (
      { __typename?: 'Currency' }
      & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
    ) } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }>, unitOfMeasurement?: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) | null } & { ' $fragmentName'?: 'Product_ProductWithVariantsFurnitureProduct_Fragment' };

type Product_ProductWithVariantsListProduct_Fragment = { __typename?: 'ProductWithVariantsListProduct', id: string, articleNumber: string, name?: string | null, isVariant: boolean, description?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any, description?: string | null }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any, discountPriceIncludingVat?: any | null, discountPriceExcludingVat?: any | null, vatRate: any, currency: (
      { __typename?: 'Currency' }
      & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
    ) } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }>, unitOfMeasurement?: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) | null } & { ' $fragmentName'?: 'Product_ProductWithVariantsListProduct_Fragment' };

type Product_ProductWithVariantsProduct_Fragment = { __typename?: 'ProductWithVariantsProduct', id: string, articleNumber: string, name?: string | null, isVariant: boolean, description?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any, description?: string | null }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any, discountPriceIncludingVat?: any | null, discountPriceExcludingVat?: any | null, vatRate: any, currency: (
      { __typename?: 'Currency' }
      & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
    ) } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }>, unitOfMeasurement?: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) | null } & { ' $fragmentName'?: 'Product_ProductWithVariantsProduct_Fragment' };

type Product_RestrictedProductItem_Fragment = { __typename?: 'RestrictedProductItem', id: string, articleNumber: string, name?: string | null, isVariant: boolean, description?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any, description?: string | null }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any, discountPriceIncludingVat?: any | null, discountPriceExcludingVat?: any | null, vatRate: any, currency: (
      { __typename?: 'Currency' }
      & { ' $fragmentRefs'?: { 'CurrencyFragment': CurrencyFragment } }
    ) } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }>, unitOfMeasurement: (
    { __typename?: 'UnitOfMeasurement' }
    & { ' $fragmentRefs'?: { 'UnitOfMeasurementFragment': UnitOfMeasurementFragment } }
  ) } & { ' $fragmentName'?: 'Product_RestrictedProductItem_Fragment' };

export type ProductFragment = Product_ProductWithOneVariantProduct_Fragment | Product_ProductWithVariantsFurnitureProduct_Fragment | Product_ProductWithVariantsListProduct_Fragment | Product_ProductWithVariantsProduct_Fragment | Product_RestrictedProductItem_Fragment;

export type ProductWithVariantsFragment = (
  { __typename?: 'ProductWithVariantsProduct', templateName?: string | null, url?: string | null, metadata: (
    { __typename?: 'Metadata' }
    & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
  ), baseProduct: { __typename?: 'ProductWithVariantsProduct', id: string, articleNumber: string, name?: string | null }, variants?: { __typename?: 'ProductWithVariantsProductVariantConnection', nodes?: Array<{ __typename?: 'ProductWithVariantsProduct', id: string, articleNumber: string, name?: string | null, stockStatus: { __typename?: 'StockStatus', inStockQuantity: any }, price?: { __typename?: 'ProductPrice', unitPriceIncludingVat: any, unitPriceExcludingVat: any } | null, images: Array<{ __typename?: 'Image', url: string, alt?: string | null, filename: string, dimension?: { __typename?: 'Size', width: number, height: number } | null }> }> | null, pageInfo: (
      { __typename?: 'PageInfo' }
      & { ' $fragmentRefs'?: { 'PageInfoFragment': PageInfoFragment } }
    ) } | null, fields: { __typename?: 'ProductWithVariantsProductFieldContainer', _name?: string | null, _description?: string | null, brand?: Array<{ __typename?: 'TextOptionDefinition', name?: string | null, value: string }> | null } }
  & { ' $fragmentRefs'?: { 'Product_ProductWithVariantsProduct_Fragment': Product_ProductWithVariantsProduct_Fragment } }
) & { ' $fragmentName'?: 'ProductWithVariantsFragment' };

export type WebsiteFragment = { __typename?: 'AcceleratorWebsiteWebsite', id: string, texts?: Array<(
    { __typename?: 'WebsiteText' }
    & { ' $fragmentRefs'?: { 'WebsiteTextFragment': WebsiteTextFragment } }
  )> | null } & { ' $fragmentName'?: 'WebsiteFragment' };

export type AcceleratorWebsiteFragment = (
  { __typename?: 'AcceleratorWebsiteWebsite', fields: { __typename?: 'AcceleratorWebsiteWebsiteFieldContainer', _name?: string | null, footerHeader?: string | null, megaMenuColumnHeader?: string | null } }
  & { ' $fragmentRefs'?: { 'WebsiteFragment': WebsiteFragment } }
) & { ' $fragmentName'?: 'AcceleratorWebsiteFragment' };

export type WebsiteTextFragment = { __typename?: 'WebsiteText', key: string, value?: string | null } & { ' $fragmentName'?: 'WebsiteTextFragment' };

export type PointerPageFragment = { __typename?: 'PointerPageItem', id: string, item?: (
    { __typename?: 'ArticlePage' }
    & { ' $fragmentRefs'?: { 'Page_ArticlePage_Fragment': Page_ArticlePage_Fragment } }
  ) | (
    { __typename?: 'BrandListPage' }
    & { ' $fragmentRefs'?: { 'Page_BrandListPage_Fragment': Page_BrandListPage_Fragment } }
  ) | (
    { __typename?: 'BrandPage' }
    & { ' $fragmentRefs'?: { 'Page_BrandPage_Fragment': Page_BrandPage_Fragment } }
  ) | (
    { __typename?: 'CheckoutPage' }
    & { ' $fragmentRefs'?: { 'Page_CheckoutPage_Fragment': Page_CheckoutPage_Fragment } }
  ) | (
    { __typename?: 'ErrorPage' }
    & { ' $fragmentRefs'?: { 'Page_ErrorPage_Fragment': Page_ErrorPage_Fragment } }
  ) | (
    { __typename?: 'ForgotPasswordPage' }
    & { ' $fragmentRefs'?: { 'Page_ForgotPasswordPage_Fragment': Page_ForgotPasswordPage_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'Page_HomePage_Fragment': Page_HomePage_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'Page_LandingPage_Fragment': Page_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LoginPage' }
    & { ' $fragmentRefs'?: { 'Page_LoginPage_Fragment': Page_LoginPage_Fragment } }
  ) | (
    { __typename?: 'MegaMenuPage' }
    & { ' $fragmentRefs'?: { 'Page_MegaMenuPage_Fragment': Page_MegaMenuPage_Fragment } }
  ) | (
    { __typename?: 'MyAccountAddressesPage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountAddressesPage_Fragment': Page_MyAccountAddressesPage_Fragment } }
  ) | (
    { __typename?: 'MyAccountDashboardPage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountDashboardPage_Fragment': Page_MyAccountDashboardPage_Fragment } }
  ) | (
    { __typename?: 'MyAccountLoginDetailsPage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountLoginDetailsPage_Fragment': Page_MyAccountLoginDetailsPage_Fragment } }
  ) | (
    { __typename?: 'MyAccountMyProfilePage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountMyProfilePage_Fragment': Page_MyAccountMyProfilePage_Fragment } }
  ) | (
    { __typename?: 'MyAccountOrderHistoryPage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountOrderHistoryPage_Fragment': Page_MyAccountOrderHistoryPage_Fragment } }
  ) | (
    { __typename?: 'MyAccountOrderPage' }
    & { ' $fragmentRefs'?: { 'Page_MyAccountOrderPage_Fragment': Page_MyAccountOrderPage_Fragment } }
  ) | (
    { __typename?: 'MyPagesPage' }
    & { ' $fragmentRefs'?: { 'Page_MyPagesPage_Fragment': Page_MyPagesPage_Fragment } }
  ) | (
    { __typename?: 'NewsListPage' }
    & { ' $fragmentRefs'?: { 'Page_NewsListPage_Fragment': Page_NewsListPage_Fragment } }
  ) | (
    { __typename?: 'NewsPage' }
    & { ' $fragmentRefs'?: { 'Page_NewsPage_Fragment': Page_NewsPage_Fragment } }
  ) | (
    { __typename?: 'OrderConfirmationPage' }
    & { ' $fragmentRefs'?: { 'Page_OrderConfirmationPage_Fragment': Page_OrderConfirmationPage_Fragment } }
  ) | (
    { __typename?: 'OrderHistoryPage' }
    & { ' $fragmentRefs'?: { 'Page_OrderHistoryPage_Fragment': Page_OrderHistoryPage_Fragment } }
  ) | (
    { __typename?: 'OrderPage' }
    & { ' $fragmentRefs'?: { 'Page_OrderPage_Fragment': Page_OrderPage_Fragment } }
  ) | (
    { __typename?: 'PageNotFoundPage' }
    & { ' $fragmentRefs'?: { 'Page_PageNotFoundPage_Fragment': Page_PageNotFoundPage_Fragment } }
  ) | (
    { __typename?: 'ProductListPage' }
    & { ' $fragmentRefs'?: { 'Page_ProductListPage_Fragment': Page_ProductListPage_Fragment } }
  ) | (
    { __typename?: 'RestrictedPageItem' }
    & { ' $fragmentRefs'?: { 'Page_RestrictedPageItem_Fragment': Page_RestrictedPageItem_Fragment } }
  ) | (
    { __typename?: 'SearchResultPage' }
    & { ' $fragmentRefs'?: { 'Page_SearchResultPage_Fragment': Page_SearchResultPage_Fragment } }
  ) | (
    { __typename?: 'SiteSelectorPage' }
    & { ' $fragmentRefs'?: { 'Page_SiteSelectorPage_Fragment': Page_SiteSelectorPage_Fragment } }
  ) | (
    { __typename?: 'WelcomeEmailPage' }
    & { ' $fragmentRefs'?: { 'Page_WelcomeEmailPage_Fragment': Page_WelcomeEmailPage_Fragment } }
  ) | null } & { ' $fragmentName'?: 'PointerPageFragment' };

export type PointerProductFieldFragment = { __typename?: 'PointerProductFieldItem', fieldType?: string | null, field: string } & { ' $fragmentName'?: 'PointerProductFieldFragment' };

export type FooterWebsiteFieldFragment = { __typename?: 'FooterWebsiteFieldDefinition', title?: string | null, footerText?: string | null } & { ' $fragmentName'?: 'FooterWebsiteFieldFragment' };

export type GetContentByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetContentByPathQuery = { __typename?: 'StorefrontQuery', pageSearch?: { __typename?: 'PageSearchConnection', nodes?: Array<{ __typename: 'ArticlePage', id: string, url?: string | null, name?: string | null, metadata: (
        { __typename?: 'Metadata' }
        & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
      ), fields: { __typename: 'ArticlePageFieldContainer', _name?: string | null }, blocks: { __typename?: 'ArticlePageBlockContainer', top: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null>, content: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null> } } | { __typename: 'BrandListPage' } | { __typename: 'BrandPage' } | { __typename: 'CheckoutPage' } | { __typename: 'ErrorPage' } | { __typename: 'ForgotPasswordPage' } | { __typename: 'HomePage', id: string, url?: string | null, name?: string | null, metadata: (
        { __typename?: 'Metadata' }
        & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
      ), fields: { __typename: 'HomePageFieldContainer', _name?: string | null }, blocks: { __typename?: 'HomePageBlockContainer', main: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | { __typename?: 'RowBlock' } | { __typename?: 'SecondaryNavigationLinkBlock' } | (
          { __typename?: 'SectionBlock' }
          & { ' $fragmentRefs'?: { 'SectionBlockFragment': SectionBlockFragment } }
        ) | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> } } | { __typename: 'LandingPage' } | { __typename: 'LoginPage', id: string, url?: string | null, name?: string | null, metadata: (
        { __typename?: 'Metadata' }
        & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
      ), fields: { __typename: 'LoginPageFieldContainer', _name?: string | null } } | { __typename: 'MegaMenuPage' } | { __typename: 'MyAccountAddressesPage' } | { __typename: 'MyAccountDashboardPage' } | { __typename: 'MyAccountLoginDetailsPage' } | { __typename: 'MyAccountMyProfilePage' } | { __typename: 'MyAccountOrderHistoryPage' } | { __typename: 'MyAccountOrderPage' } | { __typename: 'MyPagesPage' } | { __typename: 'NewsListPage' } | { __typename: 'NewsPage' } | { __typename: 'OrderConfirmationPage' } | { __typename: 'OrderHistoryPage' } | { __typename: 'OrderPage' } | { __typename: 'PageNotFoundPage' } | { __typename: 'ProductListPage' } | { __typename: 'RestrictedPageItem' } | { __typename: 'SearchResultPage' } | { __typename: 'SiteSelectorPage' } | { __typename: 'WelcomeEmailPage' }> | null } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'StorefrontQuery', content: { __typename?: 'ArticlePage' } | { __typename?: 'AuthorizationError' } | { __typename?: 'BrandListPage' } | { __typename?: 'BrandPage' } | { __typename?: 'CategoryProductCategory' } | { __typename?: 'CheckoutPage' } | { __typename?: 'ErrorPage' } | { __typename?: 'ForbiddenError' } | { __typename?: 'ForgotPasswordPage' } | { __typename?: 'GlobalBlockPreview' } | { __typename: 'HomePage', id: string, url?: string | null, name?: string | null, metadata: (
      { __typename?: 'Metadata' }
      & { ' $fragmentRefs'?: { 'MetadataFragment': MetadataFragment } }
    ), fields: { __typename: 'HomePageFieldContainer', _name?: string | null }, blocks: { __typename?: 'HomePageBlockContainer', main: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | { __typename?: 'RowBlock' } | { __typename?: 'SecondaryNavigationLinkBlock' } | (
        { __typename?: 'SectionBlock' }
        & { ' $fragmentRefs'?: { 'SectionBlockFragment': SectionBlockFragment } }
      ) | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> } } | { __typename?: 'LandingPage' } | { __typename?: 'LoginPage' } | { __typename?: 'MegaMenuPage' } | { __typename?: 'MyAccountAddressesPage' } | { __typename?: 'MyAccountDashboardPage' } | { __typename?: 'MyAccountLoginDetailsPage' } | { __typename?: 'MyAccountMyProfilePage' } | { __typename?: 'MyAccountOrderHistoryPage' } | { __typename?: 'MyAccountOrderPage' } | { __typename?: 'MyPagesPage' } | { __typename?: 'NewsListPage' } | { __typename?: 'NewsPage' } | { __typename?: 'NotFoundError' } | { __typename?: 'OrderConfirmationPage' } | { __typename?: 'OrderHistoryPage' } | { __typename?: 'OrderPage' } | { __typename?: 'PageNotFoundPage' } | { __typename?: 'ProductListPage' } | { __typename?: 'ProductWithOneVariantProduct' } | { __typename?: 'ProductWithVariantsFurnitureProduct' } | { __typename?: 'ProductWithVariantsListProduct' } | { __typename?: 'ProductWithVariantsProduct' } | { __typename?: 'Redirect' } | { __typename?: 'RestrictedCategoryItem' } | { __typename?: 'RestrictedPageItem' } | { __typename?: 'RestrictedProductItem' } | { __typename?: 'SearchResultPage' } | { __typename?: 'SiteSelectorPage' } | { __typename?: 'WelcomeEmailPage' } };

export type GetPageByUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type GetPageByUrlQuery = { __typename?: 'StorefrontQuery', pageSearch?: { __typename?: 'PageSearchConnection', nodes?: Array<{ __typename?: 'ArticlePage', id: string, name?: string | null, url?: string | null } | { __typename?: 'BrandListPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'BrandPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'CheckoutPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'ErrorPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'HomePage', id: string, name?: string | null, url?: string | null } | { __typename?: 'LandingPage', id: string, name?: string | null, url?: string | null, fields: { __typename?: 'LandingPageFieldContainer', _name?: string | null, _url?: string | null } } | { __typename?: 'LoginPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'MyPagesPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'NewsListPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'NewsPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'OrderPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'ProductListPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, name?: string | null, url?: string | null } | { __typename?: 'SearchResultPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, name?: string | null, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, name?: string | null, url?: string | null }> | null } | null };

export type GetProductsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsQuery = { __typename?: 'StorefrontQuery', productSearch?: { __typename?: 'ProductSearchConnection', totalCount: number, nodes?: Array<{ __typename?: 'ProductWithOneVariantProduct' } | { __typename?: 'ProductWithVariantsFurnitureProduct' } | { __typename?: 'ProductWithVariantsListProduct' } | (
      { __typename?: 'ProductWithVariantsProduct' }
      & { ' $fragmentRefs'?: { 'ProductWithVariantsFragment': ProductWithVariantsFragment } }
    ) | { __typename?: 'RestrictedProductItem' }> | null, pageInfo: (
      { __typename?: 'PageInfo' }
      & { ' $fragmentRefs'?: { 'PageInfoFragment': PageInfoFragment } }
    ) } | null };

export type GetProductQueryVariables = Exact<{
  articleNumber?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductQuery = { __typename?: 'StorefrontQuery', productSearch?: { __typename?: 'ProductSearchConnection', nodes?: Array<{ __typename?: 'ProductWithOneVariantProduct' } | { __typename?: 'ProductWithVariantsFurnitureProduct' } | { __typename?: 'ProductWithVariantsListProduct' } | (
      { __typename?: 'ProductWithVariantsProduct' }
      & { ' $fragmentRefs'?: { 'ProductWithVariantsFragment': ProductWithVariantsFragment } }
    ) | { __typename?: 'RestrictedProductItem' }> | null } | null };

export type GetWebsiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWebsiteQuery = { __typename?: 'StorefrontQuery', channel?: { __typename?: 'DefaultChannelFieldTemplateChannel', id: string, url?: string | null, culture?: { __typename?: 'Culture', code: string } | null, analytics: { __typename?: 'ChannelAnalysisSetting', googleTagManager?: string | null }, website?: { __typename?: 'AcceleratorWebsiteWebsite', id: string, texts?: Array<{ __typename?: 'WebsiteText', key: string, value?: string | null }> | null, fields: { __typename?: 'AcceleratorWebsiteWebsiteFieldContainer', companyAddress?: Array<{ __typename?: 'CompanyAddressWebsiteFieldDefinition', phoneNumber?: string | null }> | null, logotypeMain?: (
          { __typename?: 'PointerMediaImageItem' }
          & { ' $fragmentRefs'?: { 'ImageFragment': ImageFragment } }
        ) | null, loginPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, myPagesPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, pageNotFound?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, generalError?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', url?: string | null, id: string } | { __typename?: 'BrandListPage', url?: string | null, id: string } | { __typename?: 'BrandPage', url?: string | null, id: string } | { __typename?: 'CheckoutPage', url?: string | null, id: string } | { __typename?: 'ErrorPage', url?: string | null, id: string } | { __typename?: 'ForgotPasswordPage', url?: string | null, id: string } | { __typename?: 'HomePage', url?: string | null, id: string } | { __typename?: 'LandingPage', url?: string | null, id: string } | { __typename?: 'LoginPage', url?: string | null, id: string } | { __typename?: 'MegaMenuPage', url?: string | null, id: string } | { __typename?: 'MyAccountAddressesPage', url?: string | null, id: string } | { __typename?: 'MyAccountDashboardPage', url?: string | null, id: string } | { __typename?: 'MyAccountLoginDetailsPage', url?: string | null, id: string } | { __typename?: 'MyAccountMyProfilePage', url?: string | null, id: string } | { __typename?: 'MyAccountOrderHistoryPage', url?: string | null, id: string } | { __typename?: 'MyAccountOrderPage', url?: string | null, id: string } | { __typename?: 'MyPagesPage', url?: string | null, id: string } | { __typename?: 'NewsListPage', url?: string | null, id: string } | { __typename?: 'NewsPage', url?: string | null, id: string } | { __typename?: 'OrderConfirmationPage', url?: string | null, id: string } | { __typename?: 'OrderHistoryPage', url?: string | null, id: string } | { __typename?: 'OrderPage', url?: string | null, id: string } | { __typename?: 'PageNotFoundPage', url?: string | null, id: string } | { __typename?: 'ProductListPage', url?: string | null, id: string } | { __typename?: 'RestrictedPageItem', url?: string | null, id: string } | { __typename?: 'SearchResultPage', url?: string | null, id: string } | { __typename?: 'SiteSelectorPage', url?: string | null, id: string } | { __typename?: 'WelcomeEmailPage', url?: string | null, id: string } | null }> | null, searchResultPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, checkoutPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, orderConfirmationPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, orderPage?: Array<{ __typename?: 'PointerPageItem', item?: { __typename?: 'ArticlePage', id: string, url?: string | null } | { __typename?: 'BrandListPage', id: string, url?: string | null } | { __typename?: 'BrandPage', id: string, url?: string | null } | { __typename?: 'CheckoutPage', id: string, url?: string | null } | { __typename?: 'ErrorPage', id: string, url?: string | null } | { __typename?: 'ForgotPasswordPage', id: string, url?: string | null } | { __typename?: 'HomePage', id: string, url?: string | null } | { __typename?: 'LandingPage', id: string, url?: string | null } | { __typename?: 'LoginPage', id: string, url?: string | null } | { __typename?: 'MegaMenuPage', id: string, url?: string | null } | { __typename?: 'MyAccountAddressesPage', id: string, url?: string | null } | { __typename?: 'MyAccountDashboardPage', id: string, url?: string | null } | { __typename?: 'MyAccountLoginDetailsPage', id: string, url?: string | null } | { __typename?: 'MyAccountMyProfilePage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderHistoryPage', id: string, url?: string | null } | { __typename?: 'MyAccountOrderPage', id: string, url?: string | null } | { __typename?: 'MyPagesPage', id: string, url?: string | null } | { __typename?: 'NewsListPage', id: string, url?: string | null } | { __typename?: 'NewsPage', id: string, url?: string | null } | { __typename?: 'OrderConfirmationPage', id: string, url?: string | null } | { __typename?: 'OrderHistoryPage', id: string, url?: string | null } | { __typename?: 'OrderPage', id: string, url?: string | null } | { __typename?: 'PageNotFoundPage', id: string, url?: string | null } | { __typename?: 'ProductListPage', id: string, url?: string | null } | { __typename?: 'RestrictedPageItem', id: string, url?: string | null } | { __typename?: 'SearchResultPage', id: string, url?: string | null } | { __typename?: 'SiteSelectorPage', id: string, url?: string | null } | { __typename?: 'WelcomeEmailPage', id: string, url?: string | null } | null }> | null, productFilterFields?: Array<{ __typename?: 'PointerProductFieldItem', field: string }> | null }, blocks: { __typename?: 'AcceleratorWebsiteWebsiteBlockContainer', footer: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | (
          { __typename: 'FooterContainerBlock' }
          & { ' $fragmentRefs'?: { 'FooterContainerBlockFragment': FooterContainerBlockFragment } }
        ) | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null>, mainMenu: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock', templateName?: string | null, fields: { __typename?: 'NavigationContainerBlockFieldContainer', layoutDesktop?: Array<(
              { __typename?: 'TextOptionDefinition' }
              & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
            )> | null, layoutMobile?: Array<(
              { __typename?: 'TextOptionDefinition' }
              & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
            )> | null, layoutTablet?: Array<(
              { __typename?: 'TextOptionDefinition' }
              & { ' $fragmentRefs'?: { 'TextOptionFragment': TextOptionFragment } }
            )> | null }, children?: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock', fields: { __typename?: 'NavigationItemBlockFieldContainer', _name?: string | null, navigationLink?: (
                { __typename?: 'LinkFieldDefinition' }
                & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
              ) | null, bannerItem?: Array<(
                { __typename?: 'BannerItemBlockFieldDefinition' }
                & { ' $fragmentRefs'?: { 'BannerItemBlockFieldDefinitionFragment': BannerItemBlockFieldDefinitionFragment } }
              )> | null }, children?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock', fields: { __typename?: 'NavigationItemBlockFieldContainer', _name?: string | null, navigationLink?: (
                  { __typename?: 'LinkFieldDefinition' }
                  & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
                ) | null, bannerItem?: Array<(
                  { __typename?: 'BannerItemBlockFieldDefinition' }
                  & { ' $fragmentRefs'?: { 'BannerItemBlockFieldDefinitionFragment': BannerItemBlockFieldDefinitionFragment } }
                )> | null }, children?: Array<{ __typename: 'BannerBlock' } | (
                { __typename: 'BannerItemBlock' }
                & { ' $fragmentRefs'?: { 'BannerItemBlockFragment': BannerItemBlockFragment } }
              ) | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock', fields: { __typename?: 'NavigationItemBlockFieldContainer', _name?: string | null, navigationLink?: (
                    { __typename?: 'LinkFieldDefinition' }
                    & { ' $fragmentRefs'?: { 'LinkFragment': LinkFragment } }
                  ) | null, bannerItem?: Array<(
                    { __typename?: 'BannerItemBlockFieldDefinition' }
                    & { ' $fragmentRefs'?: { 'BannerItemBlockFieldDefinitionFragment': BannerItemBlockFieldDefinitionFragment } }
                  )> | null } } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null> | null } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | { __typename?: 'RowBlock' } | { __typename?: 'SecondaryNavigationLinkBlock' } | { __typename?: 'SectionBlock' } | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> | null } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null> | null } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock' } | { __typename: 'VideoBlock' } | null>, topHeader: Array<{ __typename: 'BannerBlock' } | { __typename: 'BannerItemBlock' } | { __typename: 'BrandBlock' } | { __typename: 'ButtonBlock' } | { __typename: 'ColumnBlock' } | { __typename: 'FAQBlock' } | { __typename: 'FooterColumnBlock' } | { __typename: 'FooterContainerBlock' } | { __typename: 'FooterLinksBlock' } | { __typename: 'HaColumnBlock' } | { __typename: 'HaRowBlock' } | { __typename: 'HeaderUserInfoBlock' } | { __typename: 'ImageItemBlock' } | { __typename: 'ImageListBlock' } | { __typename: 'ImageTextBlocksBlock' } | { __typename: 'ImageTextItemBlock' } | { __typename: 'NavigationContainerBlock' } | { __typename: 'NavigationItemBlock' } | { __typename: 'NavigationLinksBlock' } | { __typename: 'ObjectItemBlock' } | { __typename: 'PrimaryNavigationBannerBlock' } | { __typename: 'PrimaryNavigationCategoriesBlock' } | { __typename: 'PrimaryNavigationColumnBlock' } | { __typename: 'PrimaryNavigationLinkBlock' } | { __typename: 'ProductBlock' } | { __typename: 'ProductsAndBannerBlock' } | { __typename: 'ProductsBlock' } | { __typename: 'RatingReviewItemBlock' } | { __typename: 'RichContentBlock' } | { __typename: 'RowBlock' } | { __typename: 'SecondaryNavigationLinkBlock' } | { __typename: 'SectionBlock' } | { __typename: 'SliderBlock' } | { __typename: 'SubscribeBlock' } | { __typename: 'TextImageBlockBlock' } | { __typename: 'TopHeaderBlock' } | { __typename: 'TopHeaderContainerBlock', children?: Array<{ __typename?: 'BannerBlock' } | { __typename?: 'BannerItemBlock' } | { __typename?: 'BrandBlock' } | { __typename?: 'ButtonBlock' } | { __typename?: 'ColumnBlock' } | { __typename?: 'FAQBlock' } | { __typename?: 'FooterColumnBlock' } | { __typename?: 'FooterContainerBlock' } | { __typename?: 'FooterLinksBlock' } | { __typename?: 'HaColumnBlock' } | { __typename?: 'HaRowBlock' } | { __typename?: 'HeaderUserInfoBlock' } | { __typename?: 'ImageItemBlock' } | { __typename?: 'ImageListBlock' } | { __typename?: 'ImageTextBlocksBlock' } | { __typename?: 'ImageTextItemBlock' } | { __typename?: 'NavigationContainerBlock' } | { __typename?: 'NavigationItemBlock' } | { __typename?: 'NavigationLinksBlock' } | { __typename?: 'ObjectItemBlock' } | { __typename?: 'PrimaryNavigationBannerBlock' } | { __typename?: 'PrimaryNavigationCategoriesBlock' } | { __typename?: 'PrimaryNavigationColumnBlock' } | { __typename?: 'PrimaryNavigationLinkBlock' } | { __typename?: 'ProductBlock' } | { __typename?: 'ProductsAndBannerBlock' } | { __typename?: 'ProductsBlock' } | { __typename?: 'RatingReviewItemBlock' } | { __typename?: 'RichContentBlock' } | (
            { __typename?: 'RowBlock' }
            & { ' $fragmentRefs'?: { 'RowBlockFragment': RowBlockFragment } }
          ) | { __typename?: 'SecondaryNavigationLinkBlock' } | { __typename?: 'SectionBlock' } | { __typename?: 'SliderBlock' } | { __typename?: 'SubscribeBlock' } | { __typename?: 'TextImageBlockBlock' } | { __typename?: 'TopHeaderBlock' } | { __typename?: 'TopHeaderContainerBlock' } | { __typename?: 'VideoBlock' } | null> | null } | { __typename: 'VideoBlock' } | null> } } | null } | null };

export const IntOptionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<IntOptionFragment, unknown>;
export const TextOptionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<TextOptionFragment, unknown>;
export const CommonStylesBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CommonStylesBlockFragment, unknown>;
export const SizeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]} as unknown as DocumentNode<SizeFragment, unknown>;
export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const ContentImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<ContentImageFragment, unknown>;
export const LinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<LinkFragment, unknown>;
export const ButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ButtonFragment, unknown>;
export const BannerItemBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]} as unknown as DocumentNode<BannerItemBlockFragment, unknown>;
export const ImageTextItemBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]} as unknown as DocumentNode<ImageTextItemBlockFragment, unknown>;
export const SliderBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}}]} as unknown as DocumentNode<SliderBlockFragment, unknown>;
export const SubscribeBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}}]} as unknown as DocumentNode<SubscribeBlockFragment, unknown>;
export const TopHeaderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<TopHeaderFragment, unknown>;
export const NavigationLinksBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<NavigationLinksBlockFragment, unknown>;
export const ImageItemBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<ImageItemBlockFragment, unknown>;
export const ImageListBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]} as unknown as DocumentNode<ImageListBlockFragment, unknown>;
export const ButtonBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}}]} as unknown as DocumentNode<ButtonBlockFragment, unknown>;
export const RichContentBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}}]} as unknown as DocumentNode<RichContentBlockFragment, unknown>;
export const ContentBlockTypesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}}]} as unknown as DocumentNode<ContentBlockTypesFragment, unknown>;
export const ColumnBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}}]} as unknown as DocumentNode<ColumnBlockFragment, unknown>;
export const FooterColumnBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}}]} as unknown as DocumentNode<FooterColumnBlockFragment, unknown>;
export const RowBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}}]} as unknown as DocumentNode<RowBlockFragment, unknown>;
export const SectionBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"paddingX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}}]} as unknown as DocumentNode<SectionBlockFragment, unknown>;
export const FooterContainerBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}}]} as unknown as DocumentNode<FooterContainerBlockFragment, unknown>;
export const CountryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}}]} as unknown as DocumentNode<CountryFragment, unknown>;
export const CurrencyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]} as unknown as DocumentNode<CurrencyFragment, unknown>;
export const UnitOfMeasurementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}}]} as unknown as DocumentNode<UnitOfMeasurementFragment, unknown>;
export const VatDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VatDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VatDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"amountIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}}]}}]} as unknown as DocumentNode<VatDetailFragment, unknown>;
export const DiscountInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiscountInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiscountInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discountCode"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}}]}}]} as unknown as DocumentNode<DiscountInfoFragment, unknown>;
export const OrderRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rowId"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rowType"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VatDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiscountInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VatDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VatDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"amountIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiscountInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiscountInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discountCode"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}}]}}]} as unknown as DocumentNode<OrderRowFragment, unknown>;
export const CartFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Cart"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discountCodes"}},{"kind":"Field","name":{"kind":"Name","value":"showPricesIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"productTotalIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"productTotalExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"shippingCostIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"shippingCostExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalFeesIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalFeesExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalPromotionsAndDiscountsIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalPromotionsAndDiscountsExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"}},{"kind":"Field","name":{"kind":"Name","value":"totalVat"}},{"kind":"Field","name":{"kind":"Name","value":"productCount"}},{"kind":"Field","name":{"kind":"Name","value":"giftCards"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderRow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiscountInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VatDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VatDetail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"amountIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DiscountInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiscountInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discountCode"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Country"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Country"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rowId"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rowType"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VatDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DiscountInfo"}}]}}]}}]} as unknown as DocumentNode<CartFragment, unknown>;
export const CartMutationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartMutation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discountCodes"}},{"kind":"Field","name":{"kind":"Name","value":"showPricesIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"productTotalIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"productTotalExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"shippingCostIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"shippingCostExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalFeesIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalFeesExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalPromotionsAndDiscountsIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalPromotionsAndDiscountsExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"grandTotal"}},{"kind":"Field","name":{"kind":"Name","value":"totalVat"}},{"kind":"Field","name":{"kind":"Name","value":"productCount"}},{"kind":"Field","name":{"kind":"Name","value":"giftCards"}}]}}]} as unknown as DocumentNode<CartMutationFragment, unknown>;
export const MetadataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<MetadataFragment, unknown>;
export const CategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICategoryItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<CategoryFragment, unknown>;
export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const CategoryProductCategoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryProductCategory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryProductCategory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Category"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"_description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Category"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICategoryItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CategoryProductCategoryFragment, unknown>;
export const NodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Node"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Node"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NodeFragment, unknown>;
export const ContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Content"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<ContentFragment, unknown>;
export const FileItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IFileItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<FileItemFragment, unknown>;
export const VideoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Video"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaVideoItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IFileItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<VideoFragment, unknown>;
export const BannerItemBlockFieldDefinitionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]} as unknown as DocumentNode<BannerItemBlockFieldDefinitionFragment, unknown>;
export const PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PageFragment, unknown>;
export const ArticlePageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}}]} as unknown as DocumentNode<ArticlePageFragment, unknown>;
export const ProductListPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductListPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}}]} as unknown as DocumentNode<ProductListPageFragment, unknown>;
export const HomePageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}}]} as unknown as DocumentNode<HomePageFragment, unknown>;
export const ProductFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVariant"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}}]} as unknown as DocumentNode<ProductFragment, unknown>;
export const ProductWithVariantsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductWithVariantsProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Product"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"_description"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVariant"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<ProductWithVariantsFragment, unknown>;
export const WebsiteTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<WebsiteTextFragment, unknown>;
export const WebsiteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IWebsiteItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"texts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebsiteText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<WebsiteFragment, unknown>;
export const AcceleratorWebsiteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AcceleratorWebsite"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AcceleratorWebsiteWebsite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Website"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"footerHeader"}},{"kind":"Field","name":{"kind":"Name","value":"megaMenuColumnHeader"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebsiteText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IWebsiteItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"texts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebsiteText"}}]}}]}}]} as unknown as DocumentNode<AcceleratorWebsiteFragment, unknown>;
export const PointerPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PointerPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IPageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}}]}}]} as unknown as DocumentNode<PointerPageFragment, unknown>;
export const PointerProductFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PointerProductField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerProductFieldItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldType"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}}]} as unknown as DocumentNode<PointerProductFieldFragment, unknown>;
export const FooterWebsiteFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterWebsiteField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterWebsiteFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"footerText"}}]}}]} as unknown as DocumentNode<FooterWebsiteFieldFragment, unknown>;
export const GetContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bool"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"should"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stringValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"StringValue","value":"_url","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}}]}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionBlock"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"paddingX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}}]} as unknown as DocumentNode<GetContentByPathQuery, GetContentByPathQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionBlock"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"paddingX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}}]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetPageByUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageByUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stringValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"StringValue","value":"_url","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"_url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageByUrlQuery, GetPageByUrlQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVariant"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductWithVariantsProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Product"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"_description"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"articleNumber"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleNumber"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductWithVariants"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UnitOfMeasurement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnitOfMeasurement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurementId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimalDigits"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVariant"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"discountPriceExcludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasurement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UnitOfMeasurement"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Metadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Metadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductWithVariants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductWithVariantsProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Product"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"baseProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inStockQuantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unitPriceIncludingVat"}},{"kind":"Field","name":{"kind":"Name","value":"unitPriceExcludingVat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"_description"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const GetWebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWebsite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DefaultChannelFieldTemplateChannel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"culture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"analytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleTagManager"}}]}},{"kind":"Field","name":{"kind":"Name","value":"website"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AcceleratorWebsiteWebsite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"texts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logotypeMain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loginPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"myPagesPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageNotFound"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"generalError"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"searchResultPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"checkoutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderConfirmationPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productFilterFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterContainerBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainMenu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layoutDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"layoutMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"layoutTablet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Size"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IntOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntOptionDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommonStylesBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommonStylesBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"textAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verticalAlignDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paddingRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginTopDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginLeftDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginBottomDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"marginRightDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PointerMediaImageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentImageBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"imageHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageWidth"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileHeight"}},{"kind":"Field","name":{"kind":"Name","value":"imageMobileWidth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Link"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageTextItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageTextItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentImagePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"autoplay"}},{"kind":"Field","name":{"kind":"Name","value":"autoplayDelayMs"}},{"kind":"Field","name":{"kind":"Name","value":"infinite"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"arrowsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"arrowPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsMobile"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"paginationDotsOverlapMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerViewMobile"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"slidesPerGroupMobile"}},{"kind":"Field","name":{"kind":"Name","value":"speedMs"}},{"kind":"Field","name":{"kind":"Name","value":"centeredSlides"}},{"kind":"Field","name":{"kind":"Name","value":"direction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscribeBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeInputText"}},{"kind":"Field","name":{"kind":"Name","value":"placeholderText"}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TopHeader"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopHeaderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationLinksBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLinksBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collapsibleMobile"}},{"kind":"Field","name":{"kind":"Name","value":"headerLabel"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageItemBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"navigationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageListBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageListBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageItemBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RichContentBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockTypes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BannerItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageTextItemBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscribeBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationLinksBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageListBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RichContentBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"widthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumnBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"templateName"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"navigationLinksHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RowBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RowBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_name"}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowWidthOptionMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnDesktop"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfItemOnMobile"}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceXDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceX"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentSpaceYDesktop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IntOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commonStyles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommonStylesBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorHex"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ColumnBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockTypes"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TopHeader"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterContainerBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RowBlock"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerItemBlockFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"richText"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltText"}},{"kind":"Field","name":{"kind":"Name","value":"isFullWidthImage"}},{"kind":"Field","name":{"kind":"Name","value":"cssClass"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlay"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColorOverlayOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"loading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}}]}}]} as unknown as DocumentNode<GetWebsiteQuery, GetWebsiteQueryVariables>;