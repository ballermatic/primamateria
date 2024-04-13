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
        className='flex justify-between font-serif ~mb-6/12'>
        Typography: Bitter
        <Link
          href='/typography'
          className='inline-flex items-center gap-2 font-sans text-gray-400 hover:text-blue-500'>
          Sans <ArrowRight />
        </Link>
      </Heading>
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
