import { PageHeader, PageLayout, PageSubtitle, PageTitle } from "@/components/layout";
import { Album } from "./album";
export default function Page() {
  return (
    <PageLayout wide>
      <PageHeader>
        <PageTitle>Travel</PageTitle>
        <PageSubtitle>Documenting travels and street moments</PageSubtitle>
      </PageHeader>
      <Albums />
    </PageLayout>
  )
}

const Albums = () => (
  <div className="px-28 pt-16">
    <Album album="thailand" title="Thailand" description="A collection of photos from Thailand" images="1,4,2,3,5,8" />
  </div>
)