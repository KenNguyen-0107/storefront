import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkText } from "./Link.stories.mock";
const ButtonIcon = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8333 1.08337L6.99996 6.91671L1.16663 1.08337"
      stroke="#283270"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Create a mock ButtonLink for Storybook that doesn't depend on Next.js
const MockButtonLink = ({ className = "", iconPosition = "right", children, href, ...props }: any) => {
  const ButtonIcon = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8333 1.08337L6.99996 6.91671L1.16663 1.08337"
        stroke="#283270"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const leftIcon = iconPosition === "left" ? <ButtonIcon /> : undefined;
  const rightIcon = iconPosition === "right" ? <ButtonIcon /> : undefined;

  return (
    <LinkText
      className={`inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors ${className}`}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      href={href}
      {...props}
    >
      {children}
    </LinkText>
  );
};

const meta = {
  title: "Atoms/Link",
  component: LinkText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "URL to link to",
    },
    className: {
      control: "text",
      description: "CSS classes to apply",
    },
    clampText: {
      control: "boolean",
      description: "Whether to clamp text to one line",
    },
    leftIcon: {
      control: "text",
      description: "Icon to display on the left side",
    },
    rightIcon: {
      control: "text",
      description: "Icon to display on the right side",
    },
    children: {
      control: "text",
      description: "Link content",
    },
  },
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;
type ButtonLinkStory = StoryObj<typeof MockButtonLink>;

export const Default: Story = {
  args: {
    href: "https://example.com",
    children: "Click me",
    clampText: true,
    className:
      "inline-flex items-center justify-center lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed h-10 lg:h-14 text-white bg-btn-primary-bg hover:bg-btn-primary-hover-bg disabled:hover:bg-btn-primary-bg",
  },
  render: (args: React.ComponentProps<typeof LinkText>) => (
    <div className="w-[500px] flex justify-center">
      <LinkText {...args} />
    </div>
  ),
};

export const WithoutClamp: Story = {
  args: {
    href: "https://example.com",
    children: "This is a very long link text that would normally be clamped but in this case it will not be clamped",
    clampText: false,
  },
  render: (args: React.ComponentProps<typeof LinkText>) => (
    <div className="w-[200px]">
      <LinkText {...args} />
    </div>
  ),
};

export const WithClamp: Story = {
  args: {
    href: "https://example.com",
    children: "This is a very long link text that will be clamped to one line using the line-clamp-1 class",
    clampText: true,
  },
  render: () => (
    <div className="w-[200px]">
      <LinkText clampText={true}>
        This is a very long link text that would normally be clamped but in this case it will not be clamped
      </LinkText>
    </div>
  ),
};

// ButtonLink Stories
export const ButtonLinkRight: ButtonLinkStory = {
  args: {
    href: "https://example.com",
    children: "Button Link Right",
    iconPosition: "right",
    rightIcon: <ButtonIcon />,
  },
  render: (args: React.ComponentProps<typeof MockButtonLink>) => (
    <div className="w-[500px] flex justify-center">
      <LinkText {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "ButtonLink component with icon positioned on the right side.",
      },
    },
  },
};

export const ButtonLinkLeft: ButtonLinkStory = {
  args: {
    href: "https://example.com",
    children: "Button Link Left",
    iconPosition: "left",
    leftIcon: <ButtonIcon />,
  },
  render: (args: React.ComponentProps<typeof MockButtonLink>) => (
    <div className="w-[500px] flex justify-center">
      <LinkText {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "ButtonLink component with icon positioned on the left side.",
      },
    },
  },
};
