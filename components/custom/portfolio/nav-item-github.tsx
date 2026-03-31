import { Icons } from "./icons"
import { SOURCE_CODE_GITHUB_URL } from "@/lib/portfolio/config/site"

export function NavItemGitHub() {
  return (
    <a
      className="inline-flex size-9 items-center justify-center rounded-lg border border-transparent transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
      href={SOURCE_CODE_GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub Source Code"
    >
      <Icons.github className="size-4" />
      <span className="sr-only">GitHub</span>
    </a>
  )
}
