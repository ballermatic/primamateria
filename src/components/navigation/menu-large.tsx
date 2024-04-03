'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  linkText: string;
  href: string;
}

export default function MenuLarge({ menuPrimary }: { menuPrimary: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <div className='flex flex-row ~gap-2/4'>
      {menuPrimary.map((item, index) => {
        const isCurrentPage = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={clsx('p-2 border-b-2 border-transparent mt-1', {
              'hover:text-blue-500 hover:border-blue-500 hover:border-b-2': !isCurrentPage,
              'text-gray-400 pointer-events-none': isCurrentPage,
            })}>
            {item.linkText}
          </Link>
        );
      })}
    </div>
  );
}
