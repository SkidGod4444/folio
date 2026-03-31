import { IconArrowUpRight } from "@tabler/icons-react"
import Image from "next/image"
import React from "react"

import { addQueryParams, UTM_PARAMS } from "@/lib/portfolio-utils"
import { cn } from "@/lib/utils"
import type { SocialLink } from "@/types/portfolio/social-links"

/**
 * Individual social link item component.
 * Displays an icon, title, and external link with a consistent hover state.
 */
export function SocialLinkItem({ icon, title, href, subtitle }: SocialLink) {
  return (
    <a
      className={cn(
        "flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors ease-out hover:bg-muted/30",
        // Multi-column responsive border logic
        "max-md:even:border-l max-md:border-border/40",
        "md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l md:border-border/40"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
      aria-label={`Visit ${title} profile`}
    >
      <div className="relative size-8 shrink-0">
        <Image
          className="rounded-lg select-none grayscale hover:grayscale-0 transition-all"
          src={icon}
          alt={title}
          width={32}
          height={32}
          quality={100}
          unoptimized
        />
        {/* Subtle inner overlay for a refined look */}
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/5 dark:ring-white/10" />
      </div>

      <div className="flex-1 overflow-hidden">
        <h3 className="font-medium truncate">{title}</h3>
        {subtitle && (
          <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
        )}
      </div>

      <IconArrowUpRight size={16} className="text-muted-foreground/50 group-hover:text-foreground transition-colors" />
    </a>
  )
}
