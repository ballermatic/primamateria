import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
};

export default async function config() {
  return withBundleAnalyzer(bundleAnalyzerConfig)(nextConfig);
}
