import { ProductFilters } from "@/app/lib/commercetools/models/product.model";

export interface SearchOptions extends Record<string, unknown> {
  pagination: {
    page: number;
    perPage: number;
  };
  filters?: ProductFilters;
  sort?: {
    field: string;
    direction: "asc" | "desc";
  };
  locale?: string;
  currency?: string;
  where?: string;
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
}

export interface IRepository<T, K = string> {
  findById(id: K, locale?: string, currency?: string): Promise<T | null>;
  findAll(options?: SearchOptions): Promise<T[]>;
  search(options: SearchOptions): Promise<SearchResult<T>>;
  create(data: Partial<T>): Promise<T>;
  update(id: K, data: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
  findBySlug(
    slug: string,
    locale?: string,
    currency?: string,
  ): Promise<T | null>;
}
