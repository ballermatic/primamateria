import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Default meta text.',
};

export default function AboutPage() {
  return (
    <main className='container mx-auto flex flex-col my-12 px-4'>
      <div className=' ~pt-3/8 pb-12'>
        <h1 className='giga mb-3 md:w-1/2'>Welcome to the mysterious realm of PrimaMateria</h1>
        <p className='nano caps text-gray-400'>Corporate doublespeak by Chat GPT 3.5</p>
      </div>
      <div className='narrative flex flex-col ~gap-3/8 mb-12'>
        <p className='md:w-1/2 pe-2 md:border-s-2 ps-0 md:~ps-4/6 py-2 md:border-smoke'>
          Arcane forces of the universe converge to create the extraordinary from the ordinary with
          PrimaMateria. Our elixirs are forged from the primal essences of ancient elements,
          blending shadow with light, chaos with order, in a delicate dance of alchemical mastery.
          Each potion is a whisper from the depths of time, a reminder of the power that lies
          dormant within every substance.
        </p>
        <p className='md:w-1/2 pe-2 md:border-s-2 ps-0 md:~ps-4/6 py-2 md:border-smoke self-center'>
          PrimaMateria beckons you to explore the alchemical mysteries that lie beyond the veil of
          the mundane. Our elixirs are not mere concoctions; they are gateways to realms unseen,
          keys to unlocking the hidden potential of the cosmos. Whether you seek to transmute the
          fabric of reality or simply yearn for a glimpse into the unknown, PrimaMateria offers a
          glimpse into the boundless possibilities of existence.
        </p>
        <p className='md:w-1/2 pe-2 md:border-s-2 ps-0 md:~ps-4/6 py-2 md:border-smoke self-end'>
          Embark on a journey through the enigmatic realms of PrimaMateria, where the line between
          science and sorcery blurs, and the boundaries of possibility are but illusions. Embrace
          the shadows of the unknown and harness the power of the arcane with PrimaMateria, the
          harbinger of transformation in a world of endless wonders.
        </p>
      </div>
    </main>
  );
}
