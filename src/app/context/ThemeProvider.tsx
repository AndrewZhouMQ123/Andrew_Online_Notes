"use client";
import React, { createContext, useContext, useState, useLayoutEffect } from "react";
import styles from "../ui/accessories.module.css";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: styles.lightTheme, // Default theme
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(styles.lightTheme);

  const toggleTheme = () => {
    const newTheme = theme === styles.lightTheme ? styles.darkTheme : styles.lightTheme;
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
    setTheme(newTheme); // Update state
    updateTheme(newTheme); // Apply theme to the body
  };

  const updateTheme = (webTheme: string) => {
    const body = document.body;
    body.classList.remove(styles.lightTheme, styles.darkTheme); // Remove existing theme classes
    body.classList.add(webTheme); // Add new theme class
  };

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") || styles.lightTheme; // Retrieve theme from localStorage
    setTheme(storedTheme); // Update state
    updateTheme(storedTheme); // Apply theme to the body
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;