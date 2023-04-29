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
      {
        source: "/raid/:slug*",
        destination: "/raids/:slug*",
        permanent: true,
      },
      {
        source: "/dungeon/:slug*",
        destination: "/dungeons/:slug*",
        permanent: true,
      },
      {
        source: "/:path*/img",
        destination: "/images/:path*.jpg",
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
