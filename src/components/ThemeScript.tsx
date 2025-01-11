'use client';

import * as React from 'react';

interface ThemeScriptProps {
  storageKey: string;
  defaultTheme: string;
  attribute: string;
  nonce?: string;
}

export const ThemeScript = ({
  storageKey,
  defaultTheme,
  attribute,
  nonce,
}: ThemeScriptProps) => {
  const script = `(function() {
    try {
      var theme = localStorage.getItem('${storageKey}') || '${defaultTheme}';
      document.documentElement.setAttribute('${attribute}', theme);
    } catch (e) {
      console.error('Failed to apply theme:', e);
    }
  })();`;

  return (
    <script
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
};