import { Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import { Album } from "./album";


export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle className="w-1/2">Documenting travels<br />and street moments</PageTitle>
        <PageSubtitle>
          A visual journal of places visited and moments <br />that caught my eye as I move through the world.<br />
        </PageSubtitle>
      </PageHeader>
      <Albums />
    </Container>
  )
}

const Albums = () => (
  <div className="pt-16 flex flex-col gap-24">
    <Album album="portugal" title="Portugal" description="Cartagena" images="1,2,3,4,5,6,7,8,9" />
    <Album album="cartagena" title="Colombia" description="Cartagena" images="1,2,3,4,7,8,9,10,11,5,6" />
    <Album album="ecuador" title="Ecuador" description="Quito and more" images="1,2,3,4,6,18,16,14,30,8,19,12,17,20,11,24,25,27" />
    <Album album="japan" title="Japan" description="Osaka, Kyoto, Tokyo" images="2,6,7,8,9,11,12,13,16,14,15,18,19,20,21,22,23,24,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,49,51,46,53,54,55,56,57,58,59,60,61,62,68,64,66,67" />
    <Album album="colmar" title="France" description="Colmart" images="1,2,3" />
    <Album album="essaouira" title="Morocco" description="Essaouira" images="1,2,3,4" />
    <Album album="san-francisco" title="USA" description="San Francisco" images="1,2,3,4,5,7,9,10,11,12,13,14,15,16,17" />
    <Album album="netherlands" title="The Netherlands" description="Rotterdam & Amsterdam" images="1,2,3,4,5,6,7,8" />
    <Album album="hong-kong" title="Hong Kong" description="Hong Kong" images="7,1,2,4,3,5,6" />
    <Album album="philippines" title="Philippines" description="Manila & Palawan" images="1,2,3" />
    <Album album="singapore" title="Singapore" description="Singapore" images="1,2,6,9,3,5" />
    <Album album="thailand" title="Thailand" description="Koh-Samui, Bankgok, Chiang-Mai" images="1,4,2,3,5,8" />
  </div>
)