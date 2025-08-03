import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/ui/AnimatedBackground";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manik | Full Stack Developer",
  keywords: ["Manik", "Portfolio", "Full Stack Developer", "Web Developer", "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Web Development", "Frontend Developer", "Backend Developer", "Software Engineer", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Prisma", "Docker", "Web Design", "UI/UX", "JavaScript", "HTML", "CSS"],
  authors: [{ name: "Manik" }],
  creator: "Manik",
  openGraph: {
    title: "Manik | Full Stack Developer",
    description: "Manik’s Portfolio website created primarily by Next.js, React.js, TypeScript, and Tailwind CSS."
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        {/* <CustomCursor/> */}
        <AnimatedBackground/>
        {children}
      </body>
    </html>
  )
}