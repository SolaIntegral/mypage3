"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import { Calendar, Megaphone, Building, MapPin, Leaf } from "lucide-react"

const appData = {
  app1: {
    title: "Visuy",
    category: "予定管理",
    description:
      "予定を可視化して共有するアプリ。SPAJAM2024予選で開発。チームメンバーと予定を共有し、効率的なスケジュール管理を実現します。",
    icon: Calendar,
    features: ["カレンダー連携", "チーム共有機能", "リマインダー設定", "統計データ表示"],
    color: "#FF6B6B",
  },
  app2: {
    title: "ギャルリンガル",
    category: "教育・政治",
    description:
      "ギャルが選挙公約を分かりやすく解説。SPAJAM道場2024最優秀賞。難しい政治の話を若者にもわかりやすく伝えます。",
    icon: Megaphone,
    features: ["公約の簡単解説", "音声読み上げ機能", "キーワード検索", "お気に入り登録"],
    color: "#4ECDC4",
  },
  app3: {
    title: "公民館予約",
    category: "公共サービス",
    description: "南房総市の公民館の予約・抽選管理アプリ。地域の公共施設を簡単に予約できます。",
    icon: Building,
    features: ["施設検索", "オンライン予約", "抽選機能", "予約履歴管理"],
    color: "#45B7D1",
  },
  app4: {
    title: "UDC散歩",
    category: "健康・地域活性化",
    description: "地域活性化を目的とした健康促進アプリ。散歩しながら地域の魅力を発見できます。",
    icon: MapPin,
    features: ["散歩ルート提案", "地域スポット発見", "健康データ記録", "地域イベント情報"],
    color: "#96CEB4",
  },
  app5: {
    title: "サステナブルプラットフォーム",
    category: "Webサイト・サステナビリティ",
    description: "学生と社会人のサステナビリティに関する意見交換の場やイベントの事前交流の場。",
    icon: Leaf,
    features: ["サステナビリティ診断", "本音ボックス", "身近なサステナビリティ共有", "イベント交流機能"],
    color: "#22C55E",
  },
}

// Vercelデプロイ用のベースパス
const basePath = ""

