import Logo from '@/components/logo';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-col items-center min-h-screen gap-12 p-12'>
      <div className='flex flex-col items-center max-w-lg text-center'>
        <Logo className='size-16' />
        <h1 className='giga my-6'>Prima Materia</h1>
        <div className='lede'>
          <p>
            In alchemy and philosophy, prima materia, materia prima or first matter, is the
            ubiquitous starting material required for the alchemical magnum opus and the creation of
            the philosopher’s stone. It is the primitive formless base of all matter similar to
            chaos, the quintessence or aether. Esoteric alchemists describe the prima materia using
            simile, and compare it to concepts like the anima mundi.
          </p>
        </div>
      </div>

      <a
        href='/colors'
        className='group rounded-sm border border-gray-400 hover:border-smoke px-5 p-6'>
        <h2 className='caps font-medium mb-3'>
          Colors{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &#9654;
          </span>
        </h2>
        <p className='m-0 max-w-[30ch] text-sm opacity-70'>
          Default colors enhanced via tints.dev.
        </p>
      </a>

      <a
        href='/typography'
        className='group rounded-sm border border-gray-400 hover:border-smoke px-5 p-6'>
        <h2 className='caps font-medium mb-3'>
          Typography{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &#9654;
          </span>
        </h2>
        <p className='m-0 max-w-[30ch] text-sm opacity-70'>
          Opinionated font-specific typography classes via @apply
        </p>
      </a>

      <a
        href='/sandbox'
        className='group rounded-sm border border-gray-400 hover:border-smoke px-5 p-6'>
        <h2 className='caps font-medium mb-3'>
          Sandbox{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &#9654;
          </span>
        </h2>
        <p className='m-0 max-w-[30ch] text-sm opacity-70'>Playing with typography and color</p>
      </a>
    </main>
  );
}
