"use client"

import { TZDate, tzOffset } from "@date-fns/tz"
import { format } from "date-fns"
import {
  IconClockHour1,
  IconClockHour2,
  IconClockHour3,
  IconClockHour4,
  IconClockHour5,
  IconClockHour6,
  IconClockHour7,
  IconClockHour8,
  IconClockHour9,
  IconClockHour10,
  IconClockHour11,
  IconClockHour12,
} from "@tabler/icons-react"
import { useEffect, useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip"

import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item"

const CLOCK_ICONS: Record<number, any> = {
  1: IconClockHour1,
  2: IconClockHour2,
  3: IconClockHour3,
  4: IconClockHour4,
  5: IconClockHour5,
  6: IconClockHour6,
  7: IconClockHour7,
  8: IconClockHour8,
  9: IconClockHour9,
  10: IconClockHour10,
  11: IconClockHour11,
  12: IconClockHour12,
}

type CurrentLocalTimeItemProps = {
  timeZone: string
}

export function CurrentLocalTimeItem({ timeZone }: CurrentLocalTimeItemProps) {
  const [timeString, setTimeString] = useState<string>("")
  const [diffText, setDiffText] = useState<string>("")
  const [ClockIcon, setClockIcon] = useState<any>(IconClockHour12)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      // Get time in target timezone using TZDate
      const targetTime = TZDate.tz(timeZone)
      const formattedTime = format(targetTime, "HH:mm")
      setTimeString(formattedTime)

      // Get hour for clock icon (1-12)
      const hour = targetTime.getHours()
      const hour12 = hour % 12 || 12
      setClockIcon(CLOCK_ICONS[hour12])

      // Calculate timezone offset difference using tzOffset
      const viewerOffset = -now.getTimezoneOffset() // in minutes
      const targetOffset = tzOffset(timeZone, now) // in minutes

      const minutesDiff = Math.abs(targetOffset - viewerOffset)
      const hoursDiff = minutesDiff / 60

      let diff = ""
      if (hoursDiff < 1) {
        diff = " // same time"
      } else {
        const hours = Math.floor(hoursDiff)
        const isAhead = targetOffset > viewerOffset
        diff = ` // ${hours}h ${isAhead ? "ahead" : "behind"}`
      }
      setDiffText(diff)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [timeZone])

  if (!timeString) {
    return (
      <IntroItem>
        <IntroItemIcon>
          <IconClockHour12 className="size-4" />
        </IntroItemIcon>

        <IntroItemContent>00:00</IntroItemContent>
      </IntroItem>
    )
  }

  return (
    <IntroItem>
      <IntroItemIcon>
        <ClockIcon className="size-4" />
      </IntroItemIcon>

      <IntroItemContent aria-label={`Current local time: ${timeString}`}>
        <Tooltip>
          <TooltipTrigger>
            <span className="cursor-default">{timeString}</span>
          </TooltipTrigger>
          <TooltipContent>{timeZone}</TooltipContent>
        </Tooltip>

        <span className="text-muted-foreground" aria-hidden="true">
          {diffText}
        </span>
      </IntroItemContent>
    </IntroItem>
  )
}
