import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,

  // Base path for GitHub Pages (update if using a project repository)
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
  },

  // Performance optimizations
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issue
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
