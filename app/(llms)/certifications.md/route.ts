import { CERTIFICATIONS } from "@/lib/portfolio/data/certifications"

export const dynamic = "force-static"

export async function GET() {
  const content = `# Certifications

${CERTIFICATIONS.map(cert => `
## ${cert.title}
Issuer: ${cert.issuer}
Date: ${cert.issueDate}
${cert.credentialID ? `Credential ID: ${cert.credentialID}` : ""}
${cert.credentialURL ? `[Credential Link](${cert.credentialURL})` : ""}
`).join("\n\n---")}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
