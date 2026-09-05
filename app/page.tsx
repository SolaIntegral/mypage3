"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ParticleBackground from "@/components/ParticleBackground"
import Navigation from "@/components/Navigation"
import { Smartphone, Rocket, Trophy, User, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

interface Description {
  title: string
  text: string
  link: string
  image: string
  icon: any
  color: string
  suffix: string
}

// GitHub Pages用のベースパス
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const descriptions: Record<string, Description> = {
  S: {
    title: "Showcase",
    text: "Turn ideas into reality.\nProducts I've created so far.",
    link: "/showcase",
    image: `${basePath}/images/content/pcwork.jpg`,
    icon: Smartphone,
    color: "#FF6B6B",
    suffix: "howcase",
  },
  O: {
    title: "Overview",
    text: "Continuous challenges create who I am.\nTrajectory of past, present, and future challenges.",
    link: "/overview",
    image: `${basePath}/images/content/prise.jpg`,
    icon: Rocket,
    color: "#4ECDC4",
    suffix: "verview",
  },
  R: {
    title: "Reports",
    text: "From challenges to achievements.\nShining results with trophies and upcoming challenges.",
    link: "/reports",
    image: `${basePath}/images/content/facilitation.jpg`,
    icon: Trophy,
    color: "#FFD93D",
    suffix: "eports",
  },
  A: {
    title: "About",
    text: "My journey and passion as an engineer.\nSkill sets and career aspirations.",
    link: "/about",
    image: `${basePath}/images/content/mc.jpg`,
    icon: User,
    color: "#6BCF7F",
    suffix: "bout",
  },
}

export default function HomePage() {
  const router = useRouter()
  const [showLogo, setShowLogo] = useState(true)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter)
  }

  if (showLogo) {
    return (
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-[#285FF4] to-[#6BB6FF] flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="text-center">
          {!logoError ? (
            <motion.img
              src={`${basePath}/images/logos/logo-w.png`}
              alt="Logo"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4"
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
              onError={() => {
                console.log("Logo image not found, using fallback")
                setLogoError(true)
              }}
            />
          ) : (
            // フォールバック: ロゴが読み込めない場合
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-4xl md:text-6xl"
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            >
              ✨
            </motion.div>
          )}
          <motion.div
            className="text-white text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Welcome to Sora's Portfolio ✨
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#285FF4] via-[#4A90E2] to-[#6BB6FF] relative">
      <ParticleBackground />
      <Navigation />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center w-full max-w-6xl">
          {/* メイン表示エリア */}
          <div className="flex items-center justify-center mb-8 min-h-[200px]">
            <AnimatePresence mode="wait">
              {selectedLetter ? (
                // 選択された文字の詳細表示
                <motion.div
                  key={selectedLetter}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                >
                  {/* 大きな文字 - ぼかしなしではっきり表示 */}
                  <motion.div
                    className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold text-white select-none"
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      textShadow: "0 0 20px rgba(255,255,255,0.8)",
                    }}
                  >
                    {selectedLetter}
                  </motion.div>

                  {/* サフィックス */}
                  <motion.div
                    className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold text-white/80 select-none ml-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  >
                    {descriptions[selectedLetter].suffix}
                  </motion.div>

                  {/* アイコン */}
                  <motion.div
                    className="ml-8 text-white"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                  >
                    {React.createElement(descriptions[selectedLetter].icon, {
                      size: 80,
                      className: "md:w-24 md:h-24",
                    })}
                  </motion.div>
                </motion.div>
              ) : (
                // 初期状態：すべての文字を表示
                <motion.div
                  className="flex items-center justify-center gap-2 md:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {["S", "O", "R", "A"].map((letter, index) => (
                    <motion.div
                      key={letter}
                      className="relative cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLetterClick(letter)}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 150,
                      }}
                    >
                      <motion.div
                        className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white select-none"
                        style={{
                          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                        }}
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(255,255,255,0.5)",
                            "0 0 20px rgba(255,255,255,0.8)",
                            "0 0 10px rgba(255,255,255,0.5)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      >
                        {letter}
                      </motion.div>

                      {/* ホバー時のアイコン表示 */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center text-white"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 0.8, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {React.createElement(descriptions[letter].icon, {
                          size: 60,
                          className: "md:w-20 md:h-20",
                        })}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 選択された文字の説明 */}
          <AnimatePresence>
            {selectedLetter && (
              <motion.div
                className="max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${descriptions[selectedLetter].color}20, rgba(255,255,255,0.1))`,
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {descriptions[selectedLetter].title}
                  </h3>

                  <p className="text-white/90 whitespace-pre-line text-base md:text-lg leading-relaxed mb-6">
                    {descriptions[selectedLetter].text}
                  </p>

                  <motion.button
                    className="w-full py-4 px-8 bg-white text-[#285FF4] rounded-full font-bold text-base md:text-lg shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, white, ${descriptions[selectedLetter].color}30)`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{
                      scale: 0.95,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                    onClick={() => router.push(descriptions[selectedLetter].link)}
                  >
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.5,
                      }}
                    >
                      View {descriptions[selectedLetter].title} →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 下部の小さな文字（選択時） */}
          <AnimatePresence>
            {selectedLetter && (
              <motion.div
                className="flex justify-center space-x-4 md:space-x-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {["S", "O", "R", "A"]
                  .filter((letter) => letter !== selectedLetter)
                  .map((letter, index) => (
                    <motion.div
                      key={letter}
                      className="relative cursor-pointer"
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLetterClick(letter)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 0.7, scale: 1 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.4,
                        type: "spring",
                      }}
                    >
                      <motion.div
                        className="text-4xl md:text-6xl font-bold text-white/60 select-none hover:text-white transition-colors"
                        style={{
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                        }}
                      >
                        {letter}
                      </motion.div>

                      {/* 小さなアイコン */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-white/60"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {React.createElement(descriptions[letter].icon, {
                          size: 16,
                        })}
                      </motion.div>
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* タップヒント */}
          {!selectedLetter && (
            <motion.div
              className="mt-8 flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.p
                className="text-white/70 text-sm md:text-base"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                Tap letters to see details ✨
              </motion.p>

              {/* プロフィールミニ行 */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={`${basePath}/images/content/profile.jpg`}
                  alt="大浦 空"
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/40"
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm md:text-base">大浦 空 / Sora Oura</p>
                  <p className="text-white/70 text-xs md:text-sm">
                    千葉工業大学 先進工学部 知能メディア工学科 4年（2027年より大学院進学）
                  </p>
                </div>
              </div>

              {/* タグライン */}
              <p className="text-white/80 text-sm md:text-base text-center leading-relaxed max-w-md">
                課題を捉えるデザインと、形にするエンジニアリング。
                <br />
                医療・ヘルスケア領域で社会実装を目指す。
              </p>
            </motion.div>
          )}
        </div>

        {/* スクロール誘導 */}
        {!selectedLetter && (
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown size={28} />
          </motion.div>
        )}
      </section>

      {/* 第2セクション */}
      <section className="relative z-10 flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-5 md:p-8">
          {/* 数字3つ */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center mb-8">
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">32</p>
              <p className="text-[10px] md:text-sm text-white/70">参加プロジェクト・大会</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">17</p>
              <p className="text-[10px] md:text-sm text-white/70">受賞</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">6</p>
              <p className="text-[10px] md:text-sm text-white/70">最優秀賞・1位</p>
            </div>
          </div>

          {/* 継続して取り組んでいること */}
          <h3 className="text-white font-semibold text-base md:text-lg mb-4">継続して取り組んでいること</h3>
          <div className="flex flex-col gap-4 mb-2">
            <div className="border-l-2 border-white/30 pl-4">
              <p className="text-white text-sm md:text-base font-medium">南房総市 公民館DX（2023〜）</p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                予約・抽選システム「くじら」を設計。DICOMO2026 ヤングリサーチャー賞
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-4">
              <p className="text-white text-sm md:text-base font-medium">CIT App（2025〜）</p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                大学生活支援アプリを個人開発・運営中、利用者3000人
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-4">
              <p className="text-white text-sm md:text-base font-medium">GIFT / ヘルスケア（2024〜）</p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                健康を贈るサービスを2年間開発継続。AWS名古屋大会 最優秀賞
              </p>
            </div>
          </div>

          <p className="text-white/60 text-xs md:text-sm mb-8">
            他、地域課題・ヘルスケア領域を中心に17の賞（うち最優秀賞・1位6）
          </p>

          {/* 技術タグ */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Flutter / Dart", "Firebase", "Gemini API", "Python", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/15 border border-white/20 rounded-full text-white/90 text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-3">
            <motion.button
              className="flex-1 py-3 px-6 bg-white text-[#285FF4] rounded-full font-bold text-sm md:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/about")}
            >
              More about me →
            </motion.button>
            <motion.a
              href="https://github.com/SolaIntegral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 bg-white/10 border border-white/30 text-white rounded-full font-bold text-sm md:text-base text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
