import * as React from "react";
import { cn } from "../../../utils/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { ariaLabel?: string }
>(({ className, type, ariaLabel = "product quantity", ...props }, ref) => {
  return (
    <label aria-label={ariaLabel}>
      <input
        formNoValidate
        type={type}
        className={cn(
          "bg-white flex h-10 w-full rounded border border-muted p-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:telg:sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    </label>
  );
});
Input.displayName = "Input";

export { Input };
