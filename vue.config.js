const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.0.159:8080/task/', // 代理到的后端服务器地址
        changeOrigin: true, // 启用跨域
        pathRewrite: {
          '^/api': '' // 重写请求路径，将'/api'删除
        }
      }
    }
  }
})
