"use client";

import NextImage, { ImageProps } from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "../../../utils/utils";

interface LazyImageProps extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string; // desktop
  srcMobile?: string;
  alt: string;
  width?: number; // desktop
  height?: number; // desktop
  widthMobile?: number;
  heightMobile?: number;
  className?: string;
  loading?: "eager" | "lazy";
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  style?: React.CSSProperties;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
  "aria-describedby"?: string;
  role?: string;
  "data-testid"?: string;
  "data-cy"?: string;
  threshold?: number;
  rootMargin?: string;
  placeholderSrc?: string;
}

const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      src,
      srcMobile,
      alt,
      width,
      height,
      widthMobile,
      heightMobile,
      className,
      loading = "lazy",
      onLoad,
      onError,
      style,
      "aria-label": ariaLabel = "button-aria-label",
      "aria-hidden": ariaHidden = false,
      "aria-describedby": ariaDescribedby,
      role,
      "data-testid": dataTestId,
      "data-cy": dataCy,
      threshold = 0.1,
      rootMargin = "50px",
      placeholderSrc,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    // Detect screen size
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768); // 768px là breakpoint mobile
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
      if (loading === "eager") {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }

      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }, [loading, threshold, rootMargin]);

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoaded(true);
      onLoad?.(event);
    };

    // Chọn src, width, height dựa trên thiết bị
    const selectedSrc = isMobile && srcMobile ? srcMobile : src;
    const selectedWidth = isMobile && widthMobile ? widthMobile : width;
    const selectedHeight = isMobile && heightMobile ? heightMobile : height;

    return (
      <div ref={imageRef}>
        {/* placeholder image */}
        {!isLoaded && placeholderSrc && (
          <NextImage
            src={placeholderSrc}
            alt={`${alt} placeholder`}
            width={selectedWidth}
            height={selectedHeight}
            className="absolute inset-0 object-cover"
            loading="eager"
          />
        )}
        {/* main image */}
        {isVisible && (
          <NextImage
            ref={ref}
            src={selectedSrc}
            alt={alt}
            width={selectedWidth}
            height={selectedHeight}
            style={{
              width: selectedWidth ? `${selectedWidth}px` : "auto",
              height: selectedHeight ? `${selectedHeight}px` : "auto",
              ...style,
            }}
            className={cn(
              `object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`,
              `${className}`
            )}
            loading={loading}
            onLoad={handleLoad}
            onError={onError}
            aria-label={ariaLabel}
            aria-hidden={ariaHidden}
            aria-describedby={ariaDescribedby}
            role={role}
            data-testid={dataTestId}
            data-cy={dataCy}
            {...rest}
          />
        )}
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";

export default LazyImage;
