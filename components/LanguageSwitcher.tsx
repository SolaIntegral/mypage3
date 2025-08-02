"use client"

import { motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { locales, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: Locale) => {
    // 現在のパスから言語プレフィックスを除去
    const pathWithoutLocale = pathname.replace(/^\/(ja|en)/, '') || '/'
    
    // 新しい言語のパスを構築
    const newPath = newLocale === 'ja' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`
    
    router.push(newPath)
  }

  return (
    <motion.div
      className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 border border-white/20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {locales.map((locale) => (
        <motion.button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === locale
              ? 'bg-white text-[#285FF4] shadow-lg'
              : 'text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {locale === 'ja' ? '🇯🇵 日本語' : '🇺🇸 English'}
        </motion.button>
      ))}
    </motion.div>
  )
} 