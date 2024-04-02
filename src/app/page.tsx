import Link from 'next/link';

import Logo from '@/components/logo';

export default function HomePage() {
  return (
    <main className='flex flex-col items-center p-12'>
      <div className='flex max-w-lg flex-col items-center text-center'>
        <Logo className='size-36 my-12' />
        <h1 className='giga my-6'>Prima Materia</h1>
        <div className='lede'>
          <p>
            In alchemy and philosophy, prima materia, materia prima or first matter, is the
            ubiquitous starting material required for the alchemical magnum opus and the creation of
            the philosopher’s stone. It is the primitive formless base of all matter similar to
            chaos, the quintessence or aether.
          </p>
        </div>
      </div>

      <div className='my-12 flex flex-col ~gap-4/8 md:flex-row'>
        <Link
          href='/colors'
          className='group rounded-sm border border-gray-400 p-6 px-5 hover:border-smoke'>
          <h2 className='caps mb-3 font-medium'>
            Colors{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-70'>
            Default colors enhanced via tints.dev.
          </p>
        </Link>

        <Link
          href='/typography'
          className='group rounded-sm border border-gray-400 p-6 px-5 hover:border-smoke'>
          <h2 className='caps mb-3 font-medium'>
            Typography{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-70'>
            Opinionated font-specific typography classes via @apply
          </p>
        </Link>

        <Link
          href='/sandbox'
          className='group rounded-sm border border-gray-400 p-6 px-5 hover:border-smoke'>
          <h2 className='caps mb-3 font-medium'>
            Sandbox{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              &#9654;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-70'>Playing with typography and color</p>
        </Link>
      </div>
    </main>
  );
}
