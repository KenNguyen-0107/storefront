"use client";

export default function ProductCardPrice({
  price,
  vatText,
  productId,
  originalText,
  saveText,
  sku,
}: {
  price: string;
  vatText?: string;
  originalText?: string;
  productId?: string;
  saveText?: string;
  sku?: string;
}) {
  if (!price) return <h4 className="min-h-10 md:min-h-12"></h4>;

  return (
    <div className="text-blue text-xl" data-testid="product-price">
      {sku && (
        <div className="font-lora text-muted text-sm md:text-md">
          Code: {sku}
        </div>
      )}
      <h4 className="">FROM {price}</h4>
      {vatText && <div className="text-muted text-xs md:text-md">EXC VAT</div>}
      <div className="flex items-center gap-1">
        {originalText && (
          <div className="text-muted font-lora text-xs md:text-md line-through">
            {originalText}
          </div>
        )}
        {saveText && (
          <div className="text-green-400 font-lora text-xs md:text-md">
            {saveText}
          </div>
        )}
      </div>
    </div>
  );
}
