import { PostSlug } from '@/app/posts/type'
import { formatDate, getBlogPosts } from '@/app/posts/utils'
import { baseUrl } from '@/app/sitemap'
import { PageTitle } from '@/components/layout'
//import { CustomMDX } from '@/components/mdx'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post: PostSlug) => ({
    slug: post.slug,
  }))
}

export type PageParams = Readonly<{ params: Promise<{ slug: string }> }>;


export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}



const BlogLink = (
  <Link href="/" className="flex items-center font-medium justify-center text-sm gap-2 no-underline text-neutral-600">
    <ArrowLeft className="size-4" />
    <span>Blog</span>
  </Link>
)


export default async function Blog({ params }: PageParams) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/posts/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Titus Gahissy',
            },
          }),
        }}
      />
      <div className='text-center border-b border-neutral-300  pb-4'>
        <PageTitle prepend={BlogLink}>
          {post.metadata.title}
        </PageTitle>
        <div className="flex font-normak justify-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)} / {post.metadata.category}
          </p>
        </div>
      </div>
      <article className='font-normal text-black dark:text-white pt-4 '>
        <MDXRemote source={post.content} />
      </article>
    </>
  )
}