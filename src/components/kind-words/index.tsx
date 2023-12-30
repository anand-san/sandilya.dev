import Image from 'next/image';
import './kind-words.css';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ALL_TESTIMONIALS, Testimonial } from '@/lib/constants';
export default function KindWordsContainer() {
  return (
    <div className='kind-words mt-10 space-y-1'>
      <div className='mb-10 flex items-center justify-between'>
        <h6 className=' text-2xl font-bold tracking-wider'>Kind Words 💝</h6>
        <Link
          href='/recommendations'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'p-0 font-semibold'
          )}
        >
          View All
          <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </div>

      <div className='testimonials mb-12 w-full'>
        {ALL_TESTIMONIALS.map((testimonial) => (
          <KindWords key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

const KindWords = ({
  name,
  designation,
  message,
  classNames,
  imageUrl,
}: Testimonial) => {
  return (
    <div
      className={cn(
        classNames,
        'bg-stone-100 p-6 text-neutral-700 dark:bg-gray-800 dark:text-neutral-300'
      )}
    >
      <div
        className={cn(
          'mb-4 flex space-x-2',
          !designation ? 'flex-col' : 'flex-row'
        )}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={'test'}
            width={50}
            height={50}
            className='rounded-full'
          />
        )}
        <div className='flex flex-col'>
          <span className='text-md mt-1 font-bold'>{name}</span>
          {designation && (
            <span className='text-xs font-light tracking-wider text-gray-700 dark:text-gray-400'>
              {designation}
            </span>
          )}
        </div>
      </div>
      <p className='text-gray-700 dark:text-gray-400'>{message}</p>
    </div>
  );
};
