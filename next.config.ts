/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/ourportfolio', // YOUR REPO NAME
  assetPrefix: '/ourportfolio/',
};

module.exports = nextConfig;
