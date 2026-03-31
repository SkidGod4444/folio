"use client"

import { format } from "date-fns"
import { IconLoader2 } from "@tabler/icons-react"
import { use } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
import type { Activity } from "./contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "./contribution-graph"
import { GITHUB_USERNAME, UTM_PARAMS } from "@/lib/portfolio/config/site"
import { addQueryParams } from "@/lib/portfolio/utils/url"

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger
              render={
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              }
            />
            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : ""}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground text-xs">
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={addQueryParams(
                  `https://github.com/${GITHUB_USERNAME}`,
                  UTM_PARAMS
                )}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <IconLoader2 className="animate-spin text-muted-foreground" />
    </div>
  )
}
