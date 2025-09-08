/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.myads.dev' },
      { protocol: 'https', hostname: 'myads.dev' },
    ],
  },
  experimental: {
    optimizePackageImports: ['next'],
  },
};
module.exports = nextConfig;
