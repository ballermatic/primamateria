import Link from 'next/link';

import Mark from '@/components/logo/logo-mark';

export default function HomePage() {
  return (
    <main className='container mx-auto flex flex-col items-center p-12 '>
      <div className='flex max-w-lg flex-col items-center text-center'>
        <Mark className='my-12 size-64' />
        <h1 className='text-6xl font-serif tracking-tight my-6'>Prima Materia</h1>
        <div className='lede'>
          <p>
            In alchemy and philosophy, prima materia, materia prima or first matter, is the
            ubiquitous starting material required for the alchemical magnum opus and the creation of
            the philosopher’s stone. It is the primitive formless base of all matter similar to
            chaos, the quintessence or aether.
          </p>
        </div>
      </div>

      <div className='my-12 flex flex-col w-full ~gap-4/8 md:flex-row'>
        <Link
          href='/colors'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-300'>
          <h2 className='caps mb-3 font-medium group-hover:text-blue-500'>
            Colors{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Default colors enhanced via tints.dev.
          </p>
        </Link>

        <Link
          href='/typography'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-300'>
          <h2 className='caps mb-3 font-medium group-hover:text-blue-500'>
            Typography{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Opinionated font-specific typography classes via @apply
          </p>
        </Link>

        <Link
          href='/sandbox'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-300'>
          <h2 className='caps mb-3 font-medium group-hover:text-blue-500'>
            Sandbox{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Playing with typography and color
          </p>
        </Link>
      </div>

      <div className='text-left w-full my-12'>
        <h2 className='text-lg font-medium mb-3'>
          Specification -{' '}
          <span className='text-gray-400 font-normal'>a basic yet opinionated Nextjs starter</span>
        </h2>
        <div className='flex flex-row bg-smoke text-white p-6 font-mono ~gap-4/8 md:flex-row'>
          <div className='w-1/2'>
            <h3 className='uppercase text-acid-500'>Basics</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Next.js 14.1.x</li>
              <li className='mb-2'>Tailwind 3.4.x</li>
              <li className='mb-2'>Bundle Analyzer</li>
              <li className='mb-2'>Next Sitemap</li>
              <li className='mb-2'>ESLint + Prettier</li>
            </ul>
          </div>
          <div className='w-1/2'>
            <h3 className='uppercase text-acid-500'>Extras</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Tailwind Fluid</li>
              <li className='mb-2'>More colors via tints.dev (OKLCH)</li>
              <li className='mb-2'>Support for variable font settings</li>
              <li className='mb-2'>Default heading classes: kilo, giga, etc</li>
              <li className='mb-2'>Local and Google webfonts</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
