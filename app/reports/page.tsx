"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/Navigation"

const awards = [
  {
    id: 10,
    title: "DICOMO2026シンポジウム ヤングリサーチャー賞",
    date: "2026年6月",
    issuer: "情報処理学会",
    description: "南房総市丸山公民館の講座予約・抽選業務を対象に、利用者の納得感向上と職員の負担軽減を目指した予約・抽選システム「くじら」を提案。学部1年次からの地域課題解決プロジェクトを学科授業で再整理・発展させ発表につなげた。全291件中の受賞。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 9,
    title: "Lスポーツ Salesforce大会 1位",
    date: "2026年3月",
    issuer: "日本Lスポーツ協会",
    description: "Salesforceを使い制限時間内に課題を解く速さを競う大会。大学の友人3人で参加し予選を通過して1位（全4チーム中）。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 8,
    title: "軽井沢地域活性化プロジェクト2026 アイデアスパーク賞",
    date: "2026年3月",
    issuer: "GifTs",
    description: "事前リサーチと3日間の現地福祉施設等でのヒアリングを通じて軽井沢のヘルスケア課題を定義し、解決するアプリを提案（全9チーム中）。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 7,
    title: "Urban Data Challenge 学生奨励賞",
    date: "2026年2月",
    issuer: "社会基盤情報流通推進協議会",
    description: "災害時にBluetoothで通信するアプリ「ANSHIN JAPAN」を提案・開発。デザイナー／エンジニア／アナリストのチームで、チーム編成を主導しリーダー兼エンジニアとして参加（全169作品中）。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 1,
    title: "ハッカソン部門・習志野市課題解決コース 1位 & スポンサー賞4賞",
    date: "2025年10月",
    issuer: "株式会社オニオン新聞社、千葉銀行、岩渕薬品、協同工芸社、千葉興業銀行",
    description: "チームMIOとして習志野市課題解決コースに参加。2週間という限られた期間の中で、習志野市の課題をオープンデータを活用して分析し、解決策として地域経済の好循環を目指すビジネス支援プラットフォームを企画・開発。1位およびスポンサー賞全7賞中4賞受賞（ちばぎん賞、実現に向けてサポートしま賞、共同工芸社賞、ちば興銀賞）。千葉テレビで取材・放送。全22チーム中の受賞。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 2,
    title: "Mercari BOLD Program for Women: 2025 Global Edition 1st Place",
    date: "2025年9月",
    issuer: "Mercari",
    description: "チーム5として1st Place。toBに特化した新機能とサイトの提案で、エンジニアとしてアプリの構成やAI機能の活用について取り組みました。応募約200名中35名選考通過、全7チーム中の受賞。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 3,
    title: "地域創生・社会課題解決 AI プログラミングコンテスト 名古屋大会 最優秀賞",
    date: "2025年8月",
    issuer: "アマゾン ウェブ サービス ジャパン合同会社",
    description: "「『もしも』のための、『いつも』の贈り物。〜大切な人へ健康を贈る『GIFT』〜」というテーマで、自分の健康を後回しにしがちな大切な人へ、健康について考える「きっかけ」を生み出すサービスを提案。「遠隔地の親子をつなぐことで、地域活性化につながる」点などを評価いただき、最優秀賞を受賞。今後も実証実験など、このサービスを社会に実装させられるように引き続き取り組んでいきます。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 4,
    title: "軽井沢地域活性化プロジェクト 最優秀賞 & オーディエンス賞",
    date: "2025年1月",
    issuer: "GifTs",
    description: "事前リサーチやヒアリングと3日間での現地の福祉施設などでのヒアリングを通じて、軽井沢でのヘルスケア課題を定義し、それを解決するアプリを提案（全8チーム中）。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 5,
    title: "SPAJAM道場 最優秀賞",
    date: "2024年11月",
    issuer: "Mobile Content Forum",
    description: "24時間でアプリを開発する育成型ハッカソンのSPAJAM道場で最優秀賞を受賞。デザイナー4人とエンジニア2人の混合チームで、主にバックエンドエンジニアとして開発に当たりました。ChatGPT APIを用いて、ユーザーの質問に対してわかりやすく簡潔に答えてくれるギャルを作成しました。全5チーム中の受賞。",
    icon: "🏆",
    color: "#FFD700",
  },
  {
    id: 6,
    title: "千葉県オープンデータ コネクテッドアイデアソン 三冠",
    date: "2024年10月",
    issuer: "株式会社千葉銀行、株式会社ジェーエムエーシステムズ、Civic Tech Zen Chiba",
    description: "千葉県内の地域課題を解決するアイデアを、オープンデータやデータ分析を用いて提案する大会。他大学の方とのチームで3つの賞（千葉銀行賞、JMAS賞、シビックテック賞）を受賞。全4チーム中の受賞。",
    icon: "🏆",
    color: "#FFD700",
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Reports</h1>
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

          {/* Overviewへの導線 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/70 mb-4">進行中のプロジェクトや過去の活動の一覧は Overview で確認できます</p>
            <Link
              href="/overview"
              className="inline-block py-3 px-8 bg-white/10 border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Overview を見る →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
