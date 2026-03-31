"use client"
import { CollapsibleList } from "./collapsible-list"
import { AWARDS } from "@/lib/portfolio/data/awards"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { AwardItem } from "./award-item"

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Awards
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={AWARDS}
        max={4}
        renderItem={(item) => <AwardItem award={item} />}
      />
    </Panel>
  )
}
