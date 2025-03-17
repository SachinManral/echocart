/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['echocartshop.netlify.app'],
  },
  swcMinify: true,
};

export default nextConfig;
