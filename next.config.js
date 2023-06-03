/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['spoonacular.com'],
  },
}

module.exports = nextConfig
