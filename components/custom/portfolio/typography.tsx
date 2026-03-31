import { IconLink } from "@tabler/icons-react"
import { Slot } from "@radix-ui/react-slot"
import React from "react"

import { cn } from "@/lib/utils"

function Prose({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="prose"
      className={cn(
        "prose max-w-none prose-zinc dark:prose-invert",
        className
      )}
      {...props}
    />
  )
}

function ProseMono({
  className,
  ...props
}: React.ComponentProps<typeof Prose>) {
  return (
    <Prose
      className={cn("prose-sm font-mono text-foreground", className)}
      {...props}
    />
  )
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
  const isCodeBlock = "data-language" in props

  return (
    <code
      data-slot={isCodeBlock ? "code-block" : "code-inline"}
      className={cn(
        !isCodeBlock && "px-1.5 py-0.5 rounded-md border bg-muted font-mono text-sm",
        className
      )}
      {...props}
    />
  )
}

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingProps<T extends HeadingTypes> = React.ComponentProps<T> & {
  as?: T
}

function Heading<T extends HeadingTypes = "h1">({
  as: Component = ("h1" as unknown as T),
  className,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const Comp = Component as React.ElementType

  if (!props.id) {
    return <Comp className={className} {...props} />
  }

  return (
    <Comp
      className={cn("flex flex-row items-center gap-2 group", className)}
      {...props}
    >
      <a href={`#${props.id}`} className="not-prose">
        {props.children}
      </a>

      <IconLink
        className="size-4 shrink-0 translate-y-px text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Link to section"
      />
    </Comp>
  )
}

export { Code, Heading, Prose, ProseMono }
