"use client"

import { useEffect, useMemo, useRef } from "react"

const RAW_MARKUP = `<a class="skip-link" href="#main">本文へ移動</a>
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="SORA ホーム"><img src="./assets/sora-logo.png" alt="SORA." /></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-button><span class="sr-only">メニューを開く</span><span></span><span></span></button>
      <nav id="site-nav" class="site-nav" aria-label="メインナビゲーション" data-menu>
        <a href="#works">WORKS</a><a href="#about">ABOUT</a><a href="#highlights">AWARDS</a><a href="#journey">JOURNEY</a><a class="nav-contact" href="#contact">CONTACT <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main id="main">
      <section id="top" class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy reveal">
          <p class="eyebrow">HELLO, I’M</p><h1 id="hero-title">SORA<span>.</span></h1><p class="hero-tagline">つくる、試す、届ける。</p>
          <p class="hero-description">エンジニアリング、デザイン、企画、リサーチ。<br />分野にとらわれず、好奇心を起点に<br />新しい価値を生み出すクリエイターです。</p>
          <div class="hero-actions"><a class="button button-primary" href="#works">WORKSを見る <span>→</span></a><a class="button button-outline" href="#about">私について知る</a></div>
        </div>
        <div class="hero-collage reveal" aria-label="SORAのプロジェクトと活動写真のコラージュ">
          <i class="blob blob-yellow" aria-hidden="true"></i><i class="blob blob-mint" aria-hidden="true"></i><i class="blob blob-pink" aria-hidden="true"></i>
          <figure class="photo-card hero-work" data-depth="1"><img src="./assets/spajam-work.jpg" alt="チームで制作に取り組む様子" /></figure>
          <figure class="photo-card hero-stage" data-depth="2"><img src="./assets/aws-stage.jpg" alt="イベントで登壇する様子" /><figcaption>AWARD &amp; TALK</figcaption></figure>
          <div class="phone phone-main" data-depth="3" aria-label="CIT Appの画面イメージ"><div class="phone-island"></div><p class="phone-time">9:41</p><strong>CIT App</strong><small>千葉工大生のための<br />キャンパスアプリ</small><div class="app-grid"><span>◫<b>時間割</b></span><span>⌖<b>教室検索</b></span><span>▣<b>バス時刻表</b></span><span>⌾<b>マップ</b></span></div></div>
          <div class="phone phone-side" data-depth="2" aria-label="ゆいの画面イメージ"><div class="phone-island"></div><p class="phone-time">9:41</p><strong>ゆい</strong><small>大切な人の健康を、<br />もっとそばに。</small><span class="gift">✦</span></div>
          <div class="trophy" aria-label="最優秀賞"><span>🏆</span><b>BEST<br />AWARD</b></div><div class="hero-note note-research">RESEARCH ↗</div><div class="hero-note note-spajam">SPAJAM<br />最優秀賞</div>
        </div>
      </section>

      <section id="about" class="section section-rule shell what" aria-labelledby="what-title">
        <div class="section-copy reveal"><p class="section-kicker">WHAT I DO <i></i></p><h2 id="what-title">枠をこえて、<br />価値をつくる。</h2><p>課題を見つけ、考え、形にし、届ける。<br />必要に応じて役割を変えながら、<br />人と一緒に価値の実現に向き合います。</p></div>
        <div class="what-visual reveal"><div class="what-photos"><img class="what-main" src="./assets/spajam-work.jpg" alt="メンバーと制作する様子" /><img class="what-sub" src="./assets/dicomo.jpg" alt="研究活動での一場面" /></div><ol class="process-steps" aria-label="制作プロセス"><li><span>⌕</span><b>見つける</b></li><i>→</i><li><span>♢</span><b>考える</b></li><i>→</i><li><span>&lt;/&gt;</span><b>形にする</b></li><i>→</i><li><span>◎</span><b>届ける</b></li></ol></div>
      </section>

      <section id="works" class="section section-rule shell works" aria-labelledby="works-title">
        <div class="section-copy reveal"><p class="section-kicker">SELECTED WORKS <i></i></p><h2 id="works-title">考えたことを、<br />形にしてきた。</h2><p>プロダクト開発、研究、地域・ヘルスケア、ハッカソンなど、さまざまなテーマで価値づくりに挑戦してきました。</p><a class="text-link" href="#work-list">すべての作品を見る <span>→</span></a></div>
        <div id="work-list" class="work-list">
          <article class="work-card work-featured reveal"><div class="work-art cit-art"><div class="mini-phone"><b>CIT App</b><span>時間割</span><span>教室検索</span><span>バス</span><span>マップ</span></div></div><div class="work-body"><span class="featured-label">FEATURED</span><h3>CIT App</h3><p>大学生活をもっと便利にする学生向けアプリ</p><div class="tags"><span>Product</span><span>Engineering</span></div></div><dl class="work-facts"><div><dt>ROLE</dt><dd>企画・開発・運用</dd></div><div><dt>RESULT</dt><dd><strong>3,000+</strong> ユーザー</dd></div></dl><span class="card-arrow">→</span></article>
          <div class="work-row">
            <article class="work-card reveal"><div class="work-art yui-art"><div class="mini-phone mint"><b>ゆい</b><span class="mini-gift">✦</span></div></div><div class="work-body"><h3>ゆい</h3><p>大切な人の健康を支えるきっかけをつくるサービス</p><div class="tags"><span>Design</span><span>Product</span></div></div><span class="card-arrow">→</span></article>
            <article class="work-card reveal"><div class="work-art image-art"><img src="./assets/spajam-work.jpg" alt="付箋を使ってアイデアを検討する様子" /></div><div class="work-body"><h3>SPAJAM 2024</h3><p>限られた時間で課題から体験までを形にしたハッカソン</p><div class="tags"><span>Hackathon</span><span>Team</span></div></div><span class="card-arrow">→</span></article>
          </div>
          <article class="work-card research-card reveal"><div class="work-art research-art"><img src="./assets/shibuji.jpg" alt="研究プロトタイプの画面" /></div><div class="work-body"><h3>受診行動に関する研究</h3><p>対話型AIで、受診をためらう背景の整理を支援する</p><div class="tags"><span>Research</span><span>AI</span></div></div><span class="card-arrow">→</span></article>
        </div>
      </section>

      <section id="journey" class="section section-rule shell create" aria-labelledby="create-title">
        <div class="section-copy reveal"><p class="section-kicker">HOW I CREATE <i></i></p><h2 id="create-title">まず飛び込む。<br />そこから考える。</h2><p>現場での気づきや、人との対話を大切にし、試しながらつくるのが私のスタイルです。</p></div>
        <div class="create-content reveal"><div class="photo-strip"><img src="./assets/portrait.jpg" alt="SORAのポートレート" /><img src="./assets/spajam-work.jpg" alt="チームで議論する様子" /><img src="./assets/aws-stage.jpg" alt="イベントで発表する様子" /></div><ul class="create-points"><li>現場に入り、リアルな課題を知る</li><li>アイデアを素早く試し、形にする</li><li>仲間と対話し、よりよいものに育てる</li></ul></div>
      </section>

      <section id="highlights" class="highlights shell reveal" aria-labelledby="highlights-title"><div class="highlight-title"><p>HIGHLIGHTS</p><h2 id="highlights-title">挑戦の数だけ、<br />学びがある。</h2></div><div class="highlight-stat"><strong>3,000<span>+</span></strong><p>CIT Appのユーザー数</p></div><div class="highlight-stat"><strong>30<span>+</span></strong><p>ハッカソン・プロジェクトへの参加</p></div><div class="award-list"><p><span>🏆</span> SPAJAM Dojo 2024 最優秀賞</p><p><span>🏆</span> DICOMO 2026 ヤングリサーチ賞</p></div></section>

      <section class="section shell beyond" aria-labelledby="beyond-title"><div class="section-copy reveal"><p class="section-kicker">BEYOND WORK <i></i></p><h2 id="beyond-title">つくることも、<br />人と出会うことも好きだ。</h2><p>ハッカソン、インターン、地域活動、コミュニティ運営など、さまざまな場での出会いや学びが、次の挑戦につながっています。</p></div><div class="beyond-photos reveal"><img src="./assets/life-collage.png" alt="SORAの活動をまとめたコラージュ" /><img src="./assets/spajam-team.jpg" alt="チームメンバーとの写真" /><img src="./assets/award.jpg" alt="最優秀賞の受賞記念写真" /></div></section>

      <section id="contact" class="contact shell reveal" aria-labelledby="contact-title"><h2 id="contact-title">次は、一緒に何をつくろう？</h2><p>インターン・プロジェクト・ちょっとした相談まで、<br />面白いことがあれば、ぜひお話ししたいです。</p><a class="button button-outline contact-button" href="#top">CONTACT <span>↗</span></a><div class="socials" aria-label="ソーシャルリンク"><span>in</span><span>●</span><span>𝕏</span></div></section>
    </main>
    <footer><img src="./assets/sora-logo.png" alt="SORA." /><p>© <span data-year></span> SORA</p></footer>`

