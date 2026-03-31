import { IconArrowUpRight } from "@tabler/icons-react"
import Image from "next/image"

import { SITE_INFO, UTM_PARAMS } from "@/lib/portfolio/config/site"
import type { SocialLink } from "@/types/portfolio/social-links"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/lib/portfolio/utils/url"

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      className={cn(
        "flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-md:nth-[2n+1]:screen-line-top max-md:nth-[2n+1]:screen-line-bottom",
        "md:nth-[3n+1]:screen-line-top md:nth-[3n+1]:screen-line-bottom"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-8 shrink-0">
        <Image
          className="rounded-lg select-none corner-squircle supports-corner-shape:rounded-[50%]"
          src={icon}
          alt={title}
          width={32}
          height={32}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15 supports-corner-shape:rounded-[50%]" />
      </div>

      <h3 className="flex-1 font-medium">{title}</h3>

      <IconArrowUpRight className="size-4 text-muted-foreground" />
    </a>
  )
}
