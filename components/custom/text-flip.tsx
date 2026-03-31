"use client"

import { AnimatePresence, motion, Transition, Variants } from "framer-motion"
import { Children, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Default animation variants for the text flip effect.
 */
const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
}

export type TextFlipProps = {
  /** The motion component to render as (e.g., motion.p, motion.span). */
  as?: React.ElementType
  className?: string
  /** The items (strings or elements) to cycle through. */
  children: React.ReactNode[]
  /** Interval in seconds between flips. */
  interval?: number
  /** Framer motion transition settings. */
  transition?: Transition
  /** Custom animation variants. */
  variants?: Variants
  /** Callback triggered on every flip. */
  onIndexChange?: (index: number) => void
}

/**
 * TextFlip component cycles through a list of children with a 'flip' animation.
 * Useful for rotating job titles, taglines, or keywords.
 */
export function TextFlip({
  as: Component = motion.p,
  className,
  children,
  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,
  onIndexChange,
}: TextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    // Set up auto-rotation based on the provided interval
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* 
        Key is tied to currentIndex to trigger AnimatePresence 
        animations on every state change.
      */}
      <Component
        key={currentIndex}
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  )
}
