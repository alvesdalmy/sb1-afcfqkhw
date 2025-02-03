/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: false,
};

module.exports = nextConfig;