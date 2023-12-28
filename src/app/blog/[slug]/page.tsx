import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/custom-mdx';
import { getBlogPosts } from '@/lib/blog-mdx-utils';
import ViewCounter from '../view-counter';
import { incrementPostView, getViewsCount } from '@/lib/db/blog';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatDate, getFullDate } from '../../../utils/format-date';

interface BlogProps {
  params: Record<string, string | string[]> | null;
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params?.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://sandilya.dev${image}`
    : `https://sandilya.dev/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://sandilya.dev/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: BlogProps) {
  let post = getBlogPosts().find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://sandilya.dev${post.metadata.image}`
              : `https://sandilya.dev/og?title=${post.metadata.title}`,
            url: `https://sandilya.dev/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Anand Sandilya',
            },
          }),
        }}
      />
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        {post.metadata.title}
      </h1>
      <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {getFullDate(post.metadata.publishedAt)} (
          {formatDate(post.metadata.publishedAt)})
        </p>
        <Suspense fallback={<p className='h-5' />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className='prose prose-quoteless prose-neutral dark:prose-invert'>
        <CustomMDX source={post.content} />
      </article>

      <hr className='m-auto mb-8 mt-16 w-24' />

      <div className='py-6 lg:py-10'>
        <Link href='/blog' className={cn(buttonVariants({ variant: 'ghost' }))}>
          <ChevronLeft className='mr-2 h-4 w-4' />
          See all posts
        </Link>
      </div>
    </section>
  );
}

let incrementViews = cache(incrementPostView);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
