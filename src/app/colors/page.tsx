import type { Metadata } from 'next';
import Link from 'next/link';

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
      <h1 className='giga mb-2'>Color Selects</h1>
      <p className='pb-12'>
        Default Tailwind colors enhanced with real-world references and processed via{' '}
        <Link
          href='https://www.tints.dev/'
          target='_blank'
          className='hover:underline hover:text-blue-500'>
          Tints.dev
        </Link>{' '}
        using the OKLCH color space.
      </p>
      {Object.entries(colors).map(([colorName, colorShades]) => (
        <div key={colorName}>
          <h2 className='kilo mb-4 mt-8'>{colorName}</h2>
          <ColorCard
            colorName={colorName}
            colorShades={colorShades}
          />
        </div>
      ))}
    </main>
  );
}
