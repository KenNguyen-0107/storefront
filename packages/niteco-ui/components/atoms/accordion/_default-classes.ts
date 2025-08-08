import { cn } from "../../../utils/utils";

export const ACCORDION_STYLES = {
  base: {
    wrapper: "w-full font-primary",
    defaultBorder: "",
    flushBorder: "border-0",
  },
  item: {
    group: "group",
    flushBorder: "border-b border-[var(--color-border-accordion)]",
    defaultBorder: "border-b border-[var(--color-border-accordion)]",
    lastItemFlush: "border-b-0",
  },
  header: cn(
    "w-full py-4  sm:py-4 cursor-pointer",
    "text-left font-medium text-gray-900",
    "flex items-center justify-between",
    " focus:outline-none focus:none",
    "text-sm sm:text-base",
  ),
  content: cn(
    "pb-4 sm:pb-4",
    "text-muted",
    "border-t border-[var(--color-border-accordion)]",
  ),
  icon: {
    base: "w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 ",
    open: "rotate-180",
    closed: "rotate-0",
  },
  contentContainer: {
    base: "overflow-hidden",
    open: "max-h-screen opacity-100",
    closed: "max-h-0 opacity-0",
  },
  title: cn(
    "flex-1 text-left font-primary text-blue text-left text-md lg:text-xl uppercase",
  ),
};
