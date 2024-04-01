import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className='p-2 mt-auto border-t border-smoke flex gap-4 items-center'>
      <Link
        href='/'
        className='flex flex-1 gap-2 items-center font-medium'>
        <Logo />
        <p>Brandname</p>
      </Link>
      <Link
        href='/privacy'
        className='hover:underline text-sm'>
        Privacy
      </Link>
      <Link
        href='/privacy/cookies'
        className='hover:underline text-sm'>
        Cookies
      </Link>
    </footer>
  );
}
