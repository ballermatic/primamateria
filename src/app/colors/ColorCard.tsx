/* eslint-disable */
// This prevents eslint-plugin-tailwindcss from warning on bg-${colorName}-${shade}

interface ColorShades {
  [key: string]: string;
}

interface ColorCardProps {
  colorName: string;
  colorShades: ColorShades;
}

export default function ColorCard({ colorName, colorShades }: ColorCardProps) {
  return (
    <div className='flex flex-wrap sm:flex-nowrap'>
      {Object.entries(colorShades).map(([shade]) => (
        <div
          key={shade}
          className='flex-auto'>
          <div className={`mb-1 h-24 bg-${colorName}-${shade}`}></div>
          <p className='text-xs'>{shade}</p>
        </div>
      ))}
    </div>
  );
}
