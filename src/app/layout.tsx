// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Roboto, Caveat } from "next/font/google";
import { Header } from "@/components/Header";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { randomBytes } from "crypto";
import "./ui/blog.css";
import "./ui/pages.css";
import "./globals.css";

const generateNonce = () => {
  return randomBytes(16).toString("base64");
};

const caveat = Caveat({
  subsets: ["latin"], // Choose subsets you need
  weight: ["400", "700"], // Specify font weights
  style: ["normal"], // Specify styles (e.g., normal, italic)
  variable: "--font-caveat", // CSS variable name
  display: "swap", // Optimize font loading
});

const roboto = Roboto({
  weight: ["400", "500"], // Regular and Medium weights for Roboto
  subsets: ["latin"],
  variable: "--font-roboto", // Define a CSS variable for the font
  display: "swap", // Optimize font loading
});

const montserrat = Montserrat({
  weight: "700", // Bold weight for Montserrat
  subsets: ["latin"],
  variable: "--font-montserrat", // Define a CSS variable for the font
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "Web Goodies",
  icons: {
    icon: ["/favicon.ico"],
  },
  description:
    "Next.js website with cheat sheets and also where I do web experiments",
  manifest: "/site.webmanifest", // Link to the PWA manifest file
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nonce = generateNonce();

  return (
    <ThemeProviderWrapper nonce={nonce}>
      <html
        lang="en"
        className={`${montserrat.variable} ${roboto.variable} ${caveat.variable} antialiased`}
      >
        <head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          ></link>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <Header />
          <ScrollToTopBtn />
          <main style={{ paddingTop: "55px" }}>{children}</main>
          <footer>
            <p>© 2025 Web-Goodies App</p>
          </footer>
        </body>
      </html>
    </ThemeProviderWrapper>
  );
}
