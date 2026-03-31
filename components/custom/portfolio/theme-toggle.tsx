"use client"

import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"

import { META_THEME_COLORS } from "@/lib/portfolio/config/site"
import { useMetaColor } from "@/hooks/use-meta-color"
import { useSound } from "@/hooks/use-sound"
import { SOUNDS } from "@/lib/portfolio/config/sounds"

import { MoonIcon } from "./animated-icons/moon"
import { SunMediumIcon } from "./animated-icons/sun-medium"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const { setMetaColor } = useMetaColor()

  const playClick = useSound(SOUNDS.click)

  const switchTheme = (sound = true) => {
    if (sound) playClick(0.2)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setMetaColor(
      newTheme === "light"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    )
  }

  useHotkeys("d", () => switchTheme(false))

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="border-none transition-colors hover:bg-accent"
          variant="ghost"
          size="icon-sm"
          onClick={() => switchTheme()}
        >
          <MoonIcon className="relative hidden [html.dark_&]:block" size={18} />
          <SunMediumIcon className="relative hidden [html.light_&]:block" size={18} />
          <span className="sr-only">Theme Toggle</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="pr-2 pl-3" sideOffset={8}>
        <div className="flex items-center gap-3">
          Toggle Mode
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
