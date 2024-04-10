type SectionHeaderProps = { title: string };

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <p className='mt-12 mb-4 pb-2 border-b-2 border-smoke font-bold'>{title}</p>;
}
