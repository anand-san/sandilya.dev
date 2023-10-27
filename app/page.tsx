import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
export default function Home() {
  return (
    <>
      <Menubar className="justify-between">
        <Image
          src={logo}
          alt="logo"
          width={32}
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
      <div className="container mx-auto my-8"></div>
    </>
  );
}
