"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "blue";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (!savedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (!theme) {
    return null;
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
