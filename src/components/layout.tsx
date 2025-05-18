
import { cn } from "@/lib/utils";


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
  <div className={cn("max-w-7xl mx-auto px-4 md:px-0", className)}>
    {children}
  </div>
)


export const PageHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("relative py-12 md:py-16", className)}>
    {children}
  </div>
)

interface PageTitleProps {
  prepend?: React.ReactNode
  children: React.ReactNode
  className?: string
}


export const HeroTitle = ({ children, prepend, className }: PageTitleProps) => (
  <div className={cn("flex flex-col gap-4", className)}>
    {prepend}
    <h1 className="text-7xl md:text-8xl font-heading uppercase font-medium tracking-tight">
      {children}
    </h1>
  </div>
)

export const PageTitle = ({ children, prepend, className }: PageTitleProps) => (
  <div className={cn("flex flex-col gap-4", className)}>
    {prepend}
    <h1 className="text-6xl md:text-8xl font-heading uppercase font-medium tracking-tight">
      {children}
    </h1>
  </div>
)

export const PageSubtitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-2xl md:text-3xl py-2">
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