import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className='grid w-full sm:px-16'>
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        <Skeleton className='h-[32px] w-3/6' />
      </h1>

      <div className=' mt-2 flex max-w-[650px] items-center justify-between text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          <Skeleton className='h-[20px] w-[200px]' />
        </p>
        <Skeleton className='h-[20px] w-[55px]' />
      </div>
      <p className='mb-8 mt-1 text-sm text-neutral-600 dark:text-neutral-400'>
        <Skeleton className='h-[20px] w-[100px]' />
      </p>

      <Skeleton className='h-[250px] w-[99%] sm:h-[320px]' />

      <Skeleton className='mb-4 mt-6 h-[40px] sm:mb-6 sm:mt-10' />

      <Skeleton className='mt-1 h-[84px]' />

      <Skeleton className='mt-1 h-[84px]' />
    </section>
  );
}
