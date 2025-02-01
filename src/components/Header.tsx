import ThemeToggleButton from "./ThemeToggleButton";
import styles from "@/app/ui/header.module.css";
import NavLinkWithDropdown from "./NavLinkWithDropdown";

export const Header = () => {

  const OSTitles = ['OS Commands Cheat Sheet', 'HTTP Cheat Sheet', 'Git Cheat Sheet'];
  const OSpaths = ['/oscore/commands', '/oscore/https', '/oscore/git'];
  const JSTitles = ['NPM Cheat Sheet', 'Buttons Templates', 'Calculator', 'Graphs'];
  const JSpaths = ['/jscore/npm', '/jscore/buttons', '/jscore/calculator', 'jscore/graphs'];
  const HTMLTitles = ['Blog Template'];
  const HTMLpaths = ['/htmlcore/blogtemplate'];

  return (  
    <header>
      <NavLinkWithDropdown title="Home" corepath="/" filepaths={[]} dropdowntitles={[]}/>
      <NavLinkWithDropdown title="OS" corepath="/oscore" filepaths={OSpaths} dropdowntitles={OSTitles}/>
      <NavLinkWithDropdown title="HTML" corepath="/htmlcore" filepaths={HTMLpaths} dropdowntitles={HTMLTitles}/>
      <NavLinkWithDropdown title="CSS" corepath="/csscore" filepaths={[]} dropdowntitles={[]}/>
      <NavLinkWithDropdown title="JS" corepath="/jscore" filepaths={JSpaths} dropdowntitles={JSTitles}/>
      <ThemeToggleButton/>
      <input className={styles.searchBar} placeholder="Search Games"/>
    </header>
  );
};