import type { Metadata } from "next"

import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/lib/portfolio/data/testimonials"
import { cn } from "@/lib/utils"
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
const description = "The kind words that keep me building."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/word-of-mouth",
  },
}

const TESTIMONIALS = [
  ...TESTIMONIALS_1.slice().sort((a, b) =>
    a.date.localeCompare(b.date, undefined, { numeric: true })
  ),
  ...TESTIMONIALS_2.slice().sort((a, b) =>
    a.date.localeCompare(b.date, undefined, { numeric: true })
  ),
]

export default function WordOfMouthPage() {
  return (
    <div className="container mx-auto max-w-3xl border-x border-line px-0 min-h-svh">
      <div className="screen-line-bottom px-4 pt-8 pb-4">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="screen-line-top relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 relative">
          {TESTIMONIALS.map((item, index) => (
            <a
              key={`${item.url}-${index}`}
              className={cn(
                "block transition-[background-color] ease-out hover:bg-accent-muted/50",
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom",
                "sm:nth-[2n]:screen-line-top sm:nth-[2n]:screen-line-bottom"
              )}
              href={item.url}
              target="_blank"
              rel="noopener"
            >
              <Testimonial>
                <TestimonialQuote className="text-pretty">
                  <p>{item.quote}</p>
                </TestimonialQuote>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImg
                      src={item.authorAvatar}
                      alt={item.authorName}
                    />
                    <TestimonialAvatarRing />
                  </TestimonialAvatar>

                  <TestimonialAuthorName>
                    {item.authorName}
                  </TestimonialAuthorName>
                  <TestimonialAuthorTagline>
                    {item.authorTagline}
                  </TestimonialAuthorTagline>
                </TestimonialAuthor>
              </Testimonial>
            </a>
          ))}
        </div>
      </div>

      <div className="h-24" />
    </div>
  )
}
