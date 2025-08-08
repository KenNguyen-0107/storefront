import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ProductCardListElementDataFragmentDoc,
  type ProductCardListElementDataFragment,
} from "@/gql/graphql";
import { getProductService } from "@/app/lib/commercetools/services/product.service";
import ProductCard, {
  ProductCardProps,
} from "@/packages/niteco-ui/components/organisms/ProductCard";
import ProductCardWrapper from "./CardWrapper";

// Utility function to check if a string is a valid GUID
function isGuid(str: string): boolean {
  const guidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return guidRegex.test(str);
}

/**
 * Product Card List Element - Server Component
 *
 */
export const ProductCardListElementComponent: CmsComponent<
  ProductCardListElementDataFragment
> = async ({ data, children }) => {
  const componentName = "Product Card List Element";
  const componentInfo = "Fetches products by category ID and displays as JSON";

  const categoryId = data?.CategoryID;
  const pagingSize = data?.PagingSize || 20;

  // Server-side data fetching
  let products: ProductCardProps[] = [];
  let error: string | null = null;
  let productCount = 0;

  // Check if categoryId is valid GUID, null, or empty
  if (!categoryId || !isGuid(categoryId)) {
    return null;
  }

  try {
    const productService = getProductService("en-GB", "GBP");
    const result = await productService.getAll({
      pagination: {
        page: 1,
        perPage: pagingSize,
      },
      filters: {
        categoryId: categoryId,
      },
      locale: "en-GB",
      currency: "GBP",
    });

    if (result.success && result.data) {
      products = result.data;
      productCount = result.data.length;
    } else {
      error = result.error?.message || "Failed to fetch products";
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "An error occurred";
  }

  return (
    <div className="w-full py-2 mb-4">
      {/* Products Display */}
      {!error && products.length > 0 && (
        <div className="mt-4">
          {/* Display products data as JSON */}
          {/* <div className="mt-4">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              Products Data (JSON):
            </div>
            <pre className="w-full overflow-x-auto font-mono text-xs bg-green-50 p-2 rounded-sm border border-solid border-green-900 text-green-900">
              {JSON.stringify(
                {
                  items: products,
                  total: productCount,
                  page: 1,
                  perPage: pagingSize,
                  categoryId,
                  timestamp: new Date().toISOString(),
                  success: true,
                },
                undefined,
                2,
              )}
            </pre>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products &&
              products.length > 0 &&
              products.map((product: ProductCardProps) => (
                <ProductCardWrapper
                  mobileHeight={179}
                  height={264}
                  key={product.id}
                  {...product}
                  from="card-list"
                />
              ))}
          </div>
        </div>
      )}

      {/* Display children if available */}
      {children && (
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-700 mb-2">
            Children Components:
          </div>
          <div className="mx-4 flex flex-col">{children}</div>
        </div>
      )}
    </div>
  );
};

ProductCardListElementComponent.displayName =
  "Product Card List Element (Component/ProductCardListElement)";
ProductCardListElementComponent.getDataFragment = () => [
  "ProductCardListElementData",
  ProductCardListElementDataFragmentDoc,
];
export default ProductCardListElementComponent;
