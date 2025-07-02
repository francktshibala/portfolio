import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds to avoid legacy config conflicts
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep TypeScript checking enabled but be less strict during builds
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
