import { Money, Price } from "@/app/lib/commercetools/models/money.model";

export interface PriceWithCurrency {
  centAmount: number;
  currencyCode: string;
  currencySymbol?: string;
}

export interface VariantWithPrice {
  price?: PriceWithCurrency;
  prices?: PriceWithCurrency[];
}

export interface VariantWithPriceModel {
  price?: Price;
  prices?: Price[];
}

/**
 * Finds the lowest price from a list of variants with PriceWithCurrency format
 * @param variants - Array of variants that may have price or prices
 * @returns The lowest price with currency information, or undefined if no prices found
 */
export function findLowestPrice<T extends VariantWithPrice>(
  variants: T[],
): PriceWithCurrency | undefined {
  const variantsWithPrice = variants.filter((variant) => {
    // Check if variant has either price or prices
    return variant.price || (variant.prices && variant.prices.length > 0);
  });

  if (variantsWithPrice.length === 0) {
    return undefined;
  }

  let lowestPrice: PriceWithCurrency | undefined;

  for (const variant of variantsWithPrice) {
    let variantPrice: PriceWithCurrency | undefined;

    // Check single price first
    if (variant.price) {
      variantPrice = variant.price;
    }
    // If no single price, check prices array
    else if (variant.prices && variant.prices.length > 0) {
      // Find the lowest price from the prices array
      variantPrice = variant.prices.reduce((lowest, current) => {
        return current.centAmount < lowest.centAmount ? current : lowest;
      });
    }

    // Compare with current lowest
    if (variantPrice) {
      if (!lowestPrice || variantPrice.centAmount < lowestPrice.centAmount) {
        lowestPrice = variantPrice;
      }
    }
  }

  return lowestPrice;
}

/**
 * Finds the lowest price from a list of variants with Price model format
 * @param variants - Array of variants that may have price or prices
 * @returns The lowest price with currency information, or undefined if no prices found
 */
export function findLowestPriceFromModel<T extends VariantWithPriceModel>(
  variants: T[],
): PriceWithCurrency | undefined {
  const variantsWithPrice = variants.filter((variant) => {
    // Check if variant has either price or prices
    return variant.price || (variant.prices && variant.prices.length > 0);
  });

  if (variantsWithPrice.length === 0) {
    return undefined;
  }

  let lowestPrice: PriceWithCurrency | undefined;

  for (const variant of variantsWithPrice) {
    let variantPrice: PriceWithCurrency | undefined;

    // Check single price first
    if (variant.price?.value) {
      const { centAmount, currencyCode } = variant.price.value;
      variantPrice = {
        centAmount,
        currencyCode,
        currencySymbol: getCurrencySymbol(currencyCode),
      };
    }
    // If no single price, check prices array
    else if (variant.prices && variant.prices.length > 0) {
      // Find the lowest price from the prices array
      const lowestPriceFromArray = variant.prices.reduce((lowest, current) => {
        return current.value.centAmount < lowest.value.centAmount
          ? current
          : lowest;
      });

      const { centAmount, currencyCode } = lowestPriceFromArray.value;
      variantPrice = {
        centAmount,
        currencyCode,
        currencySymbol: getCurrencySymbol(currencyCode),
      };
    }

    // Compare with current lowest
    if (variantPrice) {
      if (!lowestPrice || variantPrice.centAmount < lowestPrice.centAmount) {
        lowestPrice = variantPrice;
      }
    }
  }

  return lowestPrice;
}

/**
 * Returns the localized currency symbol for a given ISO currency code.
 * Falls back to the currency code if no symbol is available.
 *
 * Example: GBP -> £, USD -> $, EUR -> €
 */
export function getCurrencySymbol(
  currencyCode: string,
  locale: string = "en",
): string {
  try {
    // Try narrow symbol first (e.g., US$ vs $ depending on locale)
    const narrowParts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).formatToParts(0);

    const narrowSymbol = narrowParts.find((p) => p.type === "currency")?.value;
    if (
      narrowSymbol &&
      narrowSymbol.toUpperCase() !== currencyCode.toUpperCase()
    ) {
      return narrowSymbol;
    }

    // Fallback to the standard symbol
    const parts = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).formatToParts(0);

    const symbol = parts.find((p) => p.type === "currency")?.value;
    return symbol ?? currencyCode;
  } catch (_error) {
    // If Intl does not support the currency code, return the code as a safe fallback
    return currencyCode;
  }
}
