/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  _experimental: {
    appDir: true
  },
  get experimental() {
    return this._experimental;
  },
  set experimental(value) {
    this._experimental = value;
  },
}
