import clsx from "clsx";
import { IImageProps } from "../../types/cms/IImage";
export interface ResponsiveImageProps {
  image?: IImageProps;
  imageMobile?: IImageProps;
  alt?: string;
  className?: string;
  [key: string]: any;
}
const ResponsiveImage = ({
  image,
  imageMobile,
  alt,
  className,
}: ResponsiveImageProps) => {
  if (!image?.src && !imageMobile?.src) return null;
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={image?.src} />
      <img
        src={imageMobile?.src || image?.src}
        alt={alt}
        width={image?.width}
        height={image?.height}
        loading={(image?.loading as "lazy" | "eager") || "lazy"}
        className={clsx(
          className,
          imageMobile?.isFullWidthImage && "w-full h-auto",
          image?.isFullWidthImage && "md:w-full md:h-auto",
        )}
      />
    </picture>
  );
};

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;
