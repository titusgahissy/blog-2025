import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./theme";


interface Link {
  href: string
  label: string
  external?: boolean
}

const links: Link[] = [
  { href: "/posts", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/travel", label: "Travel" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" }
]


export const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 pt-8 ">
    <Container>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-head font-bold text-lg text-[#7512F0] mr-4">
            <Image src="/img/logo.svg" alt="Titus Gahissy" width={512} height={512} className="size-7" />
          </Link>
          {/* <div className="flex items-center gap-5 font-medium uppercase text-xs tracking-wider">
          <Link href="mailto:titus@gahissy.com">Email</Link>
          <Link href="https://www.linkedin.com/in/gahissy/">LinkedIn</Link>
          <Link href="https://github.com/titusgahissy">Github</Link>
          <Link href="https://www.instagram.com/titusgahissy/">Instagram</Link>
        </div> */}
        </div>
        <div className="flex items-center gap-5 uppercase text-xs tracking-wider font-semibold">
          {links.map((link) => (
            <Link key={link.href} href={link.href} target={link.external ? "_blank" : "_self"} className="flex items-center gap-1">
              <span>{link.label}</span>
              {link.external && <span className="text-[0.6rem]">↗</span>}
            </Link>
          ))}
          <div className="pl-2">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </Container>
  </div>
);


interface AuthorProps {
  full?: boolean
}

export const Author = ({ full }: AuthorProps) => (
  <div className="flex flex-col pt-4 max-w-3xl mx-auto text-center">
    <h1 className={cn("font-semibold  ", full ? "text-4xl" : "text-2xl")}>Titus Gahissy</h1>
    <div className={cn("font-normal py-1", full ? "text-xl" : "text-base")}>
      Solutions Architect, Entrepreneur &mdash; Lisbon, Portugal
    </div>
    {full && (
      <div className="reveal font-medium text-xl">
        Helping teams build better software products.
      </div>)}
  </div>
);



interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

export const PageLayout = ({ children, className, wide }: PageLayoutProps) => (
  <div className={cn(" mx-auto ", wide ? "max-w-7xl" : "max-w-3xl px-12", className)}>
    {children}
  </div>
)

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("max-w-7xl mx-auto ", className)}>
    {children}
  </div>
)


export const PageHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("relative py-16", className)}>
    {children}
  </div>
)

interface PageTitleProps {
  prepend?: React.ReactNode
  children: React.ReactNode
  className?: string
}


export const PageTitle = ({ children, prepend, className }: PageTitleProps) => (
  <div className={cn("flex flex-col gap-4", className)}>
    {prepend}
    <h1 className="text-8xl font-heading uppercase font-bold">
      {children}
    </h1>
  </div>
)

export const PageSubtitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-3xl py-2">
    {children}
  </div>
)

export const Article = ({ children }: { children: React.ReactNode }) => (
  <div className="prose-lg prose-h2:pt-8 !max-w-none prose-h2:m-0 prose-h2:pb-4 prose-headings:font-semibold  dark:prose-headings:text-white">
    <article className="font-normal text-black dark:text-white pt-4 ">
      {children}
    </article>
  </div>
)