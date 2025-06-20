const {
  defineConfig
} = require('@vue/cli-service')

const target = 'http://127.0.0.1:3000';

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}

// prefetch off.
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}