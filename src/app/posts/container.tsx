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
          <h2 className="text-2xl font-bold mb-4 border-b-2 pb-1 border-neutral-400">{year}</h2>
          <div className="divide-y divide-neutral-300">
            {posts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className='text-lg flex justify-between items-center hover:text-accent py-3 ease-in-out duration-300'>
                <h3 className='font-normal'>{post.metadata.title}</h3>
                <span className='bg-black/5 px-3 text-[0.85em] rounded py-1 '>
                  {formatDateShort(post.metadata.publishedAt)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))
      }
    </>
  )
}