export default function ShowcasePage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [isBooting, setIsBooting] = useState(true)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false)
    }, 2500)
    return () => clearTimeout(bootTimer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#285FF4] via-[#4A90E2] to-[#6BB6FF]">
      <Navigation />

      <div className="pt-20 pb-10 px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3"
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
            }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Calendar size={40} />
            </motion.div>
            Portfolio
          </motion.h1>
          <p className="text-white/80 text-sm md:text-lg">Applications I've developed so far</p>
        </motion.div>

        <div className="flex justify-center items-center min-h-[500px] md:min-h-[600px]">
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* スマートフォンフレーム */}
            <motion.div
              className="relative w-72 h-[500px] md:w-80 md:h-[600px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl"
              whileHover={{
                rotateY: 5,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              style={{ perspective: 1000 }}
            >
              {/* 画面 */}
              <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {isBooting ? (
                    // 起動画面
                    <motion.div
                      key="boot"
                      className="flex flex-col items-center justify-center h-full bg-black text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="mb-6"
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      >
                        {!logoError ? (
                          <img
                            src={`${basePath}/logo-w.png`}
                            alt="Logo"
                            className="w-16 h-16 md:w-20 md:h-20"
                            onError={() => {
                              console.log("Showcase boot logo not found, using fallback")
                              setLogoError(true)
                            }}
                          />
                        ) : (
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl md:text-3xl">
                            ✨
                          </div>
                        )}
                      </motion.div>

                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                      >
                        <h2 className="text-lg md:text-xl font-bold mb-3">Sora's Apps ✨</h2>
                        <div className="flex justify-center space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-white rounded-full"
                              animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : !selectedApp ? (
                    // ホーム画面
                    <motion.div
                      key="home"
                      className="h-full flex flex-col"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* ステータスバー */}
                      <div className="flex justify-between items-center px-4 md:px-6 py-2 md:py-3 bg-white/50 backdrop-blur-sm">
                        <span className="text-xs md:text-sm font-semibold">14:30</span>
                        <div className="flex space-x-1">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            📶
                          </motion.span>
                          <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          >
                            🔋
                          </motion.span>
                        </div>
                      </div>

                      {/* アプリグリッド */}
                      <div className="flex-1 p-4 md:p-6">
                        <motion.div
                          className="grid grid-cols-4 gap-2 md:gap-3 h-full content-start"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          {Object.entries(appData).map(([key, app], index) => {
                            const IconComponent = app.icon
                            return (
                              <motion.div
                                key={key}
                                className="flex flex-col items-center cursor-pointer"
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  delay: 0.4 + index * 0.1,
                                  duration: 0.4,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -5,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{
                                  scale: 0.9,
                                  rotate: 5,
                                }}
                                onClick={() => setSelectedApp(key)}
                              >
                                <motion.div
                                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg flex items-center justify-center mb-1 relative overflow-hidden"
                                  style={{ backgroundColor: app.color }}
                                  animate={{
                                    boxShadow: [
                                      `0 4px 8px ${app.color}40`,
                                      `0 8px 16px ${app.color}60`,
                                      `0 4px 8px ${app.color}40`,
                                    ],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.5,
                                  }}
                                >
                                  <IconComponent size={24} className="text-white" />
                                </motion.div>

                                <span className="text-[10px] md:text-xs text-gray-700 text-center font-medium">
                                  {app.title}
                                </span>
                              </motion.div>
                            )
                          })}
                        </motion.div>
                      </div>

                      {/* ドック */}
                      <motion.div
                        className="flex justify-center pb-3 md:pb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <div className="bg-white/20 backdrop-blur-md rounded-2xl px-3 py-2 md:px-4 md:py-2 flex space-x-3 md:space-x-4">
                          {[Calendar, Megaphone, Building, Leaf].map((Icon, index) => (
                            <motion.div
                              key={index}
                              className="w-8 h-8 md:w-10 md:h-10 bg-white/30 rounded-xl flex items-center justify-center"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                              animate={{
                                y: [0, -2, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.3,
                              }}
                            >
                              <Icon size={16} className="text-white" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // アプリ詳細画面
                    <motion.div
                      key="detail"
                      className="p-4 md:p-6 h-full overflow-y-auto bg-white"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* 戻るボタン */}
                      <motion.button
                        className="mb-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9, rotate: 5 }}
                        onClick={() => setSelectedApp(null)}
                      >
                        ← Back
                      </motion.button>

                      {selectedApp && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                        >
                          {/* アプリヘッダー */}
                          <div className="flex items-center mb-6">
                            <motion.div
                              className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg flex items-center justify-center mr-3 md:mr-4 relative"
                              style={{ backgroundColor: appData[selectedApp as keyof typeof appData].color }}
                              animate={{
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            >
                              {React.createElement(appData[selectedApp as keyof typeof appData].icon, {
                                size: 32,
                                className: "text-white",
                              })}
                            </motion.div>

                            <div>
                              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                                {appData[selectedApp as keyof typeof appData].title}
                              </h2>
                              <p className="text-xs md:text-sm text-gray-600">
                                {appData[selectedApp as keyof typeof appData].category}
                              </p>
                            </div>
                          </div>

                          {/* 説明 */}
                          <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                            {appData[selectedApp as keyof typeof appData].description}
                          </p>

                          {/* 機能一覧 */}
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-3 text-sm md:text-base">Main Features</h3>
                            <div className="space-y-2">
                              {appData[selectedApp as keyof typeof appData].features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-center p-2 md:p-3 bg-gray-50 rounded-lg"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                                  whileHover={{
                                    scale: 1.02,
                                    backgroundColor: appData[selectedApp as keyof typeof appData].color + "20",
                                  }}
                                >
                                  <motion.div
                                    className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#285FF4] flex items-center justify-center mr-2 md:mr-3"
                                    animate={{
                                      rotate: [0, 360],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      delay: index * 0.2,
                                    }}
                                  >
                                    <span className="text-white text-xs">✓</span>
                                  </motion.div>
                                  <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* タップヒント（モバイル用） */}
        <motion.div
          className="text-center mt-6 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.p
            className="text-white/70 text-sm flex items-center justify-center gap-2"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Calendar size={16} />
            Tap app icons! ✨
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
