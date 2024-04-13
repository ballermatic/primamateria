import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Default meta text.',
};

export default function FormsPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col px-4'>
      <div className='pb-12 ~pt-3/8'>
        <h1 className='giga mb-3 md:w-1/2'>Forms</h1>
      </div>
      <div className='narrative mb-12 flex flex-col ~gap-3/8'></div>
    </main>
  );
}
