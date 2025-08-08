import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SliderComponent from "./SliderComponent";
import { BlockData } from "../../../../composable-content-engine/types/renderPayload";

const meta: Meta<typeof SliderComponent> = {
  title: "Organisms/SliderComponent",
  component: SliderComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A versatile Slider component that can display different types of content blocks in a carousel format. Supports various configurations for navigation, pagination, and responsive behavior.",
      },
    },
  },
  argTypes: {
    // General properties
    type: {
      description: "Component type identifier",
      control: "text",
    },
    children: {
      description: "Array of BlockData items to be rendered as slides",
      control: "object",
    },
    style: {
      description: "Style configuration for the slider",
      control: "object",
    },
    className: {
      description: "Additional CSS class for the slider",
      control: "text",
    },
    wrapperClass: {
      description: "CSS class for the slider wrapper",
      control: "text",
    },

    // Navigation settings
    settings: {
      description: "General settings object for the slider",
      control: "object",
    },
    navigation: {
      description: "Navigation configuration object",
      control: "object",
    },
    arrowsDesktop: {
      description: "Show navigation arrows on desktop",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    arrowsMobile: {
      description: "Show navigation arrows on mobile",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    arrowPosition: {
      description: "Position of the navigation arrows",
      control: {
        type: "select",
        options: ["Right only", "Left only", "Right Left"],
      },
    },

    // Pagination settings
    pagination: {
      description: "Pagination configuration object",
      control: "object",
    },
    paginationDotsDesktop: {
      description: "Show pagination dots on desktop",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    paginationDotsMobile: {
      description: "Show pagination dots on mobile",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    paginationDotsOverlapDesktop: {
      description: "Pagination dots overlap content on desktop",
      control: "boolean",
    },
    paginationDotsOverlapMobile: {
      description: "Pagination dots overlap content on mobile",
      control: "boolean",
    },
    paginationEl: {
      description: "Custom pagination elements",
      control: "object",
    },

    // Slides configuration
    slidesPerViewDesktop: {
      description: "Number of slides visible at once on desktop",
      control: { type: "number", min: 1, max: 10, step: 0.1 },
      table: {
        defaultValue: { summary: "1" },
      },
    },
    slidesPerViewMobile: {
      description: "Number of slides visible at once on mobile",
      control: { type: "number", min: 1, max: 10, step: 0.1 },
      table: {
        defaultValue: { summary: "1" },
      },
    },
    slidesPerGroupDesktop: {
      description: "Number of slides to scroll at once on desktop",
      control: { type: "number", min: 1, max: 10, step: 1 },
      table: {
        defaultValue: { summary: "1" },
      },
    },
    slidesPerGroupMobile: {
      description: "Number of slides to scroll at once on mobile",
      control: { type: "number", min: 1, max: 10, step: 1 },
      table: {
        defaultValue: { summary: "1" },
      },
    },
    spaceBetween: {
      description: "Space between slides in pixels",
      control: { type: "number", min: 0, max: 100, step: 1 },
      table: {
        defaultValue: { summary: "32" },
      },
    },

    // Behavior settings
    loop: {
      description: "Enable continuous loop mode",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    speed: {
      description: "Transition speed in milliseconds",
      control: { type: "number", min: 100, max: 2000, step: 100 },
      table: {
        defaultValue: { summary: "500" },
      },
    },
    centeredSlides: {
      description: "Center active slide",
      control: "boolean",
    },
    direction: {
      description: "Slider direction",
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    resistance: {
      description: "Resistance bounds",
      control: "boolean",
    },

    // Autoplay settings
    autoplay: {
      description: "Enable autoplay",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    autoplayDelay: {
      description: "Delay between transitions in milliseconds",
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      table: {
        defaultValue: { summary: "3000" },
      },
    },

    // Content spacing
    contentSpaceX: {
      description: "Horizontal content spacing for mobile",
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    contentSpaceY: {
      description: "Vertical content spacing for mobile",
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    contentSpaceXDesktop: {
      description: "Horizontal content spacing for desktop",
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
    contentSpaceYDesktop: {
      description: "Vertical content spacing for desktop",
      control: { type: "number", min: 0, max: 100, step: 1 },
    },

    // Icon settings
    iconProps: {
      description: "Configuration for navigation icons",
      control: "object",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create mock BlockData for ImageTextItemBlock
const createImageTextBlock = (index: number): BlockData => ({
  type: "ImageTextItemBlock",
  text: {
    content: `<h3 class="text-xl font-bold mb-2">Image Text Block ${index}</h3><p>This is sample content for the image text block ${index}</p>`,
  },
  image: {
    image: {
      src: `https://picsum.photos/seed/${index}/800/400`,
      alt: `Sample Image ${index}`,
      width: 800,
      height: 400,
      cssClass: "object-cover",
    },
    cssClass: "w-full",
  },
  contentImagePosition: "ImageTop",
  button: [
    {
      label: "Learn More",
      link: {
        url: "#",
        target: "_self",
        text: "Learn More",
      },
      type: "Primary",
      cssClass: "",
    },
  ],
});

// Helper function to create mock BlockData for BannerItemBlock
const createBannerBlock = (index: number): BlockData => ({
  type: "BannerItemBlock",
  text: {
    content: `<h2 class="text-white text-2xl font-bold mb-4">Banner Block ${index}</h2>
    <p class="text-white mb-6">This is a sample banner block with a background image and text overlay</p>`,
  },
  button: [
    {
      link: {
        text: "Explore Now",
        url: "#",
      },
    },
  ],
  image: {
    image: {
      src: `https://picsum.photos/seed/${index + 10}/1200/600`,
    },
  },
  backgroundColorOverlay: "rgba(0, 0, 0, 0.4)",
  backgroundColorOverlayOpacity: "1",
  blockHeight: "400px",
});

// Default story with image text blocks
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default SliderComponent with ImageTextBlocks and standard navigation and pagination.",
      },
    },
  },
  decorators: [
    (Story) => {
      const props = {
        type: "SliderComponent",
        children: [createImageTextBlock(1), createImageTextBlock(2), createImageTextBlock(3), createImageTextBlock(4)],
        settings: {
          navigation: {
            mobile: true,
            desktop: true,
          },
          pagination: {
            clickable: true,
            modifierClass: "modifierPagination",
            mobile: true,
            desktop: true,
          },
          spaceBetween: 32,
        },
        style: {
          className: "slider-component",
        },
        slidesPerViewDesktop: 3,
        slidesPerViewMobile: 1,
        slidesPerGroupDesktop: 1,
        slidesPerGroupMobile: 1,
        arrowsDesktop: true,
        arrowsMobile: true,
        paginationDotsDesktop: true,
        paginationDotsMobile: true,
        loop: true,
        speed: 500,
        autoplay: false,
      };
      return <SliderComponent {...props} />;
    },
  ],
};

// Banner slider story
export const BannerSlider: Story = {
  parameters: {
    docs: {
      description: {
        story: "SliderComponent configured as a banner slider with autoplay and full-width slides.",
      },
    },
  },
  decorators: [
    (Story) => {
      const props = {
        type: "SliderComponent",
        children: [createBannerBlock(1), createBannerBlock(2), createBannerBlock(3)],
        settings: {
          navigation: {
            mobile: true,
            desktop: true,
          },
          pagination: {
            clickable: true,
            modifierClass: "modifierPagination",
            mobile: true,
            desktop: true,
          },
          spaceBetween: 0,
        },
        style: {
          className: "banner-slider",
        },
        slidesPerViewDesktop: 1,
        slidesPerViewMobile: 1,
        slidesPerGroupDesktop: 1,
        slidesPerGroupMobile: 1,
        arrowsDesktop: true,
        arrowsMobile: true,
        paginationDotsDesktop: true,
        paginationDotsMobile: true,
        loop: true,
        speed: 800,
        autoplay: true,
        autoplayDelay: 5000,
      };
      return <SliderComponent {...props} />;
    },
  ],
};

// Multiple slides per view
export const MultipleSlides: Story = {
  parameters: {
    docs: {
      description: {
        story: "SliderComponent with multiple slides per view on desktop and peek-next-slide effect on mobile.",
      },
    },
  },
  decorators: [
    (Story) => {
      const props = {
        type: "SliderComponent",
        children: [
          createImageTextBlock(1),
          createImageTextBlock(2),
          createImageTextBlock(3),
          createImageTextBlock(4),
          createImageTextBlock(5),
          createImageTextBlock(6),
        ],
        settings: {
          navigation: {
            mobile: false,
            desktop: true,
          },
          pagination: {
            clickable: true,
            modifierClass: "modifierPagination",
            mobile: true,
            desktop: true,
          },
          spaceBetween: 24,
        },
        style: {
          className: "multi-slide-carousel",
        },
        slidesPerViewDesktop: 3,
        slidesPerViewMobile: 1.2,
        slidesPerGroupDesktop: 3,
        slidesPerGroupMobile: 1,
        arrowsDesktop: true,
        arrowsMobile: false,
        paginationDotsDesktop: true,
        paginationDotsMobile: true,
        loop: false,
        speed: 500,
      };
      return <SliderComponent {...props} />;
    },
  ],
};

// Mobile-only navigation
export const MobileNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: "SliderComponent with navigation controls visible only on mobile devices.",
      },
    },
  },
  decorators: [
    (Story) => {
      const props = {
        type: "SliderComponent",
        children: [createImageTextBlock(1), createImageTextBlock(2), createImageTextBlock(3), createImageTextBlock(4)],
        settings: {
          navigation: {
            mobile: true,
            desktop: false,
          },
          pagination: {
            clickable: true,
            modifierClass: "modifierPagination",
            mobile: true,
            desktop: false,
          },
          spaceBetween: 16,
        },
        style: {
          className: "mobile-navigation-slider",
        },
        slidesPerViewDesktop: 2,
        slidesPerViewMobile: 1,
        slidesPerGroupDesktop: 2,
        slidesPerGroupMobile: 1,
        arrowsDesktop: false,
        arrowsMobile: true,
        paginationDotsDesktop: false,
        paginationDotsMobile: true,
        loop: true,
        speed: 300,
      };
      return <SliderComponent {...props} />;
    },
  ],
};

// Mixed content slider
export const MixedContent: Story = {
  parameters: {
    docs: {
      description: {
        story: "SliderComponent with mixed content types (ImageTextBlocks and BannerBlocks).",
      },
    },
  },
  decorators: [
    (Story) => {
      const props = {
        type: "SliderComponent",
        children: [createImageTextBlock(1), createBannerBlock(1), createImageTextBlock(2), createBannerBlock(2)],
        settings: {
          navigation: {
            mobile: true,
            desktop: true,
          },
          pagination: {
            clickable: true,
            modifierClass: "modifierPagination",
            mobile: true,
            desktop: true,
          },
          spaceBetween: 32,
        },
        style: {
          className: "mixed-content-slider",
        },
        slidesPerViewDesktop: 1,
        slidesPerViewMobile: 1,
        slidesPerGroupDesktop: 1,
        slidesPerGroupMobile: 1,
        arrowsDesktop: true,
        arrowsMobile: true,
        paginationDotsDesktop: true,
        paginationDotsMobile: true,
        loop: true,
        speed: 600,
        autoplay: true,
        autoplayDelay: 4000,
      };
      return <SliderComponent {...props} />;
    },
  ],
};
