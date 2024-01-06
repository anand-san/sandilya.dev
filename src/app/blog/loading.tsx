import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <BlogCardSkeleton />;
}

export const BlogCardSkeleton = () => {
  return (
    <div className='flex h-[150px] w-full flex-col items-center rounded-[4px] bg-stone-100 p-4 py-4 dark:bg-gray-800 sm:flex-row'>
      <Skeleton className='hidden h-[120px] w-[120px] rounded-[4px] border transition-colors dark:border-neutral-700 sm:block' />

      <div className='flex w-5/6 flex-col justify-center sm:ml-4'>
        <span className='text-2xl font-extrabold'>
          <Skeleton className='h-[32px] w-3/6' />
        </span>
        <span className='mt-4 text-muted-foreground'>
          <Skeleton className='h-[24px] w-full' />
        </span>
        <div className='mt-4 flex flex-row items-center gap-2'>
          <Skeleton className='h-[20px] w-[60px]' />
          <Skeleton className='h-[20px] w-[40px]' />
          <Skeleton className='h-[20px] w-[60px]' />
        </div>
      </div>
    </div>
  );
};
