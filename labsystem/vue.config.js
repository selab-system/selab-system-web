const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false
    },
    proxy: {
      '/api': {
        // 跨域的域名（不需要写路径）
        target: 'http://652tu6.natappfree.cc',
        // 是否代理websocked
        // ws:true
        // 是否开启跨域
        changeOrigin: true,
        // 是否将路径重写
        pathRewrite: {
          '^/api': ''
        }
      },
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
