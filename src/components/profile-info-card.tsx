'use client';
import Image from 'next/image';

export const ProfileInfoCard = () => {
  return (
    <section className='profile-section mx-2 grid place-items-center items-center p-6 md:grid-cols-[1fr,2fr]'>
      <Image
        src='/images/profile.png'
        alt='profile-picture'
        width={180}
        height={180}
        className='pointer-events-none rounded-full border border-solid border-neutral-300 shadow-xl dark:border-neutral-700'
      />

      <div className={`profile-description flex flex-col items-center md:m-4`}>
        <h1 className='text-center text-2xl font-semibold md:text-left md:text-4xl'>
          ANAND SANDILYA
        </h1>
        <p className='text-l mt-2 text-center font-normal md:text-left md:text-xl'>
          I build full stack products that people love
        </p>
      </div>
    </section>
  );
};
