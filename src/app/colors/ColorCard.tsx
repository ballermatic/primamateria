// ColorCard.tsx
type ColorCardProps = {
  colorName: string; // Make sure you pass the color name to this component
  colorShades: Record<string, string>;
};

const ColorCard: React.FC<ColorCardProps> = ({ colorName, colorShades }) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap'>
      {Object.entries(colorShades).map(([shade, _]) => (
        <div
          key={shade}
          className='flex-auto'>
          <div className={`h-24 mb-1 bg-${colorName}-${shade}`}></div>
          <p className='text-xs'>{shade}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorCard;
