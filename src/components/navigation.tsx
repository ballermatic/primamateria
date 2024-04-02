'use client';

import clsx from 'clsx';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useId, useRef, useState } from 'react';

import Logo from './logo';

interface MenuItem {
  linkText: string;
  href: string;
}

const menuPrimary: MenuItem[] = [
  { linkText: 'About', href: '/about' },
  { linkText: 'Colors', href: '/colors' },
  { linkText: 'Sans Font', href: '/typography' },
  { linkText: 'Serif Font', href: '/typography/serif' },
  { linkText: 'Sandbox', href: '/sandbox' },
];

function LargeMenu({ menuPrimary }: { menuPrimary: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <div className='flex flex-row ~gap-2/4'>
      {menuPrimary.map((item, index) => {
        const isCurrentPage = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={clsx('p-2', {
              'hover:text-blue-500': !isCurrentPage,
              'text-gray-400 pointer-events-none': isCurrentPage,
            })}>
            {item.linkText}
          </Link>
        );
      })}
    </div>
  );
}

export default function Navigation() {
  return (
    <>
      <div className='hidden md:block'>
        <div className='flex flex-row gap-4 items-center p-2 border-smoke border-b'>
          <Link
            href='/'
            className='flex flex-1 gap-2 items-center font-medium'>
            <Logo />
            <p>PrimaMateria</p>
          </Link>
          <LargeMenu menuPrimary={menuPrimary} />
        </div>
      </div>
      <div className='block md:hidden mb-16'>
        <div className='flex flex-row justify-between items-center fixed w-full bg-white/80'>
          <Link
            href='/'
            className='flex flex-1 p-2 items-center font-medium'>
            <Logo />
          </Link>
          <Hamburger size={24} />
        </div>
      </div>
    </>
  );
}
