const sizeClasses = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  xl2: "max-w-2xl",
  xl3: "max-w-3xl",
  xl4: "max-w-4xl",
  xl5: "max-w-5xl",
  full: "max-w-full w-full h-full",
};

const placementClasses = {
  center: "items-center justify-center",
  top: "items-start justify-center pt-16",
  bottom: "items-end justify-center pb-16",
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const backdropOverlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const dialogTransition = {
  duration: 0.2,
  ease: "easeOut" as const,
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

const headerAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.06, duration: 0.14 },
};

const contentAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.04, duration: 0.16 },
};

const footerAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.08, duration: 0.12 },
};

const buttonAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};

const DIALOG_CLASSES = {
  backdrop: {
    base: "fixed inset-0 z-50 flex",
  },
  backdropOverlay: {
    base: "absolute inset-0 bg-black/50",
  },
  dialog: {
    base: "bg-white shadow-lg ",
    size: {
      notFull: "mx-4 my-4",
      full: "rounded-none",
    },
  },
  header: {
    container: "flex items-center justify-between p-6 border-b",
    title: "text-lg font-semibold",
  },
  closeButton: {
    button:
      "p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer",
    icon: "w-5 h-5",
  },
  content: {
    base: "p-6",
  },
  footer: {
    base: "flex items-center justify-end gap-3 p-6 border-t bg-gray-50",
  },
};

export {
  sizeClasses,
  placementClasses,
  backdropVariants,
  backdropOverlayAnimation,
  dialogTransition,
  headerAnimation,
  contentAnimation,
  footerAnimation,
  buttonAnimation,
  DIALOG_CLASSES,
};
