import { IService } from "@/app/lib/commercetools/interfaces/service.interface";
import {
  IRepository,
  SearchOptions,
  SearchResult,
} from "@/app/lib/commercetools/interfaces/repository.interface";
import { Product } from "@/app/lib/commercetools/models/product.model";
import {
  CommerceResponse,
  CommerceProduct,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import { createError } from "@/app/lib/commercetools/models/error.model";
import { ProductAdapter } from "@/app/lib/commercetools/adapters/product.adapter";
import { SearchResultAdapter } from "@/app/lib/commercetools/adapters/search.adapter";
import { getProductRepository } from "@/app/lib/commercetools/repositories/product.repository";

class ProductService implements IService<Product, CommerceProduct> {
  private static instance: ProductService;
  private readonly productAdapter: ProductAdapter;
  private readonly searchAdapter: SearchResultAdapter<Product, CommerceProduct>;
  private readonly repository: IRepository<Product>;

  private constructor(
    private readonly defaultLocale: string = "en-GB",
    private readonly defaultCurrency: string = "GBP",
  ) {
    this.repository = getProductRepository(defaultLocale, defaultCurrency);
    this.productAdapter = new ProductAdapter(defaultLocale);
    this.searchAdapter = new SearchResultAdapter(this.productAdapter);
  }

  public static getInstance(
    defaultLocale: string = "en-GB",
    defaultCurrency: string = "GBP",
  ): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService(
        defaultLocale,
        defaultCurrency,
      );
    }
    return ProductService.instance;
  }

  public static clearInstance(): void {
    ProductService.instance = null as unknown as ProductService;
  }

  async getById(id: string): Promise<CommerceResponse<CommerceProduct | null>> {
    try {
      const product = await this.repository.findById(id);
      return product
        ? this.productAdapter.adaptSuccess(product)
        : {
            success: true,
            data: null,
            error: null,
          };
    } catch (error) {
      const domainError = createError(error);
      return this.productAdapter.adaptError(domainError);
    }
  }

  async getAll(
    options?: SearchOptions,
  ): Promise<CommerceResponse<CommerceProduct[]>> {
    try {
      const products = await this.repository.findAll(options);
      return {
        success: true,
        data: products
          .map((p) => this.productAdapter.adapt(p))
          .filter((p) => p.price && p.price.centAmount > 0),
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
  ): Promise<CommerceResponse<SearchResult<CommerceProduct>>> {
    try {
      const result = await this.repository.search(options);
      return this.searchAdapter.adaptSuccess(result);
    } catch (error) {
      const domainError = createError(error);
      return this.searchAdapter.adaptError(domainError);
    }
  }

  async create(
    data: Partial<Product>,
  ): Promise<CommerceResponse<CommerceProduct>> {
    try {
      const product = await this.repository.create(data);
      return this.productAdapter.adaptSuccess(product);
    } catch (error) {
      const domainError = createError(error);
      return this.productAdapter.adaptError(domainError);
    }
  }

  async update(
    id: string,
    data: Partial<Product>,
  ): Promise<CommerceResponse<CommerceProduct>> {
    try {
      const product = await this.repository.update(id, data);
      return this.productAdapter.adaptSuccess(product);
    } catch (error) {
      const domainError = createError(error);
      return this.productAdapter.adaptError(domainError);
    }
  }

  async delete(id: string): Promise<CommerceResponse<void>> {
    try {
      await this.repository.delete(id);
      return { success: true, data: undefined, error: null };
    } catch (error) {
      const domainError = createError(error);
      return {
        success: false,
        data: undefined,
        error: {
          code: domainError.code,
          message: domainError.message,
        },
      };
    }
  }

  async getBySlug(slug: string): Promise<CommerceResponse<CommerceProduct>> {
    try {
      const product = await this.repository.findBySlug(slug);
      if (!product) {
        return {
          success: true,
          data: null as any,
          error: null,
        };
      }
      return this.productAdapter.adaptSuccess(product);
    } catch (error) {
      const domainError = createError(error);
      return this.productAdapter.adaptError(domainError);
    }
  }

  /**
   * Get products in a specific category.
   * @param categoryId The ID of the category.
   * @param options Optional search options (e.g., pagination, filters).
   * @returns A promise resolving to a CommerceResponse containing an array of CommerceProduct.
   */
  async getProductsInCategory(
    categoryId: string,
    pagination: {
      page: number;
      perPage: number;
    },
  ): Promise<CommerceResponse<CommerceProduct[]>> {
    try {
      const products = await this.repository.findAll({
        pagination,
        filters: { categoryId },
      });
      return {
        success: true,
        data: products.map((item: Product) => this.productAdapter.adapt(item)),
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
}

// Export the getInstance method as the main function
export function getProductService(
  defaultLocale: string = "en-GB",
  defaultCurrency: string = "GBP",
): IService<Product, CommerceProduct> {
  return ProductService.getInstance(defaultLocale, defaultCurrency);
}

export { ProductService };
