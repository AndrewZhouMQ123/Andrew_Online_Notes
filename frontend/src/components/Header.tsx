import Link from "next/link";
import ThemeToggleButton from "./theme";

export const Header = () => {
  return (
    <header>
      <Link href="/" className="header-btn">
        <span className="nav-link">Home</span>
      </Link>
      <Link href="/htmlblog" className="header-btn">
        <span className="nav-link">HTML</span>
      </Link>
      <Link href="/cssblog" className="header-btn">
        <span className="nav-link ">CSS</span>
      </Link>
      <Link href="/jsblog" className="header-btn">
        <span className="nav-link">JS</span>
      </Link>
      <ThemeToggleButton />
      <input className="search-bar" placeholder="Search"/>
    </header>
  );
};