/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // GitHub Pages用の設定を環境変数で制御
  basePath: process.env.GITHUB_ACTIONS ? '/mypage2githubio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/mypage2githubio/' : '',
}

export default nextConfig
