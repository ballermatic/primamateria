// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { useEffect, useRef, useState } from 'react';

export default function LogoMark({ className }: React.ComponentPropsWithoutRef<'svg'>) {
  // Animation
  // const logo = useRef<SVGSVGElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.to('#outer', {
  //       rotation: '360',
  //       duration: '6',
  //       repeat: -1,
  //       ease: 'none',
  //       transformOrigin: 'center center',
  //     });
  //     gsap.to('#inner', {
  //       rotation: '-360',
  //       duration: '12',
  //       repeat: -1,
  //       ease: 'none',
  //       transformOrigin: 'center center',
  //     });
  //   },
  //   { scope: logo },
  // );

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      aria-hidden='true'
      // ref={logo}
      viewBox='0 0 32 32'
      width={32}
      height={32}
      className={className}>
      <g id='outer'>
        <path
          fill='currentColor'
          d='M16 0C7.2 0 0 7.2 0 16h8c0-4.4 3.6-8 8-8V0ZM24 16c0 4.4-3.6 8-8 8v8c8.8 0 16-7.2 16-16h-8Z'
        />
      </g>
      <g id='inner'>
        <path
          fill='currentColor'
          d='M16 24v-8H8c0 4.4 3.6 8 8 8ZM16 8v8h8c0-4.4-3.6-8-8-8Z'
        />
      </g>
    </svg>
  );
}
