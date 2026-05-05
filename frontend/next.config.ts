import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: '/login',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'sb-auth-token',
            value: undefined,
          },
        ],
      },
      {
        source: '/dashboard/:path*',
        destination: '/login',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'sb-auth-token',
            value: undefined,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
