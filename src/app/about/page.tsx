import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Default meta text.',
};

export default function AboutPage() {
  return (
    <main className='container mx-auto flex flex-col ~p-3/8'>
      <h1 className='giga pb-12'>About</h1>
    </main>
  );
}
