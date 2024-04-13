import type { Metadata } from 'next';
import Image from 'next/image';

import graphic from '../../../public/privacy.png';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Default meta text about the privacy policy page.',
};

export default function PrivacyPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col px-4'>
      <div className=' pb-12 ~pt-3/8'>
        <h1 className='giga mb-3 md:w-1/2'>Privacy Policy</h1>
        <p className='nano caps text-gray-400'>Date updated here</p>
      </div>
      <div className='relative border-2 border-smoke'>
        <Image
          src={graphic}
          alt='Privacy, yeah right'
          width={0}
          height={0}
          sizes='50vw'
          className='h-auto w-full'
        />
      </div>
      <p className='my-6'>
        Seriously though, this starter does not include analytics or tracking of any kind.
      </p>
    </main>
  );
}