const MOTION_GROUPS: Array<[string, number]> = [
  [".hero-work", -0.11],
  [".hero-stage", 0.09],
  [".phone-main", -0.07],
  [".phone-side", 0.12],
  [".trophy", -0.17],
  [".blob-yellow", 0.15],
  [".blob-mint", -0.1],
  [".blob-pink", 0.08],
  [".what-main", -0.055],
  [".what-sub", 0.09],
  [".work-card:nth-child(odd)", -0.018],
  [".work-card:nth-child(even)", 0.018],
  [".photo-strip img:nth-child(1)", -0.07],
  [".photo-strip img:nth-child(2)", 0.055],
  [".photo-strip img:nth-child(3)", -0.04],
  [".highlight-stat:nth-child(2)", -0.035],
  [".highlight-stat:nth-child(3)", 0.035],
  [".beyond-photos img:nth-child(1)", -0.07],
  [".beyond-photos img:nth-child(2)", 0.045],
  [".beyond-photos img:nth-child(3)", -0.055],
]

export default function SoraHome() {
  const rootRef = useRef<HTMLDivElement>(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const markup = useMemo(
    () => RAW_MARKUP.replaceAll("./assets/", `${basePath}/sora-home/`),
    [basePath],
  )

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const header = root.querySelector<HTMLElement>("[data-header]")
    const menuButton = root.querySelector<HTMLButtonElement>("[data-menu-button]")
    const menu = root.querySelector<HTMLElement>("[data-menu]")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const cleanups: Array<() => void> = []

    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false")
      menu?.classList.remove("is-open")
      const label = menuButton?.querySelector<HTMLElement>(".sr-only")
      if (label) label.textContent = "メニューを開く"
    }

    const syncHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24)
    syncHeader()
    window.addEventListener("scroll", syncHeader, { passive: true })
    cleanups.push(() => window.removeEventListener("scroll", syncHeader))

    const toggleMenu = () => {
      const open = menuButton?.getAttribute("aria-expanded") !== "true"
      menuButton?.setAttribute("aria-expanded", String(open))
      menu?.classList.toggle("is-open", open)
      const label = menuButton?.querySelector<HTMLElement>(".sr-only")
      if (label) label.textContent = open ? "メニューを閉じる" : "メニューを開く"
    }
    menuButton?.addEventListener("click", toggleMenu)
    cleanups.push(() => menuButton?.removeEventListener("click", toggleMenu))

    const menuLinks = [...(menu?.querySelectorAll<HTMLAnchorElement>("a") ?? [])]
    menuLinks.forEach((link) => link.addEventListener("click", closeMenu))
    cleanups.push(() => menuLinks.forEach((link) => link.removeEventListener("click", closeMenu)))

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", handleEscape)
    cleanups.push(() => window.removeEventListener("keydown", handleEscape))

    const revealItems = [...root.querySelectorAll<HTMLElement>(".reveal")]
    let observer: IntersectionObserver | undefined
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"))
    } else {
      revealItems.forEach((item) => {
        const bounds = item.getBoundingClientRect()
        item.classList.toggle(
          "is-visible",
          bounds.bottom > window.innerHeight * 0.04 &&
            bounds.top < window.innerHeight * 0.94,
        )
      })
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting)
          })
        },
        { rootMargin: "-4% 0px -6%", threshold: 0.08 },
      )
      revealItems.forEach((item) => observer?.observe(item))
      cleanups.push(() => observer?.disconnect())
    }

    const motionItems = MOTION_GROUPS.flatMap(([selector, speed]) =>
      [...root.querySelectorAll<HTMLElement>(selector)].map((element) => ({ element, speed })),
    )

    let ticking = false
    const updateScrollMotion = () => {
      const viewportCenter = window.innerHeight / 2
      motionItems.forEach(({ element, speed }) => {
        const bounds = element.getBoundingClientRect()
        const distance = bounds.top + bounds.height / 2 - viewportCenter
        const offset = Math.max(-34, Math.min(34, distance * speed))
        element.style.setProperty("--motion-y", `${offset.toFixed(2)}px`)
      })
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      root.style.setProperty("--scroll-progress", String(Math.min(1, window.scrollY / scrollable)))
      ticking = false
    }
    const requestScrollMotion = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateScrollMotion)
    }

    if (!reducedMotion) {
      motionItems.forEach(({ element }) => element.classList.add("scroll-motion"))
      updateScrollMotion()
      window.addEventListener("scroll", requestScrollMotion, { passive: true })
      window.addEventListener("resize", requestScrollMotion, { passive: true })
      cleanups.push(() => {
        window.removeEventListener("scroll", requestScrollMotion)
        window.removeEventListener("resize", requestScrollMotion)
      })
    }

    const collage = root.querySelector<HTMLElement>(".hero-collage")
    const layers = [...(collage?.querySelectorAll<HTMLElement>("[data-depth]") ?? [])]
    const handlePointerMove = (event: PointerEvent) => {
      if (!collage) return
      const bounds = collage.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 1)
        layer.style.setProperty("--pointer-x", `${x * depth * 7}px`)
        layer.style.setProperty("--pointer-y", `${y * depth * 7}px`)
      })
    }
    const resetPointer = () => {
      layers.forEach((layer) => {
        layer.style.setProperty("--pointer-x", "0px")
        layer.style.setProperty("--pointer-y", "0px")
      })
    }

    if (!reducedMotion && finePointer && collage) {
      collage.addEventListener("pointermove", handlePointerMove)
      collage.addEventListener("pointerleave", resetPointer)
      cleanups.push(() => {
        collage.removeEventListener("pointermove", handlePointerMove)
        collage.removeEventListener("pointerleave", resetPointer)
      })
    }

    const year = root.querySelector<HTMLElement>("[data-year]")
    if (year) year.textContent = String(new Date().getFullYear())

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      root.style.removeProperty("--scroll-progress")
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="sora-home"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}

