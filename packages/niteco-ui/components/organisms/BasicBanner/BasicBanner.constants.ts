export const BASIC_BANNER_CLASSES = {
  section:
    "basic-banner-item w-full relative flex flex-col overflow-hidden px-4",
  backgroundImageContainer: "absolute inset-0 duration-700 hover:scale-105",
  backgroundImage:
    "absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105",
  backgroundOverlay: "absolute inset-0",
  gradientOverlay:
    "absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40",
  backgroundLink: "absolute top-0 left-0 w-full h-full z-9",
  contentContainer: "relative z-10 flex flex-col",
  subheadingContainer: "flex flex-col text-white",
  subheading:
    "text-white font-bold leading-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight",
  heading:
    "text-white text-xs font-bold tracking-[0.2em] uppercase mb-2 sm:text-sm md:text-base lg:text-lg",
  description:
    "text-[#fff] text-sm leading-relaxed mb-8 font-light sm:text-base md:text-lg lg:text-xl font-lora",
  buttonContainer: "flex flex-col md:flex-row gap-4",
  button:
    "inline-flex items-center justify-center lg:text-base cursor-pointer transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed h-10 lg:h-14 text-[#fff] font-medium bg-btn-primary-bg hover:bg-btn-primary-hover-bg disabled:hover:bg-btn-primary-bg w-fit",
} as const;
