"use client";
import ThemeToggleButton from "./ThemeToggleButton";
import styles from "@/app/ui/header.module.css";
import NavLinkWithDropdown from "./NavLinkWithDropdown";
import GoogleLogin from "./GoogleLogin";

const NAV_ITEMS = [
  {
    title: "Home",
    corepath: "/",
    filepaths: [],
    dropdowntitles: [],
  },
  {
    title: "OL Notes",
    corepath: "/notes",
    filepaths: ["/1", "/2"],
    dropdowntitles: ["Flash Cards", "Glossary"],
  },
  {
    title: "Dev Notes",
    corepath: "/devnotes",
    filepaths: ["/1", "/2", "/3", "/4", "/5", "/6", "/7"],
    dropdowntitles: [
      "HTML",
      "CSS",
      "JavaScript",
      "HTTPS",
      "Commands",
      "Shortcuts",
      "NPM",
    ],
  },
  {
    title: "About",
    corepath: "/about",
    filepaths: ["/1"],
    dropdowntitles: ["Contact Me"],
  },
  {
    title: "Utilities",
    corepath: "/utilities",
    filepaths: ["/1", "/2", "/3"],
    dropdowntitles: ["Graph Utilities", "Calculator", "Buttons"],
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => (
        <NavLinkWithDropdown key={item.corepath} {...item} />
      ))}
      <ThemeToggleButton />
      <GoogleLogin />
    </header>
  );
};
