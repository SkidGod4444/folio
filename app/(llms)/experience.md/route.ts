import { EXPERIENCES } from "@/lib/portfolio/data/experiences"

export const dynamic = "force-static"

export async function GET() {
  const content = `# Experience

${EXPERIENCES.map(exp => `
## ${exp.companyName}
${exp.companyWebsite ? `Website: ${exp.companyWebsite}` : ""}

${exp.positions.map(pos => `
### ${pos.title}
Period: ${pos.employmentPeriod.start}${pos.employmentPeriod.end ? ` - ${pos.employmentPeriod.end}` : " - Present"}
Type: ${pos.employmentType || "N/A"}

${pos.description || ""}

**Skills:** ${pos.skills?.join(", ") || "None"}
`).join("\n")}
`).join("\n\n---")}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
