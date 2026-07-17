import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      { source: "/english/:path*", destination: "/en/:path*", permanent: true },
      { source: "/russian/:path*", destination: "/ru/:path*", permanent: true },
      { source: "/ua/:path*", destination: "/uk/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
