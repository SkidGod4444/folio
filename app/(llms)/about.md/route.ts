import { USER } from "@/lib/portfolio/data/user"

export const dynamic = "force-static"

export async function GET() {
  const content = `# About ${USER.displayName}

${USER.about}

---
- Name: ${USER.displayName}
- Location: ${USER.location}
- Professional Title: ${USER.tagline}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
