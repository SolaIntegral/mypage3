"use client"

import { motion } from "framer-motion"
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

const currentProjects = [
  {
    id: 3,
    title: "CIT App 開発・運営",
    date: "2025年3月～",
    description: "大学生活をサポートするアプリの開発。ユーザ数3000人。",
    status: "Operating",
  },
  {
    id: 1,
    title: "AR Genie 長期インターン",
    date: "2024年11月～",
    description: "名刺情報からアプローチする相手を自動抽出するAIシステムの開発。ソフトバンクrobotics、Ricohと連携。",
    status: "In Progress",
  },
  {
    id: 2,
    title: "GiFTs デジタル広報",
    date: "2025年7月～",
    description: "GifTsというコミュニティや軽井沢地域課題解決PJの広報。PJ募集HP作成。",
    status: "Active",
  },
  {
    id: 4,
    title: "Y&Y Journey クリエイター",
    date: "2024年7月～",
    description: "BigTechを目指す学生をサポートする団体の運営サポート、クリエイターとしてコンテンツの制作。公式HP、イベントLP作成。",
    status: "Active",
  },
  {
    id: 5,
    title: "Google AI 学生アンバサダー",
    date: "2025年8月～",
    description: "Geminiを学生に広めるための広報活動やイベント運営。12月にイベント実施予定、DevFest出展。",
    status: "Planning",
  },
  {
    id: 6,
    title: "GIFTアプリ開発",
    date: "2024年8月～",
    description: "ギフトを通じて大切な人に健康について考えてもらうサービスの開発。軽井沢プロジェクト最優秀賞・オーディエンス賞、AWS地域創生・社会課題解決AIプログラミングコンテスト名古屋大会最優秀賞。",
    status: "Developing",
  },
]

