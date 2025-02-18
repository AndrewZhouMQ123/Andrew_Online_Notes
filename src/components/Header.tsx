import ThemeToggleButton from "./ThemeToggleButton";
import styles from "@/app/ui/header.module.css";
import NavLinkWithDropdown from "./NavLinkWithDropdown";

export const Header = () => {

  const DevNotesTitles = ['HTML', 'CSS', 'JavaScript', 'OS Commands', 'HTTPS', 'NPM'];
  const DevNotespaths = ['devNotes/htmlcore', 'devNotes/csscore', 'devNotes/jscore', '/devNotes/commands', '/devNotes/https', 'devNotes/npm'];
  const MiscTitles = ['Buttons Template', 'Blog Template', 'Calculator'];
  const Miscpaths = ['/misc/buttons', '/misc/blogtemplate', '/misc/calculator'];

  return (  
    <header>
      <NavLinkWithDropdown title="Home" corepath="/" filepaths={[]} dropdowntitles={[]}/>
      <NavLinkWithDropdown title="Dev Notes" corepath="/devNotes" filepaths={DevNotespaths} dropdowntitles={DevNotesTitles}/>
      <NavLinkWithDropdown title="Graphs" corepath="/graph" filepaths={[]} dropdowntitles={[]}/>
      <NavLinkWithDropdown title="Misc" corepath="/misc" filepaths={Miscpaths} dropdowntitles={MiscTitles}/>
      <ThemeToggleButton/>
      <input className={styles.searchBar} placeholder="Search Games"/>
    </header>
  );
};