"use client";

import { useState, useRef, useEffect } from "react";
import { Theme, useTheme } from "./ThemeContext";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-52" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded bg-primary text-black bg-white border border-black"
      >
        <span>Theme: {themes.find((t) => t.value === theme)?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-background border border-border">
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value as Theme);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-accent ${theme === t.value ? "bg-accent" : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
