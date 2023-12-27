import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from '@/db/queries';
import { Metadata, getBlogPosts } from '@/db/blog';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { getFullDate } from '../../../utils/format-date';

export const metadata = {
  title: 'Blog',
  description:
    'Read my case studies, thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  // TODO: Add a tab bar navigation based on tags
  return (
    <section className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col'>
        <div className='flex-1 space-y-4'>
          <p className='text-lg text-muted-foreground sm:text-xl'>
            Read my case studies, thoughts on software development, design, and
            more.
          </p>
        </div>
      </div>
      <hr className='my-10' />
      {allBlogs?.length ? (
        <div className='flex flex-col gap-10'>
          {allBlogs.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <BlogCard post={post} index={index} />
              {/* // TODO: Add a divider */}
              {/* <hr className='mt-10' /> */}
            </Link>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </section>
  );
}

interface BlogPostCardProps {
  post: {
    metadata: Metadata;
    slug: string;
  };
  index: number;
}

const BlogCard = (props: BlogPostCardProps) => {
  const { metadata, slug } = props.post;
  const { image, title, summary, publishedAt } = metadata;
  return (
    <article className='flex flex-col sm:flex-row'>
      <Image
        src={image}
        alt={slug}
        width={120}
        height={100}
        className='hidden rounded-[4px] border bg-muted transition-colors dark:border-neutral-700 sm:block'
        priority={props.index <= 1}
      />

      <div className='flex w-full flex-col justify-center space-y-2 sm:ml-4'>
        <h2 className='text-2xl font-extrabold'>{title}</h2>
        <p className='text-muted-foreground'>{summary}</p>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-sm text-neutral-600 dark:text-neutral-400'>
            {getFullDate(publishedAt)}
          </span>
          <span className='text-sm'>
            &middot;{' '}
            <Suspense fallback={<p className='h-6' />}>
              <Views slug={slug} />
            </Suspense>
          </span>
          &middot;{' '}
          <span className='text-sm text-neutral-600 hover:underline dark:text-neutral-400'>
            Read more
          </span>
          <ChevronRightIcon className='mt-[2px] hidden h-4 w-4 text-neutral-600 dark:text-neutral-400 sm:block' />
        </div>
      </div>
    </article>
  );
};

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
