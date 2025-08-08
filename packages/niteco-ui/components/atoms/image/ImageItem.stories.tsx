import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ImageItem from "./ImageItem";

const meta = {
  title: "Atoms/ImageItem",
  component: ImageItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "select" },
      options: ["lazy", "eager"],
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
    className: {
      control: { type: "text" },
    },
    overlayColor: {
      control: { type: "color" },
    },
    overlayOpacity: {
      control: { type: "number", min: 0, max: 1, step: 0.1 },
    },
    isBackground: {
      control: { type: "boolean" },
    },
    isFullWidth: {
      control: { type: "boolean" },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          maxWidth: "100%",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ImageItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Sample image",
    width: 400,
    height: 300,
    loading: "lazy",
  },
  render: (args) => (
    <div className="w-full ">
      <ImageItem {...args} />
    </div>
  ),
};

export const WithMobileVersion: Story = {
  args: {
    src: "https://picsum.photos/800/600",
    srcMobile: "https://picsum.photos/400/300",
    alt: "Responsive image with mobile version",
    width: 800,
    height: 600,
    widthMobile: 400,
    heightMobile: 300,
    loading: "lazy",
  },
  render: (args) => (
    <div className="w-full ">
      <ImageItem {...args} />
    </div>
  ),
};

export const AsBackground: Story = {
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Background image",
    width: 800,
    height: 600,
    isBackground: true,
    loading: "lazy",
  },
  render: (args) => (
    <div className="relative w-full h-64 ">
      <ImageItem {...args} />
      <div className="relative z-10 p-4 text-white">
        <h2 className="text-xl font-bold">
          Content on top of background image
        </h2>
        <p>This content is positioned on top of the background image</p>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    src: "https://picsum.photos/1200/400",
    alt: "Full width image",
    width: 1200,
    height: 400,
    isFullWidth: true,
    loading: "lazy",
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <ImageItem {...args} />
    </div>
  ),
};

export const WithOverlay: Story = {
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Image with overlay",
    width: 800,
    height: 600,
    overlayColor: "#000000",
    overlayOpacity: 0.5,
    loading: "lazy",
  },
  render: (args) => (
    <div className="relative w-full ">
      <ImageItem {...args} />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-2xl font-bold text-white">
          Text over image with overlay
        </h2>
      </div>
    </div>
  ),
};

export const WithCustomClasses: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Image with custom classes",
    width: 400,
    height: 300,
    loading: "lazy",
    className: "rounded-lg overflow-hidden shadow-lg",
    imageClasses: "transition-transform duration-300 hover:scale-110",
  },
  render: (args) => (
    <div className="w-full ">
      <ImageItem {...args} />
    </div>
  ),
};
