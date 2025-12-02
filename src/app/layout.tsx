import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tai Cameron - Web Designer & Developer",
  description: "Portfolio showcasing web design and development work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#333333]">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
