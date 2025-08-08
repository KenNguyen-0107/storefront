import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { IAccordionItem } from "./Accordion.type";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible Accordion component that supports single or multiple open items, different variants, and customizable styling. Features smooth animations and accessibility support.",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description: "Array of accordion items with id, title, and content",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "flush"],
      description: "Visual variant of the accordion",
      defaultValue: "default",
    },
    allowMultiple: {
      control: "boolean",
      description: "Whether multiple items can be open at the same time",
      defaultValue: false,
    },
    defaultOpenItems: {
      control: "object",
      description: "Array of item IDs that should be open by default",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the accordion",
    },
    onItemToggle: {
      action: "toggled",
      description: "Callback fired when an item is toggled",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample data for stories
const basicItems: IAccordionItem[] = [
  {
    id: "item1",
    title: "Getting Started",
    content: (
      <div>
        <p>Welcome to our platform! This section covers the basics of getting started.</p>
        <ul className="mt-2 ml-4">
          <li>• Create your account</li>
          <li>• Set up your profile</li>
          <li>• Explore the dashboard</li>
        </ul>
      </div>
    ),
  },
  {
    id: "item2",
    title: "Features & Benefits",
    content: (
      <div>
        <p>Discover the powerful features that make our platform stand out:</p>
        <ul className="mt-2 ml-4">
          <li>• Advanced analytics dashboard</li>
          <li>• Real-time collaboration tools</li>
          <li>• Customizable workflows</li>
          <li>• Enterprise-grade security</li>
        </ul>
      </div>
    ),
  },
  {
    id: "item3",
    title: "Pricing & Plans",
    content: (
      <div>
        <p>Choose the plan that fits your needs:</p>
        <div className="mt-2 space-y-2">
          <div className="p-3 bg-gray-50 rounded">
            <strong>Basic Plan</strong> - $9/month
            <p className="text-sm text-gray-600">Perfect for individuals and small teams</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <strong>Pro Plan</strong> - $29/month
            <p className="text-sm text-gray-600">Advanced features for growing businesses</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <strong>Enterprise</strong> - Contact us
            <p className="text-sm text-gray-600">Custom solutions for large organizations</p>
          </div>
        </div>
      </div>
    ),
  },
];

const faqItems: IAccordionItem[] = [
  {
    id: "faq1",
    title: "How do I reset my password?",
    content: (
      <div>
        <p>To reset your password:</p>
        <ol className="mt-2 ml-4 space-y-1">
          <li>1. Go to the login page</li>
          <li>2. Click "Forgot Password"</li>
          <li>3. Enter your email address</li>
          <li>4. Check your email for reset instructions</li>
          <li>5. Follow the link to create a new password</li>
        </ol>
      </div>
    ),
  },
  {
    id: "faq2",
    title: "What payment methods do you accept?",
    content: (
      <div>
        <p>We accept the following payment methods:</p>
        <ul className="mt-2 ml-4">
          <li>• Credit Cards (Visa, MasterCard, American Express)</li>
          <li>• PayPal</li>
          <li>• Bank Transfer</li>
          <li>• Apple Pay & Google Pay</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          All payments are processed securely through our encrypted payment gateway.
        </p>
      </div>
    ),
  },
  {
    id: "faq3",
    title: "Can I cancel my subscription anytime?",
    content: (
      <div>
        <p>Yes, you can cancel your subscription at any time with no cancellation fees.</p>
        <p className="mt-2">When you cancel:</p>
        <ul className="mt-2 ml-4">
          <li>• You'll retain access until the end of your current billing period</li>
          <li>• Your data will be preserved for 30 days</li>
          <li>• You can reactivate your account anytime</li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq4",
    title: "Do you offer customer support?",
    content: (
      <div>
        <p>We provide comprehensive customer support through multiple channels:</p>
        <ul className="mt-2 ml-4">
          <li>• 24/7 Live Chat</li>
          <li>• Email Support (response within 2 hours)</li>
          <li>• Phone Support (business hours)</li>
          <li>• Extensive Documentation & Tutorials</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Premium customers get priority support with faster response times.</p>
      </div>
    ),
  },
];

// Basic accordion example
export const Default: Story = {
  args: {
    items: basicItems,
    variant: "default",
    allowMultiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic accordion with default styling. Only one item can be open at a time.",
      },
    },
  },
};

// Multiple items can be open
export const AllowMultiple: Story = {
  args: {
    items: faqItems,
    variant: "default",
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion that allows multiple items to be open simultaneously.",
      },
    },
  },
};

// With default open items
export const WithDefaultOpen: Story = {
  args: {
    items: basicItems,
    variant: "default",
    allowMultiple: false,
    defaultOpenItems: ["item1"],
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with the first item open by default.",
      },
    },
  },
};

// Multiple default open items
export const MultipleDefaultOpen: Story = {
  args: {
    items: faqItems,
    variant: "flush",
    allowMultiple: true,
    defaultOpenItems: ["faq1", "faq3"],
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with multiple items open by default (requires allowMultiple: true).",
      },
    },
  },
};

// Interactive example with onItemToggle
export const Interactive: Story = {
  render: () => {
    const handleToggle = (itemId: string, isOpen: boolean) => {
      console.log(`Item ${itemId} is now ${isOpen ? "open" : "closed"}`);
    };

    return (
      <div className="max-w-2xl">
        <h3 className="text-lg font-medium mb-4">Frequently Asked Questions</h3>
        <Accordion items={faqItems} variant="default" allowMultiple={true} onItemToggle={handleToggle} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive accordion with onItemToggle callback. Check the console to see toggle events.",
      },
    },
  },
};

// Custom styling example
export const CustomStyling: Story = {
  render: () => (
    <div className="max-w-3xl">
      <Accordion
        items={basicItems}
        variant="default"
        allowMultiple={false}
        className="bg-white rounded-lg shadow-lg border border-gray-200"
        defaultOpenItems={["item2"]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Accordion with custom styling applied through className prop.",
      },
    },
  },
};
