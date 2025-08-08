import {
  IRepository,
  SearchOptions,
  SearchResult,
} from "@/app/lib/commercetools/interfaces/repository.interface";
import { IGraphQLClient } from "@/app/lib/commercetools/interfaces/client.interface";
import {
  ProductSelection,
  ProductSelectionResponse,
  ProductSelectionsResponse,
  ProductSelectionFilters,
  ProductSelectionMode,
} from "@/app/lib/commercetools/models/product-selection.model";
import {
  GET_PRODUCT_SELECTION_BY_ID,
  GET_PRODUCT_SELECTION_BY_KEY,
  GET_PRODUCT_SELECTIONS,
} from "../graphql/queries/product-selection.queries";
import { logger } from "@/app/lib/commercetools/utils/logger.utils";
import {
  ProductError,
  ErrorCode,
  createError,
} from "@/app/lib/commercetools/models/error.model";
import { getGraphQLClient } from "@/app/lib/commercetools/provider/commercetools-client";

class ProductSelectionRepository implements IRepository<ProductSelection> {
  private static instance: ProductSelectionRepository;
  private readonly client: IGraphQLClient;

  private constructor(private readonly defaultLocale: string = "en") {
    this.client = getGraphQLClient();
  }

  public static getInstance(
    defaultLocale: string = "en",
  ): ProductSelectionRepository {
    if (!ProductSelectionRepository.instance) {
      ProductSelectionRepository.instance = new ProductSelectionRepository(
        defaultLocale,
      );
    }
    return ProductSelectionRepository.instance;
  }

  public static clearInstance(): void {
    ProductSelectionRepository.instance =
      null as unknown as ProductSelectionRepository;
  }

  async findById(id: string): Promise<ProductSelection | null> {
    try {
      const response = await this.client.query<ProductSelectionResponse>(
        GET_PRODUCT_SELECTION_BY_ID,
        {
          productSelectionId: id,
          locale: this.defaultLocale,
          limit: 20,
          offset: 0,
        },
      );

      if (!response.productSelection) {
        logger.warn("ProductSelection not found", { id });
        throw new ProductError(
          `ProductSelection with ID ${id} not found`,
          ErrorCode.PRODUCT_NOT_FOUND,
        );
      }

      return response.productSelection;
    } catch (error) {
      logger.error("Error fetching product selection by ID", error as Error, {
        id,
      });
      throw createError(error);
    }
  }

  async findAll(
    options: SearchOptions = { pagination: { page: 1, perPage: 20 } },
  ): Promise<ProductSelection[]> {
    try {
      const { filters, pagination, sort } = options;
      const where = filters ? this.buildWhereClause(filters) : undefined;
      const sortArray = sort ? [`${sort.field} ${sort.direction}`] : undefined;

      const response = await this.client.query<ProductSelectionsResponse>(
        GET_PRODUCT_SELECTIONS,
        {
          limit: pagination.perPage,
          offset: (pagination.page - 1) * pagination.perPage,
          locale: options.locale || this.defaultLocale,
          where,
          sort: sortArray,
        },
      );

      return response.productSelections.results;
    } catch (error) {
      logger.error(
        "Error fetching product selections",
        error as Error,
        options,
      );
      throw createError(error);
    }
  }

  async findBySlug(
    slug: string,
    locale?: string,
  ): Promise<ProductSelection | null> {
    try {
      // For ProductSelection, we'll use the key as slug since ProductSelection doesn't have a slug field
      const response = await this.client.query<ProductSelectionResponse>(
        GET_PRODUCT_SELECTION_BY_KEY,
        {
          productSelectionKey: slug,
          locale: locale || this.defaultLocale,
          limit: 20,
          offset: 0,
        },
      );

      if (!response.productSelection) {
        logger.warn("ProductSelection not found by key", { key: slug });
        return null;
      }

      return response.productSelection;
    } catch (error) {
      logger.error("Error fetching product selection by key", error as Error, {
        key: slug,
      });
      throw createError(error);
    }
  }

