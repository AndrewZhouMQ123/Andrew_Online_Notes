"use client";
import { useTheme } from "../context/ThemeProvider";
import header from "@/app/ui/header.module.css";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme || 'light';

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      className={header.themeBtn}
      style={{
        background: 'var(--theme-gradient)', // Use CSS variable for gradient
        color: currentTheme === 'light' ? 'black' : 'white',
      }}
      onClick={toggleTheme}
    >
      {currentTheme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};


export default ThemeToggleButton;