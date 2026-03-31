import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { cache } from "react"

import type { Doc, DocMetadata } from "@/types/portfolio/blog"

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent)

  return {
    metadata: file.data as DocMetadata,
    content: file.content,
  }
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map<Doc>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))

    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export const getAllPosts = cache(() => {
  return getMDXData(path.join(process.cwd(), "lib/portfolio/data/blog/content")).sort(
    (a, b) => {
      if (a.metadata.pinned && !b.metadata.pinned) return -1
      if (!a.metadata.pinned && b.metadata.pinned) return 1

      return (
        new Date(b.metadata.createdAt).getTime() -
        new Date(a.metadata.createdAt).getTime()
      )
    }
  )
})

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.metadata?.category === category)
}
