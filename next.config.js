/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "www.biography.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
