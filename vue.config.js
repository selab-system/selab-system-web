const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: ' http://iwupxc.natappfree.cc', // 代理到的后端服务器地址
        changeOrigin: true, // 启用跨域
        pathRewrite: {
          '^/api': '' // 重写请求路径，将'/api'删除
        }
      }
    }
  }
})
