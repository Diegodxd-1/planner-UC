import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'",
          },
        ],
      },
    ];
  },
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
