/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@nivo"],
    experimental: { esmExternals: "loose", },
    async rewrites() {
        return [
            {
              source: '/files/:path*', // 匹配所有以 /files 开头的路径
              destination: 'https://files.lsmcloud.top/:path*', // 代理到的目标地址
            },
          ];
    },
}

module.exports = nextConfig
