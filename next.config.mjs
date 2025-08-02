/** @type {import('next').NextConfig} */
const nextConfig = {
  // 基本的な設定のみ
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
