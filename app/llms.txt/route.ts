import { SITE_INFO } from "@/lib/portfolio/config/site"
import { getAllPosts } from "@/lib/portfolio/blog"

export const revalidate = 86400
export const dynamic = "force-static"

export async function GET() {
  const allPosts = getAllPosts()

  const blogItems = allPosts
    .map((post) => `- [${post.metadata.title}](${SITE_INFO.url}/blog/${post.slug}.mdx): ${post.metadata.description}`)
    .join("\n")

  const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Blog

${blogItems}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
}
