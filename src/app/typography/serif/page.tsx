import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import Heading from '@/components/heading';
import SectionCategory from '@/components/section-category';
import SectionHeader from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Typography: Bitter Serif',
  description: 'Mona Sans courtesy of Github, in a highly opinionated specimen.',
};

export default function TypographySerifPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col ~p-3/8'>
      <Heading
        level='h1'
        preset='tera'
        serif
        className='flex justify-between gap-9 font-serif ~mb-6/12'>
        Typography: Bitter
        <Link
          href='/typography'
          className='inline-flex items-center gap-1 font-sans text-gray-500 hover:text-blue-500'>
          Sans <ArrowRight />
        </Link>
      </Heading>
      <div className='bg-smoke px-7 py-6 font-mono text-sm text-white md:w-1/2'>
        <p className='mb-4 font-semibold uppercase'>Heading Component Properties</p>
        <ul className='*:mb-4'>
          <li>
            <span className='font-semibold'>level:</span> h1 through h5, required
          </li>
          <li>
            preset: size and style settings (exa, peta, tera, giga, mega, kilo, hecto, deci, nano)
          </li>
          <li>anchor: generates named anchor tag link to heading</li>
          <li>serif: toggle serif font and settings</li>
        </ul>
      </div>
      <SectionHeader title='Headings' />
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='exa'
          serif>
          Wandering Quails Deploy Eucalyptus Photons
        </Heading>
        <SectionCategory
          label='classname:'
          text='exa'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='peta'
          serif>
          Burgeoning Mythical Xylophones Glisten
        </Heading>
        <SectionCategory
          label='classname:'
          text='peta'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='tera'
          serif>
          Kingly Sparrows Fly the Evening Plains
        </Heading>
        <SectionCategory
          label='classname:'
          text='tera'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='giga'
          serif>
          Brisk ferns envelop damp pathways
        </Heading>
        <SectionCategory
          label='classname:'
          text='giga'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='mega'
          serif>
          Gargantuan whelks explore neptunian depths
        </Heading>
        <SectionCategory
          label='classname:'
          text='mega'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='kilo'
          serif>
          Vibrant, quirky jackals roam zeniths, eclipsing moonlit fjords
        </Heading>
        <SectionCategory
          label='classname:'
          text='kilo'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='hecto'
          serif>
          Brisk ferns envelop damp pathways
        </Heading>
        <SectionCategory
          label='classname:'
          text='hecto'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='deci'
          serif>
          Gargantuan whelks explore neptunian depths
        </Heading>
        <SectionCategory
          label='classname:'
          text='deci'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='nano'
          serif>
          Kingly sparrows fly the evening plains
        </Heading>
        <SectionCategory
          label='classname:'
          text='nano'
        />
      </div>
      <div className='pt-12'>
        <Heading
          level='h2'
          preset='nano'
          serif
          className='caps font-wide'>
          Kingly sparrows fly the evening plains
        </Heading>
        <SectionCategory
          label='classname:'
          text='nano caps'
        />
      </div>
      <SectionHeader title='Body Text' />
      <div className='font-serif'>
        <div className='lede'>
          <p>
            In a verdant glen, quirky zebras whispered enigmatic tales under the moon’s glow.
            Juxtaposing realms, cryptic foxes danced by the sapphire lakes, their shadows entwining
            with twilight’s embrace.
          </p>
          <p>
            Nearby, whimsical jays orchestrated a symphony, echoing through the serene canopy of the
            enchanted forest.
          </p>
        </div>
        <SectionCategory
          label='classname:'
          text='lede'
        />
        <div className='narrative'>
          <p>
            On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café,
            merging with the city’s vibrant pulse. A breeze whispered through the trees, carrying
            snippets of chatter and the distant hum of traffic.
          </p>
          <p>
            In the heart of downtown, modern sculptures stood juxtaposed against historic buildings,
            their silhouettes a testament to time’s passage. The evening sky, painted in hues of
            orange and purple, draped over the skyline, its colors reflecting in the glass facades
            of towering skyscrapers.
          </p>
        </div>
        <SectionCategory
          label='classname:'
          text='narrative'
        />
        <div className='caption'>
          <p>
            On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café,
            merging with the city’s vibrant pulse. A breeze whispered through the trees, carrying
            snippets of chatter and the distant hum of traffic.
          </p>
          <p>
            In the heart of downtown, modern sculptures stood juxtaposed against historic buildings,
            their silhouettes a testament to time’s passage. The evening sky, painted in hues of
            orange and purple, draped over the skyline, its colors reflecting in the glass facades
            of towering skyscrapers.
          </p>
          <SectionCategory
            label='classname:'
            text='caption'
          />
        </div>
      </div>
    </main>
  );
}
