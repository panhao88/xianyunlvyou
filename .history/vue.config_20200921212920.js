module.exports = {
  onsave
    devServer: {
      proxy: {
        '/api': {
          ws: false,
          target: 'http://localhost:1337',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    },
  } 