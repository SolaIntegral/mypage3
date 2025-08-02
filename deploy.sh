#!/bin/bash

echo "🚀 デプロイを開始します..."

# 依存関係のインストール
echo "📦 依存関係をインストール中..."
npm install --legacy-peer-deps

# ビルド
echo "🔨 ビルド中..."
npm run build

echo "✅ ビルド完了！"
echo ""
echo "📁 ビルドされたファイル: dist/"
echo ""
echo "🌐 デプロイ方法:"
echo "1. Vercel: https://vercel.com"
echo "2. Netlify: https://netlify.com"
echo "3. Cloudflare Pages: https://pages.cloudflare.com"
echo ""
echo "📋 手順:"
echo "1. 上記のサービスにサインアップ"
echo "2. GitHubリポジトリを接続"
echo "3. 自動デプロイが開始されます" 