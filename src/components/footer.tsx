import Link from 'next/link';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className='flex justify-between items-center mt-auto p-2 pe-4 border-t border-smoke'>
      <Logo />
      <div className='flex items-center nano gap-4 '>
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
        <p>© PrimaMateria {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
