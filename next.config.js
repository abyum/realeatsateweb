/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-ebroker.thewrteam.in",
        // port: '',
        pathname: "**",
        // search: '',
      }
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
