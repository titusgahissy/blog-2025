import { Container, PageSubtitle, PageTitle } from "@/components/layout";
import { Album } from "./album";


export default function Page() {
  return (
    <Container>
      <PageTitle className="w-1/2">Documenting travels<br />& street moments</PageTitle>
      <PageSubtitle>Documenting travels and street moments</PageSubtitle>
      <Albums />
    </Container>
  )
}

const Albums = () => (
  <div className="pt-16">
    <Album album="thailand" title="Thailand" description="A collection of photos from Thailand" images="1,4,2,3,5,8" />
  </div>
)