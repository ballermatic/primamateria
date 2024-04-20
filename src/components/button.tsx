import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps = {
  invert?: boolean;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export default function Button({ invert = false, className, children, ...props }: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-5 py-3 font-medium leading-none transition',
    invert ? 'bg-white text-smoke hover:bg-neutral-200' : 'bg-smoke text-white hover:bg-smoke/60',
  );

  if (typeof props.href === 'undefined') {
    return (
      <button
        className={className}
        {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link
      className={className}
      {...props}>
      {children}
    </Link>
  );
}
