import { Container, HeroTitle } from "@/components/layout";



export default function Home() {
  return (
    <Container className="pt-12 md:pt-8 xl:pt-24 space-y-3 md:space-y-4 xl:space-y-6">
      <HeroTitle>The Product<br />Is The Model</HeroTitle>
      <div className="text-xl md:text-4xl xl:text-5xl/13 font-normal ">
        Hello, I'm <span className="font-medium">Titus Gahissy</span>
      </div>
      <div className="text-ld md:text-2xl xl:text-3xl  font-normal space-y-3">
<p>        I explore not so boring ideas and challenge&nbsp;<br />teams and founders to create valuable products.</p>
        <p className="text-neutral-500">This is my little corner of the internet where I share&nbsp;<br />thoughts, travel moments, books and projects.</p>
      </div>
    </Container>
  )
}

