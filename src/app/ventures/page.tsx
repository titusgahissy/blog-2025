import { getProjects } from "@/app/posts/utils";
import { Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import { PlusIcon } from "lucide-react";
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>I'm always exploring<br />new ideas and concepts</PageTitle>
        <PageSubtitle>
          Here are some of the projects<br />I'm working on as a founder or investor.<br />
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
    <div className="grid grid-cols-2 gap-12 relative mt-12">

      {entries.map((entry, index) => (
        <div key={entry.slug} className="flex flex-col py-12 relative">

          {index % 2 === 0 && <PlusIcon className="text-neutral-500 size-8 absolute top-0 left-0 -translate-x-3.5 -translate-y-3.5" strokeWidth={1} />}

          <div className="relative h-96 overflow-hidden rounded-t-lg">
            <Image src={entry.metadata.image!} alt={entry.metadata.title} fill className="object-cover" />
          </div>
          <div className="pt-12 bg-muted px-12 rounded-b-lg pb-12 text-foreground">
            <h2 className="text-xl uppercase font-bold tracking-wider flex items-center gap-2">
              <span>{entry.metadata.title}</span>
            </h2>
            <div className="pb-2 text-lg  font-medium">{entry.metadata.summary}</div>
            <div className="pt-4 text-lg prose prose-p:!my-2.5 h-72 text-foreground">
              <MDXRemote source={entry.content} />
            </div>
            <div className="pt-4 text-foreground">
              {entry.metadata.url ? (
                <Link href={entry.metadata.url} target="_blank" className="text-lg font-semibold  flex items-center gap-1 uppercase tracking-wider">
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
