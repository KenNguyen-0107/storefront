"use client";
import * as React from "react";
import { IButtonProps } from "./Button.type";
import { getButtonClass } from "../../../utils/utils";

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IButtonProps
>(
  (
    {
      className,
      buttonLabel,
      children,
      buttonType = "Primary",
      href,
      ...props
    },
    ref,
  ) => {
    const sharedProps = {
      "aria-label": buttonLabel || "button label",
      title: buttonLabel || "button title",
      className: `${getButtonClass(buttonType)} ${className}`,
    };

    if (href) {
      return (
        <a
          href={href}
          {...sharedProps}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {(children || buttonLabel) as React.ReactNode}
        </a>
      );
    }

    return (
      <button
        {...sharedProps}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {(children || buttonLabel) as React.ReactNode}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
