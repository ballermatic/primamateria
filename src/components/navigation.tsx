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
  { linkText: 'Typography', href: '/typography' },
  { linkText: 'Colors', href: '/colors' },
  { linkText: 'Layouts', href: '/layouts' },
  { linkText: 'Forms', href: '/forms' },
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
  // Show or hide small menu header on scroll
  const [showSmallMenuHeader, setShowSmallMenuHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const smallMenuHeaderVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShowSmallMenuHeader(false);
      } else {
        // if scrolling up, show the navbar
        setShowSmallMenuHeader(true);
      }
      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', smallMenuHeaderVisibility);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', smallMenuHeaderVisibility);
      };
    }
  }, [lastScrollY]); // eslint-disable-line

  // To disable current menu link
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

  // Animated toggle small menu links upon hamburger click
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
    <nav
      className={clsx('fixed inset-0 z-50 delay-300 duration-500 ease-in-out', {
        'translate-y-0 delay-0': showSmallMenuHeader,
        '-translate-y-12': !showSmallMenuHeader,
      })}>
      <header
        className={clsx(
          'fixed inset-0 z-40 flex h-12 flex-row items-center justify-between border-b border-smoke/50 duration-300 ease-in-out',
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
      <div className='fixed inset-0 h-12 bg-gradient-to-b from-white/90 via-white/60 to-white/5 backdrop-blur-sm'></div>
      <div
        ref={menuMask}
        style={{
          clipPath: 'circle(0dvh at 93.5vw 1.5rem)',
          position: 'fixed',
          left: '0',
          right: '0',
          top: '0',
        }}>
        <div className='grid min-h-dvh content-between bg-smoke pb-4 pt-16'>
          <div className='flex flex-col items-center gap-4'>
            {menuPrimary.map((item, index) => {
              const isCurrentPage = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx('inline-block p-2 text-2xl', {
                    'text-white': !isCurrentPage,
                    'text-gray-500 pointer-events-none': isCurrentPage,
                  })}
                  onClick={closeMenu}>
                  {item.linkText}
                </Link>
              );
            })}
            <Link
              className='p-2 text-2xl text-white'
              target='_blank'
              href='https://github.com/ballermatic/primamateria'>
              Github
            </Link>
          </div>
          <footer className='nano text-center text-white'>
            <Link
              href='/privacy'
              className='p-2'
              onClick={closeMenu}>
              Privacy
            </Link>
            <Link
              href='/privacy/cookies'
              className='p-2'
              onClick={closeMenu}>
              Cookies
            </Link>
          </footer>
        </div>
      </div>
    </nav>
  );
}

function MenuLarge({ menuPrimary }: { menuPrimary: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <nav className='me-2 flex flex-row ~gap-2/4'>
      {menuPrimary.map((item, index) => {
        const isCurrentPage = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={clsx('mt-1 border-b-2 border-transparent p-2', {
              'hover:text-blue-500 hover:border-blue-500 hover:border-b-2': !isCurrentPage,
              'text-gray-400 pointer-events-none': isCurrentPage,
            })}>
            {item.linkText}
          </Link>
        );
      })}
      <Link
        className='p-2 text-3xl hover:text-blue-500'
        target='_blank'
        href='https://github.com/ballermatic/primamateria'>
        <FaGithub />
      </Link>
    </nav>
  );
}

export default function Navigation() {
  // Small menu links state
  const [menuOpen, menuToggle] = useState(false);

  return (
    <>
      <div className='hidden md:block'>
        <div className='flex flex-row items-center justify-between gap-4 border-b border-smoke'>
          <Logo />
          <MenuLarge menuPrimary={menuPrimary} />
        </div>
      </div>
      <div className='z-50 block md:hidden'>
        <MenuSmall
          menuPrimary={menuPrimary}
          menuOpen={menuOpen}
          menuToggle={menuToggle}
        />
      </div>
    </>
  );
}
