const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false
    },
    proxy: {
      // 用户
      '/api1': {
        target: 'http://rdumrj.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/api1': ''
        }
      },
      // 书籍
      '/api2': {
        target: 'http://7f35u6.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/api2': ''
        }
      }
    }
  }
})
