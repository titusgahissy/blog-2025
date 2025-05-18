'use client'

import { MailIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Container } from "./layout";
import { ThemeSwitcher } from "./theme";

interface Link {
  href: string
  label: string
  external?: boolean
}

const links: Link[] = [
  { href: "/posts", label: "Journal" },
  { href: "/travel", label: "Travel" },
  { href: "/ventures", label: "Ventures" },
  { href: "/library", label: "Library" },
  { href: "/about", label: "About" },
]
const transition = {
  type: 'spring',
  stiffness: 600,
  damping: 40,
  duration: 0.25,
}

const modalVariants = {
  visible: {
    translateY: 0,
    opacity: 1,
    transition: { ...transition, when: "beforeChildren" },
  },
  hidden: {
    translateY: 500,
    opacity: 0,
    transition: { ...transition, when: "afterChildren" },
  }
}

const cross45 = {
  open: {
    rotate: 45,
    translateY: 0,
    transition
  },
  closed: {
    rotate: 0, ...transition,
    translateY: -5,
    transition
  },
}

const cross45inv = {
  open: {
    rotate: -45,
    translateY: 0,
    transition
  },
  closed: {
    top: 5,
    translateY: 5,
    transition
  },
}


export const Navbar = () => {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const toggle = () => {
    const nextOpen = !open
    if (nextOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    setOpen(nextOpen)
  }

  useEffect(() => {
    if (open) {
      toggle()
    }
  }, [pathname])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 py-8 backdrop-blur-sm">
        <Container>
          <nav className="flex items-center justify-between z-50">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-head font-bold text-lg text-[#7512F0] mr-4">
                <Image src="/img/logo.svg" alt="Titus Gahissy" width={512} height={512} className="size-7 block dark:hidden" />
                <Image src="/img/logo-dark.svg" alt="Titus Gahissy" width={512} height={512} className="size-7 hidden dark:block" />
              </Link>
            </div>
            <div className="items-center gap-5 uppercase text-sm tracking-wider font-bold hidden md:flex">
              {links.map((link) => (
                <Link key={link.href} href={link.href} target={link.external ? "_blank" : "_self"} className="flex items-center gap-1">
                  <span>{link.label}</span>
                  {link.external && <span className="text-[0.6rem]">↗</span>}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <button data-collapse-toggle="navbar-default" type="button" onClick={toggle}
                className="flex mr-1 flex-col w-7 h-7 justify-center text-sm md:hidden relative"
                aria-controls="navbar-default" aria-expanded="false">
                <motion.div initial="closed" animate={open ? 'open' : 'closed'} variants={cross45}
                  className="border-t w-7 border-foreground " />
                <motion.div initial="closed" animate={open ? 'open' : 'closed'} variants={cross45inv}
                  className="border-t w-7 border-foreground " />
              </button>
            </div>
          </nav>
        </Container>
      </div>
      <div className="md:hidden">
        <AnimatePresence>
          {open && (
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="hidden" key="mobule-nav" className="fixed top-0 left-0 right-0 bottom-0 bg-background z-30 px-6 flex flex-col justify-end pb-8">
              <div className="flex flex-col gap-1 relative">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-1 font-heading font-black  text-6xl uppercase">
                    <span>{link.label}</span>
                    {link.external && <span className="text-[0.6rem]">↗</span>}
                  </Link>
                ))}
                <div className="flex items-center gap-4 pt-8">
                  <Link href="mailto:titus@gahissy.com" target="_blank">
                    <MailIcon className="size-7" strokeWidth={1.5} />
                  </Link>
                  <Link href="https://dub.sh/titus-linkedin" target="_blank">
                    <FaLinkedinIn className="size-7" strokeWidth={1.5} />
                  </Link>
                  <Link href="https://dub.sh/titus-github" target="_blank">
                    <FaGithub className="size-7" strokeWidth={1.5} />
                  </Link>
                  <Link href="https://dub.sh/titus-ig" target="_blank">
                    <FaInstagram className="size-7" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
