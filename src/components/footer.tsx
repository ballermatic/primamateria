import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className='flex gap-4 items-center p-2 mt-auto border-t border-smoke'>
      <Link
        href='/'
        className='flex flex-1 gap-2 items-center font-medium'>
        <Logo />
        <p>PrimaMateria</p>
      </Link>
      <Link
        href='/privacy'
        className='hover:underline hover:text-blue-500 text-sm'>
        Privacy
      </Link>
      <Link
        href='/privacy/cookies'
        className='hover:underline hover:text-blue-500 text-sm'>
        Cookies
      </Link>
    </footer>
  );
}
