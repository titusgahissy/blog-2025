import { Container, HeroTitle } from "@/components/layout";



export default function Home() {
  return (
    <Container className="pt-12 md:pt-24">
      <HeroTitle>The Product<br />Is The Model</HeroTitle>
      <div className="text-xl md:text-5xl/13 font-normal pt-4">
        Hello, I'm <span className="font-medium">Titus Gahissy</span>.<br />I explore not so boring ideas and<br />challenge teams and founders to achieve more.
      </div>
      <div className="text-ld md:text-2xl pt-4 ">
        This is my little corner of the internet where I share<br />thoughts, travel moments, books and projects.
      </div>
    </Container>
  )
}

