import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { ProductService } from "@/app/lib/commercetools/services/product.service";
import type { CommerceProduct } from "@/app/lib/commercetools/models/commerce-dto.model";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productService = ProductService.getInstance(
    process.env.CTP_DEFAULT_LOCALE,
  );
  const productResponse = await productService.getBySlug(slug);

  if (!productResponse.success || !productResponse.data) {
    return {
      title: "Product Not Found",
    };
  }

  const product = productResponse.data;

  // Get meta values with fallbacks - using direct localized fields from GraphQL
  const metaTitle = product.metaTitle || `${product.name} | Your Store`;
  const metaDescription =
    product.metaDescription ||
    product.description ||
    `Details for ${product.name}`;
  const metaKeywords = product.metaKeywords || "";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords || undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images:
        product.images?.map((img: { url: string; alt: string }) => ({
          url: img.url,
          alt: img.alt || product.name,
        })) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: product.images?.[0]?.url ? [product.images[0].url] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Get the product service instance with the configured locale
  const productService = ProductService.getInstance(
    process.env.CTP_DEFAULT_LOCALE,
  );

  // Fetch product data by slug
  const productResponse = await productService.getBySlug(slug);

  // Handle error or not found cases
  if (!productResponse.success || !productResponse.data) {
    notFound();
  }

  const product: CommerceProduct = productResponse.data;

  // Get related products for this product
  const relatedProducts = product.relatedProducts;

  // Format price
  const formatPrice = (price?: {
    centAmount: number;
    currencyCode: string;
  }) => {
    if (!price || !price.currencyCode || price.centAmount === undefined) {
      return "Price not available";
    }

    try {
      const amount = price.centAmount / 100;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: price.currencyCode,
      }).format(amount);
    } catch (error) {
      // Fallback for invalid currency codes
      const amount = price.centAmount / 100;
      return `${amount.toFixed(2)} ${price.currencyCode}`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images && product.images.length > 0 ? (
            <div className="space-y-4">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt || product.name}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1, 5).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg bg-gray-100"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || `${product.name} ${index + 2}`}
                        className="h-full w-full object-cover object-center"
                        width={200}
                        height={200}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-square w-full flex items-center justify-center bg-gray-100 rounded-lg">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            {product.sku && (
              <p className="text-sm text-gray-500 mt-2">SKU: {product.sku}</p>
            )}
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </div>

          {/* Description */}
          {product.description && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Categories */}
          {product.categories && product.categories.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <span
                    key={category.id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {category.key}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Related Products */}
          {relatedProducts && relatedProducts.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Related Products
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h4>
                    <Image
                      src={
                        typeof relatedProduct.images?.[0] === "string"
                          ? relatedProduct.images[0]
                          : relatedProduct.images?.[0]?.url || ""
                      }
                      alt={relatedProduct.name}
                      width={100}
                      height={100}
                    />
                    <a
                      href={`${relatedProduct.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Product →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="w-full bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-t border-gray-200">
          <nav className="-mt-px flex space-x-8" aria-label="Tabs">
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Additional Information
            </button>
            <button className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Reviews
            </button>
          </nav>
        </div>
        <div className="mt-8">
          <div className="text-gray-700">
            <p>Additional product information and reviews would go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
