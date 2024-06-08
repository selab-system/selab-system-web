const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      //  /api 表示拦截以/api开头的请求路径
      '/api': {
        // 跨域的域名（不需要写路径）
        target: 'http://localhost:8080',
        // 是否代理websocked
        // ws:true
        // 是否开启跨域
        changeOrigin: true,
        // 是否将路径重写
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
