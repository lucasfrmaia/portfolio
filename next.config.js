/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'istack.iium.edu.my',
      },
      {
        protocol: 'https',
        hostname: 'appmaster.io',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      }
    ],
  },
}

module.exports = nextConfig
