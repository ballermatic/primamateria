import Image from 'next/image';

export default function Home() {
  return (
    <div
      className='bg-cover bg-center bg-fixed min-h-screen'
      style={{ backgroundImage: 'url(gh-art/hp-bg.webp)', zIndex: -1 }}>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Non Euclidian geometries abound
          </p>
          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
            <a
              className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'>
              Arcane{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className='dark:invert'
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial from-white to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic from-white to-transparent after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br from-white to-transparent before:dark:opacity-10 after:dark:from-white after:dark:to-transparent after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
            src='/gh-art/eldritchfoundation.webp'
            alt='HP Lovecraft loves this logo'
            width={300}
            height={300}
            priority
          />
        </div>

        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-stone-800/60'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Dive into the shadowy depths where the mysteries of Next.js await, unspoken features
              and API lurking, ready to be deciphered by the daring or the curious.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-stone-800/60'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Embark on an interactive odyssey through the realms of Next.js, complete with
              enigmatic quizzes to challenge your newfound knowledge!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-stone-800/60'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
              Venture through a labyrinth of starter templates for Next.js, each a gateway to untold
              possibilities and hidden pathways in web creation.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-500 hover:dark:bg-stone-800/60'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
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
