import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className='container py-6 lg:py-10'>
      <div className='flex flex-col'>
        <div className='flex-1 space-y-4'>
          <p className='text-lg text-muted-foreground sm:text-xl'>
            Read my case studies, thoughts on software development, design, and
            more.
          </p>
        </div>
      </div>
      <hr className='m-auto my-10 w-24' />
      <BlogCardSkeleton />
    </section>
  );
}

const BlogCardSkeleton = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <Skeleton className='hidden h-[100px] w-[100px] rounded-[4px] border transition-colors dark:border-neutral-700 sm:block' />

      <div className='flex w-full flex-col justify-center space-y-2 sm:ml-4'>
        <span className='text-2xl font-extrabold'>
          <Skeleton className='h-[32px] w-3/6' />
        </span>
        <span className='text-muted-foreground'>
          <Skeleton className='h-[24px] w-full' />
        </span>
        <div className='flex flex-row items-center gap-2'>
          <Skeleton className='h-[16px] w-[60px]' />
          <Skeleton className='h-[16px] w-[40px]' />
          <Skeleton className='h-[16px] w-[60px]' />
        </div>
      </div>
    </div>
  );
};
