const {
    override,
    addLessLoader,
    adjustStyleLoaders,
} = require("customize-cra");
  
  module.exports = {
    webpack: override(
      addLessLoader({
        lessOptions: {
          javascriptEnabled: true,
        //   modifyVars: { "@primary-color": "#13c2c2" },
        },
      }),
      // ↓加了这么个配置
      adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
      }),
    ),
  };