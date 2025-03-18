/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['echocartshop.netlify.app'],
  },
  swcMinify: true,
  
  async redirects() {
    return [
      {
        source: '/signin',
        destination: '/login',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
