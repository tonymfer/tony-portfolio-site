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
      // Retired case slugs from the content restructure. Permanent (308): these
      // routes are gone for good — far.cards folded into Mint Club subProjects,
      // taptato-base-world split into the standalone taptato case.
      {
        source: "/objects/far-cards",
        destination: "/objects/mint-club",
        permanent: true,
      },
      {
        source: "/objects/taptato-base-world",
        destination: "/objects/taptato",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
