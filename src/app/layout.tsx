import type { Metadata } from 'next';
import Footer from '@/components/footer';
import { Bitter } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/styles.css';

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
      <body className={`${fontSans.variable} ${fontSerif.variable} text-smoke`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
