export type PostSlug = {
  slug: string
}

export type Post = {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
    category?: string
    tags?: string
  }
  slug: string
  content: string
}

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}
