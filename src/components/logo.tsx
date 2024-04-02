import clsx from 'clsx';

export default function Logo({
  invert = false,
}: React.ComponentPropsWithoutRef<'svg'> & { invert?: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      aria-hidden='true'
      viewBox='0 0 32 32'
      width={32}
      height={32}>
      <path
        className={clsx(invert ? 'fill-white' : 'fill-smoke')}
        d='M16 8V0C7.2 0 0 7.2 0 16h8c0-4.4 3.6-8 8-8zM24 16c0 4.4-3.6 8-8 8v8c8.8 0 16-7.2 16-16h-8zM8 16c0 4.4 3.6 8 8 8v-8H8zM16 8v8h8c0-4.4-3.6-8-8-8z'
      />
    </svg>
  );
}
