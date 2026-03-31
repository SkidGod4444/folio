import { ArrowUpRightIcon } from "lucide-react"
import type { Metadata } from "next"

import { SPONSORSHIP_URL } from "@/lib/portfolio/config/site"
import { SponsorItem } from "@/components/custom/portfolio/sponsor-item"
import { SPONSORS } from "@/lib/portfolio/data/sponsor"
import type { Sponsor, SponsorTier } from "@/types/portfolio/sponsor"
import { SPONSOR_TIERS } from "@/types/portfolio/sponsor"

const title = "Sponsors"
const description =
  "Grateful for the support that helps me grow and maintain high-quality projects."

export const metadata: Metadata = {
  title,
  description,
}

const SPONSORS_BY_TIER = SPONSORS.reduce(
  (acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = []
    }
    acc[sponsor.tier].push(sponsor)
    return acc
  },
  {} as Record<SponsorTier, Sponsor[]>
)

export default function PortfolioPage() {
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

      {SPONSOR_TIERS.map((tier) => (
        <SponsorsGroup
          key={tier.name}
          title={tier.title}
          sponsors={SPONSORS_BY_TIER[tier.name] ?? []}
        />
      ))}

      <div className="flex justify-center py-8">
        <a
          href={SPONSORSHIP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Sponsor My Work
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>

      <div className="screen-line-top h-4" />
    </div>
  )
}

function SponsorsGroup({
  title,
  sponsors,
}: {
  title: string
  sponsors: Sponsor[]
}) {
  if (sponsors.length === 0) {
    return null
  }

  return (
    <div>
      <div className="p-4 pt-8">
        <h2 className="font-heading text-lg leading-none font-medium">
          {title}
        </h2>
      </div>

      <div className="screen-line-bottom relative pb-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 relative h-full">
           <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 h-full">
            <div className="border-r border-line h-full" />
            <div className="border-l border-line h-full" />
          </div>
          {sponsors.map((item) => (
            <SponsorItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
