export const locales = ['ja', 'en'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'ja'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
} 