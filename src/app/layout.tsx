import '@/styles/styles.css';

import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

const fontSans = localFont({
  src: '../fonts/MonaSans-variable.woff2',
  display: 'swap',
  variable: '--font-sans',
});

const fontSerif = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const fontMono = localFont({
  src: '../fonts/MonaspaceArgon-Light.woff',
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Prima Materia',
  description:
    'In alchemy, prima materia, materia prima, or first matter, is the ubiquitous starting material required for the alchemical magnum opus and the creation of the philosopher’s stone.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${fontSans.variable} ${fontSerif.variable}  ${fontMono.variable} flex min-h-dvh flex-col bg-white text-smoke`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
