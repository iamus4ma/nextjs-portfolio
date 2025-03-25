/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Use static export for compatibility with various hosting platforms
    output: 'export',
    // Disable image optimization for static export
    images: {
      unoptimized: true
    },
    // Ensure trailing slashes are consistent
    trailingSlash: false,
    // Disable source maps in production for smaller bundle size
    productionBrowserSourceMaps: false,
    // Add basePath if your site is not hosted at the root
    // basePath: '',
    // Disable powered by header
    poweredByHeader: false,
    // Ensure all links work correctly
    assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  };
  
  export default nextConfig;
  
  