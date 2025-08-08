import type { Preview } from "@storybook/nextjs";
import "../styles/globals.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: "tag",
      defaultName: "Documentation",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#333333",
        },
        {
          name: "gray",
          value: "#f5f5f5",
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        large: {
          name: "Large Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
};

// Add Lora font for Storybook
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export default preview;
