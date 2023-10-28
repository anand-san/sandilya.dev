import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  MailIcon,
  Send,
} from "lucide-react";
import getConfig from "next/config";
import Link from "next/link";
import React from "react";

export default function FooterContactCard() {
  const {
    publicRuntimeConfig: { SOCIAL_URLS },
  } = getConfig();

  return (
    <div
      className={`bg-gradient-to-br from-orange-50 via-sky-50 to-fuchsia-50 md:order:1 flex flex-col border rounded-2xl  m-4 h-auto p-8 justify-between md:bg-gradient-to-tl`}
    >
      <h1 className="text-2xl md:text-3xl">Want to work together?</h1>
      <p className="text-s font-extralight">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
      <span className="text-s font-light">hello@anandks.com</span>
      <div className="flex mt-12 justify-center md:justify-start">
        <Link href="mailto:hello@anandks.com">
          <Send
            strokeWidth={1.25}
            size={36}
            className="mr-4 text-[#229ED9] hover:fill-[#b3e7ff] cursor-pointer"
          />
        </Link>
        <Link href={SOCIAL_URLS.INSTAGRAM} target="_blank">
          <Instagram
            strokeWidth={1.25}
            size={36}
            className="mr-4 text-[#d62976] hover:fill-[#f7d6bc] cursor-pointer"
          />
        </Link>
        <Link href={SOCIAL_URLS.LINKEDIN} target="_blank">
          <Linkedin
            strokeWidth={1.25}
            size={36}
            className="mr-4 text-[#0072b1] hover:fill-[#0072b1] cursor-pointer"
          />
        </Link>
        <Link href={SOCIAL_URLS.TWITTER} target="_blank">
          <Twitter
            strokeWidth={1.25}
            size={36}
            className="mr-4 text-[#1DA1F2] hover:fill-[#1DA1F2] cursor-pointer"
          />
        </Link>
        <Link href={SOCIAL_URLS.GITHUB} target="_blank">
          <Github
            strokeWidth={1.25}
            size={36}
            className="mr-4 text-[#171515] hover:fill-[#171515] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
