import type {
  Product,
  LocalizedString,
} from "@/app/lib/commercetools/models/product.model";
import type {
  CommerceProduct,
  CommerceResponse,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import type { Image } from "@/app/lib/commercetools/models/image.model";
import { IResponseAdapter } from "@/app/lib/commercetools/interfaces/adapter.interface";
import { DomainError } from "@/app/lib/commercetools/models/error.model";

export class CommerceAdapter
  implements IResponseAdapter<Product, CommerceProduct>
{
  constructor(private readonly defaultLocale: string = "en-GB") {}

  adapt(product: Product): CommerceProduct {
    const currentData = product.masterData.current;
    const variant = currentData.masterVariant;

    return {
      id: product.id,
      slug: this.getLocalizedValue(currentData.slug),
      name: this.getLocalizedValue(currentData.name),
      description: currentData.description
        ? this.getLocalizedValue(currentData.description)
        : undefined,
      sku: variant.sku,
      price: variant.prices?.[0]?.value,
      images: variant.images?.map((img) => ({
        url: img.url,
        alt: img.label || "",
      })),
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
          slug: resource.masterData.current.slug,
          name: resource.masterData.current.name,
          images: resource.masterData.current?.masterVariant?.images?.map(
            (img: Image) => img.url,
          ),
        })),
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

  private getLocalizedValue(field: LocalizedString): string {
    return field[this.defaultLocale] || Object.values(field)[0] || "";
  }
}
