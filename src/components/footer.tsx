import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className='p-2 border-t border-smoke flex flex-1 gap-4 items-center'>
      <Link
        href='/'
        className='flex flex-1 gap-2 items-center font-medium'>
        <Logo />
        <p>Brandname</p>
      </Link>
      <Link
        href='/privacy'
        className='hover:underline'>
        Privacy
      </Link>
      <Link
        href='/privacy/cookies'
        className='hover:underline'>
        Cookies
      </Link>
    </footer>
  );
}
