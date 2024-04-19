import type { Metadata } from 'next';
import Link from 'next/link';

import { DemoForm } from '@/components/forms/demo-form';
import Heading from '@/components/heading';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Default meta text.',
};

export default function FormsPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col px-4'>
      <div className='pb-12 ~pt-3/8'>
        <Heading
          level='h1'
          preset='giga'
          className='mb-3 md:w-1/2'>
          Forms
        </Heading>
      </div>
      <div className='narrative mb-12 flex flex-col'>
        <p>
          Using React Hook Form, Zod, and an elegantly{' '}
          <Link
            href='https://omkarkulkarni.vercel.app/blog/reusable-form-component-in-react-using-react-hook-form-and-zod'
            target='_blank'
            className='hover:text-blue-500 hover:underline'>
            abstracted form component
          </Link>{' '}
          courtesy of Omkar Kulkarni.
        </p>
      </div>
      <div>
        <DemoForm />
      </div>
    </main>
  );
}
