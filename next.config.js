/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lamborghini.com',
        pathname: '/sites/it-en/files/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'stimg.cardekho.com',
      }
    ],
  },
}

module.exports = nextConfig
