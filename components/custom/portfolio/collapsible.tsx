"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { motion } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"
import React from "react"

import { cn } from "@/lib/utils"

/**
 * Tag component for displaying skills or categories.
 */
export function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border/40 bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground select-none uppercase tracking-wider",
        className
      )}
      {...props}
    />
  )
}

/**
 * Collapsible component with animated content expansion.
 */
export const Collapsible = CollapsiblePrimitive.Root
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger

export function CollapsibleContent({
  children,
  className,
  ...props
}: CollapsiblePrimitive.CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Content asChild {...props}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn("overflow-hidden", className)}
      >
        {children}
      </motion.div>
    </CollapsiblePrimitive.Content>
  )
}

/**
 * Rotating chevron icon helper for the Collapsible component.
 */
export function CollapsibleChevronsIcon({ className }: { className?: string }) {
  return (
    <IconChevronDown
      className={cn(
        "size-4 transition-transform duration-200 group-data-[state=open]:rotate-180",
        className
      )}
    />
  )
}
