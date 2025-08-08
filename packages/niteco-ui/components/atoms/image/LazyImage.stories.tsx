import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LazyImage from "./LazyImage";

const meta = {
  title: "Atoms/LazyImage",
  component: LazyImage,
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
  },
} as Meta<typeof LazyImage>;

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
    <div className="w-full max-w-md">
      <LazyImage {...args} />
    </div>
  ),
};

export const EagerLoading: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Eager loaded image",
    width: 400,
    height: 300,
    loading: "eager",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <LazyImage {...args} />
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
    className: "rounded-lg shadow-lg border-2 border-gray-200",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <LazyImage {...args} />
    </div>
  ),
};

export const WithPlaceholder: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Image with placeholder",
    width: 400,
    height: 300,
    loading: "lazy",
    placeholderSrc: "https://picsum.photos/400/300?blur=10",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <LazyImage {...args} />
    </div>
  ),
};

export const ResponsiveImage: Story = {
  args: {
    src: "https://picsum.photos/800/600",
    alt: "Responsive image",
    width: 800,
    height: 600,
    loading: "lazy",
    className: "w-full h-auto",
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <LazyImage {...args} />
    </div>
  ),
};
