"use client";
import React, { createContext, useContext, useState, useLayoutEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light-theme",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light-theme");

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  const updateTheme = (webTheme: string) => {
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(webTheme);
  };

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light-theme";
    setTheme(storedTheme);
    updateTheme(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;