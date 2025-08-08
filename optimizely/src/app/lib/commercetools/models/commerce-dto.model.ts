export interface Money {
  centAmount: number;
  currencyCode: string;
  currencySymbol?: string;
  fractionDigits?: number;
}

export interface CommerceProduct {
  id: string;
  slug: string;
  name: string;
  description?: string;
  sku?: string;
  price?: Money;
  images?: Array<{
    url: string;
    alt: string;
  }>;
  attributes?: Record<string, unknown>;
  categories?: Array<{
    id: string;
    key: string;
  }>;
  isInStock?: boolean;
  metaTitle?: string;
  metaTitleAllLocales?: Array<{ locale: string; value: string }>;
  metaDescription?: string;
  metaDescriptionAllLocales?: Array<{ locale: string; value: string }>;
  metaKeywords?: string;
  metaKeywordsAllLocales?: Array<{ locale: string; value: string }>;
  relatedProducts?: Array<CommerceProduct>;
  type?: string;
}

export interface CommerceError {
  code: string;
  message: string;
}

export interface CommerceResponse<T> {
  success: boolean;
  data: T | null;
  error: CommerceError | null;
}
