const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      //  /api 表示拦截以/api开头的请求路径
      '/api': {
<<<<<<< HEAD
        target: 'http://10.0.0.159:8080',
=======
        // 跨域的域名（不需要写路径）
        target: ' http://iwgtg8.natappfree.cc',
        // 是否代理websocked
        // ws:true
        // 是否开启跨域
>>>>>>> bd96e1277deda7a26edef7002422fb6ceb04e994
        changeOrigin: true,
        // 是否将路径重写
        pathRewrite: {
<<<<<<< HEAD
          '^/api': '/'
=======
          '/api': ''
          // 表示将路径中/api部分替换成''空字符串
>>>>>>> bd96e1277deda7a26edef7002422fb6ceb04e994
        }
      }
    }
  }
})
