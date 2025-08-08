import { RowData, StyleProps } from "./types/renderPayload";

const PIXEL_TO_TAILWIND_MAP: { [key: number]: string } = {
  0: "0",
  4: "1", // 4px = 0.25rem
  8: "2", // 8px = 0.5rem
  10: "2", // 12px = 0.75rem
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

function addResponsivePrefix(classes: string, prefix: string): string {
  if (!classes) return "";
  return classes
    .split(" ")
    .map((cls) => `${prefix}${cls}`)
    .join(" ");
}

function textAlignToTailwindClass(value: string, type?: string): string {
  const textAlignMap: { [key: string]: string } = {
    left: type === "ImageTop" || type === "ImageBottom" ? "flex items-start" : "flex justify-start",
    right: type === "ImageTop" || type === "ImageBottom" ? "flex items-end" : "flex justify-end",
    center: type === "ImageTop" || type === "ImageBottom" ? "flex items-center" : "flex justify-center",
  };
  return textAlignMap[value] || "";
}

function verticalAlignToTailwindClass(value: string, type?: string): string {
  const verticalAlignMap: { [key: string]: string } = {
    top: type === "ImageTop" || type === "ImageBottom" ? "flex justify-start" : "flex items-start",
    bottom: type === "ImageTop" || type === "ImageBottom" ? "flex justify-end" : "flex items-end",
    middle: type === "ImageTop" || type === "ImageBottom" ? "flex justify-center" : "flex items-center",
  };
  return verticalAlignMap[value] || "";
}

/**
 * Render tất cả spacing và alignment classes từ StyleProps trong một function
 * @param style - StyleProps object
 * @returns Object chứa tất cả classes và className hoàn chỉnh
 */

export function renderVerticalClasses(
  style?: StyleProps,
  contentImagePosition: string = "ImageTop"
): {
  classes: {
    textAlign?: string;
    verticalAlign?: string;
    textAlignDesktop?: string;
    verticalAlignDesktop?: string;
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

  const { textAlign, verticalAlign, textAlignDesktop, verticalAlignDesktop } = style.inlineStyles;

  const classes: any = {};

  if (textAlign !== undefined) {
    const textAlignClass = textAlignToTailwindClass(textAlign, contentImagePosition);
    if (textAlignClass) {
      classes.textAlign = textAlignClass;
    }
  }

  if (verticalAlign !== undefined) {
    classes.verticalAlign = verticalAlignToTailwindClass(verticalAlign, contentImagePosition);
  }

  if (textAlignDesktop !== undefined) {
    const desktopTextAlignClass = textAlignToTailwindClass(textAlignDesktop, contentImagePosition);
    if (desktopTextAlignClass) {
      classes.textAlignDesktop = addResponsivePrefix(desktopTextAlignClass, "md:");
    }
  }
  if (verticalAlignDesktop !== undefined) {
    const desktopVerticalAlignClass = verticalAlignToTailwindClass(verticalAlignDesktop, contentImagePosition);
    if (desktopVerticalAlignClass) {
      classes.verticalAlignDesktop = addResponsivePrefix(desktopVerticalAlignClass, "md:");
    }
  }

  const spacingClasses = Object.values(classes).filter(Boolean);
  const spacingClassName = spacingClasses.join(" ") || "";

  const existingClassName = style.className || "";
  const finalClassName = [existingClassName, spacingClassName].filter(Boolean).join(" ");

  return {
    classes,
    className: finalClassName,
    spacingClassName,
  };
}

export function renderSpacingClasses(
  style?: StyleProps,
  from?: string | "no-grid"
): {
  classes: {
    textAlign?: string;
    verticalAlign?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    textAlignDesktop?: string;
    verticalAlignDesktop?: string;
    paddingTopDesktop?: string;
    paddingRightDesktop?: string;
    paddingBottomDesktop?: string;
    paddingLeftDesktop?: string;
    marginTopDesktop?: string;
    marginRightDesktop?: string;
    marginBottomDesktop?: string;
    marginLeftDesktop?: string;
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

  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    textAlign,
    verticalAlign,
    paddingTopDesktop,
    paddingRightDesktop,
    paddingBottomDesktop,
    paddingLeftDesktop,
    marginTopDesktop,
    marginRightDesktop,
    marginBottomDesktop,
    marginLeftDesktop,
    textAlignDesktop,
    verticalAlignDesktop,
  } = style.inlineStyles;

  const classes: any = {};

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

  if (paddingTopDesktop !== undefined) {
    classes.paddingTopDesktop = `md:pt-${pixelToTailwindSuffix(paddingTopDesktop)}`;
  }
  if (paddingRightDesktop !== undefined) {
    classes.paddingRightDesktop = `md:pr-${pixelToTailwindSuffix(paddingRightDesktop)}`;
  }
  if (paddingBottomDesktop !== undefined) {
    classes.paddingBottomDesktop = `md:pb-${pixelToTailwindSuffix(paddingBottomDesktop)}`;
  }
  if (paddingLeftDesktop !== undefined) {
    classes.paddingLeftDesktop = `md:pl-${pixelToTailwindSuffix(paddingLeftDesktop)}`;
  }
  if (marginTopDesktop !== undefined) {
    classes.marginTopDesktop = `md:mt-${pixelToTailwindSuffix(marginTopDesktop)}`;
  }
  if (marginRightDesktop !== undefined) {
    classes.marginRightDesktop = `md:mr-${pixelToTailwindSuffix(marginRightDesktop)}`;
  }
  if (marginBottomDesktop !== undefined) {
    classes.marginBottomDesktop = `md:mb-${pixelToTailwindSuffix(marginBottomDesktop)}`;
  }
  if (marginLeftDesktop !== undefined) {
    classes.marginLeftDesktop = `md:ml-${pixelToTailwindSuffix(marginLeftDesktop)}`;
  }

  const spacingClasses = Object.values(classes).filter(Boolean);
  const spacingClassName = spacingClasses.join(" ") || "";

  const existingClassName = style.className || "";
  const finalClassName = [existingClassName, spacingClassName].filter(Boolean).join(" ");

  return {
    classes,
    className: finalClassName,
    spacingClassName,
  };
}

export function renderSpacingClassName(style?: StyleProps): string {
  const result = renderSpacingClasses(style);
  return result.spacingClassName;
}

export function renderClassName(style?: StyleProps): string {
  const result = renderSpacingClasses(style);
  return result.className;
}

function getGapClass(value?: number, axis: "x" | "y" = "x") {
  if (!value) return "";
  const map: { [key: number]: string } = {
    4: `${axis === "x" ? "gap-x-1" : "gap-y-1"}`,
    8: `${axis === "x" ? "gap-x-2" : "gap-y-2"}`,
    12: `${axis === "x" ? "gap-x-3" : "gap-y-3"}`,
    16: `${axis === "x" ? "gap-x-4" : "gap-y-4"}`,
    24: `${axis === "x" ? "gap-x-6" : "gap-y-6"}`,
    32: `${axis === "x" ? "gap-x-8" : "gap-y-8"}`,
    40: `${axis === "x" ? "gap-x-10" : "gap-y-10"}`,
  };
  return map[value] || `${axis === "x" ? `gap-x-[${value}px]` : `gap-y-[${value}px]`}`;
}

/**
 * Render gap classes cho mobile và desktop từ RowData
 */
export function renderGap(row: RowData): string {
  if (!row) return "";
  const { contentSpaceX, contentSpaceXDesktop, contentSpaceY, contentSpaceYDesktop } = row;

  const classes: string[] = [];

  // Mobile
  if (contentSpaceX) classes.push(getGapClass(contentSpaceX, "x"));
  if (contentSpaceY) classes.push(getGapClass(contentSpaceY, "y"));

  // Desktop (md:)
  if (contentSpaceXDesktop) classes.push(`md:${getGapClass(contentSpaceXDesktop, "x")}`);
  if (contentSpaceYDesktop) classes.push(`md:${getGapClass(contentSpaceYDesktop, "y")}`);

  return classes.filter(Boolean).join(" ") || "";
}
