import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier/flat';

const config = [
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
];

export default config;
