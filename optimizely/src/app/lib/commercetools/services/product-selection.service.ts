import {
  IRepository,
  SearchOptions,
  SearchResult,
} from "@/app/lib/commercetools/interfaces/repository.interface";
import { ProductSelection } from "@/app/lib/commercetools/models/product-selection.model";
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
import { ProductAdapter } from "../adapters/product.adapter";

class ProductSelectionService implements IProductSelectionService {
  private static instance: ProductSelectionService;
  private readonly repository: IRepository<ProductSelection>;
  private readonly productService: ReturnType<typeof getProductService>;
  private readonly productAdapter: ProductAdapter;

  private constructor(defaultLocale: string = "en") {
    this.repository = getProductSelectionRepository(defaultLocale);
    this.productService = getProductService(defaultLocale);
    this.productAdapter = new ProductAdapter(defaultLocale);
  }

  public static getInstance(
    defaultLocale: string = "en",
  ): ProductSelectionService {
    if (!ProductSelectionService.instance) {
      ProductSelectionService.instance = new ProductSelectionService(
        defaultLocale,
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
  ): Promise<CommerceResponse<ProductSelection | null>> {
    try {
      const productSelection = await this.repository.findById(id);
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
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  async getProductSelectionByKeyWithCategoryFilter(
    key: string,
    categoryId: string,
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>> {
    try {
      // Get the product selection by key
      const productSelection = await this.repository.findBySlug(key);

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

      // Get all products in the selection
      const productRefs = productSelection.productRefs?.results || [];
      const productIds = productRefs.map(
        (productRef) => productRef.productRef.id,
      );

      if (productIds.length === 0) {
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

      // Get products by IDs
      const productsResponse = productRefs.map((productRef) => {
        const product = productRef.product;
        return this.productAdapter.adaptSuccess(product);
      });

      // Filter products by categoryId and extract successful responses
      const filteredProducts: CommerceProduct[] = [];

      for (const productResponse of productsResponse) {
        if (productResponse.success && productResponse.data) {
          const product = productResponse.data;

          // Check if the product belongs to the specified category
          // This assumes the product has a categories field or similar
          // You may need to adjust this logic based on your actual product structure
          if (this.productBelongsToCategory(product, categoryId)) {
            filteredProducts.push(product);
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
    product: CommerceProduct,
    categoryId: string,
  ): boolean {
    if (product.categories) {
      const category = product.categories.find((cat) => cat.id === categoryId);
      if (category) {
        return true;
      }
    }

    return false;
  }

  /**
   * Retrieves a product selection by key
   * @param key - The product selection key
   * @returns Promise<CommerceResponse<ProductSelection | null>>
   */
  async getByKey(
    key: string,
  ): Promise<CommerceResponse<ProductSelection | null>> {
    try {
      const productSelection = await this.repository.findBySlug(key);
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
   * @returns Promise<CommerceResponse<CommerceProduct[]>> - Array of products in the selection
   */
  async getProductsInSelection(
    key: string,
  ): Promise<CommerceResponse<CommerceProduct[]>> {
    try {
      const productSelection = await this.repository.findBySlug(key);

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
      const productIds = productRefs.map(
        (productRef) => productRef.productRef.id,
      );

      if (productIds.length === 0) {
        return {
          success: true,
          data: [],
          error: null,
        };
      }

      const productsResponse = await Promise.all(
        productIds.map((id) => this.productService.getById(id)),
      );

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
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  async getProductSelectionByKeyWithMultipleCategoryFilter(
    key: string,
    categoryIds: string[],
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>> {
    try {
      const productSelection = await this.repository.findBySlug(key);

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
      const productIds = productRefs.map(
        (productRef) => productRef.productRef.id,
      );

      if (productIds.length === 0) {
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

      const productsResponse = await Promise.all(
        productIds.map((id) => this.productService.getById(id)),
      );

      const filteredProducts: CommerceProduct[] = [];

      for (const productResponse of productsResponse) {
        if (productResponse.success && productResponse.data) {
          const product = productResponse.data;

          // Check if the product belongs to any of the specified categories
          if (this.productBelongsToAnyCategory(product, categoryIds)) {
            filteredProducts.push(product);
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
    product: CommerceProduct,
    categoryIds: string[],
  ): boolean {
    return categoryIds.some((categoryId) =>
      this.productBelongsToCategory(product, categoryId),
    );
  }
}

export function getProductSelectionService(
  defaultLocale: string = "en",
): ProductSelectionService {
  return ProductSelectionService.getInstance(defaultLocale);
}

export { ProductSelectionService };
