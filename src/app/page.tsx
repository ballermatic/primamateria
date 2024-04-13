import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import ListIcons, { ListItem } from '@/components/list-icons';
import Mark from '@/components/logo/logo-mark';

const todos: ListItem[] = [
  { icon: 'CircleAlert', item: 'Headings component to replace @apply rules' },
  { icon: 'CircleAlert', item: 'Forms' },
  { icon: 'CircleAlert', item: 'Handy components: layouts/sections, social, etc' },
  { icon: 'CircleAlert', item: 'Analytics: Plausible vs Google' },
  { icon: 'CircleAlert', item: 'Payload CMS 3.x' },
  { icon: 'CircleAlert', item: 'Open Graph image generation' },
  { icon: 'CircleAlert', item: 'GSAP animation presets + Replace CSS animation with GSAP' },
];

export default function HomePage() {
  return (
    <main className='container mx-auto flex flex-col items-center p-12 '>
      <div className='flex max-w-xl flex-col items-center text-center'>
        <Mark className='size-64 ~mb-12/24' />
        <h1 className='exa mb-3'>Prima Materia</h1>
        <h2 className='kilo mb-6 text-gray-400'>Yet another NextJS starter</h2>
        <div className='lede'>
          <p>
            The primitive formless base of matter similar to chaos, the quintessence or aether. In
            alchemy and philosophy, prima materia, materia prima or “first matter,” is the{' '}
            <span className='font-serif italic'> ubiquitous starting material</span> required for
            the alchemical magnum opus and the creation of the philosopher’s stone.
          </p>
          <Link
            href='https://en.wikipedia.org/wiki/Prima_materia'
            target='_blank'
            className='inline-flex items-center justify-center gap-1 text-xs hover:text-blue-500'>
            Wikipedia <ExternalLink size={11} />
          </Link>
        </div>
      </div>

      <div className='my-12 flex w-full flex-col gap-6 md:flex-row'>
        <Link
          href='/colors'
          className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
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
          className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
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
          className='group grow rounded-sm border border-smoke bg-gradient-to-br from-transparent via-transparent to-blue-50 p-6 px-5 hover:border-blue-500 hover:to-blue-100'>
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

      <div className='my-12 w-full text-left'>
        <h2 className='mb-3 text-lg font-medium'>
          Specification: <span className='font-normal text-gray-400'>less is more</span>
        </h2>
        <div className='flex flex-col bg-smoke p-6 font-mono text-sm text-white ~gap-4/8 md:flex-row'>
          <div className='md:w-1/2'>
            <h3 className='font-semibold uppercase'>Basics</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>Next.js 14.1.x app router</li>
              <li className='mb-2'>
                Tailwind 3.4.x <span className='italic'>(4.x soon)</span>
              </li>
              <li className='mb-2'>React Hook Form + Zod</li>
              <li className='mb-2'>Bundle Analyzer</li>
              <li className='mb-2'>Next Sitemap</li>
              <li className='mb-2'>ESLint + Prettier</li>
            </ul>
          </div>
          <div className='mb-3 md:hidden'>========================</div>
          <div className='md:w-1/2'>
            <h3 className='font-semibold uppercase'>Extras</h3>
            <div className='mb-1'>------</div>
            <ul>
              <li className='mb-2'>
                Curated{' '}
                <Link
                  href='https://github.com/mona-sans'
                  target='_blank'
                  className='text-acid-500 hover:text-acid-300 hover:underline'>
                  sans
                </Link>
                ,{' '}
                <Link
                  href='https://fonts.google.com/specimen/Bitter'
                  target='_blank'
                  className='text-acid-500 hover:text-acid-300 hover:underline'>
                  sans serif
                </Link>
                , and{' '}
                <Link
                  href='https://monaspace.githubnext.com/'
                  target='_blank'
                  className='text-acid-500 hover:text-acid-300 hover:underline'>
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

      <div className='my-12 w-full text-left'>
        <h2 className='mb-4 text-lg font-medium'>To do‘s</h2>
        <ListIcons listItems={todos} />
      </div>
    </main>
  );
}
//
