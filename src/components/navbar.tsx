'use client';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar';
import { ClipboardList, HomeIcon, Text } from 'lucide-react';
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
        <Link href='/'>
          <MenubarMenu>
            <MenubarTrigger>
              <HomeIcon />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href='/blog'>
          <MenubarMenu>
            <MenubarTrigger>
              <Text />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href='/work'>
          <MenubarMenu>
            <MenubarTrigger>
              <ClipboardList />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>
      </div>
      <DarkModeToggle />
    </Menubar>
  );
};
