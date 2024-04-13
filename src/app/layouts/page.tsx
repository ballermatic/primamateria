import type { Metadata } from 'next';

import ListIcons, { ListItem } from '@/components/list-icons';
import SectionHeader from '@/components/section-header';
export const metadata: Metadata = {
  title: 'Layout Components',
  description: '',
};

//
//
const exampleListItems: ListItem[] = [
  { icon: 'CircleAlert', item: 'Example Item 1' },
  { icon: 'CircleAlert', item: 'Example Item 2' },
  { icon: 'OctagonX', item: 'Example Item 3', iconColor: 'text-red-500' },
  { icon: 'CircleAlert', item: 'Example Item 4' },
];

export default function LayoutComponentsPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col px-4'>
      <div className='pb-12 ~pt-3/8'>
        <h1 className='giga mb-3 md:w-1/2'>Layout Components</h1>
        <p>
          Frequently used layout patterns.{' '}
          <span className='italic'>Very much a work in progress.</span>
        </p>
      </div>
      <SectionHeader title='Automagically alternating paired columns' />
      <p className='italic'>
        #TODO fix responsiveness, simplify markup, make component – lg:justify-end allows column to
        bleed, toggle prop?
      </p>
      <div className='my-8 space-y-8'>
        {/* Section - 2 column */}
        <section className='group/section'>
          <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
            <div className='flex justify-center gap-8'>
              <div className='justify-center lg:justify-end lg:group-even/section:justify-start'>
                <div className='w-[33.75rem] flex-none bg-gray-400 lg:w-[45rem]'>
                  <p className='nano caps p-2 text-center'>Column One</p>
                </div>
              </div>
              <div className='mt-12 border border-gray-400 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
                <p className='nano caps p-2 text-center'>Column Two</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section - 2 column */}
        <section className='group/section'>
          <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
            <div className='flex justify-center gap-8'>
              <div className='justify-center lg:justify-end lg:group-even/section:justify-start'>
                <div className='w-[33.75rem] flex-none bg-gray-400 lg:w-[45rem]'>
                  <p className='nano caps p-2 text-center'>Column One</p>
                </div>
              </div>
              <div className='mt-12 border border-gray-400 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
                <p className='nano caps p-2 text-center'>Column Two</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Alternating Section Columns */}
      <SectionHeader title='Unordered list with lucide-react icons for bullets' />
      <ListIcons listItems={exampleListItems} />
    </main>
  );
}
