const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack'); // Añadir esta línea

module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
};