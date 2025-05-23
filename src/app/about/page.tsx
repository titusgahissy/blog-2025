import { PlusIconDivider } from "@/components/icons";
import { Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import Image from "next/image";
import { clients } from "./clients";

export default function Page() {
  return (
    <Container>
      <PageHeader className="relative">
        <div className="md:absolute pb-8 md:right-0 md:top-8">
          <Image src="/img/titus.png" alt="me" width={750} height={750} className="size-36 md:size-64" />
        </div>
        <PageTitle>Titus Gahissy</PageTitle>
        <PageSubtitle>
          Do we really have to do this?<br />
          A few words about me then...
        </PageSubtitle>
      </PageHeader>
      <div className="space-y-20 md:space-y-24">
        <About />
        <Projects />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <Photography />
          <Cycling />
        </div>
      </div>
    </Container>
  )
}

const About = () => {
  return (
    <div className="md:w-2/3 prose-ld md:prose-xl prose-p:my-3">
      <PlusIconDivider />

      <div className="text-2xl md:text-5xl/14 ">
        I'm a <span className="font-medium">Solutions Architect <span className="font-normal">and</span> Entrepreneur</span> based in<br /><span className="font-medium">Lisbon, Portugal</span>.
      </div>
      <p>
        In the tech world, there are job descriptions that often end with <em>Architect</em> like <em>Software Architect</em>, <em>Enterprise Architect</em>, <em>Data Architect</em>, etc.
        Just like the <em>Architect</em> of a building, these professionals are responsible for the design of the system: ensuring the house will not collapse at the first rain.
      </p>
      <p>
        Solutions Architects focus on designing complete solutions to business problems,
        which often involves multiple systems, applications, and technologies.
        They determine how different software components, hardware infrastructure, and business processes will work together to meet business requirements.
      </p>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <PlusIconDivider />

      <div className="prose-lg md:prose-xl md:w-2/3">
        I've had the opportunity to work on projects and with teams from various industries and countries.
        I spend less time now on corporate projects and focus more on my ventures and working with startup founders.
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 mt-12 border-l border-t border-neutral-300 dark:border-neutral-700">
        {clients.map((client, index) => (
          <div key={index} className="border-b border-r px-4 md:px-6 py-2 md:py-8 border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
            <div className="relative size-24">
              <Image src={`/img/clients/${client.logo}`} alt={client.name} fill className="object-contain grayscale" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Photography = () => {
  return (
    <div>
      <PlusIconDivider />
      <InternalCard image="/img/about/camera.webp" title="Photography" >
        <p>
          When I'm not working on a client project or chasing the next startup idea,
          I'm usually exploring the world or the streets of Lisbon with my camera.
        </p>
        <p>
          I'm absolutely not a professional photographer, but I love to capture the world around me.
        </p>
        <p>
          I mostly shoot with a Leica and Sony Alpha.
        </p>
      </InternalCard>
    </div>
  )
}

const Cycling = () => {
  return (
    <div className="md:pt-16">
      <InternalCard image="/img/about/cycling-02.jpg" title="Road Cycling" >
        <p>I fell in love with cycling during the pandemic (go figure why).</p>
        <p>I really wish I’d started sooner.</p>
        <p>
          Before that, I wasn't into exercise at all beyond walking,
          but now cycling is an important part of my life.
          It's changed my mindset, my body, and given me new goals.
          My next big challenge is to ride beyond 200km.
          Every ride is a step closer to that goal.
        </p>
      </InternalCard>
    </div>
  )
}

interface Props {
  title: string
  image: string
  children: React.ReactNode
}

const InternalCard = ({ title, image, children }: Props) => (
  <div className="md:pt-16">
    <div className="h-72 xl:h-112  relative overflow-hidden rounded">
      <Image src={image} alt={title} fill className="object-cover grayscale" />
    </div>
    <div className="prose md:prose-lg prose-p:my-2">
      <h2 className="text-4xl md:text-6xl font-medium pt-8 uppercase font-heading mb-8">
        {title}
      </h2>
      <div>
        {children}
      </div>
    </div>
  </div>
)

