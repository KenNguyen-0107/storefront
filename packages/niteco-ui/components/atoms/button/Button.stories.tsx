import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Button component that accepts buttonType for styling variants, buttonLabel for accessibility, children for content, and all standard button props.",
      },
    },
  },
  argTypes: {
    buttonType: {
      control: { type: "select" },
      options: ["Primary", "Secondary", "Stroke", "Stroke-blue", "Emphasize"],
      description: "The type of button which determines its styling",
      defaultValue: "Primary",
    },
    buttonLabel: {
      control: "text",
      description: "Accessibility label for the button (used for aria-label and title)",
    },
    children: {
      control: "text",
      description: "Button content (text, icons, etc.)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    href: {
      control: "text",
      description: "Optional URL - if provided, renders as an anchor tag",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary button variant
export const Primary: Story = {
  args: {
    children: "Primary Button",
    buttonLabel: "Primary action button",
    buttonType: "Primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button with blue background and white text. Used for main actions.",
      },
    },
  },
};

// Secondary button variant
export const Secondary: Story = {
  // args: {
  //   children: "Secondary Button",
  //   buttonLabel: "Secondary action button",
  //   buttonType: "Secondary",
  // },
  render: () => (
    <div className="bg-gray-100 p-4 rounded">
      <Button buttonType="Secondary" buttonLabel="Secondary action button">
        Secondary Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Secondary button with transparent background and border. Used for secondary actions.",
      },
    },
  },
};

// Stroke button variant
export const Stroke: Story = {
  // args: {
  //   children: "Stroke Button",
  //   buttonLabel: "Stroke style button",
  //   buttonType: "Stroke",
  // },
  render: () => (
    <div className="bg-black p-4 rounded">
      <Button buttonType="Stroke" buttonLabel="Stroke action button">
        Stroke Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stroke button with border and transparent background. Fills with color on hover.",
      },
    },
  },
};

// Stroke Blue button variant
export const StrokeBlue: Story = {
  args: {
    children: "Stroke Blue Button",
    buttonLabel: "Blue stroke button",
    buttonType: "Stroke-blue",
  },
  parameters: {
    docs: {
      description: {
        story: "Blue stroke button with subtle hover effect.",
      },
    },
  },
};

// Emphasize button variant
export const Emphasize: Story = {
  args: {
    children: "Emphasize Button",
    buttonLabel: "Emphasized action button",
    buttonType: "Emphasize",
  },
  parameters: {
    docs: {
      description: {
        story: "Emphasized button with distinct background. Used for important actions.",
      },
    },
  },
};

// Disabled state examples
export const DisabledButtons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 p-4 bg-[#efeff1]">
      <Button buttonType="Primary" buttonLabel="Disabled primary" disabled>
        Disabled Primary
      </Button>
      <Button buttonType="Secondary" buttonLabel="Disabled secondary" disabled>
        Disabled Secondary
      </Button>
      <Button buttonType="Stroke" buttonLabel="Disabled stroke" disabled>
        Disabled Stroke
      </Button>
      <Button buttonType="Stroke-blue" buttonLabel="Disabled stroke blue" disabled>
        Disabled Stroke Blue
      </Button>
      <Button buttonType="Emphasize" buttonLabel="Disabled emphasize" disabled>
        Disabled Emphasize
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants in disabled state.",
      },
    },
  },
};

// Link buttons example
export const LinkButtons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 p-4 bg-[#efeff1]">
      <Button buttonType="Primary" buttonLabel="Primary link" href="#">
        Primary Link
      </Button>
      <Button buttonType="Secondary" buttonLabel="Secondary link" href="#">
        Secondary Link
      </Button>
      <Button buttonType="Stroke" buttonLabel="Stroke link" href="#">
        Stroke Link
      </Button>
      <Button buttonType="Stroke-blue" buttonLabel="Stroke blue link" href="#">
        Stroke Blue Link
      </Button>
      <Button buttonType="Emphasize" buttonLabel="Emphasize link" href="#">
        Emphasize Link
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button variants rendered as links using the href prop.",
      },
    },
  },
};
