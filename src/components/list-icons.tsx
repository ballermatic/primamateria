import clsx from 'clsx';
// Select desired icons at https://lucide.dev/icons/
// Update import and iconComponents
import {
  ArrowBigRight,
  ArrowRight,
  ArrowRightCircle,
  CircleAlert,
  ExternalLink,
  OctagonX,
} from 'lucide-react';

export type ListItem = {
  icon: keyof typeof iconComponents;
  item: JSX.Element | string;
  iconColor?: string;
};

// Change as desired
const iconComponents = {
  ArrowBigRight,
  ArrowRight,
  ArrowRightCircle,
  CircleAlert,
  ExternalLink,
  OctagonX,
};

type ListIconsProps = {
  listItems: ListItem[];
  className?: string;
};

export default function ListIcons({ listItems, className }: ListIconsProps) {
  return (
    <ul className={clsx('list-none', className)}>
      {listItems.map(({ icon: iconName, item, iconColor = 'text-gray-400' }, index) => {
        const IconComponent = iconComponents[iconName];
        return (
          <li
            key={index}
            className='mb-3 ps-3 -ms-3 relative flex items-start gap-2'>
            <IconComponent className={clsx('inline-block', iconColor)} />
            <span className='flex-1'>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

// How to use
// Override icon default icon color text-gray-400 with text-*-*
//
// import ListIcons, { ListItem } from '@/components/list-icons'
//
// const exampleListItems: ListItem[] = [
//   { icon: 'CircleAlert', item: 'Example Item 1' },
//   { icon: 'CircleAlert', item: 'Example Item 2' },
//   { icon: 'OctagonX', item: 'Example Item 3', iconColorClassName: 'text-red-500' },
// ];
//
// <ListIcons
//   listItems={exampleListItems}
//   className='foo bar'
// />
