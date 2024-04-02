import type { Metadata } from 'next';

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
    <main className='container mx-auto flex flex-col ~p-3/8 mb-12'>
      <h1 className='giga pb-12'>Color Selects</h1>
      {Object.entries(colors).map(([colorName, colorShades]) => (
        <div key={colorName}>
          <h2 className='mt-8 mb-4 kilo'>{colorName}</h2>
          <ColorCard
            colorName={colorName}
            colorShades={colorShades}
          />
        </div>
      ))}
    </main>
  );
}
