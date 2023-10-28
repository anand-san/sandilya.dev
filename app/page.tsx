import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import { ProfileInfoCard } from "@/components/profile-info-card/profile-info-card";
import ProjectInfoCard from "@/components/project-info-card/project-info-card";
export default function Home() {
  return (
    <>
      <Menubar className="justify-between">
        <Image
          src="https://imgur.com/NWnsFzH.png"
          alt="logo"
          width={32}
          height={20}
          className="pointer-events-none"
        />
        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>Projects</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Contact</MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
      <div className="lg:container mx-auto my-8">
        <ProfileInfoCard />
        <ProjectInfoCard />
      </div>
    </>
  );
}
