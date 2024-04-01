import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Default meta text about the privacy policy page.',
};

export default function PrivacyPage() {
  return (
    <main className='container mx-auto flex flex-col ~p-3/8'>
      <h1 className='giga pb-12'>Privacy Policy</h1>
    </main>
  );
}
