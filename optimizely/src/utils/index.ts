import { type ElementType } from "react";

export interface ILayoutSettings {
  [key: string]: string | undefined;
}
export enum gridColumnClasses {
  one = "grid-cols-1",
  two = "grid-cols-2",
  three = "grid-cols-3",
  four = "grid-cols-4",
  five = "grid-cols-5",
  six = "grid-cols-6",
}
export enum backgroundColorVariables {
  muted = "--color-muted",
  white = "--color-white",
  transparent = "--color-transparent",
  blue = "--color-blue",
  navy = "--color-navy",
  mocha = "--color-mocha",
  duck = "--color-duck",
  red_brown = "--color-red-brown",
  light_muted = "--color-light-muted",
  none = "",
}
export enum backgroundColorClasses {
  muted = "bg-muted",
  white = "bg-white",
  transparent = "bg-transparent",
  blue = "bg-blue",
  navy = "bg-navy",
  mocha = "bg-mocha",
  duck = "bg-duck",
  red_brown = "bg-red-brown",
  light_muted = "bg-light-muted",
  none = "",
}
export enum headingFontSizeClasses {
  h1 = "text-3xl md:text-4xl leading-sm",
  h2 = "text-2xl md:text-3xl leading-sm",
  h3 = "text-xl md:text-2xl leading-xs",
  h4 = "text-lg md:text-xl leading-xs",
  h5 = "text-md md:text-lg leading-md",
  h6 = "text-base md:text-md leading-md",
  plain = "text-base",
}
export enum textColorClasses {
  muted = "text-muted",
  white = "text-white",
  blue = "text-blue",
  black = "text-black",
  primary = "text-primary",
  secondary = "text-secondary",
  tertiary = "text-tertiary",
  quaternary = "text-quaternary",
  default = "",
}
enum textTransformClasses {
  uppercase = "uppercase",
  lowercase = "lowercase",
  capitalize = "capitalize",
  default = "",
  as_entered = "",
}
//Vertical alignment
enum alignContentClasses {
  start = "content-start",
  center = "content-center",
  end = "content-end",
  stretch = "content-stretch",
  default = "",
}
//Horizontal alignment
enum justifyAlignClasses {
  start = "ml-0",
  center = "mx-auto",
  end = "mr-0",
  stretch = "mx-auto",
  default = "",
}
enum justifyContentClasses {
  start = "justify-start",
  center = "justify-center",
  end = "justify-end",
  stretch = "justify-stretch",
  default = "",
}
export enum contentSpacingClasses {
  default = "gap-4",
  none = "gap-0",
  small = "gap-2",
  medium = "gap-4 md:gap-6",
  large = "gap-4 md:gap-8",
  xlarge = "gap-4 md:gap-10",
  xxlarge = "gap-4 md:gap-16",
}

enum verticalSpacingClasses {
  default = "gap-y-4",
  none = "gap-y-0",
  small = "gap-y-2",
  medium = "gap-y-4 md:gap-y-6",
  large = "gap-y-4 md:gap-y-8",
  xlarge = "gap-y-4 md:gap-y-10",
  xxlarge = "gap-y-4 md:gap-y-16",
}

enum displayPositionClasses {
  relative = "relative",
  absolute = "absolute",
  fixed = "fixed",
  sticky = "sticky",
  static = "static",
  default = "",
}
export enum maxWidthClasses {
  small = "md:max-w-1/4",
  medium = "md:max-w-1/3",
  large = "md:max-w-1/2",
  huge = "md:max-w-3/4",
  full = "md:max-w-full",
  none = "",
}
export enum widthClasses {
  full = "w-full",
  none = "",
}
enum roundedCornersClasses {
  small = "rounded", // 0.25rem
  medium = "rounded-lg", // 0.5rem
  large = "rounded-2xl", // 1rem
  huge = "rounded-[2rem]", // 2rem
  full = "rounded-full", // full
  none = "", // 0px
  default = "",
}
enum textAlignClasses {
  left = "text-left",
  center = "text-center",
  right = "text-right",
  justify = "text-justify",
  default = "",
}

enum buttonAlignClasses {
  left = "mr-auto text-left",
  center = "mx-auto text-center",
  right = "ml-auto text-right",
  none = "",
  auto = "mx-auto text-center",
}

