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
      {/* Alternating Section Columns */}
      <div className='[counter-reset:section] space-y-8'>
        {/* Section - 2 column */}
        <section className='group/section [counter-increment:section]'>
          <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
            <div className='flex justify-center gap-8'>
              <div className='justify-center lg:justify-end lg:group-even/section:justify-start'>
                <div className='w-[33.75rem] flex-none lg:w-[45rem] bg-gray-400 aspect-video'>
                  <p className='nano caps p-2'>Column One</p>
                </div>
              </div>
              <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first border border-gray-400'>
                <p className='nano caps p-2'>Column Two</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section - 2 column */}
        <section className='group/section [counter-increment:section]'>
          <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
            <div className='flex justify-center gap-8'>
              <div className='justify-center lg:justify-end lg:group-even/section:justify-start'>
                <div className='w-[33.75rem] flex-none lg:w-[45rem] bg-gray-400 aspect-video'>
                  <p className='nano caps p-2'>Column One</p>
                </div>
              </div>
              <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first border border-gray-400'>
                <p className='nano caps p-2'>Column Two</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Alternating Section Columns */}

      {/* <SectionHeader title='Full bleed breakout from container' />
      <SectionHeader title='Trio frame' />
      <SectionHeader title='Subgrid cards' /> */}
    </main>
  );
}