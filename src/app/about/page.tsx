import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Default meta text.',
};

export default function AboutPage() {
  return (
    <main className='flex flex-col'>
      <div className='border-b border-smoke'>
        <h1 className='giga ~p-3/8'>About</h1>
      </div>
    </main>
  );
}
