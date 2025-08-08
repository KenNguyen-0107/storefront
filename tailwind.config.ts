import { safelist } from "./generic-cms/tailwind.safelist";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist,
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "2000px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "var(--space-2)",
        screens: {
          sm: "100%",
          md: "720px",
          lg: "960px",
          xl: "1200px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          light: "rgb(var(--color-primary) / 0.8)",
          dark: "rgb(var(--color-primary) / 1.2)",
        },
        black: {
          DEFAULT: "rgb(var(--color-black))",
          light: "rgb(var(--color-error) / 0.8)",
          dark: "rgb(var(--color-error) / 1.2)",
        },
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
        accent: ["var(--font-accent)"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
      },
      lineHeight: {
        sm: "var(--leading-sm)",
        md: "var(--leading-md)",
        lg: "var(--leading-lg)",
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        20: "var(--space-20)",
        10: "var(--space-10)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      keyframes: {
        slideDown: {
          from: { height: "0", opacity: "0" },
          to: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms ease-out",
        slideUp: "slideUp 300ms ease-out",
      },
    },
  },
  plugins: [],
} as Config;
