import type { Metadata } from "next"
import { NotFound as PageNotFound } from "@/components/custom/portfolio/not-found"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return <PageNotFound className="h-screen" />
}
