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
          <div className="text-6xl font-heading font-bold mb-8">{year}</div>
          <div className="flex flex-col divide-y divide-neutral-300 ">
            {posts.map((post) => (
              <div key={post.slug} className='py-6 text-lg justify-between items-center '>
                <div className='flex  uppercase text-xs tracking-wider gap-8 font-medium'>
                  <span>{post.metadata.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link href={`/posts/${post.slug}`} className="flex items-center justify-between hover:text-accent ease-in-out duration-300 transition-colors">
                  <h2 className='font-normal text-5xl py-2'>{post.metadata.title}</h2>
                  <span className='bg-black/5 px-3 text-2xl rounded py-2 uppercase'>
                    {formatDateShort(post.metadata.publishedAt)}
                  </span>
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
