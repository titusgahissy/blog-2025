import { getBlogPosts } from '@/app/posts/utils'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/posts'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}