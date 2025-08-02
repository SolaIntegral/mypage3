/** @type {import('next').NextConfig} */
const nextConfig = {
  // 最小限の設定のみ
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
