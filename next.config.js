/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production" 

const nextConfig = {
  output: "export",
  basePath: isProd ? "/dev-cartoon-network" : "",
  assetPrefix: isProd ? '/dev-cartoon-network/' : '',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
