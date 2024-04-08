import type { Metadata } from 'next';
import Link from 'next/link';

import SectionCategory from '@/components/section-category';
import SectionHeader from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Typography: Bitter Serif',
  description: 'Mona Sans courtesy of Github, in a highly opinionated specimen.',
};

export default function TypographySerifPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col ~p-3/8'>
      <h1 className='giga flex justify-between ~mb-6/12 font-serif'>
        Typography: Bitter
        <Link
          href='/typography'
          className='font-sans text-gray-400 hover:text-blue-500 hover:underline'>
          Sans »
        </Link>
      </h1>
      <div className='font-serif'>
        <SectionHeader title='Headings' />
        <div className='pt-12'>
          <p className='exa'>Wandering Quails Deploy Eucalyptus Photons</p>
          <SectionCategory
            label='classname:'
            text='exa'
          />
        </div>
        <div className='pt-12'>
          <p className='peta'>Burgeoning Mythical Xylophones Glisten</p>
          <SectionCategory
            label='classname:'
            text='peta'
          />
        </div>
        <div className='pt-12'>
          <p className='tera'>Kingly Sparrows Fly the Evening Plains</p>
          <SectionCategory
            label='classname:'
            text='tera'
          />
        </div>
        <div className='pt-12'>
          <p className='giga'>Brisk ferns envelop damp pathways</p>
          <SectionCategory
            label='classname:'
            text='giga'
          />
        </div>
        <div className='pt-12'>
          <p className='mega'>Gargantuan whelks explore neptunian depths</p>
          <SectionCategory
            label='classname:'
            text='mega'
          />
        </div>
        <div className='pt-12'>
          <p className='kilo'>Vibrant, quirky jackals roam zeniths, eclipsing moonlit fjords</p>
          <SectionCategory
            label='classname:'
            text='kilo'
          />
        </div>
        <SectionHeader title='Body Text' />
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
