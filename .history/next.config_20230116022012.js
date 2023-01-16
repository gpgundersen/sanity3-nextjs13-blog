/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  _experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"]
  }
  get experimental() {
    return this._experimental;
  },
  set experimental(value) {
    this._experimental = value;
  },
}
