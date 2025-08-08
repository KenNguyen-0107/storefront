import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["inStock", "outOfStock"],
      description: "The variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the badge (responsive)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    text: {
      control: "text",
      description: "Custom text to display in the badge",
    },
    ariaLabel: {
      control: "text",
      description: "Custom aria-label for accessibility",
    },
    role: {
      control: "text",
      description: "ARIA role for the badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InStock: Story = {
  args: {
    variant: "inStock",
    size: "md",
  },
};

export const OutOfStock: Story = {
  args: {
    variant: "outOfStock",
    size: "md",
  },
};

export const WithCustomClass: Story = {
  args: {
    variant: "inStock",
    size: "md",
    className: "shadow-lg border-2 border-green-300",
  },
};
