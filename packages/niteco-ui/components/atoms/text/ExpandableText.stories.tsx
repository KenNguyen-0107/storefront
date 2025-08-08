import type { Meta, StoryObj } from "@storybook/react";
import ExpandableText from "./ExpandableText";

const meta: Meta<typeof ExpandableText> = {
  title: "Atoms/ExpandableText",
  component: ExpandableText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays text with a 'Read More'/'Show Less' toggle for content that exceeds a specified word count threshold.",
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "The text content to display (can be plain text or HTML)",
    },
    mobileThreshold: {
      control: { type: "number", min: 5, max: 100, step: 5 },
      description: "Word limit before truncation on mobile devices",
      defaultValue: 50,
    },
    threshold: {
      control: { type: "number", min: 10, max: 200, step: 5 },
      description: "Word limit before truncation on desktop devices",
      defaultValue: 80,
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the component",
    },
    isRichText: {
      control: "boolean",
      description: "Whether the text contains HTML that should be rendered",
      defaultValue: true,
    },
    btnClassName: {
      control: "text",
      description: "Additional CSS classes to apply to the button",
    },
    showMoreText: {
      control: "text",
      description: "Text to display for expanding content",
      defaultValue: "Read More",
    },
    showLessText: {
      control: "text",
      description: "Text to display for collapsing content",
      defaultValue: "Show Less",
    },
    gradientColor: {
      control: "text",
      description:
        "Background color for gradient overlay (CSS color or CSS variable)",
      defaultValue: "white",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExpandableText>;

// Basic example with plain text
export const Basic: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.",
    threshold: 20,
    showMoreText: "Read More",
    showLessText: "Show Less",
    isRichText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic usage with plain text that exceeds the word count threshold and gets truncated.",
      },
    },
  },
};

// Rich text example
export const WithRichText: Story = {
  args: {
    text: "<h3>Rich Text Example</h3><p>This is a <strong>rich text</strong> example with <em>formatting</em> that demonstrates how the component handles <span style='color: blue;'>HTML content</span>.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.</p><p>Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.</p>",
    threshold: 25,
    isRichText: true,
    btnClassName: "text-blue-600 font-semibold",
    gradientColor: "white",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with rich text content that includes HTML formatting. Uses a height-based truncation with gradient overlay.",
      },
    },
  },
};

// Short text that doesn't need expansion
export const ShortText: Story = {
  args: {
    text: "This is a short text that doesn't exceed the word count threshold and won't be truncated.",
    threshold: 18,
    isRichText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with text shorter than the word count threshold, so no 'Read More' button is displayed.",
      },
    },
  },
};

// Custom thresholds
export const CustomThresholds: Story = {
  args: {
    text: "This example demonstrates custom thresholds for mobile and desktop. On mobile devices, this text will be truncated at 10 words, while on desktop it will be truncated at 20 words. Resize your browser window to see the difference in behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.",
    mobileThreshold: 10,
    threshold: 20,
    showMoreText: "View More",
    showLessText: "View Less",
    isRichText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with different word count truncation thresholds for mobile and desktop views.",
      },
    },
  },
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    text: "This example demonstrates custom styling applied to the expandable text component. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.",
    threshold: 15,
    className: "bg-gray-100 p-4 rounded-lg shadow-sm",
    btnClassName: "text-red-600 font-bold underline",
    isRichText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with custom CSS classes applied to both the component container and the button.",
      },
    },
  },
};

// Script sanitization example
export const ScriptSanitization: Story = {
  args: {
    text: "This text includes a script tag that should be sanitized: <script>alert('This should be removed')</script> The script should be removed but the rest of the text should remain intact.",
    threshold: 20,
    isRichText: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example demonstrating the script sanitization feature for security while using height-based truncation.",
      },
    },
  },
};

// Custom button text example
export const CustomButtonText: Story = {
  args: {
    text: "This example demonstrates custom button text for the expand/collapse actions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.",
    threshold: 15,
    showMoreText: "Continue Reading →",
    showLessText: "← Collapse Text",
    btnClassName: "text-blue-500 font-medium",
    isRichText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with custom text for the 'Read More' and 'Show Less' buttons.",
      },
    },
  },
};

// Custom gradient color example
export const CustomGradientColor: Story = {
  args: {
    text: "<h3>Custom Gradient Color</h3><p>This example demonstrates how to customize the gradient overlay color that appears at the bottom of truncated rich text. The gradient helps indicate that there is more content available.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.</p><p>Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.</p>",
    threshold: 30,
    isRichText: true,
    gradientColor: "#f0f4f8", // Light blue background
    btnClassName: "text-indigo-600 font-medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to customize the gradient overlay color that appears at the bottom of truncated rich text content.",
      },
    },
  },
};

// CSS Variable gradient color example
export const CssVariableGradient: Story = {
  args: {
    text: "<h3>CSS Variable Gradient</h3><p>This example demonstrates using a CSS variable for the gradient overlay color. This is useful when working with theme systems where colors are defined as CSS variables.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc.</p><p>Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl vitae nisl.</p>",
    threshold: 30,
    isRichText: true,
    gradientColor: "--bg-color", // Using a CSS variable
    btnClassName: "text-green-600 font-medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to use CSS variables for the gradient overlay color, which is useful when working with theme systems.",
      },
    },
  },
};
