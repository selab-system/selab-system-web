const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false
    },
    proxy: {
      //  /api 表示拦截以/api开头的请求路径
      '/api': {
        // 跨域的域名（不需要写路径）
        target: 'http://652tu6.natappfree.cc',
        // 是否代理websocked
        // ws:true
        // 是否开启跨域
        changeOrigin: true,
        // 是否将路径重写
        pathRewrite: {
          '/api': ''
          // 表示将路径中/api部分替换成''空字符串
        }
      }
    }
  }
})
