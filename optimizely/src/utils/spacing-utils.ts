export const SPACING_CHOICES = {
  none: {
    displayName: "0px",
    sortOrder: 10,
    value: 0,
  },
  sixteen_px: {
    displayName: "16px",
    sortOrder: 20,
    value: 16,
  },
  twenty_four_px: {
    displayName: "24px",
    sortOrder: 30,
    value: 24,
  },
  thirty_two_px: {
    displayName: "32px",
    sortOrder: 40,
    value: 32,
  },
  fourty_px: {
    displayName: "40px",
    sortOrder: 50,
    value: 40,
  },
  fourty_eight_px: {
    displayName: "48px",
    sortOrder: 60,
    value: 48,
  },
  fifty_px: {
    displayName: "50px",
    sortOrder: 70,
    value: 50,
  },
  eighty_px: {
    displayName: "80px",
    sortOrder: 80,
    value: 80,
  },
  minus_eighty_px: {
    displayName: "-80px",
    sortOrder: 80,
    value: 80,
  },
  one_hundred_sixty_px: {
    displayName: "160px",
    sortOrder: 90,
    value: 160,
  },
} as const;

export const SECTION_SPACING_CHOICES = {
  default: {
    mobile: "0",
    desktop: "0",
  },
  small: {
    mobile: "8px",
    desktop: "16px",
  },
  medium: {
    mobile: "16px",
    desktop: "24px",
  },
  large: {
    mobile: "32px",
    desktop: "40px",
  },
  xlarge: {
    mobile: "40px",
    desktop: "48px",
  },
} as const;

export type SpacingChoice = keyof typeof SPACING_CHOICES;

// Function để convert spacing value thành Tailwind class
export function getSpacingClass(
  value: SpacingChoice,
  type: "px" | "py" | "gap-x" | "gap-y" | "mt",
): string {
  const spacingValue = SPACING_CHOICES[value]?.value ?? 16;

  // Map pixel values to Tailwind classes
  const tailwindMap: Record<number, string> = {
    0: "0",
    16: "4",
    24: "6",
    32: "8",
    40: "10",
    48: "12",
    50: "12", // Closest to 50px
    80: "20",
    160: "40",
  };

  const tailwindValue = tailwindMap[spacingValue] ?? "4";
  return `${type}-${tailwindValue}`;
}

export function getSectionSpacing(
  contentSpaceY: keyof typeof SECTION_SPACING_CHOICES,
) {
  const spacing = SECTION_SPACING_CHOICES[contentSpaceY];

  if (!spacing) {
    return "gap-y-0";
  }

  // Convert pixel values to Tailwind gap classes
  const mobileValue = parseInt(spacing.mobile);
  const desktopValue = parseInt(spacing.desktop);

  // Map pixel values to Tailwind gap classes
  const getGapClass = (pixels: number): string => {
    const tailwindMap: Record<number, string> = {
      0: "0",
      8: "2",
      16: "4",
      24: "6",
      32: "8",
      40: "10",
      48: "12",
    };

    return `gap-y-${tailwindMap[pixels] ?? "0"}`;
  };

  const mobileClass = getGapClass(mobileValue);
  const desktopClass = getGapClass(desktopValue);

  // Nếu mobile và desktop giống nhau, chỉ return 1 class
  if (mobileValue === desktopValue) {
    return mobileClass;
  }

  // Nếu khác nhau, return responsive classes
  return `${mobileClass} md:${desktopClass}`;
}

// Function để tạo responsive classes
export function getResponsiveSpacingClasses(settings: {
  marginTop?: SpacingChoice;
  paddingX?: SpacingChoice;
  paddingXDesktop?: SpacingChoice;
  paddingY?: SpacingChoice;
  paddingYDesktop?: SpacingChoice;
  contentSpaceX?: SpacingChoice;
  contentSpaceXDesktop?: SpacingChoice;
  contentSpaceY?: SpacingChoice;
  contentSpaceYDesktop?: SpacingChoice;
}) {
  const {
    marginTop = "none",
    paddingX = "sixteen_px",
    paddingXDesktop = "sixteen_px",
    paddingY = "sixteen_px",
    paddingYDesktop = "sixteen_px",
    contentSpaceX = "sixteen_px",
    contentSpaceXDesktop = "sixteen_px",
    contentSpaceY = "sixteen_px",
    contentSpaceYDesktop = "sixteen_px",
  } = settings;

  const getResponsiveClass = (
    mobileValue: SpacingChoice,
    desktopValue: SpacingChoice,
    type: "px" | "py" | "gap-x" | "gap-y" | "mt",
  ) => {
    const mobileClass = getSpacingClass(mobileValue, type);
    const desktopClass = getSpacingClass(desktopValue, type);

    if (mobileValue === desktopValue) {
      return mobileClass;
    }

    return `${mobileClass} md:${desktopClass}`;
  };

  return {
    paddingX: getResponsiveClass(paddingX, paddingXDesktop, "px"),
    paddingY: getResponsiveClass(paddingY, paddingYDesktop, "py"),
    gapX: getResponsiveClass(contentSpaceX, contentSpaceXDesktop, "gap-x"),
    gapY: getResponsiveClass(contentSpaceY, contentSpaceYDesktop, "gap-y"),
  };
}
