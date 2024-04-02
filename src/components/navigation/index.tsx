'use client';

import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import MenuLarge from './menu-large';
import MenuSmall from './menu-small';
import Logo from '../logo';

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

export default function Navigation() {
  const [menuOpen, menuToggle] = useState(false);

  // Lock scroll when small menu open
  useEffect(() => {
    menuOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  return (
    <>
      <div className='hidden md:block'>
        <div className='flex flex-row justify-between items-center gap-4 border-b border-smoke p-2'>
          <Link href='/'>
            <div className='flex items-center gap-2 font-medium'>
              <Logo />
              <p>PrimaMateria</p>
            </div>
          </Link>
          <MenuLarge menuPrimary={menuPrimary} />
        </div>
      </div>
      <div className='mb-16 block md:hidden'>
        <div className='fixed flex w-full flex-row items-center justify-between bg-white/80'>
          <Link
            href='/'
            className='flex flex-1 items-center p-2 font-medium'>
            <Logo />
          </Link>
          <Hamburger
            label='Show menu'
            size={24}
            toggled={menuOpen}
            toggle={() => menuToggle(!menuOpen)}
          />
        </div>
        {menuOpen && (
          <MenuSmall
            menuPrimary={menuPrimary}
            menuOpen={menuOpen}
            menuToggle={menuToggle}
          />
        )}
      </div>
    </>
  );
}
