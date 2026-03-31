"use client"

import Link from "next/link"

import { DesktopNav } from "./desktop-nav"
import { NavItemGitHub } from "./nav-item-github"
import { SiteHeaderMark } from "./site-header-mark"
import { ThemeToggle } from "./theme-toggle"
import { Separator } from "@/components/ui/separator"
import { MAIN_NAV, MOBILE_NAV } from "@/lib/portfolio/config/site"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"
import { BrandContextMenu } from "./brand-context-menu"

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
        <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 group-has-data-[slot=layout-wide]/layout:container after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl">
          <BrandContextMenu>
            <Link
              className="transition-[scale] ease-out active:scale-[0.98] has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
              href="/"
              aria-label="Home"
            >
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <div className="flex-1" />

          <DesktopNav items={MAIN_NAV} />

          <div className="flex items-center *:first:mr-2">
            <NavItemGitHub />
            <Separator
              orientation="vertical"
              className="mx-2 data-vertical:h-4 data-vertical:self-center"
            />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Nav Glow/Blur */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-[calc(--spacing(16)+env(safe-area-inset-bottom,0px))] bg-linear-to-t from-background from-[calc(env(safe-area-inset-bottom,0%))] to-transparent sm:hidden" />
      
      {/* Mobile Nav Container */}
      <div
        className={cn(
          "fixed bottom-[calc(--spacing(2)+env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring-1 ring-foreground/10 sm:hidden dark:ring-foreground/20"
        )}
      >
        <MobileNav items={MOBILE_NAV} />
      </div>
    </>
  )
}
