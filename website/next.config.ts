import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES === 'true' ? '/WoT' : '',
  typedRoutes: true,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
