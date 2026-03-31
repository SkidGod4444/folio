"use client"

import ReactMarkdown from "react-markdown"
import rehypeExternalLinks from "rehype-external-links"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

import { UTM_PARAMS } from "@/config/portfolio/site"
import { rehypeAddQueryParams } from "@/lib/portfolio/utils/rehype-add-query-params"

export function Markdown({ children, ...props }: React.ComponentProps<typeof ReactMarkdown>) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeExternalLinks, { target: "_blank", rel: "nofollow noopener" }],
        [rehypeAddQueryParams, UTM_PARAMS],
      ]}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
