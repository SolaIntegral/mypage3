"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

const navItems = [
  { href: "/", label: "nav.home" as const },
  { href: "/about", label: "nav.about" as const },
  { href: "/overview", label: "nav.overview" as const },
  { href: "/reports", label: "nav.reports" as const },
  { href: "/showcase", label: "nav.showcase" as const },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white font-bold text-xl">Sora</div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label === "nav.home" ? t.nav.home :
                 item.label === "nav.about" ? t.nav.about :
                 item.label === "nav.overview" ? t.nav.overview :
                 item.label === "nav.reports" ? t.nav.reports :
                 t.nav.showcase}
              </motion.a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.label === "nav.home" ? t.nav.home :
                   item.label === "nav.about" ? t.nav.about :
                   item.label === "nav.overview" ? t.nav.overview :
                   item.label === "nav.reports" ? t.nav.reports :
                   t.nav.showcase}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
