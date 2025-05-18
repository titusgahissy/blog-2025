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
          <div className="text-4xl md:text-6xl font-heading font-medium mb-6">{year}</div>
          <div className="flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700">
            {posts.map((post) => (
              <div key={post.slug} className='py-2 md:py-6 text-base md:text-lg justify-between items-center '>
                <div className='flex  uppercase text-[0.6rem] md:text-xs tracking-wider gap-5 md:gap-8 font-medium'>
                  <span>{post.metadata.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link href={`/posts/${post.slug}`} className="flex items-center justify-between hover:text-accent ease-in-out duration-300 transition-colors">
                  <h2 className='font-normal text-2xl md:text-5xl py-0.5 md:py-2'>{post.metadata.title}</h2>
                  <div className='flex items-center gap-4'>
                    <span className='bg-black/5 px-2 md:px-4 text-sm md:text-2xl rounded py-1 md:py-2 uppercase'>
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
