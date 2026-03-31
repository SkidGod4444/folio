import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { BlogItem } from "./blog-item"
import { getAllPosts } from "@/lib/portfolio/blog"

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

export function Blog() {
  const allPosts = getAllPosts()

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>
          Blog
          <PanelTitleSup>({allPosts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.slice(0, 4).map((post) => (
            <BlogItem key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          All Posts
          <IconArrowRight className="size-4" />
        </Button>
      </div>
    </Panel>
  )
}
