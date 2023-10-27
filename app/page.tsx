import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import "./page.css";
import Link from "next/link";
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
        <section className="grid md:grid-cols-[2fr,1fr]">
          <div className="card profile-image md:order-2 border rounded-2xl m-4 flip h-56 sm:h-72 md:h-auto"></div>

          <div className="card md:order:1 flex flex-col border rounded-2xl p-8 m-4 justify-between">
            <h1 className="font-semibold text-center md:text-left text-2xl md:text-4xl">
              Hello, I&apos;m Anand, a Software Developer With 7 years of
              experience.
            </h1>
            <p className="font-normal text-l text-center md:text-left md:text-xl mt-2">
              I care a lot about using design for positive impact. and enjoy
              creating user-centric, delightful, and human experiences.
            </p>
            <div className="flex items-center mt-12 flex-col md:flex-row">
              <button className="font-semibold bg-[#1d1d1d] hover:bg-[#3c3c3c] text-[#fff] rounded-3xl px-14 py-3 md:mr-4">
                Contact Me
              </button>
              <div className="flex mt-8 md:mt-0">
                <Link
                  href="https://www.instagram.com/anandsan_/"
                  target="_blank"
                >
                  <Instagram
                    strokeWidth={1.25}
                    size={36}
                    className="ml-4 text-[#d62976] hover:fill-[#f7d6bc] cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anandsandilya/"
                  target="_blank"
                >
                  <Linkedin
                    strokeWidth={1.25}
                    size={36}
                    className="ml-4 text-[#0072b1] hover:fill-[#0072b1] cursor-pointer"
                  />
                </Link>
                <Link href="https://twitter.com/anandsan_" target="_blank">
                  <Twitter
                    strokeWidth={1.25}
                    size={36}
                    className="ml-4 text-[#1DA1F2] hover:fill-[#1DA1F2] cursor-pointer"
                  />
                </Link>
                <Link href="https://github.com/anand-san" target="_blank">
                  <Github
                    strokeWidth={1.25}
                    size={36}
                    className="ml-4 text-[#171515] hover:fill-[#171515] cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
