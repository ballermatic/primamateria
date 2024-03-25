import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col gap-12 p-12 items-center'>
      <div className='relative z-10 flex place-items-center'>
        <Image
          className='relative'
          src='/gh-art/eldritchfoundation.webp'
          alt='HP Lovecraft loves this logo'
          width={300}
          height={300}
          priority
        />
      </div>
      <div className='max-w-lg text-center'>
        <h1 className='giga mb-6'>Eldritch Foundation</h1>
        <div className='lede'>
          <p>
            In the stygian depths, arcane scripts and eldritch styles twist reality, forging
            presences whispering unspeakable truths. Unseen forces of code weave a tapestry beyond
            mortal comprehension, a template drawn from the shadows of technology’s most mysterious
            realms.
          </p>
        </div>
      </div>

      <a
        href='/colors'
        className='group rounded-sm border border-gray-400 hover:border-smoke-500 px-5 p-6'>
        <h2 className='caps font-medium mb-3'>
          Colors{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &#9654;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Descend into the chromatic abyss, where hues unspeakable and tints unknowable converge in
          a spectral dance.
        </p>
      </a>

      <a
        href='/typography'
        className='group rounded-sm border border-gray-400 hover:border-smoke-500 px-5 p-6'>
        <h2 className='caps font-medium mb-3'>
          Typography{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &#9654;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
          Delve into a realm of forbidden scripts and unholy kernings, where typefaces writhe in the
          shadows of ancient texts, each glyph poised to touch the very essence of unspoken
          mysteries.
        </p>
      </a>
    </main>
  );
}
