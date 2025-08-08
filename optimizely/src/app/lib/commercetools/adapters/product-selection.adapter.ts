import { IResponseAdapter } from "@/app/lib/commercetools/interfaces/adapter.interface";
import {
  CommerceProduct,
  CommerceResponse,
} from "@/app/lib/commercetools/models/commerce-dto.model";
import { DomainError } from "@/app/lib/commercetools/models/error.model";
import {
  findLowestPriceFromModel,
  getCurrencySymbol,
} from "@/app/lib/commercetools/utils/price.utils";
import {
  ProductSelectionProduct,
  ProductVariant,
} from "../models/product-selection.model";

import { CategoryReference } from "../models/product.model";

export class ProductSelectionAdapter
  implements IResponseAdapter<ProductSelectionProduct, CommerceProduct>
{
  constructor(private readonly defaultLocale: string = "en-GB") {}

  adaptVariants(product: ProductSelectionProduct): CommerceProduct[] {
    const allVariants = product.masterData.current.allVariants;

    const products = allVariants.map((variant) => {
      return this.adaptVariant(
        variant,
        product.masterData.current.slug,
        product.masterData.current.categories,
      );
    });

    return products;
  }

  adaptVariant(
    variant: ProductVariant,
    productSlug: string,
    categories: CategoryReference[],
  ): CommerceProduct {
    // Find the lowest price from all variants
    return {
      categories: categories.map((cat) => ({
        id: cat.id,
        key: cat.key || "",
      })),
      id: variant.sku,
      slug: `${productSlug}/${variant.sku}`,
      name: variant.key || "",
      sku: variant.sku,
      price: variant.price
        ? {
            centAmount: variant.price.value.centAmount,
            currencyCode: variant.price.value.currencyCode,
            currencySymbol: getCurrencySymbol(variant.price.value.currencyCode),
            fractionDigits: variant.price.value.fractionDigits,
          }
        : undefined,
      images: variant.images?.map((image) => ({
        url: image.url,
        alt: image.label || "",
      })),
      isInStock: variant.availability?.noChannel?.isOnStock,
      description: variant.attributesRaw?.find(
        (attr: { name: string; value: unknown }) => attr.name === "description",
      )?.value as string | undefined,
    };
  }

  adaptVariantsSuccess(
    product: ProductSelectionProduct,
  ): CommerceResponse<CommerceProduct[]> {
    return {
      success: true,
      data: this.adaptVariants(product),
      error: null,
    };
  }

  adaptVariantsError(
    error: DomainError,
    fallback?: CommerceProduct[],
  ): CommerceResponse<CommerceProduct[]> {
    return {
      success: false,
      data: fallback || [],
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }

  adapt(variant: ProductSelectionProduct): CommerceProduct {
    const masterVariant = variant.masterData.current.masterVariant;
    const allVariants = variant.masterData.current.allVariants;

    // Find the lowest price from all variants
    const lowestPrice = findLowestPriceFromModel(allVariants);

    return {
      categories: variant.masterData.current.categories
        ?.filter((cat) => cat.key)
        .map((cat) => ({
          id: cat.id,
          key: cat.key!,
        })),
      id: variant.id,
      slug: `${variant.masterData.current.slug}/${masterVariant.sku}`,
      name: masterVariant.key || "",
      sku: masterVariant.sku,
      price: lowestPrice,
      images: masterVariant.images?.map((image) => ({
        url: image.url,
        alt: image.label || "",
      })),
      isInStock: masterVariant.availability?.noChannel?.isOnStock,
      description: masterVariant.attributesRaw?.find(
        (attr: { name: string; value: unknown }) => attr.name === "description",
      )?.value as string | undefined,
    };
  }

  adaptSuccess(
    data: ProductSelectionProduct,
  ): CommerceResponse<CommerceProduct> {
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
