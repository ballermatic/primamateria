import clsx from 'clsx';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  preset?: 'exa' | 'peta' | 'tera' | 'giga' | 'mega' | 'kilo' | 'nano';
  anchor?: boolean;
  serif?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Heading({
  level,
  preset,
  anchor,
  serif,
  className,
  children,
  ...props
}: HeadingProps) {
  // Tune these based on font choices
  const styles = {
    exa: {
      default:
        '~text-5xl/8xl text-balance font-semiexpanded font-[560] tracking-[-0.045em] leading-none mb-[0.5em]',
      serif:
        'font-serif ~text-5xl/8xl text-balance font-[520] tracking-[-0.045em] leading-none mb-[0.5em]',
    },
    peta: {
      default:
        '~text-4xl/7xl text-balance font-semiexpanded font-[535] tracking-[-0.033em] leading-none mb-[0.5em]',
      serif:
        'font-serif ~text-4xl/7xl text-balance font-[520] tracking-[-0.025em] leading-none mb-[0.5em]',
    },
    tera: {
      default:
        '~text-3xl/6xl text-balance font-semiexpanded font-[509] tracking-[-0.0275em] leading-none mb-[0.5em]',
      serif: 'font-serif ~text-3xl/6xl text-balance font-[490] tracking-[-0.02em]',
    },
    giga: {
      default:
        '~text-2xl/5xl text-balance font-semiexpanded font-[484] tracking-[-0.025em] leading-[1.125] mb-[0.5em]',
      serif:
        'font-serif ~text-2xl/5xl text-balance font-[466] tracking-[-0.0175em] leading-none mb-[0.5em]',
    },
    mega: {
      default:
        '~text-xl/4xl text-balance font-semiexpanded font-[484] tracking-[-0.02em] leading-[1.125] mb-[0.5em]',
      serif:
        'font-serif ~text-xl/4xl text-balance font-[466] tracking-[-0.01em] leading-[1.125] mb-[0.5em]',
    },
    kilo: {
      default:
        '~text-xl/3xl text-balance font-semiexpanded font-[440] tracking-[-0.02em] leading-[1.125] mb-[0.5em]',
      serif:
        'font-serif ~text-xl/3xl text-balance font-[390] tracking-[-0.02em] leading-[1.125] mb-[0.5em]',
    },
    nano: {
      default: '~text-xxs/xs !important font-semiexpanded',
      serif: 'font-serif ~text-xxs/xs !important',
    },
  };

  // Allow serif to replace
  const defaultClass = preset ? styles[preset].default : '';
  const serifClass = preset && serif ? styles[preset].serif : '';
  const headingClass = clsx(defaultClass, serifClass, className);

  return (
    <>
      {anchor ? (
        <Link
          href={`#${children!.toString().toLowerCase().replace(/ /g, '-')}`}
          className={clsx('group inline-flex items-center gap-1', headingClass)}
          {...props}>
          {children}
          <LinkIcon className='size-[0.5em] opacity-0 group-hover:opacity-50' />
        </Link>
      ) : (
        React.createElement(level, { className: headingClass, ...props }, children)
      )}
    </>
  );
}
