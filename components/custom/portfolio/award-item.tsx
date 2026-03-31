"use client"

import { format } from "date-fns"
import { IconAward, IconFileCheck } from "@tabler/icons-react"
import React from "react"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "./collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
import { Markdown } from "./markdown"
import { Separator } from "./ui-separator"
import { ProseMono } from "./typography"

import type { Award } from "@/types/portfolio/awards"

export function AwardItem({
  className,
  award,
}: {
  className?: string
  award: Award
}) {
  const canExpand = !!award.description

  return (
    <Collapsible className={className} disabled={!canExpand}>
      <div className="flex items-center hover:bg-accent-muted">
        <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background">
          <IconAward className="pointer-events-none size-4 text-muted-foreground" />
        </div>

        <div className="flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left outline-none">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {award.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Prize</dt>
                  <dd>{award.prize}</dd>
                </dl>

                <Separator
                   className="data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
                   orientation="vertical"
                />

                <dl>
                  <dt className="sr-only">Awarded in</dt>
                  <dd>
                    <time dateTime={new Date(award.date).toISOString()}>
                      {format(new Date(award.date), "MM.yyyy")}
                    </time>
                  </dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
                  orientation="vertical"
                />

                <dl>
                  <dt className="sr-only">Received in Grade</dt>
                  <dd>{award.grade}</dd>
                </dl>
              </div>
            </div>

            {award.referenceLink && (
              <Tooltip>
                <TooltipTrigger>
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={award.referenceLink}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconFileCheck className="pointer-events-none size-4" />
                    <span className="sr-only">Open Reference Attachment</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open Reference Attachment</p>
                </TooltipContent>
              </Tooltip>
            )}

            {canExpand && (
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsIcon duration={0.15} />
              </div>
            )}
          </CollapsibleTrigger>
        </div>
      </div>

      {canExpand && (
        <CollapsibleContent className="overflow-hidden">
          <ProseMono className="border-t border-line p-4">
            <Markdown>{award.description}</Markdown>
          </ProseMono>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}