const pastActivities = [
  {
    id: 26,
    title: "DICOMO2026シンポジウム ヤングリサーチャー賞",
    date: "2026年6月",
    description: "予約・抽選システム「くじら」を提案。学部1年次からの地域課題解決プロジェクトを学科授業で再整理・発展させ発表につなげた（全291件中）。",
  },
  {
    id: 25,
    title: "Lスポーツ Salesforce大会",
    date: "2026年3月",
    description: "Salesforceを使い制限時間内に課題を解く速さを競う大会。大学の友人3人で参加し予選を通過して1位（全4チーム中）。",
  },
  {
    id: 24,
    title: "軽井沢地域活性化プロジェクト2026",
    date: "2026年3月",
    description: "軽井沢のヘルスケア課題を定義し解決するアプリを提案。アイデアスパーク賞受賞（全9チーム中）。",
  },
  {
    id: 23,
    title: "Urban Data Challenge 2025",
    date: "2026年2月",
    description: "災害時通信アプリ「ANSHIN JAPAN」をリーダー兼エンジニアとして開発。学生奨励賞受賞（全169作品中）。",
  },
  {
    id: 1,
    title: "ハッカソン部門・習志野市課題解決コース",
    date: "2025年10月",
    description: "チームMIOとして習志野市課題解決コースに参加。1位およびスポンサー賞全7賞中4賞受賞。千葉テレビで取材・放送。",
  },
  {
    id: 2,
    title: "Mercari BOLD プログラム",
    date: "2025年9月",
    description: "チーム5として最優秀賞を受賞。toBに特化した新機能とサイトの提案で、エンジニアとしてアプリの構成やAI機能の活用について取り組みました。",
  },
  {
    id: 3,
    title: "地域創生・社会課題解決 AI プログラミングコンテスト",
    date: "2025年8月",
    description: "AWS主催。「『もしも』のための、『いつも』の贈り物。〜大切な人へ健康を贈る『GIFT』〜」というテーマで最優秀賞を受賞。",
  },
  {
    id: 4,
    title: "SPAJAM2025 予選",
    date: "2025年10月",
    description: "SPAJAM2025の予選に参加",
  },
  {
    id: 5,
    title: "ちばオープンデータアイデアソン・ハッカソン",
    date: "2025年9月-10月",
    description: "千葉県のオープンデータを活用したアイデアソン・ハッカソンに参加",
  },
  {
    id: 6,
    title: "Google Hardware Hackathon",
    date: "2025年9月",
    description: "Googleのハードウェア技術を活用したハッカソンに参加",
  },
  {
    id: 7,
    title: "Urban Data Challenge",
    date: "2025年9月",
    description: "都市データを活用した課題解決に取り組むチャレンジに参加",
  },
  {
    id: 8,
    title: "Glasses サービス開発",
    date: "2025年10月",
    description: "Glassesプラットフォームのサービス開発に従事",
  },
  {
    id: 9,
    title: "Coreda モバイルアプリ開発",
    date: "2025年6月",
    description: "Coredaプラットフォームのモバイルアプリ開発に従事",
  },
  {
    id: 10,
    title: "軽井沢プログラム",
    date: "2025年2月-4月",
    description: "軽井沢での地方創生プログラムに参加",
  },
  {
    id: 11,
    title: "GoogleCloud×Zennハッカソン",
    date: "2025年2月-3月",
    description: "Google CloudとZennを活用したハッカソンに参加",
  },
  {
    id: 12,
    title: "LinkedIn Student Club 3期性",
    date: "2025年1月-4月",
    description: "学生向けプロフェッショナルネットワーク活動",
  },
  {
    id: 13,
    title: "SPAJAM 2024 予選",
    date: "2024年10月",
    description: "5人チームのチームリーダー兼フルスタックエンジニアとして24時間で「とき」をテーマにした予定可視化・共有アプリ「visuy」の開発に取り組みました。",
  },
  {
    id: 14,
    title: "SPAJAM道場2024",
    date: "2024年11月",
    description: "バックエンドエンジニアとして、24時間で「選挙」というテーマに沿ったアプリ「ギャルリンガル」を開発。最優秀賞を受賞。",
  },
  {
    id: 15,
    title: "Sensing Solution ハッカソン2024",
    date: "2024年11月",
    description: "Spresenseを活用して、コンビニやスーパーマーケットで利用できる自動清算システムの開発に取り組みました。",
  },
  {
    id: 16,
    title: "UDC(アーバンデータチャレンジ)2024",
    date: "2024年11月",
    description: "チームリーダー/フロントエンドエンジニアとして地域活性化と健康のための散歩アプリを開発",
  },
  {
    id: 17,
    title: "船橋市オープンデータアイデアソン",
    date: "2024年12月",
    description: "船橋市のオープンデータを活用したアイデアソンに参加",
  },
  {
    id: 18,
    title: "サイバーエージェントでのインターン",
    date: "2024年9月",
    description: "アプリ開発プロジェクトに従事し、エンジニアリングとプロジェクト管理スキルを向上",
  },
  {
    id: 19,
    title: "公民館講座予約アプリ開発（第二期）",
    date: "2024年9月",
    description: "公民館の予約・抽選システムの継続的な改善と機能拡張",
  },
  {
    id: 20,
    title: "軽井沢地方創生プロジェクト2024",
    date: "2024年8月",
    description: "健康サービスを贈るアプリ「Gifts」を開発し、グランプリ & オーディエンス賞を受賞",
  },
  {
    id: 21,
    title: "千葉オープンデータコネクティッドアイデアソン2024",
    date: "2024年7月",
    description: "QRコードによるオープンデータ収集ソリューションを提案し、三冠を受賞（千葉銀行賞、JMAS賞、Civic Tech賞）",
  },
  {
    id: 22,
    title: "南房総市公民館講座予約システムの開発（第一期）",
    date: "2023年7月-2024年1月",
    description: "千葉工業大学のソーシャルアクティブラーニングの一貫として、千葉県南房総市の公民館のDX化に取り組みました。ノーコードツールGlideを使用し、チームで開発を行いました。",
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

                  <p className="text-white/80">{project.description}</p>
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
