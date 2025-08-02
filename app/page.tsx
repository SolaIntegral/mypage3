"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#285FF4] via-[#4A90E2] to-[#6BB6FF]">
      <Navigation />

      <div className="pt-20 pb-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t.home.title}
          </h1>
          <p className="text-white/80 text-lg mb-6">{t.home.subtitle}</p>
          <p className="text-white/60 text-base">{t.home.description}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => window.location.href = '/about'}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.nav.about}</h3>
                <p className="text-white/70 text-sm">Learn more about me</p>
              </div>
            </motion.div>

            {/* Overview Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => window.location.href = '/overview'}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  📊
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.nav.overview}</h3>
                <p className="text-white/70 text-sm">My journey timeline</p>
              </div>
            </motion.div>

            {/* Reports Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => window.location.href = '/reports'}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.nav.reports}</h3>
                <p className="text-white/70 text-sm">Awards and activities</p>
              </div>
            </motion.div>

            {/* Showcase Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => window.location.href = '/showcase'}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  📱
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.nav.showcase}</h3>
                <p className="text-white/70 text-sm">My applications</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
