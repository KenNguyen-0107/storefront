import { StyleProps } from "../../composable-content-engine/types/renderPayload";

const PIXEL_TO_TAILWIND_MAP: { [key: number]: string } = {
  4: "1", // 4px = 0.25rem
  8: "2", // 8px = 0.5rem
  12: "3", // 12px = 0.75rem
  16: "4", // 16px = 1rem
  24: "6", // 24px = 1.5rem
  32: "8", // 32px = 2rem
  40: "10", // 40px = 2.5rem
  80: "20", // 80px = 5rem
};

/**
 * Convert pixel value to Tailwind class suffix
 * @param value - Pixel value
 * @returns Tailwind class suffix or arbitrary value
 */
function pixelToTailwindSuffix(value: number): string {
  const suffix = PIXEL_TO_TAILWIND_MAP[value];
  return suffix ? suffix : `[${value}px]`;
}

/**
 * Render tất cả spacing classes từ StyleProps trong một function
 * @param style - StyleProps object
 * @returns Object chứa tất cả spacing classes và className hoàn chỉnh
 */
export function renderSpacingClasses(style?: StyleProps): {
  classes: {
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
  };
  className: string;
  spacingClassName: string;
} {
  if (!style?.inlineStyles) {
    return {
      classes: {},
      className: style?.className || "",
      spacingClassName: "",
    };
  }

  const { paddingTop, paddingRight, paddingBottom, paddingLeft, marginTop, marginRight, marginBottom, marginLeft } =
    style.inlineStyles;

  // Tạo object chứa tất cả classes
  const classes: any = {};

  // Xử lý padding classes
  if (paddingTop !== undefined) {
    classes.paddingTop = `pt-${pixelToTailwindSuffix(paddingTop)}`;
  }
  if (paddingRight !== undefined) {
    classes.paddingRight = `pr-${pixelToTailwindSuffix(paddingRight)}`;
  }
  if (paddingBottom !== undefined) {
    classes.paddingBottom = `pb-${pixelToTailwindSuffix(paddingBottom)}`;
  }
  if (paddingLeft !== undefined) {
    classes.paddingLeft = `pl-${pixelToTailwindSuffix(paddingLeft)}`;
  }

  // Xử lý margin classes
  if (marginTop !== undefined) {
    classes.marginTop = `mt-${pixelToTailwindSuffix(marginTop)}`;
  }
  if (marginRight !== undefined) {
    classes.marginRight = `mr-${pixelToTailwindSuffix(marginRight)}`;
  }
  if (marginBottom !== undefined) {
    classes.marginBottom = `mb-${pixelToTailwindSuffix(marginBottom)}`;
  }
  if (marginLeft !== undefined) {
    classes.marginLeft = `ml-${pixelToTailwindSuffix(marginLeft)}`;
  }

  // Tạo spacing className string
  const spacingClasses = Object.values(classes).filter(Boolean);
  const spacingClassName = spacingClasses.join(" ");

  // Kết hợp với className có sẵn
  const existingClassName = style.className || "";
  const finalClassName = [existingClassName, spacingClassName].filter(Boolean).join(" ");

  return {
    classes,
    className: finalClassName,
    spacingClassName,
  };
}
