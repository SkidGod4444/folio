"use client"

import { IconChevronDown } from "@tabler/icons-react"
import { Slot } from "@radix-ui/react-slot"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/custom/portfolio/collapsible"
import { cn } from "@/lib/utils"

export function CollapsibleList<T>({
  items,
  max = 3,
  keyExtractor,
  renderItem,
}: {
  items: T[]
  max?: number
  keyExtractor?: (item: T) => string
  renderItem: (item: T) => React.ReactNode
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
      {items.slice(0, max).map((item, index) => (
        <div
          key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
          className="border-b border-line"
        >
          {renderItem(item)}
        </div>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((item, index) => (
          <div
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : max + index
            }
            className="border-b border-line"
          >
            {renderItem(item)}
          </div>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="gap-2 border-none pr-2.5 pl-3" size="sm">
              <span>{isOpen ? "Show Less" : "Show More"}</span>
              <IconChevronDown className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")} />
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  )
}
