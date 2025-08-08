"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ProductCardProps } from "@/packages/niteco-ui/components/organisms/ProductCard";

// Sử dụng dynamic import với ssr: false
const ProductCard = dynamic(
  () => import("@/packages/niteco-ui/components/organisms/ProductCard"),
  { ssr: false },
);

// Skeleton loader
const ProductCardSkeleton = ({ height = 264 }: { height?: number }) => (
  <div className="bg-white flex flex-col items-center w-full animate-pulse">
    <div className="w-full relative" style={{ height }}>
      <div className="bg-gray-200 w-full h-full"></div>
    </div>
    <div className="w-full px-4 py-6">
      <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 w-full mb-2"></div>
      <div className="h-4 bg-gray-200 w-2/3"></div>
    </div>
  </div>
);

export default function ProductCardWrapper(props: ProductCardProps) {
  console.log("props", props);
  return (
    <Suspense fallback={<ProductCardSkeleton height={props.height} />}>
      <ProductCard {...props} />
    </Suspense>
  );
}
