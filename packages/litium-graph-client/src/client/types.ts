import type { GraphQLClient, Variables, RequestDocument } from "graphql-request";
import type { LitiumGraphConfig, FrontendUser } from "../types.js";

// Re-export FrontendUser so it can be imported from this module
export type { FrontendUser } from "../types.js";

/**
 * Litium CMS Schema versions
 */
export enum LitiumCmsSchema {
  V8 = "v8",
  V9 = "v9",
}

/**
 * GraphQL Schema versions
 */
export enum SchemaVersion {
  Default = "default",
  Next = "next",
}

/**
 * Authentication modes (simplified for Litium)
 */
export enum AuthMode {
  Public = "public",
  Token = "token",
}

/**
 * Request method type
 */
export type RequestMethod = <T = unknown, V extends Variables = Variables>(
  document: RequestDocument,
  variables?: V,
  requestHeaders?: Record<string, string>
) => Promise<T>;

/**
 * Site information
 */
export type LitiumGraphSiteInfo = {
  /**
   * The frontend domain
   */
  frontendDomain?: string;

  /**
   * The CMS URL
   */
  cmsURL?: string;

  /**
   * The storefront context URL (for B2B/B2C filtering)
   */
  storefrontContextURL?: string;
};

/**
 * Client flags for controlling behavior (simplified for Litium)
 */
export type ILitiumGraphClientFlags = {
  /**
   * Enable Next.js fetch directives (cache tagging)
   */
  nextJsFetchDirectives: boolean;

  /**
   * Enable debug logging
   */
  debug: boolean;
};

/**
 * Main Litium Graph Client interface
 */
export interface ILitiumGraphClient extends GraphQLClient {
  /**
   * Current Litium CMS schema version
   */
  readonly currentLitiumCmsSchema: LitiumCmsSchema;

  /**
   * Debug mode status
   */
  readonly debug: boolean;

  /**
   * Current frontend user
   */
  readonly frontendUser: FrontendUser | undefined;

  /**
   * Site information
   */
  readonly siteInfo: LitiumGraphSiteInfo;

  /**
   * Current authentication mode
   */
  readonly currentAuthMode: AuthMode;

  /**
   * Current GraphQL schema version
   */
  readonly graphSchemaVersion: SchemaVersion;

  /**
   * Query method
   */
  query: RequestMethod;

  /**
   * Update authentication
   */
  updateAuthentication(tokenOrAuthmode?: string | AuthMode | undefined): ILitiumGraphClient;

  /**
   * Update client flags
   */
  updateFlags(newFlags: Partial<ILitiumGraphClientFlags>, temporary?: boolean): ILitiumGraphClient;

  /**
   * Restore previous flags
   */
  restoreFlags(): ILitiumGraphClient;

  /**
   * Set frontend user
   */
  setFrontendUser(newUser: FrontendUser | null): boolean;

  /**
   * Convert to JSON
   */
  toJSON(key?: string): LitiumGraphConfig;
}

/**
 * Product data structure
 */
export type ProductData = {
  id: string;
  articleNumber: string;
  name: string;
  description?: string;
  isVariant: boolean;
  templateName?: string;
  url?: string;
  stockStatus?: {
    inStockQuantity: number;
    description?: string;
  };
  price?: {
    unitPriceIncludingVat?: number;
    unitPriceExcludingVat?: number;
    discountPriceIncludingVat?: number;
    discountPriceExcludingVat?: number;
    vatRate?: number;
    currency?: CurrencyData;
  };
  images?: ImageData[];
  unitOfMeasurement?: {
    unitOfMeasurementId: string;
    name: string;
    decimalDigits: number;
  };
};

/**
 * Currency data structure
 */
export type CurrencyData = {
  name: string;
  code: string;
  symbol: string;
};

/**
 * Image data structure
 */
export type ImageData = {
  url: string;
  alt?: string;
  filename?: string;
  dimension?: {
    width: number;
    height: number;
  };
};

/**
 * Category data structure
 */
export type CategoryData = {
  id: string;
  name: string;
  url?: string;
  description?: string;
  parentId?: string;
  children?: CategoryData[];
  metadata?: MetadataData;
};

/**
 * Metadata data structure
 */
export type MetadataData = {
  title?: string;
  language?: string;
  links?: Array<{
    href: string;
    attributes?: Array<{
      name: string;
      value: string;
    }>;
  }>;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

/**
 * Page data structure
 */
export type PageData = {
  id: string;
  name: string;
  url: string;
  templateName?: string;
  content?: Record<string, unknown>;
  metadata?: MetadataData;
};

/**
 * Cart data structure
 */
export type CartData = {
  id: string;
  items: CartItemData[];
  subTotal: number;
  total: number;
  totalVat: number;
  currency: CurrencyData;
  discounts?: Array<{
    description: string;
    discountCode?: string;
    amount: number;
  }>;
};

/**
 * Cart item data structure
 */
export type CartItemData = {
  id: string;
  productId: string;
  articleNumber: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  vatDetails?: Array<{
    vatRate: number;
    amountIncludingVat: number;
    vat: number;
  }>;
};
