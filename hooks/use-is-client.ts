"use client"

import { useEffect, useState } from "react"

/**
 * Custom hook to detect if the component has mounted on the client-side.
 * Used to avoid hydration mismatch errors with dynamic data like local time.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true)
  }, [])

  return isClient
}
