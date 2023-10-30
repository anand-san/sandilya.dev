import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import { ProfileInfoCard } from "@/components/profile-info-card/profile-info-card";
import ProjectInfoCard from "@/components/project-info-card/project-info-card";
import FooterContactCard from "@/components/footer-contact-card/footer-contact-card";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { BookUser, GanttChartSquare, Mails } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-orange-50 via-sky-50 to-fuchsia-50 dark:from-stone-900 dark:to-stone-900">
      <Menubar className="justify-between bg-gradient-to-l from-orange-50 via-sky-50 to-fuchsia-50 dark:from-stone-900  dark:to-stone-900 fixed w-screen bottom-0 left-0 z-10 sm:top-0">
        <Image
          src="https://imgur.com/NWnsFzH.png"
          alt="logo"
          width={32}
          height={20}
          className="pointer-events-none"
        />
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>
              <p className="hidden sm:block">Projects</p>
              <GanttChartSquare className="sm:hidden block" />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <p className="hidden sm:block">Contact</p>
              <Mails className="sm:hidden block" />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <p className="hidden sm:block">Resume</p>
              <BookUser className="sm:hidden block" />
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <DarkModeToggle />
      </Menubar>
      <div>
        <ProfileInfoCard />
        <ProjectInfoCard />
        <FooterContactCard />
      </div>
    </div>
  );
}
