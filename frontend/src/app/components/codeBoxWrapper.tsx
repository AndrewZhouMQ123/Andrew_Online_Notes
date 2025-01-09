"use client";

import { useEffect } from "react";

export default function CodeBoxWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const JSPre = document.querySelectorAll("pre");
    JSPre.forEach((preElement) => {
      preElement.classList.add("code-box");
    });
  }, []);

  return <>{children}</>;
}