/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.nasa.gov", "apod.nasa.gov", "earthengine.googleapis.com"],
  },
}

module.exports = nextConfig
