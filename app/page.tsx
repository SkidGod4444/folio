// Main Portfolio Page (Server Component)

import { ProfileHeader } from "@/components/custom/portfolio/profile-header"
import { Overview } from "@/components/custom/portfolio/overview"
import { SocialLinks } from "@/components/custom/portfolio/social-links"
import { GitHubContributions } from "@/components/custom/portfolio/github-contributions"
import { TechStack } from "@/components/custom/portfolio/tech-stack"
import { PageSeparator } from "@/components/custom/portfolio/page-separator"
import { Blog } from "@/components/custom/portfolio/blog"
import { Experiences } from "@/components/custom/portfolio/experiences"
import { Projects } from "@/components/custom/portfolio/projects"
import { Awards } from "@/components/custom/portfolio/awards"
import { Certifications } from "@/components/custom/portfolio/certifications"
import { Sponsors } from "@/components/custom/portfolio/sponsors"
import { Testimonials } from "@/components/custom/portfolio/testimonials"

export default function PortfolioPage() {
  return (
    <div className="py-12">
        <div className="mx-auto md:max-w-3xl border-border/20">
          <ProfileHeader />
          <PageSeparator />

          <Overview />
          <SocialLinks />
          <PageSeparator />

          <GitHubContributions />
          <PageSeparator />

          <Testimonials />
          <PageSeparator />

          <Sponsors />
          <PageSeparator />

          <TechStack />
          <PageSeparator />

          {/* Blog (DocRegistry) */}
          <Blog />
          <PageSeparator />

          <Experiences />
          <PageSeparator />

          <Projects />
          <PageSeparator />

          <Awards />
          <PageSeparator />

          <Certifications />
          <PageSeparator />

          {/* Footer margin */}
          <div className="h-24 select-none pointer-events-none" />
        </div>
    </div>
  )
}
