// components/ThemeProviderWrapper.tsx
"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

type Theme = "light" | "dark" | "system"; // Define the Theme type

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  nonce?: string;
}

export const ThemeProviderWrapper = ({ children, nonce }: ThemeProviderWrapperProps) => {
  const [initialTheme, setInitialTheme] = useState<Theme>("light"); // Default theme is "light"

  // Fetch the initial theme from localStorage or cookies on the client side
  useEffect(() => {
    const theme = localStorage.getItem("theme"); // Try to read from localStorage
    if (theme === "light" || theme === "dark" || theme === "system") {
      setInitialTheme(theme); // Only set if it's a valid Theme type
    }
  }, []);

  return (
    <ThemeProvider nonce={nonce} initialTheme={initialTheme}>
      {children}
    </ThemeProvider>
  );
};