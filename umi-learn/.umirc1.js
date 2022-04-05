export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        { path: '/', component: './index.js', title: '首页', wrappers: ["@/routes/HandleTitle.js"] },
        { path: '/login', component: './login.js', title: '登录页', wrappers: ["@/routes/HandleTitle.js"] },
        {
          path: '/welcome', component: './welcome.js', title: '欢迎页',
          wrappers: ["@/routes/PrivateRoute.js", "@/routes/HandleTitle.js"]
        },
      ]
    }
  ]
}