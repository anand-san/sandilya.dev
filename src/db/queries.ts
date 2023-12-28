'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { db } from '@/lib/db';

export async function getViewsCount() {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  noStore();
  return await db.postViews.findMany();
}

export async function getGuestbookEntries() {
  return [];
  //   if (!process.env.POSTGRES_URL) {
  //     return [];
  //   }

  //   noStore();
  //   let entries = await sql`
  //     SELECT id, body, created_by, updated_at
  //     FROM guestbook
  //     ORDER BY created_at DESC
  //     LIMIT 100
  //   `;
  //   return entries.rows;
}
