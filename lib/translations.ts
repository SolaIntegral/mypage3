export const translations = {
  ja: {
    // ナビゲーション
    nav: {
      home: 'ホーム',
      about: 'About',
      overview: 'Overview',
      reports: 'Reports',
      showcase: 'Showcase',
    },
    // ホームページ
    home: {
      title: '大浦 空',
      subtitle: 'Product Engineer with multifaceted perspectives',
      description: 'Creating new standards through challenges',
    },
    // Aboutページ
    about: {
      title: 'About Me',
      subtitle: 'Creating new standards through challenges',
      basicInfo: 'Basic Information',
      hometown: 'Hometown',
      current: 'Current',
      previous: 'Previous',
      futurePlans: 'Future Plans',
      interests: 'Interests',
      inspiredTitle: 'What Inspired Me to Become an Engineer',
      inspiredText: 'ガンダムのプラモデルを動かして戦うアニメを見て、その技術を作ってみたいと思ったこと。',
      careerTitle: 'Career Vision',
      careerText: 'Software Engineer → Product Managerというキャリアパスを目指し、数年後も使ってよかったと思えるプロダクトを開発できるエンジニア。',
      mottoTitle: 'Motto',
      mottoText: '"Success isn\'t about can or can\'t - it\'s about will or won\'t"',
      skillsTitle: 'Skills & Tech Stack',
      achievementsTitle: 'Development & Activity Achievements',
      goalsTitle: 'Future Challenges & Goals',
      brandTitle: 'My Brand',
      brandText: 'ロゴは「成長」と「挑戦」を象徴するデザイン。技術を駆使して新たな価値を生み出し、挑戦の先に新しい当たり前をつくる姿勢を表現しています。',
    },
    // Overviewページ
    overview: {
      title: 'Overview',
      subtitle: 'Continuous challenges create who I am',
      past: 'Past',
      now: 'Now',
      future: 'Future',
    },
    // Reportsページ
    reports: {
      title: 'Reports',
      subtitle: 'From challenges to achievements - Shining results and upcoming challenges',
      awards: 'Awards',
      ongoingProjects: 'Ongoing Projects',
      pastActivities: 'Past Activities',
    },
    // Showcaseページ
    showcase: {
      title: 'Showcase',
      subtitle: 'Applications I\'ve developed so far',
      tapHint: 'Tap app icons! ✨',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      overview: 'Overview',
      reports: 'Reports',
      showcase: 'Showcase',
    },
    // Home page
    home: {
      title: 'Sora Oura',
      subtitle: 'Product Engineer with multifaceted perspectives',
      description: 'Creating new standards through challenges',
    },
    // About page
    about: {
      title: 'About Me',
      subtitle: 'Creating new standards through challenges',
      basicInfo: 'Basic Information',
      hometown: 'Hometown',
      current: 'Current',
      previous: 'Previous',
      futurePlans: 'Future Plans',
      interests: 'Interests',
      inspiredTitle: 'What Inspired Me to Become an Engineer',
      inspiredText: 'Watching anime where Gundam plastic models move and fight made me want to create that technology.',
      careerTitle: 'Career Vision',
      careerText: 'Aiming for a career path from Software Engineer → Product Manager, becoming an engineer who can develop products that people will still find useful years later.',
      mottoTitle: 'Motto',
      mottoText: '"Success isn\'t about can or can\'t - it\'s about will or won\'t"',
      skillsTitle: 'Skills & Tech Stack',
      achievementsTitle: 'Development & Activity Achievements',
      goalsTitle: 'Future Challenges & Goals',
      brandTitle: 'My Brand',
      brandText: 'The logo symbolizes "growth" and "challenge." It represents the attitude of creating new value through technology and establishing new standards beyond challenges.',
    },
    // Overview page
    overview: {
      title: 'Overview',
      subtitle: 'Continuous challenges create who I am',
      past: 'Past',
      now: 'Now',
      future: 'Future',
    },
    // Reports page
    reports: {
      title: 'Reports',
      subtitle: 'From challenges to achievements - Shining results and upcoming challenges',
      awards: 'Awards',
      ongoingProjects: 'Ongoing Projects',
      pastActivities: 'Past Activities',
    },
    // Showcase page
    showcase: {
      title: 'Showcase',
      subtitle: 'Applications I\'ve developed so far',
      tapHint: 'Tap app icons! ✨',
    },
  },
} as const

export type TranslationKey = keyof typeof translations.ja 