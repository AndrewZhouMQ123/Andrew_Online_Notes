// context/ThemeProvider.tsx
"use client";
import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps extends React.PropsWithChildren {
  storageKey?: string; // Key for localStorage
  defaultTheme?: Theme; // Default theme (e.g., 'light', 'dark', or 'system')
  themes?: Theme[]; // List of available themes
  attribute?: string; // Attribute to apply to the <html> element (e.g., 'data-theme')
  nonce?: string; // Nonce for CSP compliance
  initialTheme?: Theme; // Initial theme passed from the server
}

interface UseThemeProps {
  theme: Theme; // Current theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>; // Function to update the theme
  toggleTheme: () => void; // Function to toggle the theme
  themes: Theme[]; // List of available themes
}

const MEDIA = "(prefers-color-scheme: dark)";
const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = {
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  themes: [],
};
export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider = ({
  storageKey = "theme",
  defaultTheme = "system",
  themes = ["light", "dark", "system"],
  attribute = "data-theme",
  children,
  nonce,
  initialTheme, // Initial theme passed from the server
}: ThemeProviderProps) => {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    return (initialTheme as Theme) || getTheme(storageKey, defaultTheme);
  });

  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>(() => {
    return theme === "system" ? getSystemTheme() : theme;
  });

  const toggleTheme = React.useCallback(() => {
    let newTheme: Theme;
    if (theme === "system") {
      // If the current theme is "system", toggle between "light" and "dark"
      newTheme = getSystemTheme() === "light" ? "dark" : "light";
    } else {
      // Otherwise, toggle between "light" and "dark"
      newTheme = theme === "light" ? "dark" : "light";
    }
  
    setThemeState(newTheme); // Set the new theme
    try {
      localStorage.setItem(storageKey, newTheme); // Save to localStorage
    } catch (e) {
      console.error("Failed to save theme to localStorage:", e);
    }
    setResolvedTheme(newTheme); // Directly set resolvedTheme to newTheme
  }, [theme, storageKey]);

  // Apply the theme to the <html> element
  const applyTheme = React.useCallback(
    (theme: Theme) => {
      if (typeof document === "undefined") return; // Skip during SSR
      const d = document.documentElement;
      const cleanup = disableAnimation(nonce);
      d.setAttribute(attribute, theme);
      cleanup?.();
    },
    [attribute, nonce]
  );

  // Update theme state and localStorage
  const setTheme: React.Dispatch<React.SetStateAction<Theme>> = React.useCallback(
    (newTheme) => {
      setThemeState((prevTheme) => {
        const resolvedNewTheme =
          typeof newTheme === "function" ? newTheme(prevTheme) : newTheme;

        try {
          localStorage.setItem(storageKey, resolvedNewTheme);
        } catch (e) {
          console.error("Failed to save theme to localStorage:", e);
        }

        setResolvedTheme(resolvedNewTheme === "system" ? getSystemTheme() : resolvedNewTheme);
        return resolvedNewTheme;
      });
    },
    [storageKey]
  );

  // Apply the theme on initial render and when it changes
  React.useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme, applyTheme]);

  // Listen for changes in localStorage (e.g., from another tab)
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageKey) {
        setThemeState((e.newValue as Theme) || defaultTheme);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [storageKey, defaultTheme]);

  // Listen for changes in system preference
  React.useEffect(() => {
    const media = window.matchMedia(MEDIA);
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setResolvedTheme(getSystemTheme(e));
      }
    };
    media.addEventListener("change", handleSystemThemeChange);
    return () => media.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  // Provider value
  const providerValue = React.useMemo(
    () => ({ theme, setTheme, toggleTheme, themes }),
    [theme, setTheme, toggleTheme, themes]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent): Theme => {
  if (typeof window === "undefined") return "light"; // SSR fallback
  if (!e) e = window.matchMedia(MEDIA);
  return e.matches ? "dark" : "light";
};

const getTheme = (key: string, fallback: Theme): Theme => {
  if (typeof window === "undefined") return fallback; // SSR fallback
  let theme: string | null = null;
  try {
    theme = localStorage.getItem(key); // Try to read from localStorage
  } catch (e) {
    console.error("Failed to read theme from localStorage:", e);
  }
  return (theme as Theme) || fallback; // Return theme from localStorage or fallback
};

const disableAnimation = (nonce?: string) => {
  if (typeof document === "undefined") return () => {}; // SSR fallback

  const css = document.createElement("style");
  if (nonce) css.setAttribute("nonce", nonce);
  css.appendChild(
    document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};