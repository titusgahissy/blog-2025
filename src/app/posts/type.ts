export type PostSlug = {
  slug: string
}

export type Post = {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image?: string
    logo?: string
    url?: string
    category?: string
    tags?: string
    role?: string
  }
  slug: string
  content: string
  readingTime: string
}

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}
