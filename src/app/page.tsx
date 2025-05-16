import { Container } from "@/components/layout";
import Image from "next/image";
export default function Home() {
  return (

    <Container className="pt-24 flex flex-col gap-1">
      <h1 className="text-8xl font-heading uppercase font-black">The Product<br />Is The Model</h1>
      <div className="text-5xl/14 font-normal pt-4">
        Hello, I'm <strong className="text-accent">Titus Gahissy</strong>.<br />I explore bold ideas and help teams<br />create better and impactful products.
      </div>
      <div className="text-2xl  pt-12 w-2/5">
        This is my little corner of the internet where I share thoughts, travel moments, books and projects.
      </div>
      <div className="py-20 flex gap-2 flex-col hidden">
        <Image src="/img/scroll-down.gif" alt="" width={150} height={150} className="size-12 -translate-x-3" />
        <div className="text-sm">
          Scroll down to start reading
        </div>
      </div>
    </Container>
  )
}

