import ColorCard from './ColorCard';
import colorsData from './colors.json';

export default function ColorsPage() {
  const { colors } = colorsData;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between ~p-3/8 text-smoke-500'>
      <h1 className='font-bold text-4xl'>Color Selects</h1>
      <div className='container mx-auto py-4'>
        {Object.entries(colors).map(([colorName, colorShades]) => (
          <div key={colorName}>
            <h2 className='text-xl font-bold mt-6 mb-2'>{colorName}</h2>
            <ColorCard
              colorName={colorName}
              colorShades={colorShades}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
