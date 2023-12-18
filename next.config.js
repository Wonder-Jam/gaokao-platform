/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@nivo"],
    experimental: { esmExternals: "loose", },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    async rewrites() {
        return [
            {
              source: '/files/:path*', // 匹配所有以 /files 开头的路径
              destination: 'https://files.lsmcloud.top/:path*', // 代理到的目标地址
            },
            {
              source: '/api/:path*', // 匹配所有以 /files 开头的路径
              destination: 'https://gaokaoapi.lsmcloud.top/api/:path*', // 代理到的目标地址
            },
            {
              source: '/dev/:path*', // 匹配所有以 /files 开头的路径
              destination: 'https://localhost:3000/:path*', // 代理到的目标地址
            }
          ];
    },
    webpack(config){
      config.module.rules.push({
        test:/\.svg$/,
        use:["@svgr/webpack"]
      });
      return config;
    }
}
module.exports = nextConfig
