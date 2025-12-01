import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tai Cameron - Web Designer & Developer",
  description: "Portfolio showcasing web design and development work",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#333333]">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
