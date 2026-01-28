"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

const awards = [
  {
    id: 1,
    title: "ハッカソン部門・習志野市課題解決コース 1位 & スポンサー賞4賞",
    date: "2025年10月",
    issuer: "株式会社オニオン新聞社、千葉銀行、岩渕薬品、協同工芸社、千葉興業銀行",
    description: "チームMIOとして習志野市課題解決コースに参加。2週間という限られた期間の中で、習志野市の課題をオープンデータを活用して分析し、解決策として地域経済の好循環を目指すビジネス支援プラットフォームを企画・開発。1位およびスポンサー賞全7賞中4賞受賞（ちばぎん賞、実現に向けてサポートしま賞、共同工芸社賞、ちば興銀賞）。千葉テレビで取材・放送。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 2,
    title: "Mercari BOLD プログラム 1位",
    date: "2025年9月",
    issuer: "Mercari",
    description: "チーム5として最優秀賞を受賞。toBに特化した新機能とサイトの提案で、エンジニアとしてアプリの構成やAI機能の活用について取り組みました。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 3,
    title: "地域創生・社会課題解決 AI プログラミングコンテスト 最優秀賞",
    date: "2025年8月",
    issuer: "アマゾン ウェブ サービス ジャパン合同会社",
    description: "「"もしも"のための、"いつも"の贈り物。〜大切な人へ健康を贈る『GIFT』〜」というテーマで、自分の健康を後回しにしがちな大切な人へ、健康について考える「きっかけ」を生み出すサービスを提案。「遠隔地の親子をつなぐことで、地域活性化につながる」点などを評価いただき、最優秀賞を受賞。今後も実証実験など、このサービスを社会に実装させられるように引き続き取り組んでいきます。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 4,
    title: "軽井沢地域活性化プロジェクト 最優秀賞 & オーディエンス賞",
    date: "2025年1月",
    issuer: "GifTs",
    description: "事前リサーチやヒアリングと3日間での現地の福祉施設などでのヒアリングを通じて、軽井沢でのヘルスケア課題を定義し、それを解決するアプリを提案。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 5,
    title: "SPAJAM道場 最優秀賞",
    date: "2024年11月",
    issuer: "Mobile Content Forum",
    description: "24時間でアプリを開発する育成型ハッカソンのSPAJAM道場で最優秀賞を受賞。デザイナー4人とエンジニア2人の混合チームで、主にバックエンドエンジニアとして開発に当たりました。ChatGPT APIを用いて、ユーザーの質問に対してわかりやすく簡潔に答えてくれるギャルを作成しました。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 6,
    title: "千葉県オープンデータ コネクテッドアイデアソン 三冠",
    date: "2024年10月",
    issuer: "株式会社千葉銀行、株式会社ジェーエムエーシステムズ、Civic Tech Zen Chiba",
    description: "千葉県内の地域課題を解決するアイデアを、オープンデータやデータ分析を用いて提案する大会。他大学の方とのチームで3つの賞（千葉銀行賞、JMAS賞、シビックテック賞）を受賞。",
    icon: "🏆",
    color: "#FFD700",
  },
]

const currentProjects = [
  {
    id: 1,
    title: "Sensing Solution ハッカソン2024",
    date: "2024年11月7日～",
    description: "Spresenseを用いたコンビニ自動精算システムの開発（二次審査結果待ち）",
    progress: 75,
    status: "In Progress",
  },
  {
    id: 2,
    title: "UDC(アーバンデータチャレンジ)2024",
    date: "2024年11月7日～",
    description: "地域活性化と健康のための散歩アプリ開発（チームリーダー/フロントエンドエンジニア）",
    progress: 60,
    status: "Developing",
  },
  {
    id: 3,
    title: "公民館講座予約アプリ開発",
    date: "2024年9月～",
    description: "公民館の予約・抽選システムのアプリ化（継続開発中）",
    progress: 90,
    status: "Operating",
  },
]

const pastActivities = [
  {
    id: 1,
    title: "SPAJAM 2024 予選",
    date: "2024年10月19日-20日",
    description: "予定可視化・共有アプリ「visuy」の開発（チームリーダー/フルスタックエンジニア）",
  },
  {
    id: 2,
    title: "SPAJAM道場2024",
    date: "2024年11月2日-3日",
    description: "若者向け選挙情報アプリ「ギャルリンガル」の開発（バックエンドエンジニア）",
  },
  {
    id: 3,
    title: "主要IT企業インターンシップ",
    date: "2024年",
    description: "アプリ開発プロジェクトに従事し、エンジニアリングとプロジェクト管理スキルを向上",
  },
]

export default function ReportsPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Activity Records</h1>
          <p className="text-white/80 text-lg">
            From challenges to achievements - Shining results and upcoming challenges
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* 受賞歴セクション */}
          <section>
            <motion.h2
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🏆 Awards
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 min-h-[200px] flex flex-col"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-4xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      {award.icon}
                    </motion.div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{award.title}</h3>
                      <p className="text-white/60 text-sm mb-1">{award.date}</p>
                      {award.issuer && (
                        <p className="text-white/50 text-xs mb-2">発行元: {award.issuer}</p>
                      )}
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed flex-1">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 進行中のプロジェクト */}
          <section>
            <motion.h2
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              🚀 Ongoing Projects
            </motion.h2>

            <div className="space-y-6">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/60 text-sm">{project.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4">{project.description}</p>

                  {/* プログレスバー */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                    />
                  </div>
                  <p className="text-white/60 text-sm text-right">Progress: {project.progress}%</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 過去の活動 */}
          <section>
            <motion.h2
              className="text-3xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              📚 Past Activities
            </motion.h2>

            <div className="space-y-4">
              {pastActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
                        <span className="text-white/60 text-sm">{activity.date}</span>
                      </div>
                      <p className="text-white/80 text-sm mt-1">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
