/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/r/:slug*",
        destination: "/raids/:slug*",
        permanent: true,
      },
      {
        source: "/d/:slug*",
        destination: "/dungeons/:slug*",
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
