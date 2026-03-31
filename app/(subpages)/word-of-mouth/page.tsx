import type { Metadata } from "next"
import { TESTIMONIALS_1, TESTIMONIALS_2 } from "@/lib/portfolio/data/testimonials"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/custom/portfolio/testimonial"
import { Panel } from "@/components/custom/portfolio/panel"

export const metadata: Metadata = {
  title: "Word of Mouth",
  description: "What people are saying about my work.",
}

const ALL_TESTIMONIALS = [...TESTIMONIALS_1, ...TESTIMONIALS_2].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function WordOfMouthPage() {
  return (
    <div className="mx-auto max-w-5xl py-12 px-4">
      <div className="mb-12 space-y-2 border-b border-line pb-8">
        <h1 className="text-4xl font-semibold tracking-tighter">
          Word of Mouth
        </h1>
        <p className="font-mono text-muted-foreground">
          What people are saying about my work and projects.
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4">
        {ALL_TESTIMONIALS.map((t, i) => (
          <div key={i} className="break-inside-avoid">
            <a 
              href={t.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-xl ring-1 ring-border transition-colors hover:bg-accent/50"
            >
              <Testimonial className="p-2">
                <TestimonialQuote className="text-sm leading-relaxed px-2 py-3">
                  {t.quote}
                </TestimonialQuote>
                <TestimonialAuthor className="px-2 pb-3">
                  <TestimonialAvatar className="size-10">
                    <TestimonialAvatarImg src={t.authorAvatar} alt={t.authorName} />
                    <TestimonialAvatarRing />
                  </TestimonialAvatar>
                  <div className="flex flex-col">
                    <TestimonialAuthorName className="text-sm">
                      {t.authorName}
                    </TestimonialAuthorName>
                    <TestimonialAuthorTagline className="text-xs opacity-60">
                      {t.authorTagline}
                    </TestimonialAuthorTagline>
                  </div>
                </TestimonialAuthor>
              </Testimonial>
            </a>
          </div>
        ))}
      </div>
      
      <div className="h-20" />
    </div>
  )
}
