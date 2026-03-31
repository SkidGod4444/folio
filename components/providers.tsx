"use client"

import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"
import { NuqsAdapter } from "nuqs/adapters/next"
import { TooltipProvider } from "@/components/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <NuqsAdapter>
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          enableColorScheme
          storageKey="theme"
          defaultTheme="light"
          attribute="class"
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </JotaiProvider>
  )
}
