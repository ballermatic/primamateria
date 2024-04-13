type SectionHeaderProps = { title: string };

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <p className='mb-4 mt-12 border-b-2 border-smoke pb-2 font-bold'>{title}</p>;
}
