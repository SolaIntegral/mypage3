"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Smartphone, Rocket, Trophy, User } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/showcase", label: "SHOWCASE", icon: Smartphone },
  { href: "/overview", label: "OVERVIEW", icon: Rocket },
  { href: "/reports", label: "REPORTS", icon: Trophy },
  { href: "/about", label: "ABOUT", icon: User },
]

// GitHub Pages用のベースパス
const basePath = process.env.NODE_ENV === "production" ? "/mypage2githubio" : ""

export default function Navigation() {
  const pathname = usePathname()
  const [logoError, setLogoError] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ - ホームボタン */}
        <Link href="/">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            {!logoError ? (
              <motion.img
                src={`${basePath}/logo-w.png`}
                alt="Home"
                className="h-8 md:h-10 w-auto"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
                onError={() => {
                  console.log("Navigation logo not found, using fallback")
                  setLogoError(true)
                }}
              />
            ) : (
              // フォールバック: ロゴが読み込めない場合
              <motion.div
                className="h-8 md:h-10 w-8 md:w-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                S
              </motion.div>
            )}
            <span className="text-white/80 text-xs md:text-sm font-medium hidden sm:block">Home</span>
          </motion.div>
        </Link>

        {/* ナビゲーション */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative flex flex-col items-center p-2 rounded-xl transition-colors ${
                    pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <motion.div
                    className="mb-1"
                    animate={
                      pathname === item.href
                        ? {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: pathname === item.href ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 1,
                    }}
                  >
                    <IconComponent size={20} />
                  </motion.div>
                  <span className="text-xs font-semibold hidden md:block">{item.label}</span>

                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      layoutId="activeTab"
                      initial={false}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
