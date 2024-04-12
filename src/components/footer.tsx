import Link from 'next/link';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center mt-auto px-2 py-4 md:py-3 border-t border-smoke'>
      <Logo />
      <div className='flex flex-row justify-between gap-4 items-center nano mt-4 md:mt-0 md:me-2'>
        <Link
          href='/privacy'
          className='p-1 hover:text-blue-500 hover:border-blue-500 hover:border-b'>
          Privacy
        </Link>
        <Link
          href='/privacy/cookies'
          className='p-1 hover:text-blue-500 hover:border-blue-500 hover:border-b'>
          Cookies
        </Link>
        <p>©{new Date().getFullYear()} PrimaMateria</p>
      </div>
    </footer>
  );
}
