"use client";
import React, { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string>("light-theme");

  useEffect(() => {
    // Retrieve theme from localStorage or set default
    const storedTheme = localStorage.getItem("theme") || "light-theme";
    setTheme(storedTheme);
    document.body.classList.add(storedTheme);
    updateTheme(storedTheme);
  }, []);

  const updateTheme = (webTheme: string) => {
    const body = document.body;

    // Update body class
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(webTheme);

    // Update other elements dynamically
    const themeClass = webTheme === "dark-theme" ? "dark-page" : "light-page";
    const removeClass = webTheme === "dark-theme" ? "light-page" : "dark-page";
    const shadowStyle =
      webTheme === "dark-theme"
        ? "0 0 10px rgb(85, 55, 45), 0 0 15px rgb(45, 35, 55)"
        : "0 0 10px rgb(235, 255, 245), 0 0 15px rgb(245, 235, 255)";

    document.querySelectorAll(".page-wrap, .horizontal-wrap").forEach((el) => {
      el.classList.remove(removeClass);
      el.classList.add(themeClass);
    });

    document.querySelectorAll<HTMLElement>(".blog-title").forEach((el) => {
      el.style.textShadow = shadowStyle;
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <button
      className={`theme-btn ${theme}`}
      onClick={toggleTheme}
      id="themeToggleBtn"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;