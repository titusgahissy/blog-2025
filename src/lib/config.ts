export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://titusgahissy.com'

export const siteConfig = {
  name: 'Titus Gahissy',
  url: baseUrl,
  ogImage: `${baseUrl}/og.png`,
  description: "Hello, I'm Titus Gahissy. I explore not so boring ideas and help teams and founders achieve more.",
  keywords: ["design", "software architect", "solutions architect", "entrepreneur", "gahissy", "titus", "products"],
  links: {
    twitter: 'https://twitter.com/titusgahissy',
    linkedin: 'https://www.linkedin.com/in/titusgahissy/',
    github: 'https://github.com/titusgahissy',
    instagram: 'https://www.instagram.com/titusgahissy/',
  },
}