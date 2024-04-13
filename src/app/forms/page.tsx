import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Default meta text.',
};

export default function FormsPage() {
  return (
    <main className='container mx-auto flex flex-col my-12 px-4'>
      <div className=' ~pt-3/8 pb-12'>
        <h1 className='giga mb-3 md:w-1/2'>Forms</h1>
      </div>
      <div className='narrative flex flex-col ~gap-3/8 mb-12'>
      </div>
    </main>
  );
}
