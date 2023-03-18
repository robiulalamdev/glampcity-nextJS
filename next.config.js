/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "i.ibb.co",
        port: '3000',
        pathname: '/product/list',
      },
    ],
  },
}

module.exports = nextConfig
