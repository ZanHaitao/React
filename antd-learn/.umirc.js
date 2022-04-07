export default {
  title: "404出错啦",
  dva: {},
  proxy: {
    '/api/upload': {
      target: " http://101.132.72.36:5100",
      changeOrigin: true
    },
    '/api': {
      target: "http://open.duyiedu.com",
      changeOrigin: true,
    }
  },
  "theme": {
    "primary-color": "#008c8c",
  },
}