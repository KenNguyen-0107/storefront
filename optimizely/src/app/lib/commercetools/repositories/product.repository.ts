import {
  IRepository,
  SearchOptions,
  SearchResult,
} from "@/app/lib/commercetools/interfaces/repository.interface";
import { IGraphQLClient } from "@/app/lib/commercetools/interfaces/client.interface";
import {
  Product,
  ProductSearchCriteria,
  ProductResponse,
  ProductsResponse,
  ProductFilters,
} from "@/app/lib/commercetools/models/product.model";
import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCTS,
} from "../graphql/queries/product.queries";
import { logger } from "@/app/lib/commercetools/utils/logger.utils";
import {
  ProductError,
  ErrorCode,
  createError,
} from "@/app/lib/commercetools/models/error.model";
import { createProductValidator } from "@/app/lib/commercetools/utils/validation.utils";
import { getGraphQLClient } from "@/app/lib/commercetools/provider/commercetools-client";

export interface SearchResults<T> {
  items: T[];
  total: number;
}

class ProductRepository implements IRepository<Product> {
  private static instance: ProductRepository;
  private readonly validator = createProductValidator();
  private readonly client: IGraphQLClient;

  private constructor(private readonly defaultLocale: string = "en") {
    this.client = getGraphQLClient();
  }

  public static getInstance(defaultLocale: string = "en"): ProductRepository {
    if (!ProductRepository.instance) {
      ProductRepository.instance = new ProductRepository(defaultLocale);
    }
    return ProductRepository.instance;
  }

  public static clearInstance(): void {
    ProductRepository.instance = null as unknown as ProductRepository;
  }

  async findById(id: string): Promise<Product | null> {
    try {
      const response = await this.client.query<ProductResponse>(
        GET_PRODUCT_BY_ID,
        {
          id,
          locale: this.defaultLocale,
        },
      );

      if (!response.product) {
        logger.warn("Product not found", { id });
        throw new ProductError(
          `Product with ID ${id} not found`,
          ErrorCode.PRODUCT_NOT_FOUND,
        );
      }

      return response.product;
    } catch (error) {
      logger.error("Error fetching product by ID", error as Error, { id });
      throw createError(error);
    }
  }

  async findAll(
    options: SearchOptions = { pagination: { page: 1, perPage: 20 } },
  ): Promise<Product[]> {
    try {
      const { filters, pagination, locale = this.defaultLocale } = options;
      const where = filters
        ? this.buildWhereClause(filters, locale)
        : undefined;

      const response = await this.client.query<ProductsResponse>(GET_PRODUCTS, {
        limit: pagination.perPage,
        offset: (pagination.page - 1) * pagination.perPage,
        locale,
        where,
      });

      return response.products.results;
    } catch (error) {
      logger.error("Error fetching products", error as Error, options);
      throw createError(error);
    }
  }

  async findBySlug(
    slug: string,
    locale: string = this.defaultLocale,
  ): Promise<Product | null> {
    try {
      this.validator.validateSlug(slug);

      const where = this.buildWhereClause({ slug: slug }, locale);

      const response = await this.client.query<ProductsResponse>(
        GET_PRODUCT_BY_SLUG,
        {
          locale,
          where,
        },
      );

      const product = response.products.results[0] || null;
      if (!product) {
        logger.warn("Product not found by slug", { slug, locale });
        throw new ProductError(
          `Product with slug ${slug} not found`,
          ErrorCode.PRODUCT_NOT_FOUND,
        );
      }

      return product;
    } catch (error) {
      logger.error("Error fetching product by slug", error as Error, {
        slug,
        locale,
      });
      throw createError(error);
    }
  }

  async search(options: SearchOptions): Promise<SearchResult<Product>> {
    try {
      const response = await this.client.query<ProductsResponse>(GET_PRODUCTS, {
        where: options.filters ? JSON.stringify(options.filters) : undefined,
        limit: options.pagination.perPage,
        offset: (options.pagination.page - 1) * options.pagination.perPage,
        locale: options.locale || this.defaultLocale,
      });

      return {
        items: response.products.results,
        total: response.products.total,
        page: options.pagination.page,
        perPage: options.pagination.perPage,
      };
    } catch (error) {
      logger.error("Error searching products", error as Error, { options });
      throw createError(error);
    }
  }

  private validateProduct(product: Partial<Product>): void {
    if (!product.masterData?.current) {
      throw new ProductError(
        "Invalid product data: missing masterData.current",
        ErrorCode.INVALID_PRODUCT_DATA,
      );
    }

    const { name, slug } = product.masterData.current;
    const { sku, prices } = product.masterData.current.masterVariant;

    // Validate required fields
    if (name) {
      Object.values(name).forEach((value) =>
        this.validator.validateName(value),
      );
    }
    if (slug) {
      Object.values(slug).forEach((value) =>
        this.validator.validateSlug(value),
      );
    }
    if (sku) {
      this.validator.validateSKU(sku);
    }
    if (prices?.length) {
      prices.forEach((price) => {
        this.validator.validatePrice(price.value.centAmount);
      });
    }
  }

  async create(data: Partial<Product>): Promise<Product> {
    try {
      this.validateProduct(data);
      throw new ProductError(
        "Create operation not implemented",
        ErrorCode.INVALID_PRODUCT_DATA,
      );
    } catch (error) {
      logger.error("Error creating product", error as Error, { data });
      throw createError(error);
    }
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    try {
      this.validateProduct(data);
      throw new ProductError(
        "Update operation not implemented",
        ErrorCode.PRODUCT_UPDATE_FAILED,
      );
    } catch (error) {
      logger.error("Error updating product", error as Error, { id, data });
      throw createError(error);
    }
  }

  async delete(id: string): Promise<void> {
    logger.warn("Delete method not implemented", { id });
    throw new ProductError(
      "Delete operation not implemented",
      ErrorCode.PRODUCT_NOT_FOUND,
    );
  }

  private buildWhereClause(
    filters: ProductFilters,
    locale: string,
  ): string | undefined {
    const conditions: string[] = [];

    if (
      filters.categories &&
      Array.isArray(filters.categories) &&
      filters.categories.length > 0
    ) {
      conditions.push(
        `masterData(current(categories(id in (${filters.categories.map((categoryID: string) => `"${categoryID}"`).join(",")}))))`,
      );
    }

    if (filters.categoryId) {
      conditions.push(
        `masterData(current(categories(id = "${filters.categoryId}")))`,
      );
    }

    if (
      filters.categoryIds &&
      Array.isArray(filters.categoryIds) &&
      filters.categoryIds.length > 0
    ) {
      conditions.push(
        `masterData(current(categories(id in (${filters.categoryIds.map((categoryID: string) => `"${categoryID}"`).join(",")}))))`,
      );
    }

    if (filters.slug) {
      conditions.push(`masterData(current(slug(${locale}="${filters.slug}")))`);
    }

    if (filters.price && typeof filters.price === "object") {
      const { min, max } = filters.price;
      if (min) {
        conditions.push(
          `masterData(current(masterVariant(prices(value(centAmount >= ${min})))))`,
        );
      }
      if (max) {
        conditions.push(
          `masterData(current(masterVariant(prices(value(centAmount <= ${max})))))`,
        );
      }
    }

    return conditions.length ? conditions.join(" AND ") : undefined;
  }
}

// Export the getInstance method as the main function
export function getProductRepository(
  defaultLocale: string = "en-GB",
): IRepository<Product> {
  return ProductRepository.getInstance(defaultLocale);
}

export { ProductRepository };
