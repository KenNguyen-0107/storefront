import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  BTN_PRIMARY,
  BTN_SECONDARY,
  BTN_STROKE,
  BTN_STROKE_BLUE,
  BTN_EMPHASIZE,
} from "../styles/buttons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getDefaultPadding = () => {
  return "md:px-4 md:py-6 py-4";
};

const getButtonClass = (type: string) => {
  if (!type) return BTN_PRIMARY;
  switch (type.trim().toLowerCase()) {
    case "primary":
      return BTN_PRIMARY;
    case "secondary":
      return BTN_SECONDARY;
    case "stroke":
      return BTN_STROKE;
    case "stroke-blue":
      return BTN_STROKE_BLUE;
    case "emphasize":
      return BTN_EMPHASIZE;
    default:
      return BTN_PRIMARY;
  }
};

export { getButtonClass, getDefaultPadding };
