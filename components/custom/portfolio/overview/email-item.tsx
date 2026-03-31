"use client"

import { IconMail } from "@tabler/icons-react"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"
import { useWebHaptics } from "web-haptics/react"

import { useIsClient } from "@/lib/portfolio/hooks/use-is-client"
import { CopyButton } from "../copy-button"
import { copyText } from "@/lib/portfolio/utils/copy"
import { decodeEmail } from "@/lib/portfolio/utils/string"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type EmailItemProps = {
  email: string
}

export function EmailItem({ email }: EmailItemProps) {
  const isClient = useIsClient()
  const emailDecoded = decodeEmail(email)

  useHotkeys("shift+e", () => {
    copyText(emailDecoded)
    toast.success("Email copied")
  })

  const { trigger } = useWebHaptics({ debug: true })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <IconMail className="size-4" />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `mailto:${emailDecoded}` : "#"}
          aria-label={
            isClient ? `Send email to ${emailDecoded}` : "Email address"
          }
        >
          {isClient ? emailDecoded : "[Email protected]"}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 translate-y-px opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5"
          variant="ghost"
          size="icon"
          text={isClient ? emailDecoded : "[Email protected]"}
          onCopySuccess={() => {
            trigger("success")
          }}
          onCopyError={() => trigger("error")}
        />
      </div>
    </IntroItem>
  )
}
