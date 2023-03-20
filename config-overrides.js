const { override, addLessLoader, adjustStyleLoaders, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        //   modifyVars: { "@primary-color": "#13c2c2" },
      },
    }),
    // ↓加了这么个配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options
      postcss.options = { postcssOptions }
    })
  ),
}
