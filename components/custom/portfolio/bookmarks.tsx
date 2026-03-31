"use client"
import { CollapsibleList } from "./collapsible-list"
import { BOOKMARKS } from "@/lib/portfolio/data/bookmarks"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { BookmarkItem } from "./bookmark-item"

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle>
          Bookmarks
          <PanelTitleSup>({BOOKMARKS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={BOOKMARKS}
        max={4}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  )
}
