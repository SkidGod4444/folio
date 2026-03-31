import { Markdown } from "./markdown"
import { ProseMono } from "./typography"
import { USER } from "@/lib/portfolio/data/user"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  )
}
