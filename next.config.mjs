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
  // GitHub Pagesのサブパス対応
  basePath: process.env.NODE_ENV === 'production' ? '/mypage2githubio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mypage2githubio' : '',
}

export default nextConfig
