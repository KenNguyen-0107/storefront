"use client";
import ProductQuantity from "@/packages/niteco-ui/components/atoms/product-quantity";

export default function ProductQuantityWrapper() {
  return (
    <div>
      {" "}
      <ProductQuantity
        value={2}
        min={1}
        max={20}
        onChange={(val) => console.log("Quantity changed:", val)}
      />
    </div>
  );
}
