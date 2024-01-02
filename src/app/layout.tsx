import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TopNavBar } from '@/components/navbar';
const inter = Inter({ subsets: ['greek'], weight: '300' });
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL('https://sandilya.dev'),
  title: {
    default: 'Anand Sandilya',
    template: '%s | Anand Sandilya',
  },
  description: 'Full stack engineer, Weekend freelancer',
  openGraph: {
    title: 'Anand Sandilya',
    description: 'Full stack engineer, Weekend freelancer',
    url: 'https://sandilya.dev',
    siteName: 'Anand Sandilya',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Anand Sandilya',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className={cn(inter.className)}>
      <body className='flex w-screen flex-col items-center dark:bg-slate-950'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
          storageKey='sandilya-theme'
        >
          <TopNavBar />
          <main className='w-full max-w-3xl antialiased'>
            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <div className='m-4 mt-12 sm:mt-20'>{children}</div>
            </TooltipProvider>
          </main>
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ''} />
    </html>
  );
}
