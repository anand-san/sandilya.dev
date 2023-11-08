'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import SauravImage from '../../public/images/testimonials/saurav.png';
import RizwanImage from '../../public/images/testimonials/rizwan.png';
import HarshitImage from '../../public/images/testimonials/harshit.png';
import { cn } from '@/lib/utils';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TestomonialsCard() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] =
    useState<number>(1);

  return (
    <section className='flex items-center justify-center pt-16 lg:container md:pt-0'>
      <div>
        <div className='grid grid-cols-2 justify-around gap-12'>
          <div>
            {TESTIMONIALS.map(({ order, name, image, designation }) => (
              <div
                key={order}
                className={cn(
                  'mb-6 flex cursor-pointer rounded-xl border border-transparent px-20  py-8 hover:border-neutral-200 dark:hover:border-neutral-700',
                  order === activeTestimonialIndex &&
                    'border-neutral-200 dark:border-neutral-700'
                )}
                onClick={() => setActiveTestimonialIndex(order)}
              >
                <Image
                  src={image}
                  width={56}
                  height={56}
                  alt={`feedback${name}`}
                  className='mr-4 rounded-full'
                />
                <div className='flex flex-col items-baseline'>
                  <span>
                    {name}
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={
                            'https://www.linkedin.com/in/syed-rizwan-ali-344b151b/'
                          }
                          target='_blank'
                        >
                          <Linkedin
                            strokeWidth={1.25}
                            size={14}
                            className='ml-4 cursor-pointer text-[#0072b1] hover:fill-[#0072b1]'
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='top'>
                        <p>Linkedin</p>
                      </TooltipContent>
                    </Tooltip>
                  </span>
                  <span className='font-semilight text-sm text-zinc-400'>
                    {designation}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col'>
            <h1 className='mb-12 text-xl font-bold tracking-wider'>
              {TESTIMONIALS[activeTestimonialIndex - 1].shortMessage}{' '}
            </h1>
            <p className='leading-6 tracking-wide'>
              {TESTIMONIALS[activeTestimonialIndex - 1].message}
            </p>
          </div>
        </div>
      </div>
      <hr className='m-auto mt-16 w-[20vw] dark:bg-white md:hidden' />
    </section>
  );
}

interface TestomonialProps {
  order: number;
  name: string;
  image: StaticImageData;
  designation: string;
  shortMessage: string;
  message: string;
}
const TESTIMONIALS: TestomonialProps[] = [
  {
    name: 'Saurav Mishra',
    image: SauravImage,
    designation: 'Senior Engineering Manager',
    shortMessage: 'A reliable and highly capable professional',
    message:
      'Anand is passionate about writing quality code and solving problems through the development of creative and innovative software. His skills and knowledge are unparalleled. He had the most extensive and diverse knowledge of software in the team. A reliable and highly capable professional.',
    order: 1,
  },
  {
    name: 'Harshit Shrivastava',
    image: HarshitImage,
    designation: 'Senior Developer',
    shortMessage: 'Excellent in writing clean and organised code',
    message:
      'Anand is keenly devoted to work. He demonstrated from early in tenure that he is excellent in writing clean and organised code. He is an Exceptional software engineer, very easy going and enjoyable to be around.',
    order: 2,
  },
  {
    name: 'Syed Rizwan Ali Mishra',
    image: RizwanImage,
    designation: 'Team Lead',
    shortMessage:
      'Excellent job in managing and improving our systems consistently',
    message:
      'Anand has always stayed up to date on software developments and finding new solutions. He has also done an excellent job in managing and improving our systems consistently. Along with these, He bought energy and dependability that has made him crucial to the team.',

    order: 3,
  },
];
