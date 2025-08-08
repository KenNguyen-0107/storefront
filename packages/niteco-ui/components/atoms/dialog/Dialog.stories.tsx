import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./index";

const meta = {
  title: "Atoms/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["center", "top", "bottom"],
      description: "Position of the dialog on the screen",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      description: "Size of the dialog",
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the dialog is open or closed",
    },
    header: {
      control: "text",
      description: "Content for the dialog header",
    },
    footer: {
      control: "text",
      description: "Content for the dialog footer",
    },
    isPortal: {
      control: "boolean",
      description: "Whether to render the dialog in a portal",
    },
    onClose: {
      action: "closed",
      description: "Function called when the dialog is closed",
    },
    dialogClasses: {
      control: "object",
      description: "Custom classes for the dialog",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for the dialog",
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const DialogWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Dialog
      </button>

      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id="dialog-story"
      >
        {args.children || "Dialog content goes here"}
      </Dialog>
    </div>
  );
};

// Basic dialog
export const Default: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "md",
    header: "Dialog Title",
    children: "This is a basic dialog with default settings.",
    isOpen: false,
    footer: (
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Confirm
        </button>
      </div>
    ),
  },
};

// Small dialog
export const Small: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "sm",
    header: "Small Dialog",
    children: "This is a small-sized dialog.",
    isOpen: false,
    footer: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        OK
      </button>
    ),
  },
};

// Large dialog
export const Large: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "lg",
    header: "Large Dialog",
    isOpen: false,
    children: (
      <div>
        <p className="mb-4">This is a large-sized dialog with more content.</p>
        <p className="mb-4">
          You can fit more information in this larger dialog.
        </p>
        <p>It's useful for forms and more complex content.</p>
      </div>
    ),
    footer: (
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    ),
  },
};

// Full screen dialog
export const FullScreen: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "full",
    header: "Full Screen Dialog",
    isOpen: false,
    children: (
      <div className="min-h-[50vh]">
        <p className="mb-4">
          This is a full-screen dialog that takes up the entire viewport.
        </p>
        <p>
          It's useful for mobile interfaces or when you need to display a lot of
          content.
        </p>
      </div>
    ),
    footer: (
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Continue
        </button>
      </div>
    ),
  },
};

// Top placement
export const TopPlacement: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "top",
    size: "md",
    header: "Top Placement",
    isOpen: false,
    children: "This dialog is positioned at the top of the screen.",
    footer: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    ),
  },
};

// Bottom placement
export const BottomPlacement: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "bottom",
    size: "md",
    header: "Bottom Placement",
    isOpen: false,
    children: "This dialog is positioned at the bottom of the screen.",
    footer: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    ),
  },
};

// Without header
export const WithoutHeader: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "md",
    isOpen: false,
    children: "This is a dialog without a header section.",
    footer: (
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
      </div>
    ),
  },
};

// Without footer
export const WithoutFooter: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "md",
    header: "No Footer",
    isOpen: false,
    children: "This is a dialog without a footer section.",
  },
};

// Custom styling
export const CustomStyling: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "md",
    header: "Custom Styling",
    isOpen: false,
    children: "This dialog has custom styling applied to various parts.",
    footer: (
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
        Close
      </button>
    ),
    dialogClasses: {
      dialog: {
        base: "bg-gray-900 text-white shadow-xl rounded-xl",
      },
      header: {
        container:
          "flex items-center justify-between p-6 border-b border-gray-700",
        title: "text-xl font-bold text-purple-300",
      },
      closeButton: {
        button:
          "p-1 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500",
        icon: "w-5 h-5 text-purple-300",
      },
      content: {
        base: "p-6 text-gray-300",
      },
      footer: {
        base: "flex items-center justify-end gap-3 p-6 border-t border-gray-700 bg-gray-800",
      },
    },
  },
};

// Nested Dialog Example
const NestedDialogWrapper = (args: any) => {
  const [isOuterOpen, setIsOuterOpen] = useState(false);
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOuterOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Outer Dialog
      </button>

      <Dialog
        placement="center"
        size="md"
        header="Outer Dialog"
        isOpen={isOuterOpen}
        onClose={() => setIsOuterOpen(false)}
        id="outer-dialog"
      >
        <div className="space-y-4">
          <p>
            This is the outer dialog. You can open another dialog from here.
          </p>
          <button
            onClick={() => setIsInnerOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Open Inner Dialog
          </button>
        </div>

        <Dialog
          placement="center"
          size="sm"
          header="Inner Dialog"
          isOpen={isInnerOpen}
          onClose={() => setIsInnerOpen(false)}
          id="inner-dialog"
        >
          <div className="space-y-4">
            <p>This is a nested dialog inside the outer dialog.</p>
            <p>
              Focus trap and keyboard navigation work across nested dialogs.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setIsInnerOpen(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close Inner Dialog
            </button>
          </div>
        </Dialog>
      </Dialog>
    </div>
  );
};

export const NestedDialogs: Story = {
  render: () => <NestedDialogWrapper />,
  args: {
    isOpen: false,
    children: "This content is overridden by the NestedDialogWrapper component",
  },
};

// Scrollable Content Dialog
export const ScrollableContent: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    placement: "center",
    size: "md",
    header: "Scrollable Content",
    isOpen: false,
    children: (
      <div className="max-h-[300px] overflow-y-auto">
        <p className="mb-4">
          This dialog contains content that can be scrolled.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="mb-4">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc
            nisl aliquet nunc, quis aliquam nisl nisl eget nisl.
          </p>
        ))}
      </div>
    ),
    footer: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    ),
  },
};
