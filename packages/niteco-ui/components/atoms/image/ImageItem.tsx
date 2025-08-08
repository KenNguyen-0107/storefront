"use client";
import clsx from "clsx";
import NextImage from "next/image";
import { useMediaQuery } from "../../../hook/useMediaQuery";
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
  ...rest
}: ImageItemProps) => {
  if (!src && !srcMobile) return null;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageSrc = isMobile ? srcMobile : src;
  const widhHeightStyle = isBackground
    ? {
        width: "100%",
        height: "100%",
      }
    : isFullWidth
      ? {
          width: "100%",
          height: "auto",
        }
      : { width: "auto", height: "auto" };
  const overlayStyle = overlayColor
    ? {
        background: overlayColor || "transparent",
        opacity: overlayOpacity || 0,
      }
    : {};
  return (
    <div
      className={clsx(
        "image-item-element",
        isBackground
          ? "absolute inset-0 w-full h-full overflow-hidden -z-1"
          : "relative",
        isFullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      <NextImage
        src={imageSrc || ""}
        alt={alt || ""}
        width={width || widthMobile || 800}
        height={height || heightMobile || 600}
        loading={(loading as "lazy" | "eager") || "lazy"}
        className={clsx("image-item__image object-cover", imageClasses)}
        style={widhHeightStyle}
        priority={loading === "eager"}
      />
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
