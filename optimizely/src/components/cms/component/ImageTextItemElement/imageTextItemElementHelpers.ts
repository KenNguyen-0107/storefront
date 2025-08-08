import { headers } from "next/headers";
export type ImageTextItemElementTemplate =
  | "ImageTextItemElementTextImageStyle"
  | "ImageTextItemElementCategoryItemStyle"
  | "ImageTextItemElementDefaultStyle";

export const textTransformMap: Record<string, string> = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  as_entered: "none",
};

export enum ContentSpacingDefaultClasses {
  default = "gap-y-4",
  small = "gap-y-2",
  medium = "gap-y-4",
  large = "gap-y-6",
  xl = "gap-y-8",
  xxl = "gap-y-10",
  none = "gap-0",
}

export enum PaddingContentClassesTextImage {
  default = "py-6 px-4 md:py-10 md:px-10",
  small = "py-4 px-2 md:py-5 md:px-5",
  medium = "py-6 px-4 md:py-10 md:px-10",
  large = "py-8 px-6 md:py-12 md:px-12",
  xl = "py-10 px-8 md:py-14 md:px-14",
  xxl = "py-12 px-10 md:py-16 md:px-16",
  none = "p-0",
  smallY = "pt-6 pb-12",
}

export enum PaddingContentClassesCategoryItem {
  default = "py-4 px-2 md:py-10 md:px-6",
  small = "py-4 px-2 md:py-10 md:px-6",
  medium = "py-6 px-4 md:py-10 md:px-8",
  large = "py-8 px-6 md:py-12 md:px-10",
  xl = "py-10 px-8 md:py-14 md:px-12",
  xxl = "py-12 px-10 md:py-16 md:px-14",
  none = "p-0",
  smallY = "pt-6 pb-12",
}

export enum PaddingContentClassesDefault {
  default = "pt-6 pb-12 px-2 md:px-4",
  small = "pt-2 pb-4 px-2 md:px-4",
  medium = "pt-4 pb-8 px-2 md:px-4",
  large = "pt-6 pb-12 px-2 md:px-4",
  xl = "pt-8 pb-14 px-2 md:px-4",
  xxl = "pt-10 pb-16 px-2 md:px-4",
  none = "p-0",
  smallY = "pt-6 pb-12 px-2 md:px-4",
}

export enum BlockTemplate {
  TextImage = "ImageTextItemElementTextImageStyle",
  CategoryItem = "ImageTextItemElementCategoryItemStyle",
  DefaultItem = "ImageTextItemElementDefaultStyle",
}

export enum HorizontalAlignment {
  center = "content-center items-center text-center",
  end = "content-end items-end text-end",
  start = "content-start items-start text-start",
  stretch = "content-stretch items-stretch text-stretch",
}

export enum VerticalAlignment {
  center = "justify-center justify-items-center",
  end = "justify-end justify-items-end",
  start = "justify-start justify-items-start",
  stretch = "justify-stretch justify-items-stretch",
}

export enum ContentSpacing {
  center = "justify-center justify-items-center",
  end = "justify-end justify-items-end",
  start = "justify-start justify-items-start",
  stretch = "justify-stretch justify-items-stretch",
  spaceBetween = "justify-between justify-items-between",
  spaceAround = "justify-around justify-items-around",
  spaceEvenly = "justify-evenly justify-items-evenly",
}

// Helper to extract user agent from headers
export const getUserAgent = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );
  return isMobile;
};
