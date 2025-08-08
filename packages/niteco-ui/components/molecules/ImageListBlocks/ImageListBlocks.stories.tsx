import type { Meta, StoryObj } from "@storybook/react";
import ImageListBlocks from "./index";

const meta: Meta<typeof ImageListBlocks> = {
  title: "Molecules/ImageListBlocks",
  component: ImageListBlocks,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageListBlocks>;

const sampleItems = [
  {
    image: {
      image: {
        src: "https://placehold.co/300x200/4A90E2/FFFFFF/png?text=Featured+Image+1",
        alt: "Sample Image 1",
        isFullWidthImage: false,
        width: 300,
        height: 200,
      },
      imageMobile: {
        src: "https://placehold.co/150x100/4A90E2/FFFFFF/png?text=Image+1",
        alt: "Sample Image 1 Mobile",
        isFullWidthImage: false,
        width: 150,
        height: 100,
      },
      cssClass: "rounded-lg",
    },
    navigationLink: {
      url: "#",
      target: "_self",
      cssClass: "hover:opacity-80",
    },
  },
  {
    image: {
      image: {
        src: "https://placehold.co/300x200/2ECC71/FFFFFF/png?text=Featured+Image+2",
        alt: "Sample Image 2",
        isFullWidthImage: false,
        width: 300,
        height: 200,
      },
      imageMobile: {
        src: "https://placehold.co/150x100/2ECC71/FFFFFF/png?text=Image+2",
        alt: "Sample Image 2 Mobile",
        isFullWidthImage: false,
        width: 150,
        height: 100,
      },
      cssClass: "rounded-lg",
    },
    navigationLink: {
      url: "#",
      target: "_blank",
      cssClass: "hover:opacity-80",
    },
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithSpacing: Story = {
  args: {
    items: sampleItems,
    contentSpaceX: 4,
    contentSpaceXDesktop: 6,
    contentSpaceY: 4,
    contentSpaceYDesktop: 6,
  },
};

export const WithCustomStyle: Story = {
  args: {
    items: sampleItems,
    style: {
      inlineStyles: {
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
      },
    },
  },
};

export const SingleImageFullWidth: Story = {
  args: {
    items: [
      {
        image: {
          image: {
            src: "https://placehold.co/1200x400/9B59B6/FFFFFF/png?text=Full+Width+Banner+Image",
            alt: "Full Width Image",
            isFullWidthImage: false,
            width: 1200,
            height: 400,
          },
          imageMobile: {
            src: "https://placehold.co/600x300/9B59B6/FFFFFF/png?text=Banner+Image",
            alt: "Full Width Image Mobile",
            isFullWidthImage: false,
            width: 600,
            height: 300,
          },
          cssClass: "rounded-lg",
        },
      },
    ],
  },
};
