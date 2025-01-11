// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google';
import { Header } from "@/components/Header";
import { ThemeProvider, ThemeScript } from "@/context/ThemeProvider";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { randomBytes } from 'crypto';
import "./ui/blog.css";
import "./globals.css";

const generateNonce = () => {
  return randomBytes(16).toString('base64');
};

const roboto = Roboto({
  weight: ['400', '500'], // Regular and Medium weights for Roboto
  subsets: ['latin'],
  variable: '--font-roboto', // Define a CSS variable for the font
});

const montserrat = Montserrat({
  weight: '700', // Bold weight for Montserrat
  subsets: ['latin'],
  variable: '--font-montserrat', // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Web-Experiments App",
  description: "Next.js website with cheat sheets and also where I do web experiments",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const nonce = generateNonce();

  return (
    <ThemeProvider nonce={nonce}>
      <html lang="en" className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <head>
          <ThemeScript 
            storageKey="theme"
            defaultTheme="system"
            attribute="data-theme"
            nonce={nonce}
          />
        </head>
        <body>
          <Header />
          <ScrollToTopBtn />
          {children}
          <footer>
            <p>© 2025 Web-Experiments App</p>
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
