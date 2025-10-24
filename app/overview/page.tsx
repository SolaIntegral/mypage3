"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"

const timelineData = {
  past: [
    // 2023年
    {
      id: "community-app-2023",
      date: "2023/07-2024/01",
      title: "南房総市公民館講座予約システムの開発（第一期）",
      description: "千葉工業大学のソーシャルアクティブラーニングの一貫として、千葉県南房総市の公民館のDX化に取り組みました。ノーコードツールGlideを使用し、チームで開発を行いました。",
      color: "#34D399",
      details: {
        role: "フルスタックエンジニア",
        tech: ["Glide", "Google Sheets", "管理者ダッシュボード", "ユーザーテスト"],
        achievements: ["予約率の向上", "管理者の業務効率化", "地域からの高い評価"],
      },
    },
    // 2024年
    {
      id: "chiba-opendata",
      date: "2024/07",
      title: "千葉オープンデータコネクティッドアイデアソン2024",
      description: "QRコードによるオープンデータ収集ソリューションを提案し、三冠を受賞",
      color: "#F472B6",
      details: {
        role: "アイデア企画・エンジニア",
        tech: ["QRコード技術", "データ可視化", "市民参加型システム"],
        achievements: ["千葉銀行賞", "JMAS賞", "Civic Tech賞"],
      },
    },
    {
      id: "karuizawa",
      date: "2024/08",
      title: "軽井沢地方創生プロジェクト2024",
      description: "健康サービスを贈るアプリ「Gifts」を開発し、グランプリ & オーディエンス賞を受賞",
      color: "#45B7D1",
      details: {
        role: "フルスタックエンジニア",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        achievements: ["グランプリ受賞", "オーディエンス賞受賞", "地域の健康促進への貢献"],
      },
    },
    {
      id: "cyberagent-intern",
      date: "2024/09",
      title: "サイバーエージェントでのインターン",
      description: "アプリ開発プロジェクトに従事し、エンジニアリングとプロジェクト管理スキルを向上",
      color: "#FF4081",
      details: {
        role: "アプリ開発エンジニア",
        tech: ["アプリ開発", "コードレビュー", "プロジェクト管理ツール"],
        achievements: ["実務での開発フロー習得", "プロジェクト管理手法理解", "チーム開発のベストプラクティス"],
      },
    },
    {
      id: "community-app2",
      date: "2024/09",
      title: "公民館講座予約アプリ開発（第二期）",
      description: "公民館の予約・抽選システムの継続的な改善と機能拡張",
      color: "#FB7185",
      details: {
        role: "システム改善エンジニア",
        tech: ["Glide", "機能拡張", "ユーザーフィードバック対応"],
        achievements: ["ユーザー体験の向上", "システムの安定性確保", "地域への貢献の継続"],
      },
    },
    {
      id: "spajam2024",
      date: "2024/10",
      title: "SPAJAM 2024 予選",
      description: "5人チームのチームリーダー兼フルスタックエンジニアとして24時間で「とき」をテーマにした予定可視化・共有アプリ「visuy」の開発に取り組みました。限られた時間での開発でしたが、チームを率いて一つのプロダクトを形にする難しさと、それを乗り越える楽しさを経験しました。現在も「visuy」を完成させリリースすることを目標としており、2025年中の実証実験を目指しています。",
      color: "#FF6B6B",
      details: {
        role: "チームリーダー/フルスタックエンジニア",
        tech: ["React Native", "Firebase", "チーム開発管理ツール"],
        achievements: ["チームマネジメント", "予定可視化機能の実装", "リアルタイム同期機能"],
      },
    },
    {
      id: "spajam-dojo",
      date: "2024/11",
      title: "SPAJAM道場2024",
      description: "バックエンドエンジニアとして、24時間で「選挙」というテーマに沿ったアプリ「ギャルリンガル」を開発しました。若者に選挙に興味を持ってもらうため、ChatGPTのAPIを用いてギャルが公約などを簡単に説明してくれるチャット機能を実装しました。初対面のメンバーにもかかわらず、チームとして最高の成果を出すことができました。この経験を通じて、AIを活用したサービス開発の面白さと、チームで課題解決に取り組む達成感を強く感じました。",
      color: "#4ECDC4",
      details: {
        role: "バックエンドエンジニア",
        tech: ["ChatGPT API", "Node.js", "Express"],
        achievements: ["最優秀賞受賞", "AI技術の実践活用", "若者の政治参加促進"],
      },
    },
    {
      id: "sensing-hackathon",
      date: "2024/11",
      title: "Sensing Solution ハッカソン2024",
      description: "Spresenseを活用して、コンビニやスーパーマーケットで利用できる自動清算システムの開発に取り組みました。惜しくも1次審査通過後、2次審査で脱落してしまいましたが、デザイナーとエンジニアのチームで初めて開発に取り組みました。",
      color: "#A78BFA",
      details: {
        role: "IoTエンジニア",
        tech: ["Spresense", "センシング技術", "ユーザー体験最適化"],
        achievements: ["二次審査の通過", "実用的なソリューションの開発", "技術的な革新性の実証"],
      },
    },
    {
      id: "udc2024",
      date: "2024/11",
      title: "UDC(アーバンデータチャレンジ)2024",
      description: "チームリーダー/フロントエンドエンジニアとして地域活性化と健康のための散歩アプリを開発",
      color: "#60A5FA",
      details: {
        role: "チームリーダー/フロントエンドエンジニア",
        tech: ["React", "地域データ活用", "健康促進アプリ"],
        achievements: ["地域の活性化への貢献", "市民の健康促進", "持続可能なソリューションの提供"],
      },
    },
    {
      id: "event-site",
      date: "2024/12",
      title: "イベントサイト制作",
      description: "地域イベントの情報発信と参加者募集のためのWebサイト開発",
      color: "#96CEB4",
      details: {
        role: "フロントエンドエンジニア",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        achievements: ["レスポンシブデザイン", "SEO最適化", "パフォーマンス向上"],
      },
    },
    {
      id: "funabashi-opendata",
      date: "2024/12",
      title: "船橋市オープンデータアイデアソン",
      description: "船橋市のオープンデータを活用したアイデアソンに参加",
      color: "#8B5CF6",
      details: {
        role: "アイデア企画",
        tech: ["オープンデータ活用", "アイデアソン"],
        achievements: ["地域課題の解決提案", "データ活用スキル向上"],
      },
    },
    // 2025年
    {
      id: "linkedin-club",
      date: "2025/01",
      title: "LinkedIn Student Club 3期性",
      description: "学生向けプロフェッショナルネットワーク活動の開始",
      color: "#FFEEAD",
      details: {
        role: "コミュニティリーダー",
        tech: ["マーケティング", "イベント企画", "ネットワーキング"],
        achievements: ["学生コミュニティ構築", "キャリア支援", "プロフェッショナルスキル向上"],
      },
    },
    {
      id: "karuizawa-program",
      date: "2025/02",
      title: "軽井沢プログラム",
      description: "軽井沢での地方創生プログラムに参加",
      color: "#10B981",
      details: {
        role: "参加者",
        tech: ["地方創生", "プログラム企画"],
        achievements: ["地域理解の深化", "地方創生スキル習得"],
      },
    },
    {
      id: "googlecloud-zenn",
      date: "2025/02",
      title: "GoogleCloud×Zennハッカソン",
      description: "Google CloudとZennを活用したハッカソンに参加",
      color: "#6366F1",
      details: {
        role: "参加者",
        tech: ["Google Cloud", "Zenn", "ハッカソン"],
        achievements: ["クラウド技術習得", "ハッカソン経験"],
      },
    },
    {
      id: "flutter-intern",
      date: "2025/03",
      title: "Flutterアプリ開発インターン",
      description: "モバイルアプリケーション開発の実践的な経験を積む",
      color: "#D4A5A5",
      details: {
        role: "モバイルアプリエンジニア",
        tech: ["Flutter", "Dart", "Firebase"],
        achievements: ["モバイル開発スキル習得", "実務経験", "チーム開発プロセス理解"],
      },
    },
    {
      id: "coreda-app",
      date: "2025/06",
      title: "Coreda モバイルアプリ開発",
      description: "Coredaプラットフォームのモバイルアプリ開発に従事",
      color: "#F59E0B",
      details: {
        role: "モバイルアプリエンジニア",
        tech: ["モバイル開発", "アプリ開発"],
        achievements: ["モバイル開発スキル向上", "実務経験"],
      },
    },
    {
      id: "regional-ai-contest",
      date: "2025/06",
      title: "地域創生・社会課題解決 AI プログラミングコンテスト 2025",
      description: "AI技術を活用した地域創生と社会課題解決のプログラミングコンテストに参加",
      color: "#EF4444",
      details: {
        role: "参加者",
        tech: ["AI", "プログラミング", "社会課題解決"],
        achievements: ["AI技術習得", "社会課題への理解", "プログラミングスキル向上"],
      },
    },
    {
      id: "gifts-digital-pr",
      date: "2025/07",
      title: "GifTsデジタル広報",
      description: "GifTsの活動を多くの人に知ってもらい、必要としている参加者に魅力が伝わるようにする",
      color: "#F59E0B",
      details: {
        role: "デジタル広報担当",
        tech: ["募集ページ作成", "プレスリリース作成", "マーケティング"],
        achievements: ["認知度向上", "参加者増加", "効果的な情報発信"],
      },
    },
    {
      id: "google-ai-ambassador",
      date: "2025/08",
      title: "Google AI 学生アンバサダー",
      description: "Google AI技術の学生アンバサダーとして活動",
      color: "#4285F4",
      details: {
        role: "学生アンバサダー",
        tech: ["AI技術", "コミュニティ活動"],
        achievements: ["AI技術の普及", "コミュニティ構築"],
      },
    },
    {
      id: "mercari-bold",
      date: "2025/08",
      title: "MercariBOLDプログラム",
      description: "これまでにない当たり前となるようなMercariの魅力を表現できるようなサービスを提案する",
      color: "#EF4444",
      details: {
        role: "エンジニア",
        tech: ["サービス企画", "プロダクト開発", "イノベーション"],
        achievements: ["革新的サービス提案", "Mercariの魅力表現", "新たな価値創造"],
      },
    },
    {
      id: "urban-data-challenge",
      date: "2025/09",
      title: "Urban Data Challenge",
      description: "都市データを活用した課題解決に取り組むチャレンジに参加",
      color: "#60A5FA",
      details: {
        role: "参加者",
        tech: ["都市データ", "課題解決"],
        achievements: ["データ活用スキル", "都市課題への理解"],
      },
    },
    {
      id: "google-hardware-hackathon",
      date: "2025/09",
      title: "Google Hardware Hackason",
      description: "Googleのハードウェア技術を活用したハッカソンに参加",
      color: "#34A853",
      details: {
        role: "参加者",
        tech: ["ハードウェア", "ハッカソン"],
        achievements: ["ハードウェア技術習得", "ハッカソン経験"],
      },
    },
    {
      id: "chiba-opendata-2025",
      date: "2025/09",
      title: "ちばオープンデータアイデアソン・ハッカソン",
      description: "千葉県のオープンデータを活用したアイデアソン・ハッカソンに参加",
      color: "#F472B6",
      details: {
        role: "参加者",
        tech: ["オープンデータ", "アイデアソン", "ハッカソン"],
        achievements: ["データ活用スキル", "地域課題への理解"],
      },
    },
    {
      id: "glasses-service",
      date: "2025/10",
      title: "Glasses サービス開発",
      description: "Glassesプラットフォームのサービス開発に従事",
      color: "#8B5CF6",
      details: {
        role: "サービス開発エンジニア",
        tech: ["サービス開発", "プラットフォーム開発"],
        achievements: ["サービス開発スキル", "プラットフォーム理解"],
      },
    },
    {
      id: "spajam2025",
      date: "2025/10",
      title: "SPAJAM2025 予選",
      description: "SPAJAM2025の予選に参加",
      color: "#FF6B6B",
      details: {
        role: "参加者",
        tech: ["ハッカソン", "チーム開発"],
        achievements: ["ハッカソン経験", "チーム開発スキル"],
      },
    },
  ],
  now: [
    {
      id: "aws-contest",
      date: "2024/08",
      title: "AWSプログラミングコンテスト本戦",
      description: "健康をギフトするアプリ「Gift」の提案でAWSプログラミングコンテスト本戦に参加",
      color: "#FF9500",
      details: {
        role: "エンジニア",
        tech: ["AWS", "TypeScript", "クラウドアーキテクチャ"],
        achievements: ["本戦進出", "クラウド技術の実践活用", "健康促進アプリの提案"],
      },
    },
    {
      id: "yy-journey",
      date: "2024/07-",
      title: "Y&Y Journey Webサイト制作",
      description: "学生の未来をサポートするY&Y Journeyの魅力が詰まったサイトの制作",
      color: "#6366F1",
      details: {
        role: "エンジニア兼デザイナー",
        tech: ["WordPress", "Figma", "UI/UXデザイン"],
        achievements: ["学生支援サイト構築", "魅力的なデザイン実装", "ユーザー体験向上"],
      },
    },
    {
      id: "project-any",
      date: "2024/06-08",
      title: "ProjectAnyイベント運営",
      description: "サステナビリティを自分ごととして考えてもらえるようなサイトを作ること",
      color: "#10B981",
      details: {
        role: "営業兼エンジニア",
        tech: ["TypeScript", "イベント運営", "サステナビリティ"],
        achievements: ["サステナビリティ意識向上", "イベント成功", "参加者エンゲージメント向上"],
      },
    },
    {
      id: "gifts-pr",
      date: "2024/07-",
      title: "GiFTsデジタル広報",
      description: "GiFTsの活動を多くの人に知ってもらい、必要としている参加者に魅力が伝わるようにする",
      color: "#F59E0B",
      details: {
        role: "デジタル広報担当",
        tech: ["募集ページ作成", "プレスリリース作成", "マーケティング"],
        achievements: ["認知度向上", "参加者増加", "効果的な情報発信"],
      },
    },
    {
      id: "argenie-intern",
      date: "2024/11-",
      title: "ARGenie長期インターン",
      description: "エンジニアとしてレベルアップするための長期インターンシップ",
      color: "#8B5CF6",
      details: {
        role: "エンジニア",
        tech: ["Python", "RAG", "AI技術"],
        achievements: ["エンジニアスキル向上", "AI技術習得", "実務経験積み重ね"],
      },
    },
    {
      id: "event-app",
      date: "2025/06-",
      title: "100人規模イベントアプリ制作",
      description: "大規模イベントの運営をサポートするアプリケーションの開発",
      color: "#9B59B6",
      details: {
        role: "プロジェクトリーダー",
        tech: ["React Native", "Node.js", "WebSocket"],
        achievements: ["大規模システム設計", "リアルタイム通信", "イベント運営効率化"],
      },
    },
  ],
  future: [
    {
      id: "mercari-bold",
      date: "2025/08",
      title: "MercariBOLDプログラム",
      description: "これまでにない当たり前となるようなMercariの魅力を表現できるようなサービスを提案する",
      color: "#EF4444",
      details: {
        role: "エンジニア",
        tech: ["サービス企画", "プロダクト開発", "イノベーション"],
        achievements: ["革新的サービス提案", "Mercariの魅力表現", "新たな価値創造"],
      },
    },
  ],
}

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState<"past" | "now" | "future">("past")
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.05, opacity: 1 },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      y: -10,
      rotateX: 5,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  }

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Timeline</h1>
          <p className="text-white/80 text-lg">Continuous challenges create who I am</p>
        </motion.div>

        {/* タブナビゲーション */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            {(["past", "now", "future"] as const).map((tab) => (
              <motion.button
                key={tab}
                className={`px-8 py-3 rounded-xl font-semibold transition-colors ${
                  activeTab === tab ? "bg-white text-[#285FF4]" : "text-white hover:bg-white/10"
                }`}
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === "past" ? "Past" : tab === "now" ? "Now" : "Future"}
              </motion.button>
            ))}
          </div>
        </div>

        {/* カードコンテナ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {timelineData[activeTab].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                  onClick={() => setSelectedCard(item.id)}
                  style={{ perspective: 1000 }}
                >
                  {/* 付箋風カード */}
                  <div
                    className="p-4 sm:p-6 rounded-lg shadow-lg min-h-[180px] sm:min-h-[200px] relative overflow-hidden"
                    style={{ backgroundColor: item.color }}
                  >
                    {/* 日付 */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xs sm:text-sm font-semibold text-black/60">{item.date}</div>

                    {/* タイトル */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 pr-12 sm:pr-16 leading-tight">{item.title}</h3>

                    {/* 説明 */}
                    <p className="text-black/80 text-xs sm:text-sm leading-relaxed line-clamp-3">{item.description}</p>

                    {/* ホバー時の詳細表示 */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 p-4 sm:p-6 flex flex-col justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-white font-bold mb-2 text-sm sm:text-base">Details</h4>
                      <p className="text-white/90 text-xs sm:text-sm mb-1 sm:mb-2">
                        <strong>Role:</strong> {item.details.role}
                      </p>
                      <p className="text-white/90 text-xs sm:text-sm mb-1 sm:mb-2">
                        <strong>Tech:</strong> {item.details.tech.join(", ")}
                      </p>
                      <div className="text-white/90 text-xs sm:text-sm">
                        <strong>Achievements:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {item.details.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs sm:text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* 3D効果のための影 */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/20 rounded-lg -z-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
