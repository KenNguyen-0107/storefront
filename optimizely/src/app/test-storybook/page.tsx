import SelectWrapper from "./SelectWrapper";
import DialogWrapper from "./DialogWrapper";
import ProductGalleryWrapper from "./ProductGalleryWrapper";
export default async function TestStorybookPage() {
  const options: any = [
    { label: "10001-MED-RED", value: "10001-MED-RED" },
    { label: "10001-MED-BLU", value: "10001-MED-BLU" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <ProductQuantityWrapper /> */}
      <DialogWrapper />
      <h1 className="text-3xl font-bold mb-8">Product Gallery Demo</h1>
      <main className="flex justify-center items-center">
        <SelectWrapper />
      </main>
      <div className="space-y-12">
        {/* Gallery with zoom and grid thumbnails (default) */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Default Gallery (Grid + Zoom)
          </h2>
          <ProductGalleryWrapper />
        </div>
      </div>
    </div>
  );
}
