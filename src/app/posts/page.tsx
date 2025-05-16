import { Container, PageTitle } from "@/components/layout";
import { BlogPosts } from "./container";


export default function Page() {
  return (
    <Container>
      <PageTitle>Sharing thoughts</PageTitle>
      <BlogPosts />
    </Container>
  )
}