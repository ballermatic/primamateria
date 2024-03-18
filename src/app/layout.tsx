import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eldritch Foundation',
  description:
    'In the stygian depths, arcane scripts and eldritch styles twist reality, forging presences whispering unspeakable truths. Unseen forces of code weave a tapestry beyond mortal comprehension, a template drawn from the shadows of technology’s most mysterious realms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
