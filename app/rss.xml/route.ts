import { SITE_INFO } from "@/lib/portfolio/config/site"
import { getAllPosts } from "@/lib/portfolio/blog"

export const revalidate = 86400 // Revalidate daily
export const dynamic = "force-static"

export async function GET() {
  const allPosts = getAllPosts()

  const itemsXml = allPosts
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${SITE_INFO.url}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.description || "")}</description>
          <pubDate>${new Date(post.metadata.createdAt).toUTCString()}</pubDate>
          <guid isPermaLink="true">${SITE_INFO.url}/blog/${post.slug}</guid>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2004/Atom">
  <channel>
    <title>${escapeXml(SITE_INFO.name)} - Blog</title>
    <link>${SITE_INFO.url}</link>
    <description>${escapeXml(SITE_INFO.description)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_INFO.url}/rss.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml;charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  })
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;"
      case ">": return "&gt;"
      case "&": return "&amp;"
      case "'": return "&apos;"
      case "\"": return "&quot;"
    }
    return c
  })
}
