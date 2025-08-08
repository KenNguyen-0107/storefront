import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Layout & Positioning
    "inline-flex",
    "items-center",
    "justify-center",

    // Typography
    "font-primary",
    "lg:text-base",
    "text-sm",
    "font-medium",
    "uppercase",
    "font-frutiger-bold",

    // Spacing & Dimensions
    "px-4",
    "lg:px-6",
    "py-4",
    "h-10",
    "lg:h-14",

    // Colors & Backgrounds
    "text-white",
    "text-primary",
    "bg-btn-primary-bg",
    "bg-btn-primary-hover-bg",
    "bg-btn-secondary-bg",
    "bg-btn-emphasize-bg",
    "bg-btn-emphasize-hover-bg",
    "text-[#283270]",

    // Borders
    "border",
    "border-btn-stroke-bg",
    "border-btn-stroke-blue-bg",

    // Interactive States
    "cursor-pointer",
    "transition-colors",
    "hover:bg-white",
    "hover:text-white",
    "hover:bg-btn-primary-bg",
    "hover:text-primary",

    // Disabled States
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "disabled:hover:bg-transparent",
    "disabled:hover:text-white",
    "disabled:hover:border-btn-stroke-bg",
    "disabled:hover:bg-btn-primary-bg",
    "disabled:hover:bg-btn-secondary-bg",
    "disabled:hover:bg-btn-emphasize-bg",
    "disabled:hover:border-btn-stroke-blue-bg",
    "h-[700px]",
    "h-[334px]",
    "md:h-[334px]",
    "h-[167px]",
    "h-[252px]",
    "h-[400px]",
    "md:h-[700px]",
    "md:h-[340px]",
    "h-[340px]",
    "h-[228px]",
    "md:h-[228px]",
    "max-w-lg",
  ],
  theme: {
    // ... existing code ...
  },
};
