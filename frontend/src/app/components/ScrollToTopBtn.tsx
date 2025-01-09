"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const rootElement = document.documentElement;

  function scrollToTop(): void {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Memoized scroll handler
  const handleScroll = useCallback((): void => {
    const scrollPosition = rootElement.scrollTop;
    const threshold = window.innerHeight * 0.25; // 25% of the window height

    // Show button after scrolling past threshold
    setIsVisible(scrollPosition > threshold);

    // Clear the previous timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a new timeout to hide the button after 1 second of inactivity
    setScrollTimeout(
      setTimeout(() => {
        setIsVisible(false);
      }, 1000) // Adjust the timeout duration as needed
    );
  }, [scrollTimeout]); // Add scrollTimeout to the dependency array

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [handleScroll, scrollTimeout]); // Add scrollTimeout to the dependency array

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTopBtn ${isVisible ? "showBtn" : ""}`}
      id="scrollToTopBtn"
    >
      <Image src="/upArrow.svg" height={45} width={45} alt="upArrow"/>
    </button>
  );
};

export default ScrollToTopBtn;