  async search(
    options: SearchOptions,
  ): Promise<SearchResult<ProductSelection>> {
    try {
      const { filters, pagination, sort } = options;
      const where = filters ? this.buildWhereClause(filters) : undefined;
      const sortArray = sort ? [`${sort.field} ${sort.direction}`] : undefined;

      const response = await this.client.query<ProductSelectionsResponse>(
        GET_PRODUCT_SELECTIONS,
        {
          limit: pagination.perPage,
          offset: (pagination.page - 1) * pagination.perPage,
          locale: options.locale || this.defaultLocale,
          where,
          sort: sortArray,
        },
      );

      return {
        items: response.productSelections.results,
        total: response.productSelections.total,
        page: pagination.page,
        perPage: pagination.perPage,
      };
    } catch (error) {
      logger.error("Error searching product selections", error as Error, {
        options,
      });
      throw createError(error);
    }
  }

  async create(data: Partial<ProductSelection>): Promise<ProductSelection> {
    try {
      this.validateProductSelection(data);

      // Note: This would require implementing the CREATE_PRODUCT_SELECTION mutation
      // For now, we'll throw an error indicating this needs to be implemented
      throw new ProductError(
        "Create operation not implemented for ProductSelection",
        ErrorCode.API_REQUEST_FAILED,
      );
    } catch (error) {
      logger.error("Error creating product selection", error as Error, {
        data,
      });
      throw createError(error);
    }
  }

  async update(
    id: string,
    data: Partial<ProductSelection>,
  ): Promise<ProductSelection> {
    try {
      this.validateProductSelection(data);

      // Note: This would require implementing the UPDATE_PRODUCT_SELECTION mutation
      // For now, we'll throw an error indicating this needs to be implemented
      throw new ProductError(
        "Update operation not implemented for ProductSelection",
        ErrorCode.API_REQUEST_FAILED,
      );
    } catch (error) {
      logger.error("Error updating product selection", error as Error, {
        id,
        data,
      });
      throw createError(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      // Note: This would require implementing the DELETE_PRODUCT_SELECTION mutation
      // For now, we'll throw an error indicating this needs to be implemented
      throw new ProductError(
        "Delete operation not implemented for ProductSelection",
        ErrorCode.API_REQUEST_FAILED,
      );
    } catch (error) {
      logger.error("Error deleting product selection", error as Error, { id });
      throw createError(error);
    }
  }

  private validateProductSelection(
    productSelection: Partial<ProductSelection>,
  ): void {
    if (!productSelection) {
      throw new ProductError(
        "ProductSelection data is required",
        ErrorCode.INVALID_INPUT,
      );
    }

    if (productSelection.name && typeof productSelection.name !== "object") {
      throw new ProductError(
        "ProductSelection name must be a localized string object",
        ErrorCode.INVALID_INPUT,
      );
    }

    if (
      productSelection.mode &&
      !Object.values(ProductSelectionMode).includes(productSelection.mode)
    ) {
      throw new ProductError(
        `Invalid ProductSelection mode. Must be one of: ${Object.values(ProductSelectionMode).join(", ")}`,
        ErrorCode.INVALID_INPUT,
      );
    }
  }

  private buildWhereClause(
    filters: ProductSelectionFilters,
  ): string | undefined {
    const conditions: string[] = [];

    if (filters.key) {
      conditions.push(`key="${filters.key}"`);
    }

    if (filters.mode) {
      conditions.push(`mode="${filters.mode}"`);
    }

    if (filters.name) {
      conditions.push(`name(${this.defaultLocale}="${filters.name}")`);
    }

    return conditions.length ? conditions.join(" AND ") : undefined;
  }
}

export function getProductSelectionRepository(
  defaultLocale: string = "en",
): IRepository<ProductSelection> {
  return ProductSelectionRepository.getInstance(defaultLocale);
}
