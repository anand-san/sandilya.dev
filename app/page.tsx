import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import { ProfileInfoCard } from "@/components/profile-info-card/profile-info-card";
import ProjectInfoCard from "@/components/project-info-card/project-info-card";
import FooterContactCard from "@/components/footer-contact-card/footer-contact-card";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-sky-50 to-fuchsia-50 md:bg-gradient-to-tl">
      <Menubar className="justify-between bg-transparent">
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
      <div>
        <ProfileInfoCard />
        <ProjectInfoCard />
        <FooterContactCard />
      </div>
    </div>
  );
}
