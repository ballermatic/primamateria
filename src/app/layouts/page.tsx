import type { Metadata } from 'next';

import SectionHeader from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Layout Components',
  description: '',
};

export default function LayoutComponentsPage() {
  return (
    <main className='container mx-auto flex flex-col my-12 px-4'>
      <div className=' ~pt-3/8 pb-12'>
        <h1 className='giga mb-3 md:w-1/2'>Layout Components</h1>
        <p>
          Frequently used layout patterns.{' '}
          <span className='italic'>Very much a work in progress.</span>
        </p>
      </div>
      <SectionHeader title='Automagically alternating paired columns' />
      <div className='group/section [counter-increment:section]'>
        <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
          <div className='flex justify-center'>
            <div className='justify-center lg:justify-end lg:group-even/section:justify-start'>
              stuff here ... WIP
            </div>
          </div>
        </div>
      </div>
      <SectionHeader title='Full bleed breakout from container' />
      <SectionHeader title='Trio frame' />
      <SectionHeader title='Subgrid cards' />
    </main>
  );
}
