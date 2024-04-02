import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Typography: Bitter Serif',
  description: 'Mona Sans courtesy of Github, in a highly opinionated specimen.',
};

export default function TypographySerifPage() {
  return (
    <main className='container mx-auto flex flex-col ~p-3/8 mb-12'>
      <h1 className='giga pb-12 flex justify-between font-serif'>
        Typography: Bitter
        <Link
          href='/typography'
          className='font-sans hover:text-blue-500 hover:underline'>
          Sans
        </Link>
      </h1>
      <div className='font-serif'>
        <p className='mt-8 pb-2 border-b-2 border-smoke font-bold'>Headings</p>
        <div className='pt-12'>
          <p className='exa'>Wandering Quails Deploy Eucalyptus Photons</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> exa
          </p>
        </div>
        <div className='pt-12'>
          <p className='peta'>Burgeoning Mythical Xylophones Glisten</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> peta
          </p>
        </div>
        <div className='pt-12'>
          <p className='tera'>Kingly Sparrows Fly the Evening Plains</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> tera
          </p>
        </div>
        <div className='pt-12'>
          <p className='giga'>Brisk ferns envelop damp pathways</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> giga
          </p>
        </div>
        <div className='pt-12'>
          <p className='mega'>Gargantuan whelks explore neptunian depths</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> mega
          </p>
        </div>
        <div className='pt-12'>
          <p className='kilo'>Vibrant, quirky jackals roam zeniths, eclipsing moonlit fjords</p>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> kilo
          </p>
        </div>
        <p className='mt-24 pb-2 border-b-2 border-smoke font-bold'>Body Text</p>
        <div className='pt-12'>
          <div className='lede'>
            <p>
              In a verdant glen, quirky zebras whispered enigmatic tales under the moon’s glow.
              Juxtaposing realms, cryptic foxes danced by the sapphire lakes, their shadows
              entwining with twilight’s embrace.
            </p>
            <p>
              Nearby, whimsical jays orchestrated a symphony, echoing through the serene canopy of
              the enchanted forest.
            </p>
          </div>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> lede
          </p>
        </div>
        <div className='pt-12'>
          <div className='narrative'>
            <p>
              On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café,
              merging with the city’s vibrant pulse. A breeze whispered through the trees, carrying
              snippets of chatter and the distant hum of traffic.
            </p>
            <p>
              In the heart of downtown, modern sculptures stood juxtaposed against historic
              buildings, their silhouettes a testament to time’s passage. The evening sky, painted
              in hues of orange and purple, draped over the skyline, its colors reflecting in the
              glass facades of towering skyscrapers.
            </p>
          </div>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> narrative
          </p>
        </div>
        <div className='pt-12'>
          <div className='caption'>
            <p>
              On a sun-drenched street, the aroma of fresh pastries wafted from a bustling café,
              merging with the city’s vibrant pulse. A breeze whispered through the trees, carrying
              snippets of chatter and the distant hum of traffic.
            </p>
            <p>
              In the heart of downtown, modern sculptures stood juxtaposed against historic
              buildings, their silhouettes a testament to time’s passage. The evening sky, painted
              in hues of orange and purple, draped over the skyline, its colors reflecting in the
              glass facades of towering skyscrapers.
            </p>
          </div>
          <p className='mt-6 pt-2 border-t border-gray-300 tracking-wide'>
            <span className='nano caps text-gray-500'>classname:</span> caption
          </p>
        </div>
      </div>
    </main>
  );
}
