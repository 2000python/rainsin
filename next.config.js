/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
module.exports = {
    reactStrictMode: true,
    optimizeFonts: false,
    images: {
      domains: ['rainsin-1305486451.file.myqcloud.com'],
  },
  async rewrites() {
    return [
        {
            source: '/blog/bindex/:path*',
            destination:'/blog/bindex'
        },
    ]
  },
}
        
