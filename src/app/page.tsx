import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Image from 'next/image';
import { ProfileInfoCard } from '@/components/profile-info-card/profile-info-card';
import ProjectInfoCard from '@/components/project-info-card/project-info-card';
import FooterContactCard from '@/components/footer-contact-card/footer-contact-card';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { BookUser, GanttChartSquare, Mails } from 'lucide-react';
import TestomonialsCard from '@/components/testomonials-card';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Home() {
  return (
    <div className='bg-gradient-to-l from-orange-50 via-sky-50 to-fuchsia-50 dark:from-zinc-800 dark:to-stone-700'>
      <Menubar className='fixed bottom-0 left-0 z-10 w-screen justify-between  bg-gradient-to-l from-orange-50 via-sky-50 to-fuchsia-50 dark:from-zinc-800 dark:to-stone-700 sm:top-0'>
        <Image
          src='https://imgur.com/NWnsFzH.png'
          alt='logo'
          width={32}
          height={20}
          className='pointer-events-none dark:invert'
        />
        <div className='flex'>
          <MenubarMenu>
            <MenubarTrigger>
              <p className='hidden sm:block'>Projects</p>
              <GanttChartSquare className='block sm:hidden' />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <p className='hidden sm:block'>Contact</p>
              <Mails className='block sm:hidden' />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <p className='hidden sm:block'>Resume</p>
              <BookUser className='block sm:hidden' />
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <DarkModeToggle />
      </Menubar>
      <div>
        <TooltipProvider delayDuration={100} skipDelayDuration={100}>
          <ProfileInfoCard />
          <ProjectInfoCard />
          <TestomonialsCard />
          <FooterContactCard />
        </TooltipProvider>
      </div>
    </div>
  );
}
