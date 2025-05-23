import { PostSlug } from '@/app/posts/type'
import { formatDate, getBlogPosts } from '@/app/posts/utils'
import { Article, Container, PostTitle } from '@/components/layout'
//import { CustomMDX } from '@/components/mdx'
import YouTube from '@/components/mdx/youtube'
import { baseUrl } from '@/lib/config'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post: PostSlug) => ({
    slug: post.slug,
  }))
}

export type PageParams = Readonly<{ params: Promise<{ slug: string }> }>;


export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  const ogImage = image
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
  <Link href="/posts" className="flex items-center font-medium justify-center text-base md:text-lg gap-2 no-underline text-neutral-600">
    <ArrowLeft className="size-4" />
    <span>Back to all posts</span>
  </Link>
)


export default async function Blog({ params }: PageParams) {
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.summary,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/posts/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Titus Gahissy',
            },
          }),
        }}
      />
      <Container>
        <div className='text-center  pb-4'>
          <PostTitle prepend={BlogLink}>
            {metadata.title}
          </PostTitle>
          {metadata.summary && (
            <div className='font-medium text-xl md:text-2xl py-2 text-neutral-600 dark:text-neutral-400'>
              {metadata.summary}
            </div>
          )}
          <div className="flex font-normak justify-center">
            <p className="md:text-lg text-neutral-600 dark:text-neutral-400">
              {formatDate(metadata.publishedAt)} / {metadata.category}
            </p>
          </div>
        </div>
        {metadata.image && (
          <div className='container max-w-5xl mx-auto pt-4'>
            <Image src={metadata.image} alt={metadata.title} width={1000} height={1000} />
          </div>
        )}
        <div className='container max-w-3xl mx-auto pb-16 font-medium'>
          <Article>
            <MDXRemote source={content} components={components} />
          </Article>
        </div>
      </Container>
    </>
  )
}

const components = {
  YouTube,
  img: (props: any) => (
    <Image
      sizes="100vw"
      width={1000}
      height={700}
      alt="Post"
      style={{ width: '100% ', height: 'auto' }}
      {...(props)}
    />
  ),
}
