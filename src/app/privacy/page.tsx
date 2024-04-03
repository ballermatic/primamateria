import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Default meta text about the privacy policy page.',
};

export default function PrivacyPage() {
  return (
    <main className='flex flex-col my-12'>
      <div className='border-b border-smoke'>
        <h1 className='giga ~p-3/8'>Privacy Policy</h1>
      </div>
    </main>
  );
}
