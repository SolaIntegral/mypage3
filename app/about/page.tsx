"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

const skills = [
  { name: "Flutter / Dart", level: 90, color: "#02569B" },
  { name: "Python (AI, 機械学習)", level: 85, color: "#3776AB" },
  { name: "Firebase / Google Cloud", level: 80, color: "#FFCA28" },
  { name: "Web開発 (HTML, CSS, JS)", level: 75, color: "#F7DF1E" },
  { name: "React / Next.js", level: 70, color: "#61DAFB" },
  { name: "ノーコード開発", level: 95, color: "#FF6B6B" },
]

const achievements = [
  "SPAJAM 2024 予選 - チームリーダー/フルスタックエンジニアとして予定可視化アプリ「visuy」を開発",
  "SPAJAM道場2024 🏆 - バックエンドエンジニアとして若者向け選挙情報アプリ「ギャルリンガル」を開発（最優秀賞受賞）",
  "軽井沢地方創生プロジェクト2024 🏆 - 健康サービスを贈るアプリ「Gifts」を開発（グランプリ & オーディエンス賞受賞）",
  "千葉オープンデータ連携アイデアソン2024 🏆 - QRコードによるオープンデータ収集ソリューションを提案（三冠受賞）",
  "UDC(アーバンデータチャレンジ)2024 - チームリーダー/フロントエンドエンジニアとして地域活性化と健康のための散歩アプリを開発",
  "Sensing Solution ハッカソン2024 - Spresenseを用いたコンビニ自動精算システムの開発",
  "公民館講座予約アプリ開発 - 南房総市の公民館予約・抽選システムのアプリ化（第一期・第二期）",
  "サイバーエージェントでのアプリ開発インターン - アプリ開発プロジェクトに従事",
  "AWSプログラミングコンテスト本戦 - 健康をギフトするアプリ「Gift」の提案で本戦進出",
  "ARGenie長期インターン - エンジニアとしてPython・RAG・AI技術を活用した開発に従事",
  "Y&Y Journey Webサイト制作 - 学生の未来をサポートするサイトの制作",
  "GiFTsデジタル広報 - 活動の認知度向上と効果的な情報発信を担当",
]

const goals = [
  "新しい技術のキャッチアップと実践的な開発スキル向上",
  "製品開発の工程で必要な全体的な知識の習得",
  "チーム開発・プロジェクトマネジメントのスキル向上",
  "Software Engineer → Product Managerへのキャリアパス実現",
  "大学院進学と海外留学による国際的な視野の獲得",
]

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Me</h1>
          <p className="text-white/80 text-lg">Creating new standards through challenges</p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* プロフィール情報 */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-6xl"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 180,
                    transition: { duration: 0.6 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  👨‍💻
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">大浦 空</h2>
                <p className="text-white/80 mb-2">千葉工業大学 学部3年生 | 29卒</p>
                <p className="text-white/70 text-sm">Product Engineer with multifaceted perspectives</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Basic Information</h3>
                  <div className="space-y-2 text-white/80">
                    <p>
                      <strong>Hometown:</strong> 千葉県
                    </p>
                    <p>
                      <strong>Current:</strong> 千葉工業大学先進工学部知能メディア工学科 (2025/04-)
                    </p>
                    <p>
                      <strong>Previous:</strong> 千葉工業大学工学部情報通信システム工学科 (2023/04-2025/03)から転学科
                    </p>
                    <p>
                      <strong>Future Plans:</strong> 大学院進学・海外留学予定
                    </p>
                    <p>
                      <strong>Interests:</strong> アプリ開発、Web開発、プロダクトマネジメント
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">What Inspired Me to Become an Engineer</h3>
                  <p className="text-white/80 leading-relaxed">
                    ガンダムのプラモデルを動かして戦うアニメを見て、その技術を作ってみたいと思ったこと。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Career Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    Software Engineer → Product
                    Managerというキャリアパスを目指し、数年後も使ってよかったと思えるプロダクトを開発できるエンジニア。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Motto</h3>
                  <p className="text-white/80 leading-relaxed italic">
                    "Success isn't about can or can't - it's about will or won't"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* スキル */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Tech Stack</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/80 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 実績 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Development & Activity Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#285FF4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 今後の目標 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Future Challenges & Goals</h3>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">🎯</span>
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">{goal}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ロゴセクション */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <motion.img
                src="logo1.png"
                alt="ロゴ"
                className="w-32 h-32"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.8 },
                }}
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">My Brand</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  ロゴは「成長」と「挑戦」を象徴するデザイン。技術を駆使して新たな価値を生み出し、挑戦の先に新しい当たり前をつくる姿勢を表現しています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
