"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation"
import { locales, type Locale, defaultLocale, isValidLocale } from "@/lib/i18n"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // URLから言語を検出
    const pathSegments = pathname.split('/')
    const pathLocale = pathSegments[1]
    
    if (isValidLocale(pathLocale)) {
      setLocale(pathLocale)
    } else {
      setLocale(defaultLocale)
    }
  }, [pathname])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 