'use client'

import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Container } from "./layout";


export const LayoutFooter = () => {

  const pathname = usePathname();
  const isHome = pathname === '/'

  return (
    <footer className={cn("pt-24 pb-4 md:pb-0 xl:pb-8 text-xs md:text-sm ", isHome ? "fixed bottom-0 left-0 right-0 " : "")}>
      <Container className="flex justify-between">
        <div className="">
          By Titus Gahissy, Lisbon, PT
        </div>
        <div className="flex items-center gap-4 md:gap-5  justify-end">
          <Link href="mailto:titus@gahissy.com" target="_blank">
            <span className="hidden md:block">Email</span>
            <MailIcon className="size-4.5 md:hidden" strokeWidth={1.5} />
          </Link>
          <Link href="https://dub.sh/titus-linkedin" target="_blank">
            <span className="hidden md:block">LinkedIn</span>
            <FaLinkedinIn className="size-4.5 md:hidden" strokeWidth={1.5} />
          </Link>
          <Link href="https://dub.sh/titus-github" target="_blank">
            <span className="hidden md:block">Github</span>
            <FaGithub className="size-4.5 md:hidden" strokeWidth={1.5} />
          </Link>
          <Link href="https://dub.sh/titus-ig" target="_blank">
            <span className="hidden md:block">Instagram</span>
            <FaInstagram className="size-4.5 md:hidden" strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </footer>
  )

}