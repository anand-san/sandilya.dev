import Image from 'next/image';
import Link from 'next/link';

export default function AchievementsContainer() {
  return (
    <section className='achievements mt-10 w-full items-center'>
      <div className='mb-10 flex items-center justify-between'>
        <h6 className=' text-2xl font-bold tracking-wider'> Achievements 🏆</h6>
      </div>
      <div className='flex min-h-[300px] flex-col items-center justify-center gap-2 rounded-[4px] bg-stone-100 px-4 py-14 dark:bg-gray-800'>
        <Image
          alt='award-image'
          src={'/images/trophy.gif'}
          width={180}
          height={180}
          className='rounded-xl object-contain'
        />
        <div className='mt-4 text-center'>
          <h1 className='text-xl font-bold'>
            2x Spotlight Award at{' '}
            <Link
              href={'https://leadsquared.com'}
              target='_blank'
              className='hover:underline'
            >
              Leadsquared
            </Link>
          </h1>
          <p className='text-light'>Rewarded for exceptional performance</p>
        </div>
      </div>
    </section>
  );
}
