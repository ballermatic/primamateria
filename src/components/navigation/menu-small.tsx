'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import Logo from '../logo/logo-mark';

interface MenuItem {
  linkText: string;
  href: string;
}

export default function MenuSmall({
  menuPrimary,
  menuOpen,
  menuToggle,
}: {
  menuPrimary: MenuItem[];
  menuOpen: boolean;
  menuToggle: (open: boolean) => void;
}) {
  // Disable current menu item
  const pathname = usePathname();
  // Close menu on click
  const closeMenu = () => {
    if (menuOpen) {
      menuToggle(false);
    }
  };
  // Animation
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('#mask', {
        duration: 0.33,
        ease: 'power2.in',
        clipPath: 'circle(150% at 100% 0%)',
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div className='flex flex-col ~gap-2/4 bg-white min-w-vw fixed inset-0 z-50'>
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
        <div
          id='mask'
          style={{ clipPath: 'circle(0% at 100% 0%)' }}>
          <div className='flex flex-col ~gap-2/4 px-2 py-6 items-center min-h-dvh bg-smoke'>
            {menuPrimary.map((item, index) => {
              const isCurrentPage = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx('inline-block py-2 text-xl', {
                    'text-white hover:text-blue-500': !isCurrentPage,
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
      </div>
    </div>
  );
}
