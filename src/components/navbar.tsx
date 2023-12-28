'use client';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar';
import { GanttChartSquare, Mails } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './dark-mode-switch';
import Image from 'next/image';

export const TopNavBar = () => {
  const pathname = usePathname();
  return (
    <Menubar className='mx-2 my-2 justify-between dark:bg-slate-950'>
      <Link href='/'>
        <Image
          src='https://i.imgur.com/NWnsFzH.png'
          alt='logo'
          width={28}
          height={18}
          className='pointer-events-none dark:invert'
        />
      </Link>
      <div className='flex'>
        {pathname !== '/' && (
          <Link href='/'>
            <MenubarMenu>
              <MenubarTrigger>
                <p className='hidden sm:block'>HOME</p>
                <GanttChartSquare className='block sm:hidden' />
              </MenubarTrigger>
            </MenubarMenu>
          </Link>
        )}
        {pathname !== '/blog' && (
          <Link href='/blog'>
            <MenubarMenu>
              <MenubarTrigger>
                <p className='hidden sm:block'>BLOG</p>
                <GanttChartSquare className='block sm:hidden' />
              </MenubarTrigger>
            </MenubarMenu>
          </Link>
        )}

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
};
