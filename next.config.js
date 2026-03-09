/** @type {import('next').NextConfig} */

// Configure base path for GitHub Pages
// Change 'Aura_website' to your repository name
const repoName = process.env.REPO_NAME || 'Aura_website'
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix for GitHub Pages deployment
  // Remove these lines if deploying to a custom domain
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
}

module.exports = nextConfig
