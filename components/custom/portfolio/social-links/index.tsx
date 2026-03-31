"use client"

import { SOCIAL_LINKS } from "@/lib/portfolio/data/social-links"
import { Panel, PanelContent } from "../panel"
import { SocialLinkItem } from "./social-link-item"

/**
 * SocialLinks component displays a responsive grid of external profiles.
 * Adapts layout from single column (mobile) to triple column (desktop).
 */
export function SocialLinks() {
  return (
    <Panel className="border-x border-border/40">
      <h2 className="sr-only">Social Links</h2>

      <PanelContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 border-t border-border/40 divide-border/40">
        {SOCIAL_LINKS.map((link, index) => (
          <SocialLinkItem
            key={index}
            {...link}
          />
        ))}
      </PanelContent>
    </Panel>
  )
}
