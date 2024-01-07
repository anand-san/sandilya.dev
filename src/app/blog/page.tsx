import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from '@/lib/db/blog';
import { Metadata, getBlogPosts } from '@/lib/blog-mdx-utils';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { getFullDate } from '../../utils/format-date';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Blog',
  description:
    'Read my case studies, thoughts on software development, design, and more.',
};

export default function Page() {
  let allBlogs = getBlogPosts();

  allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className='w-full pt-6 sm:pt-2'>
      <div className='flex flex-col'>
        <div className='flex-1 space-y-4'>
          <p className='text-center text-lg text-muted-foreground sm:text-xl'>
            Read my case studies, thoughts on software development, design, and
            more.
          </p>
        </div>
      </div>
      <hr className='m-auto my-10 w-24' />
      <BlogPage allBlogs={allBlogs} />
    </section>
  );
}

interface BlogPageProps {
  allBlogs: {
    metadata: Metadata;
    slug: string;
    tweetIds: (string | never[])[] | undefined;
    content: string;
  }[];
}

function BlogPage({ allBlogs }: BlogPageProps) {
  // TODO: Add a tab bar navigation based on tags
  return allBlogs?.length ? (
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
    <article className='flex max-h-[180px] min-h-[150px] flex-col rounded-[4px] bg-stone-100 p-4 py-4 hover:bg-stone-200 dark:bg-gray-800 hover:dark:bg-gray-700  sm:flex-row'>
      <Image
        src={image}
        alt={slug}
        width={120}
        height={120}
        className='hidden rounded-[4px] border bg-muted object-cover transition-colors dark:border-neutral-700 sm:block'
        priority={props.index <= 1}
      />

      <div className='flex w-full flex-col justify-center space-y-2 sm:ml-4'>
        <h2 className='text-2xl font-extrabold'>{title}</h2>
        <p className='text-muted-foreground'>{summary}</p>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-sm text-neutral-600 dark:text-neutral-400'>
            {getFullDate(publishedAt)} &middot;
          </span>
          <span className='text-sm'>
            <Suspense fallback={<Skeleton className='h-4 w-[60px]' />}>
              <Views slug={slug} />
            </Suspense>
          </span>
          <span className='hidden sm:block'>&middot; </span>
          <span className='hidden text-sm text-neutral-600 hover:underline dark:text-neutral-400 sm:block'>
            Read more
          </span>
          <ChevronRightIcon className='mt-[2px] hidden h-4 w-4 text-neutral-600 dark:text-neutral-400 sm:block' />
        </div>
      </div>
    </article>
  );
};

export async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
