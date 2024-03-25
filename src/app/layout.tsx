import Footer from '@/components/footer';
import '@/styles/styles.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const fontSans = localFont({
  src: '../fonts/MonaSans-variable.woff2',
  display: 'swap',
  variable: '--font-sans',
});

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
    <html lang='en'>
      <body className={`${fontSans.variable} text-smoke-500`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
