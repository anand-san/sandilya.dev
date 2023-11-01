import { Instagram, Linkedin, Twitter, Github } from "lucide-react";
import getConfig from "next/config";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ProfileInfoCard = () => {
  const {
    publicRuntimeConfig: { SOCIAL_URLS },
  } = getConfig();

  return (
    <section className="lg:container mx-auto pt-4 sm:pt-8 md:h-screen grid md:grid-cols-[2fr,1fr] md:snap-start md:snap-always items-center place-items-center">
      <div
        className={`bg-[url('/images/profile.png')] bg-left bg-cover bg-no-repeat md:order-2 border rounded-full md:rounded-xl m-4 scale-x-[-1] min-h-[200px] min-w-[200px] md:min-w-[284px] md:grid md:min-h-[384px] shadow-xl`}
      ></div>

      <div
        className={`md:order:1 flex flex-col p-8 pb-0 md:m-4 justify-between min-h-[384px]`}
      >
        <h1 className="font-semibold text-center md:text-left text-2xl md:text-4xl">
          Hello, I&apos;m Anand, a Software Developer With 7 years of
          experience.
        </h1>
        <p className="font-normal text-l text-center md:text-left md:text-xl mt-2">
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div className="flex items-center mt-12 flex-col md:flex-row">
          <Link href="mailto:hello@anandks.com">
            <button className="font-semibold bg-[#1d1d1d] hover:bg-[#3c3c3c] text-[#fff] rounded-3xl px-14 py-3 md:mr-4">
              Lets Chat
            </button>
          </Link>
          <div className="flex mt-8 md:mt-0">
            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={SOCIAL_URLS.INSTAGRAM} target="_blank">
                    <Instagram
                      strokeWidth={1.25}
                      size={36}
                      className="ml-4 text-[#d62976] hover:fill-[#f7d6bc] cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={SOCIAL_URLS.LINKEDIN} target="_blank">
                    <Linkedin
                      strokeWidth={1.25}
                      size={36}
                      className="ml-4 text-[#0072b1] hover:fill-[#0072b1] cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={SOCIAL_URLS.TWITTER} target="_blank">
                    <Twitter
                      strokeWidth={1.25}
                      size={36}
                      className="ml-4 text-[#1DA1F2] hover:fill-[#1DA1F2] cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Twitter/ X</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link href={SOCIAL_URLS.GITHUB} target="_blank">
                    <Github
                      strokeWidth={1.25}
                      size={36}
                      className="ml-4 text-[#171515] hover:fill-[#171515] dark:text-[#fff] dark:hover:fill-[#fff] cursor-pointer"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <hr className="dark:bg-white m-auto w-[20vw] mt-16 md:hidden" />
    </section>
  );
};
