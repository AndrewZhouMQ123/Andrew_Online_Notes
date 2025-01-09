import Link from "next/link";
import ThemeToggleButton from "../osblog/components/theme";

export const Header = () => {
  return (
    <header>
      <Link href="/" className="header-btn">
        <span className="nav-link">Home</span>
      </Link>
      <Link href="/osblog" className="header-btn">
        <span className="nav-link">OS</span>
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
      <ThemeToggleButton/>
      <input className="search-bar" placeholder="Search"/>
    </header>
  );
};