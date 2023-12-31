import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/);
  const wordsPerMinute = 180; // Adjust this value according to your needs
  const readingTime = words.length / wordsPerMinute;
  return Math.round(readingTime);
}
