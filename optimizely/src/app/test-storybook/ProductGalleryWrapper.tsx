import ProductGallery from "@/packages/niteco-ui/components/atoms/product-gallery";
export default function ProductGalleryWrapper() {
  const sampleImages = [
    {
      src: "/test.jpg",
      alt: "Wooden deck with LED lighting and landscaping",
    },
    {
      src: "/test.jpg",
      alt: "Concrete patio area",
    },
    {
      src: "/test.jpg",
      alt: "Wooden fence panels",
    },
    {
      src: "/test.jpg",
      alt: "Garden decking with steps",
    },
    {
      src: "/test.jpg",
      alt: "Outdoor wooden structure",
    },
    {
      src: "/test.jpg",
      alt: "Wooden deck with LED lighting and landscaping",
    },
    {
      src: "/test.jpg",
      alt: "Concrete patio area",
    },
    {
      src: "/test.jpg",
      alt: "Wooden fence panels",
    },
    {
      src: "/test.jpg",
      alt: "Garden decking with steps",
    },
    {
      src: "/test.jpg",
      alt: "Outdoor wooden structure",
    },
  ];

  return (
    <div>
      <ProductGallery images={sampleImages} />
    </div>
  );
}
