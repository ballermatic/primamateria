import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Default meta text about the cookie policy page.',
};

export default function CookiePage() {
  return (
    <main className='container mx-auto flex min-h-screen flex-col ~p-3/8'>
      <h1 className='giga pb-12'>Cookie Policy</h1>
    </main>
  );
}
