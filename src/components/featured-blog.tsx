import { getBlogPosts } from '@/lib/blog-mdx-utils';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { getFullDate } from '@/utils/format-date';
import { ArrowUpRight, ChevronRightIcon } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { Views } from '@/app/blog/page';
import Link from 'next/link';

export default function FeaturedBlog() {
  const featuredPosts = getBlogPosts().filter(
    (post) => post.metadata.featured === 'true'
  );

  return (
    <section className='featured-blog mt-10 w-full'>
      {featuredPosts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <div
            key={index}
            className='flex max-h-[120px] min-h-[100px] cursor-pointer items-center rounded-[4px] bg-stone-100 p-4 hover:bg-stone-200 dark:bg-slate-800 hover:dark:bg-gray-700 sm:flex-row'
          >
            <Image
              src={post.metadata.image}
              alt={post.slug}
              width={80}
              height={80}
              className='hidden rounded-[4px] border bg-muted object-cover transition-colors dark:border-neutral-700 sm:block'
              priority={index <= 1}
            />
            <div className='flex w-full flex-col justify-center space-y-2 sm:ml-4'>
              <h2 className='text-2xl font-extrabold'>{post.metadata.title}</h2>
              <div className='flex flex-row items-center gap-2'>
                <span className='text-sm text-neutral-600 dark:text-neutral-400'>
                  {getFullDate(post.metadata.publishedAt)} &middot;
                </span>
                <span className='text-sm'>
                  <Suspense fallback={<Skeleton className='h-4 w-[60px]' />}>
                    <Views slug={post.slug} />
                  </Suspense>
                </span>
                <span className='hidden sm:block'>&middot; </span>
                <span className='hidden text-sm text-neutral-600 hover:underline dark:text-neutral-400 sm:block'>
                  Read more
                </span>
                <ChevronRightIcon className='mt-[2px] hidden h-4 w-4 text-neutral-600 dark:text-neutral-400 sm:block' />
              </div>
            </div>
            <ArrowUpRight className='h-6 w-6' />
          </div>
        </Link>
      ))}
    </section>
  );
}
