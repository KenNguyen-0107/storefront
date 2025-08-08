export const PRODUCT_GALLERY_CLASSES = {
  container: `w-full max-w-full md:max-w-[554px]`,
  emptyContainer: `w-full h-96 bg-gray-100 flex items-center justify-center`,
  emptyText: "text-gray-500",
  mainImageContainer: "relative mb-4",
  zoomIconContainer:
    "absolute top-4 left-4 z-20 p-2  transition-all duration-200 cursor-pointer",
  mainSwiper: "main-swiper overflow-hidden",
  slideImageContainer: "relative aspect-[4/3] w-full",
  slideImage: "object-cover",
  slideImageSizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw",
  navigationButtonBase:
    "absolute top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 transition-all duration-200 group cursor-pointer rounded-full",
  navigationButtonPrev: "swiper-button-prev-custom left-4",
  navigationButtonNext: "swiper-button-next-custom right-4",
  navigationIcon: "w-6 h-6 text-gray-700 group-hover:text-gray-900",
  thumbnailGridContainer: "flex flex-wrap gap-4 w-full",
  thumbnailItem: "cursor-pointer",
  thumbnailImageContainer:
    "relative w-[77px] h-[57px] md:w-[98px] md:h-[72px] overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all duration-200",
  thumbnailImage: (isActive: boolean) =>
    `object-cover transition-opacity duration-200 ${
      isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
    }`,
  thumbnailImageSizes: "(max-width: 768px) 77px, 96px",
  thumbsSwiper: "thumbs-swiper",
  thumbnailSlide:
    "!w-[77px] !h-[57px] md:!w-[96px] md:!h-[72px] cursor-pointer",
  zoomPopup: "fixed inset-0 z-50 flex items-center justify-center bg-black/90",
  zoomPopupContent: "relative max-w-[600px] max-h-[600px]",
  closeButton:
    "absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer",
  zoomedImageContainer: "relative",
  zoomedImage: "w-[600px] h-auto",
};
