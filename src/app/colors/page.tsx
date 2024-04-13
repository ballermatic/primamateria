import type { Metadata } from 'next';
import Link from 'next/link';

import Heading from '@/components/heading';

import ColorCard from './ColorCard';
import colorsData from './colors.json';

export const metadata: Metadata = {
  title: 'Colors',
  description:
    'Default Tailwind colors replaced with curated real-world bases, processed via https://www.tints.dev/',
};

export default function ColorsPage() {
  const { colors } = colorsData;

  return (
    <main className='container mx-auto my-12 flex flex-col ~p-3/8'>
      <Heading
        level='h1'
        preset='giga'>
        Color Selects
      </Heading>
      <p className='pb-12'>
        Default Tailwind colors enhanced with real-world references and processed via{' '}
        <Link
          href='https://www.tints.dev/'
          target='_blank'
          className='hover:text-blue-500 hover:underline'>
          Tints.dev
        </Link>{' '}
        using the OKLCH color space.
      </p>
      {Object.entries(colors).map(([colorName, colorShades]) => (
        <div key={colorName}>
          <Heading
            level='h2'
            preset='kilo'
            className='mb-4 mt-8'>
            {colorName}
          </Heading>
          <ColorCard
            colorName={colorName}
            colorShades={colorShades}
          />
        </div>
      ))}
    </main>
  );
}
