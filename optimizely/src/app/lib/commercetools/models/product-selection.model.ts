import { LocalizedString } from "./product.model";

export interface ProductVariantSelection {
  type: string;
  skus: string[];
}

export interface ProductVariantExclusion {
  skus: string[];
}

export interface ProductOfSelection {
  productRef: {
    id: string;
    typeId: string;
  };
  product?: any; // Product type would be imported here
  variantSelection?: ProductVariantSelection;
  variantExclusion?: ProductVariantExclusion;
}

export interface ProductOfSelectionQueryResult {
  offset: number;
  count: number;
  total: number;
  exists: boolean;
  results: ProductOfSelection[];
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
  productRefs: ProductOfSelectionQueryResult;
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
