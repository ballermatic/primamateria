'use client';

import { createContext, useContext, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Squash as Hamburger } from 'hamburger-react';

import Logo from './logo';

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
          <div>Menu links here</div>
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
