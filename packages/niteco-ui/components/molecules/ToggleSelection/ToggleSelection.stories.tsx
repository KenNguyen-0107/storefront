import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSelection } from "./ToggleSelection";

const meta: Meta<typeof ToggleSelection> = {
  title: "Molecules/ToggleSelection",
  component: ToggleSelection,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile ToggleSelection component that displays a list of selectable options as buttons. Supports single and multi-select modes, keyboard navigation (Tab to focus, Arrow keys to navigate, Enter/Space to select), and accessibility features. Can be configured with maximum height and scrolling for long option lists.",
      },
    },
  },
  argTypes: {
    options: { control: "object" },
    value: { control: "object" },
    defaultValue: { control: "object" },
    onChange: { action: "changed" },
    multiSelect: { control: "boolean" },
    disabled: { control: "boolean" },
    ariaLabel: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Layout direction of the options",
    },
    maxListHeight: { control: "text" },
  },
  args: {
    // Default args for all stories
    options: [
      { label: "1.65m", value: "1.65m" },
      { label: "1.52m", value: "1.52m" },
      { label: "1.83m", value: "1.83m" },
      { label: "1.22m", value: "1.22m" },
      { label: "0.91m", value: "0.91m" },
    ],
    onChange: (value) => console.log("Selection changed:", value),
    ariaLabel: "Select height",
    direction: "horizontal",
    maxListHeight: "500px",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleSelection>;

// Single-select default story
export const SingleSelect: Story = {
  args: {
    defaultValue: "1.65m",
    multiSelect: false,
  },
};

// Multi-select story
export const MultiSelect: Story = {
  args: {
    defaultValue: ["1.65m", "1.83m"],
    multiSelect: true,
    ariaLabel: "Select multiple heights",
  },
};

// Some options disabled
export const WithDisabledOptions: Story = {
  args: {
    options: [
      { label: "1.65m", value: "1.65m" },
      { label: "1.52m", value: "1.52m", disabled: true },
      { label: "1.83m", value: "1.83m" },
      { label: "1.22m", value: "1.22m", disabled: true },
      { label: "0.91m", value: "0.91m" },
    ],
    defaultValue: "1.65m",
  },
};

// Error state
export const WithError: Story = {
  args: {
    error: true,
    errorText: "Please select a valid height",
  },
};

// Fully disabled
export const FullyDisabled: Story = {
  args: {
    defaultValue: "1.65m",
    disabled: true,
  },
};

// Vertical direction
export const VerticalDirection: Story = {
  args: {
    defaultValue: "1.65m",
    direction: "vertical",
  },
};

// With max height and scroll
export const WithScroll: Story = {
  args: {
    options: [
      { label: "1.65m", value: "1.65m" },
      { label: "1.52m", value: "1.52m" },
      { label: "1.83m", value: "1.83m" },
      { label: "1.22m", value: "1.22m" },
      { label: "0.91m", value: "0.91m" },
      { label: "2.00m", value: "2.00m" },
      { label: "2.10m", value: "2.10m" },
      { label: "2.20m", value: "2.20m" },
      { label: "2.30m", value: "2.30m" },
      { label: "2.40m", value: "2.40m" },
    ],
    direction: "vertical",
    maxListHeight: "200px",
    multiSelect: true,
  },
};

// Keyboard Navigation
export const KeyboardNavigation: Story = {
  args: {
    defaultValue: "1.52m",
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates keyboard navigation. Tab to focus the component, use arrow keys to navigate between options, and press Enter or Space to select an option. Notice the visual focus indicator that appears when navigating with the keyboard.",
      },
    },
  },
};
