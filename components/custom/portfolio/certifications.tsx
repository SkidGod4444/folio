"use client"
import { CollapsibleList } from "./collapsible-list"
import { CERTIFICATIONS } from "@/lib/portfolio/data/certifications"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { CertificationItem } from "./certification-item"

export function Certifications() {
  return (
    <Panel id="certifications">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        max={4}
        renderItem={(item) => (
          <CertificationItem certification={item} />
        )}
      />
    </Panel>
  )
}