//spacing
enum paddingClasses {
  default = "p-4",
  none = "p-0",
  small = "p-2",
  medium = "p-6",
  large = "p-8",
  xlarge = "p-10",
  xxlarge = "p-16",
  smallY = "py-2",
  mediumY = "py-6",
  largeY = "py-8",
  xlargeY = "py-10",
  xxlargeY = "py-16",
  smallX = "px-2",
  mediumX = "px-6",
  largeX = "px-8",
  xlargeX = "px-10",
  xxlargeX = "px-16",
}
export enum paddingXClasses {
  default = "px-4",
  none = "px-0",
  small = "px-2",
  medium = "px-4 md:px-6",
  large = "px-4 md:px-8",
  xlarge = "px-4 md:px-10",
  xxlarge = "px-4 md:px-16",
}
export enum paddingYClasses {
  default = "py-4",
  none = "py-0",
  small = "py-2",
  medium = "py-4 md:py-6",
  large = "py-4 md:py-8",
  xlarge = "py-4 md:py-10",
  xxlarge = "py-4 md:py-16",
}
export enum paddingTopClasses {
  default = "pt-4",
  none = "pt-0",
  small = "pt-2",
  medium = "pt-4 md:pt-6",
  large = "pt-4 md:pt-8",
  xlarge = "pt-4 md:pt-10",
  xxlarge = "pt-4 md:pt-16",
}
export enum paddingBottomClasses {
  default = "pb-4",
  none = "pb-0",
  small = "pb-2",
  medium = "pb-4 md:pb-6",
  large = "pb-4 md:pb-8",
  xlarge = "pb-4 md:pb-10",
  xxlarge = "pb-4 md:pb-16",
}
//margin
enum marginClasses {
  default = "m-4",
  none = "m-0",
  small = "m-2",
  medium = "m-6",
  large = "m-8",
  xlarge = "m-10",
  xxlarge = "m-16",
  smallX = "mx-2",
  mediumX = "mx-6",
  largeX = "mx-8",
  xlargeX = "mx-10",
  xxlargeX = "mx-16",
  smallY = "my-2",
  mediumY = "my-6",
  largeY = "my-8",
  xlargeY = "my-10",
  xxlargeY = "my-16",
  auto = "m-auto",
  autoX = "mx-auto",
  autoY = "my-auto",
}
export enum marginXClasses {
  default = "mx-4",
  none = "mx-0",
  auto = "mx-auto",
  small = "mx-2",
  medium = "mx-4 md:mx-6",
  large = "mx-4 md:mx-8",
  xlarge = "mx-4 md:mx-10",
  xxlarge = "mx-4 md:mx-16",
}
export enum marginYClasses {
  default = "my-4",
  none = "my-0",
  auto = "my-auto",
  small = "my-2",
  medium = "my-4 md:my-6",
  large = "my-4 md:my-8",
  xlarge = "my-4 md:my-10",
  xxlarge = "my-4 md:my-16",
  minus = "-mt-8 md:-mt-20",
}
export enum marginTopClasses {
  default = "mt-4",
  none = "mt-0",
  auto = "mt-auto",
  small = "mt-2",
  medium = "mt-4 md:mt-6",
  large = "mt-4 md:mt-8",
  xlarge = "mt-4 md:mt-10",
  xxlarge = "mt-4 md:mt-16",
}
export enum marginBottomClasses {
  default = "mb-4",
  none = "mb-0",
  auto = "mb-auto",
  small = "mb-2",
  medium = "mb-4 md:mb-6",
  large = "mb-4 md:mb-8",
  xlarge = "mb-4 md:mb-10",
  xxlarge = "mb-4 md:mb-16",
}

enum portraitAspectRatioClasses {
  default = "",
  square = "aspect-square",
  banner = "aspect-[1/4]",
  photo = "aspect-[2/3]",
  monitor = "aspect-[3/4]",
  widescreen = "aspect-[9/16]",
}
enum landscapeAspectRatioClasses {
  default = "",
  square = "aspect-square",
  banner = "aspect-[4/1]",
  photo = "aspect-[3/2]",
  monitor = "aspect-[4/3]",
  widescreen = "aspect-[16/9]",
}
export function getComponentSettingsClass(settings: ILayoutSettings) {
  if (!settings) return "";

  // Map of setting keys to their corresponding enum types
  const classMap: Record<string, any> = {
    backgroundColor: backgroundColorClasses,
    fontAsHeading: headingFontSizeClasses,
    padding: paddingClasses,
    paddingX: paddingXClasses,
    paddingY: paddingYClasses,
    paddingTop: paddingTopClasses,
    paddingBottom: paddingBottomClasses,
    margin: marginClasses,
    marginX: marginXClasses,
    marginY: marginYClasses,
    marginTop: marginTopClasses,
    marginBottom: marginBottomClasses,
    textColor: textColorClasses,
    textAlign: textAlignClasses,
    textTransform: textTransformClasses,
    displayPosition: displayPositionClasses,
    maxWidth: maxWidthClasses,
    width: widthClasses || "w-full",
    contentSpacing: contentSpacingClasses,
    verticalSpacing: verticalSpacingClasses,
    alignContent: alignContentClasses,
    justifyContent: justifyContentClasses,
    justifyAlign: justifyAlignClasses,
    roundedCorners: roundedCornersClasses,
    buttonAlign: buttonAlignClasses,
    aspectRatio:
      settings.orientation === "portrait"
        ? portraitAspectRatioClasses
        : landscapeAspectRatioClasses,
  };

  // Build the class string by iterating through all possible settings
  return Object.keys(classMap)
    .filter((key) => settings[key])
    .map((key) => {
      const enumObj = classMap[key];
      const value = settings[key] as string;
      return enumObj[value as keyof typeof enumObj] || "";
    })
    .filter(Boolean)
    .join(" ");
}
export const getHeadingTag = (
  headingType: string,
  showAs: string,
): ElementType => {
  return showAs === "element" ? "div" : (headingType as ElementType);
};
export function formatHeight(height: string | undefined) {
  if (!height) return "334px";
  return height.replace("h_", "").replace("_px", "px");
}

export const formatRichText = (
  text: string | undefined | null,
  color: string = "default",
) => {
  if (!text) {
    return "";
  }
  return `<div class="${textColorClasses[color as keyof typeof textColorClasses]}">${text}</div>`;
};
