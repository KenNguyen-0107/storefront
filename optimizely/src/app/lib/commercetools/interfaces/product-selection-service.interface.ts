import { IService } from "./service.interface";
import { ProductSelection } from "../models/product-selection.model";
import {
  CommerceResponse,
  CommerceProduct,
} from "../models/commerce-dto.model";

export interface ProductSelectionWithFilteredProducts {
  productSelection: ProductSelection;
  filteredProducts: CommerceProduct[];
  totalFiltered: number;
}

export interface IProductSelectionService
  extends IService<ProductSelection, ProductSelection> {
  /**
   * Retrieves a product selection by key and filters products by categoryId
   * @param key - The product selection key
   * @param categoryId - The category ID to filter products by
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  getProductSelectionByKeyWithCategoryFilter(
    key: string,
    categoryId: string,
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>;

  /**
   * Retrieves a product selection by key
   * @param key - The product selection key
   * @returns Promise<CommerceResponse<ProductSelection | null>>
   */
  getByKey(key: string): Promise<CommerceResponse<ProductSelection | null>>;

  /**
   * Gets all products in a product selection without filtering
   * @param key - The product selection key
   * @returns Promise<CommerceResponse<CommerceProduct[]>> - Array of products in the selection
   */
  getProductsInSelection(
    key: string,
  ): Promise<CommerceResponse<CommerceProduct[]>>;

  /**
   * Filters products by multiple category IDs
   * @param key - The product selection key
   * @param categoryIds - Array of category IDs to filter by
   * @returns Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>
   */
  getProductSelectionByKeyWithMultipleCategoryFilter(
    key: string,
    categoryIds: string[],
  ): Promise<CommerceResponse<ProductSelectionWithFilteredProducts>>;

  /**
   * Gets product selections by mode (Individual, IndividualExclusion)
   * @param mode - The product selection mode
   * @returns Promise<CommerceResponse<ProductSelection[]>>
   */
  getByMode(mode: string): Promise<CommerceResponse<ProductSelection[]>>;
}
