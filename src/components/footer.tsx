'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Container } from "./layout";


export const LayoutFooter = () => {

  const pathname = usePathname();
  const isHome = pathname === '/'

  return (
    <footer className={cn("pt-24 pb-8 text-sm ", isHome ? "fixed bottom-0 left-0 right-0 " : "")}>
      <Container className="flex justify-between">
        <div className="">
          By Titus Gahissy &mdash; Lisbon, Portugal
        </div>
        <div className="flex items-center gap-5  justify-end">
          <Link href="mailto:titus@gahissy.com" target="_blank">Email</Link>
          <Link href="https://dub.sh/titus-linkedin" target="_blank">LinkedIn</Link>
          <Link href="https://dub.sh/titus-github" target="_blank">Github</Link>
          <Link href="https://dub.sh/titus-ig" target="_blank">Instagram</Link>
        </div>
      </Container>
    </footer>
  )

}