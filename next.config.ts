import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/objects/hunt-mintclub",
        destination: "/objects/mint-club",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
