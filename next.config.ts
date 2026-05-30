import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/tech", destination: "/", permanent: true },
      { source: "/studio", destination: "/real-estate", permanent: true },
    ];
  },
};

export default nextConfig;
