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
    <div className="mx-auto max-w-3xl py-12">
      <div className="screen-line-bottom px-4 pb-6">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="p-4 pt-8">
        <ProseMono className="max-w-none">
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </div>

      <div className="h-12" />
    </div>
  )
}
