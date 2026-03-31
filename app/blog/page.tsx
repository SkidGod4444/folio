import type { Metadata } from "next"
import { Suspense } from "react"

import { PostSearchInput } from "@/components/custom/portfolio/blog/post-search-input"
import { PostList, PostListWithSearch } from "@/components/custom/portfolio/blog/post-list"
import { getAllPosts } from "@/lib/portfolio/blog"

const title = "Blog"
const description = "A collection of articles on development, design, and ideas."

export const metadata: Metadata = {
  title,
  description,
}

export default function BlogPage() {
  const allPosts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl py-12">
      <div className="screen-line-bottom px-4 pb-6">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="p-4 py-8">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input dark:bg-input/30" />
          }
        >
          <PostSearchInput />
        </Suspense>
      </div>

      <div className="py-4">
        <Suspense fallback={<PostList posts={allPosts} />}>
          <PostListWithSearch posts={allPosts} />
        </Suspense>
      </div>

      <div className="h-12" />
    </div>
  )
}
