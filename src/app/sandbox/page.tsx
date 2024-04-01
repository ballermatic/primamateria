import type { Metadata } from 'next';
import Image from 'next/image';

const graphic = '';

export const metadata: Metadata = {
  title: 'Sandbox',
  description: 'Just playing around... in the sand.',
};

const stylesThing1 = {};

export default function SandboxPage() {
  return (
    <main className='flex flex-col'>
      <div className='border-b border-smoke'>
        <h1 className='giga ~p-3/8'>Sandbox</h1>
      </div>

      <div className='flex flex-grow min-h-[50dvh] items-center bg-gradient-to-br from-bluebird-500 to-cobalt-500 ~p-8/16'>
        <p
          style={stylesThing1}
          className='~text-[6.4rem]/[16rem] font-black font-narrow uppercase from-ticonderoga-500 to-yellow-300 bg-gradient-to-br bg-clip-text text-transparent tracking-tight leading-[0.8em] -skew-y-6 -skew-x-12 ~pb-8/16 ~ps-8/16'>
          Massive <span className='text-white font-bold font-narrow'>promotional</span> headlines
        </p>
      </div>

      <div className='flex flex-grow min-h-[50dvh] items-center justify-between bg-gradient-to-r from-pucker-500 to-pucker-700 ~p-8/16'>
        <p className='text-ticonderoga-500 exa'>
          Luck favors the bold, <span className='italic font-light font-serif'>darling</span>
        </p>
        <div className='ml-12 w-72 h-72 bg-ticonderoga-500 rounded-full flex flex-col items-center justify-center text-center shadow-xl shadow-pucker-800'>
          <p className='font-bold text-pucker-700 text-2xl leading-tight tracking-tight'>
            Edna Mode
            <br />
            <span className='font-light text-xl'>No Capes!</span>
          </p>
        </div>
      </div>

      <div className='flex flex-1 ~gap-16/24 justify-between items-center min-h-[50dvh] ~p-8/16 ~mx-12/24 border-ticonderoga-500 border-x-8 bg-ticonderoga-50'>
        <div>
          <p className='font-serif font-light text-4xl tracking-tight'>Constructive authority</p>
          <p className='font-light text-xl mt-3 ml-1'>
            established through{' '}
            <span className='font-medium border-b-2 border-ticonderoga-500'>nuance</span> &amp;{' '}
            <span className='font-medium border-b-2 border-ticonderoga-500'>clarity</span>.
          </p>
        </div>
        <div
          className='flex flex-grow items-center justify-center
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
