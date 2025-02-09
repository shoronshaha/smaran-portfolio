"use client";

import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import MediumIcon from "@/svg/MediumIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import { MailMinus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();

  const color = theme === "light" ? "black" : "#A7D4EE";

  return (
    <footer className="padding-container max-container flex flex-col md:flex-row justify-between gap-4 items-center py-10 border-t border-zinc-900">
      <div className="flex gap-4 items-center justify-center">
        <Link href="https://github.com/shoronshaha" target="_blank">
          <GithubIcon color={color} />
        </Link>
        <Link href="https://www.linkedin.com/in/smaran-shaha" target="_blank">
          <LinkedInIcon color={color} />
        </Link>
        <Link href="" target="_blank">
          <TwitterIcon color={color} />
        </Link>
        <Link href="" target="_blank">
          <InstagramIcon color={color} />
        </Link>
        <Link href="" target="_blank">
          <MediumIcon color={color} />
        </Link>
        <Link href="" target="_blank">
          <YoutubeIcon color={color} />
        </Link>
      </div>
      <Link
        href="mailto:smaranshaha@gmail.com"
        className="dark:text-[#A7D4EE] text-black flex gap-4"
      >
        <MailMinus />
        smaranshaha@gmail.com
      </Link>
    </footer>
  );
};

export default Footer;
