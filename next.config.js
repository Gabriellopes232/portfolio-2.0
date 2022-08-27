/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
