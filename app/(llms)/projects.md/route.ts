import { PROJECTS } from "@/lib/portfolio/data/projects"

export const dynamic = "force-static"

export async function GET() {
  const content = `# Projects

${PROJECTS.map(project => `
## ${project.title}
Period: ${project.period.start}${project.period.end ? ` - ${project.period.end}` : " - Present"}
Link: ${project.link}

${project.description || ""}

**Skills:** ${project.skills.join(", ")}
`).join("\n\n---")}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
