import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Linkedin, Twitter, Github } from 'lucide-react';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

export default function FooterContactCard() {
  const {
    publicRuntimeConfig: { SOCIAL_URLS },
  } = getConfig();

  return (
    <section
      id='collaborations'
      className='footer my-10 grid items-center rounded-[4px] bg-stone-100 text-neutral-700 lg:container dark:bg-gray-800 dark:text-neutral-300 sm:mb-24'
    >
      <div
        className={`m-4 flex flex-col justify-between space-y-6 py-8 text-center`}
      >
        <p className='text-2xl md:text-3xl'>Lets work together</p>
        <span>
          <p className='text-base font-extralight'>
            Reach out for collaborations or just to have a general chat at
          </p>
          <a
            href={'mailto:anand@sandilya.dev'}
            className='text-base font-light underline'
          >
            anand@sandilya.dev
          </a>
        </span>

        <div className='mt-12 flex justify-center'>
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
      </div>
    </section>
  );
}
