import { Money, Price } from "@/app/lib/commercetools/models/money.model";
import { Image } from "@/app/lib/commercetools/models/image.model";

// Value Objects
export type LocalizedString = { [locale: string]: string };

// Category reference for products (matches GraphQL response)
export interface CategoryReference {
  id: string;
  key?: string;
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
  id?: string;
  sku?: string;
  prices?: Price[];
  price?: Price;
  images?: Image[];
  attributes?: ProductAttribute[];
  availability?: {
    noChannel?: {
      isOnStock: boolean;
    };
  };
}

export interface ProductAttribute {
  name: string;
  value: unknown;
}

// Referenced product in attributesRaw
export interface ReferencedProduct {
  id: string;
  masterData: {
    current: {
      slug: LocalizedString;
      name: LocalizedString;
      masterVariant: {
        images: Image[];
      };
    };
  };
}

export interface AttributeRaw {
  name: string;
  value: unknown;
  referencedResourceSet: ReferencedProduct[];
}

export interface ProductData {
  name: LocalizedString;
  description?: LocalizedString;
  slug: LocalizedString;
  masterVariant: ProductVariant;
  allVariants?: ProductVariant[];
  categories?: CategoryReference[];
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  attributesRaw?: AttributeRaw[];
}

// Aggregate Root
export interface Product {
  id: string;
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
