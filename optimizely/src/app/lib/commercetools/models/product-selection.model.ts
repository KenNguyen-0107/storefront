import { LocalizedString, CategoryReference } from "./product.model";
import { Image } from "./image.model";
import { Price } from "./money.model";

export interface ProductVariantAvailability {
  noChannel: {
    isOnStock: boolean;
  };
}

export interface ProductVariant {
  key: string;
  sku: string;
  price?: Price;
  availability?: ProductVariantAvailability;
  images?: Image[];
  attributesRaw?: Array<{
    name: string;
    value: unknown;
  }>;
  prices?: Price[];
}

export interface ProductMasterData {
  current: {
    slug: string;
    masterVariant: ProductVariant;
    allVariants: ProductVariant[];
    categories: CategoryReference[];
  };
}

export interface ProductSelectionProduct {
  id: string;
  masterData: ProductMasterData;
}

export interface ProductVariantSelection {
  type: string;
  skus: string[];
}

export interface ProductVariantExclusion {
  skus: string[];
}

export interface ProductOfSelection {
  product: ProductSelectionProduct;
}

export enum ProductSelectionMode {
  INDIVIDUAL = "Individual",
  INDIVIDUAL_EXCLUSION = "IndividualExclusion",
}

export interface ProductSelection {
  id: string;
  key?: string;
  version: number;
  name?: LocalizedString;
  nameAllLocales: LocalizedString[];
  productRefs: {
    results: ProductOfSelection[];
    count: number;
    total: number;
    offset: number;
    exists: boolean;
  };
  productCount: number;
  custom?: Record<string, unknown>;
  mode: ProductSelectionMode;
  createdAt: string;
  lastModifiedAt: string;
  createdBy?: {
    id: string;
    type: string;
  };
  lastModifiedBy?: {
    id: string;
    type: string;
  };
}

export interface ProductSelectionResponse {
  productSelection: ProductSelection;
}

export interface ProductSelectionsResponse {
  productSelections: {
    results: ProductSelection[];
    total: number;
    offset: number;
    count: number;
    exists: boolean;
  };
}

export interface ProductSelectionFilters {
  key?: string;
  mode?: ProductSelectionMode;
  name?: string;
  [key: string]: unknown;
}

export interface ProductSelectionSearchCriteria {
  filters?: ProductSelectionFilters;
  pagination: {
    page: number;
    perPage: number;
  };
  sort?: {
    field: string;
    direction: "asc" | "desc";
  };
  locale?: string;
}
