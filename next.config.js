/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  nextConfig,
});
