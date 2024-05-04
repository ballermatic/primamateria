import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import LogoMark from './logo-mark';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  invert?: boolean;
}

export default function Logo({ className, invert = false }: LogoProps) {
  return (
    <Link
      href='/'
      className='group p-2 hover:text-blue-500'>
      <div className={cn('flex items-center gap-2 font-medium', className)}>
        <LogoMark className={cn({ invert: invert })} />
        <p className={cn({ invert: invert })}>PrimaMateria</p>
      </div>
    </Link>
  );
}
