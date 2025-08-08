import React, { useMemo } from "react";
import { IBadgeProps } from "./Badge.type";

const CheckIcon = ({ ariaLabel }: { ariaLabel?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label={ariaLabel || "Check icon"}
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const CloseIcon = ({ ariaLabel }: { ariaLabel?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label={ariaLabel || "Close icon"}
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

function Badge({ variant, className = "", size = "md", ariaLabel, role = "status", text }: IBadgeProps) {
  const badgeClasses = useMemo(() => {
    const baseClasses = "inline-flex items-center rounded font-medium whitespace-nowrap";

    // Size classes (mobile-first responsive)
    const sizeClasses = {
      sm: "inline-flex items-center gap-1 pl-2 pr-3 rounded py-1 text-sm",
      md: "px-3 py-1.5 gap-1.5 text-xs md:px-4 md:py-2 md:gap-2 md:text-sm lg:px-5 lg:py-2.5 lg:gap-2.5 lg:text-base",
      lg: "px-4 py-2 gap-2 text-sm md:px-5 md:py-2.5 md:gap-2.5 md:text-base lg:px-6 lg:py-3 lg:gap-3 lg:text-lg",
    };

    // Variant classes
    const variantClasses = {
      inStock: "bg-green-600/10 text-green",
      outOfStock: "bg-red-600/30 text-red",
    };

    const classes = [baseClasses, sizeClasses[size], variantClasses[variant]];

    if (className) {
      classes.push(className);
    }

    return classes.join(" ");
  }, [variant, size, className]);

  const badgeText = useMemo(() => {
    const baseTextClasses = "font-primary";

    // Size-responsive text classes (mobile-first)
    const textSizeClasses = {
      sm: "text-sm",
      md: "text-xs md:text-sm lg:text-base",
      lg: "text-sm md:text-base lg:text-lg",
    };

    return `${baseTextClasses} ${textSizeClasses[size]}`;
  }, [size]);

  const badgeContent = useMemo(() => {
    return {
      inStock: {
        defaultText: "In Stock",
        iconLabel: "Available",
        statusLabel: "Product is in stock",
      },
      outOfStock: {
        defaultText: "Out of Stock",
        iconLabel: "Not available",
        statusLabel: "Product is out of stock",
      },
    };
  }, []);

  const currentContent = badgeContent[variant];
  const displayText = text || currentContent.defaultText;
  const finalAriaLabel = ariaLabel || currentContent.statusLabel;

  if (variant.trim().toLowerCase() === "instock") {
    return (
      <div className={badgeClasses} role={role} aria-label={finalAriaLabel}>
        <CheckIcon ariaLabel={currentContent.iconLabel} />
        <span className={badgeText}>{displayText}</span>
      </div>
    );
  }

  return (
    <div className={badgeClasses} role={role} aria-label={finalAriaLabel}>
      <CloseIcon ariaLabel={currentContent.iconLabel} />
      <span className={badgeText}>{displayText}</span>
    </div>
  );
}

export default Badge;
