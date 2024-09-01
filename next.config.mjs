/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fantastic-goldfinch-696.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "superb-kookabura-710.convex.cloud"
        
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
