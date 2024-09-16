/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
