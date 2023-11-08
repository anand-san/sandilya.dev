'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import SauravImage from '../../public/images/testimonials/saurav.png';
import RizwanImage from '../../public/images/testimonials/rizwan.png';
import HarshitImage from '../../public/images/testimonials/harshit.png';
import BiswajitImage from '../../public/images/testimonials/biswajit.png';
import {
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
    <section className='mx-6 grid justify-around lg:container sm:grid-cols-2 sm:gap-3 md:pt-4'>
      {TESTIMONIALS.map(
        ({
          order,
          name,
          image,
          designation,
          message,
          organisation,
          profileUrl,
        }) => (
          <div
            key={order}
            className='my-2 flex h-64 flex-col justify-around rounded-2xl border bg-gradient-to-br from-orange-50 via-sky-50 to-fuchsia-50 px-4 shadow-lg transition-all dark:from-stone-900 dark:to-stone-900 md:h-[320px]'
            onClick={() => setActiveTestimonialIndex(order)}
          >
            <div className='flex items-center justify-around'>
              <Image
                src={image}
                width={120}
                height={10}
                alt={`feedback${name}`}
                className='w-16 rounded-full md:w-28'
              />
              <span className='flex flex-col items-center'>
                <p className='text-md font-bold md:text-lg lg:text-xl'>
                  {name}
                </p>
                <p className='font-semilight text-center text-sm text-zinc-400'>
                  {designation}
                </p>

                <p className='font-semilight text-center text-sm text-zinc-400'>
                  {organisation}
                </p>
              </span>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={profileUrl} target='_blank'>
                    <Linkedin
                      strokeWidth={1.25}
                      size={32}
                      className='ml-4 cursor-pointer text-[#0072b1] hover:fill-[#0072b1]'
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='top'>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className='text-center text-sm text-zinc-900 md:text-base md:font-light md:leading-6'>
              {message}
            </p>
          </div>
        )
      )}
    </section>
  );
}

interface TestomonialProps {
  order: number;
  name: string;
  organisation: string;
  image: StaticImageData;
  designation: string;
  shortMessage: string;
  message: string;
  profileUrl: string;
}
const TESTIMONIALS: TestomonialProps[] = [
  {
    name: 'Saurav Mishra',
    organisation: 'Leadsquared',
    image: SauravImage,
    designation: 'Senior Engineering Manager',
    shortMessage: 'A reliable and highly capable professional',
    message:
      'Anand is passionate about writing quality code and solving problems through the development of creative and innovative software. His skills and knowledge are unparalleled. He had the most extensive and diverse knowledge of software in the team. A reliable and highly capable professional.',
    order: 1,
    profileUrl: 'https://www.linkedin.com/in/sauravkmishra/',
  },
  {
    name: 'Harshit Shrivastava',
    image: HarshitImage,
    organisation: 'Leadsquared',
    designation: 'Senior Developer',
    shortMessage: 'Excellent in writing clean and organised code',
    message:
      'Anand is keenly devoted to work. He demonstrated from early in tenure that he is excellent in writing clean and organised code. He is an Exceptional software engineer, very easy going and enjoyable to be around.',
    order: 2,
    profileUrl: 'https://www.linkedin.com/in/harshit--shrivastava/',
  },
  {
    name: 'Biswajit Das',
    image: BiswajitImage,
    organisation: 'Xerobit Ventures',
    designation: 'Director',
    shortMessage:
      'Excellent job in managing and improving our systems consistently',
    message:
      'I highly recommend Anand to anyone seeking a dedicated, professional, and proactive freelancer. He is not just a developer; he is a true partner in your project success. Working with him was a truly positive experience, and I look forward to any opportunity to collaborate with him again in the future.',
    profileUrl: 'https://www.linkedin.com/in/ibiswajitdas/',
    order: 3,
  },
  {
    name: 'Syed Rizwan Ali',
    image: RizwanImage,
    organisation: 'Leadsquared',
    designation: 'Team Lead',
    shortMessage:
      'Excellent job in managing and improving our systems consistently',
    message:
      'Anand has always stayed up to date on software developments and finding new solutions. He has also done an excellent job in managing and improving our systems consistently. Along with these, He bought energy and dependability that has made him crucial to the team.',
    profileUrl: 'https://www.linkedin.com/in/syed-rizwan-ali-344b151b/',
    order: 4,
  },
];
