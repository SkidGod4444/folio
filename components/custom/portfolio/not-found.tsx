import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center bg-background px-4 text-center",
        className
      )}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 select-none font-mono text-[12rem] font-bold leading-none text-muted/10">
          404
        </div>
        
        <h1 className="relative z-10 text-4xl font-semibold tracking-tighter sm:text-6xl">
          Lost in the grid.
        </h1>
        
        <p className="mt-4 max-w-[400px] text-pretty font-mono text-sm text-muted-foreground sm:text-base">
          The page you are looking for has been moved or doesn&apos;t exist. 
          Let&apos;s get you back to safety.
        </p>

        <div className="mt-8 flex gap-4">
          <Button asChild variant="outline" className="h-11 px-8 font-mono">
            <Link href="/">
              Back to Home
              <ArrowRightIcon className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-border to-transparent" />
      </div>
    </div>
  )
}
