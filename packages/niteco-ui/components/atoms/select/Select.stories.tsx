import type { Meta, StoryObj } from "@storybook/react";
import Select from "./index";
import { ISelectOption } from "./select.type";

// Sample options for all stories
const sampleOptions: ISelectOption[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
];

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable Select component with keyboard navigation support, accessibility features, and customizable styling.",
      },
    },
  },
  args: {
    // Default args that apply to all stories
    options: sampleOptions,
    placeholder: "Select an option",
    disabled: false,
  },
  argTypes: {
    options: {
      control: "object",
      description: "Array of options for the select dropdown",
    },
    defaultValue: {
      control: "text",
      description: "The default selected value",
    },
    onChange: {
      action: "changed",
      description: "Callback when selection changes",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no option is selected",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    selectStyles: {
      control: "object",
      description: "Custom styles for the select component",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Default Select
export const Default: Story = {
  render: (args) => {
    return (
      <div className="w-[300px]">
        <Select {...args} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Default select component with no pre-selected value.",
      },
    },
  },
};

// Select with default value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: "option2",
  },
  render: (args) => {
    return (
      <div className="w-[300px]">
        <Select {...args} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Select component with a pre-selected value.",
      },
    },
  },
};

// Disabled Select
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled select component that cannot be interacted with.",
      },
    },
  },
};

// Select with custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Please choose from the list...",
  },
  parameters: {
    docs: {
      description: {
        story: "Select component with a custom placeholder text.",
      },
    },
  },
};

// Select in a responsive layout
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Width Select
          </label>
          <Select options={sampleOptions} placeholder="Full width select" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Left Column
            </label>
            <Select options={sampleOptions} placeholder="Left select" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Right Column
            </label>
            <Select options={sampleOptions} placeholder="Right select" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Select components in a responsive layout to demonstrate how they adapt to different container widths.",
      },
    },
  },
};
