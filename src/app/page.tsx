import { Author } from "@/components/layout";
import { BlogPosts } from "@/components/posts";

export default function Home() {
  return (
    <div>
      <Author full />
      <BlogPosts />
    </div>
  )
}
