"use client"

import { useRef } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import type { VolumeIconHandle } from "./volume-icon"
import { VolumeIcon } from "./volume-icon"
import { useSoundLazy } from "@/lib/portfolio/hooks/use-sound"
import { cn } from "@/lib/utils"

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string
  namePronunciationUrl: string
}) {
  const { play, preload } = useSoundLazy(namePronunciationUrl)

  const volumeIconRef = useRef<VolumeIconHandle>(null)

  const handlePlayClick = () => {
    volumeIconRef.current?.startAnimation()
    play()
  }

  useHotkeys("p", handlePlayClick)

  return (
    <button
      className={cn(
        "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        className
      )}
      onPointerEnter={() => preload()}
      onClick={handlePlayClick}
    >
      <VolumeIcon ref={volumeIconRef} className="size-4.5" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  )
}
