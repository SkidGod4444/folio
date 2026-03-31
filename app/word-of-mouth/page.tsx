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

const title = "Word of Mouth"
const description = "What people are saying about my work and projects."

export const metadata: Metadata = {
  title,
  description,
}

const ALL_TESTIMONIALS = [...TESTIMONIALS_1, ...TESTIMONIALS_2].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function WordOfMouthPage() {
  return (
    <div className="container mx-auto max-w-3xl border-x border-line px-0">
      <div className="screen-line-bottom px-4 pt-8 pb-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom flex h-4" />

      <div className="screen-line-bottom relative pb-4">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 relative min-h-[500px]">
          {/* Vertical grid lines */}
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-0 max-sm:hidden sm:grid-cols-2 h-full">
            <div className="border-r border-line h-full" />
            <div className="border-l border-line h-full" />
          </div>

          {ALL_TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className={i % 2 === 0 ? "border-b border-line sm:border-r sm:border-line" : "border-b border-line"}
            >
              <a 
                href={t.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full transition-colors hover:bg-accent/50"
              >
                <Testimonial className="p-4 h-full border-none rounded-none shadow-none ring-0">
                  <TestimonialQuote className="text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </TestimonialQuote>
                  <TestimonialAuthor>
                    <TestimonialAvatar className="size-8">
                      <TestimonialAvatarImg src={t.authorAvatar} alt={t.authorName} />
                      <TestimonialAvatarRing />
                    </TestimonialAvatar>
                    <div className="flex flex-col">
                      <TestimonialAuthorName className="text-xs font-semibold">
                        {t.authorName}
                      </TestimonialAuthorName>
                      <TestimonialAuthorTagline className="text-[10px] opacity-60">
                        {t.authorTagline}
                      </TestimonialAuthorTagline>
                    </div>
                  </TestimonialAuthor>
                </Testimonial>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-20" />
    </div>
  )
}
