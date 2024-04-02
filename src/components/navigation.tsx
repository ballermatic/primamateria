'use client';

import clsx from 'clsx';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

//
// Large Menu -- above medium breakpoint
//
function MenuLarge({ menuPrimary }: { menuPrimary: MenuItem[] }) {
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

//
// Mobile Menu -- below medium breakpoint
//
function MenuSmall({
  menuPrimary,
  menuOpen,
  menuToggle,
}: {
  menuPrimary: MenuItem[];
  menuOpen: boolean;
  menuToggle: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const closeMenu = () => {
    if (menuOpen) {
      menuToggle(false);
    }
  };

  return (
    <div className='flex flex-col ~gap-2/4 bg-white min-h-dvh min-w-vw fixed inset-0 z-50'>
      <div className='flex flex-row items-center justify-between'>
        <Link
          href='/'
          className='p-2'
          onClick={closeMenu}>
          <Logo />
        </Link>
        <Hamburger
          label='Show menu'
          size={24}
          toggled={menuOpen}
          toggle={() => menuToggle(!menuOpen)}
        />
      </div>
      <div className='flex flex-col ~gap-2/4 px-2'>
        {menuPrimary.map((item, index) => {
          const isCurrentPage = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={clsx('inline-block p-2 text-xl', {
                'hover:text-blue-500': !isCurrentPage,
                'text-gray-400 pointer-events-none': isCurrentPage,
              })}
              onClick={closeMenu}>
              {item.linkText}
            </Link>
          );
        })}
        <p>Mobile menus are often different than those for larger screens</p>
      </div>
    </div>
  );
}

//
// Primary navigation menu -- toggle between separate components
//
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
