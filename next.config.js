/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: 'https://retirementjourney.vercel.app',
        permanent: false,
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://retirementjourney.vercel.app/:path*',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig

