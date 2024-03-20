import ColorCard from './ColorCard';
import colorsData from './colors.json';

export default function ColorsPage() {
  const { colors } = colorsData;

  return (
    <main className='container mx-auto flex min-h-screen flex-col ~p-3/8 text-smoke-500'>
      <h1 className='giga text-gray-500 pb-12'>Color Selects</h1>
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
