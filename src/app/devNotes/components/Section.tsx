// components/Section.tsx
import React from "react";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section = ({ title, content }: SectionProps) => (
  <div>
    <strong>{title}:</strong>
    {content}
  </div>
);

export default Section;
