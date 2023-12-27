import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import { cn } from '@/lib/utils';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { DarkModeToggle } from '@/components/dark-mode-switch';
import { GanttChartSquare, Mails, BookUser } from 'lucide-react';
import Image from 'next/image';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['greek'], weight: '300' });

export const metadata: Metadata = {
  title: 'Anand Sandilya',
  description: 'Some random web engineer on the internet',
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
          <main className='max-w-4xl antialiased'>
            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <NavBar />
              <div className='mt-2'>{children}</div>
            </TooltipProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

const NavBar = () => (
  <Menubar className='mx-2 my-2 justify-between dark:bg-slate-950'>
    <Image
      src='https://i.imgur.com/NWnsFzH.png'
      alt='logo'
      width={28}
      height={18}
      className='pointer-events-none dark:invert'
    />
    <div className='flex'>
      <MenubarMenu>
        <MenubarTrigger>
          <p className='hidden sm:block'>BLOG</p>
          <GanttChartSquare className='block sm:hidden' />
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <p className='hidden sm:block'>ABOUT</p>
          <Mails className='block sm:hidden' />
        </MenubarTrigger>
      </MenubarMenu>
    </div>
    <DarkModeToggle />
  </Menubar>
);
