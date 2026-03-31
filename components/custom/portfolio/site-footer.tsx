import Link from "next/link"

import { Icons } from "@/components/custom/portfolio/icons"
import {
  GITHUB_USERNAME,
  X_USERNAME,
} from "@/lib/portfolio/config/site"

export function SiteFooter() {
  return (
    <footer className="group/footer-layout container relative mx-auto mb-10 max-w-3xl px-2">
      <div className="screen-line-top screen-line-bottom flex h-fit flex-col border-x border-line p-2 sm:p-4">
        <div className="mt-4 flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Socials
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link
                href={`https://x.com/${X_USERNAME}`}
                className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
              >
                <Icons.x className="size-3.5" />X
              </Link>
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
              >
                <Icons.github className="size-3.5" />
                GitHub
              </Link>
              <Link
                href="/rss.xml"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icons.rss className="size-3.5" />
                RSS
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-dashed border-line pt-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/dmca"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              DMCA
            </Link>
            <Link
              href="/llms.txt"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              LLMS.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
