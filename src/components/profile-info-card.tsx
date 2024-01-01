'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

export const ProfileInfoCard = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleWindowResize = (innerWidth: number) => {
    setWindowWidth(innerWidth);
  };

  useEffect(() => {
    handleWindowResize(window.innerWidth);

    window.addEventListener('resize', () =>
      handleWindowResize(window.innerWidth)
    );

    return () => {
      window.removeEventListener('resize', () =>
        handleWindowResize(window.innerWidth)
      );
    };
  }, []);

  const isMobile = windowWidth && windowWidth <= 640;

  const profileImageMobile = 'https://i.imgur.com/QxkSWfe.png';

  const profileImageDesktop = 'https://i.imgur.com/sy3Hd59.png';

  const profileImageProps = {
    src: isMobile ? profileImageMobile : profileImageDesktop,

    width: isMobile ? 450 : 165,
    height: isMobile ? 450 : 300,
  };

  return (
    <>
      {windowWidth ? (
        <Image
          alt='profile-picture'
          className='profile-image pointer-events-none justify-self-center rounded-[4px] border border-solid border-neutral-300 shadow-xl dark:border-neutral-700'
          {...profileImageProps}
        />
      ) : (
        <> </>
      )}

      <div
        className={`profile-description mt-4 flex flex-col justify-center space-y-4 sm:mt-0`}
      >
        <h1 className='text-3xl font-bold sm:text-left sm:text-4xl'>
          hey there 👋 I&apos;m Anand
        </h1>
        <p className='sm:text-md text-md mt-2 font-normal text-gray-700 dark:text-gray-400 sm:text-left'>
          I help companies build full stack applications that users love.
          Currently I <Link href={'/work'}>work</Link> as a full stack engineer
          at{' '}
          <Link href={'https://quantilope.com'} target='_blank'>
            Quantilope
          </Link>{' '}
          where we are building an automated end to end market research
          platform. I try to solve real world problems with my code and
          engineering skills.
        </p>
        <p className='text-gray-700 dark:text-gray-400'>
          In my free time, I sometimes create content, build side projects, play
          piano and video games 🎹 🎮
        </p>

        <div className='space-x-4'>
          <Link
            href={'#collaborations'}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'p-0 font-semibold'
            )}
            // target='_blank'
          >
            Get in touch
            <ArrowUpRight className='ml-2 h-4 w-4' />
          </Link>
          {/* <Link
            href={'https://twitter.com/anandsan_'}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'p-0 font-semibold'
            )}
          >
            Follow me
            <ArrowUpRight className='ml-2 h-4 w-4' />
          </Link> */}
        </div>
      </div>
    </>
  );
};
