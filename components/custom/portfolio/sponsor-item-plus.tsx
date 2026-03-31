import { PlusIcon } from "./animated-plus-icon"
import { SPONSORSHIP_URL } from "@/lib/portfolio/config/site"
import { cn } from "@/lib/utils"

export function SponsorItemPlus() {
  return (
    <a
      className={cn(
        "flex min-h-20 items-center justify-center transition-[background-color] ease-out hover:bg-accent-muted",
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
      )}
      href={SPONSORSHIP_URL}
      target="_blank"
      rel="noopener"
    >
      <PlusIcon
        className="flex size-full items-center justify-center text-muted-foreground"
        size={24}
      />
      <span className="sr-only">Sponsor My Work</span>
    </a>
  )
}
