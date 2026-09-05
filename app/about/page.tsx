"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"

// GitHub Pages用のベースパス
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const skills = [
  { name: "Flutter / Dart", evidence: "CIT App（利用者3000人）を個人開発・運営。GIFT アプリを2年間開発継続" },
  { name: "Firebase / Firestore", evidence: "CIT App・GIFT のバックエンドとして設計・運用" },
  { name: "Gemini API", evidence: "Google AI 学生アンバサダーとして活用・普及活動" },
  { name: "Python", evidence: "AR Genie インターンで RAG を用いた名刺情報抽出システムを開発" },
  { name: "Glide / ノーコード", evidence: "南房総市 公民館予約システムを構築・現場運用" },
]

const achievements = [
  "DICOMO2026シンポジウム ヤングリサーチャー賞 🏆 - 南房総市の公民館予約・抽選システム「くじら」の提案で受賞（全291件中）",
  "Urban Data Challenge 学生奨励賞 🏆 - 災害時通信アプリ「ANSHIN JAPAN」をリーダー兼エンジニアとして開発（全169作品中）",
  "Lスポーツ Salesforce大会 1位 🏆 - 制限時間内の課題解決を競う大会で1位（全4チーム中）",
  "軽井沢地域活性化プロジェクト2026 アイデアスパーク賞 🏆 - 軽井沢のヘルスケア課題を解決するアプリを提案",
  "千葉県オープンデータ ハッカソン 1位 & スポンサー賞4賞 🏆 - 習志野市課題解決コースでビジネス支援プラットフォームを企画・開発",
  "Mercari BOLD Program 1st Place 🏆 - toB向け新機能の提案でアプリ構成・AI機能活用を担当",
  "地域創生・社会課題解決AIプログラミングコンテスト 名古屋大会 🏆 - 健康をギフトするアプリ「GIFT」の提案で最優秀賞",
  "軽井沢地方創生プロジェクト2024 🏆 - 健康サービスを贈るアプリ「Gifts」を開発（グランプリ & オーディエンス賞受賞）",
  "SPAJAM道場2024 🏆 - バックエンドエンジニアとして若者向け選挙情報アプリ「ギャルリンガル」を開発（最優秀賞受賞）",
  "千葉オープンデータ連携アイデアソン2024 🏆 - QRコードによるオープンデータ収集ソリューションを提案（三冠受賞）",
  "SPAJAM 2024 予選 - チームリーダー/フルスタックエンジニアとして予定可視化アプリ「visuy」を開発",
  "UDC(アーバンデータチャレンジ)2024 - チームリーダー/フロントエンドエンジニアとして地域活性化と健康のための散歩アプリを開発",
  "Sensing Solution ハッカソン2024 - Spresenseを用いたコンビニ自動精算システムの開発",
  "公民館講座予約アプリ開発 - 南房総市の公民館予約・抽選システムのアプリ化（第一期・第二期）",
  "サイバーエージェントでのアプリ開発インターン - アプリ開発プロジェクトに従事",
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
          <p className="text-white/80 text-lg">Challenging Product Engineer</p>
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
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 180,
                    transition: { duration: 0.6 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  <motion.img
                    src={`${basePath}/images/content/profile.jpg`}
                    alt="大浦 空"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // フォールバック: 画像が読み込めない場合
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>'
                    }}
                  />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-2">大浦 空</h2>
                <p className="text-white/80 mb-2">千葉工業大学 先進工学部 知能メディア工学科 4年（2027年より大学院進学）</p>
                <p className="text-white/70 text-sm">Challenging Product Engineer</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    頭の中の「理想」を手段を問わず最速で「形」にすることで、期待を超え、感情を動かす「体験」を創ること。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">My Core Values</h3>
                  <p className="text-white/80 leading-relaxed italic mb-3">
                    "Will" over "Can"（できるかではなく、やるか）
                  </p>
                  <p className="text-white/80 leading-relaxed mb-3">
                    技術的な実現可能性だけでなく、人の感情を動かす「体験」の質に徹底的にこだわります。
                  </p>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>
                      <strong className="text-white">• チームの「触媒」になる</strong>
                      <p className="mt-1 leading-relaxed">
                        エンジニアリング×デザイン×ビジネスの多角的な視点を持ち、異なる専門性を持つ仲間を繋ぐ「架け橋」として機能します。一人で黙々と作るよりも、多様な才能を巻き込み、化学反応を起こして「チームで勝つ」瞬間が何より好きです。
                      </p>
                    </div>
                    <div>
                      <strong className="text-white">• 「広さ」から「深さ」への挑戦</strong>
                      <p className="mt-1 leading-relaxed">
                        これまでにハッカソンなどで「速さ」を武器にしてきました。しかし今は、「技術的な深さ」も考慮し、AIを使いこなす「アーキテクト」として勉強中です。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Origin</h3>
                  <p className="text-white/80 leading-relaxed">
                    私の原点は、幼少期に家族のために作った誕生日カードです。家族が喜んでくれた感動と同時に「もっと完璧にできたはずだ」という悔しさを感じました。この「期待を超えたい」という想いが、エンジニアとしての私のエンジンになっています。
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
                    <p className="text-white font-medium mb-1">{skill.name}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{skill.evidence}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Exploration & Expansion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Exploration</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                ただコードを書くだけのエンジニアではありません。エンジニア・デザイナー・ビジネスの視点を統合する「構想力」とチームの熱量を高める「触媒」としての動きで、数々の賞を獲得しました。
              </p>
              <p className="text-white/80 leading-relaxed">
                「アイデアを即座に動くモノに変える」スピードと、チームで勝つ喜びを知った期間です。
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Expansion</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                ハッカソンでの成功体験の一方で、「AIを使って素早く作るだけでは、『社会インフラ』は作れない」という壁に直面しました。
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                私が目指すのは、iPhoneやExcelのような「それなしでは生きられない新しい当たり前（The New Obvious）」を創ること。
              </p>
              <p className="text-white/80 leading-relaxed">
                そのためには現在はシステム設計・アルゴリズムといった「技術的な深さ」に挑戦しています。
              </p>
            </motion.div>
          </div>

          {/* 実績 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <motion.img
                src={`${basePath}/images/logos/logo1.png`}
                alt="ロゴ"
                className="w-32 h-32 object-contain"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.8 },
                }}
                onError={(e) => {
                  console.error("ロゴ画像の読み込みに失敗しました")
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
