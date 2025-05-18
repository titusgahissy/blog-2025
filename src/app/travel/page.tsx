import { Container, PageHeader, PageSubtitle, PageTitle } from "@/components/layout";
import { Album } from "./album";

export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle className="md:w-1/2">Documenting travels<br className="hidden md:block" />and street moments</PageTitle>
        <PageSubtitle>
          A visual journal of places visited and moments <br className="hidden md:block" />that caught my eye as I move through the world.
        </PageSubtitle>
      </PageHeader>
      <Albums />
    </Container>
  )
}

const Albums = () => (
  <div className="pt-16 flex flex-col gap-4  divide-y divide-neutral-300 dark:divide-neutral-700">
    <Album album="portugal" title="Portugal" description="Cartagena" images="1,2,3,4,5,6,7,8,9" />
    <Album album="laos" title="Laos" description="Laos" images="1,2,3,5,6,7" />
    <Album album="vietnam" title="Vietnam" description="Vietnam" images="1,2,3,4,5,6,7,8,9,11,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,32,31,33,34,35,36,37,38,39,40,43,42,41,44,46,47,48,49,50,52,53,54,55,56,57,59,60,61,62,63,64,65,67,69,71,73,75,77,78,79,80,81,82,83,85,86,87,88,89,90,91,92,93,94,96,97,98,99,100,101,102,104" />
    <Album album="uk" title="UK" description="London" images="1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,18,19,20,21,22,23" />
    <Album album="prague" title="Czech Republic" description="Prague" images="1,2,4,5,6,7,8,9,10,11,12,13,14" />
    <Album album="turkey" title="Turkey" description="Turkey" images="4,5,7,8,9,10,11,12,13,14,16,6,17,18,19" />
    <Album album="colombia" title="Colombia" description="Cartagena" images="3,7,8,4,9,10,12,13,14,16,17,19,20,22,23,24,25,26,28,29,30" />
    <Album album="ecuador" title="Ecuador" description="Quito and more" images="4,2,3,1,6,18,16,14,30,8,19,12,17,20,11,24,25,27" />
    <Album album="japan" title="Japan" description="Osaka, Kyoto, Tokyo" images="2,6,7,8,9,10,12,13,16,14,15,18,19,20,21,22,23,24,11,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,49,51,46,53,54,55,56,57,58,59,61,62,68,64,66,67" />
    <Album album="france" title="France" description="Colmart" images="1,2,3,4,5,6,7,9,10" />
    <Album album="morocco" title="Morocco" description="Essaouira" images="1,2,3,4,5,7" />
    <Album album="usa" title="USA" description="San Francisco" images="1,2,3,4,5,7,9,10,11,12,13,14,15,16,17" />
    <Album album="netherlands" title="The Netherlands" description="Rotterdam & Amsterdam" images="1,2,3,4,5,6,7,8" />
    <Album album="hong-kong" title="Hong Kong" description="Hong Kong" images="7,1,2,4,3,5,6" />
    <Album album="philippines" title="Philippines" description="Manila & Palawan" images="1,2,3" />
    <Album album="singapore" title="Singapore" description="Singapore" images="1,2,6,9,3,5" />
    <Album album="thailand" title="Thailand" description="Koh-Samui, Bankgok, Chiang-Mai" images="1,4,2,3,5,8" />
  </div>
)