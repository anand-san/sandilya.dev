'use server';
import { db } from '@/lib/db';
import { unstable_noStore as noStore } from 'next/cache';

export async function incrementPostView(slug: string) {
  noStore();
  await db.postViews.upsert({
    where: {
      slug: slug,
    },
    create: {
      slug: slug,
      views: 1,
    },
    update: {
      views: {
        increment: process.env.NODE_ENV === 'production' ? 1 : 0,
      },
    },
  });
}
export async function getViewsCount() {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  noStore();
  return await db.postViews.findMany();
}
