import { useEffect, useState } from "react";

import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export type ThemeContextType = [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
];

export const ThemeProviderContext = createContext<ThemeContextType>([
  "system",
  () => {},
]);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  return (
    <ThemeProviderContext.Provider {...props} value={[theme, setTheme]}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
