"use client"

import { useMouse } from "react-use"
import { useId, useRef } from "react"
import { ChanhDaiWordmark } from "./chanhdai-wordmark"

export function SiteFooterInteractiveLogotype() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { docX, docY } = useMouse(containerRef as React.RefObject<Element>)
  const idValue = useId()
  const id = `js-footer-logotype-gradient-${idValue.replace(/:/g, "")}`

  return (
    <div
      ref={containerRef}
      className="group/footer-logotype relative block w-full overflow-hidden"
    >
      <svg className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <radialGradient
            id={id}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary)" />
            <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <ChanhDaiWordmark
        className="size-full fill-foreground/10 transition-colors duration-500 group-hover/footer-logotype:fill-transparent"
        style={
          {
            "--footer-logotype-gradient": `url(#${id})`,
            fill: "var(--footer-logotype-gradient)",
          } as React.CSSProperties
        }
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/footer-logotype:opacity-100"
        style={{
          maskImage: `radial-gradient(300px at ${docX}px ${docY}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(300px at ${docX}px ${docY}px, white, transparent)`,
        }}
      >
        <ChanhDaiWordmark className="size-full fill-primary" />
      </div>
    </div>
  )
}
