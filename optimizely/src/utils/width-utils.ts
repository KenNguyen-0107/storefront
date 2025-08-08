// Function để apply width classes theo Tailwind CSS
export function getWidthClass(width: string | undefined): string {
  if (!width) return "w-full"; // Default fallback

  // Mapping các width choices với Tailwind CSS classes
  const widthMap: Record<string, string> = {
    // Full width - chiếm toàn bộ Row
    full: "w-full",

    // Wide width - max-width 1440px (từ safelist)
    wide: "max-w-full w-full md:w-[1440px] px-2 md:px-0",

    // Narrow width - max-width 1120px (từ safelist)
    narrow: "max-w-full w-full md:w-[1120px] px-4 md:px-0",

    // Additional width options nếu cần
    Row: "Row mx-auto",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  // Trả về class từ mapping hoặc fallback
  return widthMap[width] || "w-full";
}

// Function để apply responsive width classes
export function getResponsiveWidthClass(
  width: string | undefined,
  desktopWidth?: string,
): string {
  if (!width) return "w-full";

  const mobileClass = getWidthClass(width);

  // Nếu có desktop width khác với mobile width
  if (desktopWidth && desktopWidth !== width) {
    const desktopClass = getWidthClass(desktopWidth);
    return `${mobileClass} lg:${desktopClass}`;
  }

  return mobileClass;
}

// Function để apply Row classes với width
export function getRowWidthClass(width: string | undefined): string {
  const widthClass = getWidthClass(width);

  // Thêm mx-auto để center Row
  return `${widthClass} mx-auto`;
}

// Function để apply responsive Row classes
export function getResponsiveRowWidthClass(
  width: string | undefined,
  desktopWidth?: string,
): string {
  const responsiveClass = getResponsiveWidthClass(width, desktopWidth);

  // Thêm mx-auto để center Row
  return `${responsiveClass} mx-auto`;
}

export function getColumnWidthClass(width: string | undefined): string {
  if (!width) return "w-full"; // Default fallback

  // Mapping các column width choices với Tailwind CSS classes
  const columnWidthMap: Record<string, string> = {
    w_full: "basis-full",
    w_onehalf: "basis-[50%]",
    w_twofifths: "basis-[40%]",
    w_threefifths: "basis-[60%]",
    w_onethird: "basis-[33.3333%]",
    w_twothird: "basis-[66.6667%]",
    w_onequarter: "basis-[25%]",
    w_threequarter: "basis-[75%]",
    w_onefifths: "basis-[20%]",
    w_fourfifths: "basis-[80%]",
    w_onesixths: "basis-[16.6667%]",
    w_fivesixths: "basis-[83.3333%]",
  };

  // Trả về class từ mapping hoặc fallback
  return columnWidthMap[width] || "";
}

// Function để apply responsive column width classes cho mobile và desktop
export function getResponsiveColumnWidthClass(
  width: string | undefined,
  widthDesktop?: string,
): string {
  if (!width) return "";

  const mobileClass = getColumnWidthClass(width);

  // Nếu có desktop width khác với mobile width
  if (widthDesktop && widthDesktop !== width) {
    const desktopClass = getColumnWidthClass(widthDesktop);
    return `${mobileClass} md:${desktopClass}`;
  }

  return mobileClass;
}
