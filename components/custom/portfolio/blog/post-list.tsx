"use client"

import type { Doc } from "@/types/portfolio/blog"
import { BlogItem } from "../blog-item"
import { useFilteredPosts } from "@/lib/portfolio/hooks/use-filtered-posts"

export function PostList({
  posts,
}: {
  posts: Doc[]
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-line" />
        <div className="border-l border-line" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((post, index) => (
          <BlogItem
            key={post.slug}
            post={post}
            shouldPreloadImage={index <= 4}
          />
        ))}

        {posts.length === 0 && (
          <div className="screen-line-top screen-line-bottom p-4">
            <p className="font-mono text-sm text-muted-foreground">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function PostListWithSearch({ posts }: { posts: Doc[] }) {
  const filteredPosts = useFilteredPosts(posts)
  return <PostList posts={filteredPosts} />
}
