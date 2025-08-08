import { IResponseAdapter } from "@/app/lib/commercetools/interfaces/adapter.interface";
import { Product } from "@/app/lib/commercetools/models/product.model";
import {
  CommerceResponse,
  CommerceProduct,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import { DomainError } from "@/app/lib/commercetools/models/error.model";
import { Image } from "@/app/lib/commercetools/models/image.model";
import { findLowestPriceFromModel } from "@/app/lib/commercetools/utils/price.utils";

export class ProductAdapter
  implements IResponseAdapter<Product, CommerceProduct>
{
  constructor(
    private readonly defaultLocale: string = "en-GB",
    private readonly defaultCurrency: string = "GBP",
  ) {}

  adapt(product: Product): CommerceProduct {
    const currentData = product.masterData.current;
    const variant = currentData.masterVariant;

    // Safely get localized value
    const getLocalizedValue = (
      field: Record<string, string> | string | undefined | null,
    ): string | undefined => {
      if (!field) return undefined;
      if (typeof field === "string") return field;
      return field[this.defaultLocale] || Object.values(field)[0] || undefined;
    };

    // Find the lowest price from all variants
    const allVariants = currentData.allVariants || [variant];
    const lowestPrice = findLowestPriceFromModel(allVariants);

    return {
      id: product.id,
      slug: getLocalizedValue(currentData.slug) || "",
      name: getLocalizedValue(currentData.name) || "",
      description: getLocalizedValue(currentData.description),
      sku: variant.sku,
      price: lowestPrice,
      images: variant.images?.map((img) => ({
        url: img.url,
        alt: img.label || "",
      })),
      categories: currentData.categories
        ?.filter((cat) => cat.key)
        .map((cat) => ({
          id: cat.id,
          key: cat.key!,
        })),
      metaTitle: getLocalizedValue(currentData.metaTitle),
      metaDescription: getLocalizedValue(currentData.metaDescription),
      metaKeywords: getLocalizedValue(currentData.metaKeywords),
      attributes: currentData.attributesRaw?.reduce(
        (acc, attr) => {
          acc[attr.name] = attr.referencedResourceSet;
          return acc;
        },
        {} as Record<string, any>,
      ),
      relatedProducts: currentData.attributesRaw
        ?.find((attr) => attr.name === "relatedproducts")
        ?.referencedResourceSet.map((resource) => ({
          id: resource.id,
          slug: getLocalizedValue(resource.masterData.current.slug) || "",
          name: getLocalizedValue(resource.masterData.current.name) || "",
          images: resource.masterData.current?.masterVariant?.images.map(
            (img: Image) => ({
              url: img.url,
              alt: img.label || "",
            }),
          ),
        })),
      isInStock: variant.availability?.noChannel?.isOnStock ?? true,
    };
  }

  adaptSuccess(data: Product): CommerceResponse<CommerceProduct> {
    return {
      success: true,
      data: this.adapt(data),
      error: null,
    };
  }

  adaptError(
    error: DomainError,
    fallback?: CommerceProduct,
  ): CommerceResponse<CommerceProduct> {
    return {
      success: false,
      data: fallback || null,
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }
}
