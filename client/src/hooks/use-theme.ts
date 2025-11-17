import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: "light" | "dark";
  effectiveTheme: "light" | "dark";
}

/**
 * useTheme Hook
 * Manages theme preference with localStorage and system preference detection
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>("system");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    // Set initial value
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Apply theme to DOM
  useEffect(() => {
    if (!mounted) return;

    const effectiveTheme = theme === "system" ? systemTheme : theme;
    const html = document.documentElement;

    if (effectiveTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme, systemTheme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const effectiveTheme = theme === "system" ? systemTheme : theme;

  return {
    theme,
    setTheme,
    systemTheme,
    effectiveTheme,
  };
}
