export default {
  title: "404出错啦",
  dva: {},
  proxy: {
    '/api': {
      target: "http://open.duyiedu.com",
      'changeOrigin': true,
    }
  }
}