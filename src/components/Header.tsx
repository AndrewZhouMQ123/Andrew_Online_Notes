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
    filepaths: [
      "/htmlcore",
      "/csscore",
      "/jscore",
      "/commands",
      "/shortcuts",
      "/https",
      "/npm",
    ],
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
    title: "Graphs",
    corepath: "/graph",
    filepaths: [],
    dropdowntitles: [],
  },
  {
    title: "Misc",
    corepath: "/misc",
    filepaths: ["/buttons", "/blogtemplate", "/calculator"],
    dropdowntitles: ["Buttons", "Blog", "Calculator"],
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
