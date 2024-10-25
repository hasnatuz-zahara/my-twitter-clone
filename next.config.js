/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "help.twitter.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
};

module.exports = nextConfig
