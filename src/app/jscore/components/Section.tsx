// components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section = ({ title, content }: SectionProps) => (
  <li>
    <strong>{title}:</strong>
    {content}
  </li>
);

export default Section;