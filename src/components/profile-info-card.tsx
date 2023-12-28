'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { SOCIAL_URLS } from '../utils/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
          className='profile-image pointer-events-none rounded-lg border border-solid border-neutral-300 shadow-xl dark:border-neutral-700'
          {...profileImageProps}
        />
      ) : (
        <> </>
      )}

      <div
        className={`profile-description flex h-[150px] flex-col items-center justify-center sm:h-[180px]`}
      >
        <h1 className='text-center text-3xl font-semibold sm:text-left sm:text-4xl'>
          Hi, I&apos;m Anand
        </h1>
        <p className='mt-2 text-center text-xl font-normal sm:text-left sm:text-xl'>
          I build full stack products that people love
        </p>
      </div>
      <div
        className={`collaborations-info flex flex-col justify-between text-center`}
      >
        <p className='text-base font-extralight'>
          Reach out for collaborations or just a friendly hello
          <br />
          <span className='text-base font-light'>anand@sandilya.dev</span>
        </p>
      </div>
      <div className='collaborations-links mb-4 mt-8 flex justify-center sm:mt-4'>
        <Tooltip>
          <TooltipTrigger>
            <Link href={SOCIAL_URLS.LINKEDIN} target='_blank'>
              <Linkedin
                strokeWidth={1.25}
                size={36}
                className='ml-4 cursor-pointer text-[#0072b1] hover:fill-[#0072b1]'
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Link href={SOCIAL_URLS.TWITTER} target='_blank'>
              <Twitter
                strokeWidth={1.25}
                size={36}
                className='ml-4 cursor-pointer text-[#1DA1F2] hover:fill-[#1DA1F2]'
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Twitter/ X</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Link href={SOCIAL_URLS.GITHUB} target='_blank'>
              <Github
                strokeWidth={1.25}
                size={36}
                className='ml-4 cursor-pointer text-[#171515] hover:fill-[#171515] dark:text-[#fff] dark:hover:fill-[#fff]'
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
};
