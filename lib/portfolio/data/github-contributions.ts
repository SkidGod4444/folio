import { cache } from "react"

import type { Activity } from "@/components/custom/portfolio/contribution-graph"
import { GITHUB_USERNAME } from "@/lib/portfolio/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const GITHUB_CONTRIBUTIONS_API_URL = "https://github-contributions-api.jogruber.de"

export const getGitHubContributions = cache(
  async () => {
    try {
      const res = await fetch(
        `${GITHUB_CONTRIBUTIONS_API_URL}/v4/${GITHUB_USERNAME}?y=last`,
        { next: { revalidate: 86400 } } // Cache for 1 day
      )
      
      if (!res.ok) {
        throw new Error(`Failed to fetch GitHub contributions: ${res.statusText}`)
      }

      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error)
      return [] // Return empty array on error
    }
  }
)
