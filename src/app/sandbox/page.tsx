import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandbox',
  description: '',
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
      <div className='flex flex-grow min-h-[50dvh] items-center bg-gradient-to-b from-pucker-500 to-pink-500 ~p-8/16 border-eden-500 border-b-[6rem]'>
        <p className='text-ticonderoga-500 exa'>Excitement Awaits</p>
        <div className='ml-12 w-72 h-72 bg-ticonderoga-500 rounded-full'></div>
      </div>
    </main>
  );
}
