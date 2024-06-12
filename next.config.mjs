/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "chawkbazar.vercel.app",
        protocol: "https",
      },
      {
        hostname: "www.masterclass.com",
        protocol: "https",
      },
      {
        hostname: "source.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "images.ctfassets.net",
        protocol: "https",
      },
      {
        hostname: "d1vlg9gg7b1c14.cloudfront.net",
        protocol: "https",
      },
      //spotlightmedia.amanueld.info
    ],
  },
};

export default nextConfig;
