"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { PRODUCT_GALLERY_CLASSES } from "./_default-classes";
import clsx from "clsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Dialog } from "../dialog";

interface ProductGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  showZoom?: boolean;
  thumbnailLayout?: "grid" | "slider";
}

export default function ProductGallery({
  images,
  className = "",
  showZoom = true,
  thumbnailLayout = "grid",
}: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  // Add this useEffect after the state declarations
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isPopupOpen) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  const handleZoomClick = () => {
    if (showZoom) {
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (!images || images.length === 0) {
    return (
      <div
        className={PRODUCT_GALLERY_CLASSES.emptyContainer}
        role="region"
        aria-label="Product gallery - no images"
      >
        <p className={PRODUCT_GALLERY_CLASSES.emptyText}>No images available</p>
      </div>
    );
  }

  return (
    <div
      className={clsx(PRODUCT_GALLERY_CLASSES.container, className)}
      role="region"
      aria-label="Product gallery"
    >
      <div className={PRODUCT_GALLERY_CLASSES.mainImageContainer}>
        {showZoom && (
          <button
            className={PRODUCT_GALLERY_CLASSES.zoomIconContainer}
            onClick={handleZoomClick}
            aria-label="Zoom image"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="24" height="24" transform="matrix(0 -1 1 0 0 24)" />
              <path
                d="M2.25 9.74981C2.25 13.8838 5.616 17.2498 9.75 17.2498C11.5463 17.2498 13.1925 16.6198 14.4847 15.5623L20.46 21.5391L21.54 20.4598L15.5632 14.4838C16.6575 13.1492 17.2537 11.4757 17.25 9.74981C17.25 5.61581 13.884 2.24981 9.75 2.24981C5.616 2.24981 2.25 5.61581 2.25 9.74981ZM3.75 9.74981C3.75 6.42731 6.4275 3.74981 9.75 3.74981C13.0725 3.74981 15.75 6.42731 15.75 9.74981C15.75 13.0723 13.0725 15.7498 9.75 15.7498C6.4275 15.7498 3.75 13.0723 3.75 9.74981ZM6.75 10.4998H9V12.7498H10.5V10.4998H12.75V8.99981H10.5L10.5 6.74981H9V8.99981H6.75V10.4998Z"
                fill="#E2B010"
              />
            </svg>
          </button>
        )}

        <Swiper
          modules={
            thumbnailLayout === "slider" ? [Navigation, Thumbs] : [Navigation]
          }
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          thumbs={
            thumbnailLayout === "slider"
              ? {
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }
              : undefined
          }
          className={PRODUCT_GALLERY_CLASSES.mainSwiper}
          spaceBetween={10}
          slidesPerView={1}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={PRODUCT_GALLERY_CLASSES.slideImageContainer}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className={PRODUCT_GALLERY_CLASSES.slideImage}
                  sizes={PRODUCT_GALLERY_CLASSES.slideImageSizes}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              className={`${PRODUCT_GALLERY_CLASSES.navigationButtonBase} ${PRODUCT_GALLERY_CLASSES.navigationButtonPrev}`}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft
                className={PRODUCT_GALLERY_CLASSES.navigationIcon}
                aria-hidden="true"
              />
            </button>
            <button
              className={`${PRODUCT_GALLERY_CLASSES.navigationButtonBase} ${PRODUCT_GALLERY_CLASSES.navigationButtonNext}`}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight
                className={PRODUCT_GALLERY_CLASSES.navigationIcon}
                aria-hidden="true"
              />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails - Conditional Layout */}
      {images.length > 1 && (
        <>
          {thumbnailLayout === "grid" ? (
            /* Grid Layout */
            <div
              className={PRODUCT_GALLERY_CLASSES.thumbnailGridContainer}
              role="tablist"
              aria-label="Product thumbnails"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={PRODUCT_GALLERY_CLASSES.thumbnailItem}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    mainSwiper?.slideTo(index);
                  }}
                  role="tab"
                  aria-selected={index === currentImageIndex}
                  aria-label={`Thumbnail ${index + 1}: ${image.alt}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setCurrentImageIndex(index);
                      mainSwiper?.slideTo(index);
                    }
                  }}
                >
                  <div
                    className={PRODUCT_GALLERY_CLASSES.thumbnailImageContainer}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt=""
                      fill
                      className={PRODUCT_GALLERY_CLASSES.thumbnailImage(
                        index === currentImageIndex,
                      )}
                      sizes={PRODUCT_GALLERY_CLASSES.thumbnailImageSizes}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Slider Layout */
            <Swiper
              modules={[FreeMode, Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView="auto"
              freeMode={true}
              watchSlidesProgress={true}
              className={PRODUCT_GALLERY_CLASSES.thumbsSwiper}
              a11y={{
                enabled: true,
                prevSlideMessage: "Previous thumbnail",
                nextSlideMessage: "Next thumbnail",
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className={PRODUCT_GALLERY_CLASSES.thumbnailSlide}
                  role="tab"
                  aria-selected={index === currentImageIndex}
                  tabIndex={0}
                >
                  <div
                    className={PRODUCT_GALLERY_CLASSES.thumbnailImageContainer}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt=""
                      fill
                      className={PRODUCT_GALLERY_CLASSES.thumbnailImage(
                        index === currentImageIndex,
                      )}
                      sizes={PRODUCT_GALLERY_CLASSES.thumbnailImageSizes}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}

      {/* Zoom Popup Modal - Conditional rendering */}
      <Dialog
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        size={"lg"}
        dialogClasses={{
          content: {
            base: "p-0",
          },
          dialog: {
            base: "relative bg-transparent shadow-lg z-10 focus:outline-none",
            size: {
              notFull: "mx-4 my-4",
              full: "rounded-none",
            },
          },
        }}
      >
        <div>
          <div className={PRODUCT_GALLERY_CLASSES.zoomedImageContainer}>
            <Image
              src={images[currentImageIndex]?.src || "/placeholder.svg"}
              alt={images[currentImageIndex]?.alt || "Zoomed image"}
              width={1200}
              height={900}
              className={PRODUCT_GALLERY_CLASSES.zoomedImage}
              priority
            />
            <button
              className={PRODUCT_GALLERY_CLASSES.closeButton}
              onClick={closePopup}
              aria-label="Close image"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
