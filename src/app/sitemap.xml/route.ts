import { baseUrl } from "@/lib/config";
import { Post } from "../posts/type";
import { getBlogPosts } from "../posts/utils";


export async function GET() {
  const body = await generateSiteMap();
  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}

async function generateSiteMap(): Promise<string> {
  const pages = ['', '/posts', '/travel', '/ventures', '/library', '/about',]
  const lastModified = new Date(2025, 5, 18, 23, 37, 0);

  const posts = getBlogPosts()

  let links: Array<string> = []


  // Add page links for this language
  links = links.concat(pages.map((url) =>
    generateItem(baseUrl, url, url === '/' ? 1 : 0.8, lastModified, 'weekly')
  ));

  // Get the last modified date for blog index
  const bLastMod = new Date(posts[0]!.metadata.publishedAt);

  // Add blog post links
  links = links.concat(posts.map((p: Post) =>
    generateItem(baseUrl, `/posts/${p.slug}`, 0.5, new Date(p.metadata.publishedAt), 'weekly')
  ));

  // Add blog index link
  links.push(generateItem(baseUrl, '/posts', 0.8, bLastMod, 'weekly'));

  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
   ${links.join("\n")}
  </urlset>
  `.trim()
}

type ChangeFreq = 'weekly' | 'monthly' | 'yearly' | 'never'

function generateItem(baseUrl: string, path: string, priority: number, lastModified: Date, changeFreq: ChangeFreq): string {
  return `
  <url>
     <loc>${baseUrl}${path}</loc>
     <lastmod>${formatLastModified(lastModified)}</lastmod>
     <changefreq>${changeFreq}</changefreq>
     <priority>${priority}</priority>
   </url>
`
}

function formatLastModified(date: Date): string {
  return date.toISOString()
}
