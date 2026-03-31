import { getPostBySlug } from "@/lib/portfolio/blog"

export const dynamic = "force-static"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return new Response("Post not found", { status: 404 })
  }

  // Include frontmatter and content for the LLM
  const rawContent = `---
title: ${post.metadata.title}
description: ${post.metadata.description}
createdAt: ${post.metadata.createdAt}
updatedAt: ${post.metadata.updatedAt}
---

${post.content}`

  return new Response(rawContent, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
