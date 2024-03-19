import Image from 'next/image';

export default function HomePage() {
  return (
    <div
      className='bg-cover bg-center bg-fixed min-h-screen'
      style={{ backgroundImage: 'url(gh-art/hp-bg.webp)', zIndex: -1 }}>
      <main className='text-white flex min-h-screen flex-col items-center justify-between'>
        <div className='relative z-10 flex place-items-center py-4'>
          <Image
            className='relative'
            src='/gh-art/eldritchfoundation.webp'
            alt='HP Lovecraft loves this logo'
            width={300}
            height={300}
            priority
          />
        </div>

        <div className='mb-32 grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
          <a
            href='/colors'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Colors{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Descend into the chromatic abyss, where hues unspeakable and tints unknowable converge
              in a spectral dance.
            </p>
          </a>

          <a
            href='/typography'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Typography{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Delve into a realm of forbidden scripts and unholy kernings, where typefaces writhe in
              the shadows of ancient texts, each glyph poised to touch the very essence of unspoken
              mysteries.
            </p>
          </a>

          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Docs{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Dive into the shadowy depths where the mysteries of Next.js await, unspoken features
              and API lurking, ready to be deciphered by the daring or the curious.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Learn{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Embark on an interactive odyssey through the realms of Next.js, complete with
              enigmatic quizzes to challenge your newfound knowledge!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Templates{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Venture through a labyrinth of starter templates for Next.js, each a gateway to untold
              possibilities and hidden pathways in web creation.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-gray-500 hover:border-gray-50 px-5 py-4 transition-colors backdrop-blur-sm hover:backdrop-blur-xl shadow-2xl shadow-smoke-500'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl`}>
              Deploy{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &#9654;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70 text-balance`}>
              Summon your Next.js site into the digital ether, instantly casting it to a shareable
              URL through the mystic portals of Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
