const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://4nskux.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})



