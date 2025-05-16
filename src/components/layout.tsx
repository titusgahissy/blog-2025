import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./theme";
const links = [
  { href: "/posts", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/travel", label: "Travel" },
  { href: "/projects", label: "Projects" },
  { href: "/books", label: "Books" }
]

export const LayoutHeader = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <nav className="flex items-center gap-2 pt-8 text-neutral-600 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>{link.label}</Link>
      ))}
    </nav>
    <Author />
  </div>
);

export const Navbar = () => (
  <Container>
    <nav className="flex items-center justify-between py-12 ">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-head font-bold text-lg text-[#7512F0] mr-4">
          <Image src="/img/logo.svg" alt="Titus Gahissy" width={512} height={512} className="size-7" />
        </Link>
        <div className="flex items-center gap-4 text-base font-medium ">
          <Link href="mailto:titus@gahissy.com">Email</Link>
          <Link href="https://www.linkedin.com/in/gahissy/">LinkedIn</Link>
          <Link href="https://github.com/titusgahissy">Github</Link>
          <Link href="https://www.instagram.com/titusgahissy/">Instagram</Link>
        </div>
      </div>
      <div className="flex items-center gap-4 font-medium ">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
        <div className="pl-2">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </Container>
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

export const LayoutFooter = () => (
  <Container>
    <footer className="pt-24 pb-8 fixed bottom-0 text-sm">
      By Titus Gahissy &mdash; Lisbon, Portugal
    </footer>
  </Container>
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
  <div className={cn("mx-auto px-24", className)}>
    {children}
  </div>
)


export const PageHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("max-w-3xl mx-auto px-12", className)}>
    {children}
  </div>
)

interface PageTitleProps {
  prepend?: React.ReactNode
  children: React.ReactNode
}

export const PageTitle = ({ children, prepend }: PageTitleProps) => (
  <div className="pt-16 space-y-0 text-center">
    {prepend}
    <h1 className="font-heading title !font-medium text-6xl tracking-tight txt-center !m-0  leading-tight">
      {children}
    </h1>
  </div>
)

export const PageSubtitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-2xl py-2 text-center">
    {children}
  </div>
)

export const Article = ({ children }: { children: React.ReactNode }) => (
  <div className="prose w-full prose-h2:pt-8 prose-h2:m-0 prose-h2:pb-4 prose-headings:font-semibold  dark:prose-headings:text-white">
    <article className="font-normal text-black dark:text-white pt-4 ">
      {children}
    </article>
  </div>
)