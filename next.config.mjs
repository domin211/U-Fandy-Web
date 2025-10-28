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
  i18n: {
    locales: ['cs', 'en', 'pl', 'de', 'sk'],
    defaultLocale: 'cs'
  },
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

export default nextConfig;
