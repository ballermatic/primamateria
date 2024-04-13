import Link from 'next/link';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className='mt-auto flex flex-col items-center justify-between border-t border-smoke px-2 py-4 md:flex-row md:py-3'>
      <Logo />
      <div className='nano mt-4 flex flex-row items-center justify-between gap-4 md:me-2 md:mt-0'>
        <Link
          href='/privacy'
          className='p-1 hover:border-b hover:border-blue-500 hover:text-blue-500'>
          Privacy
        </Link>
        <Link
          href='/privacy/cookies'
          className='p-1 hover:border-b hover:border-blue-500 hover:text-blue-500'>
          Cookies
        </Link>
        <p>©{new Date().getFullYear()} PrimaMateria</p>
      </div>
    </footer>
  );
}
