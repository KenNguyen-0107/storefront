import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Input component that wraps an input element in a label with accessibility features. Accepts all standard input props plus an optional ariaLabel for enhanced accessibility. Styled with Tailwind CSS classes for consistent design.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search", "radio", "checkbox"],
      description: "HTML input type attribute",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the input (used for aria-label)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the input is read-only",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    className: {
      control: "text",
      description: "CSS classes to apply to the input",
    },
    value: {
      control: "text",
      description: "Input value (controlled)",
    },
    defaultValue: {
      control: "text",
      description: "Default input value (uncontrolled)",
    },
    minLength: {
      control: "number",
      description: "Minimum length of input",
    },
    maxLength: {
      control: "number",
      description: "Maximum length of input",
    },
    pattern: {
      control: "text",
      description: "Regex pattern for validation",
    },
    onChange: {
      action: "changed",
      description: "Change event handler",
    },
    onFocus: {
      action: "focused",
      description: "Focus event handler",
    },
    onBlur: {
      action: "blurred",
      description: "Blur event handler",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base input classes from page.tsx
const INPUT_BASE_CLASS =
  "font-accent border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 md:text-sm font-lora h-14 p-4 rounded border-[#8C8B9080] border-opacity-50 placeholder:text-muted placeholder:opacity-80 text-base bg-white";

const INPUT_NUMBER_CLASS =
  "font-accent w-[80] border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 md:text-sm font-lora h-10 p-1 rounded border-[#8C8B9080] border-opacity-50 placeholder:text-muted placeholder:opacity-80 text-base bg-white text-center";

const INPUT_RADIO_CLASS =
  "font-accent w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus-visible:outline-none";

const INPUT_CHECKBOX_CLASS =
  "font-accent w-6 h-6 rounded border-2 border-gray-300 bg-white checked:bg-[#283270] checked:border-transparent cursor-pointer transition-colors duration-200 appearance-none relative checked:after:content-['✓'] checked:after:content-color[#fff] checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:text-[#fff] checked:after:text-xs checked:after:flex checked:after:items-center checked:after:justify-center checked:after:font-bold sm:w-7 sm:h-7 md:w-6 md:h-6";

// Text Input - Default styled with project's Tailwind classes
export const Default: Story = {
  args: {
    placeholder: "Input text",
    ariaLabel: "Default text input",
    className: INPUT_BASE_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Default text input with full project styling including focus states, borders, and responsive design.",
      },
    },
  },
};

// Text Input with Default Value and Validation
export const WithDefaultValue: Story = {
  args: {
    defaultValue: "Default Value",
    placeholder: "Input text",
    ariaLabel: "Text input with default value",
    className: INPUT_BASE_CLASS,
    minLength: 1,
    maxLength: 10,
    required: true,
    pattern: "[a-zA-Z0-9]+",
    title: "Only letters and numbers are allowed",
    id: "input-text",
    name: "input-text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text input with validation (minLength, maxLength, pattern) and default value, exactly matching the project's implementation.",
      },
    },
  },
};

// Read Only Input
export const ReadOnly: Story = {
  args: {
    placeholder: "Read only",
    readOnly: true,
    ariaLabel: "Read-only input",
    className: INPUT_BASE_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Read-only input field that cannot be edited by users.",
      },
    },
  },
};

// Radio Input
export const Radio: Story = {
  args: {
    type: "radio",
    placeholder: "Input Radio",
    ariaLabel: "Radio input",
    className: INPUT_RADIO_CLASS,
    name: "radio-group",
  },
  parameters: {
    docs: {
      description: {
        story: "Radio input button with custom styling for dark mode support.",
      },
    },
  },
};

// Password Input
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    ariaLabel: "Password input",
    className: INPUT_BASE_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Password input field with masked characters.",
      },
    },
  },
};

// Number Input
export const Number: Story = {
  args: {
    type: "number",
    value: 9,
    ariaLabel: "Number input",
    className: INPUT_NUMBER_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Number input with centered text and compact styling, matching the project's number input design.",
      },
    },
  },
};

// Checkbox Input
export const Checkbox: Story = {
  args: {
    type: "checkbox",
    ariaLabel: "Checkbox input",
    className: INPUT_CHECKBOX_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Custom styled checkbox with checkmark icon and responsive sizing (sm:w-7 sm:h-7 md:w-6 md:h-6).",
      },
    },
  },
};

// Disabled Input
export const Disabled: Story = {
  args: {
    placeholder: "Disabled Input",
    disabled: true,
    ariaLabel: "Disabled input",
    className: INPUT_BASE_CLASS,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled input with reduced opacity and gray styling, matching the project's disabled state design.",
      },
    },
  },
};

// // All Input Types Showcase
// export const AllInputTypes: Story = {
//   render: () => (
//     <div className="flex flex-row space-x-4 p-6 bg-[#f5f5f5] flex-wrap gap-4">
//       <Input
//         placeholder="Input text"
//         className={INPUT_BASE_CLASS}
//         ariaLabel="Text input"
//         minLength={1}
//         maxLength={10}
//         required
//         pattern="[a-zA-Z0-9]+"
//         title="Only letters and numbers are allowed"
//         defaultValue="Default Value"
//         name="input-text"
//       />
//       <Input placeholder="Read only" readOnly className={INPUT_BASE_CLASS} ariaLabel="Read-only input" />
//       <Input
//         type="radio"
//         placeholder="Input Radio"
//         className={INPUT_RADIO_CLASS}
//         name="demo-radio"
//         ariaLabel="Radio input"
//       />
//       <Input
//         placeholder="Enter your password"
//         type="password"
//         className={INPUT_BASE_CLASS}
//         ariaLabel="Password input"
//       />
//       <Input type="number" value={9} className={INPUT_NUMBER_CLASS} ariaLabel="Number input" />
//       <Input type="checkbox" className={INPUT_CHECKBOX_CLASS} ariaLabel="Checkbox input" />
//       <Input disabled className={INPUT_BASE_CLASS} placeholder="Disabled Input" ariaLabel="Disabled input" />
//     </div>
//   ),
//   parameters: {
//     layout: "fullscreen",
//     docs: {
//       description: {
//         story:
//           "All input types displayed together with the exact styling from src/app/components/page.tsx, including the background container.",
//       },
//     },
//   },
// };

// // Interactive Example
// export const Interactive: Story = {
//   args: {
//     placeholder: "Type here to see events...",
//     ariaLabel: "Interactive input",
//     className: INPUT_BASE_CLASS,
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           "Interactive input demonstrating onChange, onFocus, onBlur, and onClick events. Check the Actions panel below to see events firing.",
//       },
//     },
//   },
// };
