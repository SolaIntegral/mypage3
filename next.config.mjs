const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS)
const basePath = isGitHubPages ? '/mypage3' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        trailingSlash: true,
        skipTrailingSlashRedirect: true,
      }
    : {}),
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
  // GitHub Pages用の設定を環境変数で制御（VercelではbasePathなし）
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
