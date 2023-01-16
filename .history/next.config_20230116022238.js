/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  _experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"],
  }
}
