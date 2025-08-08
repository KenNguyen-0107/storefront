import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { ariaLabel?: string }>(
  ({ id, className, type = "text", ariaLabel = "input", ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <input id={inputId} type={type} aria-label={ariaLabel} name={type} className={className} ref={ref} {...props} />
    );
  }
);
Input.displayName = "Input";

export { Input };
