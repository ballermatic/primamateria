import Image from 'next/image';

export default function HomePage() {
  return (
    <div
      className='bg-cover bg-center bg-fixed min-h-screen'
      style={{ backgroundImage: 'url(gh-art/hp-bg.webp)', zIndex: -1 }}>
      <main className='text-white flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex'>
          <a
            className='fixed left-0 top-0 flex w-full justify-center border-gray-500 hover:border-gray-100 pb-6 pt-8 backdrop-blur-sm hover:backdrop-blur-xl from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 shadow-2xl shadow-smoke-500'
            href='/colors'>
            Non Euclidian Color Selects &#9654;
          </a>
          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none'>
            <a
              className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'>
              Arcane{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className='invert'
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

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

        <div className='mb-32 grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
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
