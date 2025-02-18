"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from '../app/ui/header.module.css';

interface NavLinkWithDropdownProps {
  title: string;
  corepath: string;
  filepaths: string[];
  dropdowntitles: string[];
}

const useClickOutside = (ref: React.RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
};

const NavLinkWithDropdown = ({ title, corepath, filepaths, dropdowntitles }: NavLinkWithDropdownProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (filepaths.length !== dropdowntitles.length) {
    throw new Error('filepaths and dropdowntitles must have the same length');
  }

  useClickOutside(dropdownRef, () => setDropdownVisible(false));
  return (
    <div
      ref={dropdownRef}
      className={styles.navItem}
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Link href={corepath} className={styles.navLink}>
        {title}
      </Link>

      {isDropdownVisible && filepaths.length > 0 && (
        <div className={styles.dropdownMenu}>
          {filepaths.map((filepath, index) => (
            <Link
              key={filepath}
              href={filepath}
              className={styles.dropdownItem}
              onClick={() => setDropdownVisible(false)}
            >
              {dropdowntitles[index]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinkWithDropdown;