import { getProductService } from "@/app/lib/commercetools/services/product.service";
import { SearchOptions } from "@/app/lib/commercetools/interfaces/repository.interface";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: any;
}) {
  // Parse search params
  const page = parseInt((searchParams?.page as string | undefined) ?? "1", 10);
  const perPage = parseInt(
    (searchParams?.perPage as string | undefined) ?? "20",
    10,
  );
  const category = searchParams?.category as string | undefined;
  const sort = searchParams?.sort as string | undefined;
  const minPrice = parseInt(
    (searchParams?.minPrice as string | undefined) ?? "0",
    10,
  );
  const maxPrice = parseInt(
    (searchParams?.maxPrice as string | undefined) ?? "0",
    10,
  );

  try {
    const productService = getProductService();

    // Build search options
    const options: SearchOptions = {
      pagination: {
        page,
        perPage,
      },
      filters: {},
    };

    // Add category filter
    if (category) {
      options.filters = {
        ...options.filters,
        categories: [category],
      };
    }

    // Add price filter
    if (minPrice > 0 || maxPrice > 0) {
      options.filters = {
        ...options.filters,
        price: {
          ...(minPrice > 0 && { min: minPrice }),
          ...(maxPrice > 0 && { max: maxPrice }),
        },
      };
    }

    // Add sorting
    if (sort) {
      const [field, direction] = sort.split("-") as [string, "asc" | "desc"];
      options.sort = {
        field,
        direction,
      };
    }

    const response = await productService.getAll(options);

    if (!response.success || !response.data) {
      throw new Error(response.error?.message || "Failed to fetch products");
    }

    // Create a SearchResult structure from the array response
    const products = {
      items: response.data,
      total: response.data.length,
      page,
      perPage,
    };

    return <div>{JSON.stringify(products)}</div>;
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error instanceof Error
              ? error.message
              : "Failed to fetch products"}
          </div>
        </div>
      </div>
    );
  }
}
