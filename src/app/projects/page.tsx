import { Article, Container, PageHeader, PageLayout, PageSubtitle, PageTitle } from "@/components/layout";
import Image from "next/image";

export default function Page() {
  return (
    <PageLayout wide>
      <PageHeader>
        <PageTitle>Academy</PageTitle>
        <PageSubtitle>Helping teams build better software products</PageSubtitle>
      </PageHeader>
      <Content />
    </PageLayout>
  )
}


const Content = () => (
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