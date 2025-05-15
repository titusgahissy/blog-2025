import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./theme";

const links = [
  { href: "/", label: "Blog" },
  { href: "/travel", label: "Travel" },
  { href: "/academy", label: "Academy" },
  { href: "/books", label: "Books" },
  //{ href: "/chats", label: "Chats" },
  { href: "/contact", label: "Contact" },
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
  <nav className="flex items-center justify-between py-8 max-w-6xl mx-auto px-12">
    <Link href="/" className="rounded-full overflow-hidden size-16 p-1 border-2 border-neutral-400 ">
      <Image src="/img/titus.png" alt="Titus Gahissy" width={40} height={40} className="w-auto size-full" />
    </Link>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4 font-medium">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
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
  <footer className="pt-24 pb-8 max-w-3xl mx-auto px-12">
    <div className="text-base text-center">
      All rights reserved &copy; Titus Gahissy {new Date().getFullYear()}
    </div>
  </footer>
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

export const Container = ({ children, className, wide }: PageLayoutProps) => (
  <div className={cn(" mx-auto ", wide ? "max-w-7xl" : "max-w-3xl px-12", className)}>
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