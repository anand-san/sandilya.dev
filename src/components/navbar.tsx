'use client';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar';
import { Briefcase, HomeIcon, PenLine } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './dark-mode-switch';
import Image from 'next/image';

export const TopNavBar = () => {
  const pathname = usePathname();
  return (
    <Menubar className='fixed top-0 mx-2 w-full justify-between bg-white dark:bg-slate-950'>
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
        <Link href='/'>
          <MenubarMenu>
            <MenubarTrigger>
              <HomeIcon color={pathname === '/' ? '#0ea5e9' : undefined} />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href='/blog'>
          <MenubarMenu>
            <MenubarTrigger>
              <PenLine
                color={pathname.includes('/blog') ? '#0ea5e9' : undefined}
              />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href='/work'>
          <MenubarMenu>
            <MenubarTrigger>
              <Briefcase color={pathname === '/work' ? '#0ea5e9' : undefined} />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>
      </div>
      <DarkModeToggle />
    </Menubar>
  );
};
