"use client";
import ThemeToggleButton from "./ThemeToggleButton";
import styles from "@/app/ui/header.module.css";
import NavLinkWithDropdown from "./NavLinkWithDropdown";
import { useState } from "react";

const NAV_ITEMS = [
  {
    title: "Home",
    corepath: "/",
    filepaths: [],
    dropdowntitles: [],
  },
  {
    title: "Dev Notes",
    corepath: "/devNotes",
    filepaths: ["/1", "/2", "/3", "/4", "/5", "/6", "/7"],
    dropdowntitles: [
      "HTML",
      "CSS",
      "JavaScript",
      "Commands",
      "Shortcuts",
      "HTTPS",
      "NPM",
    ],
  },
  {
    title: "About Me",
    corepath: "/about",
    filepaths: [],
    dropdowntitles: [],
  },
  {
    title: "Misc",
    corepath: "/misc",
    filepaths: ["/1", "/2", "/3", "/4"],
    dropdowntitles: ["Graph Utilities", "Calculator", "Blog", "Buttons"],
  },
  {
    title: "Contact",
    corepath: "/contact",
    filepaths: [],
    dropdowntitles: [],
  },
];

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => (
        <NavLinkWithDropdown key={item.corepath} {...item} />
      ))}
      <ThemeToggleButton />
      <input
        className={styles.searchInput}
        placeholder="Search Games"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
};
