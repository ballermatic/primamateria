import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Typography: Mona Sans',
  description: 'Mona Sans courtesy of Github, in a highly opinionated specimen.',
};

export default function TypographyPage() {
  return (
    <main className='container mx-auto my-12 flex flex-col ~p-3/8'>
      <h1 className='giga flex justify-between ~mb-6/12'>
        Typography: Mona Sans
        <Link
          href='/typography/serif'
          className='font-serif font-normal text-gray-400 hover:text-blue-500 hover:underline'>
          Serif »
        </Link>
      </h1>
      <p className='mt-8 border-b-2 border-smoke pb-2 font-bold'>Headings</p>
      <div className='pt-12'>
        <p className='exa'>Wandering Quails Deploy Eucalyptus Photons</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> exa
        </p>
      </div>
      <div className='pt-12'>
        <p className='peta'>Burgeoning Mythical Xylophones Glisten</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> peta
        </p>
      </div>
      <div className='pt-12'>
        <p className='tera'>Kingly Sparrows Fly the Evening Plains</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> tera
        </p>
      </div>
      <div className='pt-12'>
        <p className='giga'>Brisk ferns envelop damp pathways</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> giga
        </p>
      </div>
      <div className='pt-12'>
        <p className='mega'>Gargantuan whelks explore neptunian depths</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> mega
        </p>
      </div>
      <div className='pt-12'>
        <p className='kilo'>Vibrant, quirky jackals roam zeniths, eclipsing moonlit fjords</p>
        <p className='tracking-wide mt-6 border-t border-gray-300 pt-2'>
          <span className='nano caps text-gray-500'>classname:</span> kilo
        </p>
      </div>
      <p className='mt-24 border-b-2 border-smoke pb-2 font-bold'>Body Text</p>
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
      <p className='tracking-wide border-t border-gray-300 pt-2 mt-2 mb-6'>
        <span className='nano caps text-gray-500'>classname:</span> lede
      </p>
      <div className='narrative'>
        <p>
          On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café, merging
          with the city’s vibrant pulse. A breeze whispered through the trees, carrying snippets of
          chatter and the distant hum of traffic.
        </p>
        <p>
          In the heart of downtown, modern sculptures stood juxtaposed against historic buildings,
          their silhouettes a testament to time’s passage. The evening sky, painted in hues of
          orange and purple, draped over the skyline, its colors reflecting in the glass facades of
          towering skyscrapers.
        </p>
      </div>
      <p className='tracking-wide border-t border-gray-300 pt-2 mt-2 mb-6'>
        <span className='nano caps text-gray-500'>classname:</span> narrative
      </p>
      <div className='caption'>
        <p>
          On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café, merging
          with the city’s vibrant pulse. A breeze whispered through the trees, carrying snippets of
          chatter and the distant hum of traffic.
        </p>
        <p>
          In the heart of downtown, modern sculptures stood juxtaposed against historic buildings,
          their silhouettes a testament to time’s passage. The evening sky, painted in hues of
          orange and purple, draped over the skyline, its colors reflecting in the glass facades of
          towering skyscrapers.
        </p>
        <p className='tracking-wide border-t border-gray-300 pt-2 mt-2 mb-6'>
          <span className='nano caps text-gray-500'>classname:</span> caption
        </p>
      </div>
    </main>
  );
}
