type SectionCategoryProps = { label: string; text?: string };

export default function SectionCategory({ label, text }: SectionCategoryProps) {
  return (
    <p className='mb-6 mt-3 border-t border-gray-300 pt-2 tracking-wide'>
      <span className='nano caps text-gray-500'>{label}</span> {text}
    </p>
  );
}
