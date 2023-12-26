import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

export default function FooterContactCard() {
  const {
    publicRuntimeConfig: { SOCIAL_URLS },
  } = getConfig();

  return (
    <section className='grid items-center py-8 lg:container '>
      <div className={`m-4 flex flex-col justify-between p-8 text-center`}>
        <h1 className='text-2xl md:text-3xl'>Want to work together?</h1>
        <p className='text-base font-extralight'>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <span className='text-base font-light'>anand@sandilya.dev</span>
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