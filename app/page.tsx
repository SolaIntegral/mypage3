import type { Metadata } from "next"

import SoraHome from "@/components/SoraHome"
import "./sora-home.css"

export const metadata: Metadata = {
  title: "SORA. — Creative Portfolio",
  description:
    "エンジニアリング、デザイン、企画、リサーチを横断するSORAのクリエイティブポートフォリオ。",
}

export default function HomePage() {
  return <SoraHome />
}
