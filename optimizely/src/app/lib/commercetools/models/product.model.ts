import { Money, Price } from "@/app/lib/commercetools/models/money.model";
import { Image } from "@/app/lib/commercetools/models/image.model";

// Value Objects
export type LocalizedString = { [locale: string]: string };

// Category reference for products
export interface CategoryReference {
  id: string;
  key?: string;
  typeId: "category";
}

export interface Category {
  id: string;
  key?: string;
  name?: LocalizedString;
  slug?: LocalizedString;
}

// Product Filter Types
export interface PriceRange {
  min?: number;
  max?: number;
}

export interface ProductFilters {
  categories?: string[];
  categoryId?: string;
  categoryIds?: string[];
  categoryKey?: string;
  categoryKeys?: string[];
  slug?: string;
  price?: PriceRange;
  [key: string]: unknown; // Allow for additional custom filters
}

export interface ProductVariant {
  id: string;
  sku?: string;
  prices?: Price[];
  images?: Image[];
  attributes?: ProductAttribute[];
}

export interface ProductAttribute {
  name: string;
  value: unknown;
}

export interface AttributeRaw {
  name: string;
  referencedResourceSet: any[];
}

export interface ProductData {
  name: LocalizedString;
  description?: LocalizedString;
  slug: LocalizedString;
  masterVariant: ProductVariant;
  variants?: ProductVariant[];
  categoriesRef?: CategoryReference[];
  categories?: Category[];
  metaTitle?: LocalizedString;
  metaTitleAllLocales?: Array<{ locale: string; value: string }>;
  metaDescription?: LocalizedString;
  metaDescriptionAllLocales?: Array<{ locale: string; value: string }>;
  metaKeywords?: LocalizedString;
  metaKeywordsAllLocales?: Array<{ locale: string; value: string }>;
  attributesRaw?: AttributeRaw[];
}

// Aggregate Root
export interface Product {
  id: string;
  key?: string;
  version: number;
  masterData: {
    current: ProductData;
  };
}

// DTOs
export interface SearchResults<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
}

export interface ProductSearchCriteria {
  filters?: ProductFilters;
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

export interface ProductResponse {
  product: Product | null;
}

export interface ProductsResponse {
  products: {
    results: Product[];
    total: number;
  };
}
