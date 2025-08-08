import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ImageTextBlocks from "./index";
import { IButton } from "components/types/cms/IButton";

// Sample button data
const sampleButtons: IButton[] = [
  {
    label: "Primary Button",
    link: {
      url: "https://example.com",
      target: "_blank",
      text: "Primary Button",
    },
    type: "Primary",
    cssClass: "",
  },
  {
    label: "Secondary Button",
    link: {
      url: "https://example.com",
      target: "_self",
      text: "Secondary Button",
    },
    type: "Secondary",
    cssClass: "",
  },
];

const meta = {
  title: "Molecules/ImageTextBlocks",
  component: ImageTextBlocks,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageTextBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function để tạo block prop đúng với interface của component
const makeBlock = (args: any) => ({
  type: "ImageTextBlocks",
  image: args.image,
  button: args.button,
  text: args.text,
  contentImagePosition: args.contentImagePosition,
  loading: args.loading,
  style: args.style,
  backgroundLink: args.backgroundLink,
});

export const ImageTop: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with image on top</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageTop",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const ImageBottom: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with image on bottom</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageBottom",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const ImageLeft: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with image on left</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageLeft",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const ImageRight: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with image on right</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageRight",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const MultipleButtons: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with multiple buttons</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: sampleButtons,
    contentImagePosition: "ImageTop",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const WithCustomStyle: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with custom styles</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover rounded-lg shadow-lg",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageTop",
    style: {
      className: "bg-gray-100 p-6 rounded-xl",
      inlineStyles: {
        textAlign: "center",
        verticalAlign: "middle",
      },
    },
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const NoButton: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content without any buttons</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    contentImagePosition: "ImageTop",
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};

export const WithAlignmentStyles: Story = {
  args: {
    loading: "eager",
    text: {
      content: "<div>This is a sample content with alignment styles</div>",
    },
    image: {
      image: {
        src: "https://picsum.photos/400/300",
        alt: "Sample Image",
        width: 400,
        height: 300,
        cssClass: "object-cover",
      },
      cssClass: "w-full max-w-md",
    },
    button: [sampleButtons[0]],
    contentImagePosition: "ImageLeft",
    style: {
      className: "bg-blue-50 p-4 rounded-lg",
      inlineStyles: {
        textAlign: "left",
        verticalAlign: "top",
        textAlignDesktop: "center",
        verticalAlignDesktop: "middle",
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 8,
      },
    },
    backgroundLink: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  render: (args) => (
    <div className="w-full max-w-2xl mx-auto h-96">
      <ImageTextBlocks block={makeBlock(args)} />
    </div>
  ),
};
