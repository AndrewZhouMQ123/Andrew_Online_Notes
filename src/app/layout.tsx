import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "./components/Header";
import ThemeProvider from "./context/ThemeProvider";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import "./ui/blog.css";
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
    <ThemeProvider>
      <html lang="en">
        <body className={`${roboto.className} antialiased light-theme`}>
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
