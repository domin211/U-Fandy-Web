import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [320, 480, 640, 800, 1024]
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'data']
  },
  typescript: {
    ignoreBuildErrors: false
  }
};

export default withNextIntl(nextConfig);
