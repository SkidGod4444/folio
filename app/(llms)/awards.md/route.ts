import { AWARDS } from "@/lib/portfolio/data/awards"

export const dynamic = "force-static"

export async function GET() {
  const content = `# Awards

${AWARDS.map(award => `
## ${award.title}
Prize: ${award.prize}
Category: ${award.grade}
Date: ${award.date}

${award.description || ""}

${award.referenceLink ? `[Reference](${award.referenceLink})` : ""}
`).join("\n\n---")}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
