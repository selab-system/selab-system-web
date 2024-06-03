const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'https://dd8sns.natappfree.cc',
=======
        // target: 'http://8ushwx.natappfree.cc',
        target: 'http://xpx7i8.natappfree.cc',
>>>>>>> 3eae07a31f0a734689318226934f4a54bdae373e
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})



