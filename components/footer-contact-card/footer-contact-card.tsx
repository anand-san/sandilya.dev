import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";
import getConfig from "next/config";
import Link from "next/link";
import React from "react";

export default function FooterContactCard() {
  const {
    publicRuntimeConfig: { SOCIAL_URLS },
  } = getConfig();

  return (
    <section className="h-screen grid snap-start snap-always items-center">
      <div
        className={`md:order:1 flex flex-col m-4 p-8 justify-between h-56 sm:h-72 text-center`}
      >
        <h1 className="text-2xl md:text-3xl">Want to work together?</h1>
        <p className="text-s font-extralight">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <span className="text-s font-light">hello@anandks.com</span>
        <div className="flex mt-12 justify-center">
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
        </div>
      </div>
    </section>
  );
}
