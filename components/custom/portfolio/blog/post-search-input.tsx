"use client"

import { Search, X } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useSearchQuery } from "@/lib/portfolio/hooks/use-search-query"

export function PostSearchInput() {
  const { query, setQuery } = useSearchQuery()

  return (
    <InputGroup className="rounded-lg shadow-none">
      <InputGroupInput
        placeholder="Search Blog…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />

      <InputGroupAddon align="inline-start">
        <Search className="size-4" />
      </InputGroupAddon>

      <InputGroupAddon
        className="pr-2.25 data-[disabled=true]:hidden"
        align="inline-end"
        data-disabled={!query.length}
      >
        <InputGroupButton
          className="rounded-sm border-none"
          size="icon-xs"
          title="Clear"
          aria-label="Clear"
          onClick={() => setQuery("")}
        >
          <X className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
