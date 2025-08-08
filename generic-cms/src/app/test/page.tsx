"use client";
import AccordionDemo from "@/packages/niteco-ui/components/atoms/accordion/Accordion.demo";
import Badge from "@/packages/niteco-ui/components/atoms/badge/Badge";
import CustomVideo from "@/packages/niteco-ui/components/atoms/CustomVideo/CustomVideo.test";
export default function Test() {
  return (
    <>
      <AccordionDemo />
      <Badge variant="inStock" size="sm" text="In Stock" />
      <Badge variant="outOfStock" size="sm" text="Out of Stock Status" />
      {/* <CustomVideo /> */}
    </>
  );
}
