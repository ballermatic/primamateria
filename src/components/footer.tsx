import Link from 'next/link';

import Logo from './logo';

export default function Footer() {
  return (
    <footer className='mt-auto flex justify-between items-center border-t border-smoke p-2 pe-4'>
      <Logo />
      <div className='flex items-center gap-4 '>
        <Link
          href='/privacy'
          className='text-sm p-1 hover:text-blue-500 hover:border-blue-500 hover:border-b'>
          Privacy
        </Link>
        <Link
          href='/privacy/cookies'
          className='text-sm p-1 hover:text-blue-500 hover:border-blue-500 hover:border-b'>
          Cookies
        </Link>
      </div>
    </footer>
  );
}
