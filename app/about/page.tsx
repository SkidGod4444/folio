import type { Metadata } from "next"

import { USER } from "@/lib/portfolio/data/user"
import { Markdown } from "@/components/custom/portfolio/markdown"
import { ProseMono } from "@/components/custom/portfolio/typography"

const title = "About"
const description = `Learn more about ${USER.displayName} and their journey.`

export const metadata: Metadata = {
  title,
  description,
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl border-x border-line px-0">
      <div className="screen-line-bottom px-4 pt-8 pb-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom flex h-4" />

      <div className="p-4 pt-8">
        <ProseMono className="max-w-none">
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </div>

      <div className="h-12" />
    </div>
  )
}
