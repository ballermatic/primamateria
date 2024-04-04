import Link from 'next/link';

import Mark from '@/components/logo/logo-mark';

export default function HomePage() {
  return (
    <main className='container mx-auto flex flex-col items-center p-12 '>
      <div className='flex max-w-lg flex-col items-center text-center'>
        <Mark className='~my-12/24 size-64' />
        <h1 className='text-6xl font-serif tracking-tight mb-3'>Prima Materia</h1>
        <h2 className='kilo mb-6 text-gray-400'>
          The primitive formless base of matter similar to chaos, the quintessence or aether.
        </h2>
        <div className='lede'>
          <p>
            In alchemy and philosophy, prima materia, materia prima or “first matter,” is the{' '}
            <span className='font-serif italic'> ubiquitous starting material</span> required for
            the alchemical magnum opus and the creation of the philosopher’s stone.
          </p>
          <Link
            href='https://en.wikipedia.org/wiki/Prima_materia'
            target='_blank'
            className='text-xs hover:text-blue-500'>
            Wikipedia
          </Link>
        </div>
      </div>

      <div className='my-12 flex flex-col w-full gap-6 md:flex-row'>
        <Link
          href='/colors'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
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
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
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
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
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
        <div className='flex flex-col md:flex-row bg-smoke text-white p-6 font-mono ~gap-4/8 text-sm'>
          <div className='md:w-1/2'>
            <h3 className='uppercase'>Basics</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Next.js 14.1.x app router</li>
              <li className='mb-2'>Tailwind 3.4.x (4.x soon)</li>
              <li className='mb-2'>Bundle Analyzer</li>
              <li className='mb-2'>Next Sitemap</li>
              <li className='mb-2'>ESLint + Prettier – WIP</li>
            </ul>
          </div>
          <div className='md:hidden mb-3'>========================</div>
          <div className='md:w-1/2'>
            <h3 className='uppercase'>Extras</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Tailwind Fluid</li>
              <li className='mb-2'>More colors via tints.dev (OKLCH)</li>
              <li className='mb-2'>Support for variable font settings</li>
              <li className='mb-2'>Tuned heading classes: kilo, giga, etc.</li>
              <li className='mb-2'>
                Local and Google webfonts
                <li className='mt-2'>- Mona Sans</li>
                <li className='mt-2'>- Bitter</li>
                <li className='mt-2'>- Monaspace</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
