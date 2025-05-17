import { getProjects } from "@/app/posts/utils";
import { Article, Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>Selected Projects<br />and Ventures</PageTitle>
        <PageSubtitle>Exploring some ideas and investing in impactful projects.</PageSubtitle>
      </PageHeader>
      <Projects />
    </Container>
  )
}


const Academy = () => (
  <div className="mx-auto max-w-6xl pt-24">

    <Container>
      <Article>
        <p>
          After years of working closely with teams and founders-teaching, building, and helping ideas grow-I noticed a pattern: the same questions and challenges kept popping up. Before we could dive into the specifics, we always had to get everyone on the same page. Over time, I found myself repeating the same advice, the same lessons, again and again.
        </p>
        <p>
          People have often asked if there was a way to keep learning after our workshops ended. I never quite found the time to create that resource-until now. I'm finally giving this a real shot.
        </p>
      </Article>
    </Container>

    <div className="relative overflow-hidden py-8">
      <Image src="/img/academy/preview-3.png" priority alt="academy" width={1200} height={822} />
      <div className="text-center text-sm text-gray-500">
        For illustration purposes (source: Dribbble).
      </div>
    </div>

    <Container>
      <Article>
        <p>
          The Academy is a simple, digital space where teams and entrepreneurs can learn at their own pace and keep track of their progress. It’s not meant to be another big online course platform. Instead, it’s a practical way for those I work with to keep growing, even when we’re not meeting in person.
        </p>
        <p>
          I'll be updating this section every month, sharing new lessons, tools, and ideas as they come. My hope is that this will become a helpful resource-one that makes learning a steady part of your journey, not just something that happens in bursts.
        </p>
      </Article>
    </Container>

  </div>
)

const Projects = () => {
  const entries = getProjects()
  return (
    <div className="grid grid-cols-2 gap-16 pt12">
      {entries.map((entry) => (
        <div key={entry.slug} className="flex flex-col py-12">
          <div className="relative h-96">
            <Image src={entry.metadata.image!} alt={entry.metadata.title} fill className="object-cover" />
          </div>
          <div className="pt-12">
            <h2 className="text-xl uppercase font-bold tracking-wider">{entry.metadata.title}</h2>
            <div className="pb-2 text-lg  font-medium">{entry.metadata.summary}</div>
            <div className="pt-4 text-base prose prose-p:!my-2.5">
              <MDXRemote source={entry.content} />
            </div>
            <div className="pt-4">
              <Link href={entry.metadata.url!} target="_blank" className="text-xl font-semibold text-accent flex items-center gap-1">
                <span>{entry.metadata.url!.replace("https://", "")}</span>
                <span className="text-[0.8rem]">↗</span>
              </Link>
            </div>
          </div>

        </div>
      ))}
    </div>

  )
}
