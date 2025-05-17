import { Container, PageHeader, PageTitle } from "@/components/layout";
import { BlogPosts } from "./container";


export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>I share,<br />therefore I exist</PageTitle>
      </PageHeader>
      <BlogPosts />
    </Container>
  )
}