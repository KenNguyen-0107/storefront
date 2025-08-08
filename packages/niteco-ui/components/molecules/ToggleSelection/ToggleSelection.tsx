"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import clsx from "clsx";
import { ToggleSelectionProps } from "./ToggleSelection.types";

export const ToggleSelection: React.FC<ToggleSelectionProps> = (props) => {
  const {
    options,
    onChange,
    disabled = false,
    ariaLabel,
    error = false,
    errorText,
    direction = "horizontal",
    maxListHeight = "500px",
    className,
    ...rest
  } = props;

  const isMultiSelect = "multiSelect" in props && props.multiSelect === true;

  // Handle controlled and uncontrolled states
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if ("value" in props) {
      return Array.isArray(props.value)
        ? props.value
        : props.value
          ? [props.value]
          : [];
    }
    if ("defaultValue" in props) {
      return Array.isArray(props.defaultValue)
        ? props.defaultValue
        : props.defaultValue
          ? [props.defaultValue]
          : [];
    }
    return [];
  });

  // Update internal value when controlled value changes
  useEffect(() => {
    if ("value" in props) {
      const newValue = Array.isArray(props.value)
        ? props.value
        : props.value
          ? [props.value]
          : [];
      setInternalValue(newValue);
    }
  }, [props.value]);

  // Keep track of focused option for keyboard navigation
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const optionRefs = useRef<(HTMLLabelElement | null)[]>([]);

  const handleSelect = (value: string) => {
    if (disabled) return;

    let newValue: string[];

    if (isMultiSelect) {
      // Multi-select mode: toggle selection
      if (internalValue.includes(value)) {
        newValue = internalValue.filter((v) => v !== value);
      } else {
        newValue = [...internalValue, value];
      }
    } else {
      // Single-select mode: replace selection
      newValue = [value];
    }

    // Update internal state for uncontrolled component
    if (!("value" in props)) {
      setInternalValue(newValue);
    }

    // Call onChange with appropriate type
    if (isMultiSelect) {
      onChange(newValue);
    } else {
      onChange(newValue[0] || "");
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLLabelElement>,
    index: number,
  ) => {
    const optionCount = options.length;
    let newIndex = focusedIndex;
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
        if (!options[index].disabled) {
          handleSelect(options[index].value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        newIndex = (index + 1) % optionCount;
        while (options[newIndex].disabled && newIndex !== index) {
          newIndex = (newIndex + 1) % optionCount;
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        newIndex = (index - 1 + optionCount) % optionCount;
        while (options[newIndex].disabled && newIndex !== index) {
          newIndex = (newIndex - 1 + optionCount) % optionCount;
        }
        break;
      default:
        return;
    }

    if (newIndex !== index && newIndex !== focusedIndex) {
      setFocusedIndex(newIndex);
      setTimeout(() => {
        optionRefs.current[newIndex]?.focus();
      }, 0);
    }
  };

  const containerRole = isMultiSelect ? "group" : "radiogroup";

  return (
    <div
      className={clsx(
        "toggle-selection-container flex gap-2 flex-wrap w-full",
        className,
      )}
      {...rest}
    >
      <div
        className={clsx("toggle-selection flex flex-wrap w-full gap-2", {
          "toggle-selection--horizontal": direction === "horizontal",
          "toggle-selection--vertical": direction === "vertical",
          "toggle-selection--disabled": disabled,
          "toggle-selection--error": error,
          "toggle-selection--max-height": maxListHeight,
        })}
        style={{ maxHeight: maxListHeight, overflowY: "auto" }}
        role={containerRole}
        aria-label={ariaLabel}
        data-testid="toggle-selection"
      >
        {options.map((option, index) => {
          const isSelected = internalValue.includes(option.value);
          const isOptionDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              className={clsx(
                "toggle-option focus:outline-none",
                `${direction === "horizontal" ? "" : "w-full"}`,
                isOptionDisabled && "opacity-50 cursor-not-allowed",
                focusedIndex === index && "toggle-option--focused",
              )}
              data-testid={`toggle-option-${option.value}`}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => setFocusedIndex(index)}
              tabIndex={isOptionDisabled ? -1 : 0}
            >
              <input
                type={isMultiSelect ? "checkbox" : "radio"}
                value={option.value}
                checked={isSelected}
                disabled={isOptionDisabled}
                onChange={() => !isOptionDisabled && handleSelect(option.value)}
                className="hidden peer"
                aria-checked={isSelected}
                aria-disabled={isOptionDisabled}
                tabIndex={-1}
              />
              <span
                className={clsx(
                  "p-4 lg:px-4 rounded border border-muted cursor-pointer block transition-all",
                  "hover:border-blue",
                  "peer-checked:border-blue peer-checked:bg-blue peer-checked:text-white text-blue",
                  isOptionDisabled &&
                    "cursor-not-allowed hover:border-muted text-muted",
                  focusedIndex === index ? "border-primary" : "border-muted",
                )}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
      {error && errorText && (
        <div
          className="toggle-selection-error-text text-red-500 w-full"
          data-testid="toggle-selection-error"
        >
          {errorText}
        </div>
      )}
    </div>
  );
};

export default ToggleSelection;
