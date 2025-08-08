"use client";
import LazyImage from "../../atoms/image/LazyImage";
import { SmartLink } from "../../atoms/link/smartLink";
import React, { useState } from "react";
import ProductCardPrice from "./ProductCardPrice";
import { Input } from "./Input";
import ButtonImage from "../../molecules/ImageTextBlocks/ButtonImage";
import RatingReview from "../../molecules/RatingReview";
import Stock from "./Stock";
import { CommerceProduct } from "../../../../../optimizely/src/app/lib/commercetools/models/commerce-dto.model";
import { BlockData } from "../../../../composable-content-engine/types/renderPayload";
import placeholderImage from "../../../public/images/Image-Coming-Soon-Placeholder.jpg";

export type ProductCardProps1 = Partial<CommerceProduct> &
  BlockData & {
    // Add any additional props you might need
  };

export interface ProductCardProps extends CommerceProduct, BlockData {
  id: string;
  slug: string;
  name: string;
  mobileHeight?: number;
  height?: number;
  description?: string;
  sku?: string;
  price?: {
    centAmount: number;
    currencyCode: string;
    currencySymbol?: string;
  };
  images?: Array<{
    url: string;
    alt: string;
  }>;
  attributes?: Record<string, unknown>;
  categories?: Array<{
    id: string;
    key: string;
  }>;
  from?: string;
  cssClass?: string;
  isInStock?: boolean;
  [x: string]: any;
}

const ProductCard: React.FC<ProductCardProps1> = ({
  id,
  slug,
  name,
  description,
  sku,
  price,
  mobileHeight = 125,
  height = 264,
  images,
  attributes,
  from,
  cssClass,
  categories,
  isInStock,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleButtonClick = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const buttonData = {
    link: {
      text: "Add to basket",
      url: "/",
    },
    variant: "Primary",
  };

  const titleId = `product-title-${id}`;
  const stockId = `product-stock-${id}`;

  // Extract attributes
  const originalPrice = attributes?.originalPrice as string;
  const saveText = attributes?.saveText as string;

  // Format price display
  const priceDisplay = price
    ? `${price?.currencySymbol ?? price?.currencyCode}${price?.centAmount / 100}`
    : "";
  const variantUrl = slug && sku ? `/products/${slug}/${sku}` : "#";
  const productUrl = slug ? `/products/${slug}` : "#";
  const placeholderImageSrc = placeholderImage.src;

  const viewProduct = () => {
    window.open(productUrl, "_self");
  };
  const normalizeUrl = (u?: string) => {
    if (!u) return "";
    try {
      return encodeURI(decodeURI(u));
    } catch {
      return u;
    }
  };
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      role="group"
      aria-labelledby={titleId}
      aria-describedby={stockId}
      data-testid="product-card"
    >
      <SmartLink
        href={from === "card-list" ? productUrl : variantUrl}
        className="w-full relative md:min-h-[256px]"
        aria-label={`View ${name || "product"} link`}
      >
        <LazyImage
          src={normalizeUrl(images?.[0]?.url) || placeholderImageSrc}
          alt={images?.[0]?.alt || name || ""}
          width={412}
          aria-label={`View ${name || "product"} image`}
          height={isMobile ? mobileHeight : height}
          loading="lazy"
          className="object-cover w-full h-auto"
        />
      </SmartLink>

      <div className="w-full px-2 py-4 md:px-4 md:py-6 flex flex-col gap-4 justify-between h-full">
        <div className="flex flex-col gap-4">
          <SmartLink href={variantUrl} aria-label={`View-${name}-title`}>
            <h4
              id={titleId}
              className={`${from === "card-list" ? "line-clamp-2 min-h-[42px] md:min-h-[50px] " : "line-clamp-4 md:line-clamp-3 min-h-[84px] md:min-h-[75px] "} text-blue text-left uppercase`}
            >
              {name}
            </h4>
          </SmartLink>

          {description && from === "card-list" && (
            <p
              className="min-h-13 md:min-h-[87px] text-md md:text-lg text-muted font-lora line-clamp-2 md:line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          )}
        </div>

        {from === "card-list" && (
          <div className="mt-auto flex flex-col gap-4">
            <ProductCardPrice
              price={priceDisplay}
              originalText={originalPrice}
              saveText={saveText}
              productId={id}
            />
            <RatingReview />

            <div className="flex gap-1 md:gap-4 w-full items-center">
              <ButtonImage
                disabled={!isInStock || isLoading}
                button={{
                  ...buttonData,
                  link: {
                    ...buttonData.link,
                    text: "View Product",
                  },
                }}
                cssClass={cssClass}
                dataTestId="add-to-basket"
                onClick={viewProduct}
                ariaLabel={`Add ${name} to basket`}
              />
            </div>
          </div>
        )}

        {from === "card-carousel" && (
          <div className="mt-auto flex flex-col gap-4">
            <RatingReview />

            <ProductCardPrice
              price={priceDisplay}
              originalText={originalPrice}
              saveText={saveText}
              productId={id}
              sku={sku}
            />

            <Stock isInStock={isInStock} />

            <div className="flex gap-1 md:gap-4 w-full items-center">
              <Input
                type="text"
                data-testid="quantity-input"
                disabled={!isInStock}
                value={quantity}
                onChange={handleQuantityChange}
                className="h-11 md:h-14 w-11 md:w-14 border-border-accordion text-md rounded p-4 text-center"
                ariaLabel="Product quantity"
              />
              <ButtonImage
                disabled={!isInStock || isLoading}
                button={{
                  ...buttonData,
                  link: {
                    ...buttonData.link,
                    text: "Add to basket",
                  },
                }}
                cssClass={cssClass}
                dataTestId="add-to-basket"
                onClick={handleButtonClick}
                ariaLabel={`Add ${name} to basket`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
