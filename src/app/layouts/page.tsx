import type { Metadata } from 'next';

import Heading from '@/components/heading';
import ListIcons, { ListItem } from '@/components/list-icons';
import SectionHeader from '@/components/section-header';
export const metadata: Metadata = {
  title: 'Layout Components',
  description: '',
};

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
        <Heading
          level='h1'
          preset='giga'
          className='mb-3'>
          Layout Patterns &amp; Components
        </Heading>
      </div>
      <SectionHeader title='Automagically alternating paired columns' />
      <p className='mb-6'>
        Using class <span className='bg-gray-200 p-1 font-mono'>group/groupname</span> with two
        child divs, one with class{' '}
        <span className='bg-gray-200 p-1 font-mono'>group-even/groupname:order-first</span> allows
        each column to stagger on subsequent rows.
      </p>
      <section className='grid gap-6'>
        <div className='group/altrows'>
          <div className='grid grid-flow-col gap-6'>
            <div className='grow border border-gray-500 bg-gray-500 p-2 text-white'>First</div>
            <div className='grow border border-gray-500 p-2 group-even/altrows:order-first'>
              Next
            </div>
          </div>
        </div>
        <div className='group/altrows'>
          <div className='grid grid-flow-col gap-6'>
            <div className='grow border border-gray-500 bg-gray-500 p-2 text-white'>First</div>
            <div className='grow border border-gray-500 p-2 group-even/altrows:order-first'>
              Next
            </div>
          </div>
        </div>
        <div className='group/altrows'>
          <div className='grid grid-flow-col gap-6'>
            <div className='grow border border-gray-500 bg-gray-500 p-2 text-white'>First</div>
            <div className='grow border border-gray-500 p-2 group-even/altrows:order-first'>
              Next
            </div>
          </div>
        </div>
      </section>
      <SectionHeader title='Unordered list with lucide-react icons for bullets' />
      <ListIcons listItems={exampleListItems} />
    </main>
  );
}
