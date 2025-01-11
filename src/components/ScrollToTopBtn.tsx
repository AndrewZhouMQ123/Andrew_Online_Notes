"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import accessories from "@/app/ui/accessories.module.css";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const scrollToTop = useCallback((): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const timeout = setTimeout(() => {
      console.log('Scrolled to top');
    }, 1000);
    setScrollTimeout(timeout);
  }, [scrollTimeout]);

  const handleScroll = useCallback((): void => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.25; // 25% of the window height

    setIsVisible(scrollPosition > threshold);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setScrollTimeout(
      setTimeout(() => {
        setIsVisible(false);
      }, 1000) // Adjust the timeout duration as needed
    );
  }, [scrollTimeout]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [handleScroll, scrollTimeout]);

  return (
    <button
      onClick={scrollToTop}
      className={`${accessories.scrollToTopBtn} ${isVisible ? accessories.showBtn : ""}`}
      aria-label="Scroll to top"
    >
      <Image src="/upArrow.svg" height={45} width={45} alt="Scroll to top" priority />
    </button>
  );
};

export default ScrollToTopBtn;