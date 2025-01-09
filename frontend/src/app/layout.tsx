import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from 'next/head';
import Script from 'next/script';
import { Header } from "./components/Header";
import CodeBoxWrapper from "./components/codeBoxWrapper";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import "../styles/header.css";
import "../styles/blog.css";
import "../styles/accessories.css";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Web-Experiments App",
  description: "Next.js website with cheat sheets and also where I do web experiments",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        {/* Prism CSS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={`${roboto.className} antialiased light-theme`}>
        <Header/>
        <ScrollToTopBtn />
        <CodeBoxWrapper>
          {children}
        </CodeBoxWrapper>
      </body>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
