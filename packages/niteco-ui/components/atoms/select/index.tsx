"use client";

import { useState, useRef, useEffect } from "react";
import type { ISelectOption, ISelectProps } from "./select.type";
import { SELECT_CLASSES } from "./_default-classes";

export default function Select({
  options = [],
  defaultValue,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  selectStyles,
}: ISelectProps) {
  if (selectStyles) {
    Object.assign(SELECT_CLASSES, selectStyles);
  }

  const placeholderOption: ISelectOption = { label: placeholder, value: "" };

  const defaultOption =
    options.find((opt) => opt.value === defaultValue) ?? placeholderOption;

  const [selected, setSelected] = useState<ISelectOption>(defaultOption);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(
    defaultOption.value
      ? options.findIndex((o) => o.value === defaultOption.value)
      : -1,
  );
  const listboxRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () =>
    setIsOpen((prev) => {
      if (disabled) return false;
      return !prev;
    });

  const handleOptionSelect = (option: ISelectOption, index: number) => {
    if (option.value === "") return;
    setSelected(option);
    setIsOpen(false);
    setFocusedIndex(index);
    onChange?.(option);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }

    if (isOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOptionSelect(options[focusedIndex], focusedIndex);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen && listboxRef.current) {
      const optionsEls = listboxRef.current.querySelectorAll('[role="option"]');
      (optionsEls[focusedIndex] as HTMLElement)?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [focusedIndex, isOpen]);

  // 🔔 Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`${SELECT_CLASSES.wrapper}`}>
      <div
        className={`${SELECT_CLASSES.selectButton} ${disabled ? SELECT_CLASSES.disabled : "cursor-pointer"}`}
        tabIndex={0}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="select-label"
        aria-activedescendant={
          isOpen && focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
        }
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        <span className={SELECT_CLASSES.optionText}>{selected.label}</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={SELECT_CLASSES.dropdownIcon}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          className={SELECT_CLASSES.optionsList}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              role="option"
              aria-selected={selected.value === option.value}
              className={`${SELECT_CLASSES.optionItem} ${
                focusedIndex === index ? SELECT_CLASSES.focusedOption : ""
              } ${selected.value === option.value ? SELECT_CLASSES.selectedOptionText : SELECT_CLASSES.unselectedOptionText}`}
              onClick={() => handleOptionSelect(option, index)}
            >
              {selected.value === option.value && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              )}
              <span className={SELECT_CLASSES.optionText}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
