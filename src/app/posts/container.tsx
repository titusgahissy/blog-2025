import { formatDateShort, getBlogPosts } from '@/app/posts/utils'
import Link from 'next/link'
export function BlogPosts() {

  const entries = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  const entriesByYear = entries.reduce<Record<number, typeof entries>>((acc, entry) => {
    const year = new Date(entry.metadata.publishedAt).getFullYear();

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(entry);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(entriesByYear).map(([year, posts]) => (
        <div key={year}>
          <div className="text-4xl md:text-6xl font-heading font-medium mb-4 xl:mb-6">{year}</div>
          <div className="flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700">
            {posts.map((post) => (
              <div key={post.slug} className='py-3 md:py-4 xl:py-6 text-base md:text-lg justify-between items-center '>
                <div className='flex items-center uppercase text-[0.6rem] md:text-xs tracking-wider gap-5 md:gap-4 font-medium'>
                  <span className='md:hidden'>{post.metadata.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link href={`/posts/${post.slug}`} className="flex items-center justify-between hover:text-accent ease-in-out duration-300 transition-colors">
                  <h2 className='font-normal text-xl md:text-4xl xl:text-5xl py-0.5 xl:py-2'>{post.metadata.title}</h2>
                  <div className='flex items-center gap-4'>
                  <span className='hidden md:block bg-black/5 px-2 md:px-4 font-medium md:font-normal text-xs md:text-xl xl:text-2xl rounded py-1 md:py-2 '>
                      {post.metadata.category}
                    </span>
                    <span className='bg-black/5 px-2 md:px-4 font-medium md:font-normal text-xs md:text-xl xl:text-2xl rounded py-1 md:py-2 uppercase'>
                      {formatDateShort(post.metadata.publishedAt)}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))
      }
    </>
  )
}
