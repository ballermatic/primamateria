type SectionCategoryProps = { label: string; text?: string };

export default function SectionCategory({ label, text }: SectionCategoryProps) {
  return (
    <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
      <span className='nano caps text-gray-500'>{label}</span> {text}
    </p>
  );
}
