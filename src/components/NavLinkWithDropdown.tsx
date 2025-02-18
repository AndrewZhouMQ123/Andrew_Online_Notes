"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../app/ui/header.module.css';

interface NavLinkWithDropdownProps {
  title: string;
  corepath: string;
  filepaths: string[];
  dropdowntitles: string[];
}

const NavLinkWithDropdown = ({ title, corepath, filepaths, dropdowntitles }: NavLinkWithDropdownProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Ensure filepaths and dropdowntitles have the same length
  if (filepaths.length !== dropdowntitles.length) {
    throw new Error('filepaths and dropdowntitles must have the same length');
  }

  return (
    <div
    className={`${styles.headerBtn} ${styles.dropdownContainer}`}
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Link href={corepath}>
        <span className={styles.navLink}>{title}</span>
      </Link>

      {isDropdownVisible && (
        <div 
        className={styles.dropdownMenu}
        onWheel={(e) => e.stopPropagation()} // Prevent scroll propagation
        >
          {filepaths.map((filepath, index) => (
            <Link key={filepath} href={filepath} className={styles.dropdownLink}>
              {dropdowntitles[index]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinkWithDropdown;