import NextImage from "next/image";
import { cn } from "../../../utils/utils";
export interface ImageItemProps {
  src: string;
  srcMobile?: string;
  alt?: string;
  width?: number;
  height?: number;
  widthMobile?: number;
  heightMobile?: number;
  className?: string;
  imageClasses?: string;
  isBackground?: boolean;
  isFullWidth?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  loading?: "lazy" | "eager";
  isAspectRatio?: boolean;
  [key: string]: any;
}
const ImageItem = ({
  src,
  srcMobile,
  alt,
  width,
  height,
  widthMobile,
  heightMobile,
  className,
  imageClasses,
  isBackground,
  isFullWidth,
  overlayColor,
  overlayOpacity,
  loading,
  isAspectRatio = false,
  ...rest
}: ImageItemProps) => {
  if (!src && !srcMobile) return null;

  const widhHeightStyle = (width?: number, height?: number) =>
    isBackground
      ? {
          width: "100%",
          height: "100%",
        }
      : isFullWidth
        ? {
            width: "100%",
            height: "auto",
          }
        : { width: width || "auto", height: height || "auto" };
  const overlayStyle = overlayColor
    ? {
        background: overlayColor || "transparent",
        opacity: overlayOpacity || 0,
      }
    : {};
  return (
    <div
      className={cn(
        "image-item-element",
        isBackground
          ? "absolute inset-0 w-full h-full overflow-hidden -z-1"
          : "relative",
        (isFullWidth || isAspectRatio) && "w-full",
        className,
      )}
      {...rest}
    >
      {isAspectRatio ? (
        <>
          {srcMobile && (
            <NextImage
              src={srcMobile || ""}
              alt={alt || ""}
              loading={(loading as "lazy" | "eager") || "lazy"}
              className={cn(
                "image-item__image object-cover",
                imageClasses,
                "md:hidden",
              )}
              fill
              sizes="100vw"
              priority={loading === "eager"}
            />
          )}
          <NextImage
            src={src || ""}
            alt={alt || ""}
            loading={(loading as "lazy" | "eager") || "lazy"}
            className={cn(
              "image-item__image object-cover",
              imageClasses,
              srcMobile ? "hidden md:block" : "",
            )}
            fill
            sizes="100vw"
            priority={loading === "eager"}
          />
        </>
      ) : (
        <>
          {srcMobile && (
            <NextImage
              src={srcMobile || ""}
              alt={alt || ""}
              width={widthMobile || 800}
              height={heightMobile || 600}
              loading={(loading as "lazy" | "eager") || "lazy"}
              className={cn(
                "image-item__image object-cover",
                imageClasses,
                "md:hidden",
              )}
              style={widhHeightStyle(widthMobile, heightMobile)}
              priority={loading === "eager"}
            />
          )}
          <NextImage
            src={src || ""}
            alt={alt || ""}
            width={width || 800}
            height={height || 600}
            loading={(loading as "lazy" | "eager") || "lazy"}
            className={cn(
              "image-item__image object-cover",
              imageClasses,
              srcMobile ? "hidden md:block" : "",
            )}
            style={widhHeightStyle(width, height)}
            priority={loading === "eager"}
          />
        </>
      )}
      {overlayColor && (
        <div
          className="image-item__overlay absolute inset-0 w-full h-full"
          style={overlayStyle}
        />
      )}
    </div>
  );
};

ImageItem.displayName = "ImageItem";

export default ImageItem;
