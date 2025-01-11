'use client';
import * as React from 'react';

interface ThemeScriptProps {
  storageKey: string;
  defaultTheme: string;
  attribute: string;
  nonce?: string;
}

interface ThemeProviderProps extends React.PropsWithChildren {
  storageKey?: string; // Key for localStorage
  defaultTheme?: string; // Default theme (e.g., 'light' or 'dark')
  themes?: string[]; // List of available themes
  attribute?: string; // Attribute to apply to the <html> element (e.g., 'data-theme')
  nonce?: string; // Nonce for CSP compliance
}

interface UseThemeProps {
  theme: string; // Current theme
  setTheme: (theme: string) => void; // Function to update the theme
  themes: string[]; // List of available themes
}

const MEDIA = '(prefers-color-scheme: dark)';

const ThemeContext = React.createContext<UseThemeProps | undefined>(undefined);
const defaultContext: UseThemeProps = { theme: 'light', setTheme: () => {}, themes: [] };
export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export const ThemeProvider = ({
  storageKey = 'theme',
  defaultTheme = 'system',
  themes = ['light', 'dark'],
  attribute = 'data-theme',
  children,
  nonce,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = React.useState(() => getTheme(storageKey, defaultTheme));

  const [resolvedTheme, setResolvedTheme] = React.useState(() => {
    // Resolve the theme based on the system preference if the theme is 'system'
    return theme === 'system' ? getSystemTheme() : theme;
  });

  // Apply the theme to the <html> element
  const applyTheme = React.useCallback(
    (theme: string) => {
      const d = document.documentElement;
      // Disable transitions
      const cleanup = disableAnimation(nonce);
      d.setAttribute(attribute, theme);
      // Re-enable transitions after a short delay
      cleanup?.();
    },
    [attribute, nonce]
  );

  // Update theme state and localStorage
  const setTheme = React.useCallback(
    (newTheme: string) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (e) {
        console.error('Failed to save theme to localStorage:', e);
      }
      setResolvedTheme(newTheme === 'system' ? getSystemTheme() : newTheme);
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
        setThemeState(e.newValue || defaultTheme);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [storageKey, defaultTheme]);

  React.useEffect(() => {
    const media = window.matchMedia(MEDIA);
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setResolvedTheme(getSystemTheme(e));
      }
    };
    media.addEventListener('change', handleSystemThemeChange);
    return () => media.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  // Provider value
  const providerValue = React.useMemo(
    () => ({ theme, setTheme, themes }),
    [theme, setTheme, themes]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Script to prevent flickering during hydration
export const ThemeScript = ({
  storageKey,
  defaultTheme,
  attribute,
  nonce,
}: ThemeScriptProps) => {
  const script = `(function() {
    try {
      var theme = localStorage.getItem('${storageKey}') || '${defaultTheme}';
      document.documentElement.setAttribute('${attribute}', theme);
    } catch (e) {
      console.error('Failed to apply theme:', e);
    }
  })();`;

  return (
    <script
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
};

ThemeScript.displayName = 'ThemeScript';

// Helper functions
const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent): string => {
  if (!e) e = window.matchMedia(MEDIA);
  return e.matches ? 'dark' : 'light';
};

const getTheme = (key: string, fallback: string): string => {
  if (typeof window === 'undefined') return fallback;
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    console.error('Failed to read theme from localStorage:', e);
    return fallback;
  }
};

const disableAnimation = (nonce?: string) => {
  const css = document.createElement('style');
  if (nonce) css.setAttribute('nonce', nonce);
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