import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manik’s Portfolio",
  description: "Manik’s Portfolio website created primarily by Next.js, React.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>{children}</body>
    </html>
  )
}