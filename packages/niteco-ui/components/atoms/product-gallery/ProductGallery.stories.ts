import type { Meta, StoryObj } from "@storybook/react";
import ProductGallery from "./index";

const meta = {
  title: "Atoms/ProductGallery",
  component: ProductGallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: "object",
      description: "Array of product images with src and alt properties",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the component",
    },
    showZoom: {
      control: "boolean",
      description: "Whether to show zoom functionality",
    },
    thumbnailLayout: {
      control: "inline-radio",
      options: ["grid", "slider"],
      description: "Layout style for thumbnails",
    },
  },
} satisfies Meta<typeof ProductGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images for the gallery
const sampleImages = [
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    alt: "Product image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    alt: "Product image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    alt: "Product image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    alt: "Product image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    alt: "Product image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    alt: "Product image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    alt: "Product image 5",
  },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    showZoom: true,
    thumbnailLayout: "grid", // Can be changed to 'slider' in the Storybook controls
  },
};
