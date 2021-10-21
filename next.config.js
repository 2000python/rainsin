/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */

// module.exports = {
//   reactStrictMode: true,
//   optimizeFonts: false,
//   images: {
//     domains: ['rainsin-1305486451.cos.ap-nanjing.myqcloud.com'],
//   },
// }
const code = require('remark-code-screenshot')
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  remarkPlugins:[code]
    });
module.exports = withMDX({
              pageExtensions: ["js", "jsx", "md", "mdx"],
              reactStrictMode: true,
              optimizeFonts: false,
              images: {
                domains: ['rainsin-1305486451.cos.ap-nanjing.myqcloud.com'],
              },
})
        
