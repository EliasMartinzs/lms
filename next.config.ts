import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "elias-lms.fly.storage.tigris.dev",
      },
    ],
  },
};

export default nextConfig;
