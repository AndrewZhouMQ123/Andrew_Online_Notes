"use client";
import React from "react";
import { useTheme } from "../context/ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`theme-btn ${theme}`}
      onClick={toggleTheme}
      id="themeToggleBtn"
    >
      {theme === "light-theme" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggleButton;