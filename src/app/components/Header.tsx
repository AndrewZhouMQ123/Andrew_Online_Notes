import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import styles from "../ui/header.module.css";

export const Header = () => {
  return (
    <header>
      <Link href="/" className={styles.headerBtn}>
        <span className={styles.navLink}>Home</span>
      </Link>
      <Link href="/osblog" className={styles.headerBtn}>
        <span className={styles.navLink}>OS</span>
      </Link>
      <Link href="/htmlblog" className={styles.headerBtn}>
        <span className={styles.navLink}>HTML</span>
      </Link>
      <Link href="/cssblog" className={styles.headerBtn}>
        <span className={styles.navLink}>CSS</span>
      </Link>
      <Link href="/jsblog" className={styles.headerBtn}>
        <span className={styles.navLink}>JS</span>
      </Link>
      <ThemeToggleButton/>
      <input className={styles.searchBar} placeholder="Search"/>
    </header>
  );
};