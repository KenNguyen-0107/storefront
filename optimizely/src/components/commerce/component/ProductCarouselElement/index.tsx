import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";

import {
  ProductCarouselElementDataFragmentDoc,
  type ProductCarouselElementDataFragment,
} from "@/gql/graphql";
import { getProductSelectionService } from "@/app/lib/commercetools/services/product-selection.service";
import { IProductSelectionService } from "@/app/lib/commercetools/interfaces/product-selection-service.interface";
import { CommerceProduct } from "@/app/lib/commercetools/models/commerce-dto.model";
import SliderComponent from "../../../../../../packages/niteco-ui/components/organisms/Slider/SliderComponent";
import { parseSliderValue } from "@/utils/common-utils";

/**
 * Product Carousel Element - Server Component
 *
 */
export const ProductCarouselElementComponent: CmsComponent<
  ProductCarouselElementDataFragment
> = async ({ data, children, layoutProps }) => {
  const {
    slidesPerGroupDesktop = "",
    slidesPerGroupMobile = "",
    slidesPerViewDesktop = "",
    slidesPerViewMobile = "",
    arrowPositionDesktop = "",
    arrowPositionMobile = "",
    autoPlayDelayMS = "",
    autoPlay = "",
    infinite = "",
    arrowIconDisplay = "both",
    speed = 1000,
  } = extractSettings(layoutProps as any);

  const slidesPerGroupDesktopParsed = parseSliderValue(
    slidesPerGroupDesktop,
  ) as number;
  const slidesPerGroupMobileParsed = parseSliderValue(
    slidesPerGroupMobile,
  ) as number;
  const slidesPerViewDesktopParsed = parseSliderValue(
    slidesPerViewDesktop,
  ) as number;
  const slidesPerViewMobileParsed = parseSliderValue(
    slidesPerViewMobile,
  ) as number;
  const arrowPositionDesktopParsed = parseSliderValue(
    arrowPositionDesktop,
  ) as boolean;
  const arrowPositionMobileParsed = parseSliderValue(
    arrowPositionMobile,
  ) as boolean;
  const autoPlayDelayMSParsed = parseSliderValue(autoPlayDelayMS) as boolean;
  const autoPlayParsed = parseSliderValue(autoPlay) as boolean;
  const infiniteParsed = parseSliderValue(infinite) as boolean;
  const speedParsed = parseSliderValue(speed) as number;

  const componentName = "Product Carousel Element";
  const componentInfo =
    "Fetches products from product selection and displays as JSON";

  // Server-side data fetching
  let products: CommerceProduct[] = [];
  let error: string | null = null;
  let productCount = 0;

  try {
    // Check if we have the required data
    if (!data.CarouselSource) {
      error = "CarouselSource is required";
    } else {
      const service: IProductSelectionService =
        getProductSelectionService("en-GB");

      // If we have a CategoryID, use the category filter method
      if (data.CategoryID) {
        const result = await service.getProductSelectionByKeyWithCategoryFilter(
          data.CarouselSource,
          data.CategoryID,
        );

        if (result.success && result.data) {
          // Apply pagination if specified
          let filteredProducts = result.data.filteredProducts;
          if (data.productsofView && data.productsofView > 0) {
            filteredProducts = filteredProducts.slice(0, data.productsofView);
          }
          products = filteredProducts;
          productCount = result.data.totalFiltered;
        } else {
          error = result.error?.message || "Failed to fetch products";
        }
      } else {
        // If no CategoryID, get all products in the selection
        const result = await service.getProductsInSelection(
          data.CarouselSource,
        );

        if (result.success && result.data) {
          // Apply pagination if specified
          let allProducts = result.data;
          if (data.productsofView && data.productsofView > 0) {
            allProducts = allProducts.slice(0, data.productsofView);
          }
          products = allProducts;
          productCount = allProducts.length;
        } else {
          error = result.error?.message || "Failed to fetch products";
        }
      }
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "An error occurred";
  }

  return (
    <div className="w-full py-2 mb-4">
      {/* Products Display */}
      {!error && products.length > 0 && (
        <div className="mt-4">
          {/* <div className="text-sm text-red mb-2">
            Found {products.length} products
            {data.CategoryID && ` in category: ${data.CategoryID}`}
            {data.productsofView &&
              data.productsofView > 0 &&
              ` (showing ${products.length} of ${productCount})`}
          </div> */}

          {/* Display component data if available */}
          {/* {Object.getOwnPropertyNames(data).length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Component Data:
              </div>
              <pre className="w-full overflow-x-auto font-mono text-xs bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">
                {JSON.stringify(data, undefined, 2)}
              </pre>
            </div>
          )} */}

          {/* Display products data as JSON */}
          <div className="mt-4">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              Products Data (JSON):
            </div>
            <pre className="w-full overflow-x-auto font-mono text-xs bg-green-50 p-2 rounded-sm border border-solid border-green-900 text-green-900">
              {JSON.stringify(
                {
                  items: products,
                  total: productCount,
                  displayed: products.length,
                  CategoryID: data.CategoryID,
                  carouselSource: data.CarouselSource,
                  productsOfView: data.productsofView,
                  timestamp: new Date().toISOString(),
                  success: true,
                },
                undefined,
                2,
              )}
            </pre>
          </div>
        </div>
      )}

      <SliderComponent
        loop={infiniteParsed}
        arrowsDesktop={arrowPositionDesktopParsed}
        arrowsMobile={arrowPositionMobileParsed}
        slidesPerViewDesktop={slidesPerViewDesktopParsed}
        slidesPerViewMobile={slidesPerViewMobileParsed}
        slidesPerGroupDesktop={slidesPerGroupDesktopParsed}
        slidesPerGroupMobile={slidesPerGroupMobileParsed}
        autoplay={autoPlayParsed}
        autoplayDelay={autoPlayDelayMSParsed}
        speed={speedParsed}
        arrowIconDisplay={arrowIconDisplay}
        mobileSpaceBetween={16}
      >
        {products}
      </SliderComponent>

      {/* No Products State */}
      {!error && products.length === 0 && (
        <div className="text-center py-4">
          <div className="text-slate-600">No products found</div>
        </div>
      )}

      {children && <div className="mt-4 mx-4 flex flex-col">{children}</div>}
    </div>
  );
};
ProductCarouselElementComponent.displayName =
  "Product Carousel Element (Component/ProductCarouselElement)";
ProductCarouselElementComponent.getDataFragment = () => [
  "ProductCarouselElementData",
  ProductCarouselElementDataFragmentDoc,
];

export default ProductCarouselElementComponent;
