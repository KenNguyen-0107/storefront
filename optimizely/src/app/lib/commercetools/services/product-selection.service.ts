import {
  IRepository,
  SearchOptions,
  SearchResult,
} from "@/app/lib/commercetools/interfaces/repository.interface";
import {
  ProductSelection,
  ProductSelectionProduct,
} from "@/app/lib/commercetools/models/product-selection.model";
import {
  CommerceResponse,
  CommerceProduct,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import { createError } from "@/app/lib/commercetools/models/error.model";
import { getProductSelectionRepository } from "@/app/lib/commercetools/repositories/product-selection.repository";
import { getProductService } from "@/app/lib/commercetools/services/product.service";
import {
  IProductSelectionService,
  ProductSelectionWithFilteredProducts,
} from "@/app/lib/commercetools/interfaces/product-selection-service.interface";
import { ProductSelectionAdapter } from "@/app/lib/commercetools/adapters/product-selection.adapter";

class ProductSelectionService implements IProductSelectionService {
  private static instance: ProductSelectionService;
  private readonly repository: IRepository<ProductSelection>;
  private readonly productService: ReturnType<typeof getProductService>;
  private readonly productSelectionAdapter: ProductSelectionAdapter;

  private constructor(
    defaultLocale: string = "en",
    defaultCurrency: string = "USD",
  ) {
    this.repository = getProductSelectionRepository(
      defaultLocale,
      defaultCurrency,
    );
    this.productService = getProductService(defaultLocale);
    this.productSelectionAdapter = new ProductSelectionAdapter(defaultLocale);
  }

  public static getInstance(
    defaultLocale: string = "en",
    defaultCurrency: string = "USD",
  ): ProductSelectionService {
    if (!ProductSelectionService.instance) {
      ProductSelectionService.instance = new ProductSelectionService(
        defaultLocale,
        defaultCurrency,
      );
    }
    return ProductSelectionService.instance;
  }

  public static clearInstance(): void {
    ProductSelectionService.instance =
      null as unknown as ProductSelectionService;
  }

  async getById(
    id: string,
    currency?: string,
  ): Promise<CommerceResponse<ProductSelection | null>> {
    try {
      const productSelection = await this.repository.findById(id, currency);
      return productSelection
        ? {
            success: true,
            data: productSelection,
            error: null,
          }
        : {
            success: true,
            data: null,
            error: null,
          };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async getAll(
    options?: SearchOptions,
  ): Promise<CommerceResponse<ProductSelection[]>> {
    try {
      const productSelections = await this.repository.findAll(options);
      return {
        success: true,
        data: productSelections,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: [],
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async search(
    options: SearchOptions,
  ): Promise<CommerceResponse<SearchResult<ProductSelection>>> {
    try {
      const result = await this.repository.search(options);
      return {
        success: true,
        data: result,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: {
          items: [],
          total: 0,
          page: 1,
          perPage: 20,
        },
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async create(
    data: Partial<ProductSelection>,
  ): Promise<CommerceResponse<ProductSelection>> {
    try {
      const productSelection = await this.repository.create(data);
      return {
        success: true,
        data: productSelection,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async update(
    id: string,
    data: Partial<ProductSelection>,
  ): Promise<CommerceResponse<ProductSelection>> {
    try {
      const productSelection = await this.repository.update(id, data);
      return {
        success: true,
        data: productSelection,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async delete(id: string): Promise<CommerceResponse<void>> {
    try {
      await this.repository.delete(id);
      return {
        success: true,
        data: null,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Retrieves a product selection by key and filters products by categoryId
   * @param key - The product selection key
   * @param categoryId - The category ID to filter products by
   * @param locale - Optional locale for the query
   * @param currency - Optional currency for the query
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  async getProductSelectionByKeyWithCategoryFilter(
    key: string,
    categoryId: string,
    locale?: string,
    currency?: string,
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>> {
    try {
      // Get the product selection by key
      const productSelection = await this.repository.findBySlug(
        key,
        locale,
        currency,
      );

      if (!productSelection) {
        return {
          success: false,
          data: null,
          error: {
            code: "PRODUCT_SELECTION_NOT_FOUND",
            message: `Product selection with key '${key}' not found`,
          },
        };
      }

      const productRefs = productSelection.productRefs?.results || [];
      if (productRefs.length === 0) {
        console.log("No products in product selection");
        return {
          success: true,
          data: {
            productSelection,
            filteredProducts: [],
            totalFiltered: 0,
          },
          error: null,
        };
      }

      // Get all products in the selection

      // Get products by IDs
      const productsResponse = productRefs.map((productRef) => {
        const product = productRef.product;
        if (this.productBelongsToCategory(product, categoryId)) {
          return this.productSelectionAdapter.adaptVariantsSuccess(product);
        } else {
          return this.productSelectionAdapter.adaptVariantsError(
            createError("Product does not belong to category"),
            [],
          );
        }
      });

      const filteredProducts: CommerceProduct[] = [];

      for (const productResponse of productsResponse) {
        if (productResponse.success && productResponse.data) {
          for (const product of productResponse.data) {
            if (product.price && product.price.centAmount > 0) {
              filteredProducts.push(product);
            }
          }
        }
      }

      return {
        success: true,
        data: {
          productSelection,
          filteredProducts,
          totalFiltered: filteredProducts.length,
        },
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Helper method to check if a product belongs to a specific category
   * This is a placeholder implementation - you may need to adjust based on your actual product structure
   * @param product - The product to check
   * @param categoryId - The category ID to check against
   * @returns boolean
   */
  private productBelongsToCategory(
    product: ProductSelectionProduct,
    categoryId: string,
  ): boolean {
    if (product.masterData.current.categories) {
      const category = product.masterData.current.categories.find(
        (cat) => cat.id === categoryId,
      );
      if (category) {
        return true;
      }
    }

    return false;
  }

  /**
   * Retrieves a product selection by key
   * @param key - The product selection key
   * @param locale - Optional locale for the query
   * @param currency - Optional currency for the query
   * @returns Promise<CommerceResponse<ProductSelection | null>>
   */
  async getByKey(
    key: string,
    locale?: string,
    currency?: string,
  ): Promise<CommerceResponse<ProductSelection | null>> {
    try {
      const productSelection = await this.repository.findBySlug(
        key,
        locale,
        currency,
      );
      return productSelection
        ? {
            success: true,
            data: productSelection,
            error: null,
          }
        : {
            success: true,
            data: null,
            error: null,
          };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Gets all products in a product selection without filtering
   * @param key - The product selection key
   * @param locale - Optional locale for the query
   * @param currency - Optional currency for the query
   * @returns Promise<CommerceResponse<CommerceProduct[]>> - Array of products in the selection
   */
  async getProductsInSelection(
    key: string,
    locale?: string,
    currency?: string,
  ): Promise<CommerceResponse<CommerceProduct[]>> {
    try {
      const productSelection = await this.repository.findBySlug(
        key,
        locale,
        currency,
      );

      if (!productSelection) {
        return {
          success: false,
          data: [],
          error: {
            code: "PRODUCT_SELECTION_NOT_FOUND",
            message: `Product selection with key '${key}' not found`,
          },
        };
      }

      const productRefs = productSelection.productRefs?.results || [];
      if (productRefs.length === 0) {
        return {
          success: true,
          data: [],
          error: null,
        };
      }

      const productsResponse = productRefs.map((productRef) => {
        const product = productRef.product;
        return this.productSelectionAdapter.adaptSuccess(
          product as ProductSelectionProduct,
        );
      });

      const products: CommerceProduct[] = [];
      for (const productResponse of productsResponse) {
        if (productResponse.success && productResponse.data) {
          products.push(productResponse.data);
        }
      }

      return {
        success: true,
        data: products,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: [],
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Filters products by multiple category IDs
   * @param key - The product selection key
   * @param categoryIds - Array of category IDs to filter by
   * @param locale - Optional locale for the query
   * @param currency - Optional currency for the query
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  async getProductSelectionByKeyWithMultipleCategoryFilter(
    key: string,
    categoryIds: string[],
    locale?: string,
    currency?: string,
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>> {
    try {
      const productSelection = await this.repository.findBySlug(
        key,
        locale,
        currency,
      );

      if (!productSelection) {
        return {
          success: false,
          data: null,
          error: {
            code: "PRODUCT_SELECTION_NOT_FOUND",
            message: `Product selection with key '${key}' not found`,
          },
        };
      }

      const productRefs = productSelection.productRefs?.results || [];
      if (productRefs.length === 0) {
        return {
          success: true,
          data: {
            productSelection,
            filteredProducts: [],
            totalFiltered: 0,
          },
          error: null,
        };
      }

      const productsResponse = productRefs.map((productRef) => {
        const product = productRef.product;
        if (this.productBelongsToAnyCategory(product, categoryIds)) {
          return this.productSelectionAdapter.adaptVariantsSuccess(
            product as ProductSelectionProduct,
          );
        } else {
          return this.productSelectionAdapter.adaptVariantsError(
            createError("Product does not belong to category"),
            [],
          );
        }
      });

      const filteredProducts: CommerceProduct[] = [];

      for (const productResponse of productsResponse) {
        if (productResponse.success && productResponse.data) {
          for (const product of productResponse.data) {
            if (product.price && product.price.centAmount > 0) {
              filteredProducts.push(product);
            }
          }
        }
      }

      return {
        success: true,
        data: {
          productSelection,
          filteredProducts,
          totalFiltered: filteredProducts.length,
        },
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: null,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Gets product selections by mode (Individual, IndividualExclusion)
   * @param mode - The product selection mode
   * @returns Promise<CommerceResponse<ProductSelection[]>>
   */
  async getByMode(mode: string): Promise<CommerceResponse<ProductSelection[]>> {
    try {
      const result = await this.repository.search({
        filters: { mode: mode as any }, // Cast to any since mode is enum
        pagination: { page: 1, perPage: 100 },
      });

      return {
        success: true,
        data: result.items,
        error: null,
      };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: [],
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  /**
   * Helper method to check if a product belongs to any of the specified categories
   * @param product - The product to check
   * @param categoryIds - Array of category IDs to check against
   * @returns boolean
   */
  private productBelongsToAnyCategory(
    product: ProductSelectionProduct,
    categoryIds: string[],
  ): boolean {
    return categoryIds.some((categoryId) =>
      this.productBelongsToCategory(product, categoryId),
    );
  }
}

export function getProductSelectionService(
  defaultLocale: string = "en",
  defaultCurrency: string = "USD",
): ProductSelectionService {
  return ProductSelectionService.getInstance(defaultLocale, defaultCurrency);
}

export { ProductSelectionService };
