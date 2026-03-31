/**
 * Portfolio utility functions for data handling and formatting.
 */

/**
 * Removes the protocol (http/https) from a URL for cleaner display.
 */
export function urlToName(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "")
}

/**
 * Appends query parameters to a URL string.
 */
export function addQueryParams(
  urlString: string,
  query: Record<string, string>
): string {
  try {
    const url = new URL(urlString)
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value)
    }
    return url.toString()
  } catch {
    return urlString
  }
}

/**
 * Decodes a base64 encoded email address.
 */
export function decodeEmail(email: string) {
  if (typeof window === "undefined") return email
  return atob(email)
}

/**
 * Decodes a base64 encoded phone number.
 */
export function decodePhoneNumber(phone: string) {
  if (typeof window === "undefined") return phone
  return atob(phone)
}

/**
 * A basic phone number formatter that mimics 'libphonenumber-js' for display purposes.
 */
export function formatPhoneNumber(phone: string) {
  // Basic formatting for common patterns (e.g., +84 123 456 789)
  // This is a simplified version of the original's logic to reduce dependencies.
  return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{3,})/, "+$1 $2 $3 $4")
}

/**
 * Tracking parameters for external links.
 */
export const UTM_PARAMS = {
  utm_source: "folio-portfolio",
}
