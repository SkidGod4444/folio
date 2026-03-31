import { AWARDS } from "@/lib/portfolio/data/awards"

export const dynamic = "force-static"

export async function GET() {
  const content = `# Awards

${AWARDS.map(award => `
## ${award.title}
Issuer: ${award.issuer}
Date: ${award.issueDate}

${award.description || ""}

${award.credentialURL ? `[Credential](${award.credentialURL})` : ""}
`).join("\n\n---")}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
