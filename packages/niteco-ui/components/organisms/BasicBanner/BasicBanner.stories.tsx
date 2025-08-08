import type { Meta, StoryObj } from "@storybook/react";
import BasicBanner from "./BasicBanner";
import { IBanner } from "../../types/cms/IBanner";

const meta: Meta<typeof BasicBanner> = {
  title: "Organisms/BasicBanner",
  component: BasicBanner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A versatile banner component that can display images, text, and call-to-action buttons with various layout options and styling capabilities.",
      },
    },
  },
  argTypes: {
    block: {
      description:
        "Banner data object containing all content and styling properties",
    },
    isMobile: {
      description: "Force mobile view regardless of screen size",
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BasicBanner>;

const defaultImage = {
  image: {
    src: "https://picsum.photos/2000/1000",
    alt: "Banner image",
  },
  imageMobile: {
    src: "https://picsum.photos/800/600",
    alt: "Banner image mobile",
  },
};

const defaultBlock: IBanner = {
  type: "basic-banner",
  heading: "<h1>Modern Design Solutions</h1>",
  subheading:
    "<span class='text-sm uppercase tracking-wider'>Premium Quality</span>",
  text: {
    content:
      "<p class='text-lg'>Transform your space with our innovative design approach and premium materials</p>",
  },
  bannerContent: "<p>Discover our award-winning products and services</p>",
  button: [
    {
      type: "primary",
      link: {
        text: "Explore Collection",
        url: "#",
      },
    },
  ],
  image: defaultImage,
  blockHeight: "500px",
  style: {
    className: "",
    inlineStyles: {
      textAlign: "center",
      textAlignDesktop: "center",
      verticalAlign: "middle",
      verticalAlignDesktop: "middle",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTopDesktop: "40px",
      paddingBottomDesktop: "40px",
      paddingLeftDesktop: "40px",
      paddingRightDesktop: "40px",
    },
  },
};

export const Default: Story = {
  args: {
    block: defaultBlock,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default banner with centered content, heading, subheading, and a call-to-action button.",
      },
    },
  },
};

export const WithOverlay: Story = {
  args: {
    block: {
      ...defaultBlock,
      backgroundColorOverlay: "rgba(0, 0, 0, 0.5)",
      backgroundColorOverlayOpacity: "0.5",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with a semi-transparent overlay that improves text readability over the background image.",
      },
    },
  },
};

export const WithBackgroundLink: Story = {
  args: {
    block: {
      ...defaultBlock,
      backgroundLink: {
        url: "https://example.com",
        target: "_blank",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with a clickable background that navigates to the specified URL when clicked anywhere on the banner.",
      },
    },
  },
};

export const LeftAligned: Story = {
  args: {
    block: {
      ...defaultBlock,
      style: {
        ...defaultBlock.style,
        inlineStyles: {
          ...defaultBlock.style.inlineStyles,
          textAlign: "left",
          textAlignDesktop: "left",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with left-aligned content for a more traditional layout.",
      },
    },
  },
};

export const RightAligned: Story = {
  args: {
    block: {
      ...defaultBlock,
      style: {
        ...defaultBlock.style,
        inlineStyles: {
          ...defaultBlock.style.inlineStyles,
          textAlign: "right",
          textAlignDesktop: "right",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with right-aligned content for a unique visual presentation.",
      },
    },
  },
};

export const MultipleButtons: Story = {
  args: {
    block: {
      ...defaultBlock,
      button: [
        {
          type: "primary",
          link: {
            text: "Get Started",
            url: "#",
          },
        },
        {
          type: "secondary",
          link: {
            text: "Learn More",
            url: "#",
          },
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with multiple call-to-action buttons for different user journeys.",
      },
    },
  },
};

export const MobileView: Story = {
  args: {
    block: defaultBlock,
    isMobile: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner forced to display in mobile view regardless of screen size, useful for testing mobile layouts.",
      },
    },
  },
};

export const EagerLoading: Story = {
  args: {
    block: {
      ...defaultBlock,
      loading: "eager",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with eager loading for images, useful for above-the-fold content that needs to load immediately.",
      },
    },
  },
};

export const CustomHeight: Story = {
  args: {
    block: {
      ...defaultBlock,
      blockHeight: "800px",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with a custom height setting for larger hero sections or feature showcases.",
      },
    },
  },
};

export const CustomClass: Story = {
  args: {
    block: {
      ...defaultBlock,
      cssClass: "custom-banner-class",
      contentClassName: "custom-content-class",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner with custom CSS classes applied for additional styling flexibility.",
      },
    },
  },
};

export const ResponsiveBanner: Story = {
  args: {
    block: {
      ...defaultBlock,
      heading: "<h1>Responsive Design</h1>",
      text: {
        content:
          "<p>This banner adapts to different screen sizes with tailored content and layout.</p>",
      },
      image: {
        image: {
          src: "https://picsum.photos/2000/1000?random=1",
          alt: "Desktop banner image",
        },
        imageMobile: {
          src: "https://picsum.photos/800/1200?random=2",
          alt: "Mobile banner image - different aspect ratio",
        },
      },
      style: {
        ...defaultBlock.style,
        inlineStyles: {
          ...defaultBlock.style.inlineStyles,
          textAlign: "left",
          textAlignDesktop: "center",
          verticalAlign: "bottom",
          verticalAlignDesktop: "middle",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Banner that demonstrates responsive behavior with different images, text alignment, and vertical positioning between mobile and desktop views.",
      },
    },
  },
};
