"use client";

import { cn, getButtonClass } from "../../../utils/utils";
import { IButton } from "../../types/cms/IButton";

interface ButtonImageProps {
  button: IButton;
  cssClass?: string;
  disabled?: boolean;
  dataTestId?: string;
  onClick?: (button: IButton) => void;
  ariaLabel?: string;
}

const ButtonImage = ({
  button,
  cssClass,
  disabled = false,
  onClick,
  ariaLabel,
  dataTestId,
}: ButtonImageProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(button);
    }
  };

  return (
    <button
      disabled={disabled}
      type="button"
      data-testid={dataTestId || "image-text-button"}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${cn(
        "py-4 px-6 md:max-w-[279px]",
        button.link?.url ? "cursor-pointer" : "cursor-none",
        getButtonClass(button?.type || "Primary"),
        cssClass,
        button.cssClass ? button.cssClass : "",
      )}`}
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap block">
        {button.link?.text}
      </div>
    </button>
  );
};

export default ButtonImage;
