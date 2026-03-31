import { formatIncompletePhoneNumber } from "./libphonenumber"

export function decodeEmail(email: string) {
  try {
    return atob(email)
  } catch {
    return email
  }
}

export function decodePhoneNumber(phone: string) {
  try {
    return atob(phone)
  } catch {
    return phone
  }
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone)
}
