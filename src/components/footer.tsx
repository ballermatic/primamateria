import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='p-2 border-t border-smoke flex flex-1 gap-4 items-center'>
      <Link
        href='/'
        className='flex flex-1 gap-2 items-center font-medium'>
        <Image
          className='relative'
          src='/gh-art/eldritchfoundation.webp'
          alt='HP Lovecraft loves this logo'
          width={80}
          height={80}
          priority
        />
        <p>Eldritch</p>
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
