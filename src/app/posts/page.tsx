import { Container, PageTitle } from "@/components/layout";
import { BlogPosts } from "./container";


export default function Page() {
  return (
    <Container>
      <PageTitle>I share, therefore I exist</PageTitle>
      <BlogPosts />
    </Container>
  )
}