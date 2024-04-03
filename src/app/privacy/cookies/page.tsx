import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Default meta text about the cookie policy page.',
};

export default function CookiePage() {
  return (
    <main className='flex flex-col my-12'>
      <div className='border-b border-smoke'>
        <h1 className='giga ~p-3/8'>Cookie Policy</h1>
      </div>
    </main>
  );
}
