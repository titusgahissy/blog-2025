import { getProjects } from "@/app/posts/utils";
import { PlusIconDivider } from "@/components/icons";
import { Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>I'm always exploring <br className="hidden md:block" />new ideas and concepts</PageTitle>
        <PageSubtitle>
          Here are some projects <br className="hidden md:block" />I'm working on as a founder or investor.&nbsp;<br className="hidden md:block" />
          None of these projects are client work.
        </PageSubtitle>
      </PageHeader>
      <Projects />
    </Container>
  )
}

const Projects = () => {
  const entries = getProjects()
  return (
    <div className="grid md:grid-cols-2 gap-12 relative mt-12">

      {entries.map((entry, index) => (
        <div key={entry.slug} className="flex flex-col py-8 md:py-12 relative">

          {index === 0 && <PlusIconDivider className="absolute -top-8" />}

          <div className="relative h-60 md:h-110 xl:h-96 overflow-hidden rounded-t md:rounded-t-lg">
            <Image src={entry.metadata.image!} alt={entry.metadata.title} fill className="object-cover" />
          </div>
          <div className="pt-8 xl:pt-12 bg-muted px-6 xl:px-12 rounded-b-lg pb-12 text-foreground">
            <h2 className="text-lg md:text-xl uppercase font-bold tracking-wider flex items-center gap-2">
              <span>{entry.metadata.title}</span>
            </h2>
            <div className="pb-2 text-base md:text-lg font-medium">{entry.metadata.summary}</div>
            <div className="md:pt-4 prose-sm md:prose xl:prose-lg prose-p:!my-2.5 md:h-72 text-foreground">
              <MDXRemote source={entry.content} />
            </div>
            <div className="pt-2 md:pt-4 text-foreground text-sm xl:text-lg">
              {entry.metadata.url ? (
                <Link href={entry.metadata.url} target="_blank" className=" font-semibold  flex items-center gap-1 uppercase tracking-wider">
                  <span>Visit {entry.metadata.title}</span>
                  <span className="text-[0.8rem]">↗</span>
                </Link>) : (
                <span className="font-bold uppercase tracking-wide">{entry.metadata.release ?? "Coming soon"}</span>
              )}
            </div>
          </div>

        </div>
      ))}
    </div>

  )
}
