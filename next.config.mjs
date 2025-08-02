/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelデプロイ用に静的エクスポートを無効化
  // output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
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
  // GitHub Pagesのサブパス対応（Vercelでは無効）
  basePath: '',
  assetPrefix: '',
}

export default nextConfig
