import Heading from './heading';

type SectionCategoryProps = { label: string; text?: string };

export default function SectionCategory({ label, text }: SectionCategoryProps) {
  return (
    <Heading
      level='h3'
      preset='nano'
      className='mb-6 mt-3 border-t border-gray-300 pt-2 tracking-wide'>
      <span className='caps text-gray-500'>{label}</span> <span className='text-base'>{text}</span>
    </Heading>
  );
}
