"use client";

import * as React from "react";
import { LinkText, LinkProps } from "./Link";

const ButtonIcon = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8333 1.08337L6.99996 6.91671L1.16663 1.08337"
      stroke="#283270"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface ButtonLinkProps extends LinkProps {
  iconPosition?: "left" | "right";
}

function ButtonLink({ className = "", iconPosition = "right", ...props }: ButtonLinkProps) {
  const leftIcon = iconPosition === "left" ? <ButtonIcon /> : undefined;
  const rightIcon = iconPosition === "right" ? <ButtonIcon /> : undefined;

  return (
    <LinkText
      className={`inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors ${className}`}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    />
  );
}

export { ButtonLink };
