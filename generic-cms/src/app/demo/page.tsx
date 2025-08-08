import ProductCard from "@/packages/niteco-ui/components/organisms/ProductCard";
import React from "react";
const page = () => {
  const mockProductCardData = {
    productId: "product-123",
    productTitle: "JACKSON FEATHERBOARD PANEL",
    productUrl: "/products/featherboard-panel",
    src: "https://plus.unsplash.com/premium_photo-1751358174687-88a777c6a194?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Jackson Featherboard Panel - Premium Quality",
    content:
      "<p>Premium quality featherboard panel with superior durability. Perfect for garden fencing and decorative boundaries. Weather-resistant and easy to install.</p>",
    unitListPriceDisplay: "£89.99",
    quantity: 4,
    originalText: "£149.10",
    saveText: "Saving £20.00",
    from: "plp",
    isInStock: false,
  };
  const mockProductCardData1 = {
    productId: "product-123",
    productTitle: "JACKSON FEATHERBOARD PANEL",
    productUrl: "/products/featherboard-panel",
    src: "https://plus.unsplash.com/premium_photo-1751358174687-88a777c6a194?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Jackson Featherboard Panel - Premium Quality",
    content:
      "<p>Premium quality featherboard panel with superior durability. Perfect for garden fencing and decorative boundaries. Weather-resistant and easy to install.</p>",
    unitListPriceDisplay: "£89.99",
    quantity: 4,
    originalText: "£149.10",
    saveText: "Saving £20.00",
    from: "pdp",
    isInStock: true,
  };
  return (
    <div className="bg-blue-100">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col md:flex-row gap-8">
          <ProductCard {...mockProductCardData} />
          <ProductCard {...mockProductCardData} />
          <ProductCard {...mockProductCardData} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <ProductCard {...mockProductCardData1} />
          <ProductCard {...mockProductCardData1} />
          <ProductCard {...mockProductCardData1} />
          <ProductCard {...mockProductCardData1} />
        </div>
      </div>
    </div>
  );
};

export default page;
