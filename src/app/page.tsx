import { ArrowRight, CircleAlert, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import Mark from '@/components/logo/logo-mark';

const todos = [
  'Layout components',
  'Analytics - Plausible vs Google',
  'Open Graph image generation',
  'Payload CMS - waiting on 3.x alpha',
  'Shiki for code blocks?',
];

function TodosList() {
  return (
    <ul className='list-none'>
      {todos.map((todo, index) => (
        <li
          key={index}
          className='mb-3 ps-3 -ms-3 relative flex items-start gap-2'>
          <CircleAlert
            className='inline-block text-gray-400'
            size={24}
          />
          <span className='flex-1'>{todo}</span>
          <span className='before:w-6 before:h-6 before:inline-block before:absolute before:left-0 before:-mt-1 before:top-1/2'></span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main className='container mx-auto flex flex-col items-center p-12 '>
      <div className='flex max-w-xl flex-col items-center text-center'>
        <Mark className='~mb-12/24 size-64' />
        <h1 className='exa mb-3'>Prima Materia</h1>
        <h2 className='kilo mb-6 text-gray-400'>
          The primitive formless base of matter similar to chaos, the quintessence or aether.
        </h2>
        <div className='lede'>
          <p>
            In alchemy and philosophy, prima materia, materia prima or “first matter,” is the{' '}
            <span className='font-serif italic font-[320]'> ubiquitous starting material</span>{' '}
            required for the alchemical magnum opus and the creation of the philosopher’s stone.
          </p>
          <Link
            href='https://en.wikipedia.org/wiki/Prima_materia'
            target='_blank'
            className='inline-flex gap-1 items-center justify-center text-xs hover:text-blue-500'>
            Wikipedia <ExternalLink size={11} />
          </Link>
        </div>
      </div>

      <div className='my-12 flex flex-col w-full gap-6 md:flex-row'>
        <Link
          href='/colors'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
          <h2 className='kilo mb-3 group-hover:text-blue-500'>
            Colors{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <ArrowRight size={18} />
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Default colors enhanced via tints.dev.
          </p>
        </Link>

        <Link
          href='/typography'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
          <h2 className='kilo mb-3 group-hover:text-blue-500'>
            Typography{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <ArrowRight size={18} />
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Font face specific typography classes via @apply
          </p>
        </Link>

        <Link
          href='/sandbox'
          className='group grow rounded-sm border border-smoke p-6 px-5 bg-gradient-to-br from-transparent via-transparent to-blue-50 hover:border-blue-500 hover:to-blue-100'>
          <h2 className='kilo mb-3 group-hover:text-blue-500'>
            Sandbox{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              <ArrowRight size={18} />
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] group-hover:text-blue-500'>
            Playing with typography and color
          </p>
        </Link>
      </div>

      <div className='text-left w-full my-12'>
        <h2 className='text-lg font-medium mb-3'>
          Specification{' '}
          <span className='text-gray-400 font-normal'>
            &hellip; yet another opinionated Nextjs starter
          </span>
        </h2>
        <div className='flex flex-col md:flex-row bg-smoke text-white p-6 font-mono ~gap-4/8 text-sm'>
          <div className='md:w-1/2'>
            <h3 className='uppercase font-semibold'>Basics</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Next.js 14.1.x app router</li>
              <li className='mb-2'>
                Tailwind 3.4.x <span className='italic'>(4.x soon)</span>
              </li>
              <li className='mb-2'>Bundle Analyzer</li>
              <li className='mb-2'>Next Sitemap</li>
              <li className='mb-2'>ESLint + Prettier</li>
            </ul>
          </div>
          <div className='md:hidden mb-3'>========================</div>
          <div className='md:w-1/2'>
            <h3 className='uppercase font-semibold'>Extras</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>
                Curated{' '}
                <Link
                  href='https://github.com/mona-sans'
                  target='_blank'
                  className='text-acid-500 hover:underline hover:text-acid-300'>
                  sans
                </Link>
                ,{' '}
                <Link
                  href='https://fonts.google.com/specimen/Bitter'
                  target='_blank'
                  className='text-acid-500 hover:underline hover:text-acid-300'>
                  sans serif
                </Link>
                , and{' '}
                <Link
                  href='https://monaspace.githubnext.com/'
                  target='_blank'
                  className='text-acid-500 hover:underline hover:text-acid-300'>
                  mono
                </Link>{' '}
                webfonts
              </li>
              <li className='mb-2'>Support for variable font settings</li>
              <li className='mb-2'>More colors via tints.dev (OKLCH)</li>
              <li className='mb-2'>Tailwind Fluid</li>
              <li className='mb-2'>Tuned typography</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-left w-full my-12'>
        <h2 className='text-lg font-medium mb-4'>To do‘s</h2>
        <TodosList />
      </div>
    </main>
  );
}
//
