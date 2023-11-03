'use client';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import getConfig from 'next/config';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const ProfileInfoCard = () => {
  const profileSection = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from('.profile-image', {
        x: 500,
        duration: 1.5,
        ease: 'power1.out(1)',
      });

      gsap.from('.profile-description', {
        x: -1000,
        duration: 1.5,
        ease: 'power1.out(1.7)',
      });
    }, profileSection);

    return () => ctx.revert();
  }, []);

  const SOCIAL_URLS = {
    TWITTER: 'https://twitter.com/anandsan_',
    LINKEDIN: 'https://www.linkedin.com/in/anandsandilya/',
    INSTAGRAM: 'https://www.instagram.com/anandsan_/',
    GITHUB: 'https://github.com/anand-san',
  };

  return (
    <section
      ref={profileSection}
      className='profile-section mx-auto grid place-items-center items-center pt-4 lg:container sm:pt-8 md:h-screen md:snap-start md:snap-always md:grid-cols-[2fr,1fr]'
    >
      <div
        className={`profile-image m-4 min-h-[200px]	 min-w-[200px] scale-x-[-1] rounded-full border border-solid border-neutral-300 bg-[url('/images/profile.png')] bg-cover bg-left bg-no-repeat shadow-xl dark:border-neutral-700 md:order-2 md:grid md:min-h-[384px] md:min-w-[384px] md:rounded-xl`}
      ></div>

      <div
        className={`profile-description md:order:1 flex min-h-[384px] flex-col justify-between p-8 pb-0 md:m-4`}
      >
        <h1 className='text-center text-2xl font-semibold md:text-left md:text-4xl'>
          Hello, I&apos;m Anand, a Software Developer With 7 years of
          experience.
        </h1>
        <p className='text-l mt-2 text-center font-normal md:text-left md:text-xl'>
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div className='mt-12 flex flex-col items-center md:flex-row'>
          <Link href='mailto:hello@anandks.com'>
            <button className='rounded-3xl bg-[#1d1d1d] px-14 py-3 font-semibold text-[#fff] hover:bg-[#3c3c3c] md:mr-4'>
              Lets Chat
            </button>
          </Link>
          <div className='mt-8 flex md:mt-0'>
            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={SOCIAL_URLS.INSTAGRAM} target='_blank'>
                    <Instagram
                      strokeWidth={1.25}
                      size={36}
                      className='ml-4 cursor-pointer text-[#d62976] hover:fill-[#f7d6bc]'
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

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
            </TooltipProvider>
          </div>
        </div>
      </div>
      <hr className='m-auto mt-16 w-[20vw] dark:bg-white md:hidden' />
    </section>
  );
};
