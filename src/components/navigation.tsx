'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import Logo from './logo';
import LogoMark from './logo/logo-mark';

interface MenuItem {
  linkText: string;
  href: string;
}

const menuPrimary: MenuItem[] = [
  { linkText: 'About', href: '/about' },
  { linkText: 'Colors', href: '/colors' },
  { linkText: 'Typography', href: '/typography' },
  { linkText: 'Layouts', href: '/layouts' },
  { linkText: 'Sandbox', href: '/sandbox' },
];

function MenuSmall({
  menuPrimary,
  menuOpen,
  menuToggle,
}: {
  menuPrimary: MenuItem[];
  menuOpen: boolean;
  menuToggle: (open: boolean) => void;
}) {
  // Disable current menu link
  const pathname = usePathname();

  // Close menu on click
  const closeMenu = () => {
    if (menuOpen) {
      menuToggle(false);
    }
  };

  // Lock scroll when small menu open
  useEffect(() => {
    menuOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  // Animation
  const menuMask = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(menuMask.current, {
        duration: 0.33,
        ease: 'power2.inOut',
        clipPath: menuOpen ? 'circle(110dvh at 93.5vw 1.5rem)' : 'circle(0dvh at 93.5vw 1.5rem)',
      });
    },
    { scope: menuMask, dependencies: [menuOpen] },
  );

  return (
    <nav className='z-50'>
      <header
        id='SmallMenuHeader'
        className={clsx(
          'fixed inset-0 h-12 flex flex-row items-center justify-between z-40 ease-in-out duration-300',
          {
            'text-white': menuOpen,
            'text-smoke': !menuOpen,
          },
        )}>
        <Link
          href='/'
          className='p-2'
          onClick={closeMenu}>
          <LogoMark />
        </Link>
        <Hamburger
          label='Show menu'
          size={24}
          toggled={menuOpen}
          toggle={() => menuToggle(!menuOpen)}
        />
      </header>
      <div
        ref={menuMask}
        style={{
          clipPath: 'circle(0dvh at 93.5vw 1.5rem)',
          position: 'fixed',
          left: '0',
          right: '0',
          top: '0',
        }}>
        <div
          id='menuLinks'
          className='flex flex-col gap-4 items-center bg-smoke min-h-dvh pt-16'>
          {menuPrimary.map((item, index) => {
            const isCurrentPage = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={clsx('inline-block py-2 text-2xl', {
                  'text-white': !isCurrentPage,
                  'text-gray-500 pointer-events-none': isCurrentPage,
                })}
                onClick={closeMenu}>
                {item.linkText}
              </Link>
            );
          })}
          <div className='mt-12'>
            <p className='text-sm max-w-60 text-center'>
              Mobile menus are often different than those for larger screens
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuLarge({ menuPrimary }: { menuPrimary: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <nav className='flex flex-row ~gap-2/4 me-2'>
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
      <Link
        className='hover:text-blue-500 p-2 text-3xl'
        target='_blank'
        href='https://github.com/ballermatic/primamateria'>
        <FaGithub />
      </Link>
    </nav>
  );
}

export default function Navigation() {
  const [menuOpen, menuToggle] = useState(false);

  return (
    <>
      <div className='hidden md:block'>
        <div className='flex flex-row justify-between items-center gap-4 border-b border-smoke'>
          <Logo />
          <MenuLarge menuPrimary={menuPrimary} />
        </div>
      </div>
      <div className='block md:hidden z-50'>
        <MenuSmall
          menuPrimary={menuPrimary}
          menuOpen={menuOpen}
          menuToggle={menuToggle}
        />
      </div>
    </>
  );
}
