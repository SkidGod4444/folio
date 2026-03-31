"use client"

import { IconPhone } from "@tabler/icons-react"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"
import { useWebHaptics } from "web-haptics/react"

import { useIsClient } from "@/lib/portfolio/hooks/use-is-client"
import { CopyButton } from "../copy-button"
import { copyText } from "@/lib/portfolio/utils/copy"
import { decodePhoneNumber, formatPhoneNumber } from "@/lib/portfolio/utils/string"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type PhoneItemProps = {
  phoneNumber: string
}

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient()
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber)
  const phoneNumberFormatted = formatPhoneNumber(phoneNumberDecoded)

  useHotkeys("shift+p", () => {
    copyText(phoneNumberDecoded)
    toast.success("Phone number copied")
  })

  const { trigger } = useWebHaptics({ debug: true })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <IconPhone className="size-4" />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
          aria-label={
            isClient ? `Call ${phoneNumberFormatted}` : "Phone number"
          }
        >
          {isClient ? phoneNumberFormatted : "[Phone protected]"}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5"
          variant="ghost"
          size="icon"
          text={isClient ? phoneNumberDecoded : "[Phone protected]"}
          onCopySuccess={() => {
            trigger("success")
          }}
          onCopyError={() => trigger("error")}
        />
      </div>
    </IntroItem>
  )
}
