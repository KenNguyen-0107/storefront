import React from "react";
import type { LinkProps } from "./Link";

// A simplified version of LinkText for Storybook
export const LinkText = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href = "", clampText = true, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <a href={href} className={className} ref={ref} {...props}>
        <div className="flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {clampText ? <span className="line-clamp-1">{children}</span> : children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </div>
      </a>
    );
  }
);

LinkText.displayName = "LinkText";
