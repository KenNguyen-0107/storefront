"use client";

import * as React from "react";
import { SmartLink } from "./smartLink";

export interface LinkProps {
  className?: string;
  href?: string;
  clampText?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
}

const LinkText = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LinkProps | any
>(
  (
    { className, href = "", clampText = true, leftIcon, rightIcon, ...props },
    ref,
  ) => {
    return (
      <SmartLink
        title={props.children as string}
        href={href}
        className={className}
        {...props}
      >
        <div className="flex items-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {clampText ? (
            <div className="line-clamp-1 font-inherit">{props.children}</div>
          ) : (
            props.children
          )}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </div>
      </SmartLink>
    );
  },
);

LinkText.displayName = "LinkText";

export { LinkText };
