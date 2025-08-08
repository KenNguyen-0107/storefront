// Function để apply background color theo Tailwind CSS
export function getBackgroundColorClass(
  backgroundColor: string | undefined,
): string {
  if (!backgroundColor) return "";
  backgroundColor = backgroundColor.toLowerCase();
  // Mapping các choices với Tailwind CSS classes
  const backgroundColorMap: Record<string, string> = {
    // Choices từ DefaultRow component
    muted: "bg-muted",
    white: "bg-white",
    transparent: "bg-transparent",
    blue: "bg-blue",
    navy: "bg-navy",
    mocha: "bg-mocha",
    duck: "bg-duck",
    red_brown: "bg-red-brown",
    lightmuted: "bg-light-muted",
    none: "",
  };

  // Kiểm tra nếu là hex color
  if (backgroundColor.startsWith("#")) {
    return `bg-[${backgroundColor.toLowerCase()}]`;
  }

  // Kiểm tra nếu là rgb/rgba
  if (backgroundColor.startsWith("rgb")) {
    return `bg-${backgroundColor}`;
  }

  // Trả về class từ mapping hoặc fallback
  return backgroundColorMap[backgroundColor];
}

// Function để apply text color theo Tailwind CSS
export function getTextColorClass(textColor: string | undefined): string {
  if (!textColor) return "";

  // Mapping các text colors với Tailwind CSS classes
  const textColorMap: Record<string, string> = {
    // Standard colors
    white: "text-white",
    black: "text-black",
    // Brand colors
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    // Custom brand colors từ safelist
    "red-brown": "text-red-brown",
    duck: "text-duck",
    mocha: "text-mocha",
  };

  // Kiểm tra nếu là hex color
  if (textColor.startsWith("#")) {
    return `text-[${textColor.toLowerCase()}]`;
  }

  // Kiểm tra nếu là rgb/rgba
  if (textColor.startsWith("rgb")) {
    return `text-[${textColor}]`;
  }

  // Trả về class từ mapping hoặc fallback
  return textColorMap[textColor] || `text-[${textColor}]`;
}
