import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sandbox',
  description: 'Just playing around... in the sand.',
};

export default function SandboxPage() {
  return (
    <main className='-z-50 flex flex-col overflow-hidden'>
      <div className='border-b border-smoke bg-smoke'>
        <h1 className='nano caps text-white ~p-3/8'>Sandbox</h1>
      </div>

      <div className='flex grow items-center bg-gradient-to-br from-bluebird-500 to-cobalt-500 ~p-12/20'>
        <p className='-skew-x-12 -skew-y-6 bg-gradient-to-br from-ticonderoga-500 to-yellow-300 bg-clip-text font-black uppercase leading-[0.8em] tracking-tight text-transparent ~ps-8/16 ~pb-8/16 ~text-[6.4rem]/[16rem] font-narrow'>
          Massive <span className='font-bold text-white font-narrow'>promotional</span> headlines
        </p>
      </div>

      <div className='flex grow items-center justify-between bg-gradient-to-r from-pucker-500 to-pucker-700 ~p-8/16'>
        <p className='exa text-ticonderoga-500'>
          Luck favors the bold, <span className='font-serif font-light italic'>darling</span>
        </p>
        <div className='ml-12 flex size-72 flex-col items-center justify-center rounded-full rounded-tr-none bg-ticonderoga-500 text-center shadow-xl shadow-pucker-800'>
          <p className='text-2xl font-bold leading-tight tracking-tight text-pucker-700'>
            Edna Mode
            <br />
            <span className='text-xl font-light'>No Capes!</span>
          </p>
        </div>
      </div>

      <div className='flex flex-1 items-center justify-between border-x-8 border-grass-500 bg-ticonderoga-50 ~gap-16/24 ~p-12/24 md:~mx-12/24'>
        <div>
          <p className='font-serif text-4xl font-light tracking-tight'>Constructive authority</p>
          <p className='ml-1 mt-3 text-xl font-light'>
            established through{' '}
            <span className='border-b-2 border-ticonderoga-500 font-medium'>nuance</span> &amp;{' '}
            <span className='border-b-2 border-ticonderoga-500 font-medium'>clarity</span>.
          </p>
        </div>
        <div
          className='flex grow items-center justify-center
        '>
          <Image
            src='../../../thingy.svg'
            alt='A thingy'
            width={300}
            height={85}
          />
        </div>
      </div>
    </main>
  );
}
