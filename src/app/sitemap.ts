import { getBlogPosts } from '@/lib/blog-mdx-utils';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://sandilya.dev/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/work'].map((route) => ({
    url: `https://sandilya.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
