module.exports = {
    devServer: {
      proxy: {
        '/api': {
          ws: false,
          target: '',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    },
  } 