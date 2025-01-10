"use client";
import React from "react";
import { useTheme } from "../context/ThemeProvider";
import header from "../ui/header.module.css"
import styles from "../ui/accessories.module.css";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${header.themeBtn} ${theme}`}
      onClick={toggleTheme}
      id="themeToggleBtn"
    >
      {theme === styles.lightTheme ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggleButton;