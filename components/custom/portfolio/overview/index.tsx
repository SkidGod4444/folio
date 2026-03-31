import {
  IconLink,
  IconMapPin,
  IconMars,
  IconVenus,
  IconGenderGenderless,
} from "@tabler/icons-react"

import { USER } from "@/lib/portfolio/data/user"
import type { User } from "@/types/portfolio/user"
import { urlToName } from "@/lib/portfolio/utils/url"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"
import { JobItem } from "./job-item"
import { PhoneItem } from "./phone-item"

export function Overview() {
  return (
    <Panel className="after:content-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
              experienceId={job.experienceId}
            />
          )
        })}

        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <IconMapPin className="size-4" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <PhoneItem phoneNumber={USER.phoneNumber} />

          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <IconLink className="size-4" />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
            <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
              {USER.pronouns}
            </IntroItemContent>
          </IntroItem>
        </div>
      </PanelContent>
    </Panel>
  )
}

function getGenderIcon(gender: User["gender"]) {
  switch (gender) {
    case "male":
      return <IconMars className="size-4" />
    case "female":
      return <IconVenus className="size-4" />
    case "non-binary":
      return <IconGenderGenderless className="size-4" />
  }
}
