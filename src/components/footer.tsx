import Link from 'next/link';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className='mt-auto flex items-center gap-4 border-t border-smoke p-2'>
      <Link
        href='/'
        className='flex flex-1 items-center gap-2 font-medium'>
        <Logo />
        <p>PrimaMateria</p>
      </Link>
      <Link
        href='/privacy'
        className='text-sm  hover:underline'>
        Privacy
      </Link>
      <Link
        href='/privacy/cookies'
        className='text-sm  hover:underline'>
        Cookies
      </Link>
    </footer>
  );
}
