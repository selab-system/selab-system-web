const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: 'localhost',
    // post: '8080',
    client: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: ' http://4nskux.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
})